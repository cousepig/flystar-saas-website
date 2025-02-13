import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

const AboutSection = () => {
  //   const List = ({ text }: any) => (
  //     <p className="mb-5 flex items-center text-lg font-medium text-body-color">
  //       <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-primary bg-opacity-10 text-primary">
  //         {checkIcon}
  //       </span>
  //       {text}
  //     </p>
  //   );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-8/12">
              <SectionTitle
                title="The Mathematical Order of Acoustic Art"
                paragraph="SYRINCS is a professional audio brand suitable for installation or portable use, indoors or outdoors, large-scale or small-scale applications. SYRINCS speakers, control electronics, mechanical accessories, and remote control devices are designed to meet diverse application needs and withstand harsh environmental conditions."
                mb="10px"
              />

              <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 lg:w-full ">
                    <p className="text-xs font-light !leading-relaxed text-black  mb-3 ">
                      Founded in 1981 in Berlin, Germany, by Dr. Wolfgang
                      Bartsch, Conrad Schucht, and Jürgen Eggeling, SYRINCS has
                      adopted a highly rigorous mathematical order in the design
                      of its tonal characteristics. This mathematical precision
                      is not dull but brings satisfaction to users with its
                      pleasing results. Over its more than 30-year history, the
                      brand has introduced various systems, including the Club
                      passive speaker system, &quot;MPA&quot; speaker system,
                      &quot;S3&quot; and &quot;S2&quot; compact high
                      sound-pressure level speaker systems, the Eurosub speaker
                      system for large venues, the high-end Odaiko Hi-Fi
                      subwoofer, and the modern, stylish &quot;MusicMate&quot;
                      series. Notably, the M3-220DT, launched in 2000, remains a
                      bestseller to this day.
                    </p>

                    <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                      SYRINCS professional audio systems cater to a wide range
                      of installation and application needs, capable of
                      operating reliably in even the most challenging climatic
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
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

          <div className="mt-10 -mx-4 flex flex-wrap items-center border-t border-body-color/[.15] pt-12 dark:border-white/[.15]">
            <h2 className="w-full px-4 lg:w-12/12 mb-4 text-xl font-normal !leading-tight text-primary">
              Technical features:
            </h2>
            <div className="w-full px-4 lg:w-6/12">
              <div className={`wow fadeInUp w-full `} data-wow-delay=".1s">
                <p className="text-xs font-light !leading-relaxed text-black ">
                  SYRINCS， Inheriting the rigor and solidity of German design,
                  it is reflected in its timbre, using a very rigorous
                  mathematical order in the design of timbre, and its timbre is
                  full of rigorous rationalist color charm.
                </p>

                <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                  SYRINCS， It is an art based on rationality, concretizing in
                  an incredible way, giving abstract reality and bringing us a
                  satisfied smile on our faces.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <p className="text-xs font-light !leading-relaxed text-black ">
                SYRINCS speakers have strong directional control capabilities.
                Through reasonable sound design, they effectively avoid
                excessive reflection on ceilings/side walls, improve the direct
                sound energy ratio, enhance clarity, and match the neutral sound
                characteristics of speakers. They have strong music expression
                and extremely high fidelity, suitable for different types of
                music amplification needs;
              </p>

              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                The speaker system formed by the array has a particularly high
                and controllable Q value, and the sound produces constant
                directional coverage on the horizontal coverage. SYRINCS
                low-frequency speaker is designed with a low-frequency
                directional multi grid short horn angular sound lens, which not
                only increases sound pressure but also reduces the impact of
                emitted sound on clarity, resulting in a balanced sound field
                coverage area.
              </p>

              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                The power amplifier system is a SYRINCS supporting system, and
                the digital power amplifier system has both digital and analog
                signal input interfaces, allowing the system signal to be
                connected to the later stage through two ways; At the same time,
                the digital interface can meet the condition that the sound
                amplification system only undergoes one A/D and D/A conversion
                from pickup to return, thereby further improving the high
                fidelity of the sound. SYRINCS products not only ensure system
                performance, but also pursue amplification quality and accuracy.
                Therefore,
              </p>

              <p className="text-xs font-light !leading-relaxed text-black  mb-9">
                SYRINCS' speakers are all equipped with dedicated amplifiers of
                the same brand, which have detailed speaker adjustment
                parameters built into the amplifiers to achieve maximum matching
                and ensure that their audio systems work in optimal condition
                for a long time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="page-description">
        <div className="container">
          <h1 className="text-3xl">Products</h1>
          <p className="text-xs font-light">
            SYRINCS is a professional audio brand used for installation or
            movement, indoor or outdoor, large or small. SYRINCS speakers,
            control electronics, mechanical accessories, and remote control
            devices can fully meet various application conditions and harsh
            weather environments.
          </p>
          <div className="text-center w-64 mx-auto">
            <a
              href="/products/"
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-light h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto "
            >
              <span className="fl-button-text">View product line-up</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
