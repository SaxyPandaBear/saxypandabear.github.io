import type { Metadata } from "next";
import Gallery from "../components/gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery | Andrew Huynh",
};

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Gallery</h1>
      <Gallery />
    </main>
  );
}
