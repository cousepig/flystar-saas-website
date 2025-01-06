// import { generatePdf } from "@/lib/generatePdf";
// import { renderPdf } from "@/lib/renderPdf";

// import { NextApiHandler } from "next";
// import { launch } from "puppeteer";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const team = (await params).slug;
//   return Response.json({ team });
// }
// import { NextApiHandler } from "next";
import { launch } from "puppeteer";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  let slug = (await params).slug;
  const browser = await launch();
  const page = await browser.newPage();
  slug = slug === "home" ? "" : slug;

  await page.goto(`http://localhost:3000${slug ? `/${slug}` : ""}`);
  await page.emulateMediaType("screen");
  const pdfBuffer = await page.pdf({ format: "a4" });
  // res.send(pdfBuffer);
  console.log(pdfBuffer, "--- pdfBuffer");
  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=document-${slug}.pdf`,
    },
  });
  // return Response.json(pdfBuffer);
  // await browser.close();
}

// export default handler;

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { default as puppeteer } from "puppeteer";

// type Data = {
//   name: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";

//   await page.goto(`${protocol}://${req.headers.host}/pdf`);

//   const data = await page.pdf({
//     format: "letter",
//     margin: { top: 25, bottom: 25, left: 5, right: 5 },
//   });

//   res.writeHead(200, {
//     "Content-Type": "application/pdf",
//     "Content-Disposition": `inline; filename="Brian Uptagrafft Resume.pdf"`,
//   });

//   res.end(data);
// }
// import puppeteer from "puppeteer";

// import type { NextApiRequest, NextApiResponse } from "next";

// const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
//   await page.emulateMediaType("screen");

//   // Un-comment to export with background layout enabled
//   // await page.click('[id="headlessui-switch-:R1im:"]')

//   const idRemovalList = "#header, #page-break, #footer";

//   await page.evaluate((selector) => {
//     var elements = document.querySelectorAll(selector);
//     elements.forEach((pageItem) => pageItem.parentNode?.removeChild(pageItem));
//   }, idRemovalList);

//   const pdfBuffer = await page.pdf({ format: "A4", printBackground: false });

//   res.send(pdfBuffer);

//   await browser.close();
// };

// export default Handler;
// export const POST = async (req, { params }) => {
//     try {
//       const { documentId } = await req.json();
//       const userId = params.userId;

//       const userData = await getUserDataById(userId); // Fetch user details
//       const documentData = await getDocumentDataById(documentId); // Fetch document-specific data

//       if (!userId || !documentId) {
//         return new Response("Missing required fields", { status: 400 });
//       }

//       const htmlContent = await renderPdf(documentData, userData);
//       const pdfBuffer = await generatePdf(htmlContent, documentId, true);

//       return new Response(pdfBuffer, {
//         status: 200,
//         headers: {
//           "Content-Type": "application/pdf",
//           "Content-Disposition": `attachment; filename=document-${documentId}.pdf`,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       return new Response("Error generating PDF", { status: 500 });
//     }
//   };
