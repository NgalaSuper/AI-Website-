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

function message() {
  var Name = document.getElementById('Username');
  var email = document.getElementById('Email');
  var psw = document.getElementById('Password');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');
  if ( Name.value === '' || email.value === ' ' || psw.value === ' '){
    danger.style.display = 'block';
  }else {
    setTimeout(() => {
      Name.value = '';
      email.value = '';
      psw.value = '';
    }, 2000);
    success.style.display = 'block';
  }
  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 4000 );
}
function messageLogin() {
  var emaillogin = document.getElementById('emaili-login');
  var pswlogin = document.getElementById('psw-login');
  const successlogin = document.getElementById('successlogin');
  const dangerlogin = document.getElementById('dangerlogin');
  if ( emaillogin.value === '' || pswlogin.value === ''){
    dangerlogin.style.display = 'block';
  }else {
    setTimeout(() => {
      emaillogin.value = '';
      pswlogin.value = '';
    }, 2000);
    successlogin.style.display = 'block';
  }

    setTimeout(() => {
      dangerlogin.style.display = 'none';
      successlogin.style.display = 'none';
    }, 4000 );
}


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
