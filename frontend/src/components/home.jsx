import React from 'react';
import '../App.css';
import './home.jpg';

function Home() {
  return (
    <>
     <div className="container-fluid mt-5">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 text-center">
            <h1 className="display-4 mb-4 text-success">LEARN HUB</h1>
            <p className="text-dark">Welcome to our comprehensive Learning Platform for students.</p>
            <a href="/register" className="btn btn-danger">Getting Started</a>
           
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={require('./home.jpg')} alt="Logo" className="img-fluid" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>

      <section className="categories mt-5 mb-5 pb-5">
        <div className="container categories_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="categories_left">
                <h1>About Our Platform</h1>
                <p>Our educational platform is dedicated to providing a comprehensive learning experience for students of all ages. Join our community of learners and educators today!</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 categories_right">
              <div className="row gx-3">
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Neighborhood Watch</h5>
                    <p>Join the neighborhood watch program and stay vigilant against potential threats.</p>
                  </article>
                </div>
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Safety Alerts</h5>
                    <p>Receive instant safety alerts and updates regarding incidents in your area.</p>
                  </article>
                </div>
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Emergency Response</h5>
                    <p>Access emergency response services and connect with local authorities in case of emergencies.</p>
                  </article>
                </div>
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Community Forum</h5>
                    <p>Engage in community discussions and collaborate with neighbors to address security concerns.</p>
                  </article>
                </div>
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Resource Library</h5>
                    <p>Explore safety tips, resources, and guidelines to enhance security measures in your neighborhood.</p>
                  </article>
                </div>
                <div className="col-sm-4">
                  <article className="category">
                    <h5>Training Programs</h5>
                    <p>Participate in training programs and workshops to improve security awareness and preparedness.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
