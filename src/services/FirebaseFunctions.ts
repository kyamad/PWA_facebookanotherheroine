import { getDatabase, ref, get, set , onValue, onChildAdded, Database } from "firebase/database";
import { auth } from "../../FirebaseConfig";
import store from '../store';

const db:Database = getDatabase();
// const CommentRef = ref(db, `RoomBase/${auth.currentUser?.uid}`);

class FBRTDB {

    public currentChat:any = null;
    public authID:string = ""; 
    public chatSnapShot:any[] = []

    constructor(){
        this.authID = store.getters['userid'] as string || "";
    }

    LiverReceptionComment(){
        const waitAuth:any =
         (() => 
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
            const CommentRef = ref(db, `RoomBase/${this.authID}`);
            onChildAdded(CommentRef, (snapshot) => {
                this.chatSnapShot.push( {
                    "key":snapshot.key,
                    "kinds":snapshot.val().Kinds,
                    "name":snapshot.val().name,
                    "Comment":snapshot.val().message})
                });
        },() => {
            alert("AuthIDが取得できませんでした");
        });
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();