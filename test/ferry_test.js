var ferry = require("../ferry");


var colour = ["blue","black","white", "yellow"];


var numberOfPassengers = [1,2,3,4,5];


describe("Write function that answers these questions.", function() {

  it("should return number of passengers", function() {

     var result = ferry.car(colour,"blue");
     console.log(colour);

     assert.equal(result,5)

})
})
