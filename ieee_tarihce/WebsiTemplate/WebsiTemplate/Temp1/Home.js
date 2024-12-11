const toggle = document.getElementById("language-toggle");
        toggle.addEventListener("change", function() {
            document.body.classList.toggle("en-active", toggle.checked);
        });
        function showPopup() {
    document.getElementById("popupMenu").classList.add("show");
}

function hidePopup() {
    document.getElementById("popupMenu").classList.remove("show");
}