import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-theme-white overflow-x-hidden">
      <Head>
        <title>Meet</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <header>
        <nav>
          <Link href="#">
            <a className="mt-20 flex items-center justify-center">
              <img src="/logo.svg" alt="Meet Logo" />
            </a>
          </Link>
        </nav>
      </header>

      <div>
        <div className="mt-[61px] flex items-center justify-between">
          <div className="-ml-8">
            <img src="/desktop/image-hero-left.png" />
          </div>

          <div className="text-center">
            <h1 className="mx-auto max-w-[445px] font-black text-h1 text-theme-header">
              Group Chat for Everyone
            </h1>

            <p className="mt-[34px] mx-auto max-w-[540px] font-medium text-body text-theme-body">
              Meet makes its easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>

            <div className="mt-8 mx-auto flex items-center justify-center space-x-4">
              <PrimaryButton>
                <span>Download</span>
                <span className="text-theme-primary-label">v1.3</span>
              </PrimaryButton>

              <SecondaryButton>
                <span>What is it?</span>
              </SecondaryButton>
            </div>
          </div>

          <div className="-mr-8">
            <img src="/desktop/image-hero-right.png" />
          </div>
        </div>

        <div className="mt-[110px] flex flex-col items-center justify-center">
          <div className="w-px h-[84px] bg-theme-body opacity-25"></div>
          <div className="px-[19px] py-[15px] border border-theme-body border-opacity-25 rounded-full bg-theme-white text-body text-theme-body">
            01
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto max-w-[1110px]">
        <div className="grid grid-cols-4 gap-x-[30px]">
          <div>
            <img
              className="rounded-lg"
              src="/desktop/image-woman-in-videocall.jpg"
            />
          </div>

          <div>
            <img
              className="rounded-lg"
              src="/desktop/image-women-videochatting.jpg"
            />
          </div>

          <div>
            <img
              className="rounded-lg"
              src="/desktop/image-men-in-meeting.jpg"
            />
          </div>

          <div>
            <img className="rounded-lg" src="/desktop/image-man-texting.jpg" />
          </div>
        </div>

        <div className="mt-20 max-w-[540px] mx-auto flex flex-col items-center text-center">
          <span className="font-black text-overline text-theme-primary">
            BUILT FOR MODERN USE
          </span>

          <h2 className="mt-4 max-w-[445px] font-black text-h2 text-theme-header">
            Smarter meetings, all in one place
          </h2>

          <p className="mt-8 font-medium text-body text-theme-body">
            Send messages, share files, show your screen, and record your
            meetings - all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>

        <div className="mt-[72px] flex flex-col items-center justify-center">
          <div className="w-px h-[84px] bg-theme-body opacity-25"></div>
          <div className="z-10 px-[19px] py-[15px] border border-theme-body border-opacity-25 rounded-full bg-theme-white text-body text-theme-body">
            02
          </div>
        </div>
      </div>

      <footer className="relative w-full -mt-7 px-[165px] pt-[116px] pb-[104px] flex items-center bg-theme-primary">
        <img
          className="absolute inset-0 opacity-[0.1045]"
          src="/desktop/image-footer.jpg"
        ></img>

        <p className="z-10 font-black text-h2 text-theme-white">
          Experience more together
        </p>

        <p className="z-10 ml-[125px] max-w-[350px] font-medium text-body text-theme-white">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <SecondaryButton className="z-10 ml-[92px] px-10">
          <span>Download</span>
          <span className="text-theme-secondary-label">v1.3</span>
        </SecondaryButton>
      </footer>
    </div>
  );
}
