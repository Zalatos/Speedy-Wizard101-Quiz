/* global $ */
// ==UserScript==
// @name         Speedy Wizard101 Quiz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Revise wizard101. quiz to make it faster to do the quiz
// @author       Zalatos
// @match        https://www.wizard101.com/quiz/trivia/game*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.debug("on wizard101 quiz");
    var ZalatosWizard101QuizEnhancer = () => {
        console.debug("script to remove fade in running");
        //find answer boxes
        let answers = document.getElementsByClassName("answer");
        for (var i in answers ){
            if(typeof answers[i].classList !== "undefined"){
                console.debug("attempting to remove fadein from answer: " + answers[i].innerText);
                answers[i].classList.remove("fadeIn");
                console.debug(answers[i].classList);
            }
        }
    }
    if (typeof $ === "undefined"){
        setTimeout(ZalatosWizard101QuizEnhancer,400);
    }
    else {
        $(ZalatosWizard101QuizEnhancer);
        $(()=>{console.debug("executed fadeIn removal script with jquery")});
    }
})();