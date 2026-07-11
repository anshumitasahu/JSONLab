import { useState } from "react";
import Editor from "@monaco-editor/react";
import NavBar from "./NavBar";
import JsonView from "@uiw/react-json-view";
import Switch from "./ToggleSwitch";

export default function Formatter() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [view, setView] = useState("text");

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
            setMessage("");

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

    let parsed = null;

    try {
        parsed = JSON.parse(input);
    } catch (err) {
        parsed = null;
    }

    return (
        <div className="border border-border max-w-5xl w-full h-fit rounded-2xl bg-black flex flex-col items-center">
            <NavBar />
            <div className="mb-2 p-2 text-3xl font-bold text-center font-pixel text-primary">
                JSON Formatter
            </div>
            <div className="mb-2 text-gray-100">
                Fast. Secure. Runs entirely in your browser.
            </div>
            <div className="flex flex-col items-center w-full" >
                <div className="w-[60vw] text-center mt-2 font-bold mb-3">
                    {message || error ? (
                        <p className={error ? "text-error bg-error/10 border border-error p-2 rounded-lg" : "text-success bg-success/10 border-success p-2 rounded-lg"}>
                            {error || message}
                        </p>
                    ) : (
                        <p className="text-white bg-primary/10 border border-border p-2 rounded-lg">
                            Format • Validate • Minify
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <span
                        className={`transition-colors ${view === "text"
                            ? "text-primary font-semibold"
                            : "text-gray-500"
                            }`}
                    >
                        Text
                    </span>

                    <Switch
                        checked={view === "tree"}
                        onChange={(checked) => {
                            setView(checked ? "tree" : "text");

                            if (checked && !parsed) {
                                setError("Enter valid JSON to view the tree.");
                                setMessage("");
                            } else {
                                setError("");
                            }
                        }}
                    />

                    <span
                        className={`transition-colors ${view === "tree"
                            ? "text-primary font-semibold"
                            : "text-gray-500"
                            }`}
                    >
                        Tree
                    </span>
                </div>
                <div className="flex items-center gap-10 mt-10 justify-center w-[60vw] h-[50vh] bg-[#804d00]/50 border border-border p-4 rounded-lg">
                    {view === "text" ? (
                        <Editor
                            width="60vw"
                            height="50vh"
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
                    ) : (parsed && (
                        <JsonView
                            value={parsed}
                        />
                    )
                    )}

                </div>
                <div className="flex gap-8 mt-5 mb-4">
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
        </div >
    )
}