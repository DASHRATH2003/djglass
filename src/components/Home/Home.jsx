import React from 'react'
import HomeBannerSection from './HomePageSections/HomeBannerSection'
import HomePageAboutUsSection from './HomePageSections/HomePageAboutUsSection'
import HomePageServices from './HomePageSections/HomePageServices'
import HomeTestimonialSection from './HomePageSections/HomeTestimonialSection'
import HomePageGallerySection from './HomePageSections/HomePageGallerySection'
import HomePageCountSection from './HomePageSections/HomePageCountSection'
import HomeOurProcess from './HomePageSections/HomeOurProcess'

const Home = () => {
  return (
    <section className="flex flex-col gap-20">
      <HomeBannerSection />
      <HomePageAboutUsSection />
      <HomePageCountSection />
      <HomePageServices />
      <HomeOurProcess />
      <HomePageGallerySection />
      <HomeTestimonialSection/>
    </section>
  );
}

export default Home
