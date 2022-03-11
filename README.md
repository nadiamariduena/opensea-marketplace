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

---

<br>
<br>

# 🌈

## Hero component

- Create the **Hero.js** inside the **components folder**, then import it inside the **pages/index**

<br>

##### [Hero styles](https://drive.google.com/drive/folders/1BS_tG_B7kH3pJVBu6KJiLgsk4T2gt9Jr)

<br>

#### So here there is nothing ordinary, only the tailwind part but if you know about css, you understand what is happeing.

- for example: it has a position relative, it s relative also the wrapper, than the fontsize is at 46px etc

<br>

- this [rounded-full](https://tailwindcss.com/docs/border-radius) on the images is a **border-radius**

<br>

- **h-screen** height: 100vh;

```javascript
import React from 'react'

//

// Hero.js
const style = {
  wrapper: `relative`,
  //BACKGROUND IMAGE and opacity, but keep in mind that another color is inside the styles/globals.css
  //this is a div behind the one with the text and the img, that is why here below you have the before:absolute
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  //
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,

  //
  copyContainer: `w-1/2    `,

  //
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  //
  //img large -----------
  cardContainer: `rounded-[3rem] bg-cyan-500 shadow-lg shadow-cyan-500/50`,
  //
  //https://tailwindcss.com/docs/box-shadow-color
  //
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}
//
//

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/*  */}
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            {/* 
              
              Big image
              
              
              */}
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              {/* 
                
                
                img avatar 
                
                
                */}

              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />

              {/* 
              
              
              
              */}
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
```

<br>
<br>

#### Now lets get rid of the ugly x direction bar from the bottom of the page

[<img src="./z_img-read/hero-preview-bars.gif"/>]()

- Go to the **styles** folder and inside the **globals.css**

```css
html,
body {
  background-color: #202225;
  padding: 0;
  margin: 0;

  overflow-x: hidden; ✋
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
```

<br>

#### He didnt add the overflow-x:hidden , but i had to because with the setting above, the bars remained.

[<img src="./z_img-read/hero-preview-without-bars.gif"/>]()

<br>
<br>

# 🍨

# Authentication ✋

<br>

### Now we will need to add our metamask <u>authetication</u>

<br>

#### [Add a connect wallet button to your website](https://portal.thirdweb.com/guides/add-connectwallet-to-your-website)

##### [Metamask authentication in NextJS with Third Web](https://dev.to/byteslash/metamask-authentication-in-nextjs-with-third-web-55ff)

<br>
<br>

- Start by importing **3web**

> import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

<br>

- Then **install it** ✋

```javascript
yarn add @3rdweb/hooks

// OR

npm i @3rdweb/hooks

```

#### You should have the following inside the package.json (that is not in the studio)

```javascript
  "dependencies": {
    "@3rdweb/hooks": "^1.9.2", ✋
    "next": "latest",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1"
  },
```

<br>
<br>

```javascript
import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
//
//

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

<br>

#### Once installed, lets build the chain

<br>

## The chain

- **4** mean its **Rinkeby Testing chain** , check it out: [Network ID and chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/)
