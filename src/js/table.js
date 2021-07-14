const products = {
    first: 12000,
    second: 15000,
    third: 22000
}


//  Подсчитывает итоговую стоимость пакетов
const firstProducts = document.querySelectorAll('.ukraine .price .first-product');
const secondProducts = document.querySelectorAll('.ukraine .price .second-product');
const thirdProducts = document.querySelectorAll('.ukraine .price .third-product');



// Кнопки оставить заявку
const firstBtn = document.querySelector('.btn-first-product a');
const secondBtn = document.querySelector('.btn-second-product a');
const thirdBtn = document.querySelector('.btn-third-product a');


const replaceFunc = (price) => {
   const result = price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
   return console.log(result);
}


// firstProducts.textContent = `${products.first.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;

firstProducts.forEach(item => {
  item.textContent = `${products.first.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
})

// secondProducts.textContent = `${products.second.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;

secondProducts.forEach(item => {
  item.textContent = `${products.second.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
})

// thirdProducts.textContent = `${products.third.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
thirdProducts.forEach(item => {
  item.textContent = `${products.third.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
})


firstBtn.setAttribute('data-price', products.first);
secondBtn.setAttribute('data-price', products.second);
thirdBtn.setAttribute('data-price', products.third);




// Функции с дополнительными опциями
const optionsPrice = document.querySelectorAll('.table .price-options');
const totalOptions = document.querySelector('.table-price_options span');
const modalOptions = document.querySelector('.modal-options ul');
const optionsMarker = document.querySelector('.price-options .options-marker');
let total = 0;
let options = [];




optionsPrice.forEach(option => {
    option.addEventListener('click', (e) => {
      if (e.target.localName === 'span') {
        e.target.parentElement.parentElement.classList.toggle('add-options');
        e.target.classList.toggle('checked');

        const filter = e.target.parentElement.parentElement.getAttribute('class').indexOf('add-options');
        if (filter === -1) {
        total -= +e.target.parentElement.parentElement.getAttribute('data-price');
        options = options.filter(deleteOptions => deleteOptions !== e.target.parentElement.parentElement.getAttribute('data-options'));
        }

        else {
        total += +e.target.parentElement.parentElement.getAttribute('data-price');
        if (e.target.parentElement.parentElement.getAttribute('data-options')) {
        options.push(e.target.parentElement.parentElement.getAttribute('data-options'));
        }
      }
      }


      else {
      e.target.parentElement.classList.toggle('add-options');
      e.target.firstChild.classList.toggle('checked');

        const filter = e.target.parentElement.getAttribute('class').indexOf('add-options');
        if (filter === -1) {
        total -= +e.target.parentElement.getAttribute('data-price');
        options = options.filter(deleteOptions => deleteOptions !== e.target.parentElement.getAttribute('data-options'));
        }

        else {
        total += +e.target.parentElement.getAttribute('data-price');
        if (e.target.parentElement.getAttribute('data-options')) {
        options.push(e.target.parentElement.getAttribute('data-options'));
        }
      }
    }
        
        totalOptions.textContent = total;


        let resultFirstProducts = total + products.first;
        let resultSecondProducts = total + products.second;
        let resultThirdProducrs = total + products.third;



        // firstProducts.textContent = `${resultFirstProducts.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;

        firstProducts.forEach(item => {
          item.textContent = `${resultFirstProducts.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
        })

        // secondProducts.textContent = `${resultSecondProducts.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;

        secondProducts.forEach(item => {
          item.textContent = `${resultSecondProducts.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
        })

        // thirdProducts.textContent = `${resultThirdProducrs.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;

        thirdProducts.forEach(item => {
          item.textContent = `${resultThirdProducrs.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
        })


        firstBtn.setAttribute('data-price', resultFirstProducts);
        firstBtn.setAttribute('data-options', options.join(', '));
        secondBtn.setAttribute('data-price', resultSecondProducts);
        secondBtn.setAttribute('data-options', options.join(', '));
        thirdBtn.setAttribute('data-price', resultThirdProducrs);
        thirdBtn.setAttribute('data-options', options.join(', '));

        
        modalOptions.innerHTML = '';
        options.forEach(item => {
          modalOptions.insertAdjacentHTML('afterbegin', `<li>${item}</li>`);
        })
    })
})


const prices = document.querySelector('.prices');

// Работа с модалкой
// Определяем скрытые поля
const rateForm = document.getElementById('rate');
const priceForm = document.getElementById('product_price');
const productTemplate = document.getElementById('product_template');
const modalTemplateName = document.querySelector('.modal-template span');


firstBtn.addEventListener('click', (e) => {
  prices.textContent = `${e.target.getAttribute('data-price').toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
  modalTitle.textContent = e.target.getAttribute('data-name');
  priceForm.value = e.target.getAttribute('data-price');

  rateForm.value = e.target.getAttribute('data-name') + ', ' + e.target.getAttribute('data-options');

  e.target.setAttribute('template', localStorage.getItem('template'));
  productTemplate.value = e.target.getAttribute('template');
});

secondBtn.addEventListener('click', (e) => {
  prices.textContent = `${e.target.getAttribute('data-price').toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
  modalTitle.textContent = e.target.getAttribute('data-name');
  priceForm.value = e.target.getAttribute('data-price');
  rateForm.value = e.target.getAttribute('data-name') + ', ' + e.target.getAttribute('data-options');

  e.target.setAttribute('template', localStorage.getItem('template'));
  productTemplate.value = e.target.getAttribute('template');
});

thirdBtn.addEventListener('click', (e) => {
  prices.textContent = `${e.target.getAttribute('data-price').toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн.`;
  modalTitle.textContent = e.target.getAttribute('data-name');
  priceForm.value = e.target.getAttribute('data-price');
  rateForm.value = e.target.getAttribute('data-name') + ', ' + e.target.getAttribute('data-options');

  e.target.setAttribute('template', localStorage.getItem('template'));
  productTemplate.value = e.target.getAttribute('template');
});


// Просчитываем себестоимость
const coast = document.querySelectorAll('.ukraine [data-coast]');
const coastName = document.querySelectorAll('.ukraine [data-module-name]');
const firstCoast = document.querySelector('.ukraine .coast .first-product');
const SecondCoast = document.querySelector('.ukraine .coast .second-product');
const thirdCoast = document.querySelector('.ukraine .coast .third-product');


let totalCoastFirst = 0;
let totalCoastSecond = 0;
let totalCoastThird = 0;


  const ApiUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

  fetch(ApiUrl)
  .then(res => res.json())
  .then(data => {
    const rur = data.filter(item => item.ccy === 'RUR');
    rur.forEach(item => {
    const rurCurrency = +item.sale;

coast.forEach(item => {
  if (item.getAttribute('data-rates').indexOf('1') !== -1) {
    totalCoastFirst += +item.getAttribute('data-coast') * rurCurrency;
  }

  else if (item.getAttribute('data-rates').indexOf('2') !== -1) {
    totalCoastSecond += +item.getAttribute('data-coast') * rurCurrency;
  }

  else if (item.getAttribute('data-rates').indexOf('3') !== -1) {
    totalCoastThird += +item.getAttribute('data-coast') * rurCurrency;
  }
})

totalCoastSecond += totalCoastFirst;
totalCoastThird += totalCoastSecond;


firstCoast.innerHTML = `${totalCoastFirst.toFixed(1).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн. <i class="fa fa-question-circle" aria-hidden="true"></i>`;
SecondCoast.innerHTML = `${totalCoastSecond.toFixed(1).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн. <i class="fa fa-question-circle" aria-hidden="true"></i>`;
thirdCoast.innerHTML = `${totalCoastThird.toFixed(1).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} грн. <i class="fa fa-question-circle" aria-hidden="true"></i>`;

    })
  })

const firstCoastNameArr = [];
const secondCoastNameArr = [];
const thirdCoastNameArr = [];

coastName.forEach(item => {
  if (item.getAttribute('data-rates').indexOf('1') !== -1) {
    firstCoastNameArr.push(item.getAttribute('data-module-name'));
  };

  if (item.getAttribute('data-rates').indexOf('2') !== -1) {
    secondCoastNameArr.push(item.getAttribute('data-module-name'));
  };

  if (item.getAttribute('data-rates').indexOf('3') !== -1) {
    thirdCoastNameArr.push(item.getAttribute('data-module-name'));
  };
});


firstCoast.setAttribute('data-title', firstCoastNameArr.join(', '));
SecondCoast.setAttribute('data-title', secondCoastNameArr.join(', '));
thirdCoast.setAttribute('data-title', thirdCoastNameArr.join(', '));



// Просчитываем себестоимость для РФ


const coastRF = document.querySelectorAll('.russian [data-coast]');
const coastNameRF = document.querySelectorAll('.russian [data-module-name]');
const firstCoastRF = document.querySelector('.russian .coast .first-product');
const SecondCoastRF = document.querySelector('.russian .coast .second-product');
const thirdCoastRF = document.querySelector('.russian .coast .third-product');



let totalCoastFirstRF = 0;
let totalCoastSecondRF = 0;
let totalCoastThirdRF = 0;

coastRF.forEach(item => {
  if (item.getAttribute('data-rates').indexOf('1') !== -1) {
    totalCoastFirstRF += +item.getAttribute('data-coast');
  }
  else if (item.getAttribute('data-rates').indexOf('2') !== -1) {
    totalCoastSecondRF += +item.getAttribute('data-coast');
  }

  else if (item.getAttribute('data-rates').indexOf('3') !== -1) {
    totalCoastThirdRF += +item.getAttribute('data-coast');
  }
})

totalCoastSecondRF += totalCoastFirstRF;
totalCoastThirdRF += totalCoastSecondRF;


firstCoastRF.innerHTML = `${totalCoastFirstRF.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб. <i class="fa fa-question-circle" aria-hidden="true"></i>`;
SecondCoastRF.innerHTML = `${totalCoastSecondRF.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб. <i class="fa fa-question-circle" aria-hidden="true"></i>`;
thirdCoastRF.innerHTML = `${totalCoastThirdRF.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб. <i class="fa fa-question-circle" aria-hidden="true"></i>`;

const firstCoastNameArrRF = [];
const secondCoastNameArrRF = [];
const thirdCoastNameArrRF = [];

coastNameRF.forEach(item => {
  if (item.getAttribute('data-rates').indexOf('1') !== -1) {
    firstCoastNameArrRF.push(item.getAttribute('data-module-name'));
  };

  if (item.getAttribute('data-rates').indexOf('2') !== -1) {
    secondCoastNameArrRF.push(item.getAttribute('data-module-name'));
  };

  if (item.getAttribute('data-rates').indexOf('3') !== -1) {
    thirdCoastNameArrRF.push(item.getAttribute('data-module-name'));
  };
});


firstCoastRF.setAttribute('data-title', firstCoastNameArrRF.join(', '));
SecondCoastRF.setAttribute('data-title', secondCoastNameArrRF.join(', '));
thirdCoastRF.setAttribute('data-title', thirdCoastNameArrRF.join(', '));


