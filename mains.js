const asciiArt = [
      "     '-.",
      "        '-. _____    ",
      " .-._      |     '.  ",
      ":  ..      |      :  ",
      "'-._+      |    .-' ",
      " /  \\     .'i--i     ",
      "/    \\ .-'_/____\\___ ",
      "    .-'  :       "
  ];

const asciiArtElement = document.getElementById("ascii-art");

function displayAsciiArtLineByLine(index) {
    if (index < asciiArt.length) {
        asciiArtElement.textContent += asciiArt[index] + "\n";
        setTimeout(() => {
            displayAsciiArtLineByLine(index + 1);
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayAsciiArtLineByLine(0);
});
