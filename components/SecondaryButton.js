export default function SecondaryButton({ children, className }) {
  return (
    <button
      className={`px-[29px] py-4 rounded-[29px] bg-theme-secondary font-black text-[16px] leading-[26px] text-white space-x-1 hover:bg-theme-secondary-hover ${className}`}
    >
      {children}
    </button>
  );
}
