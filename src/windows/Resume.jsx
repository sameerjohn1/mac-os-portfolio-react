import { useState } from "react";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div id="window-header" className="flex items-center justify-between">
        <WindowControls target="resume" />
        <h2 className="mx-4">Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer
          renderAnnotationLayer
          className="border rounded shadow-sm"
        />
      </Document>

      {numPages && numPages > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {Array.from(new Array(numPages), (el, index) => (
            <button
              key={index + 1}
              onClick={() => setPageNumber(index + 1)}
              className={`px-3 py-1 border rounded ${
                pageNumber === index + 1 ? "bg-gray-300" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
