export default function refundsPage() {
    // set the title:
    document.title = "Refund Policy | Kaylee Kares";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <div class="cta">
            <h2>Refund Policy</h2>
            <p class="text description">
                At our organization, we aim to provide a positive experience for everyone who
                supports our cause. Because donations go directly toward funding suicide prevention
                programs, educational initiatives, and community support, 
                <b>all donations are final and non-refundable.</b>
                
                <br />
                <br />

                We understand that circumstances change. If you have made a donation in error or have questions
                about your contribution, please reach out to us at support@kayleekares.org. While we cannot
                issue refunds, we are happy to discuss alternative ways your donation can be used or recognized,
                among other ways to donate.

                <br />
                <br />

                Thank you for your understanding and for helping us make a meaningful impact. Every contribution,
                large or small, helps us those in need.
            </p>
            <a href="/privacy"><button class="main">Privacy Policy</button></a>
            <a href="/"><button class="main">Go Home</button></a>
        </div>
    `;

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}