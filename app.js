let allProducts = null;

async function getAllProducts() {
  try {
    const res = await fetch(
      //   "http://api.weatherapi.com/v1/current.json?key=486b6d8f617f4184ade145624242704&q=Rome"
      "http://api.weatherapi.com/v1/forecast.json?key=486b6d8f617f4184ade145624242704&q=Rome&days=5"
    );
    const products = await res.json();
    allProducts = products;
  } catch (error) {
    console.error(error);
  }
  console.log(allProducts);
  console.log(allProducts.current);
  console.log(allProducts.current.temp_c);
}
getAllProducts();
