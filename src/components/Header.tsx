import { Separator } from "@radix-ui/react-separator";
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 border-b border-border bg-background">
      <div>
        <img className="w-28 h-26" src={Logo} alt="Tim logotype" />
      </div>

      <nav>
        <ul className="flex list-none gap-3 items-center text-sm font-medium">
          <li className="cursor-pointer hover:underline"><a className="#projects">Projects</a></li>
          <Separator orientation="vertical" className="h-4 bg-muted" />
          <li className="cursor-pointer hover:underline">Contact me</li>
          <Separator orientation="vertical" className="h-4 bg-muted" />
          <li className="cursor-pointer hover:underline">My resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
