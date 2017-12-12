 function execJustifyc()
        {
           if(justifyCenter==0){
             document.getElementById('justifyCenter1').style.border="1px solid black";
              justifyCenter=1;
            }
           else
           {
           document.getElementById('justifyCenter1').style="none";
            justifyCenter=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('justifyCenter', false, null);
        }