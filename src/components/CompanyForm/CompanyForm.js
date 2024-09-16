import React, { useState } from "react";

const CompanyForm = ({ onAddCompany }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contacts: [{},{}]
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCompany = { ...formData, id: Math.random().toString() };

      onAddCompany(newCompany);

      setFormData({
        companyName: "",
        email: "",
        contacts: [{name: '', surname: ''},{name: '', surname: ''}] 
      });
    } catch (err) {
      console.error("Erro ao enviar o formulário", err);
    }
  };

  return (
    <div className="title">
      <h2 className="mb-4">Criar Empresa/Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="companyName">
            Nome da Empresa
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">
            Email da empresa
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="na">
            Nome do contato 1
          </label>
          <input
            type="text"
            id="contact_name_1"
            name="contact_name_1"
            value={formData.contacts[0].name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="na">
            Sobrenome do contato 1
          </label>
          <input
            type="text"
            id="contact_surname_1"
            name="contact_surname_1"
            value={formData.contacts[0].surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="na">
            Nome do contato 2
          </label>
          <input
            type="text"
            id="contact_name_2"
            name="contact_name_2"
            value={formData.contacts[1].name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="na">
            Sobrenome do contato 2
          </label>
          <input
            type="text"
            id="contact_surname_2"
            name="contact_surname_2"
            value={formData.contacts[1].surname}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;