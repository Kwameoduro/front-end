// At the top level of React component functions
// (don't use hooks in conditional statements)

// invalid use of hooks

if (data !== '') {
    useEffect (() => {
        setData('test data')

    })
}