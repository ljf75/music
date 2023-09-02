// Constants
const sounds = {
  let_not_fall: 'https://mp3app.haoge500.com/upload/128/2021/05/12/1198030.mp3',
  one_day_double: 'https://mp3app.haoge500.com/upload/rank/20220104/b6fbff497f5555b1b1c8f5e06372038a.mp3',
  eye_nose_mouth: 'https://mp3app.haoge500.com/new/2015/01-09/657225.mp3',
  RHTHMA: 'https://mp3app.haoge500.com/upload/128/2022/07/23/1398191.mp3',
  love_today: 'https://mp3app.haoge500.com/upload/128/2018/03/16/876865.mp3',
  谎言: 'https://mp3app.haoge500.com/hot/2010/08-27/382731.mp3',
  danger: ' https://mp3app.haoge500.com/mp3/647/646825.mp3',
  i_need_u: ' https://mp3app.haoge500.com/upload/128/2016/04/09/pdoqzoiw323.mp3',
  boy_spirit: ' https://mp3app.haoge500.com/upload/128/2016/04/09/iaoc1fvqo3a.mp3',
  weeding_dress: ' https://mp3app.haoge500.com/upload/128/2023/03/25/1640490.mp3',
  its_you: 'https://mp3app.haoge500.com/hot/2009/05-09/443621.mp3',
  The_Girl: 'https://mp3app.haoge500.com/upload/128/2021/04/12/1148263.mp3',
  Chinese_Just_Right: ' https://mp3app.haoge500.com/upload/128/2021/04/24/1179085.mp3',
  red_toe: 'https://mp3app.haoge500.com/hot/2008/11-21/176969.mp3',
  love_west:'https://mp3app.haoge500.com/mp3/199/198978.mp3',
  sunny:'https://freetyst.nf.migu.cn/public/product9th/product46/2023/07/1315/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701923155125.mp3',
  reverse_clock:'https://freetyst.nf.migu.cn/public/product9th/product45/2022/05/0716/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701897165412.mp3',
  balloon:'https://freetyst.nf.migu.cn/public/product9th/product45/2022/05/0716/2016%E5%B9%B408%E6%9C%8815%E6%97%A509%E7%82%B919%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%BA%B5%E6%A8%AA%E4%B8%96%E4%BB%A310%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054704037163944.mp3',
  like_you:' https://mp3app.haoge500.com/mp3/647/646253.mp3',
  baby:'https://mp3app.haoge500.com/upload/rank/20220125/923a430203815af3acca23d0b5d34311.mp3',
  daoxiang:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/05/0716/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054702010165016.mp3',
  mmj:'https://freetyst.nf.migu.cn/public/product9th/product46/2023/07/1315/2012%E5%B9%B412%E6%9C%886%E6%97%A5%E7%BA%B5%E6%A8%AA%E4%B8%96%E4%BB%A3%E7%B4%A7%E6%80%A5%E5%87%86%E5%85%A51%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054703842155109.mp3',
  a_song_time:'  https://freetyst.nf.migu.cn/public/product9th/product46/2023/07/1315/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054702001155118.mp3',
  say_goodbye:' https://mp3app.haoge500.com/upload/rank/20220221/8680768568bb572f9c2bcc82e54002f9.mp3',
  quiet:' https://mp3app.haoge500.com/upload/128/2019/07/25/928331.mp3',
  dont_cry:' https://mp3app.haoge500.com/upload/rank/20211125/9843144ed3fb532b810acae924fb1be4.mp3',
  anhao:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/05/0716/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701913165412.mp3',
  half:' https://freetyst.nf.migu.cn/public/product9th/product46/2023/07/1315/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701912155047.mp3',
  swear:'https://freetyst.nf.migu.cn/public/product9th/product46/2023/07/1315/%E9%A2%84%E7%94%9F%E6%95%88%E5%A5%A5%E8%BF%90%E7%AC%AC46%E6%89%B93500%E9%A6%96_600547/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054700492155736.mp3',
heart_wall:' https://freetyst.nf.migu.cn/public/product9th/product46/2023/04/2111/2023%E5%B9%B403%E6%9C%8823%E6%97%A513%E7%82%B954%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%92%AA%E5%92%95%E9%9F%B3%E4%B9%90%E8%87%AA%E6%9C%89%E7%89%88%E6%9D%83427%E9%A6%96415256/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69905306835110817.mp3',
flower_sea:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/2210/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054702003103831.mp3',
so_incredible:' https://mp3app.haoge500.com/upload/128/2021/05/12/1197879.mp3',
taotai:'  http://m801.music.126.net/20230825231147/633d6bfef4f7ee32c742486022f4cf52/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/22259988366/42d4/2d26/19d3/89f38d7f7304f037b1832983418dac2a.mp3',
never:' http://m801.music.126.net/20230825232150/57e9901e03fd63867e84be4fb5290ca7/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482100630/db24/afe0/a7db/898d71ca36e1c0af9e1bf54ce023714a.mp3',
be_fine:' https://mp3app.haoge500.com/upload/128/2021/02/11/1022610.mp3',
break_heart:' https://mp3app.haoge500.com/upload/128/2021/02/09/1020783.mp3',
nobody:' https://mp3app.haoge500.com/upload/128/2021/04/14/1152178.mp3',
hatelove:' https://mp3app.haoge500.com/upload/128/2021/02/22/1054735.mp3',
uturn:'https://mp3app.haoge500.com/upload/128/2021/02/19/1051122.mp3',
mysecret:' https://mp3app.haoge500.com/mp3/423/422967.mp3',
pfzl:' https://mp3app.haoge500.com/hot/2014/07-16/642431.mp3',
sl:' https://mp3app.haoge500.com/upload/rank/20220112/683851b4bafe527d85ae59b8ffef25c9.mp3',
whld:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/02/2813/2018%E5%B9%B409%E6%9C%8824%E6%97%A508%E7%82%B955%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B374%E9%A6%96-2/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751FRA4133738.mp3',
yj:' https://mp3app.haoge500.com/hot/2004/07-17/42702.mp3',
js:' https://mp3app.haoge500.com/mp3/640/639806.mp3', 
xlaq:'https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/0419/2018%E5%B9%B411%E6%9C%8809%E6%97%A518%E7%82%B920%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B353%E9%A6%96-8/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751KTMT193420.mp3',
yq:'https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/2210/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701947103831.mp3',
gyz:' https://mp3app.haoge500.com/upload/128/2021/11/08/1234703.mp3',
zj:' https://freetyst.nf.migu.cn/public/product9th/product45/2021/12/1310/2021%E5%B9%B411%E6%9C%8826%E6%97%A515%E7%82%B901%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%98%89%E7%BE%8E%E4%B9%B0%E6%96%AD4236%E9%A6%96190374/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69002603070103247.mp3',  
wake:' http://m801.music.126.net/20230827022356/a8362def04ca8b5bb65d2b24865cbcbd/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/15059572254/cfd1/9ccd/0729/039323d747f60c7e2624934cd9d9d205.mp3',
ya:'http://music.163.com/song/media/outer/url?id=1467444619.mp3',
stay:' https://mp3app.haoge500.com/upload/rank/20211215/c421eab52fcf5360806258648363a35a.mp3',
jy:'https://freetyst.nf.migu.cn/public/product9th/product42/2020/11/1212/2018%E5%B9%B411%E6%9C%8801%E6%97%A512%E7%82%B935%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B35%E9%A6%96-6/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751J1EB121029.mp3',
cjyzm:' https://mp3app.haoge500.com/upload/128/2018/03/22/877138.mp3',
ysh:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/02/1715/2022%E5%B9%B402%E6%9C%8816%E6%97%A513%E7%82%B946%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%9B%B8%E4%BF%A1%E9%9F%B3%E4%B9%905014%E9%A6%96336965/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/64049302802154634.mp3',
  jl:' https://mp3app.haoge500.com/upload/128/2022/05/25/1391598.mp3',
  dnxk:' https://mp3app.haoge500.com/upload/128/2019/03/18/888375.mp3',
  afraid: 'https://mp3app.haoge500.com/mp3/197/196325.mp3',
  carry_you:'https://mp3app.haoge500.com/upload/128/2021/02/09/1020657.mp3',
jiangnan:'https://freetyst.nf.migu.cn/public/product9th/product45/2022/06/0814/2011%E5%B9%B408%E6%9C%8810个%E6%97%A500011%E6%89%B9%E6%AC%A1/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60084600029145743.mp3',
tbd:'http://music.163.com/song/media/outer/url?id=28059417.mp3',
nyd:' https://freetyst.nf.migu.cn/public/product9th/product46/2023/08/0215/2018%E5%B9%B401%E6%9C%8810%E6%97%A509%E7%82%B951%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E5%AE%87%E4%B8%96%E5%8D%9A9%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60076260851152429.mp3',
dy:' https://sharefs.ali.kugou.com/202308270058/b503724493c2e42329f3f24d5398ab92/v3/acdccb3a3ff1effe8fc4ef42ad36f08c/yp/full/a1000_u0_p409_s1405141241.mp3',
ccao:' https://mp3app.haoge500.com/hot/2006/02-15/75199.mp3',
callmebaby:'https://mp3app.haoge500.com/new/2015/03-31/661489.mp3',
shdxf:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/2210/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054702005103430.mp3',  
shuang:' https://mp3app.haoge500.com/hot/2009/10-23/198982.mp3',
cfl:' http://m801.music.126.net/20230828000707/ebac9fc85478a57ee3f6c3ef937755fc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481716365/e62b/b339/991f/c39f4e87d52f6b48a5837f60d84f2a38.mp3',
qlx:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/2210/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701934104032.mp3',
tmian:'   https://mp3app.haoge500.com/upload/128/2020/10/13/1010102.mp3',
laonh:'https://mp3app.haoge500.com/hot/2010/11-05/402377.mp3',
yanyuan:'https://mp3app.haoge500.com/new/2015/06-05/664448.mp3',
pgy:' https://freetyst.nf.migu.cn/public/product9th/product45/2022/05/0716/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701993165338.mp3',
airucs:' https://mp3app.haoge500.com/hot/2004/07-17/42438.mp3',
longjf:' https://mp3app.haoge500.com/upload/rank/20220214/e4e118f5ee4e566dadda6564c2dc4072.mp3',
victory:' https://mp3app.haoge500.com/upload/128/2021/12/21/1373452.mp3',
hzj:'https://mp3app.haoge500.com/hot/2014/01-20/587524.mp3',


  // unknown: 'https://mp3.haoge500.com/upload/z128/2021/02-06/1612584603.mp3'
// song address
  // https://zz123.com/xplay/?act=songplay&id=aamzdss&email
// Dm i dont know the song address. it is to be hidden and encrypted.
};

// Cached DOM Elements
const player = new Audio();
//const bgPlayer = document.getElementById('bg-player');
//const bgCheckbox = document.querySelector('input[type="checkbox"]');

// Adjust volume of background music to 50%
//bgPlayer.volume = .3;

// Event Listeners
document.getElementById('play-btn').addEventListener('click', handlePlaySound);
//bgCheckbox.addEventListener('change', handleBgChanged);
let rnd = Math.random;
//let n = sounds_key.length;
let m = 0;

// Functions
function handlePlaySound() {
  // Use the CSS :checked pseudoclass to select the selected radio button
  const selSoundInp = document.querySelector('input[name="sound"]:checked');
  playSound(selSoundInp.value);
  
}

function playSound(name) {
  player.src = sounds[name];
  player.play();
}

/*function handleBgChanged() {
  bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}
*/
//var keys = ["flower_sea"];


let sounds_key = Object.keys(sounds);
/*for (var key in sounds) {
  if (key.hasOwnProperty(key)) {
    keys.push(key);
  }
}*/

//if (1 === 1) {
   /*for (var i = 0; i < keys.length; i++) {
      playSound(`${keys[i]}`);
  } */
  // console.log("Starting...");
  // console.log(keys[0]);
  // console.log(Object.keys(sounds));
  // playSound(keys[0]);
  /*for (var key in keys) {
    console.log(key[0]);
  } */
 // playSound(sounds_key[0]);
 // playSound(sounds_key[1]);
  
//}
/*
playSound("flower_sea");
playSound("heart_wall");
playSound("swear");
playSound("half");
*/

playSound(sounds_key[Math.ceil(Math.random() * (sounds_key.length - 0) + 0)]);