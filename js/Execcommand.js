function exec (command) { 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
      		textfield.document.execCommand(command, false, null);
      	}
        
        function execCommandWithArg(command, arg) {
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
        textfield.document.execCommand(command, false, arg);	
        }