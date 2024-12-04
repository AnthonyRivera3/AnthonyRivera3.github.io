// Fetch current rates
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://v6.exchangerate-api.com/v6/a5b67ad6f55df4c2f3afcfeb/latest/USD')
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates;
            const ratesDiv = document.getElementById('rates');
            Object.keys(rates).forEach(key => {
                ratesDiv.innerHTML += `${key}: ${rates[key]} <br>`;
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});

// Fetch historical rates
function fetchHistory() {
    const date = document.getElementById('datePicker').value;
    const url = `https://v6.exchangerate-api.com/v6/a5b67ad6f55df4c2f3afcfeb/history/USD/${date}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates;
            const ratesDiv = document.getElementById('historicalRates');
            ratesDiv.innerHTML = '';
            Object.keys(rates).forEach(key => {
                ratesDiv.innerHTML += `${key}: ${rates[key]} <br>`;
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
}

