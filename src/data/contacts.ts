type ContactItem = {
  span: string;
  contacts: {
    name: string;
    type: string;
  }[];
};

export const CONTACTS_ITEMS: ContactItem[] = [
  {
    span: "Explore",
    contacts: [
      {
        name: "Home",
        type: "link",
      },
      {
        name: "Prologue",
        type: "link",
      },
      {
        name: "About",
        type: "link",
      },
      {
        name: "Contact",
        type: "link",
      },
    ],
  },

  {
    span: "Products",
    contacts: [
      {
        name: "Radiant",
        type: "dummy",
      },
      {
        name: "Nexus ",
        type: "link",
      },
      {
        name: "Zigma",
        type: "dummy",
      },
      {
        name: "Azul",
        type: "dummy",
      },
    ],
  },

  {
    span: "Follow Us",
    contacts: [
      {
        name: "Discord",
        type: "link",
      },
      {
        name: "X",
        type: "link",
      },
      {
        name: "Youtube",
        type: "link",
      },
      {
        name: "Medium",
        type: "link",
      },
    ],
  },

  {
    span: "Resources",
    contacts: [
      {
        name: "Media Kit",
        type: "link",
      },
    ],
  },
];
