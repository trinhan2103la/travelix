const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-background"></div>
      <div className="grids wide">
        <div className="contact-container">
          <div className="row">
            <div className="col one-5"></div>
            <div className="col one-7">
              <div className="contact-container-form">
                <div className="contact-container-form--title">
                  <h2>Get in touch</h2>
                </div>
                <div className="contact-form">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact-form-name"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="contact-form-email"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="contact-form-subject"
                  />
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Message"
                  ></textarea>
                  <button className="form-submit-button">
                    Send Message
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
  );
};

export default Contact;
