const SectionPlaceholder = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center bg-gradient-to-br space-y-6">
      {/* Анимированный спиннер */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-200"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>
      </div>
      
      {/* Текст */}
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-700">Загружаем секцию</p>
        <p className="text-sm text-gray-500">Пожалуйста, подождите...</p>
      </div>
      
      {/* Прогресс бар (опционально) */}
      <div className="w-48 bg-gray-200 rounded-full h-1.5">
        <div className="bg-green-500 h-1.5 rounded-full animate-pulse w-3/4"></div>
      </div>
    </div>
  );
};

export default SectionPlaceholder;