import SectionTitle from "../../components/SectionTitle";
import SingleCase from "./SingleCase";
import caseData from "./caseData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="发现新的[西林克斯]"
          paragraph="我们通过令人难忘、身临其境的声音，使听觉、感觉联系成为可能。"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {caseData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleCase blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
