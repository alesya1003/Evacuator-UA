$(function(){


    

    $(".reviews__star").rateYo({
        starWidth: "14px",
        rating: 5,
        ratedFill: "#FFDF49",
        spacing: "5px"
      });

      $('.reviews__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              infinite: true,
            }
          },
        ]
      });

      $('.language-ru').click(function(){
        $(this).css('color', '#fff');
      })
      $('.language-ua').click(function(){
        $(this).css('color', '#000');
      })




      $('.menu__btn').on('click', function(){
        $('.header__menu').slideToggle();
    });


    $('.open-popup-link').magnificPopup({
      // type:'inline',
      // midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
   


    //  мой код
    // let maps__table_parent = document.querySelectorAll(".maps__table_parent");

    // for(let i = 0;i<maps__table_parent.length;i++){
    //       maps__table_parent[i].onclick = showtable;
    // }


    // function showtable(){
    //   let maps__submenu_list = document.querySelector(".maps__submenu-list");
    //   if(maps__submenu_list.style.display == "flex"){
    //     maps__submenu_list.style.display = "none"
    //     maps__submenu_list.classList.remuve("maps__submenu-list-active");
    //   }else{ 
    //      maps__submenu_list.style.display = "flex";
    //     maps__submenu_list.classList.add("maps__submenu-list-active");
    //   }
      
     
    // }

    
    

    
      



});