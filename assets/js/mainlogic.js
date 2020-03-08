/* eslint-env browser, commonjs, es6, jquery */
/*jslint
    browser: true
*/
/*global
    $, jQuery
*/

(function () {
    "use strict";
    // SPOILERS!!! LOOK AWAY!!!
    var text_list = ["This place is pretty empty.",
                     "...",
                     "I haven't really added much.",
                     "...",
                     "...but I figured it was better...",
                     "...to make it less static-y.",
                     "...",
                     "...",
                     "...",
                     "Umm...",
                     "Well, this is awkward.",
                     "...",
                     "...",
                     "Stop clicking on that button.",
                     "...",
                     "Please...?",
                     "...",
                     "Pretty please...?",
                     "...",
                     "...",
                     "Welp.",
                     "...",
                     "It was worth a shot.",
                     "...",
                     "...",
                     "...",
                     "Alright.",
                     "...",
                     "...",
                     "...",
                     "You're just going to keep clicking away.",
                     "Aren't ya?",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "Wow.",
                     "You're REALLY determined.",
                     "There isn't anything else to see.",
                     "I promise.",
                     "Really.",
                     "Truly.",
                     "It is 100% the truth.",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "...",
                     "I don't mean to sound rude, but...",
                     "Don't you have anything better to do?",
                     ""];
    
    document.addEventListener('DOMContentLoaded', function () {
        // Get important elements in the HTML
        var dynamicButton = document.getElementById('dynamicbutton');
        var dynamicText = document.getElementById('dynamictext');
        var textHolder = document.getElementById('holder');
        
        // Since style.display can only retrieve attribute done by JS, not CSS
        textHolder.style.display = 'none';
        
        // Hide button from visitors until it is completed
        // dynamicButton.style.display = 'none';
        
        dynamicButton.addEventListener('click', function () {
            var essentials = 3;
            
            // Show text as shown in HTML first
            if (textHolder.style.display === 'none') {
                textHolder.style.display = 'block';
            } else {
                if (text_list.length > essentials) {
                    var current_text = text_list.shift();
                    dynamicText.textContent = current_text;

                    // stops speedrunning by disabling the button
                    dynamicButton.disabled = true;
                    setTimeout(function () {
                        dynamicButton.disabled = false;
                    }, 1000);
                } else {
                    dynamicButton.style.display = 'none';
                    
                    // Plays the ending sequence
                    var sequence = 0;
                    var endingSequence = setInterval(function () {
                        sequence += 1;
                        if (sequence === essentials) {
                            clearInterval(endingSequence);
                        }
                        dynamicText.textContent = text_list.shift();
                    }, 4000);
                }
            }
        });
    });

//    $(document).ready(function () {
//        $("#dynamicbutton").hide();
//        
//        // Helper function to play ending sequence
//        function end() {
//            $("#dynamictext").delay(4000).queue(function (next) {
//                $(this).html(text_list.shift());
//                next();
//            });
//        }
//        
//        $("#dynamicbutton").click(function () {
//            var $this = $(this),
//                essentials = 3,
//                sequence;
//            
//            if ($("#dynamictext").is(":hidden")) {
//                $("#dynamictext").show();
//            } else {
//                if (text_list.length > essentials) {
//                    $("#dynamictext").html(text_list.shift());
//                    
//                    // stops speedrunning by disabling the button
//                    $this.prop('disabled', true);
//                    setTimeout(function () {
//                        $this.prop('disabled', false);
//                    }, 1000);
//                } else {
//                    $("#dynamicbutton").hide();
//                    // Plays the ending sequence
//                    for (sequence = 0; sequence < essentials; sequence += 1) {
//                        end();
//                    }
//                }
//            }
//        });
//    });
}());