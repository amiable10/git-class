// -----------------------Co----------------------------
var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking13744e6c13dfb009e7a166d46507bc3d97f8f3f37e9467d4"

fetch("https://api.coinranking.com/v2/coins", {
    method: "GET",
    headers:{
        'content-Type':'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) =>{
    //  console.log(response)
    if(response.ok){
        
        response.json().then((json) =>{
            console.log(json.data.coins)

            let coinDate = json.data.coins

            if(coinDate.length > 0){
                var cryptoCoins = ""
            }

            //for loop starts
            coinDate.forEach((coin) => { 
                cryptoCoins += "<tr>",
                cryptoCoins += `<td> ${coin.btcPrice}</td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.tier} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td>$${Math.round(coin.price)} Billion </td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;"<tr>";
            });
            document.getElementById("data").innerHTML = cryptoCoins
        })
     }
}).catch((error) =>{
    console.log(error)
});