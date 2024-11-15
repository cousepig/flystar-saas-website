import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSection = () => {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="音质艺术的数学秩序"
                paragraph="SYRINCS專業音響品牌, 用于安裝或移動、室內或室外、大型或小型, SYRINCS音箱、控制電子設備、機械附件和遠程控制裝置可完全滿足各種應用條件及惡劣的氣候環境。"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 lg:w-full ">

                    <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">1981年, SYRINCS專業音響品牌由Wolfgang bartsch博士、Conrad Schucht和Jürgen Eggeling創建於德國柏林。在音色的使用設計中使用一種十分嚴密的數學秩序, 這種驚人的數學秩序, 並不是枯燥, 而是帶給我們的臉上滿意的笑容。三十多年的輝煌曆史, 先後推出Club被動式揚聲器系統、“MPA”揚聲器系統、“S3”、“S2”緊湊型高聲壓級揚聲器系統、大型會所使用的Eurosub揚聲器系統、Odaiko 高端Hi-Fi低音炮、現代時尚的“MusicMate”系列揚聲器等。2000年, 推出的M3-220DT更是一直暢銷至今。</p>

                    <p className="mb-9 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">SYRINCS專業音響品牌, 用于安裝或移動、室內或室外、大型或小型, SYRINCS音箱、控制電子設備、機械附件和遠程控制裝置可完全滿足各種應用條件及惡劣的氣候環境。</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  quality={75}
                  priority={true}
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
