import { CONTACTS_ITEMS } from "../data/contacts";
import ButtonLink from "../ui/ButtonLink";

function Footer() {
  return (
    <footer className="overflow-hidden bg-violet-300 py-8">
      <div className="px-8">
        <div className="mb-32">
          <a
            href="https://maxdev.website"
            target="_blank"
            className="font-zentry block cursor-pointer text-center text-[20dvw] leading-none tracking-tight text-black uppercase"
          >
            ZENTRY
          </a>
        </div>

        <div className="sm: mx-auto mb-32 grid max-w-[90rem] grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div>
            <img src="" alt="" />
          </div>

          {CONTACTS_ITEMS.map((item, i) => {
            return (
              <div key={i}>
                <h2 className="mb-6 text-xs text-black uppercase">
                  {item.heading}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {item.contacts.map((contact, i) => {
                    return (
                      <li key={i}>
                        {contact.type === "dummy" ? (
                          <p className="text-gray-800">{contact.name}</p>
                        ) : (
                          <ButtonLink href={`#${contact.name.toLowerCase}`}>
                            {contact.name}
                          </ButtonLink>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mx-auto flex max-w-[90rem] justify-between">
          <a
            target="_blank"
            href="https://maxdev.website"
            className="text-sm underline-offset-2 hover:underline"
          >
            &copy;Copyright by <b>maxdev.website</b> in
            {new Date().getFullYear()}
          </a>

          <p className="text-sm">Landing copy of ZENTRY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
