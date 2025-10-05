// Find all products
db.products.find({});

// Filter by category
db.products.find({ category: "Apparel" });

// Filter by variant color
db.products.find({ "variants.color": "White" });
