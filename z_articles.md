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

## Truffle & hardhat

> Are command lines tools, written in **node.js** and you can install them easily with **npm**

<br>

> BOth of them come with a local blockchain network for development. Blockchain network is very convenient for development, because you can deploy your smart contract on your network completely separated from the real network of
> ethereum that we call **Mainnet**

<br>

### Mainnet

> Mainnet is the term used to describe when a blockchain protocol is fully developed and deployed, meaning that cryptocurrency transactions are being broadcasted, verified, and recorded on a distributed ledger technology (blockchain). [Read more: Mainnet](https://academy.binance.com/en/glossary/mainnet)

<br>

- **In contrast to mainnet networks, the term testnet describes when a blockchain protocol or network is not yet up and running on its full capacity**. A testnet is used by programmers and developers to test and troubleshoot all the aspects and features of a blockchain network before they are sure the system is secure and ready for the mainnet launch.
