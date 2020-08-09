fetch("./currencies.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let usd = parseFloat(data.rates.USD.toFixed(4));
        let aud = parseFloat(data.rates.AUD.toFixed(4));
        let cad = parseFloat(data.rates.CAD.toFixed(4));
        let bgn = parseFloat(data.rates.BGN.toFixed(4));

        let values = [usd, aud, cad, bgn]

        let spans = [];
        
    }
    




