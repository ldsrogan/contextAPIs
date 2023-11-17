import { useContext } from 'react';
import './App.css';
import PersonContext from './context/person-context';

function App() {
  const { name, setName } = useContext(PersonContext);

  return (
    <div>
      {name}
      <button
        type='button'
        onClick={() => {
          setName('john');
        }}
      >
        Set name as John
      </button>
    </div>
  );
}

export default App;
