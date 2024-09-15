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
    <div className="container mt-4">
      <h2 className="mb-4">Criar Empresa/Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Nome da Empresa
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Criar Empresa/Contato
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;