import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "EPK | Andrew Huynh",
};

const BOOKING_EMAIL = "andrew.huynh.4007@gmail.com";

const INSTRUMENTS = ["Piano", "Saxophone"];
const GENRES = ["Jazz", "R&B", "Blues"];
const FORMATS = ["Solo", "Trio", "Full Band"];

type PressPhoto = {
  id: number;
  imageUrl: string;
  alt: string;
};

// Populate once press photos exist under /public.
const PRESS_PHOTOS: PressPhoto[] = [];

type Video = {
  id: string;
  title: string;
  tagline: string;
};

const VIDEOS: Video[] = [
  {
    id: "Sm1dWQ1HTSE",
    title: "It Could Happen to You",
    tagline: "Jazz trio at the Reveler jazz jam session",
  },
  {
    id: "tUsVB7iQfAk",
    title: "Brown Sugar (blues version)",
    tagline:
      "A blues take on D'Angelo's \"Brown Sugar\" at the Blues Night jam session, Strangeways Brewery",
  },
  {
    id: "Wr_Pfw4gx1Y",
    title: "Love T.K.O.",
    tagline: "Performing with my former band on the Hofheimer Building rooftop",
  },
];

// Additional sections sourced from /public (bio assets, press docs, etc.)
// can be added here once that content exists.

export default function EpkPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>EPK</h1>

      <section className={styles.section}>
        <p className={styles.bio}>
          Richmond, VA-based pianist and saxophonist plugged into the local
          jazz and R&B scene — sitting in at jam sessions around the city and
          performing with groups spanning jazz, funk & soul, r&b, and even ska.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Instrumentation & Genres</h2>
        <ul className={styles.tagList}>
          {[...INSTRUMENTS, ...GENRES, ...FORMATS].map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Press Photos</h2>
        {PRESS_PHOTOS.length === 0 ? (
          <p className={styles.empty}>Press photos coming soon.</p>
        ) : (
          <ul className={styles.photoGrid}>
            {PRESS_PHOTOS.map((photo) => (
              <li key={photo.id}>
                <Image
                  src={photo.imageUrl}
                  alt={photo.alt}
                  width={2000}
                  height={2000}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Videos</h2>
        <ul className={styles.videoGrid}>
          {VIDEOS.map((video) => (
            <li key={video.id} className={styles.videoCard}>
              <div className={styles.videoFrame}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={styles.caption}>
                <span className={styles.videoTitle}>{video.title}</span>
                <span className={styles.tagline}>{video.tagline}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Upcoming Shows</h2>
        <div
          id="seated-55fdf2c0"
          data-artist-id="3499fba3-236b-40e0-9fe2-3bc1cd822101"
          data-css-version="3"
        ></div>
        <script async src="https://widget.seated.com/app.js"></script>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Booking</h2>
        <p className={styles.bio}>
          For bookings, reach out at{" "}
          <a href={`mailto:${BOOKING_EMAIL}`} className={styles.bookingLink}>
            {BOOKING_EMAIL}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
