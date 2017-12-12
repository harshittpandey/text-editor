 function execBold()
        {
           if(bold==0){
             document.getElementById('bold1').style.border="0.1px solid #d3d3d3";
              bold=1;
            }
           else
           {
           document.getElementById('bold1').style="none";
            bold=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('bold', false, null);
        }