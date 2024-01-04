function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return < LogOutButton />;
    } else {
        return <LogInButton />;

    } 
}