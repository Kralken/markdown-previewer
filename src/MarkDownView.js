import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function MarkDownPreview({children, text, status}) {
    
    // height change when status change
    let style;
    if (status === "preview") {
        style = { "min-height": "100vh" }
    }

    // using marked to parse the text provided in the text area
    marked.use({
        breaks: true
    });
    const preview = DOMPurify.sanitize(marked.parse(text));

    return (
        <div
            className="preview-box"
        >
            {children}
            <div className="preview-container">
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{__html: preview}}
                    style={style}
                />
            </div>
        </div>
    );
}