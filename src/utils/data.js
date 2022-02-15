const recipesData = [
  {
    id: 1,
    title: 'Pizza',
    img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    ingridients: ['dough', 'tomato sause', 'mozzarella cheese'],
    method: `For the dough, pile the flours and 1 level teaspoon of sea salt onto a clean surface and make a well in the
  centre. Add the yeast and sugar to 650ml lukewarm water, mix together and leave for a few minutes, then pour
  into the well. Using a fork and a circular movement, slowly bring in the flour from the inner edge of the well
  and mix into the water. Continue to mix, bringing in all the flour – when the dough comes together and becomes
  too hard to mix with your fork, flour your hands and begin to pat it into a ball. Knead the dough by rolling it
  backwards and forwards, using your hands to stretch, pull and push the dough. Keep kneading for 10 minutes, or
  until you have a smooth, springy, soft dough. Place the dough in a lightly greased bowl, cover with clingfilm
  and leave in a warm place to to prove for 45 minutes, or until doubled in size. For the sauce, peel and finely
  slice the garlic, then pick the basil leaves and finely chop the stalks. Heat 1 tablespoon of oil in a pan on a
  medium-low heat, add the garlic and basil stalks, then cook gently for a couple of minutes, or until the garlic
  is lightly golden, then add most of the basil leaves, the tomatoes, and a pinch of salt and pepper. Leave the
  sauce to tick away for around 20 minutes, or until smooth, breaking up the tomatoes up with a wooden spoon. When
  the time’s up, taste, and season to perfection. To assemble the pizzas, divide the dough in half. Wrap one half
  in clingfilm and freeze for another day. With the remaining half, divide the dough into 4 equal balls. Flour
  each dough ball, then cover with clingfilm, and leave to rest for about 15 minutes – this will make them easier
  to roll it thinly. Dust a clean surface and the dough with a little flour or semolina, and roll it out into a
  rough circle, about ½cm thick. Tear off an appropriately sized piece of tin foil, rub it with olive oil, dust
  well with flour or semolina and place the pizza base on top. Continue doing the same with the remaining dough,
  dust with a little flour so you can pile them up. Cover with clingfilm and place in the fridge. When you're
  ready to cook them, preheat the oven to 250°C/500°F/gas 9. At this stage you can apply your topping: spread the
  tomato sauce over the base, spreading it out to the edges. Tear over the mozzarella and scatter with the
  remaining basil leaves. Drizzle with a tiny bit of olive oil and add a pinch of salt and pepper. If you can,
  cook the pizzas on a piece of granite in your conventional oven – if not, cook them one by one on pieces of tin
  foil directly on the bars of the oven shelf, towards the bottom of the oven (If you're going to cook your pizzas
  on the bars of the oven, make sure they're not too big – otherwise they'll be difficult to manoeuvre). Cook for
  7 to 10 minutes, until the pizzas are golden and crispy.`,
  },
  {
    id: 2,
    title: 'Pasta',
    img: 'https://images.unsplash.com/photo-1627286400579-027de47e9e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    ingridients: ['spagetti', 'tomato sause', 'mozzarella cheese'],
    method: `Peel and finely slice the garlic, then pick the basil leaves and finely chop the stalks.
  Cook the tagliatelle in a pan of boiling salted water for 8 to 10 minutes, or until al dente, which means that it should be soft enough to eat, but still have a bit of bite and firmness to it, then drain, reserving some of the pasta water.
  Heat a lug of olive oil in a saucepan over a medium heat, add the garlic and fry for 1 to 2 minutes, or until golden.
  Add the basil stalks and tinned tomatoes, breaking the tomatoes up with the back of a spoon.
  Bring to the boil, season with sea salt and black pepper and simmer for 5 minutes.
  Snap the woody ends off the asparagus and discard, then finely chop the spears.
  Add the asparagus to the tomato sauce, simmer for 1 to 2 minutes, then remove from the heat and season to taste, if needed.
  Finish off the sauce by stirring through the basil leaves. Toss the tagliatelle in the sauce, adding a little cooking water to loosen, if needed.
  Serve with a drizzle of extra virgin olive oil and a good grating of Parmesan.`,
  },
  {
    id: 3,
    title: 'Caprese',
    ingridients: ['rukkola', 'tomato', 'mozzarella cheese'],
    img: 'https://images.unsplash.com/photo-1564345440082-155c43c5532f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    method: `Place the peppers directly onto a naked gas flame or under a very hot grill and let them blacken and blister.
  Turn now and then with a pair of metal kitchen tongs. When blackened all over, pop them into a bowl and cover with clingfilm.
  Leave the peppers to steam for about 10 minutes, then remove the clingfilm and leave them to cool.
  When they are cool enough to handle, rub off the blackened skin and brush away the seeds from the inside.
  Tear the mozzarella balls into chunks and divide between 4 plates. Tear the peppers into strips and divide over the plates of mozzarella. Halve the tomatoes and scatter over the top.
  Season well with sea salt and black pepper and drizzle with olive oil. Pick and tear up the basil leaves and sprinkle them over the salad before serving.`,
  },
  {
    id: 4,
    title: 'Lasagna',
    ingridients: ['pasta sheets', 'tomato', 'mozzarella cheese', 'onion', 'carrot', 'red wine', 'celer'],
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    method: `Preheat the oven to 180ºC/350ºF/gas 4.
    Peel and finely chop the onion, garlic and carrot, then finely slice the pancetta or bacon. Pick the herbs.
    Slowly fry the pancetta or bacon and cinnamon in a large casserole pan over a medium heat until golden, then add the onion, carrot, garlic and herbs and 4 tablespoons of oil.
    Mix together, add the beef and pork, cook for 5 minutes, then add the tomatoes and wine (or you can use water, if you prefer). Add the bay and bring to the boil.
    Scrunch up a wet sheet of greaseproof paper, then and place it on top of the pan and cover with a lid. Place in the oven for 2 hours or simmer on the hob over a gentle heat for around 1½ hours, or until thickened and reduced.
    Halve, deseed and roughly chop the butternut squash, then drizzle with oil. Bash the coriander seeds and dried chilli then sprinkle over, with a pinch of sea salt and black pepper.
    Place on a baking tray and roast in the oven for the last 45 minutes of cooking the sauce. When the sauce is done, season to taste and put to one side.
    For the white sauce, finely chop the anchovies, then mix with the crème fraîche and a handful of Parmesan, then season with salt and pepper – you may need to loosen the mixture with a little milk.
    Turn the oven to 200ºC/400ºF/gas 6.
    To assemble the lasagne, rub a lasagne dish with oil, lay some sheets of lasagne over the bottom and drape them over the sides. Add a layer of meat, a little white sauce and a sprinkling of Parmesan.
    Break the butternut squash into pieces and use this as one layer, then repeat the layers, finishing with a layer of pasta covered in white sauce.
    Tear over the mozzarella and sprinkle with some extra Parmesan, then bake for 30 to 35 minutes, or until golden. Serve with a seasonal salad.`,
  },
];

export { recipesData };
