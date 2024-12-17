import UserForm from './components/UserForm';
import './components/styles.css';
import './App.css';
import { useState } from 'react'

function App() {
    const [value, setValue] = useState('')
    console.log('App ', value);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('App ', value);
    }

    return (
        < div className="App" >
            <h1>StreamList App</h1>
            <UserForm setValue={setValue}
                handleSubmit={handleSubmit }/>
        </div>
      );
}

export default App;
