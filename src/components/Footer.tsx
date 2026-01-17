const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl tracking-wider">
            EREKLE <span className="text-primary">BAGASHVILI</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Built for the endless road.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
