import Logo from "@/app/components/logo";
import DarkMode from "../dark_mode";
import Menu from "../menu";

const HeaderMenu = () => {
    return (
        <nav className="m-3 border rounded-xl border-b-neutral-700">
            <div className="pr-3 pl-3 flex justify-between items-center">
                <Menu />
                <Logo />
                <DarkMode />
            </div>
        </nav>
    );
};

export default HeaderMenu;