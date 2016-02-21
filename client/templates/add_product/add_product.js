Template.add_product.events({
  'submit .add_product': function(event){

    // information
    var name = event.target.name.value;
    var category = event.target.category.value;
    var description = event.target.description.value;
    var is_featured = event.target.is_featured.value;

    var file = $('#productImage').get(0).files[0];

    if(file){
      var fsFile = new FS.File(file);

      ProductsImages.insert(fsFile, function(err, result){
        if(!err) {
          var productImage = '/cfs/files/ProductsImages/' + result._id;

          Meteor.call('addProduct', productImage, name, category, description, is_featured);
        }
      });
    } else {
      console.log("File not uploaded / added");

      var productImage = '/img/noimage.png';

      Meteor.call('addProduct', productImage, name, category, description, is_featured);
    }

    // Clear form
    event.target.name.value="";
    event.target.category.value="";
    event.target.description.value="";
    event.target.is_featured.value="";

    FlashMessages.sendSuccess("Product Added");
    Router.go('/');

    return false;
  }
});
