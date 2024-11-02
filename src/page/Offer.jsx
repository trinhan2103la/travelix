import Search from '../components/element/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <>
      <div className="home">
        <div className="home--background min-h-[100vh]"></div>
        <div className="home-title">
          <h1>Our Offers</h1>
        </div>
      </div>
      <Search />
      <div className="offers">
        <div className="offers-container">
          <div className="grids wide custom">
            <div className="row">
              <div className="offers-container-filter">
                <ul>
                  <li>
                    Price
                    <FontAwesomeIcon icon={faChevronDown} className="i" />
                    <ul className="offers-container-filter--list">
                      <li>
                        <span>Show all</span>
                      </li>
                      <li>
                        <span>Ascending</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Location
                    <FontAwesomeIcon icon={faChevronDown} className="i" />
                    <ul className="offers-container-filter--list">
                      <li>
                        <span>Default</span>
                      </li>
                      <li>
                        <span>Alphabetical</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Stars
                    <FontAwesomeIcon icon={faChevronDown} className="i" />
                    <ul className="offers-container-filter--list">
                      <li>
                        <span>Show all</span>
                      </li>
                      <li>
                        <span>Ascending</span>
                      </li>
                      <li>
                        <span>3</span>
                      </li>
                      <li>
                        <span>4</span>
                      </li>
                      <li>
                        <span>5</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Distance
                    <FontAwesomeIcon icon={faChevronDown} className="i" />
                    <ul className="offers-container-filter--list">
                      <li>
                        <span>Distance</span>
                      </li>
                      <li>
                        <span>Distance</span>
                      </li>
                      <li>
                        <span>Distance</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Reviews
                    <FontAwesomeIcon icon={faChevronDown} className="i" />
                    <ul className="offers-container-filter--list">
                      <li>
                        <span>Reviews</span>
                      </li>
                      <li>
                        <span>Reviews</span>
                      </li>
                      <li>
                        <span>Reviews</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row offers-container-items">
              <div className="col one-12 num-12 c-12 s-12">
                <div className="offer-container-item">
                  <div className="row">
                    <div className="col one-4 num-6 c-12 s-12">
                      <div className="offer-item-img--container">
                        <div
                          className="offer-item-img"
                          style={{
                            backgroundImage:
                              'url(https://tranhoangkhang1212.github.io/travelix/assets/images/xoffer_5.jpg.pagespeed.ic.BPUGlc08kT.webp)',
                          }}
                        ></div>
                        <div className="offer-container-item-name">
                          <a href="#">grand castle</a>
                        </div>
                      </div>
                    </div>
                    <div className="one-8 num-6 c-12 s-12">
                      <div className="offer-container-item--content">
                        <div className="offer-container-item-review">
                          <div className="offer-container-item-review--text">
                            <h3>Oke</h3>
                            <span>50 reviews</span>
                          </div>
                          <span>7.3</span>
                        </div>
                        <div className="offers-item-price">
                          $70
                          <span>per night</span>
                        </div>
                        <div className="item-rating">
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                        </div>
                        <p>
                          Suspendisse potenti. In faucibus massa. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Nullam eu
                          convallis tortor. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="offer-item--icon">
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"
                            alt="Post"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"
                            alt="Compass"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"
                            alt="Bicycle"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"
                            alt="Sail Boat"
                          />
                        </div>
                        <div className="offers-btn">
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
              <div className="col one-12 num-12 c-12 s-12">
                <div className="offer-container-item">
                  <div className="row">
                    <div className="col one-4 num-6 c-12 s-12">
                      <div className="offer-item-img--container">
                        <div
                          className="offer-item-img"
                          style={{
                            backgroundImage:
                              'url(https://tranhoangkhang1212.github.io/travelix/assets/images/xoffer_6.jpg.pagespeed.ic.z1jAmiqjUy.webp)',
                          }}
                        ></div>
                        <div className="offer-container-item-name">
                          <a href="#">Turkey Hills</a>
                        </div>
                      </div>
                    </div>
                    <div className="one-8 num-6 c-12 s-12">
                      <div className="offer-container-item--content">
                        <div className="offer-container-item-review">
                          <div className="offer-container-item-review--text">
                            <h3> good</h3>
                            <span>500 reviews</span>
                          </div>
                          <span>8.8</span>
                        </div>
                        <div className="offers-item-price">
                          $90
                          <span>per night</span>
                        </div>
                        <div className="item-rating">
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                        </div>
                        <p>
                          Suspendisse potenti. In faucibus massa. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Nullam eu
                          convallis tortor. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="offer-item--icon">
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"
                            alt="Post"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"
                            alt="Compass"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"
                            alt="Bicycle"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"
                            alt="Sail Boat"
                          />
                        </div>
                        <div className="offers-btn">
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
              <div className="col one-12 num-12 c-12 s-12">
                <div className="offer-container-item">
                  <div className="row">
                    <div className="col one-4 num-6 c-12 s-12">
                      <div className="offer-item-img--container">
                        <div
                          className="offer-item-img"
                          style={{
                            backgroundImage:
                              'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/84/0b/0f/daydream-island-resort.jpg?w=1200&h=-1&s=1)',
                          }}
                        ></div>
                        <div className="offer-container-item-name">
                          <a href="#">Island Dream</a>
                        </div>
                      </div>
                    </div>
                    <div className="one-8 num-6 c-12 s-12">
                      <div className="offer-container-item--content">
                        <div className="offer-container-item-review">
                          <div className="offer-container-item-review--text">
                            <h3>Very very good</h3>
                            <span>1000 reviews</span>
                          </div>
                          <span>9.1</span>
                        </div>
                        <div className="offers-item-price">
                          $100
                          <span>per night</span>
                        </div>
                        <div className="item-rating">
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                        </div>
                        <p>
                          Suspendisse potenti. In faucibus massa. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Nullam eu
                          convallis tortor. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="offer-item--icon">
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"
                            alt="Post"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"
                            alt="Compass"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"
                            alt="Bicycle"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"
                            alt="Sail Boat"
                          />
                        </div>
                        <div className="offers-btn">
                          <a href="#">Book Now</a>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col one-12 num-12 c-12 s-12">
                <div className="offer-container-item">
                  <div className="row">
                    <div className="col one-4 num-6 c-12 s-12">
                      <div className="offer-item-img--container">
                        <div
                          className="offer-item-img"
                          style={{
                            backgroundImage:
                              'url(https://tranhoangkhang1212.github.io/travelix/assets/images/xoffer_7.jpg.pagespeed.ic.yqTUd4HnKP.webp)',
                          }}
                        ></div>
                        <div className="offer-container-item-name">
                          <a href="#">Travel Light</a>
                        </div>
                      </div>
                    </div>
                    <div className="one-8 num-6 c-12 s-12">
                      <div className="offer-container-item--content">
                        <div className="offer-container-item-review">
                          <div className="offer-container-item-review--text">
                            <h3>Very good</h3>
                            <span>100 reviews</span>
                          </div>
                          <span>8.1</span>
                        </div>
                        <div className="offers-item-price">
                          $60
                          <span>per night</span>
                        </div>
                        <div className="item-rating">
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                        </div>
                        <p>
                          Suspendisse potenti. In faucibus massa. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Nullam eu
                          convallis tortor. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="offer-item--icon">
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"
                            alt="Post"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"
                            alt="Compass"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"
                            alt="Bicycle"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"
                            alt="Sail Boat"
                          />
                        </div>
                        <div className="offers-btn">
                          <a href="#">Book Now</a>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col one-12 num-12 c-12 s-12">
                <div className="offer-container-item">
                  <div className="row">
                    <div className="col one-4 num-6 c-12 s-12">
                      <div className="offer-item-img--container">
                        <div
                          className="offer-item-img"
                          style={{
                            backgroundImage:
                              'url(https://tranhoangkhang1212.github.io/travelix/assets/images/xoffer_8.jpg.pagespeed.ic.7TP4Qvessu.webp)',
                          }}
                        ></div>
                        <div className="offer-container-item-name">
                          <a href="#">Sky Hotels</a>
                        </div>
                      </div>
                    </div>
                    <div className="one-8 num-6 c-12 s-12">
                      <div className="offer-container-item--content">
                        <div className="offer-container-item-review">
                          <div className="offer-container-item-review--text">
                            <h3>Not bad</h3>
                            <span>100 reviews</span>
                          </div>
                          <span>8.1</span>
                        </div>
                        <div className="offers-item-price">
                          $80
                          <span>per night</span>
                        </div>
                        <div className="item-rating">
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                          <FontAwesomeIcon icon={faStar} className="i" />
                        </div>
                        <p>
                          Suspendisse potenti. In faucibus massa. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit. Nullam eu
                          convallis tortor. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="offer-item--icon">
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"
                            alt="Post"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"
                            alt="Compass"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"
                            alt="Bicycle"
                          />
                          <img
                            src="https://tranhoangkhang1212.github.io/travelix/assets/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"
                            alt="Sail Boat"
                          />
                        </div>
                        <div className="offers-btn">
                          <a href="#">Book Now</a>
                          <span></span>
                          <span></span>
                          <span></span>
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
    </>
  );
};

export default Offer;
