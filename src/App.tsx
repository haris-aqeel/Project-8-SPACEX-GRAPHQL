import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

import './App.css';

const App = () => {

  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchDetails id={id}/>
    </div>
  );
};

export default App;