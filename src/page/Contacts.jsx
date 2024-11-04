import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGit,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <>
      <div className="home">
        <div className="home___background min-h-[100vh]"></div>
        <div className="home-title">
          <h1>Contact</h1>
        </div>
        <div></div>
      </div>
      <div className="contact-container">
        <div className="grids wide custom">
          <div className="contact-container">
            <div className="row">
              <div className="col one-12 num-12 c-12">
                <div className="contact-container-form">
                  <div className="contact-container-form--title">
                    <h2>get in touch</h2>
                  </div>
                  <div className="contact-form">
                    <input
                      type="text"
                      placeholder="Name"
                      className="contact-container-form-name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="contact-container-form-email"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="contact-container-form-subject"
                    />
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Message"
                    ></textarea>
                    <div className="row">
                      <div className="one-12 num-12 c-12 text-center">
                        <button className="form-submit-button">
                          send message
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grids wide custom">
        <div className="contact-about">
          <div className="row">
            <div className="col one-5 num-5 c-12 img padding">
              <img
                src="https://tranhoangkhang1212.github.io/travelix/assets/images/xman.png.pagespeed.ic.EFVcLSPoud.png"
                alt=""
              />
            </div>
            <div className="col one-4 num-4 c-12 padding">
              <div className="contact-about--logo">
                <a href="#">
                  <img
                    src="https://tranhoangkhang1212.github.io/travelix/assets/images/logo.webp"
                    alt=""
                  />
                  Travelix
                </a>
              </div>
              <p className="contact-about--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit
                urna. Integer eleme ntum orci eu vehicula iaculis consequat
                nisl. Nunc et suscipit urna pretium.
              </p>
              <ul className="contact-about--social">
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faPinterest} className="i" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} className="i" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="i" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faGit} className="i" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedinIn} className="i" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col one-3 num-3 c-12 padding">
              <div className="contact-container infor">
                <div className="contact-container-content">
                  <div className="contact-container-info">
                    <div className="contact-container-info--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/placeholder.svg"
                        alt=""
                      />
                    </div>
                    <span>Dinh Phong Phu, TP.Thu DUc, HCM</span>
                  </div>
                  <div className="contact-container-info">
                    <div className="contact-container-info--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/phone-call.svg"
                        alt=""
                      />
                    </div>
                    <span>+84 889 788 760</span>
                  </div>
                  <div className="contact-container-info">
                    <div className="contact-container-info--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/message.svg"
                        alt=""
                      />
                    </div>
                    <span>trinhan212003la@gmail.com</span>
                  </div>
                  <div className="contact-container-info">
                    <div className="contact-container-info--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/planet-earth.svg"
                        alt=""
                      />
                    </div>
                    <span>www.trinhanduong.com</span>
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

export default Contacts;
