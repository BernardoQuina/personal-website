import Link from 'next/link';
import { Globe, Github } from 'lucide-react';

import { Aws } from './icons/aws';
import { Linkedin } from './icons/linkedin';
import { X } from './icons/x';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="mt-20 w-full items-center overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[70rem] justify-between gap-12 px-4 py-12 sm:flex-row sm:gap-0 lg:px-8">
        <div className="w-full flex-row items-center justify-around sm:contents sm:justify-between">
          <div className="gap-4">
            <Link href="/" className="justify-center">
              <h1 className="text-xs font-bold">BERNARDO QUINA</h1>
            </Link>
            <div>
              <div className="flex-row gap-1">
                <p className="text-sm text-muted-foreground">
                  Website deployed in
                </p>
                <Aws className="h-7 w-7" />
              </div>
              <p className="-mt-1.5 text-center text-sm text-muted-foreground sm:text-start">
                Bernardo Quina <br />
                Lisbon, Portugal
              </p>
            </div>
          </div>
          <div className="items-center gap-4 self-start">
            <span className="text-sm font-medium text-muted-foreground">
              Find me at
            </span>
            <div className="gap-4 xs:flex-row">
              <div className="flex-row gap-4">
                <a
                  className="h-fit w-fit"
                  href="https://bernardoquina.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="h-5 w-5" />
                </a>

                <a
                  href="https://www.github.com/BernardoQuina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <div className="flex-row gap-4">
                <a
                  className="h-fit w-fit"
                  href="https://www.linkedin.com/in/bernardo-quina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  className="h-fit w-fit"
                  href="https://www.x.com/bernardoquina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <X className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center sm:items-end sm:pl-6">
          <div className="flex-row gap-4 sm:contents sm:gap-0">
            <Button variant="link" asChild className="w-fit px-0">
              <Link href="/privacy">
                <span className="text-sm font-medium">Privacy Policy</span>
              </Link>
            </Button>
            <Button variant="link" asChild className="w-fit px-0">
              <Link href="/terms">
                <span className="text-sm font-medium">Terms of Service</span>
              </Link>
            </Button>
          </div>
          <span className="pt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bernardo Quina
          </span>
        </div>
      </div>
    </footer>
  );
}
