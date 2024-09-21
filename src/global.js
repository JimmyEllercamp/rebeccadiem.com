export const siteLogo = {
    logo: "assets/images/rebecca/RebeccaDiem_Logo.png", // Add your site logo here
    alt: "Rebecca Diem", // Add your site name here
};
export const socialLink = {
    linkedin: "www.linkedin.com/in/rebeccadiem",
    instagram: "https://www.instagram.com/rebeccadiem",
    email: "mailto:rebeccadiemauthor@gmail.com",
};
export const mailchimpLink = {
    link: process.env.REACT_APP_MAILCHAIMP, // Add your mailchimp list link here
};
export const contactFormAction = {
    link: process.env.REACT_APP_CONTACTFORM, // Add for link here from https://formspree.io
};
export const contactMap = {
    link: process.env.REACT_APP_CONTACTMAP, // Add google map link from here: https://www.embedgooglemap.net/
};
const favicon = document.querySelector("link[rel='icon']");
favicon.style.filter = "invert(1)";
