import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      category: "Компьютеры",
      icon: "Monitor",
      items: [
        {
          name: "Игровой ПК",
          price: "от 60 000₽",
          specs: "RTX 4060, Intel i5",
        },
        { name: "Офисный ПК", price: "от 25 000₽", specs: "Intel i3, 8GB RAM" },
        { name: "Ноутбуки", price: "от 35 000₽", specs: "Различные модели" },
      ],
    },
    {
      category: "Телефоны",
      icon: "Smartphone",
      items: [
        { name: "iPhone", price: "от 50 000₽", specs: "Новые и б/у" },
        {
          name: "Samsung Galaxy",
          price: "от 20 000₽",
          specs: "Флагманы и бюджет",
        },
        {
          name: "Xiaomi",
          price: "от 15 000₽",
          specs: "Отличное соотношение цена/качество",
        },
      ],
    },
    {
      category: "Комплектующие",
      icon: "Cpu",
      items: [
        { name: "Видеокарты", price: "от 15 000₽", specs: "NVIDIA, AMD" },
        { name: "Процессоры", price: "от 8 000₽", specs: "Intel, AMD" },
        { name: "Оперативная память", price: "от 3 000₽", specs: "DDR4, DDR5" },
      ],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши товары</h2>
          <p className="text-xl text-gray-600">
            Широкий ассортимент техники по выгодным ценам
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center border-b">
                <Icon
                  name={category.icon as any}
                  size={48}
                  className="mx-auto mb-4 text-blue-600"
                />
                <CardTitle className="text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.specs}</p>
                      </div>
                      <Badge variant="outline">{item.price}</Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  <Icon name="ShoppingCart" size={16} />
                  Смотреть все
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
