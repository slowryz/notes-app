import type { NoteType } from "./types";

export const NOTES_STORAGE_KEY = "notes";

export const MOCK_NOTES: NoteType[] = [
  {
    id: "mock-note-1",
    title: "Демо: список дел",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    preview: true,
    created: "2026-04-15T10:00:00.000Z",
    updated: "2026-04-15T12:00:00.000Z",
  },
  {
    id: "mock-note-2",
    title: "Вторая заметка",
    content: "Короткий текст для превью в списке карточек.",
    created: "2026-04-14T09:00:00.000Z",
    preview: false,
    updated: "2026-04-14T09:00:00.000Z",
  },
  {
    id: "mock-note-3",
    title: "Третья",
    content: "Ещё одна строка, чтобы скролл и навигация были заметнее.",
    preview: false,
    created: "2026-04-13T18:30:00.000Z",
    updated: "2026-04-13T18:30:00.000Z",
  },
];

export function seedNotesMockIfEmpty(): void {
  if (typeof window === "undefined") return;

  const raw = window.localStorage.getItem(NOTES_STORAGE_KEY);

  if (raw === null || raw === "") {
    window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(MOCK_NOTES));
    return;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      window.localStorage.setItem(
        NOTES_STORAGE_KEY,
        JSON.stringify(MOCK_NOTES),
      );
    }
  } catch {
    window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(MOCK_NOTES));
  }
}
