
//parralax
$(document).ready(function(){
  function paralaxe(){
    if($(window).width() > 768){
      $('.paralaxe').each(function(){
        // Referência a imagem de cada ".paralaxe"
        var $imagem = $(this);

        $(window).scroll(function() {
          var formula = -($(window).scrollTop() / $imagem.data('velocidade-desktop'));
          // 50% significa que a imagem estará centralizada horizontalmente
          var posicao = '50% '+ formula + 'px';
          // Aplicação da posição no elemento
          $imagem.css('background-position', posicao );
        }); 
      });
    } else {
      $('.paralaxe').each(function(){
        var $imagem = $(this);

        $(window).scroll(function() {
          // Agora passamos o "data-velocidade-mobile" aqui
          var formula = -($(window).scrollTop() / $imagem.data('velocidade-mobile'));
          var posicao = '50% '+ formula + 'px';
          $imagem.css('background-position', posicao );
        }); 
      }); 
    };
  };

  paralaxe();
  $(document).resize(paralaxe);
});

//materializeBox
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//slider
$(document).ready(function(){
      $('.slider').slider();
    });

/* Close/hide the sidenav */
$(".button-collapse").sideNav();

function closeNav() {
   $('.button-collapse').sideNav('hide');
}


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});