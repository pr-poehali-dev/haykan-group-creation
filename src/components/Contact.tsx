import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300">
            Мы всегда готовы помочь с выбором и ремонтом техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Phone"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">+7 916-424-08-00</p>
              <p className="text-gray-400">Ежедневно 9:00-19:00</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="text-center">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <CardTitle>Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">
                Город Москва, Пятницнское шоссе 18, " Митинский радио рынок"
                Павильон 2Л4
              </p>
              <p className="text-gray-400">Москва, 123456</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Mail"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">info@haykan.ru</p>
              <p className="text-gray-400">Ответим в течение часа</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Clock"
                size={48}
                className="mx-auto mb-4 text-blue-400"
              />
              <CardTitle>Режим работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">Пн-Вс 9:00-21:00</p>
              <p className="text-gray-400">Без выходных</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
          >
            <Icon name="MessageCircle" size={20} />
            Написать в WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
