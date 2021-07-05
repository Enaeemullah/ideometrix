import React from 'react';
import './About.css';
import Imgabout from './about.jpg';
import Footer from '../Footer';
import Bottom from '../Bottom';


function About() {
    return (
        <>
        <h2> About Us </h2>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={Imgabout} alt="about" />

          </div>
          <div className="col-sm-12 col-lg-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
            
            </div>
        </div>

        <h2 className="ourteam">Our Team</h2>
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
</div>
<div className="col-sm-12 col-md-6 col-lg-4">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
</div>
<div className="col-sm-12 col-md-6 col-lg-4">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
</div>
<div className="col-sm-12 col-md-6 col-lg-4">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
</div>
<div className="col-sm-12 col-md-6 col-lg-4">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pharetra mi volutpat sed risus arcu, fermentum neque,
mauris vel. Tortor risus consectetur aenean felis auctor 
non. Mauris sed nunc pretium arcu, lectus arcu vitae.
Imperdiet in eu, nibh vel, quis.</p>
</div>
        </div>
        </div>
        <Footer />
      <Bottom />
        </>
    )
}

export default About
