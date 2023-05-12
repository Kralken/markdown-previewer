import React, {useState} from 'react';
import TextInput from './TextInput.js';
import MarkDownPreview from './MarkDownView.js';
import Footer from './Footer.js';
import './styles.css';
import initialText from './InitialText.txt';
import Header from './HeaderBar.js';

export default function App() {

    // inital text is pulled form the InitialText.txt file in src
    // define the state for the text input
    const [text, setText] = useState(initialText);
    const [status, setStatus] = useState("normal");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    function handleMaximizeEditor() {
        setStatus("editor");
    }

    function handleMaximizePreview() {
        setStatus("preview");
    }

    function handleMinimize() {
        setStatus("normal");
    }

    return (
        <React.StrictMode>

            {(status === "normal" || status === "editor") &&
                <TextInput
                    text={text}
                    onChange={handleChange}
                    status={status}
                >
                    <Header
                        maximize={handleMaximizeEditor}
                        minimize={handleMinimize}
                        status={status}
                    >
                        Input Text
                    </Header>
                </TextInput>
            }   

            {(status === "normal" || status === "preview") &&
                <MarkDownPreview
                    text={text}
                    status={status}
                >
                    <Header
                        maximize={handleMaximizePreview}
                        minimize={handleMinimize}
                        status={status}
                    >
                        Markdown Preview
                    </Header>
                </MarkDownPreview>
            }
            
            <Footer />
        </React.StrictMode>
    );
}