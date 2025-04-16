import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <div id="round_square_meat">
        <Menu marginTopLength="-0.1rem" />
        <div style={{ width: "40%", float: "left" }}>
          <img
            src="images/heart1.png"
            style={{ margin: "70px 0px 0px 10px", width: 206 }}
          />
          <br />
          <img
            src="images/mouse.png"
            style={{ margin: "10px 10px 60px 19px" }}
          />
        </div>
        <div
          style={{
            width: "60%",
            float: "right",
            textAlign: "left",
            padding: "20px 100px 60px 0px",
            fontFamily: "Calibri",
            fontSize: "clamp(16px, 2vw, 22px)",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          Welcome to the CHAOS Lab. we use a combined approach of theory,
          simulation, and experiments to investigate complex systems.
          <br />
          <br />
          Experiments in complex systems: Cardiac dynamics using
          micro-electrodes and optical mapping, active media (swarms and
          murmuration), chemical reactions, table top experiments.
          <br />
          <br />
          Mathematical modeling of complex systems: Development and analysis of
          mathematical models that describe generic or detailed dynamics of
          excitable and oscillatory media.
          <br />
          <br />
          High performance computing: Development and implementation of novel
          algorithms to solve partial differential equations in two- and
          three-dimensional regular and irregular domains and parallel computing
          using GPUs.
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/bot-pic1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/bot-pic2.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/bot-pic3.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
