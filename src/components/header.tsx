import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[70rem] flex-row justify-end px-4 lg:px-8">
        <div className="flex-row gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
