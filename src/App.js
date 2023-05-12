import React, {useState} from 'react';
import TextInput from './TextInput.js';
import MarkDownPreview from './MarkDownView.js';
import './styles.css';
import initialText from './InitialText.txt';

export default function App() {

    // inital text is pulled form the InitialText.txt file in src
    // define the state for the text input
    const [text, setText] = useState(initialText);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <React.StrictMode>
            <TextInput
                text={text}
                onChange={handleChange}
            />
            <MarkDownPreview
                text={text}
            />
        </React.StrictMode>
    );
}