import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Star size={14} className="text-amber-300" />
          New seasonal blends are here
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Crafted Coffee, Playful Vibes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Sip on small-batch brews and ice-cold specialties while the world animates around you.
          A cozy corner for early birds, night owls, and everyone in between.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          >
            Order Now <ArrowRight size={18} />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
