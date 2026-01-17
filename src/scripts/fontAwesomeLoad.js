export function loadFontAwesome() {
    const faId = import.meta.env.VITE_FONT_AWESOME_ID;

    // no font awesome id
    if (!faId) {
        console.error("No Font Awesome ID has been specified, please specify one in the .env file.");
        return;
    }

    // else, load
    const script = document.createElement("script");
    script.src = `https://kit.fontawesome.com/${faId}.js`;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}