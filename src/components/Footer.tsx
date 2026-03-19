import { type Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-bold gradient-text">Rivlo</span>
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {dict.footer.rights}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {dict.footer.builtWith} Rivlo
          </p>
        </div>
      </div>
    </footer>
  );
}
