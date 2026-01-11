# Kinopoisk App

## Данные

### Описание

Приложение для просмотра фильмов с Kinopoisk

### Ссылки

- https://letscode-dev.github.io/react-kinopoisk/ - Деплой проекта
- https://github.com/letscode-dev/react-kinopoisk/tree/main - Репозиторий

## Установка и настройка приложения

**Клонирование и установка**

1. Склонировать репозиторий по HTTPS
2. Установить зависимости для проекта через `npm i`
3. Создать .env-файл

**.env-файл**

- Скопировать файл `.env.example` и переменовать его в `.env`
- Для ключа `VITE_API_KEY` добавить значение из "Профиля" [Kinopoisk Api Unofficial](https://kinopoiskapiunofficial.tech/)

## Команды

```bash
npm run dev             # Запуск приложения в dev-режиме на localhost
npm run build           # Сборка приложения
npm run preview         # Запуск собранного приложения из "dist" для предпросмотра production-сборки

npm run format          # Автоматически отформатировать все файлы через Prettier
npm run format:check    # Проверить форматирование (без изменений) через Prettier
npm run lint            # Проверить код с помощью ESLint

npm run storybook       # Запуск StoryBook в dev-режиме на localhost
npm run build-storybook # Сборка StoryBook

npm run gh-pages        # Git push из директории "dist" в ветку "gh-pages" на GitHub
npm run commit          # Git add, commit и push в ветку "main" на GitHub
npm run deploy          # Сборка приложения и push в ветку "gh-pages"
```
