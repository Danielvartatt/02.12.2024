const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];
//<1>
const discountPrice = products.filter((e) => {
  return e.price <= 200;
});
console.log(discountPrice);
//<2>
const productLog = products.map((e) => {
  return e.name;
});
console.log(productLog);
//<3>3. Use a chained combination of .filter() and .map() to list only
// the names of all products in a specific category (e.g. 'electronics')
const filters = products
  .filter((e) => {
    const categoryIsElectronics = e.category === "electronics";
    return categoryIsElectronics;
  })
  .map((e) => {
    return e.name;
  });
console.log(filters);

//<4> 4. Use .some() to check if there are any products that cost more than 1000
const bellow = products.some((e) => e.price < "1000");
console.log(bellow);

//5. Use .reduce() to find the total cost of all the products. */

const totalPrice = products.reduce(())
