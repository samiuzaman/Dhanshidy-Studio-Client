import { FaArrowRight } from "react-icons/fa";
import Title from "../../Shared/Title";
import { Link } from "react-router";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../components/ui/ProductCard";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="py-16">
      <Title
        title="Our Core Products"
        subtitle="Our best products are listed below in card form."
      ></Title>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 justify-items-center">
        {products?.slice(0, 5)?.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/products"
          className="w-48 flex justify-center items-center gap-3 mx-4 py-1.5 rounded-sm bg-gray-200 border-2 border-[#16a4eb] text-black hover:bg-[#16a4eb] hover:text-white"
        >
          More Products <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default Products;
