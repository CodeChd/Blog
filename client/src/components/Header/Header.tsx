function Header() {
    return (
        <header>
            <div className="w-full max-w-[80%] mx-auto py-4 text-[#f4f4f5] flex justify-between">
                <h1 className="text-4xl font-bold">CJ!</h1>
                <button><img src="icons/copy-link.svg" alt="copy-link" className="h-10"/></button>

            </div>
        </header>
    );
}

export default Header;