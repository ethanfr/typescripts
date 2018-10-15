let ScopeLosingObj = {
    text: "info from lexical scope",
    run: function () {
          setTimeout( ()=>{console.log("ES5: ", this.text);}, 1000);}
};
ScopeLosingObj.run();
