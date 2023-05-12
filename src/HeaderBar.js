import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

export default function Header({children, maximize, minimize, status}) {
    return (
        <div className="box-header">
            {children}
            <FontAwesomeIcon
                icon={status != "normal" ? faMinimize : faMaximize}
                className="toggle-size"
                onClick={status != "normal" ? minimize : maximize}
            />
        </div>
    );
}