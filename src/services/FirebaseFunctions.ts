import { getDatabase, ref, get, set , onValue, onChildAdded, Database } from "firebase/database";
import { auth } from "../../FirebaseConfig";

const db:Database = getDatabase();

class FBRTDB {

    LiverReceptionComment(){
        const waitAuth:any = (() => 
            new Promise((resolve:any,reject:any) => {
                let count = 0;
                setInterval(() => {
                count++;
                if(auth.currentUser?.uid != null){
                    resolve();
                }else if(count > 20){
                    reject();
                }
                },100);
            })
        )();

        let GetData:any = "";

        waitAuth.then(() => {
            const CommentRef = ref(db, `RoomBase/${auth.currentUser?.uid}`);
            onChildAdded(CommentRef, (snapshot) => {
                GetData = snapshot.val().message;
                console.log("key:" + snapshot.key);
                console.log("Val.text:" + snapshot.val().message);
            });
            console.log("22:",GetData)
        },() => {
            alert("AuthIDが取得できませんでした")
        });
        return GetData;
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();