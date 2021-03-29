/** XHR */
function getRequest() {
    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'https://swapi.dev/api/films'
    xhr.open('GET', 'https://reqres.in/api/users?page=2', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        const user = JSON.parse(xhr.responseText); // -> JSON.stringify()*
        console.log(user);
    }
}

function postRequest() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://reqres.in/api/login');

    xhr.setRequestHeader('content-type', 'application/json');

    xhr.send(JSON.stringify({
        "email": "eve.holt@reqres.in22334",
        "password": "cityslicka"
    }));

    console.log(xhr);
}

postRequest();

 // http://youhacked.com -> GET HTTP (xhr) -> CORS | https://privat24.ua/get-all-user-data

/** JSONP */ 
{
    // const newSrcEl = document.createElement('script');
    // newSrcEl.src = '/user?name=NewName&age=23';

    // document.body.append(newSrcEl);
}