
  function colorme(choice) {
  	var set = document.getElementById('colorme');
  	set.style.background = "#"+choice;
  	var colort = "#" + choice;
  	// console.log(colort); 
  	// execCommandWithArg(,'colort');
  	textfield.document.execCommand('foreColor', false, colort);
}

  function colorme1(choice1) {
  	var set1 = document.getElementById('colorme1');
  	set1.style.background = "#"+choice1;
  	var colort1 = "#" + choice1;
  	// console.log(colort); 
  	// execCommandWithArg(,'colort');
  	textfield.document.execCommand('hiliteColor', false, colort1);
}
  
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

