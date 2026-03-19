import { type Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rivlo. {dict.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">
            {dict.footer.builtWith} Rivlo
          </p>
        </div>
      </div>
    </footer>
  );
}
