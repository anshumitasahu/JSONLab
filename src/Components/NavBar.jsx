export default function NavBar() {
    return (
        <div className="flex justify-between w-full px-10 py-5 items-center bg-surface/50 sticky top-0 z-10">
            <div className="flex items-center">
                <img src="/LogoJson.png" alt="" className="w-15" />
                <p className="font-bold text-2xl">
                    JSONLab
                </p>
            </div>
            <button className="border-2 border-primary p-3 rounded-full hover:border-primary-hover">
                <a href="https://github.com/anshumitasahu/JSONLab">
                    GitHub
                </a>
            </button>
        </div>
    );
}