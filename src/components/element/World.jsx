const World = () => {
  return (
    <div className="home">
      <div className="home-bg bg-red-600 min-h-[100vh]"></div>
      <div className="grids wide">
        <div className="row">
          <div className="home-container-slider">
            <div className="home-container-slider--content cursor-default text-white">
              <h1>Discover</h1>
              <h1>the world</h1>
            </div>
            <div className="home-container-slider--btn text-white">
              <div className="btn-bgc"></div>
              <a href="#">
                explore now
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
