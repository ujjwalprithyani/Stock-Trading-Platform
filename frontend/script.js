document.addEventListener("scroll", function() {
    var profileLink = document.querySelector(".profile-link");
    var navigation = document.querySelector(".navigation");

    if (window.scrollY > 50) {
        profileLink.style.display = "inline-block";
        navigation.style.justifyContent = "space-between";
    } else {
        profileLink.style.display = "none";
        navigation.style.justifyContent = "center";
    }
});
