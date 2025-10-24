import { useState } from "react";
import PatientModal from "./PatientModel";

const PatientCard = ({ patient }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{patient.name}</h5>
            <p className="card-text">
              <strong>Gender:</strong> {patient.gender}
              <br />
              <strong>Contact:</strong> {patient.contact}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <PatientModal patient={patient} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default PatientCard;
