import SecondaryButton from "./SecondaryButton";

export default function Footer() {
  return (
    <footer className="relative w-full sm:h-full -mt-7 px-6 sm:pl-[97px] sm:pr-[98px] lg:pl-[167px] lg:pr-[165px] pt-[92px] lg:pt-[116px] pb-[72px] sm:pb-[66px] lg:pb-[105px] bg-theme-primary">
      <img
        className="block w-full h-full sm:hidden lg:hidden absolute inset-0 opacity-[0.1045]"
        src="/mobile/image-footer.jpg"
        alt="Footer image for mobile"
      ></img>

      <img
        className="hidden w-full h-full sm:block lg:hidden absolute inset-0 opacity-[0.1045]"
        src="/tablet/image-footer.jpg"
        alt="Footer image for tablet"
      ></img>

      <img
        className="hidden w-full h-full lg:block absolute inset-0 opacity-[0.1045]"
        src="/desktop/image-footer.jpg"
        alt="Footer image for desktop"
      ></img>

      <div className="lg:max-w-[1100px] flex flex-col lg:flex-row items-center text-center align-text-top lg:text-left">
        <p className="z-10 sm:max-w-[457px] lg:max-w-[350px] font-black text-h3 sm:text-h2 text-theme-white align-text-top">
          Experience more together
        </p>

        <p className="z-10 mt-6 sm:mt-8 lg:mt-0 lg:mb-4 lg:ml-[125px] sm:max-w-[573px] lg:max-w-[350px] font-medium text-body text-theme-white align-text-top">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <SecondaryButton className="z-10 mt-8 sm:mt-10 lg:mt-0 lg:ml-[92px] px-10">
          <span>Download</span>
          <span className="text-theme-secondary-label">v1.3</span>
        </SecondaryButton>
      </div>
    </footer>
  );
}
