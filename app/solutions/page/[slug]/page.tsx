// import Pagination from "@/components/partials/Pagination";
// import Breadcrumb from "@/components/Breadcrumb";
// import config from "@/config/config.json";
import Posts from "@/components/partials/PostCard";
import { getAllSolution } from "@/lib/get-solution-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async () => {
  // const { slug } = await params; { params }: any
  const articlesList = getAllSolution;
  if (!articlesList) {
    return notFound;
  }

  return (
    <>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
        >
          <Image
            src="/images/banner.jpg"
            alt="image"
            fill
            className="block h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h1 className="text-xl">News & Information</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <section className="relative z-10 overflow-hidden bg-secondary -mb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12"></div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary pro-font-rgregular"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary pro-font-rgregular">
                    News & Information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style></style>

      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          {/* <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
            {" "}
            <div className="col-md-6 related-news mb-5">
              <a
                className="bg-white h-100 d-block"
                href="https://www.rcf.it/en/-/rcf-unveils-innovative-technologies-and-a-new-series-at-namm-show-2025"
              >
                <div className="image relative block aspect-[10/20] w-full">
                  <Image
                    src="/images/blog/1557453622.jpg"
                    alt="2"
                    quality={75}
                    priority={true}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 pb-8">
                  <h6 className="mb-3 pro-font-rgregular ">
                    2019廣州國際專業燈光 音響展覽會
                  </h6>
                  <small className="mb-5 pro-font-rgregular  font-family-narrow-normal d-block">
                    {" "}
                    时间：24-27.2.2019 中國進出口商品交易會展館A區 展位号：5.2館
                    F28{" "}
                  </small>
                  <div className="btn btn-link-normal pro-font-rgregular ">
                    Learn More
                  </div>
                </div>{" "}
              </a>
            </div>
          </div> */}

          {/* <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center"> */}
          {/* <h1 className="text-center font-normal text-[56px]">News & Information</h1> */}
          {/* <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p> */}
          {/* </div> */}
          <Posts posts={articlesList} />
          {/* <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
