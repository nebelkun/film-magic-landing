const FooterSection = () => {
  return (
    <footer className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
          Контакты
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-8">
          Начнём?
        </h2>
        <p className="text-muted-foreground font-light max-w-md mx-auto mb-10">
          Свяжитесь с нами любым удобным способом — расскажем подробнее и поможем с первым заказом
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:internetworm@narod.ru"
            className="inline-block border border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            
            Написать нам
          </a>
          <a
            href="https://t.me/kulturaphoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            
            Telegram
          </a>
          <a
            href="tel:+79626160660"
            className="inline-block border border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            
            Позвонить
          </a>
        </div>

        <p className="text-muted-foreground text-sm mb-16">г. Саратов, ул. Чернышевского 94, корпус 3, 2 этаж фотостудия "Культура"

        </p>
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3e1dc4f1df3bc517c72333173b99ba66505733cb8ad5f12b05ea1dd6134a55d4&amp;width=480&amp;height=480&amp;lang=ru_RU&amp;scroll=true"></script>
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2026 Культура Пленки. Все кадры проявлены с любовью.
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;
