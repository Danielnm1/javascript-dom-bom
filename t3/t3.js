const target = document.querySelector('#target');

// 1. Get browser name and major version
const userAgent = navigator.userAgent;
let browserInfo;

if (userAgent.includes("Edg/")) {
  const majorVersion = userAgent.split("Edg/")[1].split(".")[0];
  browserInfo = `Microsoft Edge, ${majorVersion}`;
} else if (userAgent.includes("Chrome/")) {
  const majorVersion = userAgent.split("Chrome/")[1].split(".")[0];
  browserInfo = `Google Chrome, ${majorVersion}`;
} else if (userAgent.includes("Firefox/")) {
  const majorVersion = userAgent.split("Firefox/")[1].split(".")[0];
  browserInfo = `Mozilla Firefox, ${majorVersion}`;
} else if (userAgent.includes("Safari/") && userAgent.includes("Version/")) {
  const majorVersion = userAgent.split("Version/")[1].split(".")[0];
  browserInfo = `Safari, ${majorVersion}`;
} else {
  browserInfo = "Unknown browser";
}

// 2. Get clean operating system name
let operatingSystemInformation = "Unknown OS";

if (userAgent.includes("Android")) {
  operatingSystemInformation = "Android";
} else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
  operatingSystemInformation = "iOS";
} else if (userAgent.includes("Win")) {
  operatingSystemInformation = "Windows";
} else if (userAgent.includes("Mac")) {
  operatingSystemInformation = "macOS";
} else if (userAgent.includes("Linux")) {
  operatingSystemInformation = "Linux";
}
// 3. get screen width and height 

const screenWidth = screen.width;
const screenHeight = screen.height;

// 4. get available screen width and height

const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;

// 5. get current date

const currentDate = new Date();

// format the date in Finnish

const formattedDate = currentDate.toLocaleDateString("fi-FI",{day:"numeric",month : "long",year:"numeric",});

// 6. get current time (hours and minutes)

const formattedTime = currentDate.toLocaleTimeString("fi-FI",{hour:"2-digit",minute:"2-digit",});

// display the information on the page

target.innerHTML = `
    <p>Browser information: ${browserInfo}</p>
    <p>Operating system:${operatingSystemInformation}</p>
    <p>Screen resolution:${screenWidth} x ${screenHeight}</p>
    <p>Available screen space:${availableWidth} x ${availableHeight}</p>
    <p>Current date:${formattedDate}</p>
    <p>Current Time:${formattedTime}</p>
    `;





