// React.memo

const App = () => {
    return (
       <AppContext.Provider>
         <ComponentA />
       </AppContext.Provider>
     );
    };
    
    const ComponentA = React.memo(() => <ComponentB />);
    const ComponentB = () => <ComponentC />;
    const ComponentC = () => null;