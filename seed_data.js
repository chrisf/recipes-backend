// run this to load some seed data
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// only run if there are no users
const userCount = await prisma.user.count();
if (userCount == 0) {
  console.log("Creating user since none exist");
  const user = await prisma.user.create({
    data: {
      id: 1,
      email: "real@email.com",
      name: "Real Person",
    },
  });

  console.log("User created: ", user);
}

console.log("Creating some recipes");

const recipe1 = await prisma.recipe.create({
  data: {
    title: "Couscous Salad",
    url: "https://www.wellplated.com/israeli-couscous-salad/",
    image:
      "https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg",
    description: `Just like regular couscous (like my Moroccan Couscous Salad), Israeli couscous (also known as pearl couscous) is actually a small, lightly toasted pasta.

Some of the key differences between regular couscous and Israeli couscous are:

Israeli couscous is larger in size than regular couscous.
Israeli couscous is prepared by boiling, and regular couscous can be boiled or steamed.
Israeli couscous nutrition differs slightly from that of regular couscous. Whole wheat Israeli couscous contains about 6 grams of fiber and 7 grams of protein per serving, and regular couscous has about 2 grams of fiber.
Couscous is quick-cooking and makes a refreshing change of pace in cold pasta salads like this one.

It's healthy, and the pearls nestle into every forkful.

The texture is delightful; it's not overly chewy and allows the other ingredients to shine.`,
    ingredients: `Israeli Couscous. The delicious grain for our salad! I used whole wheat couscous (which I also used in this Avocado Couscous Grapefruit Salad) in this recipe. Because whole grains are higher in fiber and protein than their white counterparts (and thus more nutritious and satisfying), I prefer to use them in my cooking when possible.
Lemon Zest + Juice. Adds brightness and acidity.
Dijon Mustard. A zippy and tangy addition to the dressing.
Smoked Paprika. I love the light smokiness that paprika adds to the recipe.
Arugula. Gives the salad backbone and bite. Plus, it’s packed with calcium, potassium, and vitamins.
Cucumber + Cherry Tomatoes. Both cucumber and cherry tomatoes bring delightful freshness and color to the salad.
Feta Cheese + Mint. What truly makes the Israeli couscous salad beam. Promise me you will not skip these two. The feta is creamy and satisfying, and the fresh mint makes the salad taste alive.`,
    directions: `Cook the couscous (it takes about 20 minutes to cook Israeli couscous). Fluff and set aside. You do not need to rinse Israeli couscous after cooking.
Whisk together the dressing ingredients, then toss the mixture with the couscous. Refrigerate for 5 to 10 minutes.
Stir in the arugula, cucumber, tomatoes, feta, and mint. DIG IN!`,
    authorId: 1,
  },
});
console.log("Created ", recipe1);

const recipe2 = await prisma.recipe.create({
  data: {
    title: "Easy Authentic Falafel",
    url: "https://www.themediterraneandish.com/how-to-make-falafel/#tasty-recipes-10436-jump-target",
    image:
      "https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg",
    description: `Falafel is a popular Middle Eastern “fast food” made of a mixture of chickpeas (or fava beans), fresh herbs, and spices that are formed into a small patties or balls.  It’s thought that falafel originated in Egypt as Coptic Christians looked for a hearty replacement for meat during long seasons of fasting or lent.  It has also become a popular vegan food in Egypt and throughout the Middle East.`,
    ingredients: `2 cups dried chickpeas (Do NOT use canned or cooked chickpeas)
1/2 tsp baking soda
1 cup fresh parsley leaves, stems removed
3/4 cup fresh cilantro leaves, stems removed
1/2 cup fresh dill, stems removed
1 small onion, quartered
7–8 garlic cloves, peeled
Salt to taste
1 tbsp ground black pepper
1 tbsp ground cumin
1 tbsp ground coriander
1 tsp cayenne pepper, optional
1 tsp baking powder
2 tbsp toasted sesame seeds
Oil for frying`,
    directions: `Soak chickpeas for 24 hours. Cover them in plenty of water and add baking soda to help soften them as they soak. The chickpeas will at least double in size as they soak. Drain very well.

Chickpeas after being soaked for 24 hours

2. Make mixture. Add chickpeas, fresh herbs (parsley, cilantro, and dill), garlic, onion, and spices to food processor and pulse a little bit at a time until the mixture is finely ground. You’ll know it’s ready when the texture is more like coarse meal.

& Refrigerate (important.) Transfer the falafel mixture to a bowl, cover and refrigerate for at least 1 hour or overnight. The chilled mixture will hold together better, making it easier to form the falafel patties.

Falafel mixture in food processor

3. Form patties or balls. Once the falafel mixture has been plenty chilled, stir in baking powder and toasted sesame seeds, then scoop golf ball-sized balls and form into balls or patties (if you go the patties route, do not flatten them too much, you want them to still be nice and fluffy when they’re cooked.)

Falafel patty

4. Fry. Frying is the traditional way to cook falafel and yields the most authentic and best result. Heat the oil on medium-high until it bubbles softly (your oil should be hot enough around 375 degrees F, but not too hot that it causes the falafel to fall apart.)

Carefully drop the falafel in the oil, using a slotted spoon, and fry for 3-5 minutes until medium brown on the outside. Avoid over-crowding the falafel; fry them in batches if necessary.

Tip: it's always a good idea to fry one falafel first to make sure the oil temperature does not need to be adjusted.`,
    authorId: 1,
  },
});
console.log("Created ", recipe2);

const recipe3 = await prisma.recipe.create({
  data: {
    title: "Oven Baked Chicken Breast",
    url: "https://www.recipetineats.com/oven-baked-chicken-breast/",
    image:
      "https://www.recipetineats.com/tachyon/2018/03/Oven-Baked-Chicken-Breast_8-1.jpg?resize=850%2C1190&zoom=1",
    description: `Though I always stand firm that brown meat is better than white – more flavour, more juiciness – lean chicken breast is a regular in my shopping trolley, week after week.

So today, I’m sharing my recipe for how I make Oven Baked Chicken Breast.

We can never have too many really great quick chicken breast recipes!

As simple as it sounds, if you whack a seasoned breast in the oven without thought, the chances are you’ll be chewing your way through dry chicken, furiously squirting over copious amounts of ketchup to try to salvage it.

It doesn’t need to be that way. Enter – a fabulous simple, magic chicken seasoning for baked chicken breast:`,
    ingredients: `4 chicken breasts , 150 – 180g / 5 – 6 oz each (Note 1)
2 tsp olive oil
Seasoning:
1 1/2 tbsp brown sugar
1 tsp paprika
1 tsp dried oregano or thyme , or other herb of choice
1/4 tsp garlic powder
1/2 tsp each salt and pepper
Garnish, optional:
Finely chopped parsley`,
    directions: `Preheat oven to 425°F/220°C (200°C fan).
Pound chicken to 1.5cm / 0.6″ at the thickest part – using a rolling pin, meat mallet or even your fist (key tip for even cooking + tender chicken).
Mix Seasoning.
Line tray with foil and baking / parchment paper. Place chicken upside down on tray. Drizzle chicken with about 1 tsp oil. Rub over with fingers. Sprinkle with Seasoning.
Flip chicken. Drizzle with 1 tsp oil, rub with fingers, sprinkle with Seasoning, covering as much of the surface area as you can.
Bake 18 minutes, or until surface is golden per photos and video, or internal temperature is 165°F/75°C using a meat thermometer.
Remove from oven and immediately transfer chicken to serving plates.
Wait 3 – 5 minutes before serving, garnished with freshly chopped parsley if desired. Pictured with a side of Garlic Butter Rice with Kale.`,
    authorId: 1,
  },
});
console.log("Created ", recipe3);
