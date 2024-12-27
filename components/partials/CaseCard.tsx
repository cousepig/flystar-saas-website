import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }: any) => {
  return (
    <div>
      <div>
        {posts.map(
          (
            post: {
              slug: any;
              image: string;
              title: string;
              description: string;
            },
            i: any
          ) =>
            i === 0 && (
              <div
                key={i}
                className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-16 md:mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <div className="col-span-2">
                  <Link
                    key={i}
                    href={`${post.slug}`}
                    className="bg-white overflow-hidden transition duration-300 ease-in-out"
                  >
                    <div className="image relative block aspect-[35/70] h-[350px] w-full overflow-hidden">
                      <Image
                        className="object-cover object-center w-full scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                        src={post.image}
                        alt={post.title}
                        quality={75}
                        priority={true}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                </div>
                <div className="">
                  <Link
                    key={i}
                    href={`${post.slug}`}
                    className="bg-white overflow-hidden transition duration-300 ease-in-out"
                  >
                    <div className="py-5">
                      <h6 className="mb-3 text-xl font-medium ">
                        {post.title}
                      </h6>
                      <small className="mb-5 text-base text-slate-500 font-light d-block">
                        {post.description}
                      </small>
                      {/* <div className="btn btn-link-normal pro-font-rgregular ">
                    Learn More
                  </div> */}
                    </div>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>

      <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {posts.map(
          (
            post: {
              slug: any;
              image: string;
              title: string;
              description: string;
            },
            i: any
          ) =>
            i > 0 && (
              <Link
                key={i}
                href={`${post.slug}`}
                className="bg-white related-showcase border-b border-slate-300 overflow-hidden transition duration-300 ease-in-out"
              >
                <div
                  key={`key-${i}`}
                  className="w-full wow fadeInUp group relative overflow-hidden bg-white duration-300 "
                  data-wow-delay=".1s"
                >
                  <div className="image relative block aspect-[45/70] w-full overflow-hidden">
                    <Image
                      className="object-cover object-center w-full h-full scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                      src={post.image}
                      alt={post.title}
                      quality={75}
                      priority={true}
                      fill
                      // style={{
                      //   width: "100%",
                      //   height: "auto",
                      // }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="py-5">
                    <h6 className="mb-3 text-xl font-medium ">{post.title}</h6>
                    <small className="mb-5 text-slate-500 font-light d-block">
                      {post.description}
                    </small>
                    {/* <div className="btn btn-link-normal pro-font-rgregular ">
                    Learn More
                  </div> */}
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Posts;
