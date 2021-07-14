// Mobile menu
$('.mobile-menu_button').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  
  $('.close-menu').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  
  $('.mobile-menu_link').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  // Mobile Menu





  
  $(document).ready(function() {
    $('#form-action').submit(function(){
      $('button.form-submit span').removeClass('hidden');
      $('button.form-submit').attr('disabled', 'disabled');
        $.post("./php/bitrix.php", $("#form-action").serialize(),  function(response) {
            $('#form-action').hide('slow');
            $('.modal-footer').hide('slow');
            $('#post_form_success').html(response);

            $('button.form-submit span').addClass('hidden');
            $('button.form-submit').attr('disabled', false);
            dataLayer.push({'event': 'formsend'});
              fbq('track', 'Lead');
        });
        return false;
    });
  });


  $(document).ready(function() {
    $('#form-request').submit(function(){
      $('button.form-request span').removeClass('hidden');
      $('button.form-request').attr('disabled', 'disabled');
        $.post("./php/bitrix.php", $("#form-request").serialize(),  function(response) {
            $('#form-request').hide('slow');
            $('.modal-footer').hide('slow');
            $('#post_form_success2').html(response);

            $('button.form-request span').addClass('hidden');
            $('button.form-request').attr('disabled', false);
            dataLayer.push({'event': 'formsend'});
              fbq('track', 'Lead');
        });
        return false;
    });
  });


  $(document).ready(function() {
    $('#call2Action').submit(function(){
      $('button.form-request span').removeClass('hidden');
      $('button.form-request').attr('disabled', 'disabled');
        $.post("./php/bitrix.php", $("#call2Action").serialize(),  function(response) {
            $('#call2Action').hide('slow');
            $('#post_form_success3').html(response);

            $('button.form-request span').addClass('hidden');
            $('button.form-request').attr('disabled', false);
            dataLayer.push({'event': 'formsend'});
              fbq('track', 'Lead');
        });
        return false;
    });
  });


const modalPrice = document.querySelector('.price span');
const modalTitle = document.querySelector('.modal-title span');
const modalBtn = document.querySelector('.btn-order');


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })




// UTM 2 localStorage
// Переменные с текущей ссылкой и корнем после слеша
let href = window.location.href;
let search = window.location.search;


// массив для будущих ютм
let utmArr = [];

// Определяем ютм, разделям их по знаку "&", записываем их раздельно в массив с уменшенным регистром
if (href.indexOf("?") != -1) {
  search = search.slice(1).toLowerCase();
  utmArr = search.split("&");

// перебираем массив и разбиваем каждый элемент по разделителю "=" и записываем в LocalStorage
  utmArr.map((utm) => {
    localStorage.setItem(utm.split("=")[0], utm.split("=")[1]);
  });
}


// UTM from LocalStorage to form

const utm_source = document.getElementById('utm_source');
const utm_medium = document.getElementById('utm_medium');
const utm_campaign = document.getElementById('utm_campaign');
const utm_content = document.getElementById('utm_content');
const utm_term = document.getElementById('utm_term');

const utm_source_request = document.getElementById('utm_source_request');
const utm_medium_request = document.getElementById('utm_medium_request');
const utm_campaign_request = document.getElementById('utm_campaign_request');
const utm_content_request = document.getElementById('utm_content_request');
const utm_term_request = document.getElementById('utm_term_request');



if (localStorage.getItem('utm_source')) {
  utm_source.value = localStorage.getItem('utm_source');
  utm_source_request.value = localStorage.getItem('utm_source');
}

if (localStorage.getItem('utm_medium')) {
  utm_medium.value = localStorage.getItem('utm_medium');
  utm_medium_request.value = localStorage.getItem('utm_medium');
}

if (localStorage.getItem('utm_campaign')) {
  utm_campaign.value = localStorage.getItem('utm_campaign');
  utm_campaign_request.value = localStorage.getItem('utm_campaign');
}

if (localStorage.getItem('utm_content')) {
  utm_content.value = localStorage.getItem('utm_content');
  utm_content_request.value = localStorage.getItem('utm_content');
}

if (localStorage.getItem('utm_term')) {
  utm_term.value = localStorage.getItem('utm_term');
  utm_term_request.value = localStorage.getItem('utm_term');
}


const back2Top = document.querySelector('.back2Top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    back2Top.classList.remove('hidden')
  }
  else {
    back2Top.classList.add('hidden')
  }
})


jQuery(function() {

  jQuery(".back2Top").click(function() {
    jQuery("html, body").animate({ scrollTop: 0 }, "slow")
  })
});





$("#boxTable").click(function(e) {
  e.preventDefault();
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#price-table").offset().top
  }, 1000);
});



$("#buttonTable").click(function(e) {
  e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#price-table").offset().top
    }, 1000);
});



$(document).ready(function () {
  $(".menu a").click(function (e) {

    var lattice = e.target.href.indexOf('#');

    if (`${document.location.origin}/` === document.URL) {
    
      if (lattice !== -1) {
        e.target.href = `#${e.target.getAttribute('href').replace(/[^a-zа-яё-]/gi, '')}`;
        
        e.preventDefault();
        
      }
    }
    
    var id = $(this).attr('href');

    var topHead = $(id).offset().top;

    $([document.documentElement, document.body]).animate({scrollTop: topHead - 50}, 1500);
  });

  

  $(".mobile-menu a").click(function (e) {

    var lattice = e.target.href.indexOf('#');

    if (`${document.location.origin}/` === document.URL) {
    
      if (lattice !== -1) {
        e.target.href = `#${e.target.getAttribute('href').replace(/[^a-zа-яё-]/gi, '')}`;
        
        e.preventDefault();
        
      }
    }
    
    var id = $(this).attr('href');

    var topHead = $(id).offset().top;

    $([document.documentElement, document.body]).animate({scrollTop: topHead - 50}, 1500);
  });
});

// Form value to LocalStorage

const nameForm = document.getElementById('name');
const tel = document.querySelector('#telProduct');
const email = document.querySelector('[name="email"]');

const tel_action = document.querySelector('.callAction');

const nameForm_request = document.getElementById('name_request');
const tel_request = document.getElementById('tel_request');
const email_request = document.getElementById('email_request');


nameForm_request.addEventListener('change', (e) => {
  if (e.target.value !== '') {
  localStorage.setItem('formName', e.target.value);
  }
})

tel_request.addEventListener('change', (e) => {
  if (e.target.value !== '') {
  localStorage.setItem('formTel', e.target.value);
  }
})

if (tel_action) {
  tel_action.addEventListener('change', (e) => {
    if (e.target.value !== '') {
    localStorage.setItem('formTel', e.target.value);
    }
  })
}


email_request.addEventListener('change', (e) => {
  if (e.target.value !== '') {
  localStorage.setItem('formEmail', e.target.value);
  }
})


nameForm.addEventListener('change', (e) => {
    if (e.target.value !== '') {
    localStorage.setItem('formName', e.target.value);
    }
})

if (localStorage.getItem('formName')) {
    nameForm.value = localStorage.getItem('formName');
    nameForm_request.value = localStorage.getItem('formName');
}

tel.addEventListener('change', (e) => {
    if (e.target.value !== '') {
    localStorage.setItem('formTel', e.target.value);
    }
})

if (localStorage.getItem('formTel')) {
    tel.value = localStorage.getItem('formTel');
    tel_request.value = localStorage.getItem('formTel');
    if (tel_action) {
      tel_action.value = localStorage.getItem('formTel');
    }
}

email.addEventListener('change', (e) => {
    if (e.target.value !== '') {
    localStorage.setItem('formEmail', e.target.value);
    }
})

if (localStorage.getItem('formEmail')) {
    email.value = localStorage.getItem('formEmail');
    email_request.value = localStorage.getItem('formEmail');
}


// Form value to LocalStorage


// Удаляем цикличные ссылки с меню и лого
const menu = document.querySelectorAll('.menu a');
const logo = document.querySelector('.logo');

menu.forEach(item => {
  
  if (document.baseURI === item.href) {
    item.setAttribute('href', '')
    item.addEventListener('click', (e) => {
      e.preventDefault();
    })
  }
})

if (document.baseURI === logo.href) {
  logo.href = "#";
}
// Удаляем цикличные ссылки с меню и лого
