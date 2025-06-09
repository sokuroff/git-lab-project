// Added a clarifying comment during rebase

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

// 3. Обновляем функцию displayQuotes, чтобы она добавляла data-атрибут
function displayQuotes() {
    quoteList.innerHTML = ''; 
    quotes.forEach(quote => {
        const li = document.createElement('li');
        li.dataset.id = quote.id; // НОВОЕ: добавляем data-id="1", data-id="2" и т.д.

        // ... (остальная часть функции без изменений) ...
        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteText.textContent = `«${quote.text}»`;

        const quoteAuthor = document.createElement('p');
        quoteAuthor.className = 'quote-author';
        quoteAuthor.textContent = `— ${quote.author}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        
        li.append(quoteText, quoteAuthor, deleteBtn);
        quoteList.append(li);
    });
}

displayQuotes();

// 5. Обновляем логику удаления (ИСПРАВЛЕНИЕ БАГА)
quoteList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const listItemToRemove = event.target.closest('li');
        
        // Получаем ID из data-атрибута
        const idToRemove = Number(listItemToRemove.dataset.id);

        // Находим индекс элемента в массиве, который нужно удалить
        const indexToRemove = quotes.findIndex(quote => quote.id === idToRemove);

        // Если элемент найден, удаляем его из массива
        if (indexToRemove > -1) {
            quotes.splice(indexToRemove, 1);
        }
        
        // Удаляем элемент из DOM
        listItemToRemove.remove();

        console.log(quotes); // Для проверки. Откройте консоль в браузере и увидите, что массив тоже меняется.
    }
});