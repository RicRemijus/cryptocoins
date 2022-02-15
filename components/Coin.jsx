import React from 'react'
import Link from 'next/link'
import styles from '../styles/Coin.module.css'

const Coin = ({id,name,image, symbol, volume, price, marketCap, lastUpdated, priceChange}) => {
    return (
        <Link href='/api/[id]' as={`/api/${id}`}>
            <a>
            <div className={styles.coinContainer}>
            <div className={styles.coinRow}>
                <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coinImage} />
                    <h1 className={styles.coinName}>{name}</h1>
                    <p className={styles.coinSymbol}>{symbol}</p>
                </div>
                <div className={styles.coinData}>
                    <p className={styles.coinPrice}>Price ${price}</p>
                    <p className={styles.coinVolume}>Volume ${volume}</p>
                    {priceChange < 0 ? (
                        <p className={styles.coinPercentage, styles.red}>{priceChange.toFixed(2)}% </p>
                    ):( 
                    <p className={styles.coinPercentage, styles.green}> {priceChange.toFixed(2)}%</p>
                    ) }
                    <p className={styles.coinMktCap}>Market Cap : ${marketCap.toLocaleString()}</p>
                    <p className={styles.coinUpdate}>Last Updated : {lastUpdated}</p>
                </div>
            </div>
            </div>
            </a>
        </Link>
        
    )
}

export default Coin;
