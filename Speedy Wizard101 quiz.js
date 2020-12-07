/* global jQuery */
// ==UserScript==
// @name         Speedy Wizard101 Quiz
// @namespace    http://tampermonkey.net/
// @version      1.0
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

})();