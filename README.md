# ⚔️ Cyber-Warriors – Web3 Game on IOTA Move

**Cyber-Warriors** là dApp (Web3 Game) triển khai trên **IOTA Rebased (Devnet)** sử dụng ngôn ngữ **Move**.  
Người chơi có thể kết nối ví, triệu hồi Hero (NFT) và nâng cấp sức mạnh của chúng trực tiếp trên blockchain.

---

## 🛠️ Tech Stack

### 🔹 Smart Contract (Backend)
- Network: **IOTA Rebased (Devnet)**
- Language: **Move**
- Framework: **IOTA Framework**
- Công cụ: **IOTA CLI**

### 🔹 Frontend (Client)
- Library: **ReactJS (Vite)**
- Language: **TypeScript**
- State Management: **TanStack Query**
- Web3: **@iota/dapp-kit**, **@iota/iota-sdk**
- Styling: **CSS Modules (Dark/Neon UI)**

---

## 🚀 Hướng dẫn cài đặt & chạy dự án

### 1️⃣ Prerequisites
Cài đặt:
- Node.js (v18+)
- Rust & Cargo
- IOTA CLI (bản Rebased-Move)
- IOTA Wallet Extension (chuyển sang Devnet)

---

### 2️⃣ Clone dự án
```bash
git clone https://github.com/USERNAME_CUA_BAN/iota-heroes-game.git
cd iota-heroes-game

---

3. Deploy Smart Contract (Backend)
Nếu bạn muốn tự deploy contract riêng của mình:

Di chuyển vào thư mục move:

Bash

cd move
Chuyển CLI sang mạng Devnet và xin Token:

Bash

iota client switch --env devnet
iota client faucet --url [https://faucet.devnet.iota.cafe/gas](https://faucet.devnet.iota.cafe/gas)
Deploy lên mạng lưới:

Bash

iota client publish --gas-budget 100000000
LƯU Ý: Sau khi deploy thành công, hãy copy Package ID trong terminal (dòng Published Objects -> PackageID) để dùng cho bước sau.

4. Chạy Frontend (Client)
Di chuyển vào thư mục frontend:

Bash

cd ../frontend
Cài đặt thư viện:

Bash

npm install
Cấu hình Contract ID: Mở file src/App.tsx, tìm dòng const PACKAGE_ID và thay bằng ID bạn vừa deploy (hoặc giữ nguyên nếu repo đã có sẵn ID hoạt động):

TypeScript

const PACKAGE_ID = "0x...YOUR_PACKAGE_ID...";
Khởi chạy Web:

Bash

npm run dev
Mở trình duyệt tại: http://localhost:5173

🎮 Hướng dẫn chơi (How to Play)
Để trải nghiệm game, bạn cần thực hiện đúng các bước sau trên trình duyệt:

Bước 1: Chuẩn bị Ví (Quan trọng)
Mở tiện ích IOTA Wallet trên trình duyệt.

Vào Cài đặt (Settings) -> Network -> Chọn IOTA Devnet.

Nếu ví hiện số dư là 0 IOTA, hãy bấm nút Faucet (hoặc "Request Tokens") ngay trong ví để nhận token test miễn phí.

Bước 2: Kết nối & Triệu hồi
Tại giao diện web game, bấm nút "Connect Wallet" ở góc phải -> Chọn IOTA Wallet.

Nhập tên nhân vật bạn muốn (ví dụ: Cyber Dragon) vào ô trống.

Bấm nút "Triệu hồi Hero".

Một cửa sổ ví sẽ hiện lên yêu cầu xác nhận. Bấm Approve.

Bước 3: Nâng cấp (Level Up)
Sau khi triệu hồi thành công (đợi khoảng 2-3 giây), thẻ bài Hero sẽ xuất hiện bên dưới.

Bấm nút "⚡ Level Up" trên thẻ bài.

Xác nhận giao dịch trên ví.

Chỉ số Level và Power của Hero sẽ tăng lên ngay lập tức.
