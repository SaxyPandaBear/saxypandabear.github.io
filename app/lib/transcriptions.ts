import fs from "fs";
import path from "path";

const TRANSCRIPTIONS_DIR = path.join(
  process.cwd(),
  "public",
  "transcriptions"
);

const SONG_PATTERN = /^\[(.+)\] (.+)$/;

export class Song {
  public name: string;
  public artist: string;
  public part: string;
  public path: string;

  public constructor(name: string, artist: string, part: string = "", path: string = "") {
    this.name = name;
    this.artist = artist;
    this.part = part;
    this.path = path;
  }

  public static fromPath(s: string): Song {
    // assume in the form /transcriptions/[name] artist/part/filename.pdf
    const result = SONG_PATTERN.exec(decodeURIComponent(s).replace("%2F", "/"))
    if (result == null) {
      throw Error("Unable to parse file path");
    }

    const name = result[1];
    const artist = result[2];
    const substr = s.substring(s.indexOf(artist + "/"));
    const tokens = substr.split("/");
    const part = tokens[0];
    const filename = tokens[1];

    return new Song(name, artist, part, filename)
  }
}

/**
 * Returns the list of PDF filenames (e.g. "my-song.pdf") found in
 * /public/transcription. Safe to call at build time in Server Components.
 */
export function getTranscriptionFiles(): Song[] {
  if (!fs.existsSync(TRANSCRIPTIONS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(TRANSCRIPTIONS_DIR)
    .filter((file) => SONG_PATTERN.test(file))
    .sort((a, b) => a.localeCompare(b))
    .flatMap((p) => {
      // this part of the file path is the sub directory in the form `[song name] artist`
      // so parse that and then traverse further
      const result = SONG_PATTERN.exec(p)
      if (result == null) {
        return null
      }

      const name = result[1]
      const artist = result[2]
      // traverse further to get the part and file name
      return fs
        .readdirSync(path.join(TRANSCRIPTIONS_DIR, p))
        .map((p2) => {
          const song = new Song(name, artist);
          // this is the instrument part, e.g.: [song] artist/piano/some_file.pdf
          // note that the parts should be 1:1, so in each part subfolder, there should only be one PDF
          const files = fs.readdirSync(path.join(TRANSCRIPTIONS_DIR, p, p2)).filter((s) => s.endsWith(".pdf"))
          if (files.length < 1) {
            return null
          }

          song.part = p2;
          song.path = path.join(p, p2, files[0])

          return song
        })
        .filter((song) => song != null)
    })
    .filter((song) => song != null)
}

/** Strips the .pdf extension for display purposes. */
export function toDisplayName(song: Song): string {
  // respect capitalization for song name and artist name, but force part to be lowercase
  return `${song.name} - ${song.artist} | ${song.part.toLowerCase()}`;
}
