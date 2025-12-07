# ⚔️ IOTA Heroes - Web3 Game on IOTA Move

**IOTA Heroes** là một ứng dụng phi tập trung (dApp) đơn giản được xây dựng trên mạng lưới **IOTA Rebased (Devnet)** sử dụng ngôn ngữ lập trình **Move**. Người chơi có thể kết nối ví, triệu hồi Hero (NFT) và nâng cấp sức mạnh của chúng trực tiếp trên Blockchain.



## 🛠️ Thông số kỹ thuật (Tech Stack)

Dự án được chia thành 2 phần chính:

### 1. Smart Contract (Backend)
- **Network:** IOTA Rebased (Devnet)
- **Language:** Move
- **Framework:** IOTA Framework
- **Tools:** IOTA CLI

### 2. Frontend (Client)
- **Library:** ReactJS (Vite)
- **Language:** TypeScript
- **State Management:** TanStack Query
- **Blockchain Integration:** @iota/dapp-kit, @iota/iota-sdk
- **Styling:** CSS Modules (Dark/Neon Theme)

---

## 📂 Cấu trúc dự án

```text
iota-ultimate-game/
├── move/                       # Smart Contract (Backend)
│   ├── Move.toml               # Cấu hình dependencies & addresses
│   └── sources/
│       └── hero_game.move      # Logic chính của Game (Mint, Level Up)
│
├── frontend/                   # Giao diện Web (React App)
│   ├── src/
│   │   ├── main.tsx            # Cấu hình Provider & Network
│   │   ├── App.tsx             # Logic UI & Tương tác Contract
│   │   ├── networkConfig.ts    # Cấu hình RPC (Devnet/Testnet)
│   │   └── App.css             # Giao diện
│   └── package.json
│
└── README.md                   # Tài liệu hướng dẫn
