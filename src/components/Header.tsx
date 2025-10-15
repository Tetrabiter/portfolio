import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const [isMenuOpen , setMenuOpen] = useState(false);

  function toggleMenu(){
    setMenuOpen(!isMenuOpen);
  }


  return (
    <header className="w-full h-30 border-b border-border">
      <div className="flex justify-between items-center px-4">
        <div>
          <img className="w-28 h-28" src={Logo} alt="Tim logotype" />
        </div>

        <nav>
          <ul className="flex list-none gap-3 items-center text-sm font-medium">
            <li className="cursor-pointer hover:underline">
              <a href="#projects">Проекты</a>
            </li>
            <Separator orientation="vertical" className="h-4 bg-muted" />

            <li className="cursor-pointer hover:underline">
              <a href="#contacts">Контакты</a>
            </li>
            <Separator orientation="vertical" className="h-4 bg-muted" />

            <li className="cursor-pointer hover:underline">
              <a href="/assets/Timofey Yelivanov-2-1.pdf" download>
                Резюме
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
