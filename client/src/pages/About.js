import React from "react";
import Layout from "./../components/Layout/Layout";


const About = () => {
  return (
    <Layout title={'about us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-center  mt-2"> <span className="int">Welcome to Intirious Design and Collection</span>
          
          <br />

At Intirious D&C, we believe that a beautifully designed space has the power to transform lives. Our passion for interior design drives us to create stunning and functional environments that cater to your unique lifestyle and preferences.

Who We Are

We are a team of dedicated and talented interior designers with a shared vision: to turn your spaces into havens that reflect your personality and aspirations. With a keen eye for detail and a deep understanding of design principles, we're here to collaborate with you every step of the way.


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;