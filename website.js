$(document).ready(function(){
    $(".login").hide();
    $(".register_li").addClass("active");
    $(".login_li").click(function(){
        $(this).addClass("active");
        $(".register_li").removeClass("active");
        $(".login").show();
        $(".register").hide();
    });
    $(".register_li").click(function(){
        $(this).addClass("active");
        $(".login_li").removeClass("active");
        $(".register").show();
        $(".login").hide();
    });
});

$(document).ready(function(){
    let myData = [];

    $('#action-form').submit (function(event){
        event.preventDefault();

        let Username = $('#Username').val();
        let Email = $('#Email').val();
        let Password = $('#Password').val();

        myData.push({
            Username: Username,
            Email: Email,
            Password: Password
        });
        console.log(myData);

        $('#Username').val('');
        $('#Email').val('');
        $('#Password').val('');
    });
});



var swiper = new Swiper(".slide-contant", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    autoplay: {
        delay: 3000 
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
