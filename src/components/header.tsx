import Link from 'next/link';

import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full items-center justify-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="w-full max-w-[70rem] flex-row justify-between px-4 lg:px-8">
        <Link href="/" className="justify-center">
          <h1 className="text-sm font-bold">BERNARDO QUINA</h1>
        </Link>
        <div className="flex-row gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
