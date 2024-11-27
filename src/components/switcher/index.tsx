import { useRef, useState } from "react";
import Icon from "../Icon";
import { useOnClickOutside } from "usehooks-ts";

const Switcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("Türkçe");

  // useRef hook'u ile dropdown menüsünü referans alıyoruz
  const switcherRef = useRef(null);

  // Dropdown dışında bir yere tıklanırsa dropdown kapanacak
  useOnClickOutside(switcherRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: any) => {
    setLanguage(lang);
    setIsOpen(false); // Dil seçildikten sonra dropdown kapanır
  };

  return (
    <div className="relative inline-block text-left" ref={switcherRef}>
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Icon icon="earth2" size={16} className="text-white" />
        <span className="text-sm text-white">{language}</span>
        <Icon icon="chevron-down" size={16} color="#fff" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white text-black rounded-md shadow-lg">
          <ul>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm rounded-md font-medium"
              onClick={() => handleLanguageChange("Türkçe")}
            >
              Türkçe
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm rounded-md font-medium"
              onClick={() => handleLanguageChange("English")}
            >
              English
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Switcher;
