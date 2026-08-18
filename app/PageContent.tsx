
"use client";
import { useEffect, useRef } from 'react';
import ServicesAccordion from '../components/ServicesAccordion';
export default function PageContent() {
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
      <header className="position-relative z-3">
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
                          <a className="nav-link text fw-medium active text-uppercase" href="/">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text fw-medium text-uppercase" href="/projects">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text fw-medium text-uppercase" href="/contact">
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

      {/* Banner Section Starts */}
      <section className="banner p-0 position-relative">
        <div className="container-fluid p-0">
          <div className="banner-slider">
            <div className="slide position-relative" style={{ backgroundImage: "url('" + "/image/pexels-jvdm-1457842.jpg" + "')" }}>
              <div className="overlay"></div>
              <div className="container white position-absolute start-50 translate-middle text-center">
                <div className="banner-info w-xl-75 w-xxl-50 m-auto mb-2">
                  <h1 className="white">Transform Your Space into Timeless Beauty</h1>
                  <p className="mb-5 fst-italic" style={{ fontSize: "18px" }}>Bespoke interiors crafted to reflect your personality and lifestyle.</p>
                  <a href="contact.html" className="btn-secondary bg-transparent border-2 border text-white border-white">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slide position-relative" style={{ backgroundImage: "url('" + "/image/apartment-with-pop-of-yellow-2021-08-26-15-43-11-utc.jpg" + "')" }}>
              <div className="overlay"></div>
              <div className="container white position-absolute start-50 translate-middle text-center">
                <div className="banner-info w-xl-75 w-xxl-50 m-auto mb-2">
                  <h1 className="white">Designing for Today, Building for Tomorrow</h1>
                  <p className="mb-5 fst-italic" style={{ fontSize: "18px" }}>Eco-friendly materials. Smart design solutions. Responsible living.</p>
                  <a href="contact.html" className="btn-secondary bg-transparent border-2 border text-white border-white">Learn More</a>
                </div>
              </div>
            </div>
            <div className="slide position-relative" style={{ backgroundImage: "url('" + "/image/bedroom-interior-design-3d-rendering-2021-08-26-18-15-32-utc1.jpg" + "')" }}>
              <div className="overlay"></div>
              <div className="container white position-absolute start-50 translate-middle text-center">
                <div className="banner-info w-xl-75 w-xxl-50 m-auto mb-2">
                  <h1 className="white">Your Dream Space, Designed & Delivered</h1>
                  <p className="mb-5 fst-italic" style={{ fontSize: "18px" }}>From concept to completion — we handle every detail with care.</p>
                  <a href="contact.html" className="btn-secondary bg-transparent border-2 border text-white border-white">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="since-section bg-dark white d-none d-md-flex align-items-center w-xl-75 position-absolute z-2 bottom-0 end-0 text-center text-md-start overflow-hidden">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-2 d-md-flex">
                  <div className="px-5 my-auto py-4 py-md-0">
                    <span className="h5 fw-semibold teko mb-0">Since 1990</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-5 bg-secondary">
                    <h4 className="white mb-0" style={{ letterSpacing: "1px" }}>DESIGN | BUILD | INTERIOR'S | CONSULTANT'S</h4>
                  </div>
                </div>
                <div className="col-md-7 d-md-flex">
                  <div className="px-5 my-auto py-4 py-md-0">
                    <p className="mb-3">We take pride in our legacy of building spaces that combine aesthetic elegance with robust structural integrity.</p>
                    <p className="mb-0">Our team of seasoned architects and engineers is dedicated to delivering excellence in every project, ensuring your vision becomes a reality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section Ends */}

      {/* Why Us Section Starts */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-inner position-relative pt-2 pt-lg-5 mt-2 mt-lg-0">
            <span className="heading-clip d-none d-lg-block">Why Us</span>
            
            {/* Mobile Title */}
            <div className="why-us-title text-center d-block d-lg-none mb-4 pt-3">
              <span className="teko h5 secondary">Why Choose Us</span>
              <div className="sperator bg-secondary mt-1 mb-2 mx-auto" style={{ width: "40px", height: "2px" }}></div>
              <h2 className="mb-0">A Behind-the-Scenes Look at <span className="secondary">Our Agency</span></h2>
            </div>

            <div className="row gx-lg-5 gy-4 gy-lg-5 align-items-center">
              <div className="col-lg-6">
                <div className="why-us-left">
                  <div className="why-us-image me-lg-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/image/luxury-interior-design-2021-10-21-02-43-57-utc.jpg" alt="interiror" className="img-fluid w-100 object-fit-cover" />
                      </div>
                      <div className="col-6">
                        <img src="/image/vintage-wooden-home-interior-design-2022-12-16-00-19-04-utc.jpg" alt="interiror" className="img-fluid w-100 object-fit-cover mt-4 mt-md-5" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="why-us-right mt-4 mt-lg-0">
                  {/* Desktop Title */}
                  <div className="why-us-title mb-4 pb-4 border-dashed text-lg-start d-none d-lg-block">
                    <span className="teko h5 secondary">Why Choose Us</span>
                    <div className="sperator bg-secondary mt-1 mb-2" style={{ width: "40px", height: "2px" }}></div>
                    <h2 className="mb-3">A Behind-the-Scenes Look at <span className="secondary">Our Agency</span></h2>
                  </div>
                  
                  <div className="why-us-desc mb-4 text-center text-lg-start">
                    <p className="fs-6 fs-lg-5">With decades of experience, we provide unparalleled expertise in modern construction and interior design.</p>
                    <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>From initial concept to final execution, we handle every detail with precision and care, ensuring a seamless and stress-free experience for our clients.</p>
                  </div>

                  <div className="feature-lisiting">
                    <div className="row gy-3 gy-md-4 gx-2 gx-md-4">
                      <div className="col-6 col-md-6">
                        <div className="feature-box p-2 p-md-3 border border-2 border-grey h-100">
                          <ul className="d-flex align-items-center m-0 p-0" style={{ listStyle: "none" }}>
                            <li className="fs-4 fs-md-3 mb-0 me-2 pe-2 me-md-3 pe-md-3 border-end border-grey border-2">
                              <i className="fa fa-building-o secondary" aria-hidden="true"></i>
                            </li>
                            <li>
                              <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>Fast Building</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.7rem", lineHeight: "1.3" }}>Delivering high-quality results on time.</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature-box p-2 p-md-3 border border-2 border-grey h-100">
                          <ul className="d-flex align-items-center m-0 p-0" style={{ listStyle: "none" }}>
                            <li className="fs-4 fs-md-3 mb-0 me-2 pe-2 me-md-3 pe-md-3 border-end border-grey border-2">
                              <i className="fa fa-lightbulb-o secondary" aria-hidden="true"></i>
                            </li>
                            <li>
                              <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>Smart Execute</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.7rem", lineHeight: "1.3" }}>Delivering high-quality results on time.</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature-box p-2 p-md-3 border border-2 border-grey h-100">
                          <ul className="d-flex align-items-center m-0 p-0" style={{ listStyle: "none" }}>
                            <li className="fs-4 fs-md-3 mb-0 me-2 pe-2 me-md-3 pe-md-3 border-end border-grey border-2">
                              <i className="fa fa-file-text-o secondary" aria-hidden="true"></i>
                            </li>
                            <li>
                              <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>Fine Planned</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.7rem", lineHeight: "1.3" }}>Delivering high-quality results on time.</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6">
                        <div className="feature-box p-2 p-md-3 border border-2 border-grey h-100">
                          <ul className="d-flex align-items-center m-0 p-0" style={{ listStyle: "none" }}>
                            <li className="fs-4 fs-md-3 mb-0 me-2 pe-2 me-md-3 pe-md-3 border-end border-grey border-2">
                              <i className="fa fa-picture-o secondary" aria-hidden="true"></i>
                            </li>
                            <li>
                              <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>Perfect Design</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: "0.7rem", lineHeight: "1.3" }}>Delivering high-quality results on time.</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Us Section Starts */}

      {/* Project Section Starts */}
      <section id="projects" className="project bg-secondarylight text-center text-lg-start">
        <div className="container">
          <div className="project-inner">
            <div className="project-title mb-5">
              <div className="row gx-md-5 gy-3 align-items-center">
                <div className="col-lg-6">
                  <div className="project-title-left">
                    <h2 className="mb-0">Design Made Real Showcasing <span className="secondary">Latest Projects</span></h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="project-title-right">
                    <p className="mb-0">Explore our diverse portfolio of residential and commercial projects, showcasing our commitment to innovative design and superior craftsmanship.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-body mb-5">
              <div className="d-md-flex overflow-hidden">
                <div className="project-box m-1 position-relative" style={{ backgroundImage: "url('" + "/image/modern-bathroom-interior-design-2022-12-16-11-57-19-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Interior & Furnishing Designing</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
                <div className="project-box m-1" style={{ backgroundImage: "url('" + "/image/interior-design-of-scandinavian-open-space-2022-12-07-04-19-53-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Architecture- Urban Living</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
                <div className="project-box m-1" style={{ backgroundImage: "url('" + "/image/vintage-wooden-home-interior-design-2022-12-16-00-19-04-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Exteriror Home Design</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
              </div>
              <div className="d-md-flex overflow-hidden">
                <div className="project-box m-1 position-relative" style={{ backgroundImage: "url('" + "/image/interior-design-of-a-bedroom-2022-11-16-06-07-23-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Sanitary & Flooring Work</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
                <div className="project-box m-1" style={{ backgroundImage: "url('" + "/image/office-building-2022-12-15-19-40-07-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Architecture- Urban Living</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
                <div className="project-box m-1" style={{ backgroundImage: "url('" + "/image/interior-design-of-stylish-living-room-2022-12-07-04-16-53-utc.jpg" + "')" }}>
                  <div className="overlay"></div>
                  <div className="project-info position-relative mt-auto text-center w-100 mb-4">
                    <h4 className="white">Exteriror Home Design</h4>
                    <a href="project-detail.html" className="btn-secondary bg-transparent border-2 border text-white border-white mb-2">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesAccordion />

      {/* Partners Marquee Starts */}
      <section className="partners-marquee py-5 overflow-hidden border-top border-bottom" style={{ borderColor: "#222" }}>
        <div className="text-center mb-4">
          <span className="text-uppercase small fw-bold" style={{ color: "#c19a5b", letterSpacing: "3px" }}>Trusted By</span>
        </div>
        <div className="marquee-container d-flex">
          <div className="marquee-content d-flex align-items-center gap-5">
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Malhotra Estates</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Kapoor Group</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Bose Realty</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Vasudevan Holdings</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Iyer & Sons</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Deshmukh Infra</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Sethi Developers</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Meridian Capital</span>
          </div>
          {/* Duplicate for seamless scrolling */}
          <div className="marquee-content d-flex align-items-center gap-5 ps-5" aria-hidden="true">
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Malhotra Estates</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Kapoor Group</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Bose Realty</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Vasudevan Holdings</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Iyer & Sons</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Deshmukh Infra</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Sethi Developers</span>
            <span className="fw-medium fs-5 text-nowrap mx-4" style={{ color: "#6c757d", fontFamily: "var(--font-serif)" }}>Meridian Capital</span>
          </div>
        </div>
      </section>
      {/* Partners Marquee Ends */}

      <section className="project-contact-section bg-secondarylight pb-5 pt-5">
        <div className="container">
          <div className="project-inner">
            <div className="project-contact p-4 border border-2 border-white">
              <div className="row align-items-center gy-4">
                <div className="col-lg-7">
                  <div className="project-contact-left">
                    <h3>Ready To Start New Project With <span className="secondary">Samruddhi Constructions</span>?</h3>
                    <p className="mb-0">Get in touch with our experts today to discuss your vision and let us help you build the space of your dreams.</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="project-contact-right text-lg-end">
                    <a href="contact.html" className="btn-primary">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section Ends */}

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
