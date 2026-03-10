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

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a

            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity" href="mailto:internetworm@narod.ru">
            
            Написать нам
          </a>
          <a

            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors" href="https://t.me/kulturaphoto">
            
            Telegram
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2026 Культура Пленки. Все кадры проявлены с любовью.
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;