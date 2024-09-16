import React, { useState } from "react";

const CompanyForm = ({ onAddCompany }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: ""
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
        phone: ""
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
            Email
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
          <label htmlFor="phone">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;