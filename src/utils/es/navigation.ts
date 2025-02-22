
const navBarLinks = [
  { name: "Home", url: "/MotorMecanic/" },
  { name: "Productos", url: "/MotorMecanic/products" },
  { name: "Servicios", url: "/MotorMecanic/services" },
  
 //{ name: "Blog", url: "/fr/blog" },

  { name: "Contacto", url: "/MotorMecanic/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/fr/welcome-to-docs/" },
      { name: "Nuestros Equipamentos", url: "/fr/products" },
      { name: "Servicios de Construcción", url: "/fr/services" },
    ],
  },
  {
    section: "Sociedad",
    links: [
      { name: "A proposito de nosotros", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carreras", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};