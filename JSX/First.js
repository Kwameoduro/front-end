import "./App.css";

const Button = ({children, backgroundColour}) => {
    return <button style={{backgroundColour}}>{children}</button>;
};

const Alert = ({children}) => {
    return(
        <>
            <div className="Overlay" />
            <div className="Alert"> {children} </div>
        </>  
    );
};

const DeleteButton = () => {
    return <button backgroundColour="red">Delete</button>
};

function App(){
    return(
        <div className="App">
            <header> Little Lemon Restaurant</header>
            <Alert>
                <h4> Delete Account</h4>
                <p> Are you sure you want to proceed?</p>
                <DeleteButton />
            </Alert>
        </div>
    );
}

export default App;
