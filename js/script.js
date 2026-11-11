function init(){

    let entryButton = document.getElementById('entrybutton');
    let entryInput = document.getElementById('entryinput');
    let textOutput = document.getElementById('textoutput');

    entryButton.addEventListener('click', function() {
        let userInput = entryInput.value;

        
        alert("Jordan: " + userInput);

        
        textOutput.textContent = userInput;
    });
}

window.addEventListener('load', init);
