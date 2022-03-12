### How to learn NFT Development for Beginners in 3 steps

[How to learn NFT Development for Beginners in 3 steps](https://youtu.be/wnK_XKZXa30)

<br>

#### Blockchain development

- THere are many different Blockchain, and in theory **nft's** could be deployed to any of them, however what we have seen so far with **nft's**, is that they are mostly deployed on the **ethereum blockchain**, and besides this, a lot of blockchain are based on the ethereum technology, that is what developers call: **evm** based blockchains.

<br>

- We have many examples of **evm blockchains**, like bannon smart chain, polygon etc, thats why you should focus learning the **Ethereum blockchain**.

<br>

#### In blockchain development there is an important distiction to make, on the one hand there is something developers call: ✋ <u>Blockchain core dev</u> and on the other hand you have what we call:✋ <u>Blockchain application development</u>

<br>

> **Blockchain Core development** is about building the blockchain itself, these are the developers who created the software of **bitcoin** or **ethereum** for example, this is quite complex and only a small **elite** of developers knows how to do it. but that is okay because for NFT's we dont need to do thi, as we build applications on top of the blockchain.

<br>
<br>

> **Blockchain application development** even if you will not develop blockchain code technologies, you will need to have an understanding of the **basics of how blockchain work** and specially ethereum, you will need to learn a few things like the **Proof of work algorithm or POW algorithm**, what is the data structure of the ethereum blockchain, what are public and private keys, how addresses are generated, and the 2 kind of **addresses that exist on ethereum**, how a wallet work, so that's an external software that manages the **private key of each user**, what is a **transaction** and how you can change the data inside the ethereum and what is a **SMART CONTRACT**.

<br>

##### Once you know this, your next step is focus on smart PROGRAMMING

<br>

# Smart Contracts :rainbow:

<br>

- Smart contracts are small programs that live in the blockchain, usually they are quite small, perhaps a few hundred or thousand lines of code, rarely more. These programs are very different from normal programs, once they are deployed you cannot change the code, we call that: an **immutable code** .

#### Immutable Code✋

> Smart contracts are immutable once deployed, which is good for trust but also means that bugs in the code will be much more difficult to deal with.

<br>

#### [read more | ethereum.org](https://ethereum.org/en/smart-contracts/)

<br>

#### Tutorial

###### [Build Your First Blockchain App Using Ethereum Smart Contracts and Solidity](https://youtu.be/coQ5dg8wM2o)

<br>

<br>

#### Not immutable✋

<br>

However **the data is not immutable**, you can change it, **BUT** contrary to a normal program, it costs money to change the data of a smart contract, and the complex the code is, the more money it costs. That's why we always try to simplify the code of a smart contract to
lower execution cost, thats called **gas optimisation**,

<br>

> Also **takes time to change the data of a smart contract**, because you need to mine a transaction which takes about **15 seconds on ethereum**.

<br>

> With a smart contract, you can move money negatively, this is why smart contracts are so powerful, with a normal program you will to integrate a payment service like **paypal or stripe** but you need to have a permission to do this and you are **CONSTRAINED** by the **API**, but with the smart contract you can write any logic you want for moving the money you do what you want.

<br>

## In terms of security 🔴

- Its **Almost impossible to hack the core blockchain protocol**, that means that if a transaction is send to move money from an address to another one, its impossible to hack this and change the recipient address, ⚠️ however if there is a bug in the code of a smart contract, hackers can take advantages of this.

<br>

> That s why when you learn smart contracts developement, its also very important to learn about **smart contracts security** and how to write safe smart contracts

<br>

- There are a couple of programming languages for smart contracts, but the most popular is called **SOLIDITY**, the syntax of solidity **looks like JAVASCRIPT** but its very misleading because the way it works is quite different, is also much more limited compared to **JS**, so developers avoid to do things too complicated in **solidity**

<br>

#### A great way to experiment with solidity is to remix an online <u>IDE</u> for solidity

<br>
<br>

# IDE

### Integrated Development Environment

<br>

> **What is an IDE in Crypto?** ✋
> Simplify smart contracts development with the **Integrated Development Environment (IDE)** The SettleMint IDE is a powerful tool that simplifies the development and deployment of your blockchain application, turning any developer into a blockchain developer.

##### [Deploy your first Solidity smart contract with Remix IDE](https://www.youtube.com/watch?v=bZKVfXmzRDw)

<br>

#### For the remix, you have nothing to install , you just load the website and you can start writing and running solidity smart contracts.

<br>

#### Remix

- is good to get started but in real life projects developers use something more robust like **Truffle** or **hardhat**

<br>
<br>

## [Truffle](https://trufflesuite.com/) & [hardhat](https://hardhat.org/)

> Are command lines tools, written in **node.js** and you can install them easily with **npm**

<br>

> BOth of them come with a local blockchain network for development. Blockchain network is very convenient for development, because you can deploy your smart contract on your network completely separated from the real network of
> ethereum that we call **Mainnet**

<br>

### Mainnet

> Mainnet is the term used to describe when a blockchain protocol is fully developed and deployed, meaning that cryptocurrency transactions are being broadcasted, verified, and recorded on a distributed ledger technology (blockchain). [Read more: Mainnet](https://academy.binance.com/en/glossary/mainnet)

<br>

- **In contrast to mainnet networks, the term <u> testnet ✋</u>describes when a blockchain protocol or network is not yet up and running on its full capacity**. A testnet is used by programmers and developers to test and troubleshoot all the aspects and features of a blockchain network before they are sure the system is secure and ready for the mainnet launch.

<br>
<br>

## [Network ID and chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/) 👾

> Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses.

- Peer-to-peer communication between nodes uses the network ID, while the transaction signature process uses the chain ID.

<br>

- For most networks, including Mainnet and the public testnets, the network ID and the chain ID are the same, with the network ID defaulting to the chain ID, as specified in the genesis file.

```javascript
{
  "config": {
    "ethash": {
    },
     "chainID": 1981
  },
  ...
}
```

<br>

- **4** mean its **Rinkeby Testing chain** , check it out: [Network ID and chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/)

<br>
<br>

#### On this local blockchain network you can have infinite fake ether, which mean you can send as many transactions as you want, lose all the money, it doesnt matter at all.

<br>

- For ethereum there are also called **Public Testnet** ✋
  that you can use to deploy your smart contract

<br>

##### Another useful too is a blockchain explorer like [etherscan]()

<br>

## [Etherscan](https://cointelegraph.com/news/what-is-etherscan-and-how-does-it-work)

- With Etherscan you can verify that the transaction was **mined** on the blockchain

<br>

### What is Etherscan, and how does it work?

> Etherscan is a block explorer and analytics platform that allows you to access details on any Ethereum blockchain transactions that are pending or confirmed.

<br>

- Etherscan is the most trusted tool for navigating through all the public data on the Ethereum blockchain and is sometimes called “Ethplorer.” This data includes transaction data, wallet addresses, smart contracts and much more. **The application is self-contained and is neither sponsored nor administered by the Ethereum Foundation, which is a non-profit organization.**

<br>

##### What is Etherscan used for?

Users can use Etherscan to:

- Calculate Ethereum gas fees with the Etherscan gas tracker

- Lookup and verify smart contracts

- View the crypto assets held in or associated with a public wallet address

- Observe live transactions taking place on the Ethereum blockchain

- Lookup a single transaction made from any Ethereum wallet
- Discover which smart contracts have a verified source code and security audit

- Keep track of how many smart contracts a user has authorized with their wallet

- Review and revoke access to a wallet for any decentralized applications (DApps)

<br>
<br>

# 🌈 [INFURA ](https://infura.io/)

<br>

### <u>Another service</u> that you will use is [INFURA](https://infura.io/) which is an API that runs ethereum clients for you.

- its not easy to run ethereum client, so infura is very useful when you want to send a transaction to **mainnet**

<br>

- "Our suite of high availability **APIs** and Developer Tools provide quick, reliable access to the Ethereum and **IPFS networks** so you can focus on building and scaling next generation software."

<br>


---

<br>

#### Once you have your [INFURA ](https://infura.io/) account, open an [ALCHEMY](https://www.alchemy.com/) account

<br>

#### How does Alchemy work?

> It replaces the **nodes** that businesses use to read and write blockchains with a faster, more scalable decentralized architecture. **It also provides tools for analytics, monitoring, alerting, logging and debugging for cryptocurrency-connected software**

<br>

> “Right now people are trying to build skyscrapers with picks and shovels. We need to give them construction equipment,” Alchemy co-founder and CEO Nikil Viswanathan tells me. “None of this exists for blockchain.”

##### read more: [Alchemy is secretly fising blockchain nightmare](https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_f0f9b10d-bde1-442d-a23d-c50d9a4bd975)

<br>
<br>

---

<br>
<br>

### Another thing to mention is testing ⚠️

<br>

- After you deploy a smart contract, you cannot modify its code, **so its very important that you test your contract before deployment**

<br>

#### So with the [Truffle](https://trufflesuite.com/) & [hardhat](https://hardhat.org/), you test your smart contracts easily.

If you only have a smart on the blockchain, the only way to interact with it, **is with the command line and that is not user friendly** , that is why we also need to build a **frontend** to let our users **interact with our smart contracts**

<br>

### ✋ smart contracts plus the frontend is what we call a **DApp** ✋

<br>
<br>

# [DApp](https://en.wikipedia.org/wiki/Decentralized_application)

#### Decentralized applications

<br>

Decentralized applications—also known as **"dApps" or "dapps"**—are digital applications that run on a blockchain network of computers instead of relying on a single computer. Because dApps are decentralized, they are free from the control and interference of a single authority.

<br>

> The frontend can be a mobile app or a web app but in most cases its a web app. The web app of a **dapp** is 90% like your standard web application with **html / css / javascript** and optionally a frontendvframework like react. I told you before that we have to know the basics of web development before diving into **blockchain development** , now you understand why.

<br>

#### In your frontend there will be two challenges specific to the blockchain

<br>

<br>

### Integration with the blockchain 🍰

- First: the **integration** with the blockchain, for that developers use a javascript library called webstreet, there is also another one called **ethers**, and the other challenges for your **dapp**, is the integration with your wallet

### integration with your wallet 🍰

- IN **dapp's** the user management is decentralized and users store their passwords themselves, we don't use passwords in **dapp** but the closest equivalent will be what we call 🔑 **private keys**

<br>

### 🔑 private keys

> **With private keys, user can sign a transaction** which is a data package that describes an action that a user wants to do with a signature that proves that the user really wanted to do this action, there are many ways available for **ethereum** but most people use **metamask**

<br>
<br>

[![cat_poggers](https://emoji.gg/assets/emoji/1733-cat-poggers.png)](https://emoji.gg/emoji/1733-cat-poggers)

#### Learning blockchain development is probably what will takes you the most time and once you are comfortable with this you can move on to the next part where we will finally deal with NFT's

<br>
<br>

---

<br>
<br>

# 🌈

# NFT

##### check min 11:29 [How to learn NFT Development for Beginners in 3 steps / ](https://youtu.be/wnK_XKZXa30)

<br>

### There are 2 parts for the NFT's:

- The On-chain

- The Off -chain

<br>

##### For the Onchain part: you will need to create and deploy a smart contract

### ERC

> Erc's are a set of standards for **ethereum smart contracts** , some of this standards like:

**ERC721, ERC1155, ERC20**

> Define token standards, NFT's are represented either as an **ERC721** token or an **ERC1155** token

<br>

### What is an ERC721?

<br>

ERC-721 is an open standard that describes how to build Non-Fungible tokens on EVM (Ethereum Virtual Machine) compatible blockchains; it is a standard interface for Non-Fungible tokens; it has a set of rules which make it easy to work with NFTs:

##### [How to create and deploy an ERC-721 (NFT) ](https://www.quicknode.com/guides/solidity/how-to-create-and-deploy-an-erc-721-nft)

<br>

#### What is an ERC1155?

<br>

ERC1155 is a novel token standard that aims to take the best from previous standards to create a fungibility-agnostic and gas-efficient token contract. ERC1155 draws ideas from all of ERC20, ERC721, and ERC777. If you're unfamiliar with those standards, head to their guides before moving on:

##### ✋ [docs.openzeppelin.com/contracts/3.x/erc1155](https://docs.openzeppelin.com/contracts/3.x/erc1155) ✋

<br>

[![kek_sun](https://emoji.gg/assets/emoji/8456-kek-sun.gif)](https://emoji.gg/emoji/8456-kek-sun)

## Check this 2 videos to know more about (you will be building an app)

> In the first one you will learn how to install **Truffle** and then use it with a basic setup to get you started with small contracts 🔴 , you will also be using **genache**, genache is a simulated **ethereum** blockchain on your computer, genache helps you to test your small contracts locally. **please check the video below:**

#### [Coding an NFT crypto collectible in 3 days (DAY 1)](https://youtu.be/GAFh2Z5VtgM)

<br>

##### network related

[Switch MetaMask network to any chain 🛠 React.js](https://youtu.be/QTcuJ9rdqME)

<br>

[Ethereum Provider API](https://docs.metamask.io/guide/ethereum-provider.html)

<br>

#### [How to implement an ERC721 Token and connect it to OpenSea (DAY 2)](https://www.youtube.com/watch?v=75D0JjX7EZg)

<br>

---

<br>
