import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import "./FloatingSocialMedia.css";

const FloatingSocialMedia = () => {
  // Define social media links
  const socialLinks = [
    {
      id: 1,
      icon: <FaPhone size={22} />,
      href: "tel:+919591181111",
      label: "Call us",
      color: "bg-[#080F3B]",
      hoverColor: "hover:bg-[#e99015]"
    },
    {
      id: 2,
      icon: <FaFacebookF size={22} />,
      href: "https://www.facebook.com/djglass.interiors.1",
      label: "Facebook",
      color: "bg-[#080F3B]",
      hoverColor: "hover:bg-[#e99015]"
    },
    {
      id: 3,
      icon: <FaInstagram size={22} />,
      href: "https://www.instagram.com/dj_glass_interior_solutions_?igsh=MTVrZ2JlejJpcjhhcQ==",
      label: "Instagram",
      color: "bg-[#080F3B]",
      hoverColor: "hover:bg-[#e99015]"
    },
    {
      id: 4,
      icon: <FaWhatsapp size={22} />,
      href: "https://wa.me/+919591181111",
      label: "WhatsApp",
      color: "bg-[#080F3B]",
      hoverColor: "hover:bg-[#e99015]"
    }
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50">
      <div className="social-icons-container">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("tel:") ? "_self" : "_blank"}
            rel={link.href.startsWith("tel:") ? "" : "noopener noreferrer"}
            className={`social-icon-link ${link.color} ${link.hoverColor}`}
            aria-label={link.label}
          >
            <div className="social-icon-inner">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocialMedia;
