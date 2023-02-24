import { getDatabase, ref, get, set , onValue, onChildAdded, Database } from "firebase/database";
import { auth } from "../../FirebaseConfig";
import { defineComponent, reactive, onMounted} from 'vue';
import store from '../store';

const db:Database = getDatabase();

class FBRTDB {
    public authID:string = "";
    constructor(){
        this.authID = store.getters['userid'] as string || "";
    }

    LiverReceptionComment(){
        console.log(this.authID);
        const chatSnapShot:any[] = reactive([]);
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
            const CommentRef = ref(db, `RoomBase/${this.authID}/Comment`);
            onChildAdded(CommentRef, (snapshot) => {
                chatSnapShot.push( {
                    "key":snapshot.key,
                    "name":snapshot.val().name,
                    "Comment":snapshot.val().message})
                });
        },() => {
            alert("IDが取得できませんでした");
        });
        return chatSnapShot
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();