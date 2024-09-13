import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const domain = queryParams.get('DOMAIN');
        const protocol = queryParams.get('PROTOCOL');
        const lang = queryParams.get('LANG');
        const appSid = queryParams.get('APP_SID');

        console.log(`Domain: ${domain}, Protocol: ${protocol}, Language: ${lang}, App SID: ${appSid}`);
        // Agora você pode usar esses parâmetros no seu app
    }, []);

    return (
        <div>
            <h1>Grande teste</h1>
        </div>
    );
}

export default App;
