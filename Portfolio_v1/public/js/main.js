// Botão dropdown da versão mobile

document.body.addEventListener("click", function (event) {
    if (event.target.matches('.drop-btn') || event.target.matches('.drop-btn i')) {
        toggleDropdown();
    } else {
        // Fecha o dropdown se clicar fora dele
        let dropdowns = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
});

function toggleDropdown() {
    let dropdown = document.getElementsByClassName('dropdown-content')[0];

    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


// Links de navegação do header desktop e mobile

function addClickListenerAndNavigate(id, index) {
    document.getElementById(id).addEventListener('click', (e) => {
        e.preventDefault();
        $('#main-slider').carousel(index);
    });
}

addClickListenerAndNavigate('Ade-DEV', 0);
addClickListenerAndNavigate('format-a1', 0);
addClickListenerAndNavigate('format-a1-mob', 0);

addClickListenerAndNavigate('format-a2', 1);
addClickListenerAndNavigate('format-a2-mob', 1);

addClickListenerAndNavigate('format-a3', 2);
addClickListenerAndNavigate('format-a3-mob', 2);

addClickListenerAndNavigate('format-a4', 3);
addClickListenerAndNavigate('format-a4-mob', 3);
addClickListenerAndNavigate('contact-btn', 3);