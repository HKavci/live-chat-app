import { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./../context/authContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    // username değişkeninde saklanan kullanıcı adına sahip olan kullanıcının Firestore'daki bilgilerini sorgulamak için bir query (q) oluşturduk. Bu sorgu, users koleksiyonunda yer alan dokümanları arayacak ve displayName alanı username'e eşit olanları döndürecek.
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      // bu sorgu Firestore servisine gönderiliyor ve sonuçlar querySnapshot adlı bir değişkende depolanıyor.
      const querySnapshot = await getDocs(q);

      // forEach() metodu ile döngü sağlanıyor. Her bir döngüde, doc.data() yöntemi kullanılarak dokümandan ilgili veriler alınıyor ve setUser adlı bir fonksiyon yardımıyla state içerisindeki user değişkenine atanıyor.
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // currentUser ve user arasındaki chat i belirlemek için combinedId adında bir değişken oluşturduk.
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      // db adlı Firestore veritabanından chats koleksiyonu içerisindeki ilgili doküman (combinedId'ye sahip olan) alındı.
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // Eğer bu doküman yoksa yeni bir sohbet oluşturuyoruz. Böylece chats koleksiyonuna yeni bir doküman ekliyoruz.
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // userChats koleksiyonunda her iki kullanıcı için yeni bir sohbet kaydı oluşturduk.
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }

    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {error && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user?.photoURL} alt="user-img" />
          <div className="userChatInfo">
            <span>{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
