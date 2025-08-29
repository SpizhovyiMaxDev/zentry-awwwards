import Logo from "../ui/Logo";
import FooterTitle from "../ui/FooterTitle";
import ContactsList from "../ui/ContactsList";

function Footer() {
  return (
    <footer className="overflow-hidden bg-violet-300 py-8">
      <div className="px-8">
        <FooterTitle text="Zentry" />

        <div className="sm: mx-auto mb-16 grid max-w-[90rem] grid-cols-2 gap-16 sm:mb-32 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Logo
            variant="black"
            containerClassName="h-20 w-20"
            alt="Zentry logo"
          />

          <ContactsList />
        </div>

        <div className="mx-auto flex max-w-[90rem] justify-between gap-8">
          <a
            target="_blank"
            href="https://maxdev.website"
            className="text-sm underline-offset-2 hover:underline"
          >
            &copy;Copyright by <b>maxdev.website</b> in{" "}
            {new Date().getFullYear()}
          </a>

          <p className="text-sm">Landing copy of ZENTRY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
