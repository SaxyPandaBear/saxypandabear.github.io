import fs from "fs";
import path from "path";

const TRANSCRIPTIONS_DIR = path.join(
  process.cwd(),
  "public",
  "transcriptions"
);

const SONG_PATTERN = /\[(.+)\] ([\w| ]+)/;

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
        .filter((song) => song != undefined && song != null)
    })
    .filter((song) => song != undefined && song != null)
}

/** Strips the .pdf extension for display purposes. */
export function toDisplayName(song: Song | undefined): string {
  if (song === undefined) {
    return ""
  }
  // respect capitalization for song name and artist name, but force part to be lowercase
  return `${song.name} - ${song.artist} | ${song.part.toLowerCase()}`;
}
