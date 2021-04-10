import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-theme-white overflow-x-hidden">
      <Head>
        <title>Meet</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar />

      <div>
        <div className="mt-[61px] lg:h-[358px] flex flex-col lg:flex-row justify-between">
          <div className="block -mx-5 sm:-mx-6.5 lg:hidden">
            <img src="/tablet/image-hero.png" />
          </div>

          <div className="hidden lg:block lg:-ml-8">
            <img src="/desktop/image-hero-left.png" />
          </div>

          <div className="mt-12 sm:mt-[72px] lg:mt-[48px] text-center">
            <h1 className="mx-auto max-w-[327px] sm:max-w-[445px] font-black text-h2 sm:text-h1 text-theme-header">
              Group Chat for Everyone
            </h1>

            <p className="mt-6 sm:mt-[32px] mx-auto max-w-[327px] sm:max-w-[540px] font-medium text-body text-theme-body">
              Meet makes its easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>

            <div className="mt-8 mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <PrimaryButton>
                <span>Download</span>
                <span className="text-theme-primary-label">v1.3</span>
              </PrimaryButton>

              <SecondaryButton>
                <span>What is it?</span>
              </SecondaryButton>
            </div>
          </div>

          <div className="hidden lg:block lg:-mr-8 lg:mt-[48px]">
            <img src="/desktop/image-hero-right.png" />
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-[110px] flex flex-col items-center justify-center">
          <div className="w-px h-[84px] bg-theme-body opacity-25"></div>
          <div className="w-14 h-14 flex items-center justify-center border border-theme-body border-opacity-25 rounded-full bg-theme-white font-black text-body text-theme-body">
            01
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto max-w-[327px] sm:max-w-[689px] lg:max-w-[1110px]">
        <div className="grid grid-cols-2 grid-flow-row sm:grid-cols-4 auto-cols-max gap-x-[25px] gap-y-6 sm:gap-x-[30px]">
          <div>
            <img
              className="h-[151px] sm:h-[156px] lg:h-[242px] rounded-lg"
              src="/desktop/image-woman-in-videocall.jpg"
            />
          </div>

          <div>
            <img
              className="h-[151px] sm:h-[156px] lg:h-[242px] rounded-lg"
              src="/desktop/image-women-videochatting.jpg"
            />
          </div>

          <div>
            <img
              className="h-[151px] sm:h-[156px] lg:h-[242px] rounded-lg"
              src="/desktop/image-men-in-meeting.jpg"
            />
          </div>

          <div>
            <img
              className="h-[151px] sm:h-[156px] lg:h-[242px] rounded-lg"
              src="/desktop/image-man-texting.jpg"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-12 lg:mt-20 max-w-[327px] sm:max-w-[573px] lg:max-w-[540px] mx-auto flex flex-col items-center text-center">
          <span className="font-black text-overline text-theme-primary">
            BUILT FOR MODERN USE
          </span>

          <h2 className="mt-4 max-w-[445px] font-black text-h3 sm:text-h2 text-theme-header align-text-top">
            Smarter meetings, all in one place
          </h2>

          <p className="mt-8 font-medium text-body text-theme-body align-text-top">
            Send messages, share files, show your screen, and record your
            meetings - all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>

        <div className="mt-16 sm:mt-[80px] lg:mt-[72px] flex flex-col items-center justify-center">
          <div className="w-px h-[84px] bg-theme-body opacity-25"></div>
          <div className="z-10 w-14 h-14 flex items-center justify-center border border-theme-body border-opacity-25 rounded-full bg-theme-white font-black text-body text-theme-body">
            02
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
