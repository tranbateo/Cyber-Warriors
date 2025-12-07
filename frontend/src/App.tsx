import { useState } from "react";
import { 
  ConnectButton, 
  useCurrentAccount, 
  useSignAndExecuteTransaction, 
  useIotaClientQuery 
} from "@iota/dapp-kit";
import { Transaction } from "@iota/iota-sdk/transactions"; // <--- QUAN TRỌNG: Import mới

// ⚠️ LƯU Ý: HÃY DÁN LẠI PACKAGE ID CỦA BẠN VÀO DÒNG DƯỚI ĐÂY
const PACKAGE_ID = "0xe095d6fad7dd98ac4f86c9df53464cb7d2d997ca9974d4bf893561cf587ba64d"; 
const MODULE_NAME = "hero_game";
const HERO_TYPE = `${PACKAGE_ID}::${MODULE_NAME}::Hero`;

function App() {
  const account = useCurrentAccount();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();
  const [heroName, setHeroName] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  // 1. Lấy dữ liệu Hero
  const { data: userObjects, refetch, isPending } = useIotaClientQuery(
    "getOwnedObjects",
    {
      owner: account?.address || "",
      filter: { StructType: HERO_TYPE },
      options: { showContent: true, showDisplay: true },
    },
    { enabled: !!account }
  );

  // 2. Hàm Tạo Hero (Đã sửa lỗi transaction.toJSON)
  const createHero = () => {
    if (!account || !heroName) return;
    setIsMinting(true);

    const dummyImage = `https://api.dicebear.com/9.x/adventurer/svg?seed=${heroName}&backgroundColor=b6e3f4`;

    // --- SỬA ĐỔI CHÍNH TẠI ĐÂY ---
    const tx = new Transaction(); // Tạo một Transaction Block mới
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::create_hero`,
      arguments: [
        tx.pure.string(heroName),   // Dùng tx.pure.string cho tham số là chữ
        tx.pure.string(dummyImage)
      ],
    });

    signAndExecute(
      {
        transaction: tx, // Truyền object tx vào đây thay vì JSON thuần
      },
      {
        onSuccess: (result) => {
          console.log("Tx Digest:", result.digest);
          // Đợi 2 giây cho mạng cập nhật rồi load lại
          setTimeout(() => {
            refetch();
            setIsMinting(false);
            setHeroName("");
            alert("🎉 Triệu hồi Hero thành công!");
          }, 2000);
        },
        onError: (err) => {
          console.error("Lỗi chi tiết:", err);
          setIsMinting(false);
          alert("❌ Lỗi khi tạo Hero. Hãy kiểm tra console (F12) để xem chi tiết.");
        },
      }
    );
  };

  // 3. Hàm Nâng Cấp Hero (Cũng sửa tương tự)
  const levelUp = (heroId: string) => {
    const tx = new Transaction();

    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::level_up`,
      arguments: [
        tx.object(heroId) // Dùng tx.object cho tham số là ID của vật phẩm
      ],
    });

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: () => {
          alert("🔥 Level Up thành công! Sức mạnh đã tăng.");
          setTimeout(refetch, 1000);
        },
        onError: (err) => {
          console.error(err);
          alert("Lỗi khi nâng cấp.");
        }
      }
    );
  };

  return (
    <div className="container">
      <header>
        <h1>IOTA HEROES</h1>
        <ConnectButton />
      </header>

      {!account ? (
        <div className="card-box">
            <h2>🚀 Kết nối ví để chơi</h2>
            <p>Vui lòng kết nối IOTA Wallet để bắt đầu.</p>
        </div>
      ) : (
        <>
          <div className="create-section">
            <input 
                type="text" 
                placeholder="Đặt tên Hero..." 
                value={heroName}
                onChange={(e) => setHeroName(e.target.value)}
            />
            <button className="btn-primary" onClick={createHero} disabled={isMinting || !heroName}>
                {isMinting ? "Đang triệu hồi..." : "Triệu hồi Hero"}
            </button>
          </div>

          <div className="grid">
            {isPending && <p>Đang tải dữ liệu...</p>}
            
            {userObjects?.data.map((obj: any) => {
               const f = obj.data?.content?.fields;
               if (!f) return null;
               
               return (
                 <div key={obj.data.objectId} className="hero-card">
                   <img src={f.img_url} alt="hero" />
                   <h3>{f.name}</h3>
                   <p>Level: <strong>{f.level}</strong> | Power: <strong>{f.power}</strong></p>
                   <button onClick={() => levelUp(obj.data.objectId)}>⚡ Nâng cấp</button>
                 </div>
               )
            })}
            
            {!isPending && userObjects?.data.length === 0 && (
                <p style={{textAlign: "center", width: "100%"}}>Bạn chưa có Hero nào.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;