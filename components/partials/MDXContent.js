import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const MDXContent = ({ content }) => {
  const mdxOptions = {
    remarkPlugins: [remarkGfm],
  };

  return (
    <>
      <MDXRemote
        source={content}
        options={{ mdxOptions }}
      />
    </>
  );
};

export default MDXContent;
