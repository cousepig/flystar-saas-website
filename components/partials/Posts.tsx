import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
    const { blog_folder, summary_length } = config.settings;
    return (
        <div className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">

            {posts.map((post, i) => (
                <div key={`key-${i}`}
                    className="w-full wow fadeInUp hover:shadow-two  group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 "
                    data-wow-delay=".1s"
                >
                    <Link
                        href={`/${blog_folder}/${post.slug}`}
                        className="relative block aspect-[37/22] w-full"
                    >
                        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-10 bg-green !bg-opacity-80 px-4 py-2 text-sm font-semibold capitalize text-white">
                            News
                        </span>
                        <Image
                            src={post.frontmatter.image}
                            alt={post.frontmatter.title}
                            quality={75}
                            priority={true} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </Link>
                    <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                        <h3>
                            <Link
                                href={`/${blog_folder}/${post.slug}`}
                                className="mb-4 block text-xl text-black hover:text-green "
                            >
                                {post.frontmatter.title}
                            </Link>
                        </h3>
                        {/* <p className="text-xs text-body-color">   {post.frontmatter.date}</p> */}
                        <p className="pb-6 text-base text-body-color">
                            {post.frontmatter.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;
