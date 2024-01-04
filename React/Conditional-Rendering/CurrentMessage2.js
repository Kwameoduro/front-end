function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return < Workdays />
    }
    return <Weekends /> 
}