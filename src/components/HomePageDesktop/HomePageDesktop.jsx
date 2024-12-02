import Card from "@mui/material/Card";
import React from "react";
import bgElements from "./bg-elements.svg";
import buttonsContainer from "./buttons-container.svg";
import cardImage2 from "./card-image-2.png";
import cardImage3 from "./card-image-3.png";
import cardImage4 from "./card-image-4.png";
import cardImage5 from "./card-image-5.png";
import cardImage6 from "./card-image-6.png";
import cardImage7 from "./card-image-7.png";
import cardImage from "./card-image.png";
import ellipse10 from "./ellipse-10.png";
import ellipse11 from "./ellipse-11.png";
import ellipse12 from "./ellipse-12.png";
import ellipse13 from "./ellipse-13.png";
// import image2 from "./image-2.png";
// import image from "./image.png";
// import image1 from "./image.svg";
import location from "./location.svg";
import logo from "./logo.svg";
import rectangle122 from "./rectangle-12-2.png";
import rectangle123 from "./rectangle-12-3.png";
import rectangle124 from "./rectangle-12-4.png";
import rectangle12 from "./rectangle-12.png";
import review2 from "./review-2.png";
import review from "./review.png";
import star22 from "./star-2-2.svg";
import star2 from "./star-2.svg";
import star32 from "./star-3-2.svg";
import star3 from "./star-3.svg";
import star42 from "./star-4-2.svg";
import star4 from "./star-4.svg";
import star62 from "./star-6-2.svg";
import star6 from "./star-6.svg";
import star72 from "./star-7-2.svg";
import star7 from "./star-7.svg";
import "./style.css";
import uilCalendarAlt from "./uil-calendar-alt.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector from "./vector.svg";

export const HomePageDesktop = () => {
  return (
    <div className="home-page-desktop">
      <div className="container">
        <img className="bg-elements" alt="Bg elements" src={bgElements} />

        <div className="navigation-bar">
          <img className="logo" alt="Logo" src={logo} />

          <div className="navbar">
            <button className="primary-button">
              <div className="text">Home</div>
            </button>

            <div className="text-button">About Us</div>

            <div className="text-button">Projects</div>

            <div className="text-button">Services</div>

            <div className="text-button">News</div>
          </div>

          <button className="text-wrapper">
            <div className="text">Contact us</div>
          </button>
        </div>

        <div className="hero-section">
          <div className="content">
            <div className="div">
              <p className="p">Creating a Better Tomorrow, One Home at a Time</p>

              <p className="we-ve-built-a">
                We&#39;ve built a reputation for delivering exceptional results
                and exceeding our clients&#39; expectations. From luxurious
                residential homes to state-of-the-art commercial properties, our
                team of experts is dedicated to bringing your vision to life.
              </p>
            </div>

            <div className="buttons">
              <div className="div-wrapper">
                <div className="text-2">Schedule a Call</div>
              </div>

              <div className="primary-button-2">
                <div className="text-2">View Our Projucts</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="overlap-group">
              <img className="review" alt="Review" src={review} />

              <img className="img" alt="Review" src={review2} />
            </div>
          </div>
        </div>

        <div className="about-us">
          <div className="content-wrapper">
            <img className="vector" alt="Vector" src={vector4} />

            <div className="left-side">
              <div className="inner-content">
                <div className="title-content">
                  <div className="title">
                    <div className="top">
                      <div className="title-2">We&#39;re</div>

                      <div className="shape" />

                      <div className="title-2"> building</div>
                    </div>

                    <div className="title-3">communities.</div>
                  </div>

                  <p className="paragraph">
                    With a commitment to excellence and a focus on innovation,
                    we&#39;ve established ourselves as a leader in the real estate
                    and construction industry.
                  </p>
                </div>

                <div className="link">
                  <div className="primary-button-3">
                    <div className="text">Learn More About Us...</div>
                  </div>
                </div>
              </div>

              <div className="ratings">
                <div className="div-2">
                  <img className="ellipse" alt="Ellipse" src={ellipse10} />

                  <img className="ellipse-2" alt="Ellipse" src={ellipse11} />

                  <img className="ellipse-2" alt="Ellipse" src={ellipse12} />

                  <img className="ellipse-2" alt="Ellipse" src={ellipse13} />
                </div>

                <div className="ratings-rate">
                  <div className="div-2">
                    <img className="star" alt="Star" src={star6} />

                    <img className="star" alt="Star" src={star22} />

                    <img className="star" alt="Star" src={star3} />

                    <img className="star" alt="Star" src={star42} />

                    <div className="frame">
                      <div className="star-wrapper">
                        <img className="star-2" alt="Star" src={star7} />
                      </div>
                    </div>
                  </div>

                  <p className="text-wrapper-2">
                    4.3/5 Rated by 300+ Professionals
                  </p>
                </div>
              </div>
            </div>

            {/* <img className="image" alt="Image" src={image2} /> */}

            {/* <img className="image-2" alt="Image" src={image2} /> */}
          </div>
        </div>

        <div className="featured-properties">
          <div className="header">
            <div className="text-3">
              <div className="title-4">
                <img className="vector-2" alt="Vector" src={vector5} />

                <div className="text-wrapper-3">Featured Projects</div>
              </div>

              <p className="text-wrapper-4">
                we&#39;ve built a reputation for delivering exceptional results
                and exceeding our clients&#39; expectations. From luxurious
                residential homes to state-of-the-art commercial properties, our
                team of experts is dedicated to bringing your vision to life.
              </p>
            </div>

            <div className="primary-button-3">
              <div className="text">View all Projects</div>
            </div>
          </div>

          <div className="content-2">
            <div className="div-3">
              <Card color="text.primary" variant="elevation">
                <img className="card-image" alt="Card image" src={cardImage3} />

                <div className="card-details">
                  <div className="text-4">
                    <div className="text-wrapper-5">The Grand Estate</div>

                    <p className="lorem-ipsum-dolor">
                      The Grand Estate is a luxurious residential development
                      featuring 12 bespoke homes, each with its own unique design
                      and amenities
                    </p>
                  </div>

                  <div className="div-4">
                    <div className="location">
                      <img className="location-2" alt="Location" src={location} />

                      <div className="text-wrapper-6">
                        Upper Macungie Township, PA
                      </div>
                    </div>

                    <div className="tags">
                      <div className="primary-button-4">
                        <div className="text-5">Movie theater</div>
                      </div>
                    </div>
                  </div>

                  <div className="primary-button-5">
                    <div className="text-6">View Property</div>
                  </div>
                </div>
              </Card>
              <Card color="text.secondary" variant="elevation">
                <img className="card-image" alt="Card image" src={cardImage7} />

                <div className="card-details">
                  <div className="text-4">
                    <div className="text-wrapper-5">The Business Hub</div>

                    <p className="lorem-ipsum-dolor">
                      The Business Hub is a state-of-the-art commercial office
                      space designed to meet the needs of modern businesses.
                    </p>
                  </div>

                  <div className="div-4">
                    <div className="location">
                      <img className="location-2" alt="Location" src={location} />

                      <div className="text-wrapper-6">
                        Upper Macungie Township, PA
                      </div>
                    </div>

                    <div className="tags">
                      <div className="primary-button-4">
                        <div className="text-5">High-speed Wi-Fi</div>
                      </div>
                    </div>
                  </div>

                  <div className="primary-button-5">
                    <div className="text-6">View Property</div>
                  </div>
                </div>
              </Card>
              <Card color="text.secondary" variant="elevation">
                <img className="card-image" alt="Card image" src={cardImage2} />

                <div className="card-details">
                  <div className="text-4">
                    <div className="text-wrapper-5">The Village</div>

                    <p className="lorem-ipsum-dolor">
                      The Village is a community development featuring a mix of
                      residential and commercial spaces, designed to create a
                      vibrant and sustainable community.
                    </p>
                  </div>

                  <div className="div-4">
                    <div className="location">
                      <img className="location-2" alt="Location" src={location} />

                      <div className="text-wrapper-6">
                        Upper Macungie Township, PA
                      </div>
                    </div>

                    <div className="tags">
                      <div className="primary-button-4">
                        <div className="text-5">Green spaces</div>
                      </div>
                    </div>
                  </div>

                  <div className="primary-button-5">
                    <div className="text-6">View Property</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="container">
              <p className="text-7">
                <span className="span">01</span>

                <span className="text-wrapper-7">/03</span>
              </p>

              <img
                className="buttons-container"
                alt="Buttons container"
                src={buttonsContainer}
              />
            </div>
          </div>
        </div>

        <div className="services">
          <div className="header-2">
            <div className="text-8">
              <div className="title-5">
                <div className="text-wrapper-8">Quality service you get</div>

                <img className="vector-3" alt="Vector" src={vector2} />
              </div>

              <p className="at-pinnacle-we-offer">
                At Pinnacle, we offer a wide range of services to cater to your
                unique needs. From residential construction to commercial
                development, we&#39;ve got you covered.
              </p>
            </div>

            <div className="tabs">
              <div className="primary-button-6">
                <div className="text-9">Residential</div>
              </div>

              <div className="primary-button-3">
                <div className="text-9">Property Management</div>
              </div>

              <div className="primary-button-3">
                <div className="text-9">Commercial</div>
              </div>

              <div className="primary-button-3">
                <div className="text-9">Development</div>
              </div>
            </div>
          </div>

          <div className="div-3">
            <Card color="text.secondary" variant="elevation">
              <img className="card-image" alt="Card image" src={cardImage5} />

              <div className="card-details-2">
                <div className="text-10">
                  <div className="text-wrapper-5">Custom Homes</div>

                  <p className="lorem-ipsum-dolor">
                    We design and build custom homes that reflect your personal
                    style and meet your specific needs.
                  </p>
                </div>

                <div className="details">
                  <div className="primary-button-7">
                    <div className="text-9">Learn more...</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card color="text.secondary" variant="elevation">
              <img className="card-image" alt="Card image" src={cardImage4} />

              <div className="card-details-2">
                <div className="text-10">
                  <div className="text-wrapper-5">Community Dev</div>

                  <p className="lorem-ipsum-dolor">
                    We develop and manage community projects, including
                    single-family homes, townhomes, and condominiums.
                  </p>
                </div>

                <div className="details">
                  <div className="primary-button-7">
                    <div className="text-9">Learn more...</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card color="text.secondary" variant="elevation">
              <img className="card-image" alt="Card image" src={cardImage6} />

              <div className="card-details-2">
                <div className="text-10">
                  <div className="text-wrapper-5">Renovations</div>

                  <p className="lorem-ipsum-dolor">
                    We specialize in residential renovations, from minor updates
                    to major overhauls.
                  </p>
                </div>

                <div className="details">
                  <div className="primary-button-7">
                    <div className="text-9">Learn more...</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="testimonials">
          <div className="header-2">
            <div className="text-8">
              <div className="title-6">
                <div className="text-wrapper-3">What Our Clients Say</div>

                <img className="vector-4" alt="Vector" src={vector} />
              </div>

              <p className="at-pinnacle-we-re">
                At Pinnacle, we&#39;re not just building structures - we&#39;re
                building relationships. Here&#39;s what some of our satisfied
                clients have to say about their experience with us.
              </p>
            </div>

            <div className="ratings">
              <div className="div-2">
                <img className="ellipse" alt="Ellipse" src={ellipse10} />

                <img className="ellipse-2" alt="Ellipse" src={ellipse11} />

                <img className="ellipse-2" alt="Ellipse" src={ellipse12} />

                <img className="ellipse-2" alt="Ellipse" src={ellipse13} />
              </div>

              <div className="ratings-rate">
                <div className="div-2">
                  <img className="star" alt="Star" src={star62} />

                  <img className="star" alt="Star" src={star2} />

                  <img className="star" alt="Star" src={star32} />

                  <img className="star" alt="Star" src={star4} />

                  <div className="frame">
                    <div className="img-wrapper">
                      <img className="star-2" alt="Star" src={star72} />
                    </div>
                  </div>
                </div>

                <p className="text-wrapper-9">
                  4.3/5 Rated by 300+ Professionals
                </p>
              </div>
            </div>
          </div>

          <div className="div-4">
            <div className="div-3">
              <div className="div-5">
                <img className="rectangle" alt="Rectangle" src={rectangle124} />

                <div className="content-3">
                  <div className="text-11">
                    <p className="text-wrapper-10">
                      &#34;Pinnacle&#39;s attention to detail and commitment to
                      excellence is unparalleled. Their team is professional,
                      courteous, and always willing to go the extra mile.&#34;
                    </p>

                    <p className="div-6">
                      <span className="span">- Emily J. Smith</span>

                      <span className="text-wrapper-11">
                        , Owner, Smith &amp; Co.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="div-5">
                <img className="rectangle" alt="Rectangle" src={rectangle122} />

                <div className="content-3">
                  <div className="text-11">
                    <p className="text-wrapper-10">
                      &#34;I was blown away by the quality of work and the level
                      of service provided by Pinnacle. They truly understand the
                      importance of delivering exceptional results.&#34;
                    </p>

                    <p className="div-6">
                      <span className="text-wrapper-11">- </span>

                      <span className="span">David L. Lee</span>

                      <span className="text-wrapper-11">
                        , CEO, Lee Enterprises
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-3">
              <div className="div-7">
                <img className="rectangle" alt="Rectangle" src={rectangle12} />

                <div className="content-3">
                  <div className="text-11">
                    <p className="text-wrapper-10">
                      &#34;I was blown away by the quality of work and the level
                      of service provided by Pinnacle. They truly understand the
                      importance of delivering exceptional results.&#34;
                    </p>

                    <p className="div-6">
                      <span className="span">- Emily J. Smith</span>

                      <span className="text-wrapper-11">
                        , Owner, Smith &amp; Co.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="div-7">
                <img className="rectangle" alt="Rectangle" src={rectangle123} />

                <div className="content-3">
                  <div className="text-11">
                    <p className="text-wrapper-10">
                      &#34;Pinnacle&#39;s ability to balance budget, schedule, and
                      quality is impressive. They&#39;re a true partner in the
                      construction process.&#34;
                    </p>

                    <p className="sarah-k-johnson">
                      <span className="text-wrapper-7"> - </span>

                      <span className="span">Sarah K. Johnson</span>

                      <span className="text-wrapper-7">,</span>

                      <span className="span">&nbsp;</span>

                      <span className="text-wrapper-11">
                        Project Manager, Johnson Co
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-posts">
          <div className="header">
            <div className="text-3">
              <div className="title-4">
                <img className="vector-2" alt="Vector" src={vector6} />

                <div className="text-wrapper-3">Latest News</div>
              </div>

              <p className="text-wrapper-4">
                We&#39;ve built a reputation for delivering exceptional results
                and exceeding our clients&#39; expectations. From luxurious
                residential homes to state-of-the-art commercial properties, our
                team of experts is dedicated to bringing your vision to life.
              </p>
            </div>

            <div className="primary-button-8">
              <div className="text-12">View all blog post</div>
            </div>
          </div>

          <div className="frame-2">
            <div className="div-3">
              <Card color="text.secondary" variant="elevation">
                {/* <img className="card-image" alt="Card image" src={image} /> */}

                <div className="card-details-3">
                  <div className="primary-button-4">
                    <div className="text-5">Home Improvement</div>
                  </div>

                  <div className="text-4">
                    <p className="text-wrapper-5">
                      5 Ways to Increase Your Home&#39;s Value
                    </p>
                  </div>

                  <div className="div-8">
                    <div className="date">
                      <img
                        className="uil-calendar-alt"
                        alt="Uil calendar alt"
                        src={uilCalendarAlt}
                      />

                      <div className="text-wrapper-12">May 10, 2022</div>
                    </div>

                    <div className="primary-button-7">
                      <div className="text-9">Read More...</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card color="Planning" variant="elevation">
                <img className="card-image" alt="Card image" src={cardImage} />

                <div className="card-details-3">
                  <div className="primary-button-4">
                    <div className="text-5">Planning</div>
                  </div>

                  <div className="text-4">
                    <p className="text-wrapper-5">How to Plan Your Dream Home</p>
                  </div>

                  <div className="div-8">
                    <div className="date">
                      <img
                        className="uil-calendar-alt"
                        alt="Uil calendar alt"
                        src={uilCalendarAlt}
                      />

                      <div className="text-wrapper-12">Jan 15, 2023</div>
                    </div>

                    <div className="primary-button-7">
                      <div className="text-9">Read More...</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="div-8">
              <p className="text-7">
                <span className="span">01</span>

                <span className="text-wrapper-7">/03</span>
              </p>

              <img
                className="buttons-container"
                alt="Buttons container"
                src={buttonsContainer}
              />
            </div>
          </div>
        </div>

        <div className="FAQ">
          <div className="header-3">
            <div className="title-wrapper">
              <div className="title-7">
                <img className="vector-2" alt="Vector" src={vector3} />

                <div className="text-wrapper-3">Frequently Asked Questions</div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="questions">
              <div className="question">
                <p className="text-wrapper-5">
                  How long has Pinnacle been in business?
                </p>

                <p className="text-wrapper-4">
                  Pinnacle was founded in 2005, and we&#39;ve been proudly serving
                  the Mayobe area for over 15 years. During that time, we&#39;ve
                  established ourselves as a trusted leader in the construction
                  and real estate industry, completing a wide range of projects
                  and earning a reputation for excellence.
                </p>
              </div>

              <div className="question">
                <p className="text-wrapper-5">
                  What types of services does Pinnacle offer?
                </p>

                <p className="text-wrapper-4">
                  At Pinnacle, we offer a comprehensive suite of services to meet
                  the diverse needs of our clients. Our core offerings include
                  residential construction, commercial construction, property
                  management, and development services. Whether you&#39;re looking
                  to build a custom home, renovate an existing property, or manage
                  a commercial portfolio, our team of experts has the skills and
                  experience to get the job done right.
                </p>
              </div>
            </div>

            <div className="questions">
              <div className="question">
                <p className="text-wrapper-5">
                  How does Pinnacle ensure the quality of its work?
                </p>

                <p className="text-wrapper-4">
                  Quality is at the heart of everything we do at Pinnacle. We have
                  a rigorous quality control process that involves regular
                  inspections, testing, and oversight throughout the entire
                  construction process. Additionally, our team of experienced
                  professionals is committed to using only the highest-quality
                  materials and adhering to the strictest industry standards. We
                  stand behind our work with a comprehensive warranty, giving our
                  clients the peace of mind they deserve.
                </p>
              </div>

              <div className="question">
                <p className="text-wrapper-5">
                  What is Pinnacle&#39;s approach to sustainability?
                </p>

                <p className="text-wrapper-4">
                  Sustainability is a key priority for Pinnacle. We believe that
                  building and managing properties in an environmentally
                  responsible manner is not only good for the planet, but also
                  benefits our clients in the long run. That&#39;s why we
                  incorporate a range of sustainable practices into our projects,
                  from energy-efficient design and construction to the use of
                  renewable materials and technologies. Our goal is to create
                  buildings and communities that are not only beautiful and
                  functional, but also environmentally responsible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="CTA">
          <div className="wrapper-2">
            {/* <img className="vector-5" alt="Vector" src={image1} /> */}

            <img className="vector-6" alt="Vector" src={vector7} />

            <div className="title-8">
              <div className="text-wrapper-13">Let’s</div>

              <div className="text-wrapper-13">Build</div>

              <img className="vector-7" alt="Vector" src={vector8} />

              <div className="text-wrapper-13">Something</div>

              <div className="text-wrapper-14">Extraordinary</div>

              <div className="text-wrapper-14">Together</div>
            </div>

            <div className="primary-button-3">
              <div className="text">View our projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
