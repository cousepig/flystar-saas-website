import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }: any) => {
  return (
    <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      {posts.map(
        (
          post: {
            slug: any;
            image: string;
            title: string;
            description: string;
          },
          i: any
        ) => (
          <div key={`link-${i}`} className="col-md-6 related-news mb-5">
            <Link href={`${post.slug}`} className="bg-white h-100 d-block">
              <div
                key={`key-${i}`}
                className="w-full wow fadeInUp hover:shadow-two  group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 "
                data-wow-delay=".1s"
              >
                <div className="image relative block aspect-[10/20] w-full">
                  <Image
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
                <div className="p-5 pb-8">
                  <h6 className="mb-3 pro-font-rgregular ">{post.title}</h6>
                  <small className="mb-5 pro-font-rgregular  font-family-narrow-normal d-block">
                    {" "}
                    {post.description}
                  </small>
                  <div className="btn btn-link-normal pro-font-rgregular ">
                    Learn More
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default Posts;
