const App = () => {
      const value = {a: 'hi', b: 'bye'};
      return (
        <AppContext.Provider value={value}>
          <ComponentA />
        </AppContext.Provider>
      );
    };
    
    const ComponentA = React.memo(() => <ComponentB />);
    const ComponentB = () => <ComponentC />;
    const ComponentC = () => {
      const contextValue = useContext(AppContext);
      return null;
    };