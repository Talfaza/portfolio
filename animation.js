
        const animationDiv = document.querySelector('.animation');
        const asciiArt = 
        `
             '--._
        .---.     '-..
        )''  \`'-      \`._
        )c  -'\\         \`.
      ,.|\_=/              -._       _.
    .' /   (                  ' ,----'|---.
    | |  \\  )\\                  |\`-.|     |
    |  \\ '_.__\`---,.____.       |   |     |
    | \`.= ..,_'\\..\\..L__//      |   |     |
    |         .'._   \`--'       |   |     |
    \\        .'-._\\_            '\`.,|     |
     \`       |    -.\`.  _,..,--- \`.-----.'
      \\_____,|\`-.   \\ \\            | |
      | |./| |./ \\  ,-.'            | |
      './  './   '...-'            |_._|
      
Welcome to my portfolio typ 'help' for a list of the supported commands.`;

        let lines = asciiArt.split('\n');
        let currentIndex = 0;
        let interval;

        function printLine() {
            animationDiv.textContent += lines[currentIndex] + '\n';
            currentIndex++;
            if (currentIndex >= lines.length) {
                clearInterval(interval);
            }
        }

        interval = setInterval(printLine, 100); 