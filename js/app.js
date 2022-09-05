const mainHead = document.querySelector( '.main-head' );
const showcase = document.querySelector( '.showcase' );
const toggler = document.querySelector( '.toggler' );
toggler.addEventListener( 'click', function(){
    mainHead.classList.toggle( 'active' );
    showcase.classList.toggle( 'width' );
} )