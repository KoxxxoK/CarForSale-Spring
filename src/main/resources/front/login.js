document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить стандартное поведение формы

    // Получить значения из текстовых полей
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Создать объект данных для отправки
    const data = {
        email: username,
        password: password
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
    fetch('http://localhost:8080/login', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            if(data!=0){
                document.cookie = "isLoggedIn=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
                document.cookie = "id="+data+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
                let url=new URL('http://localhost:63342/CarsForSell/src/main/resources/front/main.html');
                window.location.href=url.href;
            }
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
});