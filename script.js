const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // HTML mein class "price" hai
    const prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach(price => {
        total += Number(price.innerText);
    });

    // New row
    const row = document.createElement("tr");

    // New cell
    const cell = document.createElement("td");

    // Total price
    cell.innerText = total;

    row.appendChild(cell);

    // Add row to table
    document.querySelector("table").appendChild(row);
};

// Button click
getSumBtn.addEventListener("click", getSum);

// Automatically calculate on page load
getSum();