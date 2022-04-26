import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import {
  renderText, adjustForMissingHash, loadTemplate, renderTemplate, setActiveLink
} from "./utils.js"



window.addEventListener("load", async () => {
  const router = new Navigo("/", { hash: true });
  const templateHome = await loadTemplate("./pages/home/home.html")
  //Load future templates here
  
  adjustForMissingHash()
  router
    .hooks({
      before(done, match) {
        setActiveLink("topnav", match.url)
        done()
      }
    })
    .on("/", () => renderTemplate(templateHome, "content"))
    .notFound(() => renderText("No page for this route found", "content"))
    .resolve()
});


window.onerror = (e) => alert(e)