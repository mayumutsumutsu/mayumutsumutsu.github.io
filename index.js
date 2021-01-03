var score = 0; //cookieの値(ここが変わると姿が変わる)
//undifinedだとボタンクリックでNaN

var img = document.getElementById("image_place")
//img関数にimage_placeを設定

function set(num) { //setオブジェクトでnumを格納
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret; //ret関数を定義
    if (num < 10) { //set(num)の数字(HourとMinの価)が10以下の場合
        ret = "0" + num; //0をつけて表示(00:01など)
    } else {
        ret = num; //10以上であればそのまま表示
    }
    return ret; //ret関数を返す
}

function clock() { //時計を作る関数
    var now = new Date(); //現在日時の取得
    var Hour = set(now.getHours()); // 時間をnowHourに入れる
    var Min = set(now.getMinutes()); // 分をnowMinに入れる
    var char = Hour + ":" + Min; //現在時刻を表示する変数

    if (Hour >= 6 && Hour < 22) { //現在時刻が6時～22時の時
        img.src = "image/okiru.png"; //キャラクターが起きる
        console.log("scoreは" + score); //確認用
        console.log("cookieの値は" + document.cookie); //確認用
        image_place.onclick = function () { //画像がクリックされたら
            img.src = "image/okiru2.png"; //口が動く
            random = Math.floor(Math.random() * 5);
            //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
            if (random == 0) document.getElementById("text").innerHTML = "寝る2～3時間前にお風呂に入っておくとぐっすり寝られるよ!";
            if (random == 1) document.getElementById("text").innerHTML = "お昼寝は午後2時に20分だけ寝るのがベストだよ!寝すぎには気を付けて!";
            if (random == 2) document.getElementById("text").innerHTML = "適度な運動は睡眠にも身体にも◎!でも激しい運動はNG!";
            if (random == 3) document.getElementById("text").innerHTML = "寝る前にカフェインを摂るのは睡眠に悪いよ!気を付けて!";
            if (random == 4) document.getElementById("text").innerHTML = "朝は太陽の光を浴びると、体内時計のスイッチがオンになるよ!";
            if (random == 5) document.getElementById("text").innerHTML = "最適な睡眠時間は7時間前後と言われているよ";
        };
    } else { //現在時刻が22時～6時の時
        img.src = "image/sleep.png";
        console.log(char); //時間確認用
        image_place.onclick = function () {
            random = Math.floor(Math.random() * 5);
            if (random == 0) document.getElementById("text").innerHTML = "寝る2～3時間前にお風呂に入っておくとぐっすり寝られるよ!";
            if (random == 1) document.getElementById("text").innerHTML = "お昼寝は午後2時に20分だけ寝るのがベスト!";
            if (random == 2) document.getElementById("text").innerHTML = "適度な運動は睡眠にも身体にも◎!でも激しい運動はNG!";
            if (random == 3) document.getElementById("text").innerHTML = "寝る前にカフェインを摂るのは睡眠に悪いよ!気を付けて!";
            if (random == 4) document.getElementById("text").innerHTML = "朝は太陽の光を浴びると、体内時計のスイッチがオンになるよ!";
            if (random == 5) document.getElementById("text").innerHTML = "最適な睡眠時間は7時間前後と言われているよ";
        };
    }
    if (document.cookie == 1) { //cookieの値が1であればキャラクターを進化させる
        img.src = "image/shinka.png"; //進化画像を配置
    }
}
setInterval('clock()', 1000); //clock(時計)を1秒間に1回実行する

//ボタン作成
var img_2 = document.getElementById("botan_place") //画像読み込み
img_2.src = "image/botan.png"; //画像配置

botan_place.onclick = function () { //ボタンを押した処理
    location.replace('http://mayumutsumutsu.github.io/watch.html');
    //計測画面に移動
}

//ここからwatch.js
var select_Hour = document.getElementById("select_Hour");
//HTMLのselect_Hourで選ばれた数字を入れる為の変数
var selectMin = document.getElementById("select_Min");
var saveHour = 0;
//起床時間の変数
var saveMin = 0;
var alarm = document.getElementById("alarm");
//ジャイロの値を入れる変数
var alpha = 0;
var beta = 0;
var gamma = 0;
var count = 0; //illuminanceが0になった時にカウントされる関数(0を書かないとNaN表記)

function save() { //起床時間をセットする関数
    saveHour = Number(select_Hour.value); //起床時間をsaveHourに格納
    saveMin = Number(select_Min.value); //起床時間をsaveMinrに格納
    alarm.load(); //音を読み込む
    console.log(saveHour, ":", saveMin, "に保存"); //確認用
    alert("保存できました!"); //アラートで表示
};

function sensor() { //環境光センサーを使う関数
    function update(illuminance) { //update関数は毎フレーム実行＆illuminanceは変数
        console.log("環境光センサー"); //確認用
        document.getElementById("value").innerHTML = illuminance + " lux"; //明るさの文字列を表示
        if (illuminance == 0) { //明るさが0であれば
            count++; //カウントする
            //ここだけだと毎秒実行されない
        }
    }
    if ("AmbientLightSensor" in window) { //もし端末が"AmbientLightSensor"に対応していれば
        try {
            var sensor = new AmbientLightSensor(); //関数を宣言する
            sensor.addEventListener("reading", function (event) { //センサーの値を読み取る
                update(sensor.illuminance); //明るさを毎フレーム実行
            });
            sensor.start();
        } catch (e) { //センサーが無かったら
            console.error(e); //エラー
        }
    }
}

setInterval('sensor()', 1000); //環境光センサーを1秒に1回回す


function ring() { //音を鳴らす関数
    var now_ring = new Date(); //現在時刻を取得する変数
    var Hour_ring = set(now_ring.getHours()); //現在時刻(時)を入れる変数
    var Min_ring = set(now_ring.getMinutes());
    if (Hour_ring == saveHour && Min_ring == saveMin) {
        //現在時刻が選択時刻と同じであれば
        alarm.play(); //音を再生する
        console.log("alarm"); //確認用
        log.style.display = "block"; //watch.htmlのlog.style.displayを表示
    }
};
setInterval('ring()', 1000); //音を再生する関数を1秒に1回回す

function stop() { //音を止める関数
    alarm.pause(); //音を止める
    alarm.currentTime = 0; //音源を初期の位置に戻す
    console.log("stop click"); //確認用
    if (count <= 10) { //count(暗い時間)が1以上であれば
        score++; //scoreに足す
        document.cookie = score; //scoreの値をcookieに保存する
    }
    if (count > 10) { //count(暗い時間)が1以上であれば
        score--; //scoreに足す
        document.cookie = score; //scoreの値をcookieに保存する
    }
    ring = function () {
        return false; //処理を止める
    };
};

function displayDate() {
    //ジャイロセンサー値表示
    var txt = document.getElementById("txt"); //html内のtxtに変数を入れる
    txt.innerHTML = count;
    
    var txt2 = document.getElementById("txt2"); //html内のtxtに変数を入れる
    txt2.innerHTML = score;

    setInterval('displayDate()', 10000); //displayDataを10秒間に1回動かす
    //1秒間に1回だとプログラムが重くなる
};

function re() {
    location.replace('http://mayumutsumutsu.github.io/index.html');
    //ホーム画面に戻る
};
