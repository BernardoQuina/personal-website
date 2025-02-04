import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Linkedin } from './icons/linkedin';

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-14 w-full items-center justify-center">
      <div className="w-full max-w-[70rem] flex-row justify-end px-4 lg:px-8">
        <div className="flex-row gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden h-full py-0 xs:flex"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/BernardoQuina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Get in touch via my LinkedIn profile"
              className="h-fit w-fit"
            >
              <div className="relative">
                <div className="absolute left-[50%] top-[50%] h-4 w-4 translate-x-[-50%] translate-y-[-50%] bg-white" />
                <Linkedin className="z-0 min-h-5 min-w-5 fill-[#0A66C2]" />
              </div>
              Get in touch
            </a>
          </Button>
          <Button
            variant="outline"
            className="max-h-9 min-w-9 px-0 xs:hidden"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/BernardoQuina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Get in touch via my LinkedIn profile"
              className="h-fit w-fit"
            >
              <div className="relative">
                <div className="absolute left-[50%] top-[50%] h-4 w-4 translate-x-[-50%] translate-y-[-50%] bg-white" />
                <Linkedin className="z-0 min-h-5 min-w-5 fill-[#0A66C2]" />
              </div>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
