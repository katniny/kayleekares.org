import { faIcon } from "../scripts/faIcon.js";
import { getEvents } from "../scripts/getEvents.js";

export default function eventsPage() {
    // set the title:
    document.title = "Events | Kaylee Kares";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <div class="attendEvents">
            <h2>All Our Upcoming Events</h2>
            <div class="events">
                <!-- dynamically added -->
            </div>

            <p>...and hopefully more to come!</p>
            <a href="/">Go Home</a>
        </div>
    `;

    // get events
    getEvents().then((events) => {
        for (const event of events) {
            console.log(event);

            // create element
            const eventEl = document.createElement("div");
            eventEl.className = "event";
            eventEl.innerHTML = `
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

            // add to page
            const events = page.querySelector(".events");
            events.appendChild(eventEl);
        }
    });

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}