import ProductCard from "../../components/ui/ProductCard";
import useProducts from "../../Hooks/useProducts";


export default function Products() {
    const [products] = useProducts()
    console.log("Product list:", products)
  return (
    <div className="w-11/12 lg:w-4/6 xl:w-10/12 mx-auto mt-8 mb-12">
      <h2 className="text-3xl font-semibold text-green-700 text-center underline mb-8">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
