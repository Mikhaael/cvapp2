// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
  }
  
  // Function to show/hide the skills section based on a checkbox
  function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    var skillsCheckbox = document.getElementById('skills-checkbox');
  
    if (skillsCheckbox.checked) {
      skillsSection.style.display = 'block';
    } else {
      skillsSection.style.display = 'none';
    }
  }
  
  // Event listener for clicking on the "About Me" section header
  var aboutHeader = document.querySelector('.about h2');
  aboutHeader.addEventListener('click', function () {
    toggleSection('about');
  });
  
  // Event listener for clicking on the "Education" section header
  var educationHeader = document.querySelector('.education h2');
  educationHeader.addEventListener('click', function () {
    toggleSection('education');
  });
  
  // Event listener for clicking on the "Work Experience" section header
  var experienceHeader = document.querySelector('.experience h2');
  experienceHeader.addEventListener('click', function () {
    toggleSection('experience');
  });
  
  // Event listener for the skills checkbox
  var skillsCheckbox = document.getElementById('skills-checkbox');
  skillsCheckbox.addEventListener('change', function () {
    toggleSkills();
  });