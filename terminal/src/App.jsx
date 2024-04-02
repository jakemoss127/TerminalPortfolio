import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const ascii = ` ▐▄▄▄ ▄▄▄·  ▄▄·       ▄▄▄▄·     • ▌ ▄ ·.       .▄▄ · .▄▄ · ` + '\n' + `  ·██▐█ ▀█ ▐█ ▌▪▪     ▐█ ▀█▪    ·██ ▐███▪▪     ▐█ ▀. ▐█ ▀. `
   + '\n' + `▪▄ ██▄█▀▀█ ██ ▄▄ ▄█▀▄ ▐█▀▀█▄    ▐█ ▌▐▌▐█· ▄█▀▄ ▄▀▀▀█▄▄▀▀▀█▄` + '\n' + `▐▌▐█▌▐█ ▪▐▌▐███▌▐█▌.▐▌██▄▪▐█    ██ ██▌▐█▌▐█▌.▐▌▐█▄▪▐█▐█▄▪▐█` + '\n' +
    ` ▀▀▀• ▀  ▀ ·▀▀▀  ▀█▄▀▪·▀▀▀▀     ▀▀  █▪▀▀▀ ▀█▄▀▪ ▀▀▀▀  ▀▀▀▀ `; 

  const printHelp = () => {
    const commandStyle = { color: '#53d480', display: 'inline-block', minWidth: '10rem' };
    const descriptionStyle = { display: 'inline-block' };
    return (
      <div>
        <p><span style={commandStyle}>about</span><span style={{descriptionStyle}}>- about Jacob Moss</span></p>
        <p><span style={commandStyle}>projects</span><span style={{descriptionStyle}}>- view my projects</span></p>
        <p><span style={commandStyle}>clear</span><span style={{descriptionStyle}}>- clear the terminal</span></p>
        <p><span style={commandStyle}>education</span><span style={{descriptionStyle}}>- view my education background</span></p>
        <p><span style={commandStyle}>echo</span><span style={{descriptionStyle}}>- repeats inputted word</span></p>
        <p><span style={commandStyle}>ascii</span><span style={{descriptionStyle}}>- prints Jacob Moss ascii art</span></p>
        <p><span style={commandStyle}>exit</span><span style={{descriptionStyle}}>- closes the current window</span></p>
      </div>
    );
  };

  const handleCommand = () => {
    let output;
    switch (input.trim()) {
      case 'help':
        output = printHelp();
        break;
      case 'pwd':
        output = '/home/visitor';
        break;
      case 'ls':
        output = 'file1 file2 file3';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'ascii':
        output = <pre>{'\n' + ascii}</pre>;
        break;
      case 'exit':
        window.close();
        return;
      default:
        output = <span>Unknown command: {input}</span>;
    }
    setHistory(prevHistory => [
      ...prevHistory,
      { command: input, output: output }
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
