// 1. Создай три вложенных элемента (например, `div` внутри `div` внутри `div`).
//  Назначь обработчики событий для каждого из них и проследи за последовательностью вызовов при клике на внутренний элемент с помощью console.log();
document.getElementById('first').addEventListener("click", () => {
    console.log('первый блок');
});

document.getElementById('second').addEventListener("click", (event) => {
    console.log('второй блок');
    event.stopPropagation(); // 2. Напиши код, который останавливает всплытие события на среднем элементе из предыдущего задания;
});

document.getElementById('third').addEventListener("click", () => {
    console.log('третий блок');
});

// 3. Создай форму с несколькими полями ввода и кнопкой отправки. Реализуй делегирование события, 
// например, валидации каждого поля ввода при его изменении. Пусть это будет простое условие, 
// например, длина строки не более 20 символов.
const button = document.getElementById('button');
const notification = document.getElementById('error');
notification.style.display = 'none';
document.getElementById('inputs').addEventListener('input', (event) => {
    if(event.target.tagName === 'INPUT') {
        checkString(event.target);
    }
})

function checkString(string) {
    if (string.value.length > 20) { 
        string.style.borderColor = 'red';
        button.disabled = true;
        notification.style.display = 'block';
        return false
    }
    else {
        notification.style.display = 'none';
        return true
    }
}