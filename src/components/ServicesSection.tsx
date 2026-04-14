import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Package',
    title: 'Упаковка из фанеры',
    description: 'Коробки, шкатулки, упаковка для новогодних подарков и сотового мёда. Любые размеры и формы под ваш продукт.',
  },
  {
    icon: 'Scan',
    title: 'Лазерная гравировка',
    description: 'Наносим логотипы, узоры и надписи на фанерные изделия с точностью до миллиметра.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Декоративные панели',
    description: 'Изготавливаем панели для офисов, ресторанов и банкетных залов. Уникальные орнаменты и фирменный стиль.',
  },
  {
    icon: 'Smartphone',
    title: 'Подставки и аксессуары',
    description: 'Телефонные подставки, ключницы, медальницы, минирамки — практичные изделия с красивой отделкой.',
  },
  {
    icon: 'Droplets',
    title: 'Покраска и обработка',
    description: 'Красим и покрываем изделия специальными маслами и красками — для защиты и эстетики.',
  },
  {
    icon: 'Building2',
    title: 'Корпоративные заказы',
    description: 'Работаем с крупными компаниями. Производим как малые серии, так и большие партии в короткие сроки.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-neutral-950 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Что мы делаем</p>
          <h2 className="text-3xl font-light text-white md:text-4xl">Наши услуги</h2>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-neutral-950 p-8 transition-colors hover:bg-neutral-900"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-amber-400/30 text-amber-400 group-hover:border-amber-400 transition-colors">
                <Icon name={service.icon} size={22} />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
