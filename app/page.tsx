export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            I'm a career software engineer with roots in the Pacific Northwest and the mid-Atlantic.
            My biggest motivators are cultivating a strong local community, whether in the fine arts,
            or access to affordable housing and food. A fan of live music, world travel, and cooking among
            many things, there are lots of facets to life outside of work. 
          </p>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Work Experience
          </h1>
          <div>
            <p className="max-w-lg text-xl text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-950 dark:text-zinc-50 underline font-semibold">Amazon Web Services</span>
              {" "}
              <span className="text-sm">Senior Software Engineer</span>
              {" "}
              <span className="italic text-xs">2020-2025</span>
            </p>
            <ul className="px-8 list-disc italic text-sm text-zinc-950 dark:text-zinc-50">
              <li>
                Contributor, maintainer, and primary code reviewer of open-source AWS CloudWatch agent project, 
                responsible for global releases targetting Windows, Linux and MacOS, and as a standalone project or Docker image
              </li>
              <li>Designed, implemented, benchmarked and released{" "}
                <a
                  href="https://aws.amazon.com/blogs/mt/optimize-log-collection-with-amazon-cloudwatch-agent-log-filter-expressions/"
                  className="text-zinc-950 font-semibold underline dark:text-zinc-50"
                >
                  feature
                </a>{" "}
                for pattern matching for log filtering in AWS CloudWatch agent to help optimize AWS costs for customers
              </li>
              <li>Triaged external customer escalations with hands-on troubleshooting of AWS CloudWatch agent issues</li>
              <li>Prototyped GDPR-compliant redaction for telemetry metadata exfiltrated from airgrapped environments</li>
              <li>Designed, implemented, and released internal telemetry agent plugin to passively monitor JVM processes for resource optimization analyses</li>
              <li>Implemented high-volume, daily ETL workflows in AWS EMR, orchestrated via AWS Step Functions and written as infrastructure-as-code in AWS CDK</li>
            </ul>
          </div>
          <div>
            <p className="max-w-lg text-xl text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-950 dark:text-zinc-50 underline font-semibold">Capital One</span>
              {" "}
              <span className="text-sm">Senior Software Engineer</span>
              {" "}
              <span className="italic text-xs">2018-2020</span>
            </p>
            <ul className="px-8 list-disc italic text-sm text-zinc-950 dark:text-zinc-50">
              <li>Implemented SSL termination for gRPC and HTTP API endpoints for enterprise data streaming service</li>
              <li>Designed and implemented cross-region, eventually-consistent PII scanning for sensitive data at rest</li>
              <li>Core code reviewer and maintainer for project with over 70 unique contributors</li>
              <li>Designed, implemented, benchmarked, and released data redaction mechanism for data in-transit</li>
            </ul>
          </div>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Personal Projects
          </h1>
          <div>
            <p className="max-w-md text-xl text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-950 dark:text-zinc-50">TwitchSongRequests</span>{" - "}<span className="text-md font-semibold">Written in Go</span>
            </p>
            <p className="max-w-xl text-md italic text-zinc-600 dark:text-zinc-400">
              Backend service that connects Twitch webhook events to update and queue up songs in a user's
              Spotify player. Deployed and servicing several partnered Twitch streamers
            </p>
          </div>
          <div>
            <p className="max-w-md text-xl text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-950 dark:text-zinc-50">Spotify Recapped</span>{" - "}<span className="text-md font-semibold">Written in Python</span>
            </p>
            <p className="max-w-xl text-md italic text-zinc-600 dark:text-zinc-400">
              Script that reads the listening history data for a user from Spotify and outputs statistics, top songs and artists, 
              in an attempt to reverse-engineer the implementation for the annual Spotify Wrapped
            </p>
          </div>
          <div />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Hobbies
          </h1>
          <ul className="px-8 list-disc max-w-2xl text-lg text-zinc-950 dark:text-zinc-50">
            <li>
              Piano and saxophone player in{" "}
              <a
                href="https://thebroadstrokesband.com"
                className="italic font-semibold text-zinc-600 dark:text-zinc-400"
              >
                The Broad Strokes
              </a>{" "}, and plugged in to the Richmond jazz and rnb music scene
            </li>
            <li>Avid homecook in multiple local supper clubs, and volunteer cook for free food distribution</li>
            {/* TODO: add gallery photos? */}
          </ul>
        </div>
      </main>
    </div>
  );
}
