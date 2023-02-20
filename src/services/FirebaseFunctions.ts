import { getDatabase, ref, get, set , onValue, onChildAdded, Database } from "firebase/database";
import { auth } from "../../FirebaseConfig";

const db:Database = getDatabase();
// const CommentRef = ref(db, `RoomBase/${auth.currentUser?.uid}`);

class FBRTDB {

    public currentChat:any = null;
    public authID:string = ""; 
    public chatSnapShot:any[] = []

    constructor(){
        this.authID = auth.currentUser?.uid as string || "";
    }

    LiverReceptionComment(){
        const waitAuth:any = (() => 
            new Promise((resolve:any,reject:any) => {
                let count = 0;
                setInterval(() => {
                count++;
                if(this.authID !== ""){
                    resolve();
                }else if(count > 20){
                    reject();
                }
                },100);
            })
        )();

        waitAuth.then(() => {
            const CommentRef = ref(db, `RoomBase/${auth.currentUser?.uid}`);
            onChildAdded(CommentRef, (snapshot) => {
                this.chatSnapShot.push( {
                    "key":snapshot.key,
                    "kinds":snapshot.val().kinds,
                    "name":snapshot.val().name,
                    "Comment":snapshot.val().message})
                    // メモ：取得自体はリアルタイムでできてる
                });
        },() => {
            alert("AuthIDが取得できませんでしta")
        });
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();