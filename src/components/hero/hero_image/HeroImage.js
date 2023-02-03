import Avatar from "../../../svg/Avatar.svg";

const HeroImage = () => {
    return (
        <div className="rounded absolute top-52 left-2/4 ">
            <img src={Avatar} alt="Avatar image" className="h-2/3 rounded-2xl drop-shadow-2xl" />
        </div>
    )
}

export default HeroImage;