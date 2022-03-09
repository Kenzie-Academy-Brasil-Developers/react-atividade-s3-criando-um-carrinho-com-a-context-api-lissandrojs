import ProductList from "./components/product-list";



const App =()=> {
  return (
    <div>
          <ProductList type="catalogue"></ProductList>
          <ProductList type="cart"></ProductList>
        
    </div>
  );
}

export default App;
