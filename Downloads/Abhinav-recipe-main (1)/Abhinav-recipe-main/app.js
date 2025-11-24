/* ============================
   CONFIG + HELPERS
============================ */
const STORAGE_KEY = "recipes_v1";

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

function uid() {
  return "r_" + Math.random().toString(36).slice(2, 10);
}

function inferTypeFromTitle(t = "") {
  t = t.toLowerCase();
  return ["chicken", "mutton", "egg", "meat", "fish", "beef", "prawn", "shrimp"]
    .some(k => t.includes(k))
    ? "Non-Veg"
    : "Veg";
}

/* ============================
   SEED RECIPES
============================ */
const seedRecipes = [
  {
    id: uid(),
    title: "Paneer Tikka",
    description:
      "A flavorful paneer tikka marinated with Indian spices and grilled to perfection.",
    ingredients: [
      "400g paneer (cubed)",
      "2 tbsp hung curd",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tbsp ginger-garlic paste",
      "1 tbsp lemon juice",
      "1 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Cut paneer into medium-sized cubes.",
      "Mix curd, chili powder, ginger-garlic paste, lemon juice, salt, and oil.",
      "Add paneer and coat well. Marinate for 30 minutes.",
      "Grill or pan-fry until golden and slightly charred.",
      "Serve hot with mint chutney.",
    ],
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    imageUrl:
      "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
    type: "Veg",
    reviews: []
  },

  {
    id: uid(),
    title: "Vegetable Fried Rice",
    description:
      "A delicious Indo-Chinese style fried rice cooked with vegetables and sauces.",
    ingredients: [
      "2 cups cooked rice (cold)",
      "1 medium carrot (chopped)",
      "1/2 cup capsicum (chopped)",
      "1/2 cup cabbage (shredded)",
      "1/4 cup green peas",
      "1/4 cup spring onions",
      "2 cloves garlic (finely chopped)",
      "1 inch ginger (finely chopped)",
      "1 tbsp soy sauce",
      "1 tsp vinegar",
      "1 tsp black pepper",
      "Salt to taste",
      "2 tbsp oil",
      "1 tsp schezwan sauce (optional)",
    ],
    steps: [
      "Heat oil in a wok.",
      "Add garlic and ginger; sauté on high flame.",
      "Add carrots, capsicum, cabbage, and peas; stir-fry for 2 minutes.",
      "Add cooked rice and mix gently.",
      "Add soy sauce, vinegar, black pepper, and salt.",
      "Toss everything on high flame for 1–2 minutes.",
      "Garnish with spring onions and serve hot.",
    ],
    prepTime: 10,
    cookTime: 15,
    difficulty: "Hard",
    imageUrl:
      "https://www.simplyrecipes.com/thmb/g9QkoMz7Aq3oAXnbtZ6H32nsH18=/2000x1335/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Veggie-Fried-Rice-LEAD-HORIZONTAL-5f6ac64a24b44f9ebd4b3ef854747f4a.jpg",
    type: "Veg",
    reviews: []
  },

  {
    id: uid(),
    title: "Simple Tomato Pasta",
    description: "A quick, tasty pasta tossed in tangy homemade tomato sauce.",
    ingredients: [
      "200g pasta",
      "3 tomatoes (blended)",
      "3 cloves garlic (chopped)",
      "1 onion (finely chopped)",
      "1 tsp chili flakes",
      "1 tsp oregano",
      "2 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Boil pasta until al dente.",
      "Heat oil; sauté garlic and onions.",
      "Add tomato puree and cook until thick.",
      "Add chili flakes, oregano, and salt.",
      "Mix in the cooked pasta and toss well.",
      "Serve hot with grated cheese (optional).",
    ],
    prepTime: 10,
    cookTime: 20,
    difficulty: "Easy",
    imageUrl: "pasta.jpg",
    type: "Veg",
    reviews: []
  },

  {
    id: uid(),
    title: "Hearty Lentil Soup",
    description:
      "A warm and comforting high-protein soup made with red lentils and spices.",
    ingredients: [
      "1 cup red lentils",
      "1 onion (chopped)",
      "2 tomatoes (chopped)",
      "3 cloves garlic",
      "1 tsp cumin",
      "1 tsp turmeric",
      "Salt to taste",
      "4 cups water",
      "1 tbsp oil",
    ],
    steps: [
      "Wash lentils thoroughly.",
      "Heat oil; sauté garlic, onions, and tomatoes.",
      "Add lentils, turmeric, salt, and water.",
      "Cook until lentils turn soft.",
      "Blend lightly for a creamy texture.",
      "Simmer for 5 minutes and serve warm.",
    ],
    prepTime: 10,
    cookTime: 25,
    difficulty: "Easy",
    imageUrl: "lentilsoup.png",
    type: "Veg",
    reviews: []
  },

  {
    id: uid(),
    title: "Spicy Chickpea Curry",
    description:
      "A protein-rich, spicy chickpea curry cooked with tomatoes and aromatic spices.",
    ingredients: [
      "2 cups boiled chickpeas",
      "2 tomatoes (pureed)",
      "1 onion (finely chopped)",
      "1 tbsp ginger-garlic paste",
      "1 tsp chili powder",
      "1 tsp turmeric",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
    ],
    steps: [
      "Heat oil; sauté onions and ginger-garlic paste.",
      "Add tomato puree and spices.",
      "Cook until oil separates.",
      "Add chickpeas and mix well.",
      "Add water and simmer for 10 minutes.",
      "Serve hot with rice or roti.",
    ],
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    imageUrl: "chickpea.jpg",
    type: "Veg",
    reviews: []
  },

  {
    id: uid(),
    title: "Spicy Chicken Curry",
    description:
      "A flavorful, spicy Indian chicken curry cooked with onions, tomatoes, and aromatic spices.",
    ingredients: [
      "500g chicken",
      "2 onions (finely chopped)",
      "2 tomatoes (pureed)",
      "1 tbsp ginger-garlic paste",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp red chili powder",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    steps: [
      "Heat oil and add cumin seeds.",
      "Add onions and sauté until golden.",
      "Add ginger-garlic paste.",
      "Add tomato puree and spices.",
      "Add chicken and mix well.",
      "Cover and cook 12 minutes.",
      "Add water and simmer 10 minutes.",
      "Serve hot.",
    ],
    prepTime: 15,
    cookTime: 30,
    difficulty: "Medium",
    imageUrl: "chickencurry.jpg",
    type: "Non-Veg",
    reviews: []
  },
];

/* ============================
   STORAGE
============================ */
function safeParse(raw) {
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}

function loadRecipes() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = safeParse(raw);

  if (!parsed) {
    const initial = seedRecipes.map(r => ({
      ...r,
      reviews: r.reviews || []
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }

  return parsed.map(r => ({
    ...r,
    type: r.type || inferTypeFromTitle(r.title),
    reviews: r.reviews || []
  }));
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

/* ============================
   STATE
============================ */
let recipes = loadRecipes();
let editingId = null;

/* ============================
   DOM ELEMENTS
============================ */
const recipesGrid = qs("#recipesGrid");
const searchInput = qs("#searchInput");
const difficultyFilter = qs("#difficultyFilter");
const maxTimeFilter = qs("#maxTimeFilter");
const addRecipeBtn = qs("#addRecipeBtn");
const detailView = qs("#detailView");
const homeView = qs("#homeView");
const formView = qs("#formView");
const recipeDetail = qs("#recipeDetail");
const backToListBtn = qs("#backToListBtn");
const recipeForm = qs("#recipeForm");
const cancelFormBtn = qs("#cancelFormBtn");
const deleteBtn = qs("#deleteBtn");
const reviewPopup = qs("#reviewPopup");

/* ============================
   VEG FILTER DROPDOWN
============================ */
const vegFilter = document.createElement("select");
vegFilter.id = "vegFilter";
vegFilter.innerHTML = `
<option value="All">All</option>
<option value="Veg">Veg</option>
<option value="Non-Veg">Non-Veg</option>
`;
qs(".controls").insertBefore(vegFilter, maxTimeFilter);

vegFilter.addEventListener("change", () => {
  vegFilter.style.color =
    vegFilter.value === "Veg"
      ? "green"
      : vegFilter.value === "Non-Veg"
      ? "red"
      : "black";
});

/* ============================
   UTILITIES
============================ */
function showView(v) {
  [homeView, detailView, formView].forEach(x => x.classList.add("hidden"));
  v.classList.remove("hidden");
}

function format(min) {
  return min ? `${min} min` : "-";
}

function avgRating(rev) {
  if (!rev.length) return "No rating";
  return (
    rev.reduce((a,b) => a + Number(b.rating), 0) / rev.length
  ).toFixed(1);
}

/* ============================
   HOME GRID
============================ */
function renderGrid(list) {
  recipesGrid.innerHTML = "";

  if (!list.length) {
    recipesGrid.innerHTML = `<p class="card">No recipes found.</p>`;
    return;
  }

  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = r.id;

    card.innerHTML = `
      ${r.imageUrl ? `<img src="${r.imageUrl}">` : ""}
      <h3>${r.title}</h3>
      <p>${r.description}</p>

      <div class="recipe-meta">
        <span class="tag">${r.type}</span>
        <span class="tag">${r.difficulty}</span>
        <span class="tag">⭐ ${avgRating(r.reviews)}</span>
        <span class="tag">Prep: ${format(r.prepTime)}</span>
      </div>

      <div class="actions">
        <button class="btn view" data-id="${r.id}">View</button>
        <button class="btn edit" data-id="${r.id}">Edit</button>
        <button class="btn export" data-id="${r.id}">📄</button>
        <button class="btn print" data-id="${r.id}">🖨️</button>
        <button class="btn share" data-id="${r.id}">🔗</button>
      </div>
    `;

    recipesGrid.appendChild(card);
  });
}

/* ============================
   DETAIL VIEW
============================ */
function openDetail(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  recipeDetail.innerHTML = `
    ${r.imageUrl ? `<img src="${r.imageUrl}">` : ""}
    <h2>${r.title}</h2>
    <p>${r.description}</p>

    <div class="meta-row">
      <span class="tag">${r.type}</span>
      <span class="tag">${r.difficulty}</span>
      <span class="tag">⭐ ${avgRating(r.reviews)}</span>
      <span class="tag">Prep: ${format(r.prepTime)}</span>
      <span class="tag">Cook: ${format(r.cookTime)}</span>
    </div>

    <h4>Ingredients</h4>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

    <h4>Steps</h4>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>

    <button id="reviewBtn" class="btn view" data-id="${r.id}">Rate & Review</button>

    <h3>Reviews</h3>
    <div id="reviewsList">
      ${
        r.reviews.length
          ? r.reviews
              .map(rv => `<div class="review-card"><strong>⭐ ${rv.rating}</strong><p>${rv.text}</p></div>`)
              .join("")
          : "<p>No reviews yet.</p>"
      }
    </div>

    <div class="actions">
      <button class="btn edit" data-id="${r.id}">Edit</button>
      <button class="btn delete" data-id="${r.id}">Delete</button>
      <button class="btn print" data-id="${r.id}">🖨️</button>
      <button class="btn export" data-id="${r.id}">📄</button>

      <button class="btn share" data-id="${r.id}">🔗</button>
    </div>
  `;

  document.getElementById("reviewBtn").onclick = () => openReviewPopup(id);

  showView(detailView);
}

/* ============================
   REVIEW POPUP
============================ */
function openReviewPopup(id) {
  reviewPopup.classList.remove("hidden");

  qs("#saveReviewBtn").onclick = () => {
    const rating = Number(qs("#reviewRating").value);
    const text = qs("#reviewText").value.trim();
    if (!text) return alert("Enter review");

    recipes = recipes.map(r =>
      r.id === id ? { ...r, reviews: [...r.reviews, { rating, text }] } : r
    );

    save();
    qs("#reviewText").value = "";
    reviewPopup.classList.add("hidden");
    openDetail(id);
  };

  qs("#closeReviewBtn").onclick = () =>
    reviewPopup.classList.add("hidden");
}

/* ============================
   ACTIONS
============================ */
function printRecipe(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  const w = window.open("", "_blank", "width=800,height=600");

  w.document.write(`
    <html>
    <head>
      <title>${r.title} - Print</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        h1 { margin-bottom: 10px; }
        .meta { margin-bottom: 15px; }
        ul, ol { margin-left: 20px; }
        img { max-width: 300px; margin-bottom: 20px; }
      </style>
    </head>

    <body>
      ${r.imageUrl ? `<img src="${r.imageUrl}">` : ""}

      <h1>${r.title}</h1>
      <p>${r.description}</p>

      <div class="meta">
        <p><strong>Type:</strong> ${r.type}</p>
        <p><strong>Difficulty:</strong> ${r.difficulty}</p>
        <p><strong>Prep Time:</strong> ${r.prepTime} min</p>
        <p><strong>Cook Time:</strong> ${r.cookTime} min</p>
      </div>

      <h2>Ingredients</h2>
      <ul>
        ${r.ingredients.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <h2>Steps</h2>
      <ol>
        ${r.steps.map(s => `<li>${s}</li>`).join("")}
      </ol>

      <script>
        window.print();
      </script>
    </body>
    </html>
  `);

  w.document.close();
}


function exportRecipe(id) {
  const r = recipes.find(x => x.id === id);
   const fullRecipe = {
    id: r.id,
    title: r.title,
    description: r.description,
    type: r.type,
    difficulty: r.difficulty,
    prepTime: r.prepTime,
    cookTime: r.cookTime,
    imageUrl: r.imageUrl,
    ingredients: r.ingredients || [],
    steps: r.steps || [],
    reviews: r.reviews || []
  };
  const blob = new Blob([JSON.stringify(r, null, 2)], {
    type: "application/json"
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${r.title}.json`;
  a.click();
}

function shareRecipe(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  // Build full share text
  const fullText = `
${r.title}

${r.description}

Ingredients:
${r.ingredients.map(i => "- " + i).join("\n")}

Steps:
${r.steps.map((s, i) => (i + 1) + ". " + s).join("\n")}

Prep Time: ${r.prepTime} min
Cook Time: ${r.cookTime} min
Difficulty: ${r.difficulty}
Type: ${r.type}

Link: ${window.location.href + "#recipe-" + r.id}
`.trim();

  const shareData = {
    title: r.title,
    text: fullText
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .catch(() => {});
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(fullText);
    alert("Sharing not supported — full recipe copied to clipboard!");
  }
}

/* ============================
   GRID CLICK HANDLERS
============================ */
recipesGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const id = card.dataset.id;

  // If clicked a button → allow normal actions
  if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
    const btn = e.target.closest("button");
    const bid = btn.dataset.id;
    if (!bid) return;

    if (btn.classList.contains("view")) openDetail(bid);
    if (btn.classList.contains("edit")) openForm(bid);
    if (btn.classList.contains("delete")) deleteRecipe(bid);
    if (btn.classList.contains("print")) printRecipe(bid);
    if (btn.classList.contains("export")) exportRecipe(bid);
    if (btn.classList.contains("share")) shareRecipe(bid);
    return;
  }

  // CLICK ANYWHERE ON CARD → OPEN DETAIL
  openDetail(id);
});


recipeDetail.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("edit")) openForm(id);
  if (e.target.classList.contains("delete")) deleteRecipe(id);
  if (e.target.classList.contains("print")) printRecipe(id);
  if (e.target.classList.contains("export")) exportRecipe(id);

  if (e.target.classList.contains("share")) shareRecipe(id);
});

/* ============================
   FORM
============================ */
function openForm(id = null) {
  editingId = id;

  if (id) {
    const r = recipes.find(x => x.id === id);

    qs("#title").value = r.title;
    qs("#description").value = r.description;
    qs("#ingredients").value = r.ingredients.join("\n");
    qs("#steps").value = r.steps.join("\n");
    qs("#prepTime").value = r.prepTime;
    qs("#cookTime").value = r.cookTime;
    qs("#difficulty").value = r.difficulty;
    qs("#imageUrl").value = r.imageUrl;

    deleteBtn.classList.remove("hidden");
    qs("#formTitle").textContent = "Edit Recipe";
  } else {
    recipeForm.reset();
    deleteBtn.classList.add("hidden");
    qs("#formTitle").textContent = "Add Recipe";
  }

  showView(formView);
}

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    title: qs("#title").value.trim(),
    description: qs("#description").value.trim(),
    ingredients: qs("#ingredients").value.split("\n").map(s => s.trim()).filter(Boolean),
    steps: qs("#steps").value.split("\n").map(s => s.trim()).filter(Boolean),
    prepTime: Number(qs("#prepTime").value),
    cookTime: Number(qs("#cookTime").value),
    difficulty: qs("#difficulty").value,
    imageUrl: qs("#imageUrl").value.trim(),
    type: inferTypeFromTitle(qs("#title").value),
  };

  if (editingId) {
    recipes = recipes.map(r =>
      r.id === editingId
        ? { ...r, ...data, reviews: r.reviews }
        : r
    );
  } else {
    recipes.unshift({ ...data, id: uid(), reviews: [] });
  }

  save();
  applyFilters();
  showView(homeView);
});

deleteBtn.addEventListener("click", () => {
  if (!editingId) return;
  deleteRecipe(editingId);
});

function deleteRecipe(id) {
  if (!confirm("Delete recipe?")) return;

  recipes = recipes.filter(x => x.id !== id);
  save();
  applyFilters();
  showView(homeView);
}

/* ============================
   FILTERS
============================ */
function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const diff = difficultyFilter.value;
  const max = Number(maxTimeFilter.value) || Infinity;
  const type = vegFilter.value;

  const list = recipes.filter(r =>
    r.title.toLowerCase().includes(q) &&
    (diff === "All" || r.difficulty === diff) &&
    (type === "All" || r.type === type) &&
    r.prepTime <= max
  );

  renderGrid(list);
}

/* ============================
   INIT
============================ */
addRecipeBtn.addEventListener("click", () => openForm());
backToListBtn.addEventListener("click", () => showView(homeView));
cancelFormBtn.addEventListener("click", () => showView(homeView));

searchInput.addEventListener("input", applyFilters);
difficultyFilter.addEventListener("change", applyFilters);
maxTimeFilter.addEventListener("input", applyFilters);
vegFilter.addEventListener("change", applyFilters);

applyFilters();


