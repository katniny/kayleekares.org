export default function refundsPage() {
    // set the title:
    document.title = "Refund Policy | Kaylee Kares";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <div class="cta">
            <h2>Privacy Policy</h2>
            <p class="text description">
                We take your privacy seriously. Here's what you need to know about how our website works:
                
                <br />
                <br />

                <h3>1. Information We Collect</h3>
                <ul>
                    <li>We <b>do not collect personal information</b> such as names, emails, or comments.</li>
                    <li>
                        The only data we track is <b>donation amounts</b> which are used to display total
                        contributions and help us support suicide prevention programs.
                    </li>
                </ul>

                <br />

                <h3>2. Third-Party Services</h3>
                <ul>
                    <li>
                        <a href="https://fonts.google.com">Google Fonts</a> - to display fonts. Google may collect 
                        information about your browser and device as part of providing their service.
                    </li>
                    <li>
                        <a href="https://stripe.com">Stripe</a> - for processing donations. Payment information is handled 
                        securely by Stripe; we do <b>not</b> see or store your credit card information.
                    </li>
                    <li>
                        <a href="https://fontawesome.com">FontAwesome</a> - to display icons.
                    </li>
                </ul>

                <br />

                <h3>3. Trackers & Analytics</h3>
                <ul>
                    <li>
                        We do <b>not use trackers or analytics</b> to monitor your activity.
                    </li>
                </ul>

                <br />

                <h3>4. Cookies</h3>
                <ul>
                    <li>
                        Our site uses <b>minimal cookies</b>, only as needed to support functionality (like displaying fonts).
                        No personal information is stored.
                    </li>
                </ul>

                <br />

                <h3>5. Security</h3>
                <ul>
                    <li>
                        We take reasonable steps to ensure our site is safe, but donations and payments are
                        processed through secure third-party services (Stripe).
                    </li>
                </ul>

                <br />

                <h3>6. Contact</h3>
                <ul>
                    <li>
                        If you have questions about privacy or your donation, you can contact us at contact@kayleekares.org.
                    </li>
                </ul>

                <br />

                Thank you for trusting us and supporting our mission - your privacy is important, and we respect it.
            </p>
            <br />
            <a href="/refunds"><button class="main">Refund Policy</button></a>
            <a href="/"><button class="main">Go Home</button></a>
        </div>
    `;

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}