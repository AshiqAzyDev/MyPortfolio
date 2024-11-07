// Personal information start

const calculateExperienceYears = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const userData = {
  firstName: "<Ashique",
  lastName: " P Raj/>",
  title: "About Me",
  img: "/ash (2).jpg", 
  description: `Hello! 👋 I'm Ashique P Raj, an experienced Full Stack Developer with over ${calculateExperienceYears(2020)} years in building dynamic, high-performance applications. My expertise lies in PHP frameworks like Laravel and CodeIgniter, where I specialize in developing customized Shopify apps, ERP systems, and multi-tenant solutions. I am passionate about creating scalable, efficient solutions and am constantly exploring advancements in cloud platforms, API integrations, and SEO. In addition to my tech skills, I thrive in collaborative environments, always ready to tackle complex problems. Let’s connect and innovate together! 🚀`,
};

// Personal information end

const information = { userData };

export default information;
