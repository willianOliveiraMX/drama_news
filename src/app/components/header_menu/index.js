import Logo from "@/app/components/logo";
import DarkMode from "../dark_mode";
import Menu from "../menu";

const HeaderMenu = () => {
  return (
    <nav className="m-1 border rounded-xl border-zinc-400">
      <div className="pr-3 pl-3 flex justify-between items-center">
        <Menu />
        <Logo />
        <DarkMode />
      </div>
    </nav>
  );
};

export default HeaderMenu;