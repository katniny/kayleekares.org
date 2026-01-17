import { handleRoute, navigate } from "./router.js";
import { loadFontAwesome } from "./scripts/fontAwesomeLoad.js";

// handle the current route
handleRoute();

// load font awesome
loadFontAwesome();

// you can add any startup function here,
// e.g., appending a sidebar!

// make global navigation available
window.$nav = navigate;