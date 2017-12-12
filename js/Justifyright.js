function execJustifyr()
        {
           if(justifyRight==0){
             document.getElementById('justifyRight1').style.border="1px solid black";
              justifyRight=1;
            }
           else
           {
           document.getElementById('justifyRight1').style="none";
            justifyRight=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('justifyRight', false, null);
        }
