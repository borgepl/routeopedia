import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {

  const {cryptoSymbol, id} = useParams();

  return (
    <div className='row p-3'>
      <h4>CryptoDetail</h4>
      <p>Symbol : {cryptoSymbol}</p>
      <p>Id : {id}</p>
    </div>
  )
}

export default CryptoDetail