export default function NavBar() {
    return (
        <div className="flex justify-between w-full px-10 py-5 items-center">
            <div className="flex items-center">
                <img src="/LogoJson.png" alt="" className="w-15"/>
                <p className="font-bold text-2xl">
                    JSONLab
                </p>
            </div>
            <p className="border-2 border-accent p-3 rounded-full">
                Github
            </p>
        </div>
    );
}