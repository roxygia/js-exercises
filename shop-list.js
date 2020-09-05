var shopper = {
  items : [], // Array of current shopping list
  add : function (evt) {
  // add() : add a new item to the list

    // Prevent form submit
    evt.preventDefault();

    // Add new entry to shopper.items
    var item = document.getElementById('add-item');
    var itemCost = document.getElementById('add-item-cost');

    shopper.items.push({
      name : item.value, // Item name
      cost : parseInt(itemCost.value, 10) // Item Cost
    });

    //Clear values of item added
    item.value = '';
    itemCost.value = '';

    // Redraw the shopping list
    shopper.draw();

    // Save the shopping list to local storage
    shopper.save();

    shopper.calculateTotal();
  },

  draw : function () {
  // draw() : draw the HTML shopping list

    // Reset the current shopping list first
    var container = document.getElementById('shop-list');
    container.innerHTML = ""; 

    // Rebuild the list
    if (shopper.items.length > 0) {
      var row = "", button = "";
      for (let i in shopper.items) {
        // Item name
        row = document.createElement("div");
        row.innerHTML = shopper.items[i].name;
 
        container.appendChild(row);

        // Item cost
        row = document.createElement("div");
        row.innerHTML = shopper.items[i].cost;

        container.appendChild(row);
      }
    }

  },

  save : function () {
  // save() : save the current shopping list into the local storage

    // Init localstorage
    if (localStorage.items == undefined) { localStorage.items = "[]"; }

    // Save current items list to localstorage
    localStorage.items = JSON.stringify(shopper.items);
  },

  calculateTotal : function () {
    var container = document.getElementById('shop-list');
    var row = document.createElement("div");
    row.innerHTML = "Shopping Cart Total";
    container.appendChild(row);

    var total = 0;
    

    if (shopper.items.length > 0) {
   
      for (let i in shopper.items) {

        total = total + shopper.items[i].cost;

      }
    row = document.createElement("div");
    row.innerHTML = total;
    container.appendChild(row);

  }
}

};

window.addEventListener("load", function () {
  document.getElementById("shop-add").addEventListener("submit", shopper.add);

});