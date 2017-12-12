function execItalic()
        {
           if(italic==0){
             document.getElementById('italic1').style.border="0.1px solid #d3d3d3";
              italic=1;
            }
           else
           {
           document.getElementById('italic1').style="none";
            italic=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('italic', false, null);
        }
