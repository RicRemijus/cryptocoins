import { imageConfigDefault } from 'next/dist/server/image-config';
import React from 'react'
import styles from '../../styles/CoinID.module.css';
import Layout from '../../components/Layout';

const CoinID = ({coin}) => {
  return (
    <>
      <Layout>
        <div className={styles.coinPage}>
          <div className={styles.coinContainer}>
            <img src={coin.image.large} alt={coin.name} className={styles.coinImage}/>
            console.log(coin.image.large)
            <h1 className={styles.coinName}>{coin.name}</h1>
            <p className={styles.coinTracker}>{coin.symbol}</p>
            <p className={styles.coinCurrent}>{coin.market_data.current_price.usd}</p>
          </div>
        </div>
      </Layout>
      
    </>
  )
}

export default CoinID;


export async function getServerSideProps(context){
  const {id} = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await res.json()

  return{
    props:{
      coin:data
    }
  }
}