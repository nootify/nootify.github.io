/* eslint-env browser */
(function () {
    "use strict";

    function dynamicUpdate() {
        var dynamicText = document.getElementById("dynamictext");

        if (dynamicText.style.display === "block") {
            dynamicText.style.display = "none";
        } else {
            dynamicText.style.display = "block";
        }
    }

    var dynamicButton = document.getElementById("dynamicbutton");
    document.addEventListener("DOMContentLoaded", dynamicUpdate);
    dynamicButton.addEventListener("click", dynamicUpdate);

    dynamicUpdate();
}());