let centerbutton = document.getElementById("centerbutton");
centerbutton.addEventListener("click", centerlogic);

function centerlogic() {
    let centerdiv = document.getElementById("centerdiv");
    
    let centerdivState = centerdiv.style.display;
    if(centerdivState == "block") {
        centerdivState = "none";
    }
    else {
        centerdivState = "block";
    }
}
