import CardProfile from "../CardProfile/CardProfile.tsx";

function Hero() {
    return (
        <div className="grid grid-cols-2 py-4 items-center">
            <div>
                <h2 className="text-2xl uppercase font-semibold text-zinc-400 italic">Learn</h2>
                <p className="text-6xl font-bold">IT and Web development tutorials.</p>
            </div>
            <div>
                <img src="icons/hero.svg" alt="hero"/>
            </div>

            <CardProfile/>
        </div>
    );
}

export default Hero;