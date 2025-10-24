import { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";
import AddPatientForm from "../components/AddPatientForm";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const response = await fetch("/data/patients.json");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setPatients(data);
      setFilteredPatients(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addPatient = (newPatient) => {
    setPatients([newPatient, ...patients]);
  };

  useEffect(() => {
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  if (loading)
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status"></div> Loading...
      </div>
    );
  if (error)
    return (
      <div className="container mt-5 text-center text-danger">
        Error: {error}
      </div>
    );

  return (
    <div className="container mt-5">
      <h2>Patients List</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search patients by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Patient Form (Bonus) */}
      <AddPatientForm onAddPatient={addPatient} />

      {/* Patients Grid */}
      <div className="row">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default Patients;
