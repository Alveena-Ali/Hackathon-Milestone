// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

// Collect input values
const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const contact = (document.getElementById('contact') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLInputElement).value;
const experience = (document.getElementById('experience') as HTMLInputElement).value;
const skills = (document.getElementById('skills') as HTMLInputElement).value;

// Handle Profile Picture
const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicFile = profilePicInput.files?.[0];

// Convert skills to list
const skillsArray = skills.split(',').map(skill => skill.trim());
const skillsHTML = skillsArray.map(skill => `<li>${skill}</li>`).join('');

const generateResumeHTML = (profilePicURL: string | null) => {
// Generate the resume content dynamically
const resumeHTML = `
<h1><center>Resume<center></h1>
<h2><center>Personal Information</center></h2>

<!-- Display Profile Picture only if provided -->
${profilePicURL 
    ? `<img src="${profilePicURL}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;">` 
    : ''}

<p><center><b>Name:</b> ${name}</center></p>
<p><center><b>Email:</b> ${email}</center></p>
<p><center><b>Contact:</b> ${contact}</center></p>

<h2><center>Education</center></h2>
<p><center>${education}</center></p>

<h2><center>Experience</center></h2>
<p><center>${experience}</center></p>

<h2><center>Skills</center></h2>
<ul><center>${skillsHTML}</center></ul>
`;

// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
};

// If profile picture is provided, read the file
if (profilePicFile) {
    const reader = new FileReader();
    reader.onload = function(event) {
       const profilePicURL = event.target?.result as string;
       generateResumeHTML(profilePicURL); // Call function to generate resume with image
    };
reader.readAsDataURL(profilePicFile);
} else {
        generateResumeHTML(null); // Call function to generate resume without image
    }
});
