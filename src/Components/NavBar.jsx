import { GithubLogo } from "@phosphor-icons/react";


export default function NavBar() {
    return (
        <div className="flex justify-between w-full px-10 py-3 items-center bg-black rounded-2xl">
            <div className="flex items-center">
                <img src="/LogoJson.png" alt="" className="w-12" />
                <p className="font-bold text-2xl">
                    JSONLab
                </p>
            </div>
            <button className="border-2 border-primary px-4 py-2 rounded-full hover:border-primary-hover">
                <a href="https://github.com/anshumitasahu/JSONLab" className="flex gap-2">
                    <GithubLogo size={24} />
                    <div>
                        GitHub
                    </div>
                </a>
            </button>
        </div>
    );
}