
/** below code adds the input to the display box */
function add(inbox) {
    document.getElementById("inputDisplay").value += inbox;
}

/** Code below computes the values inside of the display box */
function equals() {
    if (document.getElementById("inputDisplay").value == 0) {
        document.getElementById("inputDisplay").value = " ";
    } else {
        document.getElementById("inputDisplay").value = eval(document.getElementById("inputDisplay").value)
    }
}


/** Code below clears everything inside the display box */
function erase() {
    document.getElementById("inputDisplay").value = " ";
}

/** End of calculator code */




