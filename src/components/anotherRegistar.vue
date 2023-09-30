<template>
  <div class="Profile-Regist-Fld" v-if="Regist">
    <Notion v-if="NotionOpen" @onClick="NotionClose"></Notion>
    <SCT v-if="SCTOpen" @onClick="SCTClose"></SCT>
    <Policy v-if="PolicyOpen" @onClick="PolicyClose"></Policy>

    <div class="Regist-Ground-Work">
      <div class="Banner-Fld">
        <img src="../assets/another/banner.png">
      </div>

      <div class="Title-Fld">
        <img src="../assets/another/Profile.png">
      </div>

      <div class="Mail-Input-Fld">
        <img src="../assets/another/mail.png">
        <input v-model="MailAdress" class="Mail-Adress">
        <div class="Border-Line"></div>
      </div>

      <div class="Notes-Fld">
        <img src="../assets/another/notes.png">
        <div class="Notes-Text">
          ドメイン拒否、PCメール拒否をしていると登録完了メールを受け取れません。<br>
          123chat.jpからのメールを受信できるよう設定の確認をお願い致します。
        </div>
        <div class="Border-Line"></div>
      </div>

      <div class="NickName-Fld">
        <img src="../assets/another/nickname.png">
        <input v-model="NickName" class="NickName-Text" maxlength="10">
        <div class="Border-Line"></div>
      </div>

      <div class="Birthday-Fld">
        <img src="../assets/another/birthday.png">
        <div class="Birthday-Choice-Area">
          <select v-model="BirthdayMonth" class="Birthday">
            <option value="" disabled></option>  
            <option v-for="n in 12" :value="n" :key="n">
              {{ n }}月
            </option>
          </select>
          <select v-model="Birthday" class="Birthday">
            <option value="" disabled></option>  
            <option v-for="n in 31" :value="n" :key="n">
              {{ n }}日
            </option>
          </select>
        </div>
        <div class="Birthday-Notes">
          <img src="../assets/another/birthdaynotes.png">
        </div>
        <div class="Border-Line"></div>
      </div>

      <div class="Self-Introduction-Fld">
        <img src="../assets/another/selfintroduction.png">
        <textarea v-model="Introduction" maxlength="100" class="Self-Introduction-Text"></textarea>
        <div class="Remaining">残り文字数<span>{{ (100 - Introduction.length) }}</span>文字</div>
        <div class="Border-Line"></div>
      </div>

      <div class="PassWord-Fld">
        <img src="../assets/another/password.png">
        <input type="password" v-model="PassWordfirst" class="NickName-Text">
        <img src="../assets/another/passwordnotes.png">
      </div>

      <div class="PassWordAgain">
        <img src="../assets/another/passwordagain.png">
        <input type="password" v-model="PassWordsecond" class="NickName-Text">
        <div class="Border-Line"></div>
      </div>

      <div class="Terms-Of-Service-Fld">
        <img src="../assets/another/termsofservice.png">
        <div class="Terms-Of-Service-Text">
          株式会社カラット（以下「当社」といいます。）は、当社が運営し提供するサービス「アナザーヒロイン～ヒロインデイズ～」（以下、「本サービス」といいます）について、以下のとおり利用規約（以下「本規約」といいます）を定めます。<br>
          <br>
          第1条（はじめに）<br>
          1.ユーザーは、本規約に同意する事を前提として、本サービスを利用する事ができます。ユーザーは、年齢や利用環境等、当社が定める条件に応じて、当社の定める範囲内で、本サービスを利用するものとします。<br>
          <br>
          2.当社は、本サービス及び本サービスを利用して提供される一切のサービスについて、いつでも任意にその内容を変更し、中断または終了することができるものとします。<br>
          <br>
          3.本規約に同意しないユーザーは、本サービスを利用することはできないものとし、直ちに本サービスより退会もしくは利用を中止するものとします。<br>
          <br>
          4.ユーザーは、本サービスの利用を、自身の所有するスマートフォン端末（以下、単に「端末」といいます）またはPCの操作によって行うものとします。<br>
          <br>
          第2条（本規約の変更）<br>
          1.当社は、ユーザーに対し事前に通知またはユーザーから承諾を得る事なく、いつでも任意に、本規約を改訂する事ができるものとします。変更後の規約は、本サービス又は当社の別途指定するウェブサイト上に提示するものとし、当該掲示がなされた時点で効力を生じるものとします。<br>
          <br>
          2.ユーザーは、本規約の変更後に本サービスを利用した場合、変更後の本規約に同意したものとみなされます。仮に変更後の本規約に同意できない場合、直ちに本サービスの利用を中止するものとします。<br>
          <br>
          第3条（著作権等の権利の帰属）<br>
          1.本サービスを構成する文章、画像、プログラムその他一切の情報について発生している著作権その他の知的財産権、肖像権及びパブリシティ権その他の人格権ならびに所有権その他の財産権は、ユーザーが自ら作成したものに関する権利を除き、当社又は当該権利を有する第三者に帰属します。<br>
          <br>
          2.当社は、ユーザーが本サービスにおいて投稿、アップロード又は保存した全ての情報（文字情報、画像情報等を含みますがこれらには限られません。以下「ユーザーコンテンツ」といいます）について、これらを保存・蓄積した上、本サービスの円滑な運営及び改善を目的として、無償、無期限かつ無条件で、あらゆる態様で利用でき、ユーザーはこれに同意するものとします。<br>
          <br>
          第4条（ユーザー情報及びユーザーコンテンツの取り扱い）<br>
          1.当社は、本サービスに関し、次に掲げる情報（以下「ユーザー情報」といいます）を取得する事があります。<br>
          (1)ユーザー個人に関する情報：ユーザーが本サービスに登録し、当社に送信したアカウント名（ユーザーの実名である場合を含みます）、電話番号、メールアドレス、生年月日及び性別等。<br>
          (2)利用端末に関する情報：使用デバイス、OS、端末言語設定、アクセス国等。<br>
          (3)通信環境に関する情報：通信キャリア、通信環境、アクセス地域等。<br>
          (4)利用状況に関する情報：本サービスのバージョン、本サービスの利用履歴等。<br>
          (5)会員からの個人情報の取り扱いに関する同意を求めるための連絡。<br>
          <br>
          2.当社は、ユーザー情報を保存・蓄積した場合、当社のプライバシーポリシーに基づき、善良な管理者の注意義務に従い取り扱うとともに、以下の目的で使用します。<br>
          (1)本サービスの運営（当社からユーザーに対して、あらゆる情報を提供することを含みます）。<br>
          (2)当社がユーザーにとって有益だと判断する当社のサービス（本サービスに限りません）又は広告主企業や提携先企業の商品、サービス等に関する情報の提供。<br>
          (3)ユーザーに対する、本サービスの運営に著しく影響を及ぼす事柄（本サービス内容の大幅な変更、一時停止を含みますがこれらに限られません）に関する連絡。<br>
          (4)ユーザーに対する、ユーザー情報の取り扱いに関する同意を求めるための連絡。<br>
          (5)本サービスの利用状況等に係る統計情報の作成、本サービス又は当社ウェブサイト等における公表及び第三者への販売その他の提供。<br>
          (6)ユーザーの年齢、職業、性別、趣味・嗜好等に合わせた広告その他の状況の提供。<br>
          <br>
          3.当社は、ユーザー情報及びユーザーコンテンツの保存義務を負わず、これらの完全性、可用性について保証しません。ユーザーは、ユーザー情報及びユーザーコンテンツを保全したい場合、自らの責任によりバックアップをとるものとします。<br>
          <br>
          4.当社は、ユーザーが本サービスを退会し、又は当社が本サービスの運営を終了したときは、当社の判断により、ユーザー情報及びユーザーコンテンツを全て消去できるものとし、その返却等の要望には応じません。<br>
          <br>
          5.当社は、3か月以上ゲームにアクセスをしていないアカウントのメッセージ、また1年以上前のメッセージの一部を削除させて頂く場合がございます。<br>
          <br>
          第5条（料金及び費用）<br>
          1.ユーザーは、原則として、本サービスを一部無料で利用できるものとします。ただし当社は、ユーザーの選択によって追加又は拡張できる機能の全部又は一部を有料とし、その他有料のサービス（本サービス内で利用できるポイント、アイテム等の販売等を含みますが、これらに限定されません）を提供する場合があります。<br>
          <br>
          2.当社は、本サービスにおいて無料又は有料とされている機能について、当社の判断により、その価格を変更する場合があります。ユーザーは、当該変更に承諾しない場合、本サービスの全部又は一部を利用できなくなる場合がある事について、予め承諾するものとします。<br>
          <br>
          3.本サービスの利用にあたって必要な端末の購入、導入又は維持にかかる費用、パケット料、データ利用料などの通信料その他の一切の費用は、ユーザーの負担とします。<br>
          <br>
          第6条（禁止事項）<br>
          1.当社は、ユーザーに対し、本サービスの利用に関し、次の各号のいずれかに該当する行為を禁止します。<br>
          (1)法令、公序良俗又は本規約に違反する行為、又はそのおそれのある行為。<br>
          (2)当社又は第三者の著作権その他の知的財産権、肖像権及びパブリシティ権その他の人格権ならびに所有権その他の財産権を侵害する行為。<br>
          (3)当社又は第三者を不当に差別し又は誹謗中傷する行為、当社又は本サービスの名誉・信用を毀損する行為。<br>
          (4)第三者へのいやがらせ、わいせつ、悪口、嫌悪感を与える表現や内容を含む一切のユーザーコンテンツを投稿し、書き込みし、又はアップロードする行為。<br>
          (5)アダルトサイト、出会い系サイト等へのリンクを掲載する行為、異性との出会いを希望又は誘導することを目的とする行為。<br>
          (6)氏名、名称、電話番号、メールアドレス、情緒などの特定の個人を特定できる情報、又は企業、団体などの非公開情報、営業秘密、秘密情報を、本人又は権利者の許可無く取得、開示、改ざんもしくは漏洩させる行為、又はそのおそれのある行為。<br>
          (7)第三者になりすまし、その他虚偽の情報を登録及び掲載する行為。<br>
          (8)他のユーザーにつきまとい、執拗に追いかける行為など、他のユーザーの意思に反する一切の行為。<br>
          (9)不正アクセス、又は他人であるように振る舞うなどの誤解を与える行為、又はそのおそれのある行為。<br>
          (10)ねずみ講、マルチ商法、ネットワークビジネスその他連鎖講に類する取引の宣伝・告知、勧誘及びその取引行為。<br>
          (11)当社の承認を得ずに行われる、営利を目的とする行為。<br>
          (12)当社の承認を得ずに行われる、複数のユーザーアカウントを保有し、又はユーザーアカウントを複数人で共有する行為。<br>
          (13)本サービスを運営するためのサーバー又はネットワークに著しく負荷をかける行為。<br>
          (14)本サービスを改変、毀損し、又は逆アセンブル、逆コンパイル、リバースエンジニアリングする行為。<br>
          (15)当社が本サービスを通じて提供する各種コンテンツ（本サービス内で利用できるポイント、アイテム等を含みますが、これらに限定されません。以下「サービス内コンテンツ」といいます）を不正な方法で取得する行為、又はこれを助長する行為。<br>
          (16)ユーザーアカウント、サービス内コンテンツその他本サービスにおいてユーザーが利用可能な権利又は利益の全部又は一部を、現金その他の財産上の利益を対価として第三者に譲渡し又は利用させる行為、ならびにその宣伝・告知・勧誘。<br>
          (17)当社又は第三者に対して迷惑、損害を与える行為、又はそのおそれのある行為。<br>
          (18)本サービスの運営を妨げる行為、又はそのおそれのある行為。<br>
          (19)その他当社が不適切と判断する行為。<br>
          <br>
          第7条（利用者資格）<br>
          1．18歳未満の方は本サービスを利用できません｡<br>
          2．一部機能の利用にあたっては、当社が指定する年齢認証が必要になります。<br>
          <br>
          第8条（免責）<br>
          1.当社は、本サービスが第三者の権利を侵害していないこと、及び本サービスを実行することが第三者の権利を侵害しないことを保証しません。<br>
          <br>
          2.ユーザーは、自己の責任と判断において本サービスを利用するものとします。当社は、本サービスの精度、完成度、正確性、妥当性、適用性、有用性及び可用性について保証せず、ならびにユーザーの使用目的及び使用する端末への適合性について保証しません。<br>
          <br>
          3.当社は、ユーザーが本サービスを通じて行う取引には一切関知しないものとし、本サービスを通じたいかなる情報の正確性も保証しません。ユーザーは、他のユーザーとの間で生じた一切の紛争については、自己の責任と判断において解決を図るものとします。<br>
          <br>
          4.地震、津波、台風、雷、大雨、洪水などの天災、戦争、争議、革命、労働争議などの不可抗力、本サービス運営において必要なシステム等の一時的又は大規模なメンテナンス、ネットワーク回線の混雑、プロバイダー等の障害、その他本サービスの運営関わる障害等により、一時的又は長期にわたって本サービスそのものの利用を停止もしくは終了させる場合があります。当社は、ユーザーに対し、これらの事象に関して責任を負いません。<br>
          <br>
          5.当社は、ユーザーに対し、本サービスに対する不正アクセス、コンピューターウイルスの侵入など、第三者の行為を原因としてユーザーに生じる一切の損害について責任を負いません。<br>
          <br>
          6.当社は、本サービスに関連して発生したユーザー又は第三者の損害について責任を負いません。また、当社は、ユーザーが一度支払った金銭等について、その理由を問わず返金しません。<br>
          <br>
          7.当社は、本サービス上で実施される広告の広告主等とユーザーとの間におけるあらゆるトラブル、約束、保証等及びその結果としてユーザーに生じる一切の損失・損害について責任を負いません。<br>
          <br>
          8.当社は、本サービスからリンクにより遷移可能な一切の第三者ウェブサイトについて、その適法性、整合性、安全性、正確性、公序良俗に反しないものであることなどを保証しません。<br>
          <br>
          9.当社は、本サービスに関するユーザーからの問い合わせや改善等の意見その他の提案、フィードバック等について、これらの全てに回答をし、又は何らかの対応を実施する義務を負わず、自らの裁量及び任意の判断でこれらを実施するものとします。当社は、ユーザーからの問い合わせ、意見、提案、フィードバック等の内容に対して何らかの対応を実施することがありますが、当社による当該行為は当該ユーザーに対し、個別に回答や報告、金銭的な保証などを行う義務を負うものとは解釈されません。<br>
          <br>
          第9条（端末及びアカウントの管理）<br>
          1.ユーザーは、本サービスの利用にあたり、その利用に用いる自身の端末及びユーザー登録によって取得した自らのアカウント（以下「ユーザーアカウント」といいます）を、自らの責任において管理するものとします。<br>
          <br>
          2.ユーザーは、自身の端末又はユーザーアカウントを利用してなされた行為について、当該端末又はアカウントを現実に利用する者が誰であるかを問わず一切の責任を負うものとし、当該行為により当社又は第三者が損害を被った場合、その損害を賠償するものとします。<br>
          <br>
          3.当社又は、ユーザーの使用する端末の故障、紛失、第三者からのマルウェア、スパイウェア、ウイルス、ハッキング等による攻撃、ユーザーアカウントの管理不備、使用上の過誤又は第三者の使用等により、ユーザーが損害を被った場合でも、責任を負いません。<br>
          <br>
          4.ユーザーは、自身のユーザーアカウントが不正に取得され、又は端末もしくはユーザーアカウントが第三者により利用されるおそれがある場合は、速やかに退会処理をし、又は当社に報告をするなど、当社又は第三者に損害が発生する事を避けるために合理的に必要と考えられるあらゆる措置をとるものとします。<br>
          <br>
          第10条（アカウントの停止等）<br>
          当社は、ユーザーが次の各号のいずれかに該当する場合、本サービスの一部又は全部の提供を停止し、ユーザーアカウントの利用を停止及び削除し、又は退会させ、その他当社が適当と考える措置をとることができるものとします。<br>
          当社は、当該措置についてその理由を開示する義務を負わないものとし、ユーザーは、当社に対し、当該措置について異議を申し立てることはできないものとします。<br>
          <br>
          (1)本規約の禁止事項を行うなど、本規約に違反した場合、又はそのおそれがあると当社が判断した場合。<br>
          (2)理由のいかんを問わず、ユーザーの行為（本サービス外の行為及び不作為を含みます。）によって、本サービスの運営に支障が生じ、又は妨害がされたと当社が判断した場合、又はそのおそれのあると当社が判断した場合。<br>
          (3)その他本サービスのユーザーとして不適切と当社が判断した場合。<br>
          <br>
          第11条（権利義務等の譲渡禁止）<br>
          ユーザーは、本規約に基づく一切の権利又は義務について、第三者への譲渡、承継、質入その他の一切の処分をしてはならないものとします。<br>
          <br>
          第12条（退会）<br>
          1.ユーザーは、本サービスを退会するときは、当該時点において当社に対して有している一切の債務を、直ちに履行するものとします。<br>
          <br>
          2.ユーザーが本サービスを端末上から削除した場合、当社は当該ユーザーが退会したものとみなします。ユーザーが再度、本サービスを利用する場合、本サービスを削除する以前の登録情報等の引き継ぎはできないものとします。<br>
          <br>
          3.ユーザーが、本サービスの利用に際して用いる端末について、修理又は機種変更等によりこれを交換した時は、当社が特に定める場合を除き、当該新たな端末において、端末を交換する以前の登録情報等の引き継ぎ等はできないものとします。<br>
          <br>
          第13条（損害賠償）<br>
          1.ユーザーは、本規約に違反したことにより、当社又は第三者に損害（合理的な弁護士費用を含みますがこれに限られません）を与えた場合、当社又は第三者に対し、その損害を賠償するものとします。<br>
          <br>
          2.当社が、第8条（免責）の規定にもかかわらず、ユーザーに対して損害賠償責任を負担する場合であっても、その損害賠償額は、当社に故意又は重過失ある場合を除き、当該ユーザーの当社に対する直近1ヶ月の支払額を上限とするものとします。<br>
          <br>
          第14条（準拠法及び裁判管轄）<br>
          1.本規約は、日本法に準拠し、日本法に従って解釈されるものとします。<br>
          <br>
          2.本サービス、本規約に関する一切の訴訟その他の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。<br>
          <br>
          以上
        </div>
        <div class="Agree-Check-Fld">
          <input type="checkbox" v-model="AgreeCheck" class="Agree-Check-box">
          <label>上記の利用規約に同意する</label>
        </div>
        <div class="Border-Line"></div>
      </div>

      <div class="Done-Btn-Fld">
        <img src="../assets/another/donebtn.png" @click="PostRegiatData">
        <div class="Border-Line-Bottom"></div>
      </div>

      <div class="Notions-Fld">
        <div class="Notion-Fld" @click="NotionOn">利用規約</div>
        <div class="SCT-Fld" @click="SCTOn">特定商取引法に基づく表記</div>
        <div class="Policy-Fld" @click="PolicyOn">プライバシーポリシー</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AnotherFc from '../services/anotherfunctions';
import Notion from '@/components/Notion.vue'
import SCT from '@/components/SCT.vue'
import Policy from '@/components/Policy.vue'

export default defineComponent({
  name: 'AnotherRegistar',
  components: {
    Notion,
    SCT,
    Policy
  },
  
  data: function(){
    return{
      Open:false,
      Mute:true,
      Start:false,
      Regist:true,
      MailAdress:"",
      NickName:"",
      BirthdayMonth:1,
      Birthday:1,
      Introduction:"",
      PassWordfirst:"",
      PassWordsecond:"",
      AgreeCheck:false,
      NotionOpen:false,
      SCTOpen:false,
      PolicyOpen:false
    }
  },

  methods: {

    NotionOn(){
      this.NotionOpen = true
    },

    NotionClose(Value:boolean){
      this.NotionOpen = Value
    },

    SCTOn(){
      this.SCTOpen = true
    },

    SCTClose(Value:boolean){
      this.SCTOpen = Value
    },

    PolicyOn(){
      this.PolicyOpen = true
    },

    PolicyClose(Value:boolean){
      this.PolicyOpen = Value
    },

    PostRegiatData(){
      if(this.MailAdress == ''){
        alert("メールアドレスを入力してください")
      } else if(this.NickName == "") {
        alert("ニックネームを入力してください")
      } else if( this.PassWordfirst == "" || this.PassWordsecond == ""){
        alert("パスワード欄に未入力があります")
      } else if( !this.PassWordfirst.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,32}$/)) {
        alert("パスワードは6文字〜32文字の英数字である必要があります。記号、空白は使えません。")
      } else if( this.PassWordfirst != this.PassWordsecond) {
        alert("パスワード欄とパスワード確認欄に違う値が入力されています")
      } else if( this.AgreeCheck == false){
        alert("「上記の利用規約に同意する」にチェックを入れてください")
      } else{
        AnotherFc.sendPostRequest(String(this.MailAdress), String(this.NickName), String(( '00' + this.BirthdayMonth ).slice( -2 )), String(( '00' + this.Birthday ).slice( -2 )), String(this.Introduction), String(this.PassWordfirst), String(this.PassWordsecond), true)
        .then((result) => {
          console.log("response_raw:",result),
          console.log("decoded_body:",result.body!.getReader().read().then((result) => {
            const response = new TextDecoder("utf-8").decode(result.value);
            const decoded_body = JSON.parse(response);
            console.log("response:",decoded_body);
            if(decoded_body.success == 1){
              window.location.href = "https://123chat.jp" + decoded_body.return;
            } else if( decoded_body.errormessage) {
              alert("処理エラー" + decoded_body.errormessage + '#informationFrame')
            }
          }))
        })
        .catch(error => console.log('error', error));
      }
    }
  },

  mounted(){

    const setFillHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 画面のサイズ変動があった時に高さを再計算する
    window.addEventListener('resize', setFillHeight);

    // 初期化
    setFillHeight();
  }
});
</script>

<style scoped lang="scss">

.Profile-Regist-Fld{
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #FFF;
  overflow: scroll;
  overflow-x: hidden;
}

.Border-Line{
  width: 85%;
  border-bottom: 0.5px solid #6e6b6b;
  content:"";
  margin-top: 10px;
}

.Border-Line-Bottom{
  width: 85%;
  border-bottom: 0.5px solid #6e6b6b;
  content:"";
  margin: 10px auto 10px auto;
}

.Header-Fld img{
  width: 100%;
}

.Banner-Fld{
  margin-top: -10px;
}

.Banner-Fld img{
  width: 100%;
}

.Title-Fld{
  margin-top: 20px;
}

.Title-Fld img{
  width: 100%;
}

.Mail-Input-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
  margin-top: 10px;
}

.Mail-Input-Fld img{
  margin-right: 6.8vw;
  width: 100%;
}

.Mail-Adress{
  margin-right: 17vw;
  margin-top: -5px;
  padding-left: 5px;
  border-radius: 5px;
  width: 58vw;
}

.Notes-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.Notes-Fld img{
  width: 100%;
  margin-right: 62vw;
}

.Notes-Text{
  font-family: CorporateLogo2;
  color: #000;
  font-size: 2.7vw;
  font-weight: bold;
}

.NickName-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.NickName-Fld img{
  width: 100%;
  margin-right: 37vw;
}

.NickName-Text{
  margin-right: 17vw;
  margin-top: -5px;
  padding-left: 5px;
  border-radius: 5px;
  width: 58vw;
}

.Birthday-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.Birthday-Fld img{
  width: 100%;
  margin-right: 61.5vw;
}

.Birthday-Choice-Area{
  margin-right: 41vw;
}

.Birthday{
  margin-right: 15px;
  background-color: #FFF;
  color: #000;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 3px 20px 3px 5px;
}

.Birthday-Notes{
  width: 100%;
  margin-right: 30vw;
}

.Self-Introduction-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.Self-Introduction-Fld img{
  width: 100%;
  margin-left: -41vw;
}

.Self-Introduction-Text{
  width: 75%;
  height: 60px;
  margin-right: 2.8vw;
  border-radius: 5px;
}

.Remaining{
  font-family: CorporateLogo2;
  color: #000;
  font-size: 2.7vw;
  font-weight: bold;
  margin-left: 51vw;
  margin-top: 5px;
}

.Remaining span{
  color: #ea0606;
  font-family: CorporateLogo;
  font-size: 2.5vw;
  font-weight: bolder;
}

.PassWord-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.PassWord-Fld img{
  width: 100%;
  margin-right: 7vw;
}

.PassWordAgain{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.PassWordAgain img{
  width: 100%;
  margin-right: 20vw;
}

.Terms-Of-Service-Fld{
  display: flex;
  justify-content: flex-end;
  flex-flow: column;
  align-items: center;
}

.Terms-Of-Service-Fld img{
  width: 100%;
  margin-right: 60vw;
}

.Terms-Of-Service-Text{
  width: 75%;
  height: 60px;
  border: 1px solid;
  overflow: scroll;
  margin-right: 2.8vw;
  text-align: left;
  font-size: 2.8vw;
}

.Agree-Check-Fld{
  margin-top: 10px;
  display: flex;
  font-family: CorporateLogo2;
  font-size: 2.5vw;
  align-items: center;
}

.Agree-Check-box{
  width: 3vw;
  margin: 0;
  margin-right: 2px;
}

.Done-Btn-Fld img{
  width: 100%;
  margin: -9px 0 10px 0;
}

.Notions-Fld{
  font-size: 8pt;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.SCT-Fld{
  margin-left: 5px;
  margin-right: 5px;
}

@media (min-width: 500px) {
  .Profile-Regist-Fld{
    width: 500px;
    height: calc(var(--vh, 1vh) * 100);
    position: fixed;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: #FFF;
    overflow: scroll;
    overflow-x: hidden;
    margin: 0 auto;
    right: 0;
    left: 0;
  }

  .Border-Line{
    width: 425px;
    border-bottom: 0.5px solid #6e6b6b;
    content:"";
    margin-top: 10px;
  }

  .Header-Fld img{
    width: 500px;
  }

  .Banner-Fld{
    margin-top: -10px;
  }

  .Banner-Fld img{
    width: 500px;
  }

  .Title-Fld{
    margin-top: 20px;
  }

  .Title-Fld img{
    width: 500px;
  }

  .Mail-Input-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
    margin-top: 10px;
  }

  .Mail-Input-Fld img{
    margin-right: 6.8vw;
  }

  .Mail-Adress{
    margin-right: 133px;
    margin-top: -5px;
    padding-left: 5px;
    border-radius: 0;
    width: 265px;
  }

  .Notes-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .Notes-Fld img{
    margin-right: 324px;
  }

  .Notes-Text{
  font-family: CorporateLogo2;
  color: #000;
  font-size: 14px;
  font-weight: bold;
}

  .NickName-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .NickName-Fld img{
    margin-right: 198px;
  }

  .NickName-Text{
    margin-right: 133px;
    margin-top: -5px;
    padding-left: 5px;
    border-radius: 0;
    width: 265px;;
  }

  .Birthday-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .Birthday-Fld img{
    width: 500px;
    margin-right: 318px;
  }

  .Birthday-Choice-Area{
    margin-right: 266px;
  }

  .Birthday{
    margin-right: 15px;
    background-color: #FFF;
    color: #000;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #000;
    border-radius: 0px;
    padding: 3px 20px 3px 5px;
  }

  .Birthday-Notes{
    width: 500px;
    margin-right: 168px;
  }

  .Self-Introduction-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .Self-Introduction-Fld img{
    width: 500px;
    margin-left: -212px;
  }

  .Self-Introduction-Text{
    width: 377px;
    height: 60px;
    margin-right: 27px;
  }

  .Remaining{
    font-family: CorporateLogo2;
    color: #000;
    font-size: 10px;
    font-weight: bold;
    margin-left: 270px;
    margin-top: 5px
  }

  .Remaining span{
    color: #ea0606;
    font-family: CorporateLogo;
    font-size: 5px;
    font-weight: bolder;
  }

  .PassWord-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .PassWord-Fld img{
    width: 500px;
    margin-right: 47px;
  }

  .PassWordAgain{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .PassWordAgain img{
    width: 500px;
    margin-right: 116px;
  }

  .Terms-Of-Service-Fld{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    align-items: center;
  }

  .Terms-Of-Service-Fld img{
    width: 500px;
    margin-right: 320px;
  }

  .Terms-Of-Service-Text{
    width: 390px;
    height: 60px;
    border: 1px solid;
    overflow: scroll;
    text-align: left;
    font-size: 15px;
  }

  .Agree-Check-Fld{
    margin-top: 10px;
    display: flex;
    font-family: CorporateLogo2;
    font-size: 13px;
    align-items: center;
  }

  .Agree-Check-box{
    width: 12px;
    margin: 0;
    margin-right: 2px;
  }

  .Done-Btn-Fld img{
    width: 500px;
  }
}

</style>