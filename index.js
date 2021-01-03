var score = 0;
var count = 0;

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

var img = document.getElementById("image_place")
//img関数にimage_placeを設定
//キャラクター画像設定

function clock() {
    var now = new Date(); //現在日時の取得
    var Hour = set(now.getHours()); // 時間をnowHourに入れる
    var Min = set(now.getMinutes()); // 分をnowMinに入れる
    var time = Hour + ":" + Min; //現在時刻を表示する変数 

    if (document.cookie == 0) {
        img.src = "image/1.png"
    };
    if (document.cookie >= -1) {
        img.src = "image/3.png"
    };
    if (document.cookie <= 1) {
        img.src = "image/2.png"
    };
}
setInterval('clock()', 1000); //clockを1秒間に1回実行する

//ボタン
var botan = document.getElementById("botan_place");
botan.src = "image/botan.png";
botan_place.onclick = function () {
    location.replace('http://mayumutsumutsu.github.io/watch.html');
}

var select_Hour = document.getElementById("select_Hour");
//HTMLのselect_Hourで選ばれた数字を入れる為の変数
var selectMin = document.getElementById("select_Min");
var saveHour = 0;
//起床時間の変数
var saveMin = 0;
var alarm = document.getElementById("alarm");

function save() { //起床時間をセットする関数
    saveHour = Number(select_Hour.value); //起床時間をsaveHourに格納
    saveMin = Number(select_Min.value); //起床時間をsaveMinrに格納
    alarm.load(); //音を読み込む
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
        log.style.display = "block"; //watch.htmlのlog.style.displayを表示
    }
};
setInterval('ring()', 1000); //音を再生する関数を1秒に1回回す

function stop() {
    alarm.pause(); //音を止める
    alarm.currentTime = 0; //音源を初期の位置に戻す
    if (count <= 0) {
        score--;
        document.cookie = score;
    };
    if (count >= 0) {
        score++;
        document.cookie = score;
    };
    ring = function () {
        return false; //処理を止める
    };
};

function displayDate() {
    var txt = document.getElementById("txt"); //html内のtxtに変数を入れる
    txt.innerHTML = count;
    
    var txt2 = document.getElementById("txt2"); //html内のtxtに変数を入れる
    txt2.innerHTML = score;

    setInterval('displayDate()', 10000); //displayDataを10秒間に1回動かす
    //1秒間に1回だとプログラムが重くなる
};

function re() {
    location.replace('http://mayumutsumutsu.github.io/home.html');
    //ホーム画面に戻る
};
