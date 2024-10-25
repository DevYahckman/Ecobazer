import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";

const AboutUs = () => {
  return (
    <div className="">
      <BreadCrumb />
      <div className="space-y-3 py-5 p-10 ">
        <section className="grid grid-cols-2 gap-5 ">
          <div>
            <p className="text-5xl font-semibold text-deepGray">
              100% Trusted Organic Food Store
            </p>
            <p className="text-gray-600 text-lg">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div>2</div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
