function execJustifyl()
        {
           if(justifyLeft==0){
             document.getElementById('justifyLeft1').style.border="1px solid black";
              justifyLeft=1;
            }
           else
           {
           document.getElementById('justifyLeft1').style="none";
            justifyLeft=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('justifyLeft', false, null);
        }