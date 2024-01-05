import tower from './assets/images/Eiffel-Tower.jpg'

function App() {
    const randomImageUrl = "https://picsum.photos/400/265";
    return (
        <div>
            <h1>
                Task: add three images with some styling
            </h1>
            <img 
                height = {200}
                src = {tower}
                alt = "An image of eiffel tower"   
            />
    
            <img 
                height = {200}
                src = {require("./assets/images/Eiffel-Tower.jpg")}
                alt = "An image of eiffel tower"
            />

            <img
                src = {randomImageUrl}
                height = {200}
            />
            
        </div>
    );
}

export default App;