import { products } from "../constants";
import { Button, PopularProductCard } from "../components";
import { useNavigate } from "react-router-dom";


const PopularProducts = () => {
  const navigate = useNavigate();

  const gotToExplorePage = () => {
    navigate("/explore");
  }




  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-blue-900 font-bold'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className="mt-8">
        <Button onClick={() => navigate("/explore")} label="Explore More" />
      </div>
    </section>
  );
};

export default PopularProducts;