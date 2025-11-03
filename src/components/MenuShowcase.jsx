import { Coffee, Star, Leaf } from 'lucide-react';

const items = [
  {
    title: 'Signature Cold Brew',
    desc: 'Slow-steeped for 18 hours. Smooth, bold, naturally sweet.',
    badge: 'Best Seller',
    icon: Coffee,
    color: 'from-amber-500/20 to-amber-400/10',
  },
  {
    title: 'Matcha Velvet Latte',
    desc: 'Ceremonial-grade matcha blended to silky perfection.',
    badge: 'New',
    icon: Leaf,
    color: 'from-emerald-500/20 to-emerald-400/10',
  },
  {
    title: 'Caramel Cloud',
    desc: 'Espresso, cold foam, and a whisper of sea salt caramel.',
    badge: 'Limited',
    icon: Star,
    color: 'from-blue-500/20 to-indigo-400/10',
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Sips youll love</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Handcrafted classics and playful seasonals, brewed fresh all day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  {item.badge}
                </div>
                <div className="rounded-xl bg-black/30 p-2 text-amber-300">
                  <item.icon size={20} />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-white/60">12 oz / 16 oz</span>
                <button className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-white">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
