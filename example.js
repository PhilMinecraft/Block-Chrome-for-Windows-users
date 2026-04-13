// Windows
const uad = navigator.userAgentData;
const isWindows = navigator.platform.startsWith("Win");

// Chrome
const isChrome = uad.brands.some(b => b.brand === "Google Chrome");

if (isWindows && isChrome) {
    location.href = "microsoft-edge:" + window.location.origin; // redirect them to Edge or change the URL to something, but I'd suggest you to redirect them
}                                                               // to same URL but in different browser (or Edge since it is pre-installed on most Windows),
                                                                // that way, users won't hurt.
// other browsers are not affected, only Chrome!
