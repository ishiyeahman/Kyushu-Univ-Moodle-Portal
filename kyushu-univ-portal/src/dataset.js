// // mon:1 , tue:2, wed : 3, thu:4, fir:5
// import sakuraiK from "./assets/img/sakurai-k.jpeg";　

const defaultDataset = [
    // 月曜
    {
        name: "アナログ電子回路I",
        period : 1,
        day: 1,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "金谷晴一",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42774",
    },

    {
        name: "コンピュータシステムIA",
        period : 2,
        day: 1,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "小野　貴継",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42939",
    },

    {
        name: "電気情報工学実験I",
        period : 3,
        day: 1,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "峯，谷本，早志",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42306",
    },

    {
        name: "電気情報工学実験I",
        period : 4,
        day: 1,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "峯，谷本，早志",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42306",
    },

    // 火曜
    {
        name: "未登録",
        period : 1,
        day: 2,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "",
        url: "https://moodle.s.kyushu-u.ac.jp/course/",
    },

    {
        name: "データ構造とアルゴリズムIIA",
        period : 2,
        day: 2,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "横尾真",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=43210",
    },

    {
        name: "確立統計",
        period : 3,
        day: 2,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "櫻井　幸一",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42781",
    },

    {
        name: "未登録",
        period : 4,
        day: 2,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "",
        url: "https://moodle.s.kyushu-u.ac.jp/course/",
    },

      // 水曜
      {
        name: "複素関数論",
        period : 1,
        day: 3,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "神山直之",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42644",
    },

    {
        name: "プログラミング論II",
        period : 2,
        day: 3,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "鵜林尚靖",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42740",
    },

    {
        name: "データベースA",
        period : 3,
        day: 3,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "櫻井幸一",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42782",
    },

    {
        name: "電気情報工学実験",
        period : 4,
        day: 3,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "峯，谷本，早志",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42306",
    },

      // 木曜
    
    {
        name: "未登録",
        period : 1,
        day: 4,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "",
        url: "https://moodle.s.kyushu-u.ac.jp/course/",
    },

      {
        name: "情報理論",
        period : 2,
        day: 4, 
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "竹内純一",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=43265",
    },

    {
        name: "プログラミング言語論A",
        period : 3,
        day: 4,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher: "趙建軍",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=44246",
    },

    {
        name: "基礎PBLII",
        period : 4,
        day: 4,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "電気情報工学実験",
        teacher: "峯，谷本，早志",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42306",
    },

      // 金曜
      {
        name: "未登録",
        period : 1,
        day: 5,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher:"",
        url: "https://moodle.s.kyushu-u.ac.jp/course/",
    },

    {
        name: "ディジタル信号処理",
        period : 2,
        day: 5,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher:"島田敬士",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42761",
    },

    {
        name: "離散数学",
        period : 3,
        day: 5,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher:"冨浦洋一",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=42732",
    },

    {
        name: "集積回路工学通論A",
        period : 4,
        day: 5,
        faceImg : "", //sakuraiK,
        // time : "10:30",
        detail: "",
        teacher:"井上弘士",
        url: "https://moodle.s.kyushu-u.ac.jp/course/view.php?id=43194",
    },

]

export default defaultDataset