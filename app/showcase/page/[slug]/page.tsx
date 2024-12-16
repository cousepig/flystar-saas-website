// import Pagination from "@/components/partials/Pagination";
// import Breadcrumb from "@/components/Breadcrumb";
// import config from "@/config/config.json";
import Posts from "@/components/partials/PostCard";
import { getAllShowcases } from "@/lib/get-showcase-data";
import { notFound } from "next/navigation";
import Image from "next/image"
import Link from "next/link"


/**
 * 分页显示博客内容
 *
 * @param params 包含博客分页信息的参数对象
 * @returns 返回包含面包屑导航、博客标题、描述、博客列表和分页组件的 JSX 元素
 */
const BlogPagination = async ({ params }: any) => {

  const { slug } = await params;
  const caseList = getAllShowcases;
  if (!caseList) {
    return notFound;
  }


  return (
    <>

       <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
   
    <div
      className="relative h-[300px] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-active
            data-twe-carousel-item>
             <Image
                        src="/images/banner.jpg"
                        alt="image"
                        fill
                        className="block h-full w-full object-cover object-center"
                      />
     
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h1 className="text-xl">Case Studies</h1>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
  
   
      </div>
      <section className="relative z-10 overflow-hidden bg-secondary -mb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <p className="hidden">{slug}</p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                  Case Studies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    
      <section className="pb-[20px] pt-[20px]">
        <div className="container">
          {/* <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center"> */}
            {/* <h1 className="text-center font-normal text-[56px]">Case Studies</h1> */}
           
            {/* <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p> */}
          {/* </div> */}
          <Posts posts={caseList} />
          {/* <Pagination section={blog_folder} totalPages={totalPages} currentPage={currentPage} /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPagination;
