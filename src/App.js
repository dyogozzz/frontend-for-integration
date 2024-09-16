import './App.css';

import { useEffect, useState } from 'react';
import CompanyList from './components/CompanyList/CompanyList.js';
import ModalForm from './components/ModalForm/ModalForm.js'


function App() {
    const [companies, setCompanies] = useState([{id: 1, companyName: 'dez', phone: 3928932, email: 'ddyuosada'}])

    // const [companies, setCompanies] = useState([]);
    const [isOpen, setIsOpen] = useState(null);

    const handleAddCompany = (newCompany) => {
      setCompanies([...companies, newCompany]);
    };

  
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const domain = queryParams.get('DOMAIN');
        const protocol = queryParams.get('PROTOCOL');
        const lang = queryParams.get('LANG');
        const appSid = queryParams.get('APP_SID');

        const algo = async() => {
            try {
                console.log('request')
                const res = await fetch('https://br24-integration.vercel.app/api/teste')
                
                const data = await res.json()
                console.log(data)
            } catch(e) {
                console.error(e)
            }
        }

        algo()

        console.log(`Domain: ${domain}, Protocol: ${protocol}, Language: ${lang}, App SID: ${appSid}`);
    }, []);

    return (
        <div>
            <main>
                <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />

                <CompanyList setIsOpen={setIsOpen} companies={companies} />

            </main>
        </div>
    );
}

export default App;