import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Tour = () => {
  return (
    <div className="tour">
      <div className="grids wide">
        <div className="tour-container my-20">
          <div className="tour-container-content text-center">
            <h2>We have the best tours</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
              convallis tortor
              <br />
              Suspendisse potenti. In faucibus massa arcu, vitae cursus mi
              hendrerit nec.
            </p>
          </div>
          <div className="tour-container-items">
            <div className="row">
              <div className="col one-4 num-12 c-12">
                <div className="tour-container-item">
                  <div className="item-overlay"></div>
                  <div
                    className="item-background"
                    style={{
                      backgroundImage:
                        'url(https://media.licdn.com/dms/image/v2/D4D12AQGqxFLwLHbSRg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697786123778?e=1735776000&v=beta&t=4s3DQtAXpGEoXMUzSwdOATOOQr568Pnz6dNhCt9a8AY)',
                    }}
                  ></div>
                  <div className="item-content">
                    <span className="item-date">May 15th - July 01st</span>
                    <div className="item-center">
                      <h1>Mauritius</h1>
                      <div className="item-price"> From $1450</div>
                      <div className="item-rating">
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                      </div>
                      <div className="tour-item--btn">
                        <div className="tour-btn-bgc"></div>
                        <a href="#">
                          See more
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col one-4 num-12 c-12">
                <div className="tour-container-item">
                  <div className="item-overlay"></div>
                  <div
                    className="item-background"
                    style={{
                      backgroundImage:
                        'url(https://res.cloudinary.com/enchanting/q_70,f_auto,w_1000,c_fit/enchanting-web/2024/07/Old-Town-of-Corfu-Greece.jpg)',
                    }}
                  ></div>
                  <div className="item-content">
                    <span className="item-date">
                      September 5th - November 18th
                    </span>
                    <div className="item-center">
                      <h1>Greece</h1>
                      <div className="item-price"> From $1920</div>
                      <div className="item-rating">
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                      </div>
                      <div className="tour-item--btn">
                        <div className="tour-btn-bgc"></div>
                        <a href="#">
                          See more
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col one-4 num-12 c-12">
                <div className="tour-container-item">
                  <div className="item-overlay"></div>
                  <div
                    className="item-background"
                    style={{
                      backgroundImage:
                        'url(https://tptravel.com.vn/mediacenter/media/images/1850/tours/1850/2286/s900_0/edinburgh-1685711588.jpg)',
                    }}
                  ></div>
                  <div className="item-content">
                    <span className="item-date">
                      February 02sd - March 15th
                    </span>
                    <div className="item-center">
                      <h1>Scotland</h1>
                      <div className="item-price"> From $2160</div>
                      <div className="item-rating">
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                        <FontAwesomeIcon icon={faStar} className="i" />
                      </div>
                      <div className="tour-item--btn">
                        <div className="tour-btn-bgc"></div>
                        <a href="#">
                          See more
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
