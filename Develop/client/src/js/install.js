const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
    butInstall.style.visibility = "visible";
});


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


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

//code source module 19.5.4, https://www.amitmerchant.com/adding-custom-install-button-in-progressive-web-apps/
//