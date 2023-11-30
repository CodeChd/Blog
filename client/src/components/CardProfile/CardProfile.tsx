function CardProfile() {
    return (
        <a href="https://cj-dev.netlify.app/" target="_blank" className="flex items-center gap-4">
            <img src="images/profile-img.png" alt="user-profile-image" className="h-12 w-12 rounded-full ring-1 ring-indigo-600/70"/>
            <p className="text-zinc-400 text-sm upper">CJ Francisco | <span>Full Stack Developer</span></p>
        </a>
    );
}

export default CardProfile