import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGit,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faGlobe,
  faLocationPin,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="grids wide">
          <div className="row">
            <div className="col one-3 num-6 c-6 s-12">
              <div className="footer-container-about">
                <div className="container-about--logo">
                  <a href="#">
                    <img
                      src="https://tranhoangkhang1212.github.io/travelix/assets/images/logo.webp"
                      alt="logo"
                    />
                    Travelix
                  </a>
                </div>
                <div className="container-about--text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc
                    et suscipit urna. Integer eleme ntum orci eu vehicula
                    pretium.
                  </p>
                </div>
                <div className="container-about--social">
                  <ul>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/trinhan.duong.77">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/trinhan2103la">
                        <FontAwesomeIcon icon={faGit} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/duong-tri-nhan-ba8a45227/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col one-3 num-6 c-6 s-12">
              <div className="footer-container-blog">
                <h2>Blog Posts</h2>
                <div className="footer-container-blog--content">
                  <div className="container-blog-item">
                    <div className="container-blog-item--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/xfooter_blog_1.jpg.pagespeed.ic.n5JT1wzbm-.webp"
                        alt="blog"
                      />
                      <div className="container-blog-item--text">
                        <a href="#">Travel with us this year</a>
                        <br />
                        <span>July 20, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="container-blog-item">
                    <div className="container-blog-item--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/xfooter_blog_2.jpg.pagespeed.ic.u_Bp7zMu38.webp"
                        alt="blog"
                      />
                      <div className="container-blog-item--text">
                        <a href="#">New destinations for you</a>
                        <br />
                        <span>October 20, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="container-blog-item">
                    <div className="container-blog-item--img">
                      <img
                        src="https://tranhoangkhang1212.github.io/travelix/assets/images/xfooter_blog_3.jpg.pagespeed.ic.XDkX_CloU3.webp"
                        alt="blog"
                      />
                      <div className="container-blog-item--text">
                        <a href="#">Travel with us this year</a>
                        <br />
                        <span>May 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col one-3 num-6 c-6 s-12">
              <div className="footer-container-tags">
                <h2>Tags</h2>
                <div className="footer-container-tags-content">
                  <ul>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">fashion</a>
                    </li>
                    <li>
                      <a href="#">music</a>
                    </li>
                    <li>
                      <a href="#">video</a>
                    </li>
                    <li>
                      <a href="#">party</a>
                    </li>
                    <li>
                      <a href="#">photography</a>
                    </li>
                    <li>
                      <a href="#">adventure</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col one-3 num-6 c-6 s-12">
              <div className="footer-container-contact">
                <h2>Contact Infor</h2>
                <div className="footer-container-contact-content">
                  <div className="container-contact-info">
                    <div className="container-contact-infor--img">
                      <a href="#">
                        <FontAwesomeIcon icon={faLocationPin} />
                      </a>
                    </div>
                    <span>
                      116/ Dinh Phong Phu, Tang Nhon Phu B, TP Thu Duc, TH HCM
                    </span>
                  </div>
                  <div className="container-contact-info">
                    <div className="container-contact-infor--img">
                      <a href="#">
                        <FontAwesomeIcon icon={faPhone} />
                      </a>
                    </div>
                    <span>+84 889 788 760</span>
                  </div>
                  <div className="container-contact-info">
                    <div className="container-contact-infor--img">
                      <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </div>
                    <span>trinhan212003la@gmail.com</span>
                  </div>
                  <div className="container-contact-info">
                    <div className="container-contact-infor--img">
                      <a href="#">
                        <FontAwesomeIcon icon={faGlobe} />
                      </a>
                    </div>
                    <span>www.front-end-dev.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2021 By
            <a href="https://www.facebook.com/trinhan.duong.77">
              Duong_Tri_Nhan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
