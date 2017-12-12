 function zooM(){
        var slidevalue=document.getElementById('slidebar').value;
        var currentzoom=1.1+(slidevalue/100.0);
        $('#editor2').css("zoom",currentzoom);
        $("#editor2").css("-moz-transform-origin", "0 0");
     }