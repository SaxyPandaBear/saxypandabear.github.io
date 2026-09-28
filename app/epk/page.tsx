import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "EPK | Andrew Huynh",
};

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const BOOKING_EMAIL = "AH.SP.booking@gmail.com";

type PressPhoto = {
  id: number;
  imageUrl: string;
  alt: string;
};

const PRESS_PHOTOS: PressPhoto[] = [
  {
    id: 1,
    imageUrl: "/epk/piano1.jpeg",
    alt: "Andrew playing keyboard, photographed from behind in a moody, shallow-focus shot under pink and green stage lights",
  },
  {
    id: 2,
    imageUrl: "/epk/piano2.jpeg",
    alt: "Andrew playing keyboard outdoors at dusk, saxophone resting on its stand beside him",
  },
  {
    id: 3,
    imageUrl: "/epk/piano3.jpeg",
    alt: "Andrew playing keyboard on a brick-walled brewery patio, saxophone on a stand nearby",
  },
  {
    id: 4,
    imageUrl: "/epk/sax1.jpeg",
    alt: "Andrew playing saxophone on stage under purple and white lights, piano visible beside him",
  },
  {
    id: 5,
    imageUrl: "/epk/sax2.jpeg",
    alt: "Andrew playing saxophone on stage, shot from a low angle under red lights",
  },
  {
    id: 6,
    imageUrl: "/epk/piano4.jpeg",
    alt: "Andrew playing keyboard in profile, a close-up shallow-focus shot under pink and green stage lights",
  },
];

type Video = {
  id: string;
  title: string;
  tagline: string;
  orientation?: "landscape" | "portrait";
};

const VIDEOS: Video[] = [
  {
    id: "ThDpFT37XRM",
    title: "In a Sentimental Mood",
    tagline: 'Piano performance of "In A Sentimental Mood" @ Le Bistro Arabe',
  },
  {
    id: "Gpgs5eisQv0",
    title: "My Foolish Heart",
    tagline: 'Solo piano intro to "My Foolish Heart" @ Strangeways Brewery',
    orientation: "portrait",
  },
  {
    id: "PC11bP0JWLc",
    title: "Just The Two Of Us",
    tagline:
      "Sax solo over The Broad Strokes's cover of Just The Two Of Us, @ Reveler",
    orientation: "portrait",
  },
];

export default function EpkPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Electronic Press Kit (EPK)</h1>

      <section className={styles.section}>
        <p className={styles.bio}>
          Richmond, VA-based saxophonist and pianist.
          <br />
          <br />
          Andrew can be found throughout the city performing with several of
          Richmond&apos;s favorite artists. From intimate private events, trio
          shows, full band shows, to jam sessions, his repertoire spans jazz,
          funk, Motown, rock, and even ska. Andrew can often be found at The
          Reveler, The Camel, Get Tight Lounge, and River City Roll, and has
          recently even joined RVA favorites <em>
            What&apos;s Our Age Again
          </em>{" "}
          on stage, adding his own signature sound to an amazing show. Andrew
          draws inspiration from artists including: Stevie Wonder, Dexter
          Gordon, Sonny Rollins, and Bruno Mars to name a few.
          <br />
          <br />
          Andrew has been playing piano since the age of 4, navigating the music
          world through classical piano, into modern pop, and landing on jazz,
          soul, and r&b. He started playing saxophone in 2024 and is already a
          regular at various jam sessions around town when he isn&apos;t
          performing with one of his various projects.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shows and Booking</h2>
        <p className={styles.bio}>
          For bookings, reach out at{" "}
          <a href={`mailto:${BOOKING_EMAIL}`} className={styles.bookingLink}>
            {BOOKING_EMAIL}
          </a>
          .
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/saxypandabear"
            className={styles.socialButton}
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@SaxyPandaBear"
            className={styles.socialButton}
            rel="noopener noreferrer"
            target="_blank"
          >
            <YouTubeIcon />
            YouTube
          </a>
        </div>
        <br />
        <div
          id="seated-55fdf2c0"
          data-artist-id="3499fba3-236b-40e0-9fe2-3bc1cd822101"
          data-css-version="3"
        ></div>
        <script async src="https://widget.seated.com/app.js"></script>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Press Photos</h2>
        {PRESS_PHOTOS.length === 0 ? (
          <p className={styles.empty}>Press photos coming soon.</p>
        ) : (
          <ul className={styles.photoGrid}>
            {PRESS_PHOTOS.map((photo) => (
              <li key={photo.id}>
                <Image src={photo.imageUrl} alt={photo.alt} fill />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Videos</h2>
        <ul className={styles.videoGrid}>
          {VIDEOS.map((video) => (
            <li key={video.id} className={styles.videoCard} tabIndex={0}>
              <div
                className={
                  video.orientation === "portrait"
                    ? `${styles.videoFrame} ${styles.videoFramePortrait}`
                    : styles.videoFrame
                }
              >
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
    </main>
  );
}
