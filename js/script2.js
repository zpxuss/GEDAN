// ============================================================
//  🎵 歌单管理系统 - localStorage 联动版
//  适配你的HTML结构，支持与 edit.html 数据共享
//  支持歌手（artist）字段
// ============================================================

(function() {
    'use strict';

    // ============================================================
    //  📋 配置区域
    // ============================================================
    const CONFIG = {
        // -------- 默认歌单（首次使用时初始化） --------
        defaultSongs: [
            // 国风
            { name: "伯虎说", artist: "伯爵Johnny/唐伯虎Annie", genre: "国风" },
            { name: "半壶纱", artist: "刘珂矣", genre: "国风" },
            { name: "霸王别姬", artist: "屠洪刚", genre: "国风" },
            { name: "错位时空", artist: "艾辰", genre: "国风" },
            { name: "辞九门回忆", artist: "等什么君", genre: "国风" },
            { name: "枫叶城", artist: "单循", genre: "国风" },
            { name: "广寒宫", artist: "丸子呦", genre: "国风" },
            { name: "勾指起誓", artist: "洛天依", genre: "国风" },
            { name: "寄明月", artist: "SING女团", genre: "国风" },
            { name: "九张机", artist: "叶炫清", genre: "国风" },
            { name: "婚约", artist: "戚琦", genre: "国风" },
            { name: "交换余生", artist: "林俊杰", genre: "国风" },
            { name: "可惜没如果", artist: "林俊杰", genre: "国风" },
            { name: "落款", artist: "花粥 / Vicky宣宣", genre: "国风" },
            { name: "浪人琵琶", artist: "胡66", genre: "国风" },
            { name: "年轮", artist: "张碧晨", genre: "国风" },
            { name: "人间惊鸿宴", artist: "指尖笑", genre: "国风" },
            { name: "若梦", artist: "周深", genre: "国风" },
            { name: "声声慢", artist: "崔开潮", genre: "国风" },
            { name: "山外小楼夜听雨", artist: "任然", genre: "国风" },
            { name: "锁", artist: "黄龄", genre: "国风" },
            { name: "探窗", artist: "浮生梦 / 汐音社", genre: "国风" },
            { name: "晚夜微雨问海棠", artist: "镜予歌/陈亦洺", genre: "国风" },
            { name: "云烟成雨", artist: "房东的猫", genre: "国风" },
            { name: "烟雨行舟", artist: "司南", genre: "国风" },
            { name: "燕回巷", artist: "兔裹煎蛋卷", genre: "国风" },
            { name: "云与海", artist: "阿YueYue", genre: "国风" },
            { name: "青花瓷", artist: "周杰伦", genre: "国风" },
            { name: "牵丝戏", artist: "银临/Aki阿杰", genre: "国风" },
            { name: "情字最大", artist: "浅影阿", genre: "国风" },
            { name: "新贵妃醉酒", artist: "李玉刚", genre: "国风" },
            { name: "新梅花三弄", artist: "唐伯虎Annie/裁缝铺", genre: "国风" },
            { name: "相思遥", artist: "魏玉慧", genre: "国风" },
            { name: "身骑白马", artist: "徐佳莹", genre: "国风" },
            // 甜歌
            { name: "爱的感叹号", artist: "浣语", genre: "甜歌" },
            { name: "爱的魔法", artist: "金莎", genre: "甜歌" },
            { name: "爱你", artist: "王心凌", genre: "甜歌" },
            { name: "白月光与朱砂痣", artist: "大籽", genre: "甜歌" },
            { name: "宝贝", artist: "张悬", genre: "甜歌" },
            { name: "大喜", artist: "泠鸢yousa", genre: "甜歌" },
            { name: "对视", artist: "Sasablue", genre: "甜歌" },
            { name: "咖喱咖喱", artist: "牛奶咖啡", genre: "甜歌" },
            { name: "勾指起誓", artist: "洛天依", genre: "甜歌" },
            { name: "好像要牵你的手", artist: "一口甜", genre: "甜歌" },
            { name: "已经有我啦", artist: "苏晗", genre: "甜歌" },
            { name: "我多喜欢你你会知道", artist: "王俊琪", genre: "甜歌" },
            { name: "我愿意平凡的陪在你身旁", artist: "王七七", genre: "甜歌" },
            { name: "陪你看星星", artist: "陈子晴", genre: "甜歌" },
            { name: "泼天的富贵", artist: "ATK / 宋盐球", genre: "甜歌" },
            { name: "青柠", artist: "徐秉龙/桃十五", genre: "甜歌" },
            { name: "热爱105°的你", artist: "阿肆", genre: "甜歌" },
            { name: "凑热闹", artist: "BY2", genre: "甜歌" },
            { name: "谁家", artist: "池鱼", genre: "甜歌" },
            { name: "夏天的风", artist: "Uu", genre: "甜歌" },
            { name: "小城夏天", artist: "LBI利比", genre: "甜歌" },
            { name: "想想念念", artist: "FAFA / 雪二", genre: "甜歌" },
            { name: "像你这样的朋友", artist: "陆虎", genre: "甜歌" },
            { name: "小尾巴", artist: "葛雨晴", genre: "甜歌" },
            { name: "一点点", artist: "董唧唧 / 芊芊龍", genre: "甜歌" },
            { name: "有点甜", artist: "汪苏泷/B2", genre: "甜歌" },
            { name: "一笑倾城", artist: "汪苏泷", genre: "甜歌" },
            { name: "万有引力", artist: "汪苏泷", genre: "甜歌" },
            { name: "有何不可", artist: "许嵩", genre: "甜歌" },
            { name: "爱一点", artist: "李楚楚", genre: "甜歌" },
            { name: "暗恋这件小事", artist: "赵希予", genre: "甜歌" },
            { name: "第一天", artist: "孙燕姿", genre: "甜歌" },
            { name: "暖暖", artist: "梁静茹", genre: "甜歌" },
            { name: "我会等", artist: "承桓", genre: "甜歌" },
            { name: "樱花草", artist: "Sweety", genre: "甜歌" },
            { name: "云朵变成棉花糖", artist: "泡芙芙Scarlett", genre: "甜歌" },
            { name: "你的眼睛像星星", artist: "刘至佳", genre: "甜歌" },
            { name: "直觉", artist: "晚巧", genre: "甜歌" },
            // 民谣
            { name: "七月上", artist: "Jam", genre: "民谣" },
            { name: "寂寞烟火", artist: "蓝心羽", genre: "民谣" },
            { name: "奇妙能力歌", artist: "陈粒", genre: "民谣" },
            { name: "可能否", artist: "木小雅", genre: "民谣" },
            // 流行
            { name: "阿嬷", artist: "周林枫", genre: "流行" },
            { name: "阿拉斯加海湾", artist: "菲道尔", genre: "流行" },
            { name: "白羊", artist: "曲肖冰", genre: "流行" },
            { name: "大鱼", artist: "周深", genre: "流行" },
            { name: "颠倒之间", artist: "周深", genre: "流行" },
            { name: "Doll", artist: "菲菲公主", genre: "流行" },
            { name: "第57次取消发送", artist: "菲菲公主", genre: "流行" },
            { name: "化身孤岛的鲸", artist: "周深", genre: "流行" },
            { name: "画", artist: "邓紫棋", genre: "流行" },
            { name: "后会无期", artist: "邓紫棋", genre: "流行" },
            { name: "好想爱这个世界啊", artist: "华晨宇", genre: "流行" },
            { name: "会呼吸的痛", artist: "梁静茹", genre: "流行" },
            { name: "忽而今夏", artist: "汪苏泷", genre: "流行" },
            { name: "还你一些孤单", artist: "汪苏泷", genre: "流行" },
            { name: "荷塘月色", artist: "凤凰传奇", genre: "流行" },
            { name: "红色高跟鞋", artist: "蔡健雅", genre: "流行" },
            { name: "给我一首歌的时间", artist: "周杰伦", genre: "流行" },
            { name: "告白气球", artist: "周杰伦", genre: "流行" },
            { name: "孤单北半球", artist: "梁静茹", genre: "流行" },
            { name: "房间", artist: "刘瑞琦", genre: "流行" },
            { name: "就忘了吧", artist: "1K", genre: "流行" },
            { name: "记得", artist: "张惠妹", genre: "流行" },
            { name: "落空", artist: "印子月", genre: "流行" },
            { name: "连名带姓", artist: "yihuik苡慧", genre: "流行" },
            { name: "麦浪", artist: "yihuik苡慧", genre: "流行" },
            { name: "慢慢", artist: "Uu", genre: "流行" },
            { name: "明天过后", artist: "张杰", genre: "流行" },
            { name: "梦雨星海之间", artist: "司南", genre: "流行" },
            { name: "那天下雨了", artist: "周杰伦", genre: "流行" },
            { name: "闹哄哄", artist: "郁可唯", genre: "流行" },
            { name: "如果爱忘了", artist: "戚薇", genre: "流行" },
            { name: "如果可以", artist: "韦礼安", genre: "流行" },
            { name: "如果这就是爱情", artist: "张靓颖", genre: "流行" },
            { name: "如晴天似雨天", artist: "Sasablue", genre: "流行" },
            { name: "推开世界的门", artist: "杨乃文", genre: "流行" },
            { name: "童话", artist: "光良", genre: "流行" },
            { name: "童话镇", artist: "暗杠", genre: "流行" },
            { name: "踏浪", artist: "徐怀钰", genre: "流行" },
            { name: "褪黑素", artist: "江皓南", genre: "流行" },
            { name: "天黑黑", artist: "孙燕姿", genre: "流行" },
            { name: "天后", artist: "陈势安", genre: "流行" },
            { name: "听海", artist: "张惠妹", genre: "流行" },
            { name: "时间轴", artist: "刘嘉慧", genre: "流行" },
            { name: "奢香夫人", artist: "凤凰传奇", genre: "流行" },
            { name: "失落沙洲", artist: "徐佳莹", genre: "流行" },
            { name: "苏州河", artist: "薛凯琪", genre: "流行" },
            { name: "说好不哭", artist: "周杰伦/阿信", genre: "流行" },
            { name: "同手同脚", artist: "温岚", genre: "流行" },
            { name: "我害怕", artist: "薛之谦", genre: "流行" },
            { name: "我很快乐", artist: "刘惜君", genre: "流行" },
            { name: "我和你", artist: "唐宁", genre: "流行" },
            { name: "我看过", artist: "Zkaaai", genre: "流行" },
            { name: "我变了，我没变", artist: "张碧晨", genre: "流行" },
            { name: "我喜欢你时内心的活动", artist: "陈绮贞", genre: "流行" },
            { name: "无人之岛", artist: "任然", genre: "流行" },
            { name: "忘记时间", artist: "胡歌", genre: "流行" },
            { name: "下潜", artist: "川青", genre: "流行" },
            { name: "小半", artist: "陈粒", genre: "流行" },
            { name: "小模样", artist: "张小只ya", genre: "流行" },
            { name: "小孩", artist: "罗森涛", genre: "流行" },
            { name: "小情歌", artist: "苏打绿", genre: "流行" },
            { name: "像风一样", artist: "薛之谦", genre: "流行" },
            { name: "像鱼", artist: "王贰浪", genre: "流行" },
            { name: "虚拟", artist: "陈粒", genre: "流行" },
            { name: "演员", artist: "薛之谦", genre: "流行" },
            { name: "夜车", artist: "曾轶可", genre: "流行" },
            { name: "有可能的夜晚", artist: "曾轶可", genre: "流行" },
            { name: "一路生花", artist: "温奕心", genre: "流行" },
            { name: "一个像夏天一个像秋天", artist: "范玮琪", genre: "流行" },
            { name: "雨爱", artist: "杨丞琳", genre: "流行" },
            { name: "月牙湾", artist: "飞儿乐团", genre: "流行" },
            { name: "在加纳共和国离婚", artist: "菲道尔", genre: "流行" },
            { name: "再见", artist: "邓紫棋", genre: "流行" },
            { name: "追光者", artist: "岑宁儿", genre: "流行" },
            { name: "醉清风", artist: "弦子", genre: "流行" },
            { name: "最炫民族风", artist: "凤凰传奇", genre: "流行" },
            { name: "只是太爱你", artist: "张敬轩", genre: "流行" },
            { name: "至少还有你", artist: "林忆莲", genre: "流行" },
            { name: "这世界那么多人", artist: "莫文蔚", genre: "流行" },
            { name: "字字句句", artist: "张碧晨", genre: "流行" },
            { name: "爱就一个字", artist: "张信哲", genre: "流行" },
            { name: "爱如潮水", artist: "张信哲", genre: "流行" },
            { name: "安静", artist: "周杰伦", genre: "流行" },
            { name: "苍耳", artist: "司南", genre: "流行" },
            { name: "传奇", artist: "王菲", genre: "流行" },
            { name: "冲动", artist: "印子月", genre: "流行" },
            { name: "大眠", artist: "王心凌", genre: "流行" },
            { name: "过火", artist: "张信哲", genre: "流行" },
            { name: "会开花的云", artist: "弦子/姚晓棠", genre: "流行" },
            { name: "嘉宾", artist: "张远", genre: "流行" },
            { name: "关键词", artist: "林俊杰", genre: "流行" },
            { name: "离开我的依赖", artist: "yihuik苡慧", genre: "流行" },
            { name: "明明就", artist: "周杰伦", genre: "流行" },
            { name: "魔法城堡", artist: "TFBOYS", genre: "流行" },
            { name: "那女孩对我说", artist: "黄义达", genre: "流行" },
            { name: "泡沫", artist: "邓紫棋", genre: "流行" },
            { name: "撒野", artist: "凯瑟喵", genre: "流行" },
            { name: "她说", artist: "林俊杰", genre: "流行" },
            { name: "太聪明", artist: "陈绮贞", genre: "流行" },
            { name: "太委屈", artist: "陶晶莹", genre: "流行" },
            { name: "天外来物", artist: "薛之谦", genre: "流行" },
            { name: "忘了没有", artist: "王靖雯", genre: "流行" },
            { name: "我走后", artist: "小咪", genre: "流行" },
            { name: "我期待的不是雪", artist: "张妙格", genre: "流行" },
            { name: "旋木", artist: "王菲", genre: "流行" },
            { name: "雪落下的声音", artist: "陆虎", genre: "流行" },
            { name: "愿与愁", artist: "林俊杰", genre: "流行" },
            { name: "侧脸", artist: "于果", genre: "流行" },
            { name: "中毒", artist: "队长", genre: "流行" },
            { name: "多远都要在一起", artist: "邓紫棋", genre: "流行" },
            { name: "爱笑的眼睛", artist: "徐若瑄", genre: "流行" },
            { name: "熬夜上瘾", artist: "刘亦心", genre: "流行" },
            { name: "一半一半", artist: "欧阳娣娣", genre: "流行" },
            { name: "甲乙丙丁", artist: "李佳薇", genre: "流行" },
            { name: "时光盲盒", artist: "ChiliChill乐团", genre: "流行" },
            { name: "想某人", artist: "王优秀", genre: "流行" },
            { name: "歡迎光臨", artist: "Bo Peep", genre: "流行" },
            { name: "爱的供养", artist: "杨幂", genre: "流行" },
            { name: "如果的事", artist: "范玮琪/张韶涵", genre: "流行" },
            { name: "蝴蝶泉边", artist: "黄雅莉", genre: "流行" },
            { name: "我想我会", artist: "尹露浠", genre: "流行" },
            { name: "气象站台", artist: "Uu", genre: "流行" },
            { name: "那个夏天", artist: "Uu", genre: "流行" },
            { name: "小镇姑娘", artist: "陶喆", genre: "流行" },
            { name: "茶花开了", artist: "王睿卓", genre: "流行" },
            { name: "忽然之间", artist: "莫文蔚", genre: "流行" },
            { name: "明天，你好", artist: "牛奶咖啡", genre: "流行" },
            { name: "空山新雨后", artist: "音阙诗听", genre: "流行" },
            { name: "想你时风起", artist: "单依纯", genre: "流行" },
            { name: "没那么简单", artist: "黄小琥", genre: "流行" },
            { name: "等一场大雨", artist: "苏星婕", genre: "流行" },
            { name: "他乡的月亮", artist: "熙月月", genre: "流行" },
            { name: "亲爱的你啊", artist: "任素汐", genre: "流行" },
            { name: "踮起脚尖爱", artist: "冯提莫", genre: "流行" },
            { name: "阳光彩虹小白马", artist: "大张伟", genre: "流行" },
            { name: "不完美的小孩", artist: "TFBOYS", genre: "流行" },
            { name: "无论你多怪异我还是会喜欢你", artist: "周子琰", genre: "流行" },
            { name: "就让这大雨全都落下", artist: "容祖儿", genre: "流行" },
            { name: "一个人想着一个人", artist: "曾沛慈", genre: "流行" },
            { name: "亲爱的那不是爱情", artist: "张韶涵", genre: "流行" },
            { name: "两三句", artist: "刘瑞琦", genre: "流行" },
            { name: "疑心病", artist: "任然", genre: "流行" },
            { name: "一格格", artist: "卫兰", genre: "流行" },
            { name: "起风了", artist: "买辣椒也用券", genre: "流行" },
            { name: "口头禅", artist: "张靓颖", genre: "流行" },
            { name: "试试吧", artist: "陈童言/刘悦spam", genre: "流行" },
            { name: "他不懂", artist: "张杰", genre: "流行" },
            { name: "虹之间", artist: "金贵晟", genre: "流行" },
            { name: "不再联系", artist: "夏天Alex", genre: "流行" },
            { name: "东京不太热", artist: "洛天依", genre: "流行" },
            { name: "今夜有雨", artist: "白允yu", genre: "流行" },
            { name: "阳光下的星星", artist: "白允yu", genre: "流行" },
            { name: "晴天和猫", artist: "花粥", genre: "流行" },
            { name: "情非得已", artist: "张信哲", genre: "流行" },
            { name: "孤独的总和", artist: "吴汶芳", genre: "流行" },
            // 儿歌
            { name: "虫儿飞", artist: "晚巧", genre: "儿歌" },
            { name: "恶龙与小熊", artist: "小点新", genre: "儿歌" },
            { name: "老公公老婆婆", artist: "朱主爱", genre: "儿歌" },
            { name: "快乐的扑满", artist: "邵丽棠", genre: "儿歌" },
            { name: "我还有点小糊涂", artist: "刘晨", genre: "儿歌" },
            { name: "我和你", artist: "唐宁", genre: "儿歌" },
            { name: "请你吃个冰激凌", artist: "花粥", genre: "儿歌" },
            { name: "酸酸甜甜就是我", artist: "张含韵", genre: "儿歌" },
            { name: "Upupu", artist: "小皮皮爱学习", genre: "儿歌" },
            { name: "小了白了兔", artist: "叶洛洛", genre: "儿歌" },
            { name: "小年兽", artist: "程嘉敏", genre: "儿歌" },
            { name: "你是我的小狗", artist: "西彬", genre: "儿歌" }
        ],

        // -------- 曲风分类配置 --------
        genreMap: {
            '流行': ['谁', 'Doll', '大喜', '贪慕', '谁家', '可能', '天才', '澎湃', '慢慢', '旋木', 
                    '像鱼', '暖暖', '大鱼', '苍耳', '平庸', '不怕', '再见', '记得', '续雪', '雨爱', 
                    '大眠', '迷鹿', '借过', '下潜', '演员', '她说', '撒野', '冬眠', '嘉宾', '侧脸', 
                    '过火', '夜车', '白羊', '传奇', '房间', '小孩', '直觉', '对视', '虚拟', '小半', 
                    '听海', '冲动', '失控', '我曾', '阿嬷', '宝贝', '褪黑素', 'i love u', '两三句',
                    '苏州河', '口头禅', '我会等', '闹哄哄', '试试吧', '太委屈', '我想念', '愿与愁', 
                    '下雨了', '他不懂', '虹之间', '我走后', '想某人', '我害怕', '我和你', '时间轴', 
                    '追光者', '我知道', '我看过', '一点点', '小模样', '小幸运', '爱一点', '第一天', 
                    '小尾巴', '醉清风', '一笑倾城', '万有引力', '我想我会', '爱的魔法', '告白气球', 
                    '明天过后', '夏天的风', '气象站台', '小镇姑娘', '茶花开了', '连名带姓', '无人之岛', 
                    '字字句句', '忽而今夏', '说好不哭', '天外来物', '如果可以', '那个夏天', '忘了没有', 
                    '想想念念', '颠倒之间', '好久不见', '忘记时间', '就忘了吧', '失落沙洲', '我很快乐', 
                    '不再联系', '像风一样', '一路生花', '勾指起誓', '今夜有雨', '后会无期', '晴天和猫', 
                    '情非得已', '忽然之间', '熬夜上瘾', '一半一半', '荷塘月色', '明天，你好', '他乡的月亮', 
                    '泼天的富贵', '爱的感叹号', '陪你看星星', '空山新雨后', '已经有我啦', '会呼吸的痛', 
                    '突然好想你', '爱我还是他', '想你时风起', '会开花的云', '没那么简单', '只是太爱你', 
                    '新梅花三弄', '亲爱的你啊', '踮起脚尖爱', '等一场大雨', '阳光下的星星', '暗恋这件小事', 
                    '有可能的夜晚', '推开世界的门', '梦雨星海之间', '化身孤岛的鲸', '阿拉斯加海湾', 
                    '离开我的依赖', '如晴天似雨天', '白月光与朱砂痣', '像你这样的朋友', '你的眼睛像星星',
                    '好像要牵你的手', '这世界那么多人', '我期待的不是雪', '第57次取消发送', '我恨明月不照我', 
                    '我变了，我没变', '云朵变成棉花糖', '一个人想着一个人', '在加纳共和国离婚', 
                    '就让这大雨全都落下', '我多喜欢你，你会知道', '我喜欢你时内心的活动', 
                    '无论你多怪异我还是会喜欢你', '小城夏天', '年', '消散对白', '爱笑的眼睛', '锁', 
                    '爱你', '睫毛弯弯', '爱就一个字', '爱如潮水', '爱的供养', '安静', '不完美的小孩', 
                    '泡沫', '多远都要在一起', '东京不太热', '当你', '关键词', '孤单北半球', '咖喱咖喱', 
                    '给我一首歌的时间', '红色高跟鞋', '画', '好想爱这个世界啊', '后来', '后会无期', 
                    '静悄悄', '交换余生', '可惜没如果', '落空', '魔法城堡', '麦浪', '慢冷', '童话', 
                    '绿色', '那女孩对我说', '明明就', '那天下雨了', '歡迎光臨', '青柠', '亲爱的那不是爱情', 
                    '热爱105°的你', '如果的事', '如果爱忘了', '太聪明', '天后', '天黑黑', '同手同脚', 
                    '踏浪', '修炼爱情', '雪落下的声音', '小情歌', '月牙湾', '云与海', '阳光彩虹小白马', 
                    '一个像夏天像一个秋天', '云烟成雨', '烟雨行舟', '疑心病', '有点甜', '奢香夫人', 
                    '一格格', '有何不可', '中毒'],
            '国风': ['探窗', '婚约', '走马', '年轮', '落款', '燕回巷', '伯虎说', '广寒宫', '牵丝戏', 
                    '声声慢', '相思遥', '霸王别姬', '身骑白马', '情字最大', '错位时空', '辞九门回忆', 
                    '人间惊鸿宴', '新贵妃醉酒', '晚夜微雨问海棠', '山外小楼夜听雨', '半壶纱', '不染', 
                    '赤岭', '春泥', '寄明月', '九张机', '浪人琵琶', '若梦', '童话镇', '蝴蝶泉边'],
            '甜歌': ['爱的感叹号', '爱的魔法', '爱你', '白月光与朱砂痣', '宝贝', '大喜', '对视', 
                    '咖喱咖喱', '勾指起誓', '好像要牵你的手', '已经有我啦', '我多喜欢你你会知道', 
                    '我愿意平凡的陪在你身旁', '陪你看星星', '泼天的富贵', '青柠', '热爱105°的你', 
                    '凑热闹', '谁家', '夏天的风', '小城夏天', '想想念念', '像你这样的朋友', '小尾巴', 
                    '一点点', '有点甜', '一笑倾城', '万有引力', '有何不可', '爱一点', '暗恋这件小事', 
                    '第一天', '暖暖', '我会等', '樱花草', '云朵变成棉花糖', '你的眼睛像星星', '直觉'],
            '民谣': ['七月上', '可能否', '奇妙能力歌', '寂寞烟火', '枫叶城'],
            '儿歌': ['小年兽', '凑热闹', '虫儿飞', '恶龙与小熊', '小了白了兔', '快乐的扑满', 
                    '老公公老婆婆', '你是我的小狗', '我还有点小糊涂', '请你吃个冰激凌', '酸酸甜甜就是我']
        },

        // -------- 曲风颜色配置 --------
        genreColors: {
            '流行': '#4a6cf7',
            '国风': '#e67e22',
            '甜歌': '#e84393',
            '民谣': '#27ae60',
            '儿歌': '#e74c5e'
        },

        // -------- 曲风背景色配置 --------
        genreBgColors: {
            '流行': 'rgba(74, 108, 247, 0.10)',
            '国风': 'rgba(230, 126, 34, 0.10)',
            '甜歌': 'rgba(232, 67, 147, 0.10)',
            '民谣': 'rgba(39, 174, 96, 0.10)',
            '儿歌': 'rgba(231, 76, 94, 0.10)'
        },

        // -------- 封面图片列表 --------
        images: [
            './img/yuchu2.jpg',
            // 添加更多图片: './img/your-image.jpg',
        ],

        // -------- 自动播放间隔（毫秒） --------
        autoPlayInterval: 4000,

        // -------- 随机抽取滚动次数 --------
        randomRollsMin: 10,
        randomRollsMax: 18,

        // -------- Toast 显示时间（毫秒） --------
        toastDuration: 1500,

        // -------- 历史记录最大条数 --------
        maxHistory: 8,

        // -------- 排除关键词（自动过滤） --------
        excludeKeywords: ['舰长'],

        // -------- localStorage 键名 --------
        storageKey: 'playlist'
    };

    // ============================================================
    //  核心：localStorage 数据管理
    // ============================================================

    const STORAGE_KEY = CONFIG.storageKey;

    /**
     * 获取歌单数据（从 localStorage）
     * 如果没有数据，自动初始化默认歌单
     */
    function getPlaylist() {
        const stored = localStorage.getItem(STORAGE_KEY);
        
        if (stored) {
            try {
                const data = JSON.parse(stored);
                if (Array.isArray(data) && data.length > 0) {
                    return data;
                }
                // 数据为空数组，重新初始化
                return initDefaultPlaylist();
            } catch (e) {
                console.warn('歌单数据损坏，重新初始化');
                return initDefaultPlaylist();
            }
        } else {
            // 首次使用，初始化默认歌单
            return initDefaultPlaylist();
        }
    }

    /**
     * 初始化默认歌单（带类型和歌手）
     */
    function initDefaultPlaylist() {
        const playlist = CONFIG.defaultSongs.map(song => ({
            name: song.name,
            artist: song.artist || '未知歌手',
            genre: song.genre || '流行'
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
        return playlist;
    }

    /**
     * 保存歌单到 localStorage
     */
    function savePlaylist(playlist) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
    }

    /**
     * 获取完整歌单列表（包含歌手）
     */
    function getFullPlaylist() {
        return getPlaylist();
    }

    /**
     * 获取纯歌名列表（用于兼容旧代码）
     */
    function getSongNameList() {
        const playlist = getPlaylist();
        return playlist.map(item => item.name);
    }

    /**
     * 获取歌曲的曲风
     */
    function getSongGenre(songName) {
        const { genreMap } = CONFIG;
        for (const genre in genreMap) {
            if (genreMap.hasOwnProperty(genre)) {
                const keywords = genreMap[genre];
                for (let i = 0; i < keywords.length; i++) {
                    if (songName.includes(keywords[i])) {
                        return genre;
                    }
                }
            }
        }
        return '流行'; // 默认流行
    }

    /**
     * 获取歌曲的歌手
     */
    function getSongArtist(songName) {
        const playlist = getPlaylist();
        const song = playlist.find(item => item.name === songName);
        return song ? song.artist : '未知歌手';
    }

    /**
     * 获取曲风颜色
     */
    function getGenreColor(genre) {
        return CONFIG.genreColors[genre] || '#95a5a6';
    }

    /**
     * 获取曲风背景色
     */
    function getGenreBgColor(genre) {
        return CONFIG.genreBgColors[genre] || 'rgba(149, 165, 166, 0.10)';
    }

    // ============================================================
    //  暴露 API 给其他页面（edit.html 使用）
    // ============================================================

    window.PlaylistAPI = {
        // 核心读写
        get: getPlaylist,
        save: savePlaylist,
        reset: initDefaultPlaylist,
        
        // 歌名列表
        getNames: getSongNameList,
        
        // 获取完整歌单（含歌手）
        getAll: getFullPlaylist,
        
        // 获取歌手
        getArtist: getSongArtist,
        
        // 增删改
        add: function(name, artist, genre) {
            if (!name || !name.trim()) {
                throw new Error('歌名不能为空');
            }
            const playlist = getPlaylist();
            playlist.push({ 
                name: name.trim(), 
                artist: (artist && artist.trim()) ? artist.trim() : '未知歌手',
                genre: (genre && genre.trim()) ? genre.trim() : getSongGenre(name.trim())
            });
            savePlaylist(playlist);
            return playlist;
        },
        
        deleteByIndex: function(index) {
            const playlist = getPlaylist();
            if (index < 0 || index >= playlist.length) {
                throw new Error('索引越界');
            }
            const deleted = playlist.splice(index, 1);
            savePlaylist(playlist);
            return deleted[0];
        },
        
        deleteByName: function(name) {
            if (!name || !name.trim()) {
                throw new Error('歌名不能为空');
            }
            const playlist = getPlaylist();
            const index = playlist.findIndex(item => item.name === name.trim());
            if (index === -1) {
                throw new Error(`未找到歌曲: ${name}`);
            }
            const deleted = playlist.splice(index, 1);
            savePlaylist(playlist);
            return deleted[0];
        },
        
        update: function(index, newName, newArtist, newGenre) {
            const playlist = getPlaylist();
            if (index < 0 || index >= playlist.length) {
                throw new Error('索引越界');
            }
            if (newName && newName.trim()) {
                playlist[index].name = newName.trim();
            }
            if (newArtist && newArtist.trim()) {
                playlist[index].artist = newArtist.trim();
            }
            if (newGenre && newGenre.trim()) {
                playlist[index].genre = newGenre.trim();
            }
            savePlaylist(playlist);
            return playlist[index];
        },
        
        // 查询
        search: function(keyword) {
            if (!keyword || !keyword.trim()) return getPlaylist();
            const playlist = getPlaylist();
            const kw = keyword.trim().toLowerCase();
            return playlist.filter(item => 
                item.name.toLowerCase().includes(kw) || 
                (item.artist && item.artist.toLowerCase().includes(kw))
            );
        },
        
        filterByGenre: function(genre) {
            const playlist = getPlaylist();
            if (genre === '全部') return playlist;
            return playlist.filter(item => item.genre === genre);
        },
        
        random: function() {
            const playlist = getPlaylist();
            if (playlist.length === 0) return null;
            const index = Math.floor(Math.random() * playlist.length);
            return playlist[index];
        },
        
        count: function() {
            return getPlaylist().length;
        },
        
        genres: function() {
            const playlist = getPlaylist();
            const genres = playlist.map(item => item.genre);
            return ['全部', ...new Set(genres)];
        },
        
        all: getPlaylist
    };

    // ============================================================
    //  应用初始化
    // ============================================================

    // 等待 DOM 加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

    function initApp() {
        // ===== 加载配置 =====
        const { images, autoPlayInterval, randomRollsMin, randomRollsMax, 
                toastDuration, maxHistory, excludeKeywords } = CONFIG;

        // ===== 获取歌单（从 localStorage） =====
        let songList = getSongNameList();

        // ===== 过滤歌单（排除关键词） =====
        songList = songList.filter(s => {
            if (!s || typeof s !== 'string') return false;
            const trimmed = s.trim();
            if (trimmed === '') return false;
            for (let i = 0; i < excludeKeywords.length; i++) {
                if (trimmed.includes(excludeKeywords[i])) return false;
            }
            return true;
        });

        // ===== DOM 引用 =====
        const songListEl = document.getElementById('songList');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const songCountEl = document.getElementById('songCount');
        const bgPicker = document.getElementById('bgPicker');
        const photoFrame = document.getElementById('photoFrame');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const genreNav = document.getElementById('genreNav');
        const randomDisplay = document.getElementById('randomDisplay');
        const randomText = document.getElementById('randomText');
        const randomBtn = document.getElementById('randomBtn');
        const historyList = document.getElementById('historyList');

        let currentGenre = '全部';
        let currentKeyword = '';

        // ===== 调试日志 =====
        console.log('🚀 应用初始化（localStorage 联动版 - 含歌手）...');
        console.log('📊 localStorage 歌单数量:', getPlaylist().length);
        console.log('📊 过滤后歌曲数:', songList.length);

        // ===== Toast 提示函数 =====
        function showToast(message) {
            const existing = document.querySelector('.toast-message');
            if (existing) existing.remove();

            const toast = document.createElement('div');
            toast.className = 'toast-message';
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(43, 45, 66, 0.92);
                backdrop-filter: blur(12px);
                color: white;
                padding: 16px 32px;
                border-radius: 16px;
                font-size: 1.1rem;
                font-weight: 500;
                z-index: 999999;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                animation: toastIn 0.3s ease;
                pointer-events: none;
                user-select: none;
                max-width: 90%;
                text-align: center;
            `;

            if (!document.getElementById('toastStyles')) {
                const style = document.createElement('style');
                style.id = 'toastStyles';
                style.textContent = `
                    @keyframes toastIn {
                        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    }
                    @keyframes toastOut {
                        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.animation = 'toastOut 0.3s ease forwards';
                setTimeout(() => {
                    if (toast.parentNode) toast.remove();
                }, 300);
            }, toastDuration);
        }

        // ===== 复制功能 =====
        function copyToClipboard(text) {
            const copyText = '点歌 ' + text;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(copyText)
                    .then(() => showToast('✅ 已复制: "' + copyText + '"'))
                    .catch(() => fallbackCopy(copyText));
            } else {
                fallbackCopy(copyText);
            }
        }

        function fallbackCopy(text) {
            const input = document.createElement('input');
            input.value = text;
            input.style.cssText = 'position:fixed;opacity:0;left:-9999px;';
            document.body.appendChild(input);
            input.select();
            try {
                document.execCommand('copy');
                showToast('✅ 已复制: "' + text + '"');
            } catch (e) {
                showToast('❌ 复制失败，请手动复制');
            }
            document.body.removeChild(input);
        }

        // ===== 渲染函数（从 localStorage 实时读取） =====
        function renderSongs(filteredSongs) {
            if (!songListEl) {
                console.error('❌ #songList 元素未找到！');
                return;
            }

            // 如果没有传入过滤结果，从 localStorage 读取完整数据（含歌手）
            if (!filteredSongs) {
                // 重新从 localStorage 获取最新数据（完整对象）
                const allData = getPlaylist();
                const exclude = CONFIG.excludeKeywords;
                const cleanData = allData.filter(item => {
                    if (!item || !item.name) return false;
                    const trimmed = item.name.trim();
                    if (trimmed === '') return false;
                    for (let i = 0; i < exclude.length; i++) {
                        if (trimmed.includes(exclude[i])) return false;
                    }
                    return true;
                });
                
                // 应用当前过滤条件
                let result = [...cleanData];
                if (currentKeyword && currentKeyword.trim() !== '') {
                    const kw = currentKeyword.trim().toLowerCase();
                    result = result.filter(item => {
                        // 搜索歌名
                        if (item.name.toLowerCase().includes(kw)) return true;
                        // 搜索歌手
                        if (item.artist && item.artist.toLowerCase().includes(kw)) return true;
                        return false;
                    });
                }
                if (currentGenre && currentGenre !== '全部') {
                    result = result.filter(item => item.genre === currentGenre);
                }
                filteredSongs = result;
            }

            if (filteredSongs.length === 0) {
                songListEl.innerHTML = '<div class="no-result">✨ 没有找到歌曲，换个关键词吧</div>';
                if (songCountEl) songCountEl.textContent = '0 首';
                return;
            }

            let html = '';
            for (let i = 0; i < filteredSongs.length; i++) {
                const item = filteredSongs[i];
                const songName = item.name || '未知歌曲';
                const artist = item.artist || '未知歌手';
                const genre = item.genre || '流行';
                const color = getGenreColor(genre);
                const bgColor = getGenreBgColor(genre);

                html += `
                    <div class="song-item">
                        <span class="song-index">#${i + 1}</span>
                        <span class="song-name" data-song="${songName}" data-artist="${artist}">${songName}</span>
                        <span class="song-artist">${artist}</span>
                        <span class="song-genre" style="color:${color};background:${bgColor};border-color:${color}30;">
                            ${genre}
                        </span>
                    </div>
                `;
            }
            songListEl.innerHTML = html;
            if (songCountEl) songCountEl.textContent = filteredSongs.length + ' 首';

            // 绑定点击复制事件（复制歌名+歌手）
            document.querySelectorAll('.song-name').forEach(elem => {
                elem.addEventListener('click', function() {
                    const songName = this.dataset.song;
                    const artist = this.dataset.artist || '';
                    const copyText = artist && artist !== '未知歌手' ? `${songName} - ${artist}` : songName;
                    copyToClipboard(copyText);
                });
            });
        }

        // ===== 过滤逻辑（返回完整对象） =====
        function filterSongs(keyword, genre) {
            const allData = getPlaylist();
            const exclude = CONFIG.excludeKeywords;
            
            let result = allData.filter(item => {
                if (!item || !item.name) return false;
                const trimmed = item.name.trim();
                if (trimmed === '') return false;
                for (let i = 0; i < exclude.length; i++) {
                    if (trimmed.includes(exclude[i])) return false;
                }
                return true;
            });

            if (keyword && keyword.trim() !== '') {
                const kw = keyword.trim().toLowerCase();
                result = result.filter(item => {
                    // 搜索歌名
                    if (item.name.toLowerCase().includes(kw)) return true;
                    // 搜索歌手
                    if (item.artist && item.artist.toLowerCase().includes(kw)) return true;
                    return false;
                });
            }

            if (genre && genre !== '全部') {
                result = result.filter(item => item.genre === genre);
            }

            return result;
        }

        function updateView() {
            const filtered = filterSongs(currentKeyword, currentGenre);
            renderSongs(filtered);
        }

        // ===== 汉堡菜单控制 =====
        if (hamburgerBtn && genreNav) {
            hamburgerBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                genreNav.classList.toggle('open');
            });

            document.addEventListener('click', function(e) {
                if (!genreNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    genreNav.classList.remove('open');
                }
            });
        }

        // ===== 事件绑定 =====
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                if (searchInput) {
                    currentKeyword = searchInput.value;
                }
                updateView();
                if (genreNav) genreNav.classList.remove('open');
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    currentKeyword = searchInput.value;
                    updateView();
                    if (genreNav) genreNav.classList.remove('open');
                }
            });
        }

        // ===== 曲风导航点击 =====
        if (genreNav) {
            genreNav.addEventListener('click', function(e) {
                const target = e.target.closest('.genre-tag');
                if (!target) return;
                e.preventDefault();

                const genre = target.dataset.genre;
                if (genre) {
                    currentGenre = genre;
                    document.querySelectorAll('.genre-tag').forEach(tag => {
                        tag.style.background = 'rgba(42,44,66,0.06)';
                        tag.style.color = '#1e1f2b';
                    });
                    target.style.background = 'rgba(42,44,66,0.2)';
                    target.style.color = '#000';
                    updateView();
                    if (genreNav) genreNav.classList.remove('open');
                }
            });
        }

        // ===== 背景颜色 =====
        if (bgPicker) {
            bgPicker.addEventListener('input', function(e) {
                document.body.style.background = e.target.value;
            });
            document.body.style.background = bgPicker.value;
        }

        // ===== 图片轮播 =====
        let currentImageIndex = 0;
        let autoPlayTimer = null;
        let isAutoPlaying = true;

        function loadPhoto(index) {
            if (!photoFrame) return;
            if (images.length === 0) {
                photoFrame.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">暂无封面</div>';
                return;
            }

            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;
            currentImageIndex = index;

            const img = document.createElement('img');
            img.src = images[index];
            img.alt = '歌单封面 ' + (index + 1);
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
            photoFrame.innerHTML = '';
            photoFrame.appendChild(img);

            updateDots(index);

            const photoSub = document.getElementById('photoSub');
            if (photoSub) {
                photoSub.textContent = `${index + 1} / ${images.length}  ·  点击左右切换`;
            }

            try {
                localStorage.setItem('currentCoverIndex', index);
            } catch (e) {}
        }

        function updateDots(activeIndex) {
            document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        }

        function nextImage() {
            if (images.length === 0) return;
            loadPhoto((currentImageIndex + 1) % images.length);
            resetAutoPlay();
        }

        function prevImage() {
            if (images.length === 0) return;
            loadPhoto((currentImageIndex - 1 + images.length) % images.length);
            resetAutoPlay();
        }

        function startAutoPlay() {
            stopAutoPlay();
            if (isAutoPlaying && images.length > 1) {
                autoPlayTimer = setInterval(nextImage, autoPlayInterval);
            }
        }

        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        function toggleAutoPlay() {
            isAutoPlaying = !isAutoPlaying;
            if (isAutoPlaying) {
                startAutoPlay();
                const sub = document.getElementById('photoSub');
                if (sub && !sub.textContent.includes('▶')) {
                    sub.textContent += '  ▶ 自动播放';
                }
            } else {
                stopAutoPlay();
                const sub = document.getElementById('photoSub');
                if (sub) {
                    sub.textContent = sub.textContent.replace('  ▶ 自动播放', '');
                }
            }
        }

        function initSlider() {
            if (images.length === 0) {
                if (photoFrame) {
                    photoFrame.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;">暂无封面</div>';
                }
                return;
            }

            const savedIndex = localStorage.getItem('currentCoverIndex');
            if (savedIndex !== null) {
                const idx = parseInt(savedIndex);
                if (idx >= 0 && idx < images.length) {
                    currentImageIndex = idx;
                }
            }

            loadPhoto(currentImageIndex);

            const dotsContainer = document.getElementById('sliderDots');
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                for (let i = 0; i < images.length; i++) {
                    const dot = document.createElement('button');
                    dot.className = 'slider-dot' + (i === currentImageIndex ? ' active' : '');
                    dot.dataset.index = i;
                    dot.setAttribute('aria-label', '切换到第 ' + (i + 1) + ' 张');
                    dot.addEventListener('click', function() {
                        loadPhoto(parseInt(this.dataset.index));
                        resetAutoPlay();
                    });
                    dotsContainer.appendChild(dot);
                }
            }

            const prevBtn = document.getElementById('sliderPrev');
            const nextBtn = document.getElementById('sliderNext');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    prevImage();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    nextImage();
                });
            }

            if (photoFrame) {
                photoFrame.addEventListener('click', nextImage);
            }

            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') { prevImage(); e.preventDefault(); }
                else if (e.key === 'ArrowRight') { nextImage(); e.preventDefault(); }
                else if (e.key === ' ') { toggleAutoPlay(); e.preventDefault(); }
            });

            const slider = document.querySelector('.photo-slider');
            if (slider) {
                slider.addEventListener('mouseenter', function() {
                    if (isAutoPlaying) stopAutoPlay();
                });
                slider.addEventListener('mouseleave', function() {
                    if (isAutoPlaying) startAutoPlay();
                });
            }

            if (images.length > 1) startAutoPlay();
        }

        // ===== 随机抽取功能 =====
        let randomHistory = [];
        let isRandomizing = false;

        function getCurrentSongList() {
            return filterSongs(currentKeyword, currentGenre);
        }

        function pickRandomSong() {
            if (isRandomizing) return;

            const currentSongs = getCurrentSongList();
            if (!currentSongs || currentSongs.length === 0) {
                if (randomText) {
                    randomText.textContent = '😅 歌单为空，无法抽取';
                    randomText.style.color = '#e74c5e';
                }
                return;
            }

            isRandomizing = true;
            if (randomBtn) { randomBtn.classList.add('loading'); randomBtn.disabled = true; }
            if (randomDisplay) randomDisplay.classList.remove('picked');
            if (randomText) randomText.classList.remove('picked');

            let rollCount = 0;
            const maxRolls = randomRollsMin + Math.floor(Math.random() * (randomRollsMax - randomRollsMin));

            const rollInterval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * currentSongs.length);
                const item = currentSongs[randomIndex];
                const displayName = item.name || '未知歌曲';
                if (randomText) {
                    randomText.textContent = displayName;
                    randomText.style.color = '#7a7e9a';
                }
                rollCount++;

                if (rollCount >= maxRolls) {
                    clearInterval(rollInterval);
                    const finalIndex = Math.floor(Math.random() * currentSongs.length);
                    const finalItem = currentSongs[finalIndex];
                    const finalSong = finalItem.name || '未知歌曲';
                    const artist = finalItem.artist || '未知歌手';
                    const displayText = artist && artist !== '未知歌手' ? `${finalSong} - ${artist}` : finalSong;
                    
                    if (randomText) {
                        randomText.textContent = displayText;
                        randomText.style.color = '#1e1f2b';
                        randomText.classList.add('picked');
                    }
                    if (randomDisplay) randomDisplay.classList.add('picked');

                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText('点歌 ' + displayText).catch(() => {});
                    }

                    addHistory(finalSong);
                    copyToClipboard(displayText);

                    isRandomizing = false;
                    if (randomBtn) { randomBtn.classList.remove('loading'); randomBtn.disabled = false; }
                }
            }, 80 + Math.random() * 60);
        }

        function addHistory(song) {
            randomHistory.unshift(song);
            if (randomHistory.length > maxHistory) {
                randomHistory.pop();
            }
            updateHistoryDisplay();
        }

        function updateHistoryDisplay() {
            if (!historyList) return;

            if (randomHistory.length === 0) {
                historyList.textContent = '暂无';
                return;
            }

            let html = '';
            for (let i = 0; i < randomHistory.length; i++) {
                const artist = getSongArtist(randomHistory[i]);
                const displayText = artist && artist !== '未知歌手' ? `${randomHistory[i]} - ${artist}` : randomHistory[i];
                html += `<span class="history-item" title="${displayText}">${displayText}</span>`;
            }
            historyList.innerHTML = html;
        }

        function clearHistory() {
            randomHistory = [];
            updateHistoryDisplay();
        }

        function initRandomPicker() {
            if (randomBtn) {
                randomBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    pickRandomSong();
                });
            }

            if (randomDisplay) {
                randomDisplay.addEventListener('click', pickRandomSong);
            }

            document.addEventListener('keydown', function(e) {
                if ((e.key === 'r' || e.key === 'R')) {
                    const active = document.activeElement;
                    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
                        return;
                    }
                    pickRandomSong();
                    e.preventDefault();
                }
            });

            updateHistoryDisplay();
        }

        // ============================================================
        //  🔄 关键：从编辑页返回时刷新数据
        // ============================================================

        function refreshData() {
            console.log('🔄 刷新数据（从 localStorage 重新读取）...');
            // 重新获取歌单
            songList = getSongNameList();
            // 重新过滤
            songList = songList.filter(s => {
                if (!s || typeof s !== 'string') return false;
                const trimmed = s.trim();
                if (trimmed === '') return false;
                for (let i = 0; i < CONFIG.excludeKeywords.length; i++) {
                    if (trimmed.includes(CONFIG.excludeKeywords[i])) return false;
                }
                return true;
            });
            // 刷新视图
            updateView();
            // 刷新历史显示
            updateHistoryDisplay();
            console.log('✅ 数据刷新完成，当前歌曲数:', songList.length);
        }

        // ===== pageshow 事件：从编辑页返回时自动刷新 =====
        window.addEventListener('pageshow', function(event) {
            // 如果是往返缓存（bfcache）恢复，或者页面重新显示
            if (event.persisted || !event.target.performance) {
                refreshData();
            }
        });

        // ===== 监听 storage 事件（其他标签页修改时同步） =====
        window.addEventListener('storage', function(e) {
            if (e.key === STORAGE_KEY) {
                console.log('📦 检测到其他页面修改了歌单，自动刷新');
                refreshData();
            }
        });

        // ============================================================
        //  初始化
        // ============================================================

        // 默认选中"全部"
        const allTag = document.querySelector('.genre-tag[data-genre="全部"]');
        if (allTag) {
            allTag.style.background = 'rgba(42,44,66,0.2)';
        }

        // 初始化歌单
        updateView();
        
        // 初始化轮播
        initSlider();
        
        // 初始化随机抽取
        initRandomPicker();

        // 暴露清空历史到全局
        window.clearHistory = clearHistory;
        // 暴露刷新函数（方便调试）
        window.refreshPlaylist = refreshData;

        console.log('✅ 应用初始化完成（localStorage 联动版 - 含歌手）！');
        console.log('📊 当前显示歌曲数:', document.querySelectorAll('.song-item').length);
        console.log('💡 从编辑页返回时会自动刷新数据');
    }

})();