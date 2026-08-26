import type { Metadata } from "next";
import Link from "next/link";
import { getTranscriptionFiles, toDisplayName } from "../lib/transcriptions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transcriptions | Andrew Huynh",
};

export default function TranscriptionsPage() {
  const files = getTranscriptionFiles();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Transcriptions</h1>

      {files.length === 0 ? (
        <p className={styles.empty}>No transcriptions available yet.</p>
      ) : (
        <ul className={styles.list}>
          {files.map((file) => (
            <li key={file.path} className={styles.item}>
              <Link
                href={`/transcriptions/${encodeURIComponent(file.path)}`}
                className={styles.link}
              >
                {toDisplayName(file)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
