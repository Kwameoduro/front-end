// By default, if no second argument is provided to the useEffect function, 
// the effect will run after every render.

useEffect(() => { 
    document.title = 'Little Lemon';
  }); 



// The integer variable version is passed as the second parameter. 
// That means that the effect will only be re-run if the version number changes between renders.

useEffect(() => { 
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes 



//Use multiple Effects to Separate Concerns

function MenuPage(props) { 
    const [data, setData] = useState([]); 
  
    useEffect(() => { 
      document.title = 'Little Lemon'; 
    }, []); 
  
    useEffect(() => { 
      fetch(`https://littlelemon/menu/${id}`) 
        .then(response => response.json()) 
        .then(json => setData(json)); 
    }, [props.id]); 
  
    // ... 
  }



  // Effects with Cleanup

  function LittleLemonChat(props) { 
    const [status, chatStatus] = useState('offline'); 
  
    useEffect(() => { 
      LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 
  
      return () => { 
        setStatus('offline'); 
        LemonChat.unsubscribeFromMessages(props.chatId); 
      }; 
    }, []); 
  
    // ... 
  }
