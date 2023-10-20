const config = {
  locales: [],
  tutorials:false,
  notifications:{releases :false},
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "RamRaj Associates",
      "Auth.form.welcome.subtitle":"Log in to your account",
      "Auth.form.welcome.title": "Welcome to Ramraj Associates!",
      "app.components.HomePage.button.blog": "See more on the blog",
      "app.components.HomePage.welcomeBlock.content.again": "Welcome to Ramraj Associates! Customize your content in the admin panel.",
      "Auth.form.register.subtitle": "Enter Your Credentials!",
      "HomePage.helmet.title": "Homepage",
      "Auth.form.register.news.label":" ",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
