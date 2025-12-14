import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const {
    data: products,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      return res.data;
    },
  });
  return [products, loading, refetch];
};

export default useProducts;
