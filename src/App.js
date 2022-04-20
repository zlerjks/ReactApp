import { useState } from 'react'
import logo from './logo.svg';
import './Css/App.css';
import TheForm from './components/TheForm';
import UserList from './components/UserList';

function App() {
  const [name, newUser] = useState('')
  const [age, newAge] = useState('')

  function dataUpdater (name, age) {
    newUser(name);
    newAge(age);

  }
  return (
    <div className="App">
      <TheForm submitHandler = {dataUpdater} /> 
      <UserList enteredname = {name} enteredage = {age}/>
    </div>
  );
}

export default App;
