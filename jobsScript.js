// Redirect to job details based on job ID
function viewJobDetails(jobId) {
  window.location.href = `job-details.html?id=${jobId}`;
}

// Open the application form on the job details page
function openApplicationForm() {
  document.getElementById("applicationForm").style.display = "block";
}
