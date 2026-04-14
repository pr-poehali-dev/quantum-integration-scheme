import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Связаться с нами</p>
            <h2 className="text-3xl font-light text-white md:text-4xl mb-6">
              Оставьте заявку
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Расскажите о вашем проекте — мы рассчитаем стоимость и сроки изготовления. Работаем с корпоративными клиентами по всей России.
            </p>
            <div className="space-y-6">
              <a
                href="https://t.me/FidarisMurtazin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-white/20">
                  <Icon name="Send" size={18} />
                </div>
                <span>Telegram: @FidarisMurtazin</span>
              </a>
              <a
                href="https://vk.com/lazertatarstan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-white/20">
                  <Icon name="Users" size={18} />
                </div>
                <span>ВКонтакте: lazertatarstan</span>
              </a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center border border-amber-400 text-amber-400">
                  <Icon name="Check" size={32} />
                </div>
                <p className="text-xl text-white">Заявка отправлена!</p>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Опишите ваш заказ — вид изделия, тираж, пожелания"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 py-4 text-sm font-medium text-black transition-colors hover:bg-amber-300"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
