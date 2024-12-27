const SectionTitle = ({
  title,
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-xl font-normal !leading-tight text-primary">
          {title}
        </h2>
        <p className="text-xs font-light !leading-relaxed text-black ">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
