// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle Profile Picture
    var profilePicInput = document.getElementById('profile-pic');
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    // Convert skills to list
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    var skillsHTML = skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    var generateResumeHTML = function (profilePicURL) {
        // Generate the resume content dynamically
        var resumeHTML = "\n<h1><center>Resume<center></h1>\n<h2><center>Personal Information</center></h2>\n\n<!-- Display Profile Picture only if provided -->\n".concat(profilePicURL
            ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%;\">")
            : '', "\n\n<p><center><b>Name:</b> ").concat(name, "</center></p>\n<p><center><b>Email:</b> ").concat(email, "</center></p>\n<p><center><b>Contact:</b> ").concat(contact, "</center></p>\n\n<h2><center>Education</center></h2>\n<p><center>").concat(education, "</center></p>\n\n<h2><center>Experience</center></h2>\n<p><center>").concat(experience, "</center></p>\n\n<h2><center>Skills</center></h2>\n<ul><center>").concat(skillsHTML, "</center></ul>\n");
        // Display the generated resume
        resumeDisplayElement.innerHTML = resumeHTML;
    };
    // If profile picture is provided, read the file
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var profilePicURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            generateResumeHTML(profilePicURL); // Call function to generate resume with image
        };
        reader.readAsDataURL(profilePicFile);
    }
    else {
        generateResumeHTML(null); // Call function to generate resume without image
    }
});
