import { Separator } from "@radix-ui/react-separator";
import Logo from '../assets/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 border-b border-border bg-background">
      <div>
        <img className="w-28 h-26" src={Logo} alt="Tim logotype" />
      </div>

      <nav>
        <ul className="flex list-none gap-3 items-center text-sm font-medium">
          <li className="cursor-pointer hover:underline">
            <a href="#projects">{t('header.projects')}</a>
          </li>
          <Separator orientation="vertical" className="h-4 bg-muted" />

          <li className="cursor-pointer hover:underline">
            {t('header.contact')}
          </li>
          <Separator orientation="vertical" className="h-4 bg-muted" />

          <li className="cursor-pointer hover:underline">
            <a href="/assets/Timofey Yelivanov-2-1.pdf" download>
              {t('header.resume')}
            </a>
          </li>

          {/* Кнопки переключения языка */}
          <Separator orientation="vertical" className="h-4 bg-muted" />
          <li>
            <button onClick={() => changeLanguage('en')} className="text-xs hover:underline">EN</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('ru')} className="text-xs hover:underline">RU</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
