// 1. Данные: массив объектов с цитатами
const quotes = [
    {
        text: "На небесах только и разговоров, что о море. О том, как оно прекрасно. О закате над океаном, о том, как солнце, погружаясь в волны, стало алым, как кровь… А что ты им скажешь? Ведь ты ни разу не был на море",
        author: "Достучаться до небес"
    },
    {
        text: "Не жди, что станет легче, проще, лучше. Не станет. Трудности будут всегда. Учись быть счастливым прямо сейчас. Иначе не успеешь",
        author: "1+1"
    },
    {
        text: "Всегда отдавайся делу полностью. На работе — работай, если смешно — смейся, и всегда ешь, будто в последний раз",
        author: "Зелёная книга"
    }
];

const quoteList = document.getElementById('quote-list');

// 3. Улучшенная функция для отображения цитат (РЕФАКТОРИНГ)
function displayQuotes() {
    quoteList.innerHTML = ''; 

    quotes.forEach(quote => {
        // Создаем элементы DOM программно
        const li = document.createElement('li');

        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteText.textContent = `«${quote.text}»`;

        const quoteAuthor = document.createElement('p');
        quoteAuthor.className = 'quote-author';
        quoteAuthor.textContent = `— ${quote.author}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';

        // Собираем li из созданных элементов
        li.append(quoteText, quoteAuthor, deleteBtn);
        
        // Добавляем готовый li в список на странице
        quoteList.append(li);
    });
}

// 4. Вызываем функцию
displayQuotes();

// 5. Логика удаления (НОВОЕ)
// Используем делегирование событий: вешаем один обработчик на весь список
quoteList.addEventListener('click', function(event) {
    // Проверяем, был ли клик именно по кнопке с классом 'delete-btn'
    if (event.target.classList.contains('delete-btn')) {
        // Находим родительский элемент <li> кнопки, по которой кликнули
        const listItemToRemove = event.target.closest('li');
        // Удаляем этот элемент со страницы
        listItemToRemove.remove();
    }
});