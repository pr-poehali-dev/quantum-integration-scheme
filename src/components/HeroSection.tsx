import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/64b3b642-d0fa-484c-9ecc-c7022ad73828/bucket/446dd845-5c71-485b-aa37-d0e0413d42b2.jpg',
  'https://cdn.poehali.dev/projects/64b3b642-d0fa-484c-9ecc-c7022ad73828/bucket/d2ecaa76-1f49-4dcd-b57b-3a2e1909cd8b.jpg',
  'https://cdn.poehali.dev/projects/64b3b642-d0fa-484c-9ecc-c7022ad73828/bucket/025495ba-b109-4df9-937d-c28d6dfac45e.jpg',
  'https://cdn.poehali.dev/projects/64b3b642-d0fa-484c-9ecc-c7022ad73828/bucket/53b728d4-0cb8-4876-9e8a-20e484bd3536.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-amber-400 shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/64b3b642-d0fa-484c-9ecc-c7022ad73828/bucket/53b728d4-0cb8-4876-9e8a-20e484bd3536.jpg"
                  alt="Производство изделий из фанеры"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Изделия из фанеры
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Лазерная резка и гравировка · Упаковка · Декор
                </p>
                <p className="text-base text-white/60 max-w-lg leading-relaxed">
                  Производим упаковку, шкатулки, ключницы, медальницы, декоративные панели для офисов и ресторанов. Работаем с корпоративными клиентами — от малых серий до крупных партий.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://t.me/FidarisMurtazin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-none bg-amber-400 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-amber-300"
                  >
                    Написать в Telegram
                  </a>
                  <a
                    href="https://vk.com/lazertatarstan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-none border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    ВКонтакте
                  </a>
                  <a
                    href="https://vk.com/albums-217241390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-none border border-amber-400/60 px-6 py-3 text-sm font-medium text-amber-400 transition-colors hover:border-amber-400 hover:bg-amber-400/10"
                  >
                    Наши работы
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}