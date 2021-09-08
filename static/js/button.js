    flagRu = document.getElementById('flag'); flagEn = 
    document.getElementById('flagEN');

function openNews() {
    if (flagRu.classList.contains("active")) {
        window.open('https://t.me/rentbots/2', '_blank');
    } 
    else {
      window.open('https://t.me/rentscontact/3', '_blank')  
    }
    ym(76318225,'reachGoal','mainButton');
};


var text = JSON.parse(document.getElementById('text').textContent);

function changeLanguage() {  
    underButtonText = document.getElementById('underButtonText');
    mainBut = document.getElementById('mainButton');  
    if ( mainBut.classList.contains('En')) {
        mainBut.textContent=text.buttonRu;
        underButtonText.textContent=text.underButtonTextRu;
    } else {
        mainBut.textContent=text.buttonEn;
        underButtonText.textContent=text.underButtonTextEn;
        }
    mainBut.classList.toggle("En");
    flagRu.classList.toggle("active");
    flagEn.classList.toggle("active");
}