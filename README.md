[![Puppycat_pose](https://emoji.gg/assets/emoji/8285-puppycat-pose.png)](https://emoji.gg/emoji/8285-puppycat-pose)

## Build OpenSea Blockchain Web 3.0 App with Next.js | Sanity.io | thirdweb

#### [check the video tutorial here](https://youtu.be/x3eRXeMB-4k)

<br>

#### Check this other tutorial for more details on this <u>Topic</u>

##### [Build your own NFT marketplace like OpenSea clone with solidity,openzeppelin and polygon (SUBSCRIBE)](https://youtu.be/7Q5E6RvLlUw)

<br>

---

<br>

# Docs

> **Blockchain development:** Smart Contracts, security, IDE, Truffle & hardhat, Etherscan, Dapp | **NFT:** ERC's ... [all here](./z_articles.md) ✋

<br>
<br>

## Interesting articles & links:

##### How to make money with NFT as a developer?

[How to make money with NFT as a developer?](https://youtu.be/5_Wu_X4LnAw)

<br>

##### NFT Marketplaces

> NFT marketplace rankings and analysis. Find non-fungible token trading volumes, number of traders per NFT marketplace and more key metrics.

[NFT Marketplaces](https://dappradar.com/nft/marketplaces) ✋

<br>

---

<br>

# Login:

#### Login in Metamask : [metamask](https://metamask.io/)

#### Login in ThirdWeb : [Thirdweb](https://bit.ly/3EJLftx)

#### Login [Opensea](https://testnets.opensea.io/)

 <br>

> **yarn dev** to start server on 3000 and **sanity start** to start server sanity on 3333 🌵

## <br>

<br>
<br>
 
# 🍰

<br>

## pathname: `/nfts/

<!-- [<img src="./z_img-read/states-to-get-access-thecollection.gif"/>]() -->

<br>

#### Here we will be creating the page related to the nft (the user will be redirected there, once the user clicks on the card)

<br>

### Go to the pages folder and create a new folder , call it 'nfts'

- inside the nfts folder we will have a file called: **[nftid].js**

<br>

- Now import the following:

```javascript
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
```

<br>

#### now test it, lets see if when we click a nft card, we will be redirected to the correct id and also if it will mark the nft LISTED or NOT LISTE (true / false)

<br>

[<img src="./z_img-read/nft-page-preview1.gif"/>]()
