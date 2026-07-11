import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between w-full px-10 py-5 items-center bg-black/50 backdrop-blur-xl sticky top-0 z-10">
            <Link to="/" className="flex items-center">
                <div className="flex items-center">
                    <img src="/LogoJson.png" alt="" className="w-15" />
                    <p className="font-bold text-2xl">
                        JSONLab
                    </p>
                </div>
            </Link>
            <div>
                <NavLink to="/JSONFormatter" className={({ isActive }) => (isActive ? "text-white border-b-2 transition-colors border-primary pb-1" : "hover:text-primary")}>
                    Tool
                </NavLink>
            </div>
            <button className="border-2 border-primary px-4 py-2 rounded-full hover:border-primary-hover">
                <a href="https://github.com/anshumitasahu/JSONLab">
                    GitHub
                </a>
            </button>
        </div>
    );
}