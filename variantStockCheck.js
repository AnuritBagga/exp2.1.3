db.products.aggregate([
  { $unwind: "$variants" },
  { $match: { "variants.stock": 0 } },
  {
    $project: {
      _id: 0,
      product_name: "$name",
      sku: "$variants.sku",
      color: "$variants.color",
      size: "$variants.size"
    }
  }
]);
