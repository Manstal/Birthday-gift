// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "今天是",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "2022年11月4日",  // 同上...
        "祝你生日快乐！",
        "年年岁岁花相似",
        "岁岁年年人向前",
        "在未来的日子里",
        "希望你能够",
        "所偿皆所愿",
        "陌上花开如玉",
        "希望你的19岁",
        "平安喜乐",
        "天天开心",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "今天是": "./imgs/Picture1.jpg",
        "2022年11月4日": "./imgs/Pictuer2.jpg",
        "祝你生日快乐": "./imgs/Picture3.png",
        "年年岁岁花相似": "./imgs/Picture4.JPG",
        "岁岁年年人向前": "./imgs/Picture5.png",
        "在未来的日子里": "./imgs/Picture6.jpg",
        "希望你能够": "./imgs/Picture7.jpg",
        "所偿皆所愿": "./imgs/Picture8.png",
        "陌上花开如玉": "./imgs/Picture9.jpg",
        "希望你的19岁": "./imgs/Picture10.JPG",
        "平安喜乐": "./imgs/Picture11.JPG",
        "天天开心": "./imgs/Picture12.png",
        "生日快乐~~": "./imgs/Picture13.png"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '生日快乐！'
};
