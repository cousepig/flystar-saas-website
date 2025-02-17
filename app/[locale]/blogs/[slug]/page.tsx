import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMDXComponent } from "next-contentlayer/hooks";
import ImageBanner from "@/components/partials/ImageBanner";
import Breadcrumb from "@/components/Breadcrumb";
import SharePost from "@/components/partials/SharePost";

import { getAllArticle } from "@/lib/get-article-data";
import type { Metadata } from "next";

import { createTranslation } from "../../i18n/server";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const { slug, locale } = await params;
  const { t } = await createTranslation(locale, "news");
  const article = getAllArticle(locale).find((post) => post.slug === slug);

  return {
    title: article.title + t("meta.title"),
    description: article.description,
  };
}

export default async function PostPage({ params }: any) {
  const { slug, locale } = await params;
  const { t } = await createTranslation(locale, "news");
  const article = getAllArticle(locale).find((post) => post.slug === slug);

  const MDXContent = getMDXComponent(article.body.code);

  console.log(article.title, "--loading");
  const relatedArticle = getAllArticle(locale).sort();
  if (!article) {
    return notFound();
  }

  const banner = [
    {
      title: t("title"),
      description: t("description"),
      image: "/images/banner-1.jpg",
    },
  ][0];
  const share = [
    {
      url: "https://www.syrincs.hk" + slug,
      title: article.title,
      description: article.description,
      image: article.image,
    },
  ][0];
  const breadcrumbs = [
    { name: t("Home"), href: `/${locale}` },
    { name: t("News & Information"), href: `/${locale}/blogs` },
  ];

  return (
    <>
      <ImageBanner banner={banner} />
      <Breadcrumb data={breadcrumbs} />
      <section className="pb-[120px] pt-[30px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-xl font-bold leading-tight text-primary">
                  {article.title}
                </h1>
                <div>
                  <div className="mb-6 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={article.image}
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="mb-8 prose font-light prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
                    <MDXContent />
                    {article.images.map((img: any, index: any) => (
                      <div
                        key={index}
                        className="relative aspect-[97/60] w-full sm:aspect-[97/44] mb-4"
                      >
                        <Image
                          src={img}
                          alt={img}
                          className="h-full w-full object-cover object-center"
                          quality={75}
                          priority={true}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="py-10 text-base font-light text-body-color">
                    {t("More information on:")}
                    <a href="/" rel="noopener" className="text-primary">
                      www.syrincs.hk
                    </a>
                  </p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5 flex items-center sm:justify-end">
                      <SharePost share={share} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 rounded-sm bg-white">
                <h3 className="bg-primary border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-medium text-white uppercase">
                  {t("Related Posts")}
                </h3>
                <ul className="py-8">
                  {relatedArticle.map((post, index) => (
                    <li
                      key={index}
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                    >
                      <Link href={`/${locale}/blogs/${post.slug}`}>
                        <div className="flex items-center lg:block xl:flex">
                          <div className="w-full">
                            <h5 className="mb-[6px] block text-base font-light leading-snug text-primary hover:text-black ">
                              {post.title}
                            </h5>
                          </div>
                        </div>
                        <div className="lg:mb-3 xl:mb-3">
                          <div className="relative h-[120px] w-[350px] overflow-hidden rounded-5">
                            <Image src={post.image} alt={post.title} fill />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
