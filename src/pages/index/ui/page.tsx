import { NOTES_STORAGE_KEY } from "#/features/notes/model/notes-storage";
import type { NoteType } from "#/features/notes/model/types";
import { NotesCard } from "#/features/notes/ui/card";
import { Button } from "#/shared/components/button";
import { useLocalStorage } from "#/shared/lib/hooks/use-local-storage";
import { Page, PageBody, PageHeader } from "#/widgets/header/page";
import { PlusIcon, SettingsIcon } from "lucide-react";

export const IndexPage = () => {
  const [notes] = useLocalStorage<NoteType[]>(NOTES_STORAGE_KEY, []);
  return (
    <Page>
      <PageHeader
        title="Hello Roman 🤙"
        actions={[
          <Button key="settings" variant="secondary" size="icon-lg">
            <SettingsIcon />
          </Button>,
          <Button key="add" variant="secondary" size="icon-lg">
            <PlusIcon />
          </Button>,
        ]}
      />
      <PageBody>
        {Array.isArray(notes) &&
          notes.map((note) => <NotesCard key={note.id} {...note} />)}
      </PageBody>
    </Page>
  );
};
