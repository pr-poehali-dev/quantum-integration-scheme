const stats = [
  { value: '5 лет', label: 'на рынке' },
  { value: 'Казань', label: 'производство' },
  { value: '1000×800', label: 'рабочая площадь станка, мм' },
  { value: 'несколько\nстанков', label: 'в производстве' },
];

export default function AboutSection() {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">О нас</p>
            <h2 className="text-3xl font-light text-white md:text-4xl mb-6">
              Производство в Казани
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Мы занимаемся изготовлением изделий из фанеры на лазерных ЧПУ-станках уже 5 лет. За это время реализовали сотни корпоративных заказов — от небольших сувениров до крупных серий подарочной упаковки.
            </p>
            <p className="text-white/60 leading-relaxed">
              Наши станки с рабочей площадью 1000×800 мм позволяют работать с изделиями любых форматов: от миниатюрных ключниц до больших декоративных панелей. Наносим гравировку, делаем сквозной рез, красим и покрываем маслами.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors">
                <p className="text-2xl font-light text-amber-400 mb-2 whitespace-pre-line">{stat.value}</p>
                <p className="text-sm text-white/50 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
