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

const Services = () => {
  const services = [
    {
      icon: "Laptop",
      title: "Ремонт компьютеров",
      description: "Диагностика и ремонт ПК, ноутбуков, замена комплектующих",
      features: ["Диагностика", "Замена деталей", "Чистка", "Настройка ПО"],
      price: "от 500₽",
    },
    {
      icon: "Smartphone",
      title: "Ремонт телефонов",
      description: "Ремонт экранов, батарей, камер и других компонентов",
      features: [
        "Замена экрана",
        "Ремонт кнопок",
        "Замена батареи",
        "Восстановление данных",
      ],
      price: "от 800₽",
    },
    {
      icon: "Cpu",
      title: "Сборка ПК",
      description: "Индивидуальная сборка компьютеров под ваши задачи",
      features: ["Подбор комплектующих", "Сборка", "Настройка", "Тестирование"],
      price: "от 2000₽",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Профессиональный ремонт и сборка техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name={service.icon as any}
                  size={64}
                  className="mx-auto mb-4 text-blue-600"
                />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  {service.price}
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
