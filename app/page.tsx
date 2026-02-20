import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
          <div />
        </div> */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Something goes here about me.
          </p>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Work Experience
          </h1>
          <div>
            <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-950 dark:text-zinc-50">Amazon Web Services</span>{" "}<span className="italic text-sm">2020 - 2025</span>
            </p>
            <ul className="px-8 list-disc italic text-sm text-zinc-950 dark:text-zinc-50">
              <li>Contributor, maintainer, and primary code reviewer of open-source AWS CloudWatch agent project, responsible for global releases targetting Windows, Linux and MacOS, and as a standalone project or Docker image.</li>
              <li>Triaged external customer escalations with hands-on troubleshooting of AWS CloudWatch agent issues</li>
              <li>Prototyped GDPR-compliant redaction for telemetry metadata exfiltrated from airgrapped environments</li>
              <li>Designed, implemented, and released internal telemetry agent plugin to passively monitor JVM processes for resource optimization analyses</li>
              <li>Implemented high-volume, daily ETL workflows in AWS EMR, orchestrated via AWS Step Functions</li>
            </ul>
          </div>
          <div>
            <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-950 dark:text-zinc-50">Capital One</span>{" "}<span className="italic text-sm">2018 - 2020</span>
            </p>
            <ul className="px-8 list-disc italic text-sm text-zinc-950 dark:text-zinc-50">
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </ul>
          </div>
          <div>
            <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-950 dark:text-zinc-50">Capital One</span>{" "}<span className="italic text-sm">2018 - 2018</span>
            </p>
            <ul className="px-8 list-disc italic text-sm text-zinc-950 dark:text-zinc-50">
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </ul>
          </div>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Personal Projects
          </h1>
          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-950 dark:text-zinc-50">TwitchSongRequests</span>
          </p>
          <p className="max-w-md text-md italic leading-4 text-zinc-600 dark:text-zinc-400">
            Backend service that connects Twitch webhook events to update and queue up songs in a user's
            Spotify player. Written in Go.
          </p>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hobbies
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
      </main>
    </div>
  );
}
