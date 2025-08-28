function Footer() {
  return (
    <footer className="overflow-hidden bg-violet-300 py-4">
      <div className="mx-auto max-w-[120rem] px-8">
        <a
          href="https://maxdev.website"
          target="_blank"
          className="font-zentry block cursor-pointer text-center text-[20dvw] leading-none tracking-tight text-black uppercase"
        >
          Maxdev
        </a>
      </div>

      <div className="grid grid-cols-1">
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <span>Explore</span>

          <ul></ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
