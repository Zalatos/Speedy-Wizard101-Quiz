/* global jQuery,selectQuizAnswer,a */
// ==UserScript==
// @name         Speedy Wizard101 Quiz
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Revise wizard101. quiz to make it faster to do the quiz
// @author       Zalatos
// @match        https://www.wizard101.com/quiz/trivia/game*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.debug("on wizard101 quiz");
    var ZalatosWizard101QuizEnhancer = () => {
        //show answers imeddiately
        jQuery(".answer").css("visibility", "visible");
        //show next button immediately
        jQuery("button").css("visibility", "visible");

        //make checkbox click area apply to entire box not just check box
        jQuery(".answer").click(()=>{
            //use built in function to select item
            selectQuizAnswer(jQuery(this).find('.largecheckbox').get(0));
        })
    }
        jQuery(ZalatosWizard101QuizEnhancer);
        jQuery(()=>{console.debug("Speedy Wizard101 Quiz")});

    //revise fadeIn css class to prevent it from fadeing out suddenly
    //will addd the style script to the head so retrieve the head
    let htmlHead = document.getElementsByTagName("head")[0];

    //create the style text override
    let revisedFadeStyle = ".fadeIn { animation: fadeIn 0s ease-out !important }";
    let styleEle = document.createElement("style");
    styleEle.innerHTML = revisedFadeStyle;
    htmlHead.appendChild(styleEle);

    //override built in function for selecting quiz answer
    selectQuizAnswer = function(j) {
        if(localStorage.getItem("selectionInProgress") === "false") { //Quiz enhancement code
            localStorage.setItem("selectionInProgress", true); //Quiz enhancement code
            var k = a.getElementsByClassName("answerBox");
            for (var h = 0; h < k.length; h++) {
                if (k[h].children[0] === j) {
                    k[h].children[0].className = "largecheckboxselected";
                    k[h].children[1].checked = "checked"
                } else {
                    k[h].children[0].className = "largecheckbox";
                    k[h].children[1].checked = ""
                }
            }
            //change the value after this cpu clock cycle.
            //this is to overcome the function running twice when using the actual checkbox for selection purposes
            setTimeout(()=>{localStorage.setItem("selectionInProgress", false)},1); //Quiz enhancement code
        }
    };
})();