import { CONTACTS_ITEMS } from "../data/contacts";
import ButtonLink from "../ui/ButtonLink";

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

        {CONTACTS_ITEMS.map((item, i) => {
          return (
            <div key={i}>
              <h2 className="mb-4 text-xs text-black uppercase">
                {item.heading}
              </h2>
              <ul className="flex flex-col gap-0.5">
                {item.contacts.map((contact, i) => {
                  return (
                    <li key={i}>
                      {contact.type === "dummy" ? (
                        <p>{contact.name}</p>
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
    </footer>
  );
}

export default Footer;
