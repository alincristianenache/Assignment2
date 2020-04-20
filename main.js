window.onload = function(){

   let darkswitch = document.getElementById("darkinput");
   let darkmode = 0;
   darkswitch.addEventListener("click", darkfunction);

   if (window.location.pathname == '/contact.html') {
      let email = document.getElementById("submit");
      email.addEventListener("click", mailme);
   }

   if (window.location.pathname == '/resume.html') {
      let about = document.getElementById("aboutbutton");
      let lang = document.getElementById("langbutton");
      let work = document.getElementById("workbutton");
      
      about.addEventListener("click", displayabout);
      lang.addEventListener("click", displaylang);
      work.addEventListener("click", displaywork);
   }

   function displayabout(){
      document.getElementById("resumeinfotitle").innerHTML = "More About Me";
      document.getElementById("resumeinfo").innerHTML = "I am a Junior Software Engineer / Web Developer studying at the University of Northampton with over 4 years of coding experience.";
   }

   function displaylang(){
      document.getElementById("resumeinfotitle").innerHTML = "Programming Experience";
      document.getElementById("resumeinfo").innerHTML = "I have programming experience in Java, HTML, JavaScript, SQL, and Python as well has knowledge of various libraries in these languages";
   }

   function displaywork(){
      document.getElementById("resumeinfotitle").innerHTML = "My Work";
      document.getElementById("resumeinfo").innerHTML = "I am currently working with Web Alliance in Northampton in order to create bespoke software for various businesses as well as working on independent projects";
   }
   
   function darkfunction(){
      console.log(darkmode)
      if(darkmode === 0){
         darkmode = 1;
         document.getElementById("title").style.color="rgb(255,255,255)";
         document.getElementById("subtitle").style.color="rgb(255,255,255)";
         document.getElementById("topnav").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("footer").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("dropdownMenuButton").style.color="rgb(255,255,255)";
         document.getElementById("body").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("maingrid").style.background= "rgb(55,55,55) url(https://subtlepatterns.com/patterns/prism.png) repeat 0 0";
        
         if (window.location.pathname == '/contact.html') {
            document.getElementById("submit").style.backgroundColor="rgb(255,255,255)";
            document.getElementById("submit").style.color="rgb(55,55,55)";
         }

         if (window.location.pathname == '/resume.html') {
            document.getElementById("langtitle").style.color="rgb(255,255,255)";
            document.getElementById("langtext").style.color="rgb(255,255,255)";
            document.getElementById("worktitle").style.color="rgb(255,255,255)";
            document.getElementById("worktext").style.color="rgb(255,255,255)";

            document.getElementById("aboutbutton").style.backgroundColor="rgb(255,255,255)";
            document.getElementById("aboutbutton").style.color="rgb(55,55,55)";
            document.getElementById("langbutton").style.backgroundColor="rgb(255,255,255)";
            document.getElementById("langbutton").style.color="rgb(55,55,55)";
            document.getElementById("workbutton").style.backgroundColor="rgb(255,255,255)";
            document.getElementById("workbutton").style.color="rgb(55,55,55)";
            
            document.getElementById("infocard").classList.remove("text-white");
            document.getElementById("infocard").classList.remove("bg-dark");
            document.getElementById("infocard").classList.add("bg-light");
         }

         if (window.location.pathname == '/portfolio.html') {
            document.getElementById("dark").classList.remove("text-white");
            document.getElementById("dark").classList.remove("bg-dark");
            document.getElementById("dark").classList.add("bg-light");
         }
      }
      else{
         darkmode = 0;
         document.getElementById("title").style.color="rgb(55,55,55)";
         document.getElementById("subtitle").style.color="rgb(55,55,55)";
         document.getElementById("topnav").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("footer").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("dropdownMenuButton").style.color="rgb(55,55,55)";
         document.getElementById("body").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("maingrid").style.background= "rgb(55,55,55) url(https://subtlepatterns.com/patterns/webb.png) repeat 0 0";
        
         if (window.location.pathname == '/contact.html') {
            document.getElementById("submit").style.backgroundColor="rgb(55,55,55)";
            document.getElementById("submit").style.color="rgb(255,255,255)";
         }

         if (window.location.pathname == '/resume.html') {
            document.getElementById("langtitle").style.color="rgb(55,55,55)";
            document.getElementById("langtext").style.color="rgb(55,55,55)";
            document.getElementById("worktitle").style.color="rgb(55,55,55)";
            document.getElementById("worktext").style.color="rgb(55,55,55)";

            document.getElementById("aboutbutton").style.backgroundColor="rgb(55,55,55)";
            document.getElementById("aboutbutton").style.color="rgb(255,255,255)";
            document.getElementById("langbutton").style.backgroundColor="rgb(55,55,55)";
            document.getElementById("langbutton").style.color="rgb(255,255,255)";
            document.getElementById("workbutton").style.backgroundColor="rgb(55,55,55)";
            document.getElementById("workbutton").style.color="rgb(255,255,255)";
            
            document.getElementById("infocard").classList.remove("bg-light");
            document.getElementById("infocard").classList.add("text-white");
            document.getElementById("infocard").classList.add("bg-dark");
         }

         if (window.location.pathname == '/portfolio.html') {
            document.getElementById("card").classList.remove("bg-light");
            document.getElementById("card").classList.add("text-white");
            document.getElementById("card").classList.add("bg-dark");
         }
      }
      
   }

   function mailme(){
      let firstname = document.getElementById("fname").value;
      let lastname = document.getElementById("lname").value;
      let mailaddress = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      console.log(firstname)
      console.log(lastname)
      console.log(mailaddress)
      console.log(message)

      window.open('mailto:alin.enache2001@gmail.com?subject='+firstname +' '+ lastname+'&body='+ message);

   }
   
}

