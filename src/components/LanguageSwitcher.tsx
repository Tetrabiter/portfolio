import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('ru') ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="fixed top-4 right-4 z-50 bg-background/50 backdrop-blur-sm uppercase"
        >
            {i18n.language.startsWith('ru') ? 'EN' : 'RU'}
        </Button>
    );
};
