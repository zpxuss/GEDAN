// ============================================================
//  🎵 歌单管理系统 - 优化配置版（适配你的HTML结构）
// ============================================================

(function() {
    'use strict';

    // ============================================================
    //  📋 配置区域 - 在这里修改歌单和图片！
    // ============================================================
    const CONFIG = {
        // -------- 歌单数据 --------
        songs: [
            "谁", "Doll", "探窗", "婚约", "大喜", "谁家", "可能", "天才", "澎湃", "慢慢",
            "旋木", "像鱼", "暖暖", "大鱼", "苍耳", "走马", "平庸", "不怕", "再见", "记得",
            "续雪", "雨爱", "大眠", "贪慕", "年轮", "迷鹿", "借过", "我曾", "落款", "下潜",
            "演员", "她说", "撒野", "冬眠", "嘉宾", "侧脸", "过火", "夜车", "白羊", "传奇",
            "房间", "小孩", "直觉", "对视", "虚拟", "小半", "听海", "冲动", "i love u", "两三句",
            "燕回巷", "伯虎说", "广寒宫", "小年兽", "牵丝戏", "凑热闹", "苏州河", "口头禅",
            "我会等", "七月上", "闹哄哄", "试试吧", "声声慢", "可能否", "太委屈", "我想念",
            "愿与愁", "下雨了", "他不懂", "虹之间", "我走后", "想某人", "我害怕",
            "我和你", "虫儿飞", "相思遥", "时间轴", "追光者", "我知道", "我看过", "一点点",
            "小模样", "爱一点", "第一天", "小尾巴", "醉清风", "小幸运", "霸王别姬", "一笑倾城",
            "万有引力", "我想我会", "爱的魔法", "告白气球", "明天过后", "夏天的风", "气象站台",
            "小镇姑娘", "茶花开了", "连名带姓", "无人之岛", "字字句句", "忽而今夏", "说好不哭",
            "天外来物", "如果可以", "那个夏天", "寂寞烟火", "忘了没有", "想想念念", "颠倒之间",
            "好久不见", "忘记时间", "就忘了吧", "失落沙洲", "我很快乐", "不再联系", "像风一样",
            "身骑白马", "情字最大", "错位时空", "一路生花", "勾指起誓", "今夜有雨", "后会无期",
            "晴天和猫", "情非得已", "忽然之间", "熬夜上瘾", "一半一半", "荷塘月色", "明天，你好",
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
            "老公公老婆婆", "小城夏天", "年", "消散对白", "爱笑的眼睛", "锁", "爱你", "睫毛弯弯",
            "爱如潮水", "爱的供养", "安静", "不完美的小孩", "泡沫", "多远都要在一起", "东京不太热",
            "当你", "关键词", "孤单北半球", "咖喱咖喱", "给我一首歌的时间", "红色高跟鞋", "画",
            "好想爱这个世界啊", "后来", "后会无期", "静悄悄", "交换余生", "可惜没如果", "落空",
            "魔法城堡", "麦浪", "慢冷", "童话", "绿色", "那女孩对我说", "明明就", "那天下雨了",
            "歡迎光臨", "青柠", "亲爱的那不是爱情", "热爱105°的你", "如果的事", "如果爱忘了",
            "太聪明", "天后", "天黑黑", "同手同脚", "踏浪", "修炼爱情", "雪落下的声音", "小情歌",
            "月牙湾", "云与海", "阳光彩虹小白马", "一个像夏天一个像秋天", "云烟成雨", "烟雨行舟",
            "疑心病", "有点甜", "奢香夫人", "一格格", "有何不可", "中毒", "爱就一个字", "枫叶城",
            "半壶纱", "不染", "赤岭", "春泥", "寄明月", "九张机", "浪人琵琶", "若梦", "童话镇",
            "蝴蝶泉边", "勾指起誓"
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
                    '一个像夏天一个像秋天', '云烟成雨', '烟雨行舟', '疑心病', '有点甜', '奢香夫人', 
                    '一格格', '有何不可', '中毒'],
            '古风': ['探窗', '婚约', '走马', '年轮', '落款', '燕回巷', '伯虎说', '广寒宫', '牵丝戏', 
                    '声声慢', '相思遥', '霸王别姬', '身骑白马', '情字最大', '错位时空', '辞九门回忆', 
                    '人间惊鸿宴', '新贵妃醉酒', '晚夜微雨问海棠', '山外小楼夜听雨', '半壶纱', '不染', 
                    '赤岭', '春泥', '寄明月', '九张机', '浪人琵琶', '若梦', '童话镇', '蝴蝶泉边'],
            '民谣': ['七月上', '可能否', '奇妙能力歌', '寂寞烟火', '枫叶城'],
            '儿歌': ['小年兽', '凑热闹', '虫儿飞', '恶龙与小熊', '小了白了兔', '快乐的扑满', 
                    '老公公老婆婆', '你是我的小狗', '我还有点小糊涂', '请你吃个冰激凌', '酸酸甜甜就是我']
        },

        // -------- 曲风颜色配置 --------
        genreColors: {
            '流行': '#4a6cf7',
            '古风': '#e67e22',
            '民谣': '#27ae60',
            '儿歌': '#e74c5e'
        },

        // -------- 曲风背景色配置 --------
        genreBgColors: {
            '流行': 'rgba(74, 108, 247, 0.10)',
            '古风': 'rgba(230, 126, 34, 0.10)',
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
        excludeKeywords: ['舰长']
    };

    // ============================================================
    //  以下代码无需修改，自动适配配置
    // ============================================================

    // 等待 DOM 加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

    function initApp() {
        // ===== 加载配置 =====
        const { songs, genreMap, genreColors, genreBgColors, images, 
                autoPlayInterval, randomRollsMin, randomRollsMax, 
                toastDuration, maxHistory, excludeKeywords } = CONFIG;

        // ===== 过滤歌单 =====
        const songList = songs.filter(s => {
            if (!s || typeof s !== 'string') return false;
            const trimmed = s.trim();
            if (trimmed === '') return false;
            for (let i = 0; i < excludeKeywords.length; i++) {
                if (trimmed.includes(excludeKeywords[i])) return false;
            }
            return true;
        });

        // ===== DOM 引用（适配你的HTML结构） =====
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
        console.log('🚀 应用初始化...');
        console.log('📊 歌单数量:', songList.length);
        console.log('📊 过滤后歌曲数:', songList.length);
        console.log('🔍 #songList:', songListEl ? '✅ 找到' : '❌ 未找到');
        console.log('🔍 #searchInput:', searchInput ? '✅ 找到' : '❌ 未找到');
        console.log('🔍 #searchBtn:', searchBtn ? '✅ 找到' : '❌ 未找到');
        console.log('🔍 #songCount:', songCountEl ? '✅ 找到' : '❌ 未找到');

        // ===== 获取歌曲曲风 =====
        function getSongGenre(songName) {
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
            return '未分类';
        }

        // ===== 获取曲风颜色 =====
        function getGenreColor(genre) {
            return genreColors[genre] || '#95a5a6';
        }

        // ===== 获取曲风背景色 =====
        function getGenreBgColor(genre) {
            return genreBgColors[genre] || 'rgba(149, 165, 166, 0.10)';
        }

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

        // ===== 渲染函数 =====
        function renderSongs(filteredSongs) {
            if (!songListEl) {
                console.error('❌ #songList 元素未找到！');
                return;
            }

            if (!filteredSongs || filteredSongs.length === 0) {
                songListEl.innerHTML = '<div class="no-result">✨ 没有找到歌曲，换个关键词吧</div>';
                if (songCountEl) songCountEl.textContent = '0 首';
                return;
            }

            let html = '';
            for (let i = 0; i < filteredSongs.length; i++) {
                const song = filteredSongs[i];
                const genre = getSongGenre(song);
                const color = getGenreColor(genre);
                const bgColor = getGenreBgColor(genre);

                html += `
                    <div class="song-item">
                        <span class="song-index">#${i + 1}</span>
                        <span class="song-name" data-song="${song}">${song}</span>
                        <span class="song-genre" style="color:${color};background:${bgColor};border-color:${color}30;">
                            ${genre}
                        </span>
                    </div>
                `;
            }
            songListEl.innerHTML = html;
            if (songCountEl) songCountEl.textContent = filteredSongs.length + ' 首';

            // 绑定点击复制事件
            document.querySelectorAll('.song-name').forEach(elem => {
                elem.addEventListener('click', function() {
                    copyToClipboard(this.dataset.song);
                });
            });
        }

        // ===== 过滤逻辑 =====
        function filterSongs(keyword, genre) {
            let result = [...songList];

            if (keyword && keyword.trim() !== '') {
                const kw = keyword.trim().toLowerCase();
                result = result.filter(song => song.toLowerCase().includes(kw));
            }

            if (genre && genre !== '全部' && genreMap[genre]) {
                const keywords = genreMap[genre] || [];
                if (keywords.length > 0) {
                    result = result.filter(song => {
                        for (let k = 0; k < keywords.length; k++) {
                            if (song.includes(keywords[k])) return true;
                        }
                        return false;
                    });
                }
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
            // 初始化背景
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
                if (randomText) {
                    randomText.textContent = currentSongs[randomIndex];
                    randomText.style.color = '#7a7e9a';
                }
                rollCount++;

                if (rollCount >= maxRolls) {
                    clearInterval(rollInterval);
                    const finalIndex = Math.floor(Math.random() * currentSongs.length);
                    const finalSong = currentSongs[finalIndex];
                    if (randomText) {
                        randomText.textContent = finalSong;
                        randomText.style.color = '#1e1f2b';
                        randomText.classList.add('picked');
                    }
                    if (randomDisplay) randomDisplay.classList.add('picked');

                    // 自动复制
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText('点歌 ' + finalSong).catch(() => {});
                    }

                    addHistory(finalSong);
                    copyToClipboard(finalSong);

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
                html += `<span class="history-item">${randomHistory[i]}</span>`;
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

        // ===== 初始化 =====
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

        console.log('✅ 应用初始化完成！');
        console.log('📊 当前显示歌曲数:', document.querySelectorAll('.song-item').length);
    }

})();