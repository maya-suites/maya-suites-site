export type GuestReview = {
  name: string;
  stay: string;
  comment: string;
  /** Capture d'écran Airbnb d'origine, servant de preuve vérifiable (public/avis-airbnb/). */
  image: string;
  imageWidth: number;
  imageHeight: number;
};

/**
 * Avis voyageurs retranscrits depuis nos captures d'écran Airbnb
 * (public/avis-airbnb/). Tous sont des avis publics 5 étoiles, réels —
 * chaque avis reste vérifiable via sa capture d'écran d'origine (champ `image`).
 */
export const guestReviews: GuestReview[] = [
  { name: "Julien", stay: "4 nuits", comment: "Deuxième fois que je loue chez cet hôte et encore aucun problème. Service 10/10, rien à dire.", image: "/avis-airbnb/avis-02.png", imageWidth: 352, imageHeight: 438 },
  { name: "Sadjo", stay: "4 nuits", comment: "Le logement était propre, confortable et très agréable, exactement comme sur les photos. Tout était bien organisé et je me suis senti comme chez moi. La communication avec l'hôte était également très facile et agréable. Je recommande vivement cet appartement et je n'hésiterais pas à y revenir lors d'un prochain séjour !", image: "/avis-airbnb/avis-03.png", imageWidth: 352, imageHeight: 582 },
  { name: "Aymane", stay: "3 nuits", comment: "J'ai passé un chouette séjour ! L'endroit était propre, confortable et disposait de tout le nécessaire pour une visite en douceur. L'hôte a été amical, très réactif et toujours facile à joindre lorsque j'ai eu une question. L'arrivée et le départ se sont déroulés en toute simplicité. Je reviendrai certainement séjourner ici et je le recommande vivement à tout le monde.", image: "/avis-airbnb/avis-04.png", imageWidth: 360, imageHeight: 627 },
  { name: "Ilham", stay: "3 nuits", comment: "Excellent séjour ! Logement propre, confortable et conforme aux photos. Hôte très accueillant et disponible. Je recommande vivement !", image: "/avis-airbnb/avis-05.png", imageWidth: 356, imageHeight: 652 },
  { name: "Amine", stay: "4 nuits", comment: "J'ai passé un très bon séjour. L'appartement était très propre et confortable. Tout était bien pris en charge et je me suis senti très à l'aise tout au long de mon séjour. Je serais heureux de séjourner ici à nouveau !", image: "/avis-airbnb/avis-06.png", imageWidth: 359, imageHeight: 543 },
  { name: "Abdoulaye", stay: "28 nuits", comment: "Je réserve ce logement pour ma sœur et ses enfants. Ils n'avaient que des choses positives à dire sur ce logement. De plus, l'hôte a été très réactive pendant tout le séjour. Elle prenait régulièrement des nouvelles pour voir si tout se passait bien. Hautement recommandé !", image: "/avis-airbnb/avis-08.png", imageWidth: 361, imageHeight: 590 },
  { name: "Mahawa", stay: "5 nuits", comment: "Cosy appartement, très bien situé (beaucoup de commerces à proximité, j'ai même effectué la majorité de mon shopping sur place). L'hôte était très disponible et proactif. Merci pour l'accueil !", image: "/avis-airbnb/avis-09.png", imageWidth: 367, imageHeight: 545 },
  { name: "Hulya", stay: "3 nuits", comment: "Nous avons passé 3 nuits en famille dans ce superbe appartement. Il est très bien situé avec des commerces à proximité, la rue est calme, nous avons bien dormi. Le logement est sécurisé, propre et très beau. Merci à l'équipe Maya Suites d'avoir fait de notre séjour à Casablanca un agréable moment.", image: "/avis-airbnb/avis-10.png", imageWidth: 361, imageHeight: 604 },
  { name: "Mathilde", stay: "3 nuits", comment: "Je recommande vivement les appartements de Maya Suites. Séjour très paisible au sein de ce bien d'exception. Très bien situé. Merci à toute l'équipe.", image: "/avis-airbnb/avis-11.png", imageWidth: 357, imageHeight: 500 },
  { name: "Siham", stay: "2 nuits", comment: "Très agréable séjour, appartement confortable et bien situé. Hôte gentil et attentionné. Nous avions simplement demandé, si possible, de pouvoir quitter l'appartement 30 minutes plus tard, mais nous n'avons pas eu de retour à ce sujet. Dans l'ensemble, nous avons passé un très bon séjour.", image: "/avis-airbnb/avis-12.png", imageWidth: 362, imageHeight: 649 },
  { name: "Houda", stay: "3 nuits", comment: "Très joli appartement, très propre, bien éclairé et agréable. Maya a été très gentille et attentionnée, elle s'est assurée que tout se passait bien pendant notre séjour. Je recommande !", image: "/avis-airbnb/avis-13.png", imageWidth: 358, imageHeight: 504 },
  { name: "Sara", stay: "4 nuits", comment: "Très jolie studio, super emplacement ! Impeccable pour un pied-à-terre à Casa ! Pas besoin de voiture quand on est là, tout est à proximité !", image: "/avis-airbnb/avis-14.png", imageWidth: 363, imageHeight: 453 },
  { name: "Ikram", stay: "6 nuits", comment: "Belle maison avec une vue incroyable et un emplacement proche de tout ! L'appartement est bien meublé et très confortable. Chaque fois que j'ai eu une question ou un petit problème, l'hôte a été super réactif, a répondu immédiatement et s'est assuré que tout était parfaitement pris en charge.", image: "/avis-airbnb/avis-15.png", imageWidth: 359, imageHeight: 602 },
  { name: "Hervé", stay: "14 nuits", comment: "Le logement, sa situation géographique au centre de Casablanca dans un espace calme, proche de multiples commodités, ainsi que la réactivité des hôtes rendent le séjour très agréable. À refaire sans hésiter.", image: "/avis-airbnb/avis-16.png", imageWidth: 343, imageHeight: 499 },
  { name: "Khaled", stay: "10 nuits", comment: "Logement cosy, propre et confortable ; hôte très aimable et réactif. Je prévois de séjourner à nouveau ici la prochaine fois que je visiterai Casablanca.", image: "/avis-airbnb/avis-17.png", imageWidth: 346, imageHeight: 500 },
  { name: "Salma", stay: "4 nuits", comment: "Le logement était propre, confortable et conforme à la description. L'hôte s'est montrée très accueillante, réactive et disponible. J'ai même oublié un objet dans le logement et l'hôte m'a gentiment contactée pour me le rendre. C'est vraiment très appréciable ! Je recommande vivement ce logement et j'y retournerais avec grand plaisir.", image: "/avis-airbnb/avis-18.png", imageWidth: 363, imageHeight: 583 },
  { name: "Sam", stay: "1 nuit", comment: "Super séjour ! Appartement propre, confortable et très bien situé. Hôte sympa et réactif, je recommande sans hésiter.", image: "/avis-airbnb/avis-19.png", imageWidth: 358, imageHeight: 458 },
  { name: "Mélanie", stay: "3 nuits", comment: "Très bel appartement, hôte très disponible dès que nous avions besoin d'informations. Je recommande fortement ce logement pour un séjour agréable.", image: "/avis-airbnb/avis-20.png", imageWidth: 355, imageHeight: 495 },
  { name: "Nicolas", stay: "2 nuits", comment: "Appartement pratique avec parking privé souterrain et gardien 24h/24. Quartier calme. Petit supermarché à côté pour que vous puissiez acheter ce qu'il vous faut pour votre petit déjeuner. Maya est gentille et réactive. Je le recommande pour un petit séjour à Casablanca.", image: "/avis-airbnb/avis-21.png", imageWidth: 360, imageHeight: 582 },
  { name: "Eline", stay: "1 nuit", comment: "Superbe appartement décoré avec beaucoup de goût ! La localisation est top, tout s'est déroulé très bien et j'ai eu une super expérience tout le long. Je recommande vivement !", image: "/avis-airbnb/avis-22.png", imageWidth: 358, imageHeight: 504 },
];
