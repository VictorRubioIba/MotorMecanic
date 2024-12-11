
const navBarLinks = [
  { name: "Inicio", url: "/MotorMecanic/" },
  { name: "Productos", url: "/MotorMecanic/products" },
  { name: "Servicios", url: "/MotorMecanic/services" },
  
 //{ name: "Blog", url: "/fr/blog" },

  { name: "Contacto", url: "/MotorMecanic/contact" },
];

const footerLinks = [
  {
    section: "Dirección",
    links: [
      { name: "Documentación", url: "" },
      { name: "Nuestros Equipamentos", url: "/fr/products" },
      { name: "Servicios de Construcción", url: "/fr/services" },
    ],
  },
  {
    section: "Sociedad",
    links: [
      { name: "A proposito de nosotros", url: "" },
      { name: "Blog", url: "" },
      { name: "Carreras", url: "" },
      { name: "Clientes", url: "" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};