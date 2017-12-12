 function execStrike()
        {
           if(strikeThrough==0){
             document.getElementById('strikeThrough1').style.border="0.1px solid #d3d3d3";
              strikeThrough=1;
            }
           else
           {
           document.getElementById('strikeThrough1').style="none";
            strikeThrough=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('strikeThrough', false, null);
        }