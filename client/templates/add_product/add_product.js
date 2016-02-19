Template.add_product.events({
  'submit .add_product': function(event){

    var name = event.target.name.value;
    

    console.log(name);

    return false;
  }
})
