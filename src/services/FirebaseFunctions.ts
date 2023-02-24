import { getDatabase, ref, get, set , onValue, onChildAdded, Database, push } from "firebase/database";
import { auth } from "../../FirebaseConfig";
import { defineComponent, reactive, onMounted} from 'vue';
import store from '../store';
import {RouteParams, useRoute} from 'vue-router'

const db:Database = getDatabase();

class FBRTDB {
    public authID:string = "";
    public userName:string = "";
    constructor(){
        this.authID = store.getters['userid'] as string || "";
        this.userName = store.getters['username'] as string || "";

    }

    LiverReceptionComment(){
        const route = useRoute();
        const { id } = route.params;
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
            const CommentRef = ref(db, `RoomBase/${id}/Comment`);
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

    AddComment(WriteComment:string, id:RouteParams){
        const 
        NOW = new Date(),
        yyyy = NOW.getFullYear(),
        mm = String(NOW.getMonth() + 1).padStart(2, "0"),
        dd = String(NOW.getDate()).padStart(2, "0"),
        hh = String(NOW.getHours()).padStart(2, "0"),
        hmm = String(NOW.getMinutes()).padStart(2, "0"),
        ss = String(NOW.getSeconds()).padStart(2, "0"),
        ms = String(NOW.getMilliseconds()).padStart(3, "0");

        const timeStamp = `${yyyy}/${mm}/${dd} ${hh}:${hmm}:${ss}:${ms}`;
        
        const RoomDatabaseRef = ref(db ,`RoomBase/${id}/Comment`);
        
        push(RoomDatabaseRef, {
            "user": this.authID,  
            "name": this.userName,
            "message":WriteComment,
            "timestamp":timeStamp,
        });
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();