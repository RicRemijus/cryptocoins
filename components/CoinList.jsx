import Coin from "./Coin"

export default function CoinList({availableCoins}){
    return(
        <>
        {availableCoins.map(coin =>{
            return(
                <Coin 
                key={coin.id}
                id={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                marketCap={coin.market_cap}
                lastUpdated={coin.last_updated}
                priceChange={coin.price_change_percentage_24h}
                
                />
            )
        })}

        </>
    )
}