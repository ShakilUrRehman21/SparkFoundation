// Sample customer data
const customers = [
    {
        id: 1,
        name: "John Doe",
        balance: 5000
    },
    {
        id: 2,
        name: "Jane Smith",
        balance: 7500
    },
    {
        id: 3,
        name: "Robert Johnson",
        balance: 3000
    },
    {
        id: 4,
        name: "Emily Davis",
        balance: 6000
    },
    {
        id: 5,
        name: "Michael Wilson",
        balance: 4500
    },
    {
        id: 6,
        name: "Sarah Brown",
        balance: 8000
    },
    {
        id: 7,
        name: "David Lee",
        balance: 3500
    },
    {
        id: 8,
        name: "Sophia White",
        balance: 7000
    },
    {
        id: 9,
        name: "James Taylor",
        balance: 5500
    },
    {
        id: 10,
        name: "Olivia Johnson",
        balance: 9000
    }
];

// Function to populate the sender and receiver dropdowns
function populateDropdowns() {
    const senderSelect = document.getElementById('sender');
    const receiverSelect = document.getElementById('receiver');

    customers.forEach(customer => {
        const senderOption = document.createElement('option');
        senderOption.value = customer.name;
        senderOption.textContent = customer.name;

        const receiverOption = document.createElement('option');
        receiverOption.value = customer.name;
        receiverOption.textContent = customer.name;

        senderSelect.appendChild(senderOption);
        receiverSelect.appendChild(receiverOption);
    });
}

// Function to populate the customer table
function populateCustomerTable() {
    const customerTable = document.getElementById('customerTable');
    const tbody = customerTable.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows

    customers.forEach(customer => {
        const row = tbody.insertRow();
        const nameCell = row.insertCell(0);
        const balanceCell = row.insertCell(1);

        nameCell.textContent = customer.name;
        balanceCell.textContent = customer.balance.toFixed(2);

        // Add classes for zoom and highlighting
        row.classList.add('zoom-effect');
        if (customer.name === "John Doe") {
            row.classList.add('highlighted');
        }
    });
}

// Populate the customer table on page load
populateCustomerTable();

// Function to handle a transaction
function handleTransaction() {
    const senderName = document.getElementById('sender').value;
    const receiverName = document.getElementById('receiver').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Invalid amount.');
        return;
    }

    const sender = customers.find(customer => customer.name === senderName);
    const receiver = customers.find(customer => customer.name === receiverName);

    if (!sender || !receiver) {
        alert('Invalid sender or receiver.');
        return;
    }

    if (sender.balance < amount) {
        alert('Insufficient balance.');
        return;
    }

    // Perform the transaction
    sender.balance -= amount;
    receiver.balance += amount;

    // Update the table
    populateCustomerTable();

    // Clear the form
    document.getElementById('amount').value = '';
}

// Populate the dropdowns and customer table on page load
populateDropdowns();
populateCustomerTable();

// Add event listener for the "Submit" button
const submitButton = document.getElementById('submitTransaction');
submitButton.addEventListener('click', handleTransaction);
