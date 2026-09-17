const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Saare prices select karo
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    // Har price ko add karo
    prices.forEach(price => {
        total += Number(price.innerText);
    });

    // New row create karo
    const row = document.createElement("tr");

    // New cell create karo
    const cell = document.createElement("td");

    // Total cell mein daalo
    cell.innerText = total;

    // Cell -> Row
    row.appendChild(cell);

    // Row -> Table
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);