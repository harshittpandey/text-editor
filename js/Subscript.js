function execSub()
        {
           if(subscript==0){
             document.getElementById('subscript1').style.border="1px solid black";
              subscript=1;
            }
           else
           {
           document.getElementById('subscript1').style="none";
            subscript=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('subscript', false, null);
        }