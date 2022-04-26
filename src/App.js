import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event, setValue) => {
    setValue(event.target.value);
  };

  const handleSubmitGet = event => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
      .then(response => response.json())
      .then(state => {
        setGreeting(state.greeting);
        setName('');
      });
  };

  const handleSubmitPost = event => {
    event.preventDefault();
    const form = new FormData();
    form.append('name', name2);

    fetch('/api/greeting', {
      method: 'POST',
      body: form,
    })
      .then(response => response.json())
      .then(state => {
        setGreeting(state.greeting);
        setName2('');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>fetch/GET</h4>
        <form onSubmit={handleSubmitGet}>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={event => handleChange(event, setName)}
            placeholder="fetch/GET"
          />
          <button type="submit">Submit</button>
        </form>

        <p>-----------------------------------------</p>

        <h4>fetch/POST</h4>
        <form onSubmit={handleSubmitPost}>
          <label htmlFor="name">Enter your name: </label>
          <input
            id="name"
            type="text"
            value={name2}
            onChange={event => handleChange(event, setName2)}
            placeholder="fetch/POST"
          />
          <button type="submit">Submit</button>
        </form>

        <p>-----------------------------------------</p>

        <p>{greeting}</p>
      </header>
    </div>
  );
}

export default App;
