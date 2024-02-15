<?php 

function help(){
      
      $help = array(
            "whoami",
            "whois",
            "socials",
            "projects",
            "help",
            
      );

      for ($i=0; $i < count($help) ; $i++) { 
            echo $help[$i] . '<br />';
      }
            
}


function whoami(){echo $whoami = "visitor <br>";}
function socials(){
      $socials = array(
            "LinkedIn" => "https://www.linkedin.com/in/yahia-charif-4aab4a29a/",
            "GitHub" => "https://github.com/Talfaza"
        );

        foreach ($socials as $website => $link) {
            echo "$website : <a href='$link' target='_blank'>$link</a> <br />";
            
        }
}
help();
whoami();
socials();



