import "../src/index.css";

const Home = () => {
  const handleLogout = (e) => {
    sessionStorage.removeItem("user");
  };
  return (
    <div className="Home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>Ticketing Page</h4>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleLogout} className="submit">
        Logout
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        Estarta is a global Network Engineering and Information Technology
        company, specialized in comprehensive outsourced technical and premium
        service solutions. Throughout our 30 years of operation, we have
        delivered expertise to clients through a wide range of services which
        have supported our clients' success.
      </h3>
    </div>
  );
};
export default Home;
