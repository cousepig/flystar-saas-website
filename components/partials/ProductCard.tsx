import Image from "next/image";
import Link from "next/link";
// import { Product } from "contentlayer/generated";
// import Link from "next/link";
/**
 * 商品卡片组件
 *
 * @param product 商品对象，包含商品的图片、标题、描述和slug等信息
 * @returns 返回渲染后的商品卡片DOM结构
 */
const ProductCard = ({ params: locale, product }: any) => {
  const { title, image, description, slug, ctitle, content } = product;

  return (
    <div className="col-md-6 related-product mb-5">
      <Link
        href={`/${locale}/product/${slug}`}
        className="bg-white h-100 d-block"
      >
        <div
          className="w-full wow fadeInUp group relative overflow-hidden rounded-sm bg-white duration-300  grid-cols-3 grid gap-6"
          data-wow-delay=".1s"
        >
          <div className="image relative block aspect-[10/10]  col-span-1 w-[300px]">
            <Image
              src={image}
              alt={title}
              quality={75}
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 pb-8  col-span-2">
            <h6 className="mb-3 text-xl text-primary pro-font-rgregular ">
              {title} {ctitle}
            </h6>
            <small className="mb-5 font-light d-block">
              {description}
              <br />
              {content}
            </small>
            <div className="btn btn-link-normal  text-primary font-light">
              Learn More
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
