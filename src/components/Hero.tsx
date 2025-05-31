import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Компьютеры, телефоны и профессиональный ремонт
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            HAYKAN GROUP — ваш надежный партнер в мире технологий. Продажа
            техники, сборка ПК и качественный ремонт с гарантией.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="ShoppingCart" size={20} />
              Каталог товаров
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="Wrench" size={20} />
              Заказать ремонт
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon
                name="Monitor"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <h3 className="text-lg font-semibold">Компьютеры</h3>
              <p className="text-gray-300">Готовые ПК и сборка на заказ</p>
            </div>
            <div className="text-center">
              <Icon
                name="Smartphone"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <h3 className="text-lg font-semibold">Телефоны</h3>
              <p className="text-gray-300">Широкий выбор смартфонов</p>
            </div>
            <div className="text-center">
              <Icon
                name="Settings"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <h3 className="text-lg font-semibold">Ремонт</h3>
              <p className="text-gray-300">Быстро и с гарантией</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
