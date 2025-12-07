# ⚔️ Cyber-Warriors - Web3 Game on IOTA Move

**Cyber-Warriors** là một ứng dụng phi tập trung (dApp) đơn giản được xây dựng trên mạng lưới **IOTA Rebased (Devnet)** sử dụng ngôn ngữ lập trình **Move**. Người chơi có thể kết nối ví, triệu hồi Hero (NFT) và nâng cấp sức mạnh của chúng trực tiếp trên Blockchain.



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
## 🚀 Hướng dẫn cài đặt & Chạy dự án

Để chạy được dự án này trên máy local, bạn cần cài đặt các công cụ sau:

### 1. Yêu cầu tiên quyết (Prerequisites)
- [Node.js](https://nodejs.org/) (v18 trở lên)
- [Rust & Cargo](https://rustup.rs/) (Để biên dịch Move)
- [IOTA CLI](https://docs.iota.org/) (Phiên bản Rebased/Move)
- **IOTA Wallet Extension** trên trình duyệt (Chuyển sang mạng Devnet)

### 2. Clone dự án
```bash
git clone [https://github.com/USERNAME_CUA_BAN/iota-heroes-game.git](https://github.com/USERNAME_CUA_BAN/iota-heroes-game.git)
cd iota-heroes-game
###  3. Deploy Smart Contract (Nếu muốn tự chạy contract riêng)
Nếu bạn muốn sử dụng Contract có sẵn, bỏ qua bước này. Nếu muốn deploy mới:

      Di chuyển vào thư mục move:
          cd move
      Chuyển IOTA CLI sang Devnet và xin Token:
          iota client switch --env devnet
          iota client faucet --url [https://faucet.devnet.iota.cafe/gas](https://faucet.devnet.iota.cafe/gas)
          Deploy lên mạng lưới:
          iota client publish --gas-budget 100000000
###  QUAN TRỌNG: Sau khi deploy thành công, hãy copy Package ID từ terminal (dòng Published Objects -> PackageID).

4. Chạy Frontend
Di chuyển vào thư mục frontend:
          cd ../frontend
Cài đặt thư viện:
        npm install
Cấu hình Contract: Mở file src/App.tsx, tìm dòng const PACKAGE_ID và dán Package ID bạn vừa deploy vào (hoặc dùng ID có sẵn nếu repo đã config):
  
TypeScript

const PACKAGE_ID = "0x...YOUR_PACKAGE_ID...";
Khởi chạy Web:
        npm run dev
Truy cập http://localhost:5173 để chơi game.

###  🎮 Hướng dẫn chơi
Kết nối ví: Bấm nút "Connect Wallet" ở góc phải (Đảm bảo ví đang ở mạng IOTA Devnet).

Xin Token: Nếu ví chưa có tiền, hãy dùng chức năng Faucet trong ví IOTA Wallet.

Triệu hồi Hero: Nhập tên nhân vật và bấm "Triệu hồi". Xác nhận giao dịch trên ví.

Nâng cấp: Bấm nút "Level Up" ở thẻ bài Hero để tăng cấp độ và sức mạnh.
### 📂 Cấu trúc dự án

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


