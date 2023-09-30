import React from "react";
import Layout from "./../components/Layout/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 img ">
          <img
            src="/images/interior.jpg"
            alt="services"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-center  mt-2">

<span className="services">Our Services</span>
<br />
Welcome to <span className="int">Intirious Design and Collections</span>, where we transform spaces into stunning havens that reflect your style and personality. Our comprehensive range of interior design services ensures that every corner of your space is meticulously curated to perfection. Explore our offerings below:

 <br />

Residential Interior Design
From cozy apartments to spacious family homes, we specialize in creating interiors that resonate with your lifestyle. Our residential interior design services include:

Personalized Design Consultations
Space Planning and Layout Optimization
Color Palette Selection
Furniture and Decor Sourcing
Customized Styling and Accents
Commercial Interior Design
Elevate your business environment with our commercial interior design expertise. We craft spaces that inspire creativity and productivity, making lasting impressions on clients and employees alike. Our commercial services encompass:

<br />

Office Space Planning and Design
Retail Store Layout and Visual Merchandising
Hospitality Venue Design
Corporate Brand Integration
Ergonomic and Functional Design Solutions
Renovation and Remodeling





          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Services;