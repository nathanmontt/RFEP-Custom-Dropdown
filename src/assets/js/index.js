// o valor do elemento que eu clicar vai virar o valor de dentro do elemento do select an item
'use strict'

const buttonContainer = document.querySelector('.button-container');
const dropdownOptions = document.getElementById('dropdown-options');
const dropdownArrow = document.getElementById('dropdown-arrow');
const options = document.querySelectorAll('.options');
const openDropdown = document.getElementById('open-dropdown');

console.log(options)

buttonContainer.addEventListener('click', () => {
    if (dropdownOptions.classList.contains('hidden')) {
        dropdownOptions.classList.remove('hidden');
        dropdownArrow.src = "assets/img/up.png";
    } else {
        dropdownOptions.classList.add('hidden');
        dropdownArrow.src = "assets/img/down.png";
    }
});

for (let i=0 ; i<options.length ; i++) {
    options[i].addEventListener('click', () => {
        switch (options[i]) {
            case options[0]:
                try {
                    openDropdown.textContent = options[0].textContent;
                    dropdownOptions.classList.add('hidden');
                    dropdownArrow.src = "assets/img/down.png";
                    break;
                } catch (error) {
                    console.error(error)
                }

            case options[1]:
                openDropdown.textContent = options[1].textContent;
                dropdownOptions.classList.add('hidden');
                dropdownArrow.src = "assets/img/down.png";
                break;

            case options[2]:
                openDropdown.textContent = options[2].textContent;
                dropdownOptions.classList.add('hidden');
                dropdownArrow.src = "assets/img/down.png";
                break;

            default:
                break;
        }
    });
}

for (let k=0 ; k<options.length ; k++) {
    options[k].addEventListener('mouseover', () => {
        options[k].style.fontWeight = '700';
    });

    options[k].addEventListener('mouseleave', () => {
        options[k].style.fontWeight = 'normal';
    });
}