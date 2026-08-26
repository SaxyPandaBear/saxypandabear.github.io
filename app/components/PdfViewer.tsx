"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import styles from "./PdfViewer.module.css";

// react-pdf needs a worker to parse PDFs off the main thread. Loading it from
// a CDN keeps this working under `next export` (no server to host the worker
// file ourselves). Pin the version to match the installed pdfjs-dist to avoid
// API-version mismatch errors.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type Props = {
  fileUrl: string;
};

export default function PdfViewer({ fileUrl }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber(1);
          setError(null);
        }}
        onLoadError={() => setError("Couldn't load this PDF.")}
        loading={<p className={styles.status}>Loading PDF…</p>}
        error={<p className={styles.status}>{error ?? "Couldn't load this PDF."}</p>}
        className={styles.document}
      >
        <Page
          pageNumber={pageNumber}
          className={styles.page}
          renderAnnotationLayer
          renderTextLayer
        />
      </Document>

      {numPages && numPages > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className={styles.button}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {pageNumber} of {numPages}
          </span>
          <button
            type="button"
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className={styles.button}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
