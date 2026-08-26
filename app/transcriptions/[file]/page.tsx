import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranscriptionFiles, Song, toDisplayName } from "../../lib/transcriptions";
import PdfViewer from "../../components/PdfViewer";
import styles from "./page.module.css";

// Required for static export (`next export` / GitHub Pages): tells Next.js
// every valid value of the [file] segment at build time.
export function generateStaticParams() {
  return getTranscriptionFiles().map((song) => { return { file: song.path } });
}

// Any [file] value not returned by generateStaticParams will 404 instead of
// trying (and failing) to render on demand, since there's no server at runtime.
export const dynamicParams = false;

type Props = {
  params: { file: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const filename = decodeURIComponent(params.file);
  return { title: `${filename} | Transcriptions` };
}

export default function TranscriptionPage({ params }: Props) {
  const filename = decodeURIComponent(params.file);
  const files = getTranscriptionFiles();

  if (!files.map((s) => s.path).includes(filename)) {
    notFound();
  }

  // const pdfUrl = `/transcription/${encodeURIComponent(song.path)}`;
  const pdfUrl = `/transcription/${encodeURIComponent(filename)}`;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{filename}</h1>
      <PdfViewer fileUrl={pdfUrl} />
    </main>
  );
}
