window.addEventListener("scroll", function(){
      var header = document.querySelector("nav");
      header.classList.toggle("dropek", window.scrollY  > 60)
      })


      