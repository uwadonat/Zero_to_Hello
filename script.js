function openHeading(evt, headingName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(headingName).style.display = "block";
  evt.currentTarget.className += "active";
}

// define an object to save Topics, description and solution

let subjects = [
  {
    Name: "Loadrunner",
    Description: "What is loadrunner?",
    Solution:
      "LoadRunner is a software testing tool from Micro Focus. It is used to test applications, measuring system behaviour and performance under load. LoadRunner can simulate thousands of users concurrently using application software, recording and later analyzing the performance of key components of the application.",
  },
  {
    Name: "Software developer",
    Description: "What is software developer",
    Solution:
      "A software developer is a professional who is responsible for designing and building computer programs.",
  },
];

for (let i = 0; i < subjects.length; i++) {
  document.getElementById("title").innerHTML += `<div>
  <h3 id="${i}">${subjects[i].Name}</h3>
  <p> ${subjects[i].Description} </p>
  <div> ${subjects[i].Solution} </div>
  <hr>
  </div>`;
}
