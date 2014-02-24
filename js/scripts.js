var Package = {
  cost: function() {
    return (this.weight * 3) + (this.distance * .05);
  }
}


$(document).ready(function() {
  $('form#calculator').submit(function() {
    event.preventDefault();
    var newPackage = Object.create(Package);
    newPackage.distance = parseFloat($("input#distance").val());
    newPackage.weight = parseFloat($("input#weight").val());
    var packageCost = parseFloat(newPackage.cost()).toFixed(2);;

      $("#error").hide();
    if (newPackage.distance === null || newPackage.weight === null){
      $("#error").show();
    } else {
      $('#weight-result').text("Your package weighs: " + newPackage.weight + "lbs");
      $('#distance-result').text("Distance to travel: " + newPackage.distance + " miles");
      $('#total-cost').text("Your total cost is: $" + packageCost);


    } 

    this.reset();
  });
});


