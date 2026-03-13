import filmStrips from "@/assets/film-strips.jpg";
import filmScanner from "@/assets/film-scanner.jpg";

const services = [
  {
    image: filmStrips,
    title: "Проявка плёнки",
    description:
      "C-41, E-6, ЧБ — работаем со всеми популярными процессами. Свежая химия и строгий контроль температуры гарантируют стабильный результат.",
    features: ["C-41 цветной негатив", "E-6 слайд", "ЧБ любые форматы", "Кросс-процесс"],
  },
  {
    image: filmScanner,
    title: "Сканирование",
    description:
      "Сканируем на профессиональных сканерах Konica, Nikon. Возможна ручная цветокоррекция каждого кадра для получения максимального качества.",
    features: ["Базовое разрешение 2752×1831", "Высокое разрешение 7428x4988", "TIFF без сжатия", "Цветокоррекция"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 text-center">
          Услуги
        </p>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-20">
          Что мы делаем
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="overflow-hidden rounded-sm mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-display mb-4">{service.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-secondary-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
