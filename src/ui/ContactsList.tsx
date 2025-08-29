import { CONTACTS_ITEMS } from "../data/contacts";
import ButtonLink from "./ButtonLink";

function ContactsList() {
  return (
    <>
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
                    <ButtonLink
                      type={contact.type}
                      href={`#${contact.name.toLowerCase()}`}
                    >
                      {contact.name}
                    </ButtonLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ContactsList;
