import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" >
        <div className="grid justify-center justify-items-center gap-1 p-3">
          <Image priority src="/drama_news_logo.png" alt="Logo" width={48} height={48} />
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