import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="w-full max-w-[80%] mx-auto py-4 mt-8 text-[#f4f4f5] flex justify-between">
                <Link to="/"><h1 className="text-4xl font-bold">CJ!</h1></Link>
                <button><img src="/icons/copy-link.svg" alt="copy-link" className="h-10"/></button>

            </div>
        </header>
    );
}

export default Header;