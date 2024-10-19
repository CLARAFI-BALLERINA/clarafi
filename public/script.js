// Handle PDF Upload
document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = new FormData();
    let files = document.getElementById('pdfFiles').files;

    for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i]);
    }

    // Example: Post to backend API
    fetch('http://localhost:9090/personalSavings', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("PDFs uploaded successfully!");
        console.log(data);
    })
    .catch(error => console.error('Error uploading PDFs:', error));
});

// Handle Manual Cash and Bank Entry
document.getElementById('manualForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let cash = document.getElementById('cash').value;
    let bank = document.getElementById('bank').value;

    // Example: Send to backend API
    console.log("Cash: " + cash + " Bank: " + bank);
});

// Handle Adding Income
function addIncome() {
    let incomeType = document.getElementById('incomeType').value;
    let incomeAmount = document.getElementById('incomeAmount').value;

    // Example: Handle income calculation
    console.log("Income Type: " + incomeType + " Income Amount: " + incomeAmount);
}

// Handle Adding Expenses
function addExpense() {
    let expenseType = document.getElementById('expenseType').value;
    let expenseAmount = document.getElementById('expenseAmount').value;

    // Example: Handle expenses calculation
    console.log("Expense Type: " + expenseType + " Expense Amount: " + expenseAmount);
}

// Function to display savings
function displaySavings(savings) {
    document.getElementById('savingsOutput').innerText = "Your total savings are: $" + savings;
}

// Function to display visual insights
function displayInsights(data) {
    let insightsDiv = document.getElementById('insights');
    insightsDiv.innerHTML = "<p>Insights about your personal finances go here...</p>";
}
