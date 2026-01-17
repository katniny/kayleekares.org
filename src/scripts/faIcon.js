export function faIcon(set, icon) {
    // if no set or icon, throw error
    if (!set)
        throw new Error("No set has been specified in this call.");
    if (!icon)
        throw new Error("No icon has been specified in this call.");

    // else, return icon
    const iconHtml = document.createElement("i");
    iconHtml.classList.add(`fa-${set}`);
    iconHtml.classList.add(`fa-${icon}`);
    return iconHtml;
}