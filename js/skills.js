"use strict";

function showInfo(skillId) {
  var skillInfo = document.getElementById(skillId);

 
  if (skillInfo.style.display === "block") {
    skillInfo.style.display = "none";
  } else {
  
    var allSkills = document.querySelectorAll(".skill-info");
    allSkills.forEach(function (info) {
      info.style.display = "none";
    });


    skillInfo.style.display = "block";
  }
}
