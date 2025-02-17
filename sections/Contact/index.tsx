"use client";
// import Link from "next/link"
import NewsLatterBox from "./NewsLatterBox";

import { useTranslation } from "app/[locale]/i18n/client";
import { LocaleTypes } from "app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
const Contact = () => {
  const locale = useParams()?.locale as LocaleTypes;

  const { t } = useTranslation(locale, "contact");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert(t("Message successfully sent"));
    } catch (err) {
      console.error(err);
      alert(t("Error, please try resubmitting the form"));
    }
  }
  return (
    <section id="contact" className="overflow-hidden py-10 md:py-10 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-xl font-bold text-black">
                {t("Germany Office")}
              </h2>

              <div className="mb-12 font-light text-body-color">
                <p>A: Hans-Thomann-Str.196138 Burgebrach Germany</p>
                <p>T: +49 (0) 9549 9223-66</p>
                <p>F: +49 (0) 9549 9223-24</p>
                <p>E: info@syrincs.hk</p>
              </div>

              <h2 className="mb-3 text-xl font-bold text-black  ">
                {t("Hong Kong Office")}
              </h2>
              <div className="mb-12 font-light text-body-color">
                <p>
                  <b>High-Sound (Hong kong) Company Limited.</b>
                </p>
                <p>
                  A: 1601-02,16/F Seaview Commercial building,21-24 Connaught
                  Road West,HongKong
                </p>
                <p>T: +852 9272 3660</p>
                <p>F: +852 9272 3660</p>
                <p>E: vip@syrincs.hk</p>
              </div>

              <h2 className="mb-3 text-xl font-bold text-black  ">
                {t("China Office")}
              </h2>
              <div className="mb-12 font-light text-body-color">
                <p>
                  <b>Dongguan 3G Audio Technology Co.,Ltd.</b>
                </p>
                <p>
                  A: Building 3, No.1 Nanqi street, Qiaodong road, Qiaotou town,
                  Dongguan City, Guangdong province, 523539 China
                </p>
                <p>T: +86 769 89061679</p>
                <p>F: +86 769 89061633</p>
                <p>E: vip@syrincs.hk</p>
              </div>

              <h2 className="mb-3 text-xl font-bold text-black ">
                {t("Get Assistance by Opening a Ticket")}
              </h2>
              <p className="mb-12 font-light text-body-color">
                {t(
                  "We'll respond to your inquiry as soon as possible via email."
                )}
              </p>
              <form onSubmit={handleSubmit} className="mt-8 mb-2 ">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-primary "
                      >
                        {t("Your Name")}
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder={t("Enter your name")}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#11211f] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-primary "
                      >
                        {t("Your Email")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder={t("Enter your email")}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#11211f] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-primary "
                      >
                        {t("Your Message")}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={t("Enter your message")}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#11211f] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      {t("Submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
