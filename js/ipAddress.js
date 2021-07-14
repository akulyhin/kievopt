const apiKey = '6dc706f1da44400a93443ac3d964eb7a';

const modalBody = document.querySelector('#ipAddress .modal-body .content');
const btnConfirm = document.querySelector('[data-geo-modal="yes"]')
const tabUkraine = document.querySelector('#price-ukraine-tab');
const tabRussian = document.querySelector('#price-russian-tab');

const priceUa = document.querySelectorAll('.box-price.ua');
const priceRus = document.querySelectorAll('.box-price.rus');


if (!getCookie('country')) {
    
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&lang=ru`).then(res => res.json()).then(data => {
        // $('#ipAddress').modal(open);

        
        if (data.country_name === 'Ukraine' && data.city === 'Kyiv') {

            modalBody.textContent = 'Ваш город Киев?';

            btnConfirm.addEventListener('click', (e) => {
                if (e.target) {
                    // localStorage.setItem('country', data.country_name);
                    setCookie('country', data.country_name, '604800');
                    countryTitle.textContent = 'для Украины';
                    priceUa.forEach(item => {
                        item.style.display = 'block';
                    })
                    $('#price-ukraine-tab').tab('show');
                }
            })

            setCookie('country', data.country_name, '604800');
            countryTitle.textContent = 'для Украины';
            $('#price-ukraine-tab').tab('show');
            priceUa.forEach(item => {
                item.style.display = 'block';
            })
            console.log(priceUa)

        }
        
        else if (data.country_name === "Ukraine") {
            modalBody.textContent = 'Вы из Украины?';
            btnConfirm.addEventListener('click', (e) => {
                if (e.target) {
                    // localStorage.setItem('country', data.country_name);
                    setCookie('country', data.country_name, '604800');
                    countryTitle.textContent = 'для Украины';
                    $('#price-ukraine-tab').tab('show');
                }
            })

            setCookie('country', data.country_name, '604800');
                    countryTitle.textContent = 'для Украины';
                    $('#price-ukraine-tab').tab('show');
                    priceUa.forEach(item => {
                        item.style.display = 'block';
                    })
        }
        
        else {
            modalBody.textContent = `Вы из ${data.country_name}, верно?`;
            btnConfirm.addEventListener('click', (e) => {
                if (e.target) {
                    // localStorage.setItem('country', data.country_name);
                    setCookie('country', data.country_name, '604800');
                    countryTitle.textContent = 'для Украины';
                }
            })

            setCookie('country', data.country_name, '604800');
                    countryTitle.textContent = 'для Украины';
                    priceUa.forEach(item => {
                        item.style.display = 'block';
                    })
        }
    })
}

const countryTitle = document.querySelector('.title-main-h2 span');

// if (localStorage.getItem('country') === 'Ukraine') {
    if (getCookie('country') === 'Ukraine') {
    document.querySelector('body').setAttribute('country', getCookie('country'));
}

// else if (localStorage.getItem('country') === 'Russian') {
    else if (getCookie('country') === 'Russian') {
    document.querySelector('body').setAttribute('country', getCookie('country'));
}

// else if (localStorage.getItem('country')) {
    
    else if (getCookie('country')) {
    document.querySelector('body').setAttribute('country', getCookie('country'))
}

if (document.querySelector('body').getAttribute('country') === 'Ukraine') {

    if (countryTitle) {
        countryTitle.textContent = 'для Украины';
        $('#price-ukraine-tab').tab('show');
        priceUa.forEach(item => {
            item.style.display = 'block';
        })
        priceRus.forEach(item => {
            item.style.display = 'none';
        })
    }
}

else if (document.querySelector('body').getAttribute('country') === 'Russian') {
    if (countryTitle) {
        countryTitle.textContent = 'для России';
        $('#price-russian-tab').tab('show');
            priceRus.forEach(item => {
            item.style.display = 'block';
        })
        priceUa.forEach(item => {
            item.style.display = 'none';
        })
        
    }
}

else if (document.querySelector('body').getAttribute('country')) {
    countryTitle.textContent = `для ${document.querySelector('body').getAttribute('country')}`;
}


function setCookie (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
      ((expires) ? "; max-age=" + expires : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
}


function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

