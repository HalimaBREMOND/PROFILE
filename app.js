
     function show(id)
      {       
            document.getElementById(id).style.display = "block";
            if(id == 'home'){hide('skills'); hide('exp'); hide('education')}
            else if(id == 'skills'){hide('home'); hide('exp'); hide('education')}
            else if(id == 'exp'){hide('home'); hide('skills'); hide('education')}
            else{hide('home'); hide('skills'); hide('exp')}    
      }


    function hide(id)
    {
      document.getElementById(id).style.display = "none"; 
    }