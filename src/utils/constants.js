export const RECIPE_VARIATIONS = [
  {
    id: 1,
    name: "Classic Country Loaf",
    image:
      "https://www.pastryandprose.com/wp-content/uploads/2019/01/snowflake-1.jpg",
    description:
      "The gold standard. Crusty on the outside, soft and fluffy on the inside.",
    ingredients: [
      "Bread Flour: 500g",
      "Sourdough Starter: 100g",
      "Salt: 10g",
      "Parchment Paper: 1 sheet (to prevent sticking)",
    ],
    instructions: [
      "Stir your starter into {water}g of water until it looks like milk.",
      "Add your flour and salt. Mix by hand until the dry flour disappears.",
      "The Flour Nap: Let the dough rest for 45 minutes to self-knead and soften.",
      "No-Knead Strengthening: Instead of heavy kneading, every 30 minutes just pull an edge of the dough up and fold it over. Do this 4 times total.",
      "The Big Rise: Let the dough sit at {temp}° until it looks puffy and about 50% bigger.",
    ],
    baking: [
      "Heat your Dutch oven at 450°F for 45 minutes.",
      "Transfer: Place your dough onto parchment paper first. Use the paper as a 'sling' to lower the bread into the hot pot safely.",
      "Score the top and bake with the lid on for 20 minutes.",
      "Take the lid off and bake for 20 more minutes until golden brown.",
    ],
  },
  {
    id: 2,
    name: "Rosemary & Roasted Garlic",
    image:
      "https://simplicityandastarter.com/wp-content/uploads/2023/03/Sourdough-Garlic-Bread_15.png",
    description:
      "A savory bread filled with garlic and fresh herbs. Use parchment to avoid garlic sticking!",
    ingredients: [
      "Bread Flour: 500g",
      "Sourdough Starter: 100g",
      "Salt: 10g",
      "Rosemary & Garlic: 2 tbsp herbs + 1 bulb garlic",
      "Parchment Paper: Essential for roasted garlic loaves",
    ],
    instructions: [
      "Mix your starter and {water}g of water in a bowl.",
      "Add flour and salt. Let the dough 'nap' for 45 minutes.",
      "Gentle Kneading: Fold the garlic and rosemary into the dough. Don't press too hard; just 'tuck' the ingredients in.",
      "Strengthening: Do 3 more sets of folds every 30 minutes to build a strong loaf.",
      "The Big Rise: Let it sit at {temp}° until it feels light and jiggly.",
    ],
    baking: [
      "Heat your Dutch oven to 450°F.",
      "Lift the dough using parchment paper and lower it into the pot. This prevents the garlic on the bottom from sticking to the iron.",
      "Bake with the lid on for 25 minutes, then uncovered for 15 minutes.",
    ],
  },
  {
    id: 3,
    name: "Jalapeño Cheddar",
    image:
      "https://sugarspunrun.com/wp-content/uploads/2024/11/jalapeno-cheddar-sourdough-bread-15-of-16.jpg",
    description:
      "Spicy and cheesy. The cheese melts during baking, so parchment paper is a must!",
    ingredients: [
      "Bread Flour: 500g",
      "Sourdough Starter: 100g",
      "Salt: 10g",
      "Honey or Oil: 2 tbsp",
      "Cheddar & Jalapeños: 1 cup cheese + 2 peppers",
      "Parchment Paper: Do not skip this! Melted cheese will stick to your pot.",
    ],
    instructions: [
      "Whisk starter, {water}g of water, and honey/oil together.",
      "Mix in flour and salt. Let the dough 'nap' for 1 hour.",
      "Folding In: During your first few folds, spread the cheese and peppers across the dough. No heavy kneading required!",
      "Strengthening: Do 4 sets of folds total, waiting 30 minutes between each one.",
      "The Big Rise: Let sit at {temp}° until doubled, then chill in the fridge overnight.",
    ],
    baking: [
      "Heat your Dutch oven to 450°F.",
      "The Sling Method: Use parchment paper to lower the cheesy dough into the pot. This saves your pot from burnt cheese stains!",
      "Bake lid-on for 25 minutes. Reduce oven to 425°F, remove lid, and bake 15 minutes until the cheese is crispy.",
      "Cool for 2 hours so the cheese sets before you slice.",
    ],
  },
];

export const apiKey = "176789e498e8f87baeca708340107615";

export const coordinates = {
  latitude: 33.629247,
  longitude: -112.368143,
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
