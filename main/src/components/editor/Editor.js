import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-terminal";


const Editor = ({ setQuery, value, setValue }) => {

    const [tableName, setTableName] = useState("");

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const onSubmit = () => {
        let res = value.toLowerCase().slice(value.indexOf("from") + "from".length);
        setQuery(res.split(" ")[1]);
    };

    return (
        <div className="mt-10 mx-20 flex justify-start items-center flex-1 overflow-x-hidden">
            <aside className="flex-0.3 mr-20">
                <div className="mb-5">
                    <label htmlFor="Select Table" className="font-mono text-indigo-800 font-bold text-2xl flex justify-center">&lt; Select Table &gt;</label>
                    <select 
                        id="Select Table" 
                        className="w-full h-10 pl-2 bg-indigo-800  rounded-lg font-mono text-white text-xl mt-4" 
                        onChange={(e) => {
                            setTableName(e.target.value);
                            setValue(`select * from ${e.target.value}`);
                        }}
                        value={tableName}
                    >
                        <option value="categories">categories</option>
                        <option value="customers">customers</option>
                        <option value="employee_territories">employee territories</option>
                        <option value="employees">employees</option>
                        <option value="order_details">order details</option>
                        <option value="orders">orders</option>
                        <option value="products">products</option>
                        <option value="regions">regions</option>
                        <option value="shippers">shippers</option>
                        <option value="suppliers">suppliers</option>
                        <option value="territories">territories</option>
                    </select>
                </div>
                <div>
                    <button
                        className="w-full py-1.5 bg-indigo-800 hover:bg-indigo-600 transition-all text-white font-semibold rounded-lg text-xl font-mono"
                        onClick={onSubmit}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <title id="run">run query</title>
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                            />
                        </svg>{" "}
                        &lt; Run Query &gt;
                    </button>
                </div>
            </aside>
            <aside className="flex-1.5 border-4 border-indigo-800">
            <AceEditor
                mode="mysql"
                theme="terminal"
                width="1000px"
                onChange={onChange}
                value={value}
                name={'SQL Editor'}
                fontSize={16}
                minLines={12}
                maxLines={12}
                placeholder="Write your Query here..."
                showGutter={true}
                wrapEnabled={true}
                showPrintMargin={false}
                showLineNumbers={true}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                }}
            />
            </aside>
        </div>
    );
}

export default Editor;