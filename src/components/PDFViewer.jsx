import React from "react";
import pdfFile from "../assets/pdf-test.pdf";

const PDFViewer = () => {
  const openPdfInSameTab = () => {
    window.location.href = pdfFile;
  };
  return (
    <div>
      <div>
        <h2>Task 3 PDF Viewer</h2>
        <button onClick={openPdfInSameTab}>Open PDF Preview</button>
      </div>
    </div>
  );
};
export default PDFViewer;
