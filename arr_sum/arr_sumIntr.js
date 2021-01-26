let sumImput = function() {
    let sum = 0;
    let sumNum = [];
    while (true) {
        let value = prompt('Vvedite chislo', 0);

        if (value === !isFinite(value) || value === '' || value === null) {
            break;
        };

        sumNum.push(+value);
    }   

    for (let num of sumNum) {
        sum += num;
    }
    return sum;
};
alert(sumImput());