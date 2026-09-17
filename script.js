const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const price = document.querySelectorAll(".prices");

    let total = 0;

    price.forEach(item => {
        total += Number(item.innerText);
    });

    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.innerText = total;

    row.appendChild(cell);

    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);