
/**Preloader JavaScript from https://codepen.io/AlinEnache/pen/BaowaBy  */
window.addEventListener('load',function(){
   document.querySelector('body').classList.add("loaded")  
});

window.onload = function(){
    
   /**Sets the value for whether the page is in dark mode or not and also sets up a CTA event on the dark switch */
   let darkswitch = document.getElementById("darkinput");
   let darkmode = 0;
   darkswitch.addEventListener("click", darkfunction);

   /**Sets up CTA events on the contact page  */
   if (window.location.pathname == '/contact.html') {
      let email = document.getElementById("submit");
      email.addEventListener("click", mailme);
   }
   /**Sets up the info buttons on the cv page */
   if (window.location.pathname == '/cv.html') {
      let about = document.getElementById("aboutbutton");
      let lang = document.getElementById("langbutton");
      let work = document.getElementById("workbutton");
      
      about.addEventListener("click", displayabout);
      lang.addEventListener("click", displaylang);
      work.addEventListener("click", displaywork);
   }
   /**Replaces the text inside the card on the cv page with the about text */
   function displayabout(){
      document.getElementById("resumeinfotitle").innerHTML = "More About Me";
      document.getElementById("resumeinfo").innerHTML = "I am a Junior Software Engineer / Web Developer studying at the University of Northampton. I have over 4 years of experience in the computer science field and with programming languages and am looking to build onto that experience with new programming skills. I am also an amateur designer, working on different 3D projects and website designs in my free time. My interests include programming, electronics / engineering, design, photography, and playing different instruments.";
   }
   /**Replaces the text inside the card on the cv page with the experience text */
   function displaylang(){
      document.getElementById("resumeinfotitle").innerHTML = "Programming Experience";
      document.getElementById("resumeinfo").innerHTML = "I have programming experience in a variety of mainstream programming languages including HTML, JavaScript, CSS, Java, Python, and SQL. For JavaScript, and Java I have just over a year of experience in, and I am looking to further develop these skills. Meanwhile I have around 4 years of experience using Python and various libraries it comes with, mainly focused on creating small game projects.";
   }
   /**Replaces the text inside the card on the cv page with the work text */
   function displaywork(){
      document.getElementById("resumeinfotitle").innerHTML = "My Work";
      document.getElementById("resumeinfo").innerHTML = "I am currently working for Web Alliance in Northampton, as part of a team creating bespoke software for a variety of businesses throughout the midlands. In addition to this, I also work on small individual projects for myself and others who have requested my services.";
   }

   /**Function used to open and fill out an email with the details the user has entered */
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
   
   /** Start of dark mode function */

   /**Function which selects elements which need to be inverted on a page and inverts them.*/
   function darkfunction(){
      console.log(darkmode)
      /**Turns dark mode on */
      if(darkmode === 0){
         darkmode = 1;
         /**Switches elements found on all pages to dark mode */
         document.getElementById("title").style.color="rgb(255,255,255)";
         document.getElementById("subtitle").style.color="rgb(255,255,255)";
         document.getElementById("topnav").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("footer").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("dropdownMenuButton").style.color="rgb(255,255,255)";
         document.getElementById("body").style.backgroundColor="rgb(25,25,25)";
         document.getElementById("maingrid").style.background= "rgb(55,55,55) url(https://subtlepatterns.com/patterns/prism.png) repeat 0 0";
        
         /**Switches elements which are only found on the contact page to dark mode */
         if (window.location.pathname == '/contact.html') {
            document.getElementById("submit").style.backgroundColor="rgb(255,255,255)";
            document.getElementById("submit").style.color="rgb(55,55,55)";
         }

         /**Switches elements which are only found on the cv page to dark mode */
         if (window.location.pathname == '/cv.html') {
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
         /**Switches elements which are only found on the portfolio page to dark mode */
         if (window.location.pathname == '/portfolio.html') {
            document.getElementById("dark").classList.remove("text-white");
            document.getElementById("dark").classList.remove("bg-dark");
            document.getElementById("dark").classList.add("bg-light");
         }
      }

      /**Turns dark mode off */
      else{
         darkmode = 0;
         /**Switches elements found on all pages bakc to light mode */
         document.getElementById("title").style.color="rgb(55,55,55)";
         document.getElementById("subtitle").style.color="rgb(55,55,55)";
         document.getElementById("topnav").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("footer").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("dropdownMenuButton").style.color="rgb(55,55,55)";
         document.getElementById("body").style.backgroundColor="rgb(55,55,55)";
         document.getElementById("maingrid").style.background= "rgb(55,55,55) url(https://subtlepatterns.com/patterns/webb.png) repeat 0 0";
         /**Switches elements which are only found on the contact page back to light mode */
         if (window.location.pathname == '/contact.html') {
            document.getElementById("submit").style.backgroundColor="rgb(55,55,55)";
            document.getElementById("submit").style.color="rgb(255,255,255)";
         }
         /**Switches elements which are only found on the cv page back to light mode */
         if (window.location.pathname == '/cv.html') {
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
         /**Switches elements which are only found on the portfolio page back to light mode */
         if (window.location.pathname == '/portfolio.html') {
            document.getElementById("card").classList.remove("bg-light");
            document.getElementById("card").classList.add("text-white");
            document.getElementById("card").classList.add("bg-dark");
         }
      }
      
   }
   /** End of dark mode function */


   
}

