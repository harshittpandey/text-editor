      document.getElementsByClassName("tablink")[0].click();
      var modal = document.getElementById("id01");
      function openModal(evt, Name) {
        var i, x, tablinks;
        x = document.getElementsByClassName("modal");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablinks[i].classList.remove("w3-light-grey");
        }
        document.getElementById(Name).style.display = "block";
        evt.currentTarget.classList.add("w3-light-grey");
      }

      window.onclick = function(event) 
      {
          if (event.target == modal)
           {
              modal.style.display = "none";
          }
      }


// up-down arrow
     var view = 0;
     function runme()
      {
        if(view == 0)
          {
            document.getElementById("button").style.top = "0px";
            document.getElementById("window").style.height = "300px";
            // Code for Safari
            document.getElementById("up").style.WebkitTransform = "rotate(180deg)"; 
            // Code for IE9
            document.getElementById("up").style.msTransform = "rotate(180deg)"; 
            // Standard syntax
            document.getElementById("up").style.transform = "rotate(180deg)"; 
            // document.getElementById("up").style.display = "none";
            // document.getElementById("down").style.display = "block";
            view =1;
          }
        else
        {
          document.getElementById("button").style.top = "-80px";

            document.getElementById("window").style.height = "120px";
          // Code for Safari
            document.getElementById("up").style.WebkitTransform = "rotate(0deg)"; 
            // Code for IE9
            document.getElementById("up").style.msTransform = "rotate(0deg)"; 
            // Standard syntax
            document.getElementById("up").style.transform = "rotate(0deg)"; 
            
          view= 0;
        }
      }