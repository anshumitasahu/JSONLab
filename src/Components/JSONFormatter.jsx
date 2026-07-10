import { useState } from "react";

export default function Formatter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    function formatJSON() {
        try {
            const parsedData = JSON.parse(input);

            const formattedData = JSON.stringify(
                parsedData,
                null,
                2
            );

            console.log("Formatted:", formattedData);

            setOutput(formattedData);

            setError("");
        }
        catch (error) {

            setError("Invalid JSON");

            setOutput("");

        }
    }

    function validateJSON() {
        try {
            JSON.parse(input);

            setError("");
            setOutput("Valid JSON");

        } catch (error) {

            setOutput("");
            setError("Invalid JSON");

        }
    }

    function clearJSON() {
        setInput("");
        setOutput("");
        setError("");
    }

    async function copyJSON() {

        if (!output) {
            console.log("Nothing to copy");
            return;
        }

        await navigator.clipboard.writeText(output);

        console.log("Copied");
    }

    return (
        <div className="border border-border max-w-5xl w-4xl h-fit p-8">
            <div className="mb-3 p-3 text-2xl font-bold text-center">
                JSON Formatter
            </div>
            <div className="flex flex-col items-center w-full border-t border-t-accent" >
                <div className="flex flex-col items-center gap-10 mt-10">
                    <div>
                        <p className="text-sm mb-2">Input:</p>
                        <textarea name="JSON Frormatter" id="" placeholder="Paste your JSON here... " value={input} onChange={(e) => setInput(e.target.value)} className="outline-0 border border-border w-100 h-60 resize-none p-4 bg-surface-2" />
                    </div>
                    <div className="mb-10">
                        <p className="text-sm mb-2">Output:</p>
                        <pre className="w-100 border border-border h-fit p-4 bg-surface-2">
                            {error || message || output}
                        </pre>
                    </div>
                </div>
                <div className="flex gap-8">
                    <button onClick={formatJSON} className="bg-primary p-4 rounded-full font-bold text-lg hover:bg-primary-hover">
                        Format
                    </button>
                    <button onClick={validateJSON} className="bg-primary p-4 rounded-full font-bold text-lg hover:bg-primary-hover">
                        Validate
                    </button>
                    <button onClick={clearJSON} className="bg-primary p-4 rounded-full font-bold text-lg hover:bg-primary-hover">
                        Clear
                    </button>
                    <button onClick={copyJSON} className="bg-primary p-4 rounded-full font-bold text-lg hover:bg-primary-hover">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}