import Logo from "@/app/components/logo";
import DarkMode from "../dark_mode";
import Menu from "../menu";

const HeaderMenu = () => {
  return (
    <div className="flex justify-center w-full">
      <nav className="m-1 w-3xl border rounded-xl border-zinc-400">
        <div className="pr-3 pl-3 flex justify-between items-center">
          <Menu />
          <Logo />
          <DarkMode />
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenu;