const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    if (!item || typeof item.price !== "number" || isNaN(item.price)) {
      console.log("Invalid price. Please provide a valid number.");
      return;
    }

    this.items.push(item);
    this.total += item.price;
    console.log(
      `"${item.name}" added successfully. Current total: $${this.getTotal()}`
    );
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  },
};


checkout.addItem({ name: "Coffee Maker", price: parseFloat("99.95") }); 
checkout.addItem({ name: "Milk", price: 3.5 });

console.log(checkout.getTotal());
