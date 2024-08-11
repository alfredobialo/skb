import {Routes} from "@angular/router";

export const frontPageRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./company-pages/home-page.component").then(x => x.HomePageComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./company-pages/about-page.component").then(x => x.AboutPageComponent)
  },
  {
    path: "about/contact",
    loadComponent: () => import("./company-pages/contact-page.component").then(x => x.ContactPageComponent),
  },
  {
    path: "faq",
    loadComponent: () => import("./company-pages/faq-page.component").then(x => x.FaqPageComponent)
  },
  {
    path: "privacy",
    loadComponent: () => import("./company-pages/privacy-page.component").then(x => x.PrivacyPageComponent)
  },
  {
    path: "auth/login",
    data: {
      showAds : false
    },
    loadComponent: () => import("./auth/login-page.component").then(x => x.LoginPageComponent)
  }
];
