const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Patient Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Name:</strong> {patient.name}
            </p>
            <p>
              <strong>Gender:</strong> {patient.gender}
            </p>
        
            <p>
              <strong>Contact:</strong> {patient.contact}
            </p>
            <p>
              <strong>Bed No:</strong> {patient.bedno}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
