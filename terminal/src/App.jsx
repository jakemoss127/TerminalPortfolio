import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setInput('help');
  }, []);

  const ascii = ` ▐▄▄▄ ▄▄▄·  ▄▄·       ▄▄▄▄·     • ▌ ▄ ·.       .▄▄ · .▄▄ · ` + '\n' + `  ·██▐█ ▀█ ▐█ ▌▪▪     ▐█ ▀█▪    ·██ ▐███▪▪     ▐█ ▀. ▐█ ▀. `
  + '\n' + `▪▄ ██▄█▀▀█ ██ ▄▄ ▄█▀▄ ▐█▀▀█▄    ▐█ ▌▐▌▐█· ▄█▀▄ ▄▀▀▀█▄▄▀▀▀█▄` + '\n' + `▐▌▐█▌▐█ ▪▐▌▐███▌▐█▌.▐▌██▄▪▐█    ██ ██▌▐█▌▐█▌.▐▌▐█▄▪▐█▐█▄▪▐█` + '\n' +
   ` ▀▀▀• ▀  ▀ ·▀▀▀  ▀█▄▀▪·▀▀▀▀     ▀▀  █▪▀▀▀ ▀█▄▀▪ ▀▀▀▀  ▀▀▀▀ `; 

  const handleCommand = () => {
    let outputString = '';
    switch (input.trim()) {
      case 'help':
        outputString = 'Available commands';
        break;
      case 'pwd':
        outputString = '/home/user';
        break;
      case 'ls':
        outputString = 'file1 file2 file3';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        outputString = 'Unknown command: ' + input;
    }
    setHistory(prevHistory => [
      ...prevHistory,
      { command: input, output: outputString }
    ]);
    setInput('');
  };

  return (
    <div className="app-container" onClick={() => inputRef.current.focus()}>
      <div className="welcome">
        <p style={{marginBottom: '1rem'}}><span style={{color: '#ffB23b'}}>visitor</span>
        @<span style={{color: '#53d480'}}>terminal.jacob.moss</span>:~$<span style={{marginLeft: '1rem'}}>welcome</span></p>
        <div className="ascii" style={{marginTop: '3rem', marginBottom: '3rem'}}>
          <pre>{ascii}</pre>
        </div>
        <div className="text">
          <p>Welcome to my portfolio terminal. Version (1.0.1)</p>
          <p>----</p>
          <p>This project was built in React, and the source code can be found here: <a className='github' 
          href='https://github.com/jakemoss127'
          target='_blank'>
            GitHub Repo</a>
          </p>
          <p>----</p>
          <p>Type '<span style={{color: '#53d480', fontWeight: 'bold'}}>help</span>' to see available commands</p>
        </div>
      </div>
      <div className="terminal">
        {history.map((item, index) => (
          <div style={{marginTop: '1.8rem'}} key={index}>
            <div>
              <span><span style={{color: '#ffB23b'}}>visitor</span>@<span style={{color: '#53d480'}}>terminal.jacob.moss</span>:~$<span style={{marginLeft: '1rem'}}>{item.command}</span></span>
            </div>
            <div>{item.output}</div>
          </div>
        ))}
        <div className='input-row'>
          <p><span style={{color: '#ffB23b'}}>visitor</span>@<span style={{color: '#53d480'}}>terminal.jacob.moss</span>:~$</p>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleCommand();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
