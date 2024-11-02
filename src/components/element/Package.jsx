import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Package = () => {
  return (
    <div className="package pt-[125px] pb-[116px] relative">
      <div className="package-background"></div>
      <div className="package-container">
        <div className="grids wide">
          <div className="package-container-body">
            <div className="package-container-body--content">
              <div className="body--content-cta">
                <h2>Maldives Deluxe Package</h2>
                <div className="item-rating">
                  <FontAwesomeIcon icon={faStar} className="i" />
                  <FontAwesomeIcon icon={faStar} className="i" />
                  <FontAwesomeIcon icon={faStar} className="i" />
                  <FontAwesomeIcon icon={faStar} className="i" />
                  <FontAwesomeIcon icon={faStar} className="i" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eu convallis tortor. Suspendisse potenti. In faucibus
                  massa arcu,
                  <br />
                  vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus
                  tincidunt ultrices, tortor augue gravida lectus, et efficitur
                  enim justo vel ligula.
                </p>
              </div>
              <div className="item--btn">
                <div className="btn-bgc"></div>
                <a href="#">
                  Book Now
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
  );
};

export default Package;
