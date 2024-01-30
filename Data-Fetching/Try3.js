import React from "react";

import './App.css';

function App(){
    const formInpuRef = React.useRef(null);


    const focusInput = () => {
        formInpuRef.current.focus();

    }

    return (
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={formInpuRef} type="text" />
            <button onClick={focusInput}>focus Input</button>
        </>
    );
}

export default App;
