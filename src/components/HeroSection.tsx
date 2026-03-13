import heroImage from "@/assets/hero-darkroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Проявка плёнки в тёмной комнате"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-light tracking-[0.3em] uppercase text-sm mb-6 font-body">
          фотолаборатория "Культура Пленки"





 








 









        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight mb-8">
          Проявляем
          <br />
          <span className="text-gradient italic">ваши кадры</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
          Профессиональная проявка и сканирование фотоплёнки с&nbsp;бережным
          отношением к каждому кадру
        </p>
        <a href="#services" className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity">
          
          Наши услуги
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-primary/40 animate-pulse" />
      </div>
    </section>);};export default HeroSection;
