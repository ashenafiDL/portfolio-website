import HeroText from "./hero_text/HeroText";
import HeroImage from "./hero_image/HeroImage";

const Hero = () => {
    return (
        <div className="px-80 flex flex-row gap-4 mt-6 relative">
            <HeroText />
            <HeroImage />
        </div>
    )
}

export default Hero;