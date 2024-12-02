import Card from "@mui/material/Card";
import React from "react";
import "./style.css";
// import {
//   buttonsContainer,
//   cardImage2,
//   cardImage4,
//   frame26,
//   logo,
//   mailSendEnvelopeStreamlineCoreSvg,
//   sendEmailStreamlineCoreSvg,
//   uilCalendarAlt,
//   uilCalendarAlt2,
//   vector,
//   vector2,
//   vector3,
//   vector4,
//   wrapper,
// } from "./assets";

export const BlogDesktop = () => {
  return (
    <div className="blog-desktop">
      {/* <img className="frame" alt="Background" /> */}
      <div className="rectangle" />

      {/* Navigation Bar */}
      <header className="navigation-bar">
        {/* <img className="logo" alt="Logo" src={logo} /> */}
        <nav className="navbar">
          <button className="primary-button">Home</button>
          <div>About Us</div>
          <div>Projects</div>
          <div>Services</div>
          <div>News</div>
        </nav>
        <button className="div-wrapper">Contact us</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay" />
        <div className="header">
          <div className="text">
            <h1 className="title">Get the Latest News</h1>
            <p className="at-pinnacle-we-re">
              At Pinnacle, we&#39;re passionate about sharing our knowledge and
              expertise with our audience. Our blog is dedicated to providing
              valuable insights, tips, and trends in the construction and real
              estate industries.
            </p>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="content">
          <div className="cards">
            <Card className="card">
              {/* <img className="card-image" alt="Smart Homes" src={cardImage4} /> */}
              <div className="card-details">
                <div className="tags">
                  <button className="primary-button-2">Smart Tech</button>
                </div>
                <div className="text-3">
                  <h2>The Future of Smart Homes</h2>
                  <p>
                    From voice-controlled assistants to automated lighting
                    systems, we&#39;ll dive into the latest trends and
                    innovations that are making our homes smarter and more
                    convenient.
                  </p>
                </div>
                <div className="div-2">
                  <div className="date">
                    <img
                      className="uil-calendar-alt"
                      alt="Calendar"
                      // src={uilCalendarAlt}
                    />
                    <span>May 10, 2022</span>
                  </div>
                  <button className="primary-button-3">Read More...</button>
                </div>
              </div>
            </Card>
            {/* Additional Cards */}
          </div>
          <div className="pagination">
            <p>
              <span>01</span>/<span>03</span>
            </p>
            {/* <img alt="Pagination" src={buttonsContainer} /> */}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <header>
          {/* <img className="vector" alt="Icon" src={vector} /> */}
          <h2>Latest News</h2>
        </header>
        <div className="tabs">
          <button className="primary-button-4">ALL</button>
          <button className="primary-button-5">Home Design</button>
          <button className="primary-button-5">Sustainability</button>
          <button className="primary-button-5">Renovation</button>
        </div>
        <div className="wrapper-2">
          <div className="cards-2">
            <Card>
              <img
                className="card-image-2"
                alt="Sustainable Building"
                // src={cardImage2}
              />
              <div className="card-details-2">
                <button className="primary-button-2">Green Building</button>
                <h3>The Benefits of Sustainable Building Practices</h3>
                <div className="div-2">
                  <div className="date">
                    <img
                      className="uil-calendar-alt"
                      alt="Calendar"
                      // src={uilCalendarAlt2}
                    />
                    <span>Feb 20, 2023</span>
                  </div>
                  <button className="primary-button-3">Read more...</button>
                </div>
              </div>
            </Card>
            {/* Additional Cards */}
          </div>
        </div>
        <button className="primary-button">Load More</button>
      </section>

      {/* Call to Action */}
      <section className="CTA">
        <div className="wrapper-3">
          {/* <img className="vector-2" alt="Decoration" src={vector3} />
          <img className="vector-3" alt="Decoration" src={vector4} /> */}
          <div className="title-3">
            <h2>Let’s Build Something Extraordinary Together</h2>
          </div>
          <button className="primary-button-5">View our projects</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="top-container">
          <div className="wrapper-4">
            <div className="logo">
              {/* <img className="vector-5" alt="Logo" src={vector2} /> */}
              <span>Pinnacle</span>
            </div>
            <div className="input-feild">
              <img
                className="img-2"
                alt="Mail Icon"
                // src={mailSendEnvelopeStreamlineCoreSvg}
              />
              <input type="email" placeholder="Enter Your Email" />
              <img
                className="img-2"
                alt="Send Icon"
                // src={sendEmailStreamlineCoreSvg}
              />
            </div>
          </div>
          <div className="wrapper-5">{/* Footer Links */}</div>
        </div>
        <div className="bottom-container">
          <p>@2024 Pinnacle. All Rights Reserved.</p>
          {/* <img alt="Wrapper" src={wrapper} /> */}
        </div>
      </footer>
    </div>
  );
};
