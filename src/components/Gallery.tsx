import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/67d1554b-55dc-4d4e-a2c0-cfd084f72ba9.jpeg",
      title: "Apple продукция",
      description: "Наушники, планшеты и аксессуары Apple",
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/70b9ff78-8b42-41af-9b91-22fb709e90a8.jpeg",
      title: "Техника премиум класса",
      description: "Качественные устройства",
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/files/f203ddf1-8969-4cd6-b0ff-e5568e79966b.jpeg",
      title: "Современные гаджеты",
      description: "Инновационные решения",
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/files/761bf656-030c-4cb0-becb-91b70b378083.jpeg",
      title: "Электроника",
      description: "Широкий ассортимент",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🖼️ Наши товары
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на качественную технику в нашем магазине
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <Card
              key={photo.id}
              className={`overflow-hidden hover-scale group cursor-pointer ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      index === 0 ? "h-80" : "h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600">{photo.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
