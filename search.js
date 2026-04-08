
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchform");
    const searchInput = document.getElementById("test");
    const autocompleteList = document.getElementById("autocomplete-list");

    const pages = [
        { title: "Home", url: "index.html", keywords: ["home", "main", "index"] },
        { title: "Housing", url: "housing.html", keywords: ["housing", "shelter", "rent"] },
        { title: "Healthcare", url: "healthcare.html", keywords: ["healthcare", "health", "mental health", "doctor"] },
        { title: "Nutrition & Food", url: "Nutandf.html", keywords: ["nutrition", "food", "groceries", "meals"] },
        { title: "Sources", url: "https://docs.google.com/spreadsheets/d/1b5FhfnotcemgLK7dCAQRxkVwSd2-IhOX0XuyEbaYNf8/edit?usp=sharing", keywords: ["sources", "references"] },
        { title: "Story", url: "story.html", keywords: ["story"] },
        { title: "Research", url: "reser.html", keywords: ["research", "reser"] },
        { title: "References", url: "ref.html", keywords: ["references", "ref"] }
    ];

    let currentMatches = [];
    let currentFocus = -1;

    function closeSuggestions() {
        autocompleteList.innerHTML = "";
        autocompleteList.style.display = "none";
        currentMatches = [];
        currentFocus = -1;
    }

    function showSuggestions(matches) {
        autocompleteList.innerHTML = "";
        currentMatches = matches;
        currentFocus = -1;

        if (matches.length === 0) {
            closeSuggestions();
            return;
        }

        matches.forEach((page, index) => {
            const item = document.createElement("div");
            item.className = "autocomplete-item";
            item.textContent = page.title;

            item.addEventListener("click", function () {
                window.location.href = page.url;
            });

            autocompleteList.appendChild(item);
        });

        autocompleteList.style.display = "block";
    }

    function updateActive() {
        const items = autocompleteList.querySelectorAll(".autocomplete-item");
        items.forEach(item => item.classList.remove("active"));

        if (currentFocus >= 0 && currentFocus < items.length) {
            items[currentFocus].classList.add("active");
        }
    }

    function findMatches(query) {
        const lowerQuery = query.toLowerCase().trim();

        return pages.filter(page =>
            page.title.toLowerCase().includes(lowerQuery) ||
            page.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
        );
    }

    searchInput.addEventListener("input", function () {
        const query = this.value.trim();

        if (query === "") {
            closeSuggestions();
            return;
        }

        const matches = findMatches(query);
        showSuggestions(matches);
    });

    searchInput.addEventListener("keydown", function (e) {
        const items = autocompleteList.querySelectorAll(".autocomplete-item");

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (items.length === 0) return;
            currentFocus++;
            if (currentFocus >= items.length) currentFocus = 0;
            updateActive();
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (items.length === 0) return;
            currentFocus--;
            if (currentFocus < 0) currentFocus = items.length - 1;
            updateActive();
        }

        if (e.key === "Enter") {
            e.preventDefault();

            const query = searchInput.value.trim();
            if (query === "") return;

            if (currentFocus > -1 && currentMatches[currentFocus]) {
                window.location.href = currentMatches[currentFocus].url;
                return;
            }

            const matches = findMatches(query);

            if (matches.length > 0) {
                window.location.href = matches[0].url;
            } else {
                alert("No matching page found.");
            }
        }
    });

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const query = searchInput.value.trim();
        if (query === "") {
            alert("Please enter a search term.");
            return;
        }

        const matches = findMatches(query);

        if (matches.length > 0) {
            window.location.href = matches[0].url;
        } else {
            alert("No matching page found.");
        }
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".search")) {
            closeSuggestions();
        }
    });
});





