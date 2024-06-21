document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку по id
    const button = document.getElementById("button");

    // Назначаем обработчик события клика на кнопку
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки

        // Вызываем функцию для отправки данных на сервер
        sendData();
    });
});

    function sendData() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;

        // Создать объект данных для отправки
        const data = {
            email: username,
            password: password,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber,
            dateOfBirth: dateOfBirth
        };

        // Настройки запроса
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        // Отправить запрос
        fetch('http://localhost:8080/registration', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log('Success:', data);
                if(data=="Пользователь создан"){
                    let url=new URL('http://localhost:63342/CarsForSell/src/main/resources/front/login.html');
                    window.location.href=url.href;
                }
                else{
                    alert("Пользователь уже существует")
                }
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

