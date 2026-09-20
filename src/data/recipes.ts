import type { Recipe } from "../types/recipe";

/**
 * Contenu de test / gabarit (brief section 4). A remplacer par le contenu
 * reel valide avec Pauline avant mise en ligne. La premiere recette reprend
 * l'exemple fourni dans le brief ; les six suivantes suivent le meme schema.
 */
export const recipes: Recipe[] = [
  {
    slug: "salade-chou-fleur-noisettes-stracciatella",
    titre: "Salade tiède de chou-fleur rôti, noisettes et stracciatella",
    image: "/images/recettes/salade-chou-fleur-noisettes-stracciatella.jpg",
    imageAlt:
      "Assiette creuse à motifs bleus garnie de chou-fleur rôti, noisettes, céleri, stracciatella, ciboulette et copeaux de parmesan",
    tags: ["Végétarien", "Sans gluten"],
    // TODO: quantités, temps et étapes rédigés d'après la liste d'ingrédients de Pauline
    // (deux ingrédients manquants dans son message) — à valider avec elle.
    preparation_min: 15,
    cuisson_min: 25,
    portions: 5,
    intro:
      "Du chou-fleur rôti bien doré, des noisettes qui croquent et une stracciatella toute crémeuse. Ce plat tiède se prépare en un clin d'œil et fait son petit effet sur la table.",
    ingredients: {
      "LA BASE": [
        "1 gros chou-fleur",
        "4 branches de céleri",
        "100 g de noisettes",
        "2 c. à soupe d'huile d'olive",
        "Sel, poivre",
      ],
      "POUR SERVIR": [
        "250 g de stracciatella",
        "1 botte de ciboulette",
        "Quelques copeaux de parmesan",
      ],
    },
    etapes: [
      "PRÉCHAUFFEZ le four à 200°C.",
      "DÉTAILLEZ le chou-fleur en petits bouquets, enrobez-les d'huile, de sel et de poivre.",
      "ENFOURNEZ 25 minutes, jusqu'à ce qu'ils soient bien dorés.",
      "TORRÉFIEZ les noisettes à sec dans une poêle pendant 5 minutes.",
      "ÉMINCEZ finement le céleri et CISELEZ la ciboulette.",
      "DRESSEZ le chou-fleur tiède, le céleri et les noisettes dans un plat creux.",
      "DÉPOSEZ la stracciatella, parsemez de ciboulette et de copeaux de parmesan.",
    ],
  },
  {
    slug: "carpaccio-betterave-saumon-mures",
    titre: "Carpaccio de betterave, saumon, pesto et mûres",
    image: "/images/recettes/carpaccio-betterave-saumon-mures.jpg",
    imageAlt:
      "Grand plat bleu et blanc garni de carpaccio de betterave, morceaux de saumon, oignons rouges, mûres, pesto et graines de sésame",
    tags: ["Poisson"],
    // TODO: quantités, temps et étapes rédigés d'après la liste d'ingrédients de Pauline
    // (betterave, saumon, pesto, mûres, oignons rouges, graines de sésame) — à valider avec elle,
    // notamment la préparation de la betterave (crue ou cuite) et du saumon (cru, mariné ou fumé).
    preparation_min: 20,
    cuisson_min: 0,
    portions: 5,
    intro:
      "Des rondelles de betterave d'un rouge intense, du saumon fondant, des mûres qui claquent et un pesto bien vert. Un plat qui se dresse en 20 minutes et qui met tout le monde d'accord.",
    ingredients: {
      "LE CARPACCIO": ["4 betteraves", "300 g de saumon"],
      "LA GARNITURE": [
        "1 oignon rouge",
        "100 g de mûres",
        "4 c. à soupe de pesto",
        "2 c. à soupe de graines de sésame",
      ],
    },
    etapes: [
      "TRANCHEZ finement les betteraves et disposez-les en rosace sur un grand plat.",
      "COUPEZ le saumon en morceaux et répartissez-les sur la betterave.",
      "ÉMINCEZ l'oignon rouge en fines rondelles.",
      "PARSEMEZ d'oignon rouge et de mûres.",
      "NAPPEZ de pesto.",
      "SAUPOUDREZ de graines de sésame et servez aussitôt.",
    ],
  },
  {
    slug: "ceviche-thon-blanc-snacke-herbes",
    titre: "Ceviche revisité de thon blanc snacké, oignon blanc et coriandre",
    image: "/images/recettes/ceviche-thon-blanc-snacke-herbes.jpg",
    imageAlt:
      "Plat en grès gris garni de tranches de thon blanc snacké, oignon blanc, coriandre et herbes fraîches, dans un jus à l'huile d'olive",
    tags: ["Poisson"],
    // TODO: quantités, temps et étapes rédigés d'après la liste d'ingrédients de Pauline
    // (thon blanc snacké, herbes, oignon blanc, coriandre). Le citron vert (ceviche) est une
    // hypothèse de ma part, et les « herbes » sont à préciser — à valider avec elle.
    preparation_min: 15,
    cuisson_min: 5,
    portions: 5,
    intro:
      "Un ceviche à notre façon : le thon blanc est juste snacké, puis nappé d'une marinade fraîche d'oignon blanc et de coriandre. Léger, parfumé, prêt en 20 minutes.",
    ingredients: {
      "LE THON": ["600 g de thon blanc", "1 c. à soupe d'huile d'olive", "Sel, poivre"],
      "LA MARINADE": [
        "1 oignon blanc",
        "1 botte de coriandre",
        "Quelques herbes fraîches",
        "Le jus de 2 citrons verts",
        "3 c. à soupe d'huile d'olive",
      ],
    },
    etapes: [
      "SALEZ et poivrez le thon.",
      "SNACKEZ-le 1 à 2 minutes de chaque côté dans une poêle très chaude huilée, il doit rester rosé à cœur.",
      "LAISSEZ-le reposer quelques minutes, puis TRANCHEZ-le.",
      "ÉMINCEZ l'oignon blanc, CISELEZ la coriandre et les herbes.",
      "MÉLANGEZ-les avec le jus de citron vert et l'huile d'olive.",
      "DISPOSEZ le thon dans un plat, NAPPEZ de marinade et laissez mariner 10 minutes avant de servir.",
    ],
  },
  {
    slug: "roules-courgettes-fromage-frais-pignons",
    titre: "Roulés de courgettes au fromage frais et pignons grillés",
    image: "/images/recettes/roules-courgettes-fromage-frais-pignons.jpg",
    imageAlt:
      "Plat bleu garni de roulés de courgettes dorées fourrés de fromage frais et parsemés de pignons de pin grillés",
    tags: ["Végétarien", "Sans gluten"],
    // TODO: quantités, temps et étapes rédigés d'après la description de Pauline (roulés de courgettes,
    // fromage frais, pignons de pin grillés) — à valider avec elle, notamment le type de fromage frais,
    // l'assaisonnement de la farce et la cuisson des courgettes (four ou poêle/grill).
    preparation_min: 20,
    cuisson_min: 15,
    portions: 5,
    intro:
      "Des lamelles de courgettes dorées, roulées autour d'un fromage frais bien crémeux. Les pignons grillés apportent le croquant : c'est simple, joli, et ça disparaît vite.",
    ingredients: {
      "LES ROULÉS": [
        "4 courgettes",
        "200 g de fromage frais",
        "2 c. à soupe d'huile d'olive",
        "Sel, poivre",
      ],
      "POUR SERVIR": ["40 g de pignons de pin"],
    },
    etapes: [
      "PRÉCHAUFFEZ le four à 200°C.",
      "TRANCHEZ les courgettes en fines lamelles dans la longueur.",
      "BADIGEONNEZ-les d'huile d'olive, salez et poivrez.",
      "ENFOURNEZ 15 minutes, jusqu'à ce qu'elles soient dorées et souples.",
      "TORRÉFIEZ les pignons à sec dans une poêle pendant 3 minutes.",
      "TARTINEZ chaque lamelle de fromage frais, puis ROULEZ-la sur elle-même.",
      "DISPOSEZ les roulés sur un plat et PARSEMEZ de pignons grillés.",
    ],
  },
  {
    slug: "buddha-bowl-quinoa-betteraves-kale",
    titre: "Buddha bowl automnal : quinoa, betteraves rôties, chou kale et sauce tahini-citron",
    tags: ["Vegan", "Sans gluten"],
    preparation_min: 20,
    cuisson_min: 35,
    portions: 5,
    intro:
      "Coloré et généreux, ce bowl fait le plein de vitamines pour affronter la rentrée. Chaque bouchée mélange du croquant, du fondant et du crémeux.",
    ingredients: {
      "LE BOWL": ["300 g de quinoa", "4 betteraves crues", "200 g de chou kale", "2 c. à soupe d'huile d'olive", "Sel, poivre"],
      "LA SAUCE": ["3 c. à soupe de tahini", "Le jus d'1 citron", "1 c. à soupe d'eau", "1/2 gousse d'ail"],
      "POUR SERVIR": ["1 poignée de graines de tournesol"],
    },
    etapes: [
      "PRÉCHAUFFEZ le four à 200°C.",
      "ÉPLUCHEZ et coupez les betteraves en quartiers, enrobez-les d'huile.",
      "ENFOURNEZ 35 minutes jusqu'à ce qu'elles soient tendres.",
      "RINCEZ le quinoa et cuisez-le selon les indications du paquet.",
      "MASSEZ le chou kale avec un filet d'huile pour l'attendrir.",
      "MÉLANGEZ le tahini, le jus de citron, l'eau et l'ail pour la sauce.",
      "DRESSEZ le quinoa, les betteraves et le chou kale, NAPPEZ de sauce et parsemez de graines.",
    ],
  },
  {
    slug: "soupe-potimarron-roti-lait-coco",
    titre: "Soupe de potimarron rôti, lait de coco et graines de courge toastées",
    tags: ["Vegan", "Sans gluten"],
    preparation_min: 15,
    cuisson_min: 40,
    portions: 5,
    intro:
      "Une soupe veloutée et réconfortante, parfaite pour les soirées qui fraîchissent. Le potimarron rôti au four concentre toute sa douceur.",
    ingredients: {
      "LA SOUPE": [
        "1 potimarron",
        "1 oignon",
        "400 ml de lait de coco",
        "500 ml de bouillon de légumes",
        "2 c. à soupe d'huile d'olive",
        "Sel, poivre",
      ],
      "POUR SERVIR": ["1 poignée de graines de courge toastées", "Quelques gouttes d'huile d'olive", "Pain au levain (en accompagnement)"],
    },
    etapes: [
      "PRÉCHAUFFEZ le four à 200°C.",
      "COUPEZ le potimarron en quartiers (pas besoin de l'éplucher), enrobez-le d'huile.",
      "ENFOURNEZ 35 minutes jusqu'à ce qu'il soit fondant.",
      "FAITES revenir l'oignon émincé dans une casserole.",
      "AJOUTEZ le potimarron rôti, le bouillon et le lait de coco.",
      "MIXEZ jusqu'à obtenir une texture bien lisse, rectifiez l'assaisonnement.",
      "SERVEZ parsemé de graines de courge toastées, avec du pain au levain.",
    ],
  },
  {
    slug: "galettes-pois-chiches-legumes-sauce-citron",
    titre: "Galettes de pois chiches et légumes, sauce yaourt végétal-citron",
    tags: ["Vegan", "Sans lactose"],
    preparation_min: 20,
    cuisson_min: 20,
    portions: 5,
    intro:
      "Croustillantes dehors, fondantes dedans : ces galettes se dégustent chaudes ou tièdes. Un dîner qui fait aussi le bonheur des lunchboxes du lendemain.",
    ingredients: {
      "LES GALETTES": [
        "400 g de pois chiches cuits",
        "1 carotte râpée",
        "1 courgette râpée et essorée",
        "2 c. à soupe de farine de pois chiche",
        "1 c. à café de cumin",
        "Sel, poivre",
        "2 c. à soupe d'huile d'olive (pour la cuisson)",
      ],
      "LA SAUCE": ["200 g de yaourt végétal nature", "Le jus d'1/2 citron", "Quelques feuilles de menthe ciselées", "Sel, poivre"],
    },
    etapes: [
      "ÉCRASEZ les pois chiches à la fourchette, sans les réduire en purée complète.",
      "MÉLANGEZ avec la carotte, la courgette, la farine de pois chiche et le cumin.",
      "FORMEZ des galettes avec les mains.",
      "FAITES cuire les galettes 4 minutes de chaque côté dans l'huile chaude.",
      "MÉLANGEZ le yaourt végétal, le jus de citron et la menthe pour la sauce.",
      "SERVEZ les galettes chaudes, nappées de sauce.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}
