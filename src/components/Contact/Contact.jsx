import React from 'react'
import ContactUsPageBannerSection from './ContactUsPageSections/ContactUsPageBannerSection'
import ContactUsPageSection2 from './ContactUsPageSections/ContactUsPageSection2'
import ContactUsPageFormSection from './ContactUsPageSections/ContactUsPageFormSection'

const Contact = () => {
  return (
    <section className='flex flex-col'>
        <ContactUsPageBannerSection/>
        <ContactUsPageSection2/>
        <ContactUsPageFormSection/>
    </section>
  )
}

export default Contact
