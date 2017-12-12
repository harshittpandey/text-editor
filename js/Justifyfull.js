function execJustifyf()
        {
           if(justifyFull==0){
             document.getElementById('justifyFull1').style.border="1px solid black";
              justifyFull=1;
            }
           else
           {
           document.getElementById('justifyFull1').style="none";
            justifyFull=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('justifyFull', false, null);
        }