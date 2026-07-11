import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="flex flex-col items-center mt-30 mb-40">
            <h1 className="text-6xl font-bold text-primary mb-7 font-pixel">
                JSON Formatter
            </h1>
            <p className="text-white text-sm mb-5">
                Fast. Secure. Runs entirely in your browser.
            </p>

            <h2 className="text-2xl text-text-muted text-center font-pixel">
                Format • Validate • Minify • Beautify
            </h2>
            <button className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all mt-30">
                <Link to="/JSONFormatter">
                    <div className="flex gap-2">
                        Get started
                        <ArrowUpRightIcon size={24} weight="bold" />
                    </div>
                </Link>
            </button>
        </div >
    )
}