import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Cpu" size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              HAYKAN GROUP
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Товары
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
