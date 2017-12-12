
var bold=0,italic=0,underline=0,strikeThrough=0,justifyLeft=0,justifyCenter=0,justifyRight=0,justifyFull=0,subscript=0,superscript=0,insertUnorderedList=0,insertOrderedList=0;
        var showing = false;
        var EditMode = true; 
      	function enableEditMode () {
      		textfield.document.designMode ='On';
      	}
  
        function toggleEdit () {
        	if (EditMode) {
        		textfield.document.designMode ='Off';
        		EditMode =false;
        	}
        	else
        	{
        	textfield.document.designMode ='On';
        		EditMode =true;
        		
        	}
        }