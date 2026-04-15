import { NOTES_STORAGE_KEY } from "#/features/notes/model/notes-storage";
import type { NoteType } from "#/features/notes/model/types";
import { Button } from "#/shared/components/button";
import { useLocalStorage } from "#/shared/lib/hooks/use-local-storage";
import { Page, PageBody, PageHeader } from "#/widgets/header/page";
import { PlusIcon } from "lucide-react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const NotePage = () => {
  const [notes] = useLocalStorage<NoteType[]>(NOTES_STORAGE_KEY, []);
  const { id } = useParams();
  const note = useMemo(
    () => (Array.isArray(notes) ? notes.find((note) => note.id === id) : null),
    [notes, id],
  );
  return (
    <Page>
      <PageHeader
        back
        actions={[
          <Button key="add" variant="secondary" size="icon-lg">
            <PlusIcon />
          </Button>,
        ]}
      />
      <PageBody>
        {note ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">{note.title}</h2>
            <p className="text-lg text-muted-foreground">{note.content}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Заметка не найдена</h2>
          </div>
        )}
      </PageBody>
    </Page>
  );
};
