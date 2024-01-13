document.body.addEventListener("click", function(event) {
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
    console.log(dropdown);
    if (dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}