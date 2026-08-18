
"use client";
import { useEffect, useRef } from 'react';

export default function ContactPage() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Dynamically load scripts so they execute AFTER React has mounted the DOM
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      try {
        if (!(window as any).jQuery) {
          await loadScript('/js/jquery-3.7.1.min.js');
        }
        await loadScript('/js/bootstrap.bundle.min.js');
        await loadScript('/js/plugin.js');
        await loadScript('/js/main.js');
      } catch (err) {
        console.error('Error loading scripts', err);
      }
    };

    initScripts();

    // Cleanup scripts if component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src^="/js/"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <>


      {/* Header Section Starts */}
      <header className="position-relative z-3 bg-dark">
        <div className="header-top py-3">
          <div className="container">
            <div className="header-top-inner d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="header-contact">
                <ul className="d-flex white flex-wrap">
                  <li className="me-3 pe-3 border-end border-lightgrey small"><a href="tel:+919483106164"><i className="fa fa-phone me-2" aria-hidden="true"></i>9483106164 / 9481936167</a></li>
                  <li className="me-3 pe-3 border-end border-lightgrey small"><a href="mailto:info@website.com"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i>info@website.com</a></li>
                  <li className="small"><i className="fa fa-clock-o me-2" aria-hidden="true"></i>Mon - Fri: 9:00 - 18:30</li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="d-flex gap-2">
                  <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav header-nav-menu" id="header-nav-menu">
          <div className="container">
            <div className="header-nav-inner border-top border-light py-3">
              <div className="row gx-xl-5 align-items-center justify-content-between">
                <div className="col-xl-2 col-md-3 col-6 order-1">
                  <div className="header-logo">
                <a href="index.html" className="text-decoration-none">
                  <h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b", lineHeight: "1.2" }}>Samruddhi <br /><span style={{ fontSize: "0.5em", letterSpacing: "1px", color: "#f8f9fa", fontWeight: "normal" }}>Architects | Construction | Interiors</span></h4>
                </a>
              </div>
                </div>
                <div className="col-xl-7 col-0 order-3 order-xl-2">
                  <div className="header-nav">
                    <div className="navbar-collapse " id="bs-example-navbar-collapse-1">
                      <ul className="navbar-nav flex-row align-items-center justify-content-center" id="responsive-menu">
                        <li className="nav-item">
                          <a className="nav-link text fw-medium text-uppercase" href="/">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text fw-medium text-uppercase" href="/projects">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text fw-medium active text-uppercase" href="/contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-0  order-2 order-xl-3">
                  <div className="header-icons d-none d-xl-block">
                    <ul className="d-flex align-items-center gap-4  justify-content-xl-end">
                      <li><a className="position-relative" data-bs-toggle="modal" data-bs-target="#interealModal"><i className="fa fa-info-circle" aria-hidden="true"></i>
                      </a></li>
                      <li><a href="consultation.html" className="btn-secondary">Get A Qoute</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="slicknav-mobile"></div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section Ends */}
      {/* Page Banner Starts */}
      <section className="page-banner position-relative pt-10 pb-10" style={{ backgroundImage: "url('/image/contact_banner_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="overlay bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container position-relative z-1 text-center white py-5">
          <h1 className="display-3 fw-bold white mb-2">Our Offices</h1>
          <p className="lead fst-italic" style={{ fontSize: "18px" }}>Get in touch with us at any of our luxury studios.</p>
        </div>
      </section>
      {/* Page Banner Ends */}

      {/* Contact Section Starts */}
      <section className="contact-page py-5">
        <div className="container py-5">
          <div className="row">
            {/* Offices Column */}
            <div className="col-lg-10 mx-auto">
              <h2 className="mb-5 fw-bold" style={{ color: "#252525" }}>Our Offices</h2>
              
              <div className="row gy-4">
                {/* Office 1 */}
                <div className="col-md-6">
                  <div className="card rounded border-1 p-4 shadow-sm" style={{ borderColor: '#e0e0e0' }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="mb-0 fw-bold" style={{ color: "#ED752D", fontSize: "1.5rem" }}>Delhi</h4>
                      <i className="fa fa-map-marker fs-4" style={{ color: "#333" }}></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                      <p className="mb-0 text-muted" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                        Plot No. 41, Industrial Estate, Okhla Phase-III,<br/>
                        New Delhi - 110020
                      </p>
                      <p className="mb-0 text-muted small">+91 11 4182 8070</p>
                    </div>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="col-md-6">
                  <div className="card rounded border-1 p-4 shadow-sm" style={{ borderColor: '#e0e0e0' }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="mb-0 fw-bold" style={{ color: "#ED752D", fontSize: "1.5rem" }}>Bengaluru</h4>
                      <i className="fa fa-map-marker fs-4" style={{ color: "#333" }}></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                      <p className="mb-0 text-muted" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                        1st Floor, 21/30 Prestige Craig House, Craig<br/>
                        Layout M G Road Bengaluru 560001
                      </p>
                      <p className="mb-0 text-muted small">+91 80 4170 7676</p>
                    </div>
                  </div>
                </div>

                {/* Office 3 */}
                <div className="col-md-6">
                  <div className="card rounded border-1 p-4 shadow-sm" style={{ borderColor: '#e0e0e0' }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="mb-0 fw-bold" style={{ color: "#ED752D", fontSize: "1.5rem" }}>Mumbai</h4>
                      <i className="fa fa-map-marker fs-4" style={{ color: "#333" }}></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                      <p className="mb-0 text-muted" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                        4th Floor, Plot No. A-54, MIDC Road No.1,<br/>
                        Andheri East, Mumbai - 400093
                      </p>
                      <p className="mb-0 text-muted small">+91 22 6959 8000</p>
                    </div>
                  </div>
                </div>

                {/* Office 4 */}
                <div className="col-md-6">
                  <div className="card rounded border-1 p-4 shadow-sm" style={{ borderColor: '#e0e0e0' }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="mb-0 fw-bold" style={{ color: "#ED752D", fontSize: "1.5rem" }}>Pune</h4>
                      <i className="fa fa-map-marker fs-4" style={{ color: "#333" }}></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                      <p className="mb-0 text-muted" style={{ maxWidth: '400px', lineHeight: '1.6' }}>
                        Office 301, Pride Portal, Shivaji Housing Society,<br/>
                        Senapati Bapat Road, Pune - 411016
                      </p>
                      <p className="mb-0 text-muted small">+91 20 2565 0000</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Ends */}
{/* Footer Section Starts */}
      <footer id="contact" className="section-padding position-relative pb-5">
        <div className="overlay"></div>
        <div className="container position-relative">
          <div className="footer-inner white">
            <div className="footer-top pb-5 mb-5 border-bottom border-2 border-light">
              <div className="row align-items-center gx-lg-5 gy-4">
                <div className="col-lg-3 col-md-4">
                  <div className="footer-top-left">
                <h4 className="mb-0 fw-bold white text-uppercase text-nowrap">Samruddhi Constructions</h4>
              </div>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="footer-top-right">
                    <p className="white mb-0 h6 fw-normal fst-italic">“DESIGNING SPACES. BUILDING TRUST. YOUR VISION. OUR EXPERTISE. BUILT TO PERFECTION.”</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle mb-5  pb-5 border-bottom border-light text-center text-md-start">
              <div className="row gx-lg-5 gy-5">
                <div className="col-lg-4">
                  <div className="footer-info">
                    <p>Samruddhi provides comprehensive solutions across Design, Build, Interiors, and Consultancy.</p>
                    <p className="mb-4">We specialize in crafting sustainable, luxurious spaces tailored to our clients unique lifestyles. </p>
                    <div className="footer-socials mb-4">
                      <ul className="d-flex gap-1 my-2 justify-content-center justify-content-md-start">
                        <li><a href=""><i className="fa fa-facebook bg-white bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter bg-white bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin bg-white bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                        <li><a href=""><i className="fa fa-google-plus bg-white bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                    <div className="contact-info">
                      <div className="mb-3">
                        <ul className="align-items-center d-flex gap-2 justify-content-center justify-content-md-start">
                          <li className="h5 mb-0"><i className="fa fa-map-marker me-2" aria-hidden="true"></i></li>
                          <li>256 Elizaberth Ave, CA, 90025</li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <ul className="align-items-center d-flex gap-2 justify-content-center justify-content-md-start">
                          <li className="h5 mb-0"><i className="fa fa-phone me-2" aria-hidden="true"></i></li>
                          <li>9483106164 / 9481936167</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="align-items-center d-flex gap-2 justify-content-center justify-content-md-start">
                          <li className="h5 mb-0"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i></li>
                          <li><a href="mailto:info@website.com"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i>info@website.com</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="quick-links">
                    <h4 className="white mb-2">Quick Link</h4>
                    <div className="border-bottom border-white w-25 mb-4 m-auto ms-md-1"></div>
                    <ul className="d-flex flex-column gap-3">
                      <li><a href="/">Home</a></li>
                      <li><a href="/projects">Projects</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="services">
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="services">
                    <h4 className="white mb-2">Get interesting news</h4>
                    <div className="border-bottom border-white w-25 mb-4 m-auto ms-md-1"></div>
                    <p className="mb-3">Subscribe to our newsletter for the latest updates on our projects and design trends.</p>
                    <div className="subscribe">
                      <input type="email" placeholder="Email" className="mb-2" />
                      <a href="" className="btn-primary">Subscribe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom text-center">
              <p className="mb-0"> &copy;2025 Samruddhi Constructions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section Ends */}

      {/*Back-to-top Button start*/}
      <div id="back-to-top">
        <a href="#" className="bg-secondary position-relative align-items-center rounded-circle d-block"></a>
      </div>
      {/*Back-to-top Button end*/}

      {/* Samruddhi Constructions Info Starts */}
      <div className="modal fade intereal-info-modal" id="interealModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog  h-100 my-0 rounded-0 me-0 modal-sm">
          <div className="modal-content h-100 rounded-0">
            <div className="modal-header border-0">
              <button type="button" className="btn-close me-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times bg-secondary text-center white" aria-hidden="true"></i></button>
            </div>
            <div className="modal-body mt-5 mx-3">
              <div className="logo mb-4">
                <h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b", lineHeight: "1.2" }}>Samruddhi <br /><span style={{ fontSize: "0.5em", letterSpacing: "1px", color: "#f8f9fa", fontWeight: "normal" }}>Architects | Construction | Interiors</span></h4>
              </div>
              <div className="info mb-4">
                <p>Samruddhi Constructions has been at the forefront of innovative architecture and construction for over three decades. We believe in creating spaces that not only look beautiful but also enhance the quality of life for those who use them.</p>
                <p className="mb-0">From initial concept to final execution, we handle every detail with precision and care, ensuring a seamless and stress-free experience for our clients.</p>
              </div>
              <div className="contact-info mb-4">
                <div className="mb-2 pb-2 border-bottom border-grey">
                  <ul className="align-items-center d-flex gap-2">
                    <li className="h5 mb-0"><i className="fa fa-map-marker me-2" aria-hidden="true"></i></li>
                    <li>256 Elizaberth Ave, CA, 90025</li>
                  </ul>
                </div>
                <div className="mb-2 pb-2 border-bottom border-grey">
                  <ul className="align-items-center d-flex gap-2">
                    <li className="h5 mb-0"><i className="fa fa-phone me-2" aria-hidden="true"></i></li>
                    <li>9483106164 / 9481936167</li>
                  </ul>
                </div>
                <div>
                  <ul className="align-items-center d-flex gap-2">
                    <li className="h5 mb-0"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i></li>
                    <li><a href="mailto:info@website.com"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i>info@website.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="modal-socials mb-4">
                <ul className="d-flex gap-1 my-2">
                  <li><a href=""><i className="fa fa-facebook bg-primary bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-twitter bg-primary bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-linkedin bg-primary bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                  <li><a href=""><i className="fa fa-google-plus bg-primary bg-opacity-25 rounded-circle text-center" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Samruddhi Constructions Info Ends */}







    </>
  );
}
