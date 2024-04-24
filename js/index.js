/*  document.getElementById('search-btn').addEventListener('click', function () {
      document.getElementById('search-form').style.display = 'block';
    }); */

    let iconBtn = document.getElementById('icon-menu');
    

    iconBtn.addEventListener('click', function() {


      if (iconBtn.innerText == "X") {

        iconBtn.innerText = " ";
        iconBtn.classList.add("navbar-toggler-icon");
        } 

        else {
          iconBtn.innerText = "X";
          iconBtn.classList.remove("navbar-toggler-icon");
        }

    })

    document.querySelectorAll('.cart-btn').forEach((cartBtn) => {

        cartBtn.addEventListener('click', function() {

            if (cartBtn.innerText === "Add To Cart") {
              cartBtn.innerText = "Added To Cart";
              cartBtn.classList.add('btn-added');
            }
      
            else {
              cartBtn.innerText = "Add To Cart";
              cartBtn.classList.remove('btn-added');
            }
      
          })
          
    })
