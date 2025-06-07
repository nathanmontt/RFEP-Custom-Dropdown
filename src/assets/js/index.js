// o valor do elemento que eu clicar vai virar o valor de dentro do elemento do select an item
'use strict'

const buttonContainer = document.querySelector('.button-container');
const dropdownOptions = document.getElementById('dropdown-options');

buttonContainer.addEventListener('click', () => {
    dropdownOptions.classList.toggle('hidden');
})

/*
<body>
    <div class="button-container">
        <button id="open-dropdown">Select an item</button>
        <img src="assets/img/down.png" alt="Dropdown Arrow" id="dropdown-arrow">
    </div>
    <div id="dropdown-options">
        <div class="holder-text-img">
            <p class="options">First Item</p>
        </div>
        <div class="holder-text-img">
            <p class="options">Second Item</p>
        </div>
        <div class="holder-text-img">
            <p class="options">Third Item</p>
        </div>
    </div>
</body>
*/