import React from 'react';

export default function TextInput({text, onChange}) {
    return (
        <textarea
            value={text}
            onChange={onChange}
            placeholder="input text here"
            id="editor"
        />
    )
}