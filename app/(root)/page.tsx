import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data ={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
