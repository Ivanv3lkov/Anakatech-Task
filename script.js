fetch("./currencies.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let usd = parseFloat(data.rates.USD.toFixed(4));
        let aud = parseFloat(data.rates.AUD.toFixed(4));
        let cad = parseFloat(data.rates.CAD.toFixed(4));
        let bgn = parseFloat(data.rates.BGN.toFixed(4));

        let values = [usd, aud, cad, bgn];
        let spans = [];

        for (let s = 0; s < values.length; s++) {
            spans.push(document.createElement("span"))
        }

        for (let i = 0; i < spans.length; i++) {
            spans[i].innerHTML = "<strong>" + values[i] + "</strong>";
        }

        const currency = ["eurusd", "euraud", "eurcad", "eurbgn"]

        for (let k = 0; k < currency.length; k++) {
            document.getElementById(currency[k]).appendChild(spans[k]);
        }

        let counterTillFive = 0;
        let minutes = 0;

        setInterval(function () {
            if (counterTillFive === 5) {
                return;
            }

            if (counterTillFive % 2 === 0) {

                for (let i = 0; i < values.length; i++) {
                    values[i] += 0.0001
                    spans[i].style.backgroundColor = "lightgreen";

                }
                minutes += 5000;
            } else {
                for (let i = 0; i < values.length; i++) {
                    values[i] -= 0.0001
                    spans[i].style.backgroundColor = "red";
                }
                minutes += 5000;
            }

            for (let i = 0; i < spans.length; i++) {
                spans[i].innerHTML = "<strong>" + values[i].toFixed(4) + "</strong>";
            }

            let minRate = spans.find(value => parseFloat(value.textContent) < 1.0001);

            if (minRate !== undefined) {
                minRate.textContent = 1.0001;
            }

            if (minutes == 60000) {
                minutes = 0;
                counterTillFive += 1;
            };

        }, 5000);
    });