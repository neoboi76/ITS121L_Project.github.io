/*  document.getElementById('search-btn').addEventListener('click', function () {
  document.getElementById('search-form').style.display = 'block';
}); */


const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
let sideClose = document.getElementById('sideClose');
let cart = document.querySelector('.cart');

document.querySelectorAll('.cart-btn').forEach((cartBtn) => {

  let timeoutId;

  cartBtn.addEventListener('click', function() {

      clearTimeout(timeoutId);

      let productCard = cartBtn.closest('.card');
      let addMsg = productCard.querySelector('.add-msg');
      
      if (addMsg) {
          addMsg.innerHTML = "<strong>Added To Cart</strong>";
          let cartNum = productCard.querySelector('.items');
          cart.innerText = parseInt(cart.innerText) + parseInt(cartNum.value);
      }


      timeoutId = setTimeout(() => {
          if (addMsg) {
              addMsg.innerHTML = "";
          }
      }, 2000);

  });

});


/* Opens menu */
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
    document.body.classList.toggle('menu-open');
    sideClose.innerHTML = `<span style="color: rgba(101, 42, 24, 1);" class="close-btn" onclick="closeMenu()"><strong>X CLOSE</strong></span>`;
});


/* Closes menu */
sideClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
    document.body.classList.remove('menu-open');
    sideClose.innerHTML = `<span style="color: rgba(101, 42, 24, 1); border: 3px solid rgba(101, 42, 24, 1);" class="close-btn" onclick="closeMenu()"><strong>X CLOSE</strong></span>`;
});

