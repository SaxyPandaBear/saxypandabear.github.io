import type { Metadata } from "next";
import { items } from "../../public/Items.json";
import Gallery from "../components/gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery | Andrew Huynh",
};

export default function GalleryPage() {
  const foodImages = items.filter((i) =>
    i.imageUrl.startsWith("./gallery/food/"),
  );
  const musicImages = items.filter((i) =>
    i.imageUrl.startsWith("./gallery/music/"),
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Gallery</h1>
      <Gallery title="Food" items={foodImages} />
      <br />
      <Gallery title="Music" items={musicImages} />
    </main>
  );
}
