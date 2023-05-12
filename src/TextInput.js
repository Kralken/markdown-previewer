import React from 'react';

export default function TextInput({children, text, onChange,status}) {

    let style;
    if (status === "normal") {
        style = { height: "200px" };
    } else if (status === "editor") {
        style = { height: "100vh" }
    }

    return (
        <div
            className="text-input-box"
            style={style}
        >
            {children}
            <textarea
                value={text}
                onChange={onChange}
                placeholder="input text here"
                id="editor"
            />
        </div>
    )
}