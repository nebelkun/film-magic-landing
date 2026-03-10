const prices = [
  {
    title: "Проявка",
    items: [
      { name: "C-41 / 35мм", price: "350 ₽" },
      { name: "C-41 / 120", price: "400 ₽" },
      { name: "ЧБ / 35мм", price: "400 ₽" },
      { name: "E-6 / 35мм", price: "500 ₽" },
    ],
  },
  {
    title: "Сканирование",
    items: [
      { name: "Базовое / 35мм рол", price: "350 ₽" },
      { name: "Высокое / 35мм рол", price: "700 ₽" },
      { name: "Базовое / 120 рол", price: "300 ₽" },
      { name: "TIFF / за кадр", price: "80 ₽" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 text-center">
          Цены
        </p>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-20">
          Прайс-лист
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {prices.map((group) => (
            <div key={group.title} className="bg-card rounded-sm p-8 shadow-card border border-border">
              <h3 className="text-2xl font-display mb-8 text-primary">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="text-secondary-foreground font-light">{item.name}</span>
                    <span className="text-foreground font-medium">{item.price}</span>
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

export default PricingSection;
