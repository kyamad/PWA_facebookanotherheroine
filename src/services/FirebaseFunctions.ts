import { getDatabase, ref, query, limitToLast, onChildAdded, Database, push } from "firebase/database";
import { auth } from "../../FirebaseConfig";
import { defineComponent, reactive, onMounted} from 'vue';
import store from '../store';
import {useRoute} from 'vue-router'

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
                    "Comment":snapshot.val().message
                })
            });
        },() => {
            alert("IDが取得できませんでした");
        });
        return chatSnapShot
    }

    AddComment(WriteComment:string,id:string){
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

    ThemaChoice(ThemaCategory:string,Content:string,id:string){
        if(ThemaCategory === "Talk"){
            const RoomDatabaseRef = ref(db ,`RoomBase/${id}/TalkThema`);
        
            push(RoomDatabaseRef, {
                "Category": "トークテーマ",  
                "Content": Content,
            });
        } else if(ThemaCategory === "Ogiri"){
            const RoomDatabaseRef = ref(db ,`RoomBase/${id}/OgiriThema`);
        
            push(RoomDatabaseRef, {
                "Category": "お題",  
                "Content": Content,
            });
        };
    }

    AddTopic(){
        const route = useRoute();
        const { id } = route.params;
        const TopicSnapShot:any[] = reactive([]);

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
            const recentPostsRefComment = query(ref(db, `RoomBase/${id}/OgiriThema`), limitToLast(1));
            const recentPostsRefTalkThema = query(ref(db, `RoomBase/${id}/TalkThema`), limitToLast(1));
            onChildAdded(recentPostsRefComment, (snapshot) => {
                TopicSnapShot.splice(0, TopicSnapShot.length);
                TopicSnapShot.push( {
                    "key":snapshot.key,
                    "Category":snapshot.val().Category,
                    "Content":snapshot.val().Content,
                })
            }),
            onChildAdded(recentPostsRefTalkThema, (snapshot) => {
                TopicSnapShot.splice(0, TopicSnapShot.length);
                TopicSnapShot.push( {
                    "key":snapshot.key,
                    "Category":snapshot.val().Category,
                    "Content":snapshot.val().Content,
                })
            });
        },() => {
            alert("IDが取得できませんでした");
        });
        return TopicSnapShot
    }

    LiverReceptionLetter(){
        const route = useRoute();
        const { id } = route.params;
        const LetterSnapShot:any[] = reactive([]);
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
            const CommentRef = ref(db, `RoomBase/${id}/Letter`);
            onChildAdded(CommentRef, (snapshot) => {
                LetterSnapShot.push( {
                    "key":snapshot.key,
                    "name":snapshot.val().name,
                    "Text":snapshot.val().message
                })
            });
        },() => {
            alert("IDが取得できませんでした");
        });
        return LetterSnapShot
    }
}

// console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);

export default new FBRTDB();