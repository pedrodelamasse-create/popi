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
    slug: "curry-lentilles-corail-lait-coco",
    titre: "Curry de lentilles corail, lait de coco et riz basmati",
    tags: ["Vegan", "Sans gluten"],
    preparation_min: 10,
    cuisson_min: 30,
    portions: 5,
    intro:
      "Un curry doux et réconfortant qui se prépare presque tout seul. Les lentilles corail cuisent en 20 minutes et se marient à merveille avec le lait de coco et les épices douces.",
    ingredients: {
      "LE CURRY": [
        "300 g de lentilles corail",
        "400 ml de lait de coco",
        "1 oignon",
        "2 gousses d'ail",
        "1 morceau de gingembre frais (2 cm)",
        "2 c. à café de curcuma",
        "1 c. à café de cumin",
        "1 c. à soupe d'huile d'olive",
        "Sel, poivre",
      ],
      "POUR SERVIR": ["400 g de riz basmati", "Quelques feuilles de coriandre fraîche", "1/2 citron vert"],
    },
    etapes: [
      "ÉMINCEZ l'oignon, l'ail et le gingembre.",
      "FAITES revenir l'oignon 5 minutes dans l'huile chaude.",
      "AJOUTEZ l'ail, le gingembre, le curcuma et le cumin, mélangez 1 minute.",
      "VERSEZ les lentilles rincées et le lait de coco, portez à frémissement.",
      "LAISSEZ mijoter 20 minutes à couvert, en remuant de temps en temps.",
      "CUISEZ le riz basmati selon les indications du paquet.",
      "SERVEZ le curry sur le riz, parsemé de coriandre et d'un filet de citron vert.",
    ],
  },
  {
    slug: "poelee-champignons-polenta-cremeuse",
    titre: "Poêlée de champignons de saison, polenta crémeuse et noisettes",
    tags: ["Vegan", "Sans gluten"],
    preparation_min: 15,
    cuisson_min: 25,
    portions: 5,
    intro:
      "Terreuse et gourmande, cette poêlée sent bon la forêt en automne. La polenta crémeuse fait office de doudou du soir.",
    ingredients: {
      "LA POLENTA": ["250 g de polenta", "1 L de bouillon de légumes", "2 c. à soupe d'huile d'olive"],
      "LES CHAMPIGNONS": [
        "600 g de champignons de saison (cèpes, girolles ou champignons de Paris)",
        "2 gousses d'ail",
        "1 branche de thym",
        "2 c. à soupe d'huile d'olive",
        "Sel, poivre",
      ],
      "POUR SERVIR": ["1 poignée de noisettes torréfiées concassées", "Persil frais ciselé"],
    },
    etapes: [
      "PORTEZ le bouillon à ébullition, versez la polenta en pluie.",
      "FOUETTEZ 5 minutes jusqu'à obtenir une texture crémeuse, ajoutez l'huile d'olive.",
      "NETTOYEZ et émincez les champignons.",
      "FAITES revenir les champignons à feu vif 8 minutes dans l'huile chaude.",
      "AJOUTEZ l'ail et le thym en fin de cuisson, salez et poivrez.",
      "DRESSEZ la polenta dans les assiettes, garnissez de champignons.",
      "PARSEMEZ de noisettes concassées et de persil.",
    ],
  },
  {
    slug: "tarte-fine-butternut-chevre-miel",
    titre: "Tarte fine à la courge butternut, chèvre frais et miel de romarin",
    tags: ["Végétarien"],
    preparation_min: 20,
    cuisson_min: 35,
    portions: 5,
    intro:
      "Une tarte fine qui célèbre les courges de saison. Le chèvre frais et le miel apportent juste ce qu'il faut de douceur.",
    ingredients: {
      "LA BASE": ["1 pâte brisée", "1 petite courge butternut", "2 c. à soupe d'huile d'olive", "Sel, poivre"],
      "LA GARNITURE": [
        "150 g de fromage de chèvre frais",
        "2 c. à soupe de miel liquide",
        "1 branche de romarin",
        "Quelques noix concassées",
      ],
    },
    etapes: [
      "PRÉCHAUFFEZ le four à 200°C.",
      "ÉPLUCHEZ et tranchez finement la courge butternut.",
      "ÉTALEZ la pâte dans un moule, piquez le fond à la fourchette.",
      "DISPOSEZ les tranches de courge en rosace, arrosez d'huile, salez et poivrez.",
      "ENFOURNEZ 25 minutes.",
      "ÉMIETTEZ le chèvre frais sur la tarte, ENFOURNEZ encore 10 minutes.",
      "ARROSEZ de miel tiédi au romarin et parsemez de noix avant de servir.",
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
