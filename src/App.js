import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import CompanyForm from './components/CompanyForm/CompanyForm.js';
import CompanyList from './components/CompanyList';

function App() {
    const [companies, setCompanies] = useState([]);

    const handleAddCompany = (newCompany) => {
      setCompanies([...companies, newCompany]);
    };
  
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
            <main>
                <CompanyForm onAddCompany={handleAddCompany} />
                <CompanyList companies={companies} />
            </main>
        </div>
    );
}

export default App;