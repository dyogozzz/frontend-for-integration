import './App.css';

import { useEffect } from 'react';
import CompanyForm from './components/CompanyForm';

function App() {
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const domain = queryParams.get('DOMAIN');
        const protocol = queryParams.get('PROTOCOL');
        const lang = queryParams.get('LANG');
        const appSid = queryParams.get('APP_SID');

        console.log(`Domain: ${domain}, Protocol: ${protocol}, Language: ${lang}, App SID: ${appSid}`);
    }, []);

    return (
        <div>
            <h1>Grande teste</h1>
            <CompanyForm>
                
            </CompanyForm>
        </div>
    );
}

export default App;