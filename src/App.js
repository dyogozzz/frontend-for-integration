import './App.css';

import { useEffect, useState } from 'react';
import CompanyList from './components/CompanyList/CompanyList.js';
import ModalForm from './components/ModalForm/ModalForm.js'


function App() {
    const [companies, setCompanies] = useState([])
    const [contacts, setContacts] = useState([])

    // const [companies, setCompanies] = useState([]);
    const [isOpen, setIsOpen] = useState(null);

    const handleAddCompany = (newCompany) => {
      setCompanies([...companies, newCompany]);
    };

  
    useEffect(() => {
        const fetchCompanies = async() => {
            try {
                console.log('request companies')
                const res = await fetch('https://br24-integration.vercel.app/api/companies')
                
                const data = await res.json()
                setCompanies(data.result)
            } catch(e) {
                console.error(e)
            }
        }

        fetchCompanies()
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