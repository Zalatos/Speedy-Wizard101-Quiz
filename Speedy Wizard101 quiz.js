/* global jQuery */
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
        //find answer boxes
        console.debug("attempting to remove fadeIn from " + jQuery(".answer").length + " answers");
        jQuery(".answer").removeClass("fadeIn");
        console.debug("number of answers with fadeIn class remaining: " + jQuery(".fadeIn").length);
    }
        jQuery(ZalatosWizard101QuizEnhancer);
        jQuery(()=>{console.debug("executed fadeIn removal script with jquery")});

    //method2
    //revise fadeIn css class
    //will addd the style script to the head so retrieve the head
    let htmlHead = document.getElementsByTagName("head")[0];

    //create the style text override
    let revisedFadeStyle = ".fadeIn { animation: fadeIn 0s ease-out !important }";



})();