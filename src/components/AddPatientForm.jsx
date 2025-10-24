import { useState } from "react";

const AddPatientForm = ({ onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    gender: "Male",
    bedno: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { ...formData, id: Date.now() };
    onAddPatient(newPatient);
    setFormData({
      name: "",
      contact: "",
      gender: "Male",
      bedno: "",
    });
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5>Add New Patient</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Bed no"
                value={formData.bedno}
                onChange={(e) =>
                  setFormData({ ...formData, bedno: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <select
                className="form-select"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
