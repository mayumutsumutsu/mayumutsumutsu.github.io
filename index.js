var score = 0; //cookieの値(ここが変わると姿が変わる)

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

function clock() {
    var now = new Date(); //現在日時の取得
    var Hour = set(now.getHours()); // 時間をnowHourに入れる
    var Min = set(now.getMinutes()); // 分をnowMinに入れる
    var time = Hour + ":" + Min; //現在時刻を表示する変数 

    if (document.cookie == 0 || document.cookie == 1 || document.cookie == 2 || document.cookie == 3 || document.cookie == 4 || document.cookie == -1 && Hour > 7 && Hour < 23) {
        //cookieの値が-1～4かつ、7時～23時だった時
        img.src = "image/1.png"; //キャラクター画像を設定
        image_place.onclick = function () { //画像がクリックされたら
            img.src = "image/1.1.png"; //キャラクター画像を設定
            random = Math.floor(Math.random() * 5);
            //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
            if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
            if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
            if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
            if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
            if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
        };
    } else { //cookieの値が0かつ、現在時刻が23～7時だった時
        //ここ動いてない
        img.src = "image/sleep.png"; //キャラクター画像を設定
        random = Math.floor(Math.random() * 5);
        //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
        if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
        if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
        if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
        if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
        if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
    };
    if (document.cookie == 5 || document.cookie == 6 || document.cookie == 7 && Hour >= 7 && Hour < 23) {
        //cookieの値が5～7かつ、7時～23時だった時
        img.src = "image/2.png"; //キャラクター画像を設定
        image_place.onclick = function () { //画像がクリックされたら
            img.src = "image/2.1.png"; //キャラクター画像を設定
            random = Math.floor(Math.random() * 5);
            //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
            if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
            if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
            if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
            if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
            if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
        };
        if (document.cookie == 8 || document.cookie == 9 || document.cookie == 10 && Hour >= 7 && Hour < 23) {
            //cookieの値が8～10かつ、7時～23時だった時
            img.src = "image/4.png"; //キャラクター画像を設定
            image_place.onclick = function () { //画像がクリックされたら
                img.src = "image/4.1.png"; //キャラクター画像を設定
                random = Math.floor(Math.random() * 5);
                //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
                if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
                if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
                if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
                if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
                if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
            };
        };
        if (document.cookie >= 11 && Hour >= 7 && Hour < 23) {
            //cookieの値が11以上かつ、7時～23時だった時
            img.src = "image/5.png"; //キャラクター画像を設定
            image_place.onclick = function () { //画像がクリックされたら
                img.src = "image/5.1.png"; //キャラクター画像を設定
                random = Math.floor(Math.random() * 5);
                //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
                if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
                if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
                if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
                if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
                if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
            };
        };
        if (document.cookie <= -2 && Hour >= 7 && Hour < 23) {
            //cookieの値がかつ、-2以下かつ、7時～23時だった時
            img.src = "image/3.png"; //キャラクター画像を設定
            image_place.onclick = function () { //画像がクリックされたら
                img.src = "image/3.1.png"; //キャラクター画像を設定
                random = Math.floor(Math.random() * 5);
                //1～5までの数字をランダムに生成(Math.floorで小数点以下は切り捨て)
                if (random == 0) document.getElementById("text").innerHTML = "寝る前の飲み物には白湯がベスト!";
                if (random == 1) document.getElementById("text").innerHTML = "夜ご飯は寝る3時間前に済ませておく事が理想だよ♪";
                if (random == 2) document.getElementById("text").innerHTML = "覚醒効果のあるカフェインは寝る前には要注意!";
                if (random == 3) document.getElementById("text").innerHTML = "お風呂の温度は40℃前後が理想的♪身体が温まるよ";
                if (random == 4) document.getElementById("text").innerHTML = "ブルーライトは睡眠の天敵!寝る1時間前にはなるべく見ない様に!";
            };
        };
    }
}
setInterval('clock()', 1000); //clockを1秒間に1回実行する

//ボタン作成
var img_2 = document.getElementById("botan_place") //画像読み込み
img_2.src = "image/botan.png"; //画像配置

botan_place.onclick = function () { //ボタンを押した処理
    location.replace('http://mayumutsumutsu.github.io/watch.html');
    //計測画面に移動
}

var select_Hour = document.getElementById("select_Hour");
//HTMLのselect_Hourで選ばれた数字を入れる為の変数
var selectMin = document.getElementById("select_Min");
var saveHour = 0;
//起床時間の変数
var saveMin = 0;
var alarm = document.getElementById("alarm");
var count = 0; //illuminanceが0になった時にカウントされる関数(0を書かないとNaN表記)

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

function stop() { //音を止める関数
    alarm.pause(); //音を止める
    alarm.currentTime = 0; //音源を初期の位置に戻す
    if (count < 18000) { //count(暗い時間)が5時間未満であれば
        score--; //scoreを引く
        document.cookie = score; //scoreの値をcookieに保存する
    }
    if (count >= 18000 && count < 25200) { //count(暗い時間)が7時間未満5時間以上であれば
        score++; //scoreに足す
        document.cookie = score; //scoreの値をcookieに保存する
    }
    if (count >= 25200) { //count(暗い時間)が7時間以上であれば
        score += 2; //scoreに足す
        document.cookie = score; //scoreの値をcookieに保存する
    }
    ring = function () {
        return false; //処理を止める
    };
};

document.getElementById("test").innerHTML = score;

function re() {
    location.replace('http://mayumutsumutsu.github.io/index.html');
    //ホーム画面に戻る
};
