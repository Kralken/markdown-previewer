import React from 'react';

export default function TextInput({children, text, onChange}) {
    return (
        <>
            {children}
            <textarea
                value={text}
                onChange={onChange}
                placeholder="input text here"
                id="editor"
            />
        </>
    )
}