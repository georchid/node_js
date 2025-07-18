import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState()
    useEffect(() => {
        fetch('http://localhost:5000')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPerson(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
      <div className="App">
        {person && (
          <>
            <h1>{person.name}</h1>
            <h2>{person.isTutor ? 'Tutor' : 'Student'}</h2>
          </>
        )}
      </div>
    );
}

export default App;
