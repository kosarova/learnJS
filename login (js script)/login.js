let userNameInfo = prompt('Как Ваше имя?', '');
    if (userNameInfo === 'Admin' || userNameInfo === 'admin') {
        let userPassword = prompt('Введите пароль', '');
        if (userPassword === 'Я главный') {
            alert('здравствуйте')
        } else if (userPassword === null) {
            alert('Отменено')
        } else {
            alert('Неверный пароль')
        }
    } else if (userNameInfo === null || userNameInfo === '') {
        alert('Отменено');
    } else {
        alert('Я вас не знаю')
    }