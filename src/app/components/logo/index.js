import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="./" >
        <div className="grid justify-center justify-items-center gap-1 p-3">
          <img className="w-12 object-contain" src="drama_news_logo.png" alt="Logo" />
          <div>
            <span className="size-3.5 font-semibold">
              Drama News
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;