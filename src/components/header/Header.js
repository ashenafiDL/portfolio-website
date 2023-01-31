import Navigation from "./navigation/Navigation";
import Logo from "./logo/Logo";

const Header = () => {
    return (
        <header className="h-24 flex flex-row justify-between border border-b-gray-300 px-32">
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header;