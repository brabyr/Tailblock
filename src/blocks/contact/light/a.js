import React from "react";
import PropTypes from  "prop-types";

function LightContactA(props) {
  return (
    <section className="text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div class="relative mb-4">
            <label
              for="email"
              class="bg-white rounded leading-7 px-3 absolute ml-px mt-px left-0 top-0 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 text-base outline-none text-gray-700 pt-6 pb-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div class="relative mb-4">
            <label
              for="message"
              class="bg-white rounded leading-7 px-3 absolute ml-px mt-px left-0 top-0 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 h-32 text-base outline-none text-gray-700 pt-6 pb-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out`}
            ></textarea>
          </div>
          <button className={`text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

LightContactA.defaultProps = {
  theme: 'indigo'
};

LightContactA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightContactA;
