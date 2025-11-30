
const items = document.getElementById('items');
const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest();


// localStorage.clear();
const storageName = localStorage.getItem('response');

if (storageName) {
    dataFilling(JSON.parse(storageName));
    loader.classList.remove('loader_active');
} else {
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {

            loader.classList.remove('loader_active');
            const response = JSON.parse(xhr.response);
            const valute = response.response.Valute;

            console.log(valute);
            
            saveResponse('response', valute);
            dataFilling(valute);
        }
    });
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function dataFilling(obj) {
    for (let i in obj) {
        let charCode = obj[i].CharCode;
        let value = obj[i].Value;

        items.insertAdjacentHTML(
            "beforeEnd", `<div class="item">
            <div class="item__code">
                   1 ${charCode}
                </div>  =&ensp;
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`);
    }
}

function saveResponse(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
    console.log(typeof(localStorage.getItem(key)));
}