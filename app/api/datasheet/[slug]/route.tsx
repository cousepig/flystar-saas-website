// import { launch } from "puppeteer";
import { allProducts } from "contentlayer/generated";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  let slug = (await params).slug.replace(".pdf", ".yml");
  const chromiumPack =
    "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";
  // const browser = await launch();
  const browser = await puppeteer.launch({
    args: chromium.args,
    // See https://www.npmjs.com/package/@sparticuz/chromium#running-locally--headlessheadful-mode for local executable path
    executablePath: await chromium.executablePath(chromiumPack),
    headless: true,
  });
  const page = await browser.newPage();

  const currentProducts = allProducts.find(
    (product) => product._raw.sourceFileName === slug
  );
  if (!currentProducts) {
    return new Response("Product not found", { status: 404 });
  }
  const newslug = currentProducts._raw.flattenedPath.replace(
    "product",
    "product/datasheet"
  );

  console.log(newslug, "--- slug");
  await page.goto(`http://localhost:3000${newslug ? `/${newslug}` : ""}`);
  await page.emulateMediaType("screen");
  const idRemovalList = ".header, .page-break, .footer, .bottom-8";

  await page.evaluate((selector) => {
    var elements = document.querySelectorAll(selector);
    elements.forEach((pageItem) => pageItem.parentNode?.removeChild(pageItem));
  }, idRemovalList);
  const pdfBuffer = await page.pdf({
    format: "a4",
    printBackground: true,
    displayHeaderFooter: true,
    footerTemplate: `<div style='font-family: LiberationSans, "Liberation Sans", Arial, Helvetica, sans-serif; font-size: 8px; width: 90%; margin: auto; margin-top: 40px; display:flex; flex-flow:row wrap;'>
    <span style="text-align: left; width: 30%;"></span>
    <span style="text-align: center; width: 40%;">Copyright © 2024 Syrincs. All Rights Reserved.</span>
    <span style="text-align: right; width: 30%;">Page <span class="pageNumber"></span> of <span class="totalPages"></span>
    </span></div>`,
    margin: { top: "0px", bottom: "40px" },
  });
  await browser.close();
  return new Response(pdfBuffer, {
    status: 200,
    // headers: {
    //   "Content-Type": "application/pdf",
    //   "Content-Disposition": `attachment; filename=datasheet-${slug}.pdf`,
    // },
  });
}
