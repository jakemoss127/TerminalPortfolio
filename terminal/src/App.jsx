import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Resume from '../src/assets/JacobMoss_Resume.pdf'; 

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
        <p><span style={commandStyle}>ascii</span><span style={{descriptionStyle}}>- prints Jacob Moss ascii art</span></p>
        <p><span style={commandStyle}>exit</span><span style={{descriptionStyle}}>- closes the current window</span></p>
        <p><span style={commandStyle}>pwd</span><span style={{descriptionStyle}}>- prints working directory</span></p>
        <p><span style={commandStyle}>ls</span><span style={{descriptionStyle}}>- lists files available for download</span></p>
        <p><span style={commandStyle}>linkedin</span><span style={{descriptionStyle}}>- opens my LinkedIn profile</span></p>
        <p><span style={commandStyle}>github</span><span style={{descriptionStyle}}>- opens my GitHub page</span></p>
        <p><span style={commandStyle}>contact</span><span style={{descriptionStyle}}>- reveals contact information</span></p>
      </div>
    );
  };

  const getProjects = () => {
    return(
      <div>
        <p>Below are some technical projects I have worked on recently. Please feel free to reach out for more information.</p>
        <br/><p style={{fontWeight: 'bold'}}>1. SwiftRead</p>
        <p>AI article summarizer built using React, RapidAPI and Tailwind.</p><br/>
        <p style={{fontWeight: 'bold'}}>2. Internshark</p>
        <p>Student internship portal SaaS where students can easily apply to jobs in one click (coming soon).</p><br/>
        <p style={{fontWeight: 'bold'}}>3. Portfolio</p>
        <p>GUI Portfolio hosted on the internet.</p><br/>
        <p style={{fontWeight: 'bold'}}>4. CaSMM</p>
        <p>The worlds first Arduino block code portal to teach students how to code in a hands-on matter</p><br/>
        <p style={{fontWeight: 'bold'}}>View Project: projects go &lt;project-no&gt;</p>
        <p style={{fontWeight: 'bold'}}>ex: projects go 2</p>
      </div>
    );
  };

  const aboutSection = () => {
    return(
      <div>
        <br/>
        <p style={{fontWeight: 'bold'}}>Hi, I'm <span style={{color: '#ffB23b'}}>Jacob Moss</span>!</p>
        <p>I'm a full-stack software engineer and student at the University of Florida.</p>
        <p>I love writing code, and I am especially passionate about web-development.</p>
        <p>Download a copy of my resume using the <span style={{color: '#53d480'}}>ls</span> command.</p>
      </div>
    );
  };
  const handleCommand = () => {
    let output;
    switch (input.trim()) {
      case 'help':
        output = printHelp();
        break;
      case 'about':
        output = aboutSection();
        break;
      case 'pwd':
        output = '/home/visitor';
        break;
      case 'education':
        output = (<div>
          <p>Bachelors of Science in Computer Science, <span style={{fontWeight: 'bold', color: '#ffB23b'}}>University of Florida</span></p>
          <p><span style={{fontWeight: 'bold'}}>GPA:</span> 3.82</p>
        </div>);
        break;
      case 'ls':
        output = (
          <a className='github' href={Resume} download>
              Resume.pdf
          </a>
      );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'ascii':
        output = <pre style={{marginTop: '1.8rem'}}>{ascii}</pre>;
        break;
      case 'exit':
        window.close();
        return;
      case 'projects':
        output = getProjects();
        break;
      case 'projects go 1':
        window.open('https://swiftread.netlify.app/');
        output = 'Opening SwiftRead...';
        break;
      case 'projects go 2':
        window.open('https://youtu.be/iTMLC-pSQmY');
        output = 'Opening Internshark Trailer...';
        break;
      case 'projects go 3':
        window.open('https://jacobmoss.netlify.app/');
        output = 'Opening Portfolio...';
        break;
      case 'projects go 4':
        window.open('https://www.casmm.org/');
        output = 'Opening CaSMM...';
        break;
      case 'cd':
        output = 'Nice try, but that feature is not available in this terminal.';
        break;
      case 'hi':
        output = 'Hello!';
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/jacob-moss-uf/');
        output = 'Opening LinkedIn...';
        break;
      case 'github':
        window.open('https://github.com/jakemoss127');
        output = 'Opening GitHub...';
        break;
      default:
        output = <span><span style={{color: 'red'}}>Unknown command: </span>{input}</span>;
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
           href='https://github.com/jakemoss127/TerminalPortfolio'
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
