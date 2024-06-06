import Link from "next/link";
import { Products } from "@/types/product";

const SingleProduct = ({ product }: { product: Products }) => {
  const { title, paragraph, icon, href } = product;
  return (
    <div className="w-full">
      <Link href={href}>
      <div className="wow fadeInUp flex flex-col items-center justify-center shadow-xl rounded-lg border border-greyArdu bg-blueArdu bg-opacity-70" data-wow-delay=".15s" >
      <div className="mb-2 pt-5 flex flex-col  items-center  text-3xl justify-center rounded-md  text-blue-500">
          {icon}
          <p className="text-xs font-bold pt-1">{paragraph}</p>
        </div>
        <h3 className="mb-5 text-xl font-bold text-center text-black dark:text-chalkArdu sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        {/* <p className="pr-[10px] text-center font-medium leading-relaxed text-chalkArdu">
          {paragraph}
        </p> */}
      </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
