import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Formatter() {
    const [input, setInput] = useState("");
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

            setInput(formattedData);
            setMessage("JSON formatted successfully.");

            setError("");
        }
        catch (error) {

            setError("Invalid JSON");

            setInput("");

        }
    }

    function validateJSON() {
        try {
            JSON.parse(input);

            setMessage("✓ Valid JSON");
            setError("");
        } catch (err) {
            setError(err.message);
            setMessage("");
        }
    }

    function minifyJSON() {
        try {
            const minified = JSON.stringify(JSON.parse(input));
            setInput(minified);
            setMessage("JSON minified.");
            setError("");
        } catch (err) {
            setError(err.message);
        }
    }

    function clearJSON() {
        setInput("");
        setError("");
        setMessage("");
    }

    async function copyJSON() {

        if (!input) {
            setError("Nothing to copy");
            return;
        }

        await navigator.clipboard.writeText(input);

        setMessage("Copied");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    return (
        <div className="border border-border max-w-5xl w-4xl h-fit p-8 rounded-2xl bg-[#0f1117] border border-zinc-800 shadow-xl">
            <div className="mb-3 p-3 text-2xl font-bold text-center">
                JSON Formatter
            </div>
            <div className="flex flex-col items-center w-full border-t border-t-accent" >
                <div className="flex items-center gap-10 mt-10 items-center justify-center">
                    <div>
                        <Editor
                            width="400px"
                            height="400px"
                            language="json"
                            theme="vs-dark"
                            value={input}
                            onChange={(value) => setInput(value || "")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 15,
                                fontFamily: "JetBrains Mono, monospace",
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                wordWrap: "on",
                                lineNumbers: "on",
                                tabSize: 2,
                                padding: {
                                    top: 16,
                                    bottom: 16,
                                },
                            }}
                        />

                        {error && (
                            <p className="text-error mt-2">{error}</p>
                        )}

                        {message && (
                            <p className="text-success mt-2">{message}</p>
                        )}
                    </div>
                </div>
                <div className="flex gap-8 mt-10">
                    <button onClick={formatJSON} className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all">
                        Format
                    </button>
                    <button onClick={validateJSON} className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all">
                        Validate
                    </button>
                    <button onClick={minifyJSON} className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all">
                        Minify
                    </button>
                    <button onClick={clearJSON} className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all">
                        Clear
                    </button>
                    <button onClick={copyJSON} className="bg-primary px-4 py-2 rounded-full font-bold text-lg hover:bg-primary-hover hover:-translate-y-1 transition-all">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}