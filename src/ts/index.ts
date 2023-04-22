import AppComponent from "./components/AppComponent/AppComponent.js";

const appElement = document.querySelector(".app");

if (appElement) {
  new AppComponent(appElement);
}
