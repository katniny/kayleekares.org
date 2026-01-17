export async function getEvents(nearestOnly = false) {
    try {
        const res = await fetch("/events.jsonc");
        let text = await res.text();

        // safe comment removal for JSONC
        // removes // comments only at line start or after whitespace
        text = text.replace(/^\s*\/\/.*$/gm, "");

        // remove trailing commas before closing braces/brackets
        text = text.replace(/,(\s*[}\]])/g, "$1");

        // parse json
        const events = JSON.parse(text);

        // convert to array with keys
        const eventEntries = Object.entries(events).map(([key, value]) => ({
            key,
            ...value
        }));

        if (nearestOnly) return eventEntries[0] || null;
        return eventEntries;
    } catch (err) {
        console.error(`Error loading events: ${err}`);
        return nearestOnly ? null : [];
    }
}