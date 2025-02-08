let noClickCount = 0;

function handleYesClick() {
    alert("Yeayy! Thanks! I love youu, mas! 💖💝");
}

function handleNoClick() {
    noClickCount++;
    let question = document.getElementById("question");
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");

    if (noClickCount == 1) {
        question.innerText = "beneran nii? 🤔";
    } else if (noClickCount == 2) {
        question.innerText = "eh beneran gamau?? 😕";
    } else if (noClickCount == 3) {
        question.innerText = "udahlaa pencet yes ajaa";
    } else {
        question.innerText = "YAY! gabisa pencet noo, wlee 😝💘";
        noButton.innerText = "Yes";
        noButton.onclick = handleYesClick; // Tombol No berubah fungsi jadi Yes
    }

    yesButton.style.fontSize = (20 + noClickCount * 5) + "px";
}