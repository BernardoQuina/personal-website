import { Github } from 'lucide-react';

import { Aws } from './icons/aws';
import { Linkedin } from './icons/linkedin';
import { X } from './icons/x';

export function Footer() {
  return (
    <footer
      id="footer"
      className="snap-point w-full items-center overflow-hidden"
    >
      <div className="mt-auto w-full max-w-[70rem] justify-between gap-12 px-4 py-12 sm:flex-row sm:gap-0 lg:px-8">
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
          <div className="items-center gap-4 self-start px-6 sm:px-0">
            <span className="text-sm font-medium text-muted-foreground">
              Find me at
            </span>
            <div className="flex-row gap-4">
              <a
                href="https://www.github.com/BernardoQuina/"
                target="_blank"
                aria-label="Go to my GitHub profile"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                className="h-fit w-fit"
                href="https://www.linkedin.com/in/bernardo-quina/"
                target="_blank"
                aria-label="Go to my LinkedIn profile"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                className="h-fit w-fit"
                href="https://www.x.com/bernardoquina/"
                aria-label="Go to my X (Twitter) profile"
                target="_blank"
                rel="noreferrer"
              >
                <X className="h-5 w-5" />
              </a>
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
