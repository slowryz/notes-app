import { Card, CardContent, CardFooter } from "#/shared/components/card";
import { cn, paths } from "#/shared/lib";
import type { NoteType } from "#/features/notes/model/types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const NotesCard = ({
  id,
  title = "Не указано",
  content,
  preview = false,
}: NoteType) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(paths.note.replace(":id", id));
  }, [navigate, id]);

  return (
    <Card size="sm" className={cn(preview && "!pt-0")} onClick={handleClick}>
      {preview && (
        <CardContent className="!px-0 !py-0">
          <img
            src="/assets/img/example.jpg"
            className="w-full h-24 object-cover rounded-t-xl p-0"
          />
        </CardContent>
      )}
      <CardFooter className="flex flex-col items-start">
        <h3 className="inline-flex gap-2 items-center text-lg font-semibold">
          {title}
        </h3>
        {content && (
          <span className="font-medium text-sm text-muted-foreground truncate w-64">
            {content}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};
