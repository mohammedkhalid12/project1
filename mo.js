function CalcAge() {
    const day = document.querySelector('input[placeholder="dd"]').value;
    const month = document.querySelector('input[placeholder="mm"]').value;
    const year = document.querySelector('input[placeholder="yy"]').value;
    const today = new Date();
    let Year= today.getFullYear() - year;
    let Month = today.getMonth() + 1 - month;
    let Day = today.getDate() - day;

    if (Month < 0 || (Month === 0 && Day < 0)) {
        Year--;
        Month += 12;
    }
    if (Day < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        Day += lastMonth.getDate();
        Month--;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Days: ${Day}</h2><h2>Months: ${Month}</h2><h2>Years: ${Year}</h2>`;
}

