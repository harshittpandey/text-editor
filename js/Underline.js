function execUnderline()
        {
           if(underline==0){
             document.getElementById('underline1').style.border="0.1px solid #d3d3d3";
              underline=1;
            }
           else
           {
           document.getElementById('underline1').style="none";
            underline=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('underline', false, null);
        }