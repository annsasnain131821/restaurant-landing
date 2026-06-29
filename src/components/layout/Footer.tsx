import Container from '../common/Container';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-stone-950/80">
      <Container className="flex flex-col gap-4 py-8 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Maison Éclat. Crafted for unforgettable evenings.</p>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-white">
            Instagram
          </a>
          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
