import Button from "../../buttons/Button";

const HeroText = () => {
    return (
        <div className="bg-slate-500 w-2/3 rounded px-24 py-24 drop-shadow-2xl">
            <div>
                <h1 className="text-3xl">Hi, I'm</h1>

                <h3 className="text-6xl">Ashenafi Debella</h3>
            </div>
            <div>
                <span className="uppercase text-2xl">Software Engineer & Web Developer</span>
            </div>
            <div className="mt-3 w-3/4">
                I'm a Software Engineer with a combined 3.5 years of work experience in full-stack development. I have helped companies create dynamic and user-friendly websites and mobile applications that have touched over 80,000 active users. I get excited about opportunities where I get to turn ideas into a working mobile and web applications that anyone can use.
            </div>

            <div className="flex flex-row gap-4">
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default HeroText;