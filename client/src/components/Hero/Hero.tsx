import CardProfile from "../CardProfile/CardProfile.tsx";

function Hero() {
    return (
        <div className="grid grid-cols-2 gap-2 py-4 my-8 items-center">
            <div>
                <h2 className="text-2xl uppercase font-semibold brightness-75">I Build</h2>
                <p className="text-6xl font-bold mb-8">Applications and share tips and tricks.</p>
                <p className="text-2xl text-zinc-400 brightness-125 mt-8"> Let's simplify the complex and make it more enjoyable together!</p>
            </div>
            <div>
                <img src="icons/hero.svg" alt="hero"/>
            </div>

            <CardProfile/>
        </div>
    );
}

export default Hero;
