const steps = [
  { number: "01", title: "Оставьте пленку в лаборатории", desc: "Привезите лично или отправьте почтой — мы работаем по всей России" },
  { number: "02", title: "Проявка", desc: "Бережно проявляем в свежей химии с точным контролем температуры" },
  { number: "03", title: "Сканирование", desc: "Сканируем каждый кадр с ручной цветокоррекцией" },
  { number: "04", title: "Получите результат", desc: "Скачайте файлы из облака или заберите негативы" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4 text-center">
          Процесс
        </p>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-20">
          Как это работает
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl font-display text-primary/15 font-bold leading-none">
                {step.number}
              </span>
              <h3 className="text-xl font-display mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
