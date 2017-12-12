function execSup()
        {
           if(superscript==0){
             document.getElementById('superscript1').style.border="1px solid black";
              superscript=1;
            }
           else
           {
           document.getElementById('superscript1').style="none";
            superscript=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('superscript', false, null);
        }