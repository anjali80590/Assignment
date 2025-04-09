async function fetchProducts() {
  const apiUrl = "https://fakestoreapi.com/products"; 

  try {
  
    const response = await fetch(apiUrl);

   
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json(); 
    console.log("Fetched Products:", products); 
    products.forEach((product) => {
      console.log(`Title: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------");
    });

   
    const totalPrice = products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    console.log(`Total Price of all products: $${totalPrice}`);
  } catch (error) {
    console.error("Failed to fetch products. Please try again later.", error);
  }
}


fetchProducts();
