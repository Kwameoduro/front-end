// call hooks from inside react component functions

import {useState} from "react";

function App() {
    const [petName, setPetName] = useState("Fluffy");

    function nameLopper() {
        if (petName == "Fluffy" ){
            setPetName("Rexy");
        }
        else if (petName == "Rexy"){
            setPetName("Gizmo");
        } 
        else if (petName == "Gizmo"){
            setPetName("Fluffy");
        }  
    }

    return (
        <div>
            <h1> I am thinking to name my pet {petName}</h1>
            <button onClick={nameLopper}>Pick a new name</button>
        </div>
    );
}