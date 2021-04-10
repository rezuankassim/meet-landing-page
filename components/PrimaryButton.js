export default function PrimaryButton({ children }) {
  return (
    <button className="px-10 py-4 rounded-[29px] bg-theme-primary font-black text-[16px] leading-[26px] text-white space-x-1 hover:bg-theme-primary-hover">
      {children}
    </button>
  );
}
