// Windows
const ua = navigator.userAgent;
const uad = navigator.userAgentData;
const isWindows = ua.includes("Windows");

// Chrome
const isChrome = uad.brands.some(b => b.brand === "Google Chrome");

if (isWindows && isChrome) {
    location.href = "microsoft-edge:" + window.location.origin; // redirect them to Edge or change the url to something.
}

// other browsers are not affected, only Chrome!
