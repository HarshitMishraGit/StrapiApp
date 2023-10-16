const config = {
  locales: [
  ],
  tutorials:false,
notifications:{release :false},
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "RamRaj Associates",
      "Auth.form.welcome.subtitle":"Log in to your account",
      "Auth.form.welcome.title": "Welcome to Ramraj Associates!",
      "app.components.HomePage.button.blog": "See more on the blog",
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
