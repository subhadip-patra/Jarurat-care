const Home = ({ onNavigate }) => {

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to Jarurat Care</h1>
        <p className="lead">Your trusted partner in patient care management.</p>
        <a
          href="#"
          onClick={() => onNavigate("patients")} 
          className="btn btn-primary btn-lg"
        >
          View Patients
        </a>
      </div>
    </div>
  );
};

export default Home;
