function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const propertyType = document.getElementById("propertyType").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const bathrooms = document.getElementById("bathrooms").value;
    const priceRange = document.getElementById("priceRange").value;

    if (!firstName || !lastName || !phone || !email || !propertyType || !bedrooms || !bathrooms || !priceRange) {
        alert("All fields are mandatory. Please fill in all the required fields.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email should include '@' and '.' characters.");
        return false;
    }

    alert("Registered Successfully.");
    return true;
}

function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("propertyType").value = "";
    document.getElementById("bedrooms").value = "";
    document.getElementById("bathrooms").value = "";
    document.getElementById("priceRange").value = "";
    document.getElementById("comments").value = "";
}
