// Publish Products
Meteor.publish('products', function() {
  return Products.find();
});

// Publish Categories
Meteor.publish('categories', function() {
  return Categories.find();
});
