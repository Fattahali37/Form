function submitApplication() {
    if (validateForm()) {
        alert("Form submitted successfully!");
        const formData = gatherFormData();
        console.log("Form data submitted:", formData);
    }
}

function validateForm() {
    resetValidationMessages();
    let isValid = true;

    isValid = validateField("firstName", "Please enter your full name.") && isValid;
    isValid = validateField("lastName", "Please enter your last name.") && isValid;
    isValid = validatePhoneNumber("phone") && isValid;
    isValid = validateEmail("email") && isValid;
    isValid = validateField("street", "Please enter your street.") && isValid;
    isValid = validateField("city", "Please enter your city.") && isValid;
    isValid = validateField("state", "Please enter your state.") && isValid;
    isValid = validateZipCode("zip") && isValid;

    isValid = validateFile("resume", "Please upload a valid resume (PDF, DOC, DOCX).") && isValid;
    isValid = validateField("coverLetter", "Please enter your cover letter.") && isValid;

    isValid = validateField("schoolName", "Please enter the name of the school/university.") && isValid;
    isValid = validateField("major", "Please enter your major/area of study.") && isValid;
    isValid = validateField("graduationYear", "Please enter a valid graduation year.") && isValid;

    isValid = validateField("previousJobTitles", "Please enter your previous job titles.") && isValid;
    isValid = validateField("companyNames", "Please enter your previous company names.") && isValid;
    isValid = validateField("employmentDates", "Please enter your employment dates.") && isValid;
    isValid = validateField("jobResponsibilities", "Please enter your job responsibilities.") && isValid;

    isValid = validateField("relevantSkills", "Please enter your relevant skills.") && isValid;
    isValid = validateField("certifications", "Please enter your certifications.") && isValid;

    isValid = validateField("startDate", "Please select a start date.") && isValid;
    isValid = validateField("preferredSchedule", "Please enter your preferred work schedule.") && isValid;

    isValid = validateField("referenceName", "Please enter your reference name.") && isValid;
    isValid = validateField("referenceContact", "Please enter your reference contact information.") && isValid;
    isValid = validateField("relationship", "Please enter your relationship to the applicant.") && isValid;

    isValid = validateField("whyWork", "Please answer why you want to work for this company.") && isValid;

    isValid = validateCheckbox("termsCheckbox", "Please agree to the terms and conditions.") && isValid;
    isValid = validateCheckbox("privacyCheckbox", "Please acknowledge the privacy policy.") && isValid;

    return isValid;
}

function validateField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
        displayValidationMessage(field, errorMessage);
        return false;
    }
    return true;
}

function validatePhoneNumber(fieldId) {
    const phoneField = document.getElementById(fieldId);
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phoneField.value.trim())) {
        displayValidationMessage(phoneField, "Please enter a valid phone number with 11 digits.");
        return false;
    }
    return true;
}

function validateEmail(fieldId) {
    const emailField = document.getElementById(fieldId);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        displayValidationMessage(emailField, "Please enter a valid email address.");
        return false;
    }
    return true;
}

function validateZipCode(fieldId) {
    const zipField = document.getElementById(fieldId);
    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zipField.value.trim())) {
        displayValidationMessage(zipField, "Please enter a valid ZIP code.");
        return false;
    }
    return true;
}

function validateFile(fieldId, errorMessage) {
    const fileField = document.getElementById(fieldId);
    if (!fileField.files.length || !isValidFileExtension(fileField.files[0].name)) {
        displayValidationMessage(fileField, errorMessage);
        return false;
    }
    return true;
}

function isValidFileExtension(fileName) {
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExtension = fileName.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
}

function validateCheckbox(checkboxId, errorMessage) {
    const checkbox = document.getElementById(checkboxId);
    if (!checkbox.checked) {
        displayValidationMessage(checkbox, errorMessage);
        return false;
    }
    return true;
}

function displayValidationMessage(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function resetValidationMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.parentNode.removeChild(message));
}

function gatherFormData() {
    const formData = {};

    formData.fullName = document.getElementById("firstName").value.trim() + " " +
                        document.getElementById("lastName").value.trim();
    formData.phoneNumber = document.getElementById("phone").value.trim();
    formData.email = document.getElementById("email").value.trim();
    formData.street = document.getElementById("street").value.trim();
    formData.city = document.getElementById("city").value.trim();
    formData.state = document.getElementById("state").value.trim();
    formData.zipCode = document.getElementById("zip").value.trim();

    formData.resume = document.getElementById("resume").value.trim();
    formData.coverLetter = document.getElementById("coverLetter").value.trim();

    formData.educationLevel = document.getElementById("educationLevel").value;
    formData.schoolName = document.getElementById("schoolName").value.trim();
    formData.major = document.getElementById("major").value.trim();
    formData.graduationYear = document.getElementById("graduationYear").value.trim();

    formData.previousJobTitles = document.getElementById("previousJobTitles").value.trim();
    formData.companyNames = document.getElementById("companyNames").value.trim();
    formData.employmentDates = document.getElementById("employmentDates").value.trim();
    formData.jobResponsibilities = document.getElementById("jobResponsibilities").value.trim();

    formData.relevantSkills = document.getElementById("relevantSkills").value.trim();
    formData.certifications = document.getElementById("certifications").value.trim();

    formData.startDate = document.getElementById("startDate").value.trim();
    formData.preferredSchedule = document.getElementById("preferredSchedule").value.trim();
    formData.willingToRelocate = document.getElementById("willingToRelocate").value;

    formData.referenceName = document.getElementById("referenceName").value.trim();
    formData.referenceContact = document.getElementById("referenceContact").value.trim();
    formData.relationship = document.getElementById("relationship").value.trim();

    formData.whyWork = document.getElementById("whyWork").value.trim();

    formData.agreeToTerms = document.getElementById("termsCheckbox").checked;
    formData.acknowledgePrivacy = document.getElementById("privacyCheckbox").checked;

    return formData;
}
