import React from "react";
const { renderToString } = await import("react-dom/server");

import DocumentTemplate from "@/components/DocumentTemplate";

export const renderPdf= async (documentData, userData) => {
  return renderToString(<DocumentTemplate documentData={documentData} userData={userData} />);
};