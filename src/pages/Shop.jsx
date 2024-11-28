import ProductCard from "../Components/ProductCard"



function Shop() {

  return (
    
    <>
    <div className="container mt-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <ProductCard title="Fancy Product" price="80.00" imageSrc="../imag.jpg" />
      <ProductCard title="Special Item" price="20.00" salePrice="18.00"  imageSrc="../images.jpg"/>
      <ProductCard title="Sale Item" price="50.00" salePrice="25.00"   imageSrc="../img1.jpg"  />
      <ProductCard title="Popular Item" price="40.00"   imageSrc="../img2.jpg"/>
    </div>
  </div>
    </>
  )
}

export default Shop 