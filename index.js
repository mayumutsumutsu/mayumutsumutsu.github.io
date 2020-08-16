console.log("index.js 読み込みOK");
var score = 0; //cookieの値(ここが変わると姿が変わる)
//undifinedだとボタンクリックでNaN

var img = document.getElementById("image_place")
//img関数にimage_placeを設定

function set(num) { // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret; //ret関数を定義
    if (num < 10) {
        ret = "0" + num;
    } //set(num)の数時(HourとMinの数字が10以下であれば先頭に0をつけて表示)
    else {
        ret = num;
    } //10以上であればそのまま表示
    return ret; //ret関数を返す
}

function clock() { //時計つくる
    var now = new Date(); //現在日時の取得
    var Hour = set(now.getHours()); // 時間をnowHourに入れる
    var Min = set(now.getMinutes()); // 分をnowMinに入れる
    var char = Hour + ":" + Min; //charに文を格納
    //canvasに時間表示させるコード書く(後で)
    console.log("読み込みOK_時計"); //確認用

    if (Hour >= 6 && Hour < 22) { //現在時刻が6時～22時の時
        img.src = "image/okiru.png"; //キャラクターが起きる
        //ctx.drawImage(img1, 100, 30); //canvas内に表示
        console.log("scoreは" + score); //確認用
        console.log("cookieの値は" + document.cookie); //確認用
        image_place.onclick = function () { //画像がクリックされたら
            img.src = "image/okiru2.png"; //口が動く
            random = Math.floor(Math.random() * 5);
            //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
            console.log(random); //確認用
            if (random == 0) document.getElementById("text").innerHTML = "寝る2～3時間前にお風呂に入っておくとぐっすり寝られるよ!";
            if (random == 1) document.getElementById("text").innerHTML = "お昼寝は午後2時に20分だけ寝るのがベストだよ!寝すぎには気を付けて!";
            if (random == 2) document.getElementById("text").innerHTML = "適度な運動は睡眠にも身体にも◎!でも激しい運動はNG!";
            if (random == 3) document.getElementById("text").innerHTML = "寝る前にカフェインを摂るのは睡眠に悪いよ!気を付けて!";
            if (random == 4) document.getElementById("text").innerHTML = "朝は太陽の光を浴びると、体内時計のスイッチがオンになるよ!";
            if (random == 5) document.getElementById("text").innerHTML = "最適な睡眠時間は7時間前後と言われているよ";
        };
    } else { //現在時刻が22時～6時の時
        img.src = "image/sleep.png";
        //ctx.drawImage(img2, 100, 30); //canvas内に表示
        console.log(char); //確認用
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
    if (document.cookie == 1) { //キャラクターの見た目のif文
        img.src = "image/shinka.png";
        console.log("進化"); //確認用
    }
}
setInterval('clock()', 1000); //clockを1秒間に1回実行する

//ボタン作成
var img_2 = document.getElementById("botan_place")
img_2.src = "image/botan.png";

botan_place.onclick = function () {
    location.replace('http://mayumutsumutsu.github.io/watch.html');
}

//ここからwatch.js
var select_Hour = document.getElementById("select_Hour");
var selectMin = document.getElementById("select_Min");
var saveHour = 0;
var saveMin = 0;
var alarm = document.getElementById("alarm");
var alpha = 0;
var beta = 0;
var gamma = 0;
var count = 0; //illuminanceが0になった時にカウントされる関数(0を書かないとNaN表記)

function save() {
    saveHour = Number(select_Hour.value); //起床時間をsaveHourに格納
    saveMin = Number(select_Min.value); //起床時間をsaveMinrに格納
    alarm.load(); //音を読み込み
    console.log(saveHour, ":", saveMin, "に保存");
    alert("保存できました!");
};

//ジャイロセンサー
function sensor() {
    window.addEventListener("deviceorientation", (dat) => {
        alpha = dat.alpha; //x軸
        beta = dat.beta; //y軸
        gamma = dat.gamma; //z軸
        console.log("ジャイロセンサー");
    });
}

//環境光センサー
function sensor2() {
    function update(illuminance) { //update関数は毎フレーム実行＆illuminanceは関数
        console.log("環境光センサー"); //確認用
        document.getElementById("value").innerHTML = illuminance + " lux"; //html内に明るさの文字列
        if (illuminance == 0) { //明るさが0なら
            count++; //カウント
            //ここだけだと毎秒実行されない
        }
    }
    if ("AmbientLightSensor" in window) { //もし端末が"AmbientLightSensor"に対応していたら
        try {
            var sensor = new AmbientLightSensor(); //関数宣言
            sensor.addEventListener("reading", function (event) { //センサーの値を読み取る
                update(sensor.illuminance); //明るさを毎フレーム実行
            });
            sensor.start();
        } catch (e) { //センサーが無かったら
            console.error(e); //エラー
        }
    }
}

setInterval('sensor2()',1000);

//音を鳴らしたら
function ring() {
    var now_ring = new Date();
    var Hour_ring = set(now_ring.getHours());
    var Min_ring = set(now_ring.getMinutes());
    if (Hour_ring == saveHour && Min_ring == saveMin) {
        alarm.play(); //音再生
        console.log("alarm");
        log.style.display = "block";
    }
};
setInterval('ring()', 1000);

//音を止めたら
function stop() {
    alarm.pause(); //音停止
    alarm.currentTime = 0;
    console.log("stop click");
    score++;
    document.cookie = score;
    //cookieに保存
    ring = function () {
        return false; //処理を止める
    };
};

function displayDate() {
    //ジャイロセンサー値表示
    var txt = document.getElementById("txt");
    txt.innerHTML = "alpha:" + alpha + "<br>" + "beta:" + beta + "<br>" + "gamma:" + gamma;
    
    var txt2 = document.getElementById("txt2");
    txt2.innerHTML = count;

    setInterval('displayDate()', 10000); //displayDataを10秒間に1回動かす
    //1秒間に1回だとプログラムがめちゃくちゃ重くなる
};

function re() {
    location.replace('http://mayumutsumutsu.github.io/index.html');
};
