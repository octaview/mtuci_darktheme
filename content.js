// Проверяем, включена ли уже тёмная тема
let darkModeEnabled = false;

// Функция для включения тёмной темы
function enableDarkMode() {
    document.body.style.backgroundColor = "#121212";  // Задаём тёмный фон
    document.body.style.color = "#ffffff";  // Задаём белый цвет текста
    darkModeEnabled = true;
}

// Функция для отключения тёмной темы
function disableDarkMode() {
    document.body.style.backgroundColor = "";  // Возвращаем стандартный фон
    document.body.style.color = "";  // Возвращаем стандартный цвет текста
    darkModeEnabled = false;
}

// Переключение тёмной темы по запросу
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleDarkMode") {
        if (darkModeEnabled) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
});
