// Diary entries
const diaryEntries = [
    { 
        date: "2024-12-25", 
        redirectPage: "birthday/index.html" // 
         
    },
    { 
        date: "2024-12-26", 
        title: "Christmas Day", 
        content: "Celebrated with family and friends. It was a joyful day!"
    },
    { 
        date: "2024-12-26", 
        title: "Boxing Day", 
        content: "Relaxed and enjoyed leftovers from Christmas dinner." 
    }
];

const diaryList = document.querySelector('.diary-list');
const entryDiv = document.getElementById('entry');
const entryTitle = document.getElementById('entry-title');
const entryContent = document.getElementById('entry-content');

// Function to format date as date-month-year
function formatDate(dateStr) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [year, month, day] = dateStr.split("-");
    return `${day}-${months[parseInt(month, 10) - 1]}-${year}`;
}

// Populate the list of dates
diaryEntries.forEach((entry) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = formatDate(entry.date);
    link.href = "#"; // Default, modified by event listener

    // Add click event
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        if (entry.redirectPage) {
            // Redirect to external page if redirectPage is specified
            window.location.href = entry.redirectPage;
        } else if (entry.content && entry.title) {
            // Show entry directly if title and content are available
            entryDiv.classList.remove('hidden');
            entryTitle.textContent = entry.title;
            entryContent.textContent = entry.content;
        }
    });

    listItem.appendChild(link);
    diaryList.appendChild(listItem);
});
