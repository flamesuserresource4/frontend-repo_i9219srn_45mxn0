import { useState } from 'react';
import { Coffee, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20 border border-white/10">
          <nav className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/90 text-white">
                <Coffee size={20} />
              </span>
              <span className="text-lg font-semibold tracking-tight">Brew & Bloom</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#menu" className="text-sm text-white/80 hover:text-white">Menu</a>
              <a href="#story" className="text-sm text-white/80 hover:text-white">Our Story</a>
              <a href="#visit" className="text-sm text-white/80 hover:text-white">Visit</a>
            </div>

            <div className="hidden md:flex">
              <a href="#order" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-amber-400">
                Order Now <ArrowRight size={16} />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </nav>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-3">
                <a href="#menu" className="text-sm text-white/80 hover:text-white">Menu</a>
                <a href="#story" className="text-sm text-white/80 hover:text-white">Our Story</a>
                <a href="#visit" className="text-sm text-white/80 hover:text-white">Visit</a>
                <a href="#order" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-amber-400">
                  Order Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
