import { faIcon } from "../scripts/faIcon.js";
import { getEvents } from "../scripts/getEvents.js";

export default function indexPage() {
    // set the title:
    document.title = "Kaylee Kares";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <div class="cta">
            <p class="text description">
                Kaylee Kares is a non-profit aiming to help suicide preventions organizations, 
                schools across the U.S., among other community programs - made in memory of Kaylee Paris,
                who tragically committed suicide on April 16, 2025.
            </p>
            <a href="/our-story"><button class="main">Learn More</button></a>
            <a href="/events"><button class="main">See Upcoming Events</button></a>
        </div>

        <div class="events">
            <h1>${faIcon("solid", "calendar").outerHTML} Events</h1>
            <p class="description">
                Sometimes, we may host events to raise awareness to our cause. Below will show you the
                closest one, but please click on the button below to see ones further in the future.
            </p>
            <div class="event">
                <!-- dynamically added -->   
            </div>
            <a href="/events"><button class="main">See Upcoming Events</button></a>
        </div>

        <div class="callToDonate">
            <h1>Consider Donating ${faIcon("solid", "coins").outerHTML}</h1>
            <div class="donations">
                <h1 class="amount">$0</h1>
                <p class="sub">raised - thanks to people like you!</p>
            </div>

            <p>If you're able, donations help us support suicide prevention organizations, schools, and other community programs.</p>
            <button class="donateBtn main">Donate</button>
        </div>
        <nav class="moreInfo" aria-label="Additional Information">
            <a href="/resources">Suicide Prevention Resources</a>
            ·
            <a href="/our-story">Our Story</a>
            ·
            <a href="/privacy">Privacy Policy</a>
            ·
            <a href="/refunds">Refund Policy</a>
        </nav>
    `;

    // get nearest event
    getEvents(true).then((event) => {
        const eventHtml = page.querySelector(".event");
        eventHtml.innerHTML = `
            ${faIcon("solid", "clock").outerHTML} <b>${event.time.string}</b>
                <p>
                    ${faIcon("solid", "comment").outerHTML} ${event.desc}
                </p>
                <p>
                    ${faIcon("solid", "location-dot").outerHTML} 
                    <a href="${event.address.googleMapsLink}" target="_blank">
                        ${event.address.string}
                    </a>
                </p>
                <a href="${event.time.googleCalendarLink}" 
                target="_blank">
                    <button class="secondary">Add to Google Calendar</button>
                </a>
        `;
    });

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}