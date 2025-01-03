import { Globe, Github } from 'lucide-react';

import { Aws } from './icons/aws';
import { Linkedin } from './icons/linkedin';
import { X } from './icons/x';

export function Footer() {
  return (
    <footer className="mt-20 w-full items-center overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[70rem] justify-between gap-12 px-4 py-12 sm:flex-row sm:gap-0 lg:px-8">
        <div className="w-full flex-row items-center justify-around sm:contents sm:justify-between">
          <div className="justify-center">
            <div className="flex-column items-center gap-1 sm:items-start">
              <p className="text-sm text-muted-foreground">
                Website deployed in
              </p>
              <div className="flex-row gap-1">
                <p className="text-sm text-muted-foreground">and powered by</p>
                <Aws className="h-7 w-7" />
              </div>
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
        <div className="items-center justify-center gap-1 sm:items-end">
          <span className="text-sm text-muted-foreground">
            Lisbon, Portugal
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bernardo Quina
          </span>
        </div>
      </div>
    </footer>
  );
}
