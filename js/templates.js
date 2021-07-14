const marketMainImg = document.querySelector('#templateMarket .template-main-img');
const marketTemplateThumb = document.querySelector('#templateMarket .template-thumb');


marketTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        marketMainImg.src = e.target.src;
    }
})

// SHOES
const shoesMainImg = document.querySelector('#templateShoes .template-main-img');
const shoesTemplateThumb = document.querySelector('#templateShoes .template-thumb');


shoesTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        shoesMainImg.src = e.target.src;
    }
})


// Apple

const appleMainImg = document.querySelector('#templateApple .template-main-img');
const appleTemplateThumb = document.querySelector('#templateApple .template-thumb');


appleTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        appleMainImg.src = e.target.src;
    }
})


// Auto

const autoMainImg = document.querySelector('#templateAuto .template-main-img');
const autoTemplateThumb = document.querySelector('#templateAuto .template-thumb');


autoTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        autoMainImg.src = e.target.src;
    }
})


// TOP

const topMainImg = document.querySelector('#templateTop .template-main-img');
const topTemplateThumb = document.querySelector('#templateTop .template-thumb');


topTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        topMainImg.src = e.target.src;
    }
})

// CyberStore

const cyberStoreMainImg = document.querySelector('#templateCyberStore .template-main-img');
const cyberStoreTemplateThumb = document.querySelector('#templateCyberStore .template-thumb');


cyberStoreTemplateThumb.addEventListener('click', (e) => {
    if (e.target.localName === 'img') {
        cyberStoreMainImg.src = e.target.src;
    }
})


const templateThumbs = document.querySelectorAll('.template-thumb img');


templateThumbs.forEach(item => {
    // console.dir(item)

    item.addEventListener('click', (e) => {
        
        if (e.target.parentElement.nextElementSibling) {
            console.log("True next element", e.target.parentElement.nextElementSibling);
            e.target.parentElement.nextElementSibling.children[0].classList.remove('active');
        }

        if (e.target.parentElement.previousElementSibling) {
            console.log("True previous element", e.target.parentElement.previousElementSibling.children.lenght);
            e.target.parentElement.previousElementSibling.children[0].classList.remove('active');
        }

        if (!e.target.parentElement.previousElementSibling && e.target.parentElement.nextElementSibling) {
            console.log("Test", e.target.parentElement.previousElementSibling.children.length);
            e.target.parentElement.previousElementSibling.children[0].classList.remove('active');
            e.target.parentElement.nextElementSibling.children[0].classList.remove('active');
        }
        
        e.target.classList.toggle('active');
    })
})


const checkTemplate = document.querySelector('.check-this');

checkTemplate.addEventListener('click', (e) =>{
    localStorage.setItem('template', e.target.getAttribute('data-button-template'));
    localStorage.setItem('templateCoast', e.target.getAttribute('data-template-coast'));
    
    const checkTemplateIcon = document.querySelector('.check-this i');
    checkTemplateIcon.style.opacity = '1';

    const productTemplate2 = document.getElementById('product_template2');

    productTemplate2.value = localStorage.getItem('template');
})