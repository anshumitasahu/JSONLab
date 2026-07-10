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
        <div className="flex flex-col items-center justify-center border border-border max-w-5xl">
            <div className="border-b border-b-accent">
                JSON Formatter
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div>
                    <p>Input:</p>
                    <textarea name="JSON Frormatter" id="" placeholder="Paste your JSON here... " value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div>
                    <p>Output:</p>
                    <pre>
                        {error || message || output}
                    </pre>
                </div>
            </div>
            <div>
                <button onClick={formatJSON}>
                    Format
                </button>
                <button onClick={validateJSON}>
                    Validate
                </button>
                <button onClick={clearJSON}>
                    Clear
                </button>
                <button onClick={copyJSON}>
                    Copy
                </button>
            </div>
        </div>
    )
}