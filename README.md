# ⚔️ Cyber-Warriors – Web3 Game on IOTA Move

**Cyber-Warriors** is a decentralized Web3 Game deployed on **IOTA Rebased (Devnet)** using the **Move** programming language.  
Players can connect their wallet, summon Heroes (NFTs), and upgrade their strength directly on the blockchain.

---

## 🛠️ Tech Stack

### 🔹 Smart Contract (Backend)
- Network: **IOTA Rebased (Devnet)**
- Language: **Move**
- Framework: **IOTA Framework**
- Tools: **IOTA CLI**

### 🔹 Frontend (Client)
- Library: **ReactJS (Vite)**
- Language: **TypeScript**
- State Management: **TanStack Query**
- Web3: **@iota/dapp-kit**, **@iota/iota-sdk**
- Styling: **CSS Modules (Dark/Neon UI)**

---

## 🚀 Installation & Project Setup

### 1️⃣ Prerequisites
Install the following:
- Node.js (v18+)
- Rust & Cargo
- IOTA CLI (Rebased-Move version)
- IOTA Wallet Extension (switch to Devnet)

---

### 2️⃣ Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/iota-heroes-game.git
cd iota-heroes-game
3️⃣ Deploy Smart Contract (Backend)

If you want to deploy your own contract:

Move to the Move folder:

cd move


Switch CLI to Devnet and request gas:

iota client switch --env devnet
iota client faucet --url https://faucet.devnet.iota.cafe/gas


Deploy to the network:

iota client publish --gas-budget 100000000


📌 IMPORTANT: After successful deployment, copy your PackageID from the terminal
(line showing Published Objects -> PackageID). You will need this for the frontend.

4️⃣ Run Frontend (Client)

Move to the frontend folder:

cd ../frontend


Install dependencies:

npm install


Configure Contract ID:
Open file src/App.tsx, find:

const PACKAGE_ID = "0x...YOUR_PACKAGE_ID...";


Replace with your deployed PackageID
(or keep the existing one if the repo already includes a working ID).

Run the web app:

npm run dev


Open your browser at:
http://localhost:5173

🎮 Gameplay Instructions (How to Play)

To interact with the game correctly, follow these steps:

🧰 Step 1 — Wallet Preparation (Important)

Open the IOTA Wallet Extension in your browser.

Go to: Settings -> Network -> Select IOTA Devnet

If your balance is 0 IOTA, click Faucet (or “Request Tokens”) to receive free test tokens.

⚔️ Step 2 — Connect & Summon a Hero

On the game UI, click “Connect Wallet” (top-right).

Select IOTA Wallet.

Enter any Hero name you want (e.g., Cyber Dragon).

Click “Summon Hero”.

The wallet popup will appear → click Approve.

⚡ Step 3 — Upgrade (Level Up)

After summoning (wait 2–3 seconds), your Hero card will appear.

Click “⚡ Level Up”.

Approve the transaction in your wallet.

The Hero's Level and Power will increase immediately.
