# Task Management

Веб-приложение на **React 19**, **TypeScript**, **Vite 8** и **Tailwind CSS v4**: заметки с сохранением в `localStorage`, маршрутизация через React Router.

## Требования

- [Node.js](https://nodejs.org/) 20+ (рекомендуется актуальный LTS)

## Установка и запуск

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
npm run preview
```

Проверка линтера:

```bash
npm run lint
```

## Стек

- UI: React, shadcn/radix, Tailwind, `class-variance-authority`
- Данные: `localStorage` (хук `useLocalStorage`), при первом запуске при необходимости подставляются демо-заметки (`src/features/notes/model/notes-storage.ts`)

## Структура (кратко)

- `src/app` — точка входа, провайдеры, роутер
- `src/pages` — страницы
- `src/features` — фичи (например заметки)
- `src/widgets` — крупные блоки UI
- `src/shared` — общие компоненты и утилиты
