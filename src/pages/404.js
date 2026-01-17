import { faIcon } from "../scripts/faIcon.js";

export default function fourOhFourPage() {
    // set the title:
    document.title = "404 | Kaylee Kares";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <div class="cta">
            <p>This page doesn't exist. It may be a typo, lost to time, or never existed.</p>
            <a href="/">Go Home</a>
        </div>
    `;

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}