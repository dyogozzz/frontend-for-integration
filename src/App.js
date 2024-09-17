import './App.css';

import { useEffect, useState } from 'react';
import CompanyList from './components/CompanyList/CompanyList.js';
import ModalForm from './components/ModalForm/ModalForm.js'


function App() {
    const [companies, setCompanies] = useState([])
    const [editingCompany, setEditingCompany] = useState({})
    const [isOpen, setIsOpen] = useState(null);
    const apiUrl = 'https://br24-integration.vercel.app/api/companies'

    const fetchCompanies = async() => {
        try {
            const res = await fetch(apiUrl)
            
            const data = await res.json()
            setCompanies(data.result)
        } catch(e) {
            console.error(e)
        }
    }
    
    const handleAddCompany = async (newCompany) => {
        await fetch(apiUrl, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCompany)
        }).then(res => {
            if(!res.ok){
                throw new Error('Post error')
            }
            
            return res.json()
        })
        .catch((error) => {
            console.error(error)
        })
        
        setIsOpen(false)
        fetchCompanies()
    };

    const handleEditCompany = async (changedCompany) => {
        await fetch(apiUrl + '/' + changedCompany.ID, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...changedCompany,
                _method: 'PATCH'
            })
        }).then(res => {
            if(!res.ok){
                throw new Error('Patch error')
            }
        })
        .catch((error) => {
            console.error(error)
        })
        
        setIsOpen(false)
        fetchCompanies()
    }

    const handleDeleteCompany = async(deletingCompany) => {
        console.log('deleting', deletingCompany)

        await fetch(apiUrl + '/' + deletingCompany.ID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID: deletingCompany.ID,
                contact_1_id: deletingCompany.contacts && deletingCompany.contacts[0] ? deletingCompany.contacts[0].ID : undefined,
                contact_2_id: deletingCompany.contacts && deletingCompany.contacts[1] ? deletingCompany.contacts[1].ID : undefined,
            })
        })

        fetchCompanies()
    }

    const selectEditingCompany = (e = null) => {
        if(e) {
            const edtComp = {
                ID: e.ID || undefined,
                company_name: e.TITLE,
                email: e.email ? e.mail : undefined,
                contact_1_id: e.contacts && e.contacts[0] ? e.contacts[0].ID : undefined,
                contact_name_1: e.contacts && e.contacts[0] ? e.contacts[0].NAME : undefined,
                contact_second_name_1: e.contacts && e.contacts[0] ? e.contacts[0].LAST_NAME : undefined,
                contact_2_id: e.contacts && e.contacts[1] ? e.contacts[1].ID : undefined,
                contact_name_2: e.contacts && e.contacts[1] ? e.contacts[1].NAME : undefined,
                contact_second_name_2: e.contacts && e.contacts[1] ? e.contacts[1].LAST_NAME : undefined
            }
            setEditingCompany(edtComp)
        }
        setIsOpen(true)
    }

    const closeEditingCompany = () => {
        setEditingCompany({})
        setIsOpen(false)
    }
    
    useEffect(() => {
        fetchCompanies()
    }, []);

  
    return (
        <div>
            <main>
                <ModalForm company={editingCompany} addCompany={handleAddCompany} handleEditCompany={handleEditCompany} isOpen={isOpen} setIsOpen={closeEditingCompany} />

                <CompanyList handleDeleteCompany={handleDeleteCompany} setEditingCompany={selectEditingCompany} setIsOpen={setIsOpen} companies={companies} />
            </main>
        </div>
    );
}

export default App;