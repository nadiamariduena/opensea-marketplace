import React from 'react'
import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'

//
//
const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

//
//

const Nft = () => {
  return (
    <div>
      <Header />
      {/* 
      
      
      */}
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>hello nft page</div>
        </div>
      </div>
    </div>
  )
}

export default Nft
