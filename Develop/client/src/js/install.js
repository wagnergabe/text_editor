const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
    butInstall.style.visibility = "visible";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const Prompt_Event = window.deferredPrompt;
    if(!Prompt_Event){
        return;
    }
    Prompt_Event.prompt();
    window.deferredPrompt = null;
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
