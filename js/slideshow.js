// divタグをオブジェクトにする
const $slideDiv1 = $(".slideshow1");

// divタグの子要素(img)に対して1枚1枚処理をする
$slideDiv1.each(function(){
    // フェード1回分の処理を関数にまとめる
    function fadeImg(){
        //imgタグ3つを変数に格納する
        let $slidePhotoImg = $slideDiv1.find(".slideshow__photo");  //find()で.前の子要素を別々に取得
        //1枚目と2枚目のimgタグを取得して、変数に格納する
        let $firstImg=$slidePhotoImg.eq(0);
        let $secondImg=$slidePhotoImg.eq(1);
        //1枚目を一番後ろに移動してフェードアウト
        $firstImg.appendTo($slideDiv1).fadeOut(5000);
        //2枚目の写真をフェードイン
        $secondImg.fadeIn(5000);
    }

    //3秒おきにfadeImg関数を呼び出す
    setInterval(fadeImg,5000);
});

const $slideDiv2 = $(".slideshow2");

// divタグの子要素(img)に対して1枚1枚処理をする
$slideDiv2.each(function(){
    // フェード1回分の処理を関数にまとめる
    function fadeImg(){
        //imgタグ3つを変数に格納する
        let $slidePhotoImg = $slideDiv2.find(".slideshow__photo");  //find()で.前の子要素を別々に取得
        //1枚目と2枚目のimgタグを取得して、変数に格納する
        let $firstImg=$slidePhotoImg.eq(0);
        let $secondImg=$slidePhotoImg.eq(1);
        //1枚目を一番後ろに移動してフェードアウト
        $firstImg.appendTo($slideDiv2).fadeOut(5000);
        //2枚目の写真をフェードイン
        $secondImg.fadeIn(5000);
    }

    //3秒おきにfadeImg関数を呼び出す
    setInterval(fadeImg,5000);
});