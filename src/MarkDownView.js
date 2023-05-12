import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function MarkDownPreview({children, text}) {
    
    // using marked to parse the text provided in the text area
    marked.use({
        breaks: true
    });
    const preview = DOMPurify.sanitize(marked.parse(text));

    return (
        <>
            {children}
            <div
                id="preview"
                className="preview-box"
                dangerouslySetInnerHTML={{__html: preview}}
            />
        </>
    );
}