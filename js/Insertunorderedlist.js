function execInsu()
        {
           if(insertUnorderedList==0){
             document.getElementById('insertUnorderedList1').style.border="1px solid black";
              insertUnorderedList=1;
            }
           else
           {
           document.getElementById('insertUnorderedList1').style="none";
            insertUnorderedList=0;
           } 
          document.getElementsByName("textfield")[0].contentWindow.document.body.focus();
          textfield.document.execCommand('insertUnorderedList', false, null);
        }