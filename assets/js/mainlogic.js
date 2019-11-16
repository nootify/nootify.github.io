/*global document, console, alert */
/* eslint no-console: "off" */
(function () {
    "use strict";

    function centerlogic() {
        var centerdiv = document.getElementById("centerdiv");

        if (centerdiv.style.display === "block") {
            centerdiv.style.display = "none";
        } else {
            centerdiv.style.display = "block";
        }
    }

    var centerbutton = document.getElementById("centerbutton");
    document.addEventListener("DOMContentLoaded", centerlogic);
    centerbutton.addEventListener("click", centerlogic);

    // centerlogic();
}());
