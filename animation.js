let homeId = document.getElementById("home");
let animiationId = document.getElementById("animationId");

let animationContainer = document.createElement("div");
animationContainer.style.height = "100vh";
animationContainer.style.width = "100vw";
animationContainer.style.backgroundImage = 'url("https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/extras/2_LEAD_THE_GUARDIANS_OF_THE_GALAXY.gif?t=1700763034")';
animationContainer.style.backgroundPosition = "center";
animationContainer.style.backgroundSize = "cover";
animiationId.appendChild(animationContainer)

setTimeout(() => {
    animationContainer.classList.add("d-none");
    homeId.classList.remove("d-none");
}, 1600);
