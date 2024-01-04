function App() {
    const time = new Date();
    const day = time.toLocaleString("en-us", { weekday: "long" });
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    // changing 12 to 19 will affect the output

    let dayMessage;

    if (day.toLocaleLowerCase() === "monday") {
        dayMessage = 'Happy ${day}';
    }
    else if (day.toLocaleLowerCase() === "tuesday") {
        dayMessage = '${day}, four days to go';
    }
    else if (day.toLocaleLowerCase() === "wednesday") {
        dayMessage = '${day}, half way there';
    }
    else if (day.toLocaleLowerCase() === "thursday") {
        dayMessage = '${day}, start planning for the weekend';
    }
    else if (day.toLocaleLowerCase() === "friday") {
        dayMessage = 'woo hoo, the weekend is here';
    }
    else {
        dayMessage = " Stay calm and keep having fun";
    }
    return (
       <div className = "App">
        <h1>
            {dayMessage}
        </h1>
        {morning? <h2> Have you had breakfast yet?</h2> : ''}
       </div>
    );
}