const prices = [
  {
    title: "Проявка",
    items: [
      { name: "C-41 / 35мм", price: "1000 ₽" },
      { name: "C-41 / 120", price: "1000 ₽" },
      { name: "ЧБ / 35мм", price: "800 ₽" },
      { name: "E-6 / 35мм", price: "1000 ₽" },
    ],
  },
  {
    title: "Сканирование",
    items: [
      { name: "Базовое / 35мм рол", price: "500 ₽" },
      { name: "Высокое / 35мм рол", price: "700 ₽" },
      { name: "Базовое / 120 рол", price: "500 ₽" },
      { name: "Высокое+TIFF / за кадр", price: "100 ₽" },
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

        <p className="text-secondary-foreground/70 text-sm md:text-base text-center max-w-2xl mx-auto mt-12 leading-relaxed">
          Срок выполнения заказа - от 2 до 12 дней (обычно все успеваем за 1-7 дней), в зависимости от количества накопившихся плёнок. Проявка обычно проводится по воскресеньям, практически каждую неделю. В ближайшее несколько месяцев мы планируем сократить срок выполнения до нескольких часов.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
