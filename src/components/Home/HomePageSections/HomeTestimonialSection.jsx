import React from "react";
import Slider from "react-slick";

const HomeTestimonialSection = () => {
  const testimonials = [
    {
      image:
        "https://www2.deloitte.com/content/dam/html/us/dei22/img/profile-USI_Manish_500x500.jpg",
      name: "Rohith Vandana",
      profession: "Chennai",
      review:
        "I had a wonderful experience with Mr.umesh from DJ Glass interiors , had a great experience for our office partition work with quality material and reasonable price. On time quality work with promt commitment.",
    },
    {
      image:
        "https://assets.devfolio.co/users/43148b199ca84e31aa0c3df4d8c68457/avatar.jpeg",
      name: "Guru Nath",
      profession: "Kerala",
      review:
        "We have contacted dj glass for shower cubicle. The response was very quick and within 3-4 working days they have finished work. They service which they have given is wonderful . Done perfectly. Highly recommended .",
    },
    {
      image:
        "https://p.kindpng.com/picc/s/600-6005185_branca-de-neve-logo-png-download-birthday-transparent.png",
      name: "Mary Delna",
      profession: "Andra Pradesh",
      review:
        "The service was good. Within the limited time with best cost they do complete the work as well as Umesh gives the best coordination. - SION Semiconductors Pvt. Ltd.",
    },
    {
      image:
        "https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Ruchi-Taliwal-MD-179103-circle_large__v1__.png",
      name: "Suman Gupta",
      profession: "Hubli",
      review:
        "We bought office partition from dj glass . Really loved the work . Mr.umesh was very professional and completed the work within given time. So I love to rate them with 5 star",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold uppercase">Testimonials</h1>
        <span className="bg-[#080F3B] w-1/12 h-[2px]"></span>
      </div>

      <Slider {...settings} className="testimonial-slider mt-5 h-full">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#080F3B] rounded-lg shadow-lg p-6 h-full flex flex-col">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-center mb-2 text-white uppercase">
                {testimonial.name}
              </h4>
              <p className="text-[#FEA116] text-center mb-4">
                {testimonial.profession}
              </p>
              <p className="text-white text-center flex-grow h-40">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeTestimonialSection;
