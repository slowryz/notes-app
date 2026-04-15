import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

const canUseDom = typeof window !== "undefined";

function readStoredJson<T>(key: string, fallback: T): T {
  if (!canUseDom) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStoredJson<T>(key: string, value: T): void {
  if (!canUseDom) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // квота, приватный режим, запрет storage
  }
}

/**
 * Состояние React, синхронизированное с `localStorage` через JSON.
 *
 * Принцип:
 * - начальное значение берётся лениво из storage (или `initialValue`, если ключа нет / JSON битый);
 * - при каждом изменении состояния значение сериализуется и записывается в storage;
 * - при смене `key` состояние перечитывается из storage под новым ключом (без лишнего reset при первом монте).
 *
 * Для объектов и массивов в `initialValue` используй стабильную ссылку
 * (константу вне компонента или `useMemo`), иначе литералы `[]`/`{}` в родителе создаются заново на каждом рендере.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() =>
    readStoredJson(key, initialValue),
  );

  const keyRef = useRef(key);
  useEffect(() => {
    if (keyRef.current === key) return;
    keyRef.current = key;
    setValue(readStoredJson(key, initialValue));
    // initialValue только для fallback при чтении нового ключа; стабилизируй ссылку в родителе для []/{}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    writeStoredJson(key, value);
  }, [key, value]);

  return [value, setValue];
}
