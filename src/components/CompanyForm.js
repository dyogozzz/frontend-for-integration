import React, { useState, useEffect } from "react";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: ""
  });

  const [companies, setCompanies] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log("Company saved:", data);

      const bitrixRes = await fetch("/api/bitrix/create-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const bitrixData = await bitrixRes.json();
      console.log("Company created in Bitrix24:", bitrixData);

      setCompanies([...companies, data]);
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch("/api/companies");
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error("Error fetching companies", err);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Criar Empresa/Contato</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Empresa:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Criar Empresa/Contato</button>
      </form>

      <h2>Listagem de Empresas/Contatos</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.companyName} - {company.email} - {company.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyForm;