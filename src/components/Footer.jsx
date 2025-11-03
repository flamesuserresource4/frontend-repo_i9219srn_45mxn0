export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Brew & Bloom. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#story" className="hover:text-white">Our Story</a>
            <a href="#visit" className="hover:text-white">Locations</a>
            <a href="#order" className="hover:text-white">Order</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
