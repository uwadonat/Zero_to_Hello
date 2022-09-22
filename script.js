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
    Name: "Kwizera Imana",
    Description: "Kwizera Imana bisobanura iki ?",
    Solution:
      "Ni iyihe migisha Imana yadusezeranyije? Ni iki kikwemeza ko ibyo Ijambo ry’Imana rivuga ari ukuri? Mu bice bikurikira turasuzuma bimwe mu bintu Imana yadusezeranyije n’impamvu twizera ko izabiduha. Nanone turareba icyo twakora kugira ngo tuzabibone.",
  },
  {
    Name: "Umugisha uva ku Mana",
    Description: "Wakora iki ngo Imana iguhe imigisha?",
    Solution:
      "Ni iyihe migisha Imana yadusezeranyije? Ni iki kikwemeza ko ibyo Ijambo ry’Imana rivuga ari ukuri? Mu bice bikurikira turasuzuma bimwe mu bintu Imana yadusezeranyije n’impamvu twizera ko izabiduha. Nanone turareba icyo twakora kugira ngo tuzabibone",
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
