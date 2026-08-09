(function() {
    // ===== 歌单数据 =====
    const rawSongs = [
        "谁", "Doll", "探窗", "婚约", "大喜", "谁家", "可能", "天才", "澎湃", "慢慢",
        "旋木", "像鱼", "暖暖", "大鱼", "苍耳", "走马", "平庸", "不怕", "再见", "记得",
        "续雪", "雨爱", "大眠", "贪慕", "年轮", "迷鹿", "借过", "我曾", "落款", "下潜",
        "演员", "她说", "撒野", "冬眠", "嘉宾", "侧脸", "过火", "夜车", "白羊", "传奇",
        "房间", "小孩", "直觉", "对视", "虚拟", "小半", "听海", "冲动", "i love u", "两三句",
        "燕回巷", "伯虎说", "广寒宫", "小年兽", "牵丝戏", "凑热闹", "苏州河", "口头禅",
        "我会等", "七月上", "闹哄哄", "试试吧", "声声慢", "可能否", "太委屈", "我想念",
        "愿与愁", "下雨了", "他不懂", "虹之间", "我走后", "我会等", "想某人", "我害怕",
        "我和你", "虫儿飞", "相思遥", "时间轴", "追光者", "我知道", "我看过", "一点点",
        "小模样", "爱一点", "第一天", "小尾巴", "醉清风", "小幸运", "霸王别姬", "一笑倾城",
        "万有引力", "我想我会", "爱的魔法", "告白气球", "明天过后", "夏天的风", "气象站台",
        "小镇姑娘", "茶花开了", "连名带姓", "无人之岛", "字字句句", "忽而今夏", "说好不哭",
        "天外来物", "如果可以", "那个夏天", "寂寞烟火", "忘了没有", "想想念念", "颠倒之间",
        "好久不见", "忘记时间", "就忘了吧", "失落沙洲", "我很快乐", "不再联系", "像风一样",
        "身骑白马", "情字最大", "错位时空", "一路生花", "勾指起誓", "今夜有雨", "后会无期",
        "晴天和猫", "情非得已", "忽然之间", "熬夜上瘾", "一半一半", "荷塘月色", "明天,你好",
        "他乡的月亮", "辞九门回忆", "人间惊鸿宴", "新贵妃醉酒", "泼天的富贵", "爱的感叹号",
        "陪你看星星", "空山新雨后", "恶龙与小熊", "已经有我啦", "奇妙能力歌", "会呼吸的痛",
        "爱我还是他", "突然好想你", "想你时风起", "小了白了兔", "会开花的云", "没那么简单",
        "只是太爱你", "新梅花三弄", "亲爱的你啊", "踮起脚尖爱", "等一场大雨", "快乐的扑满",
        "阳光下的星星", "暗恋这件小事", "有可能的夜晚", "推开世界的门", "梦雨星海之间",
        "化身孤岛的鲸", "阿拉斯加海湾", "离开我的依赖", "如晴天似雨天", "我还有点小糊涂",
        "晚夜微雨问海棠", "请你吃个冰激凌", "白月光与朱砂痣", "像你这样的朋友",
        "酸酸甜甜就是我", "你的眼睛像星星", "好像要牵你的手", "山外小楼夜听雨",
        "这世界那么多人", "我期待的不是雪", "第57次取消发送", "我恨明月不照我",
        "我变了，我没变", "云朵变成棉花糖", "一个人想着一个人", "在加纳共和国离婚",
        "就让这大雨全都落下", "我多喜欢你，你会知道", "我喜欢你时内心的活动",
        "无论你多怪异我还是会喜欢你", "失控", "阿嬷", "宝贝", "褪黑素", "你是我的小狗",
        "老公公老婆婆"
    ];

    const songList = rawSongs.filter(s => s && s.trim() !== '' && !s.includes('舰长'));

    // ===== DOM 引用 =====
    const songListEl = document.getElementById('songList');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const songCountEl = document.getElementById('songCount');
    const bgPicker = document.getElementById('bgPicker');
    const photoFrame = document.getElementById('photoFrame');

    let currentGenre = '全部';
    let currentKeyword = '';

    // ===== 渲染函数 =====
    function renderSongs(filteredSongs) {
        if (!filteredSongs || filteredSongs.length === 0) {
            songListEl.innerHTML = `<div class="no-result">✨ 没有找到歌曲，换个关键词吧</div>`;
            songCountEl.textContent = `0 首`;
            return;
        }

        let html = '';
        filteredSongs.forEach((song, idx) => {
            const tag = (idx % 5 === 0) ? ' ♪' : '';
            html += `
                <div class="song-item">
                    <span class="song-index">#${idx + 1}</span>
                    <span class="song-name">${song}${tag}</span>
                </div>
            `;
        });
        songListEl.innerHTML = html;
        songCountEl.textContent = `${filteredSongs.length} 首`;
    }

    // ===== 过滤逻辑 =====
    function filterSongs(keyword, genre) {
        let result = [...songList];

        if (keyword.trim() !== '') {
            const kw = keyword.trim().toLowerCase();
            result = result.filter(song => song.toLowerCase().includes(kw));
        }

        if (genre && genre !== '全部') {
            const genreMap = {
                '流行': ['爱', '我', '你', '的', '了', '风', '雨', '天', '心', '光', '星', '月', '梦', '海', '云', '雪', '花'],
                '古风': ['辞', '贵妃', '琵琶', '海棠', '白月光', '朱砂', '惊鸿', '戏', '梅花', '伯虎', '燕', '巷', '广寒', '牵丝', '相思', '人间', '晚夜', '微雨', '山外', '小楼', '夜听', '雨'],
                '民谣': ['南方', '北方', '小镇', '姑娘', '七月', '上', '走马', '小半', '房间', '小孩', '苍耳', '平庸', '再见', '记得', '慢慢', '可能', '谁', 'Doll'],
                '电子': ['Doll', 'i love u', '引力', '气泡', '旋木', '像鱼', '大鱼', '虚拟', '冲动', '小年兽', '小幸运', '万有引力', '晴天', '猫'],
                '影视': ['霸王别姬', '新贵妃醉酒', '辞九门回忆', '白月光与朱砂痣', '让大雨落下', '加纳共和国', '推开世界的门', '忽然之间', '明天过后', '说好不哭', '天外来物', '阿拉斯加海湾']
            };
            const keywords = genreMap[genre] || [];
            if (keywords.length > 0) {
                result = result.filter(song =>
                    keywords.some(kw => song.includes(kw))
                );
            }
        }

        return result;
    }

    function updateView() {
        const filtered = filterSongs(currentKeyword, currentGenre);
        renderSongs(filtered);
    }

    // ===== 事件绑定 =====
    searchBtn.addEventListener('click', function() {
        currentKeyword = searchInput.value;
        updateView();
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            currentKeyword = searchInput.value;
            updateView();
        }
    });

    // 分类点击
    document.getElementById('genreNav').addEventListener('click', function(e) {
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
        }
    });

    // 背景颜色
    bgPicker.addEventListener('input', function(e) {
        document.body.style.background = e.target.value;
    });

    // ===== 加载照片 =====
    (function loadPhoto() {
        const img = document.createElement('img');
        img.src = 'img/yuchu.jpg';
        img.alt = '歌单封面';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        photoFrame.innerHTML = '';
        photoFrame.appendChild(img);
    })();

    // ===== 初始化 =====
    document.body.style.background = bgPicker.value;
    document.querySelector('.genre-tag[data-genre="全部"]').style.background = 'rgba(42,44,66,0.2)';
    updateView();
})();