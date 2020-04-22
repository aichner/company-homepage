//> Images
// Working svg
import webIMG from "../../../../assets/content/services/web.png";
import adIMG from "../../../../assets/content/services/ad.png";
import imageIMG from "../../../../assets/content/services/image.png";

export default {
  services: [
    {
      title: "Website / Shop / App",
      img: webIMG,
      lead: "Gib Deinem Business ein einzigartiges zu Hause!",
      text: `Wir designen und entwickeln Deine unique Homepage inkl. Online-Shop und 
      sonstigen Zusatzfunktionen.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/online-presence",
      },
    },
    {
      title: "Werbefilm",
      img: adIMG,
      lead: "Auch die tollsten Produkte benötigen Marketing!",
      text: `Ein Werbefilm ist der perfekte Weg zu einer höheren Bekanntheit und 
      dadurch zu garantiert mehr Umsatz.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/ads",
      },
    },
    {
      title: "Imagefilm",
      img: imageIMG,
      lead: "Setze Dein Unternehmen professionell ins Bild.",
      text: `Mit einem Imagefilm erhaltest Du ein Video, welches Du vielseitig und 
      auf allen Plattformen einsetzen kannst.`,
      action: {
        text: "Erkunden",
        color: "red",
        link: "/services/image",
      },
    },
  ],
};
