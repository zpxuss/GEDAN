// ============================================================
//  🎵 歌单管理系统 - 最稳定启动方案
//  兼容所有浏览器，确保 DOM 加载完成
// ============================================================

(function() {
    'use strict';

    // 如果 DOM 还未加载完成，等待加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        // DOM 已就绪，直接初始化
        initApp();
    }

    function initApp() {
        // ===== 歌单数据 =====
        const rawSongs = [
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
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const genreNav = document.getElementById('genreNav');

        let currentGenre = '全部';
        let currentKeyword = '';

        // ===== 获取歌曲曲风 =====
        function getSongGenre(songName) {
            var genreMap = {
                '流行': ['谁', 'Doll', '大喜', '贪慕', '谁家', '可能', '天才', '澎湃', '慢慢','旋木', '像鱼', '暖暖', '大鱼', '苍耳', '平庸', '不怕', '再见','记得', '续雪', '雨爱', '大眠', '迷鹿', '借过', '下潜', '演员','她说', '撒野', '冬眠', '嘉宾', '侧脸', '过火', '夜车', '白羊','传奇', '房间', '小孩', '直觉', '对视', '虚拟', '小半', '听海','冲动', '失控','我曾', '阿嬷', '宝贝', '褪黑素', 'i love u', '两三句','苏州河', '口头禅', '我会等', '闹哄哄', '试试吧', '太委屈', '我想念','愿与愁', '下雨了', '他不懂', '虹之间', '我走后', '想某人', '我害怕','我和你', '时间轴', '追光者', '我知道', '我看过', '一点点','小模样', '小幸运', '爱一点', '第一天', '小尾巴', '醉清风', '一笑倾城','万有引力', '我想我会', '爱的魔法', '告白气球', '明天过后','夏天的风', '气象站台', '小镇姑娘', '茶花开了', '连名带姓', '无人之岛', '字字句句', '忽而今夏', '说好不哭', '天外来物', '如果可以', '那个夏天', '忘了没有', '想想念念', '颠倒之间', '好久不见', '忘记时间', '就忘了吧', '失落沙洲', '我很快乐', '不再联系', '像风一样', '一路生花', '勾指起誓', '今夜有雨', '后会无期', '晴天和猫', '情非得已', '忽然之间', '熬夜上瘾', '一半一半', '荷塘月色', '明天，你好', '他乡的月亮', '泼天的富贵', '爱的感叹号', '陪你看星星', '空山新雨后','已经有我啦', '会呼吸的痛', '突然好想你', '爱我还是他','想你时风起','会开花的云', '没那么简单', '只是太爱你', '新梅花三弄','亲爱的你啊', '踮起脚尖爱', '等一场大雨', '阳光下的星星','暗恋这件小事', '有可能的夜晚', '推开世界的门', '梦雨星海之间','化身孤岛的鲸', '阿拉斯加海湾', '离开我的依赖', '如晴天似雨天', '白月光与朱砂痣', '像你这样的朋友', '你的眼睛像星星', '好像要牵你的手', '这世界那么多人', '我期待的不是雪', '第57次取消发送', '我恨明月不照我', '我变了，我没变', '云朵变成棉花糖', '一个人想着一个人', '在加纳共和国离婚', '就让这大雨全都落下', '我多喜欢你，你会知道', '我喜欢你时内心的活动', '无论你多怪异我还是会喜欢你'],
                '古风': ['探窗', '婚约', '走马', '年轮', '落款', '燕回巷', '伯虎说', '广寒宫','牵丝戏', '声声慢', '相思遥', '霸王别姬', '身骑白马', '情字最大', '错位时空','辞九门回忆', '人间惊鸿宴', '新贵妃醉酒', '晚夜微雨问海棠', '山外小楼夜听雨'],
                '民谣': ['七月上', '可能否', '奇妙能力歌', '寂寞烟火'],
                '儿歌': ['小年兽', '凑热闹', '虫儿飞', '恶龙与小熊', '小了白了兔','快乐的扑满', '老公公老婆婆', '你是我的小狗', '我还有点小糊涂','请你吃个冰激凌', '酸酸甜甜就是我']
            };
            
            for (var genre in genreMap) {
                if (genreMap.hasOwnProperty(genre)) {
                    var keywords = genreMap[genre];
                    for (var i = 0; i < keywords.length; i++) {
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
            var colorMap = {
                '流行': '#4a6cf7',
                '古风': '#e67e22',
                '民谣': '#27ae60',
                '儿歌': '#e74c5e',
            };
            return colorMap[genre] || '#95a5a6';
        }

        // ===== 获取曲风背景色（浅色版） =====
        function getGenreBgColor(genre) {
            var bgMap = {
                '流行': 'rgba(74, 108, 247, 0.10)',
                '古风': 'rgba(230, 126, 34, 0.10)',
                '民谣': 'rgba(39, 174, 96, 0.10)',
                '儿歌': 'rgba(231, 76, 94, 0.10)',
            };
            return bgMap[genre] || 'rgba(149, 165, 166, 0.10)';
        }

        // ===== Toast 提示函数 =====
        function showToast(message) {
            // 移除已有的 Toast
            const existing = document.querySelector('.toast-message');
            if (existing) {
                existing.remove();
            }

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

            // 添加动画样式（如果不存在）
            if (!document.getElementById('toastStyles')) {
                const style = document.createElement('style');
                style.id = 'toastStyles';
                style.textContent = `
                    @keyframes toastIn {
                        from {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0.8);
                        }
                        to {
                            opacity: 1;
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
                    @keyframes toastOut {
                        from {
                            opacity: 1;
                            transform: translate(-50%, -50%) scale(1);
                        }
                        to {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0.8);
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(toast);

            // 2秒后自动消失
            setTimeout(function() {
                toast.style.animation = 'toastOut 0.3s ease forwards';
                setTimeout(function() {
                    if (toast.parentNode) {
                        toast.remove();
                    }
                }, 300);
            }, 1500);
        }

        // ===== 复制功能 =====
        function copyToClipboard(text) {
            var copyText = '点歌 ' + text;
            // 方法1: 使用 Clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(copyText)
                    .then(function() {
                        showToast('✅ 已复制: "' + copyText + '"');
                    })
                    .catch(function() {
                        fallbackCopy(copyText);
                    });
            } else {
                fallbackCopy(copyText);
            }
        }

        // ===== 备用复制方法 =====
        function fallbackCopy(text) {
            var input = document.createElement('input');
            input.value = text;
            input.style.position = 'fixed';
            input.style.opacity = '0';
            input.style.left = '-9999px';
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
            if (!filteredSongs || filteredSongs.length === 0) {
                songListEl.innerHTML = '<div class="no-result">✨ 没有找到歌曲，换个关键词吧</div>';
                songCountEl.textContent = '0 首';
                return;
            }

            var html = '';
            for (var i = 0; i < filteredSongs.length; i++) {
                var song = filteredSongs[i];
                var genre = getSongGenre(song);
                var color = getGenreColor(genre);
                var bgColor = getGenreBgColor(genre);

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
            songCountEl.textContent = filteredSongs.length + ' 首';

            // 为所有歌名绑定点击复制事件
            var songNames = document.querySelectorAll('.song-name');
            for (var j = 0; j < songNames.length; j++) {
                (function(elem) {
                    elem.addEventListener('click', function() {
                        var songName = this.dataset.song;
                        copyToClipboard(songName);
                    });
                })(songNames[j]);
            }
        }

        // ===== 过滤逻辑 =====
        function filterSongs(keyword, genre) {
            var result = songList.slice(); // 复制数组

            if (keyword.trim() !== '') {
                var kw = keyword.trim().toLowerCase();
                result = result.filter(function(song) {
                    return song.toLowerCase().includes(kw);
                });
            }

            if (genre && genre !== '全部') {
                var genreMap = {
                    '流行': ['谁', 'Doll', '大喜', '谁家', '可能', '天才', '澎湃', '慢慢','旋木', '像鱼', '暖暖', '大鱼', '苍耳', '平庸', '不怕', '再见','记得', '续雪', '雨爱', '大眠', '迷鹿', '借过', '下潜', '演员','她说', '撒野', '冬眠', '嘉宾', '侧脸', '过火', '夜车', '白羊','传奇', '房间', '小孩', '直觉', '对视', '虚拟', '小半', '听海','冲动', '失控', '阿嬷', '宝贝', '褪黑素', 'i love u', '两三句','苏州河', '口头禅', '我会等', '闹哄哄', '试试吧', '太委屈', '我想念','愿与愁', '下雨了', '他不懂', '虹之间', '我走后', '想某人', '我害怕','我和你', '时间轴', '追光者', '我知道', '我看过', '一点点','小模样', '爱一点', '第一天', '小尾巴', '醉清风', '一笑倾城','万有引力', '我想我会', '爱的魔法', '告白气球', '明天过后','夏天的风', '气象站台', '小镇姑娘', '茶花开了', '连名带姓','无人之岛','字字句句', '忽而今夏', '说好不哭', '天外来物','如果可以', '那个夏天', '忘了没有', '想想念念', '颠倒之间','好久不见', '忘记时间', '就忘了吧', '失落沙洲', '我很快乐','不再联系', '像风一样', '一路生花', '勾指起誓', '今夜有雨','后会无期', '晴天和猫', '情非得已', '忽然之间', '熬夜上瘾','一半一半', '荷塘月色', '明天，你好', '他乡的月亮','泼天的富贵', '爱的感叹号', '陪你看星星', '空山新雨后','已经有我啦', '会呼吸的痛', '突然好想你', '想你时风起','会开花的云', '没那么简单', '只是太爱你', '新梅花三弄','亲爱的你啊', '踮起脚尖爱', '等一场大雨', '阳光下的星星','暗恋这件小事', '有可能的夜晚', '推开世界的门', '梦雨星海之间','化身孤岛的鲸', '阿拉斯加海湾', '离开我的依赖', '如晴天似雨天','白月光与朱砂痣', '像你这样的朋友', '你的眼睛像星星','好像要牵你的手', '这世界那么多人', '我期待的不是雪','第57次取消发送', '我恨明月不照我', '我变了，我没变','云朵变成棉花糖', '一个人想着一个人', '在加纳共和国离婚','就让这大雨全都落下', '我多喜欢你你会知道','我喜欢你时内心的活动', '无论你多怪异我还是会喜欢你'],
                    '古风': ['探窗', '婚约', '走马', '年轮', '落款', '燕回巷', '伯虎说', '广寒宫','牵丝戏', '声声慢', '相思遥', '霸王别姬', '身骑白马', '情字最大', '错位时空','辞九门回忆', '人间惊鸿宴', '新贵妃醉酒', '晚夜微雨问海棠', '山外小楼夜听雨'],
                    '民谣': ['七月上', '可能否', '奇妙能力歌', '寂寞烟火'],
                    '儿歌': ['小年兽', '凑热闹', '虫儿飞', '恶龙与小熊', '小了白了兔','快乐的扑满', '老公公老婆婆', '你是我的小狗', '我还有点小糊涂','请你吃个冰激凌', '酸酸甜甜就是我']
                };
                var keywords = genreMap[genre] || [];
                if (keywords.length > 0) {
                    result = result.filter(function(song) {
                        for (var k = 0; k < keywords.length; k++) {
                            if (song.includes(keywords[k])) {
                                return true;
                            }
                        }
                        return false;
                    });
                }
            }

            return result;
        }

        function updateView() {
            var filtered = filterSongs(currentKeyword, currentGenre);
            renderSongs(filtered);
        }

        // ===== 汉堡菜单控制 =====
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                genreNav.classList.toggle('open');
            });
        }

        document.addEventListener('click', function(e) {
            if (genreNav && hamburgerBtn) {
                if (!genreNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    genreNav.classList.remove('open');
                }
            }
        });

        // ===== 事件绑定 =====
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                currentKeyword = searchInput.value;
                updateView();
                if (genreNav) {
                    genreNav.classList.remove('open');
                }
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    currentKeyword = searchInput.value;
                    updateView();
                    if (genreNav) {
                        genreNav.classList.remove('open');
                    }
                }
            });
        }

        if (genreNav) {
            genreNav.addEventListener('click', function(e) {
                var target = e.target.closest('.genre-tag');
                if (!target) return;
                e.preventDefault();

                var genre = target.dataset.genre;
                if (genre) {
                    currentGenre = genre;

                    var tags = document.querySelectorAll('.genre-tag');
                    for (var i = 0; i < tags.length; i++) {
                        tags[i].style.background = 'rgba(42,44,66,0.06)';
                        tags[i].style.color = '#1e1f2b';
                    }
                    target.style.background = 'rgba(42,44,66,0.2)';
                    target.style.color = '#000';

                    updateView();
                    genreNav.classList.remove('open');
                }
            });
        }

        if (bgPicker) {
            bgPicker.addEventListener('input', function(e) {
                document.body.style.background = e.target.value;
            });
        }

        // ===== 图片轮播配置 =====
        var imageList = [
            './img/yuchu2.jpg',     // 请替换为实际图片路径
        ];
        
        var currentImageIndex = 0;
        var autoPlayTimer = null;
        var isAutoPlaying = true;
        
        // ===== 加载图片 =====
        function loadPhoto(index) {
            var photoFrame = document.getElementById('photoFrame');
            if (!photoFrame) return;
        
            // 确保 index 在有效范围内
            if (index < 0) index = imageList.length - 1;
            if (index >= imageList.length) index = 0;
            currentImageIndex = index;
        
            // 创建图片元素
            var img = document.createElement('img');
            img.src = imageList[index];
            img.alt = '歌单封面 ' + (index + 1);
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            // 清空并添加图片
            photoFrame.innerHTML = '';
            photoFrame.appendChild(img);
        
            // 更新指示器
            updateDots(index);
        
            // 更新底部文字
            var photoSub = document.getElementById('photoSub');
            if (photoSub) {
                photoSub.textContent = '' + (index + 1) + ' / ' + imageList.length + '  ·  点击左右切换';
            }
        
            // 保存到 localStorage
            try {
                localStorage.setItem('currentCoverIndex', index);
            } catch (e) {}
        }
        
        // ===== 更新指示器 =====
        function updateDots(activeIndex) {
            var dots = document.querySelectorAll('.slider-dot');
            for (var i = 0; i < dots.length; i++) {
                if (i === activeIndex) {
                    dots[i].classList.add('active');
                } else {
                    dots[i].classList.remove('active');
                }
            }
        }
        
        // ===== 下一张 =====
        function nextImage() {
            var nextIndex = (currentImageIndex + 1) % imageList.length;
            loadPhoto(nextIndex);
            resetAutoPlay();
        }
        
        // ===== 上一张 =====
        function prevImage() {
            var prevIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
            loadPhoto(prevIndex);
            resetAutoPlay();
        }
        
        // ===== 自动播放 =====
        function startAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
            }
            if (isAutoPlaying && imageList.length > 1) {
                autoPlayTimer = setInterval(function() {
                    nextImage();
                }, 4000); // 4秒切换一次
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
        
        // ===== 切换自动播放 =====
        function toggleAutoPlay() {
            isAutoPlaying = !isAutoPlaying;
            if (isAutoPlaying) {
                startAutoPlay();
                var sub = document.getElementById('photoSub');
                if (sub) sub.textContent += '  ▶ 自动播放';
            } else {
                stopAutoPlay();
                var sub = document.getElementById('photoSub');
                if (sub) sub.textContent = sub.textContent.replace('  ▶ 自动播放', '');
            }
        }
        
        // ===== 初始化轮播 =====
        function initSlider() {
            // 检查是否有保存的索引
            var savedIndex = localStorage.getItem('currentCoverIndex');
            if (savedIndex !== null) {
                var idx = parseInt(savedIndex);
                if (idx >= 0 && idx < imageList.length) {
                    currentImageIndex = idx;
                }
            }
        
            // 加载图片
            loadPhoto(currentImageIndex);
        
            // 生成指示器
            var dotsContainer = document.getElementById('sliderDots');
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                for (var i = 0; i < imageList.length; i++) {
                    var dot = document.createElement('button');
                    dot.className = 'slider-dot' + (i === currentImageIndex ? ' active' : '');
                    dot.dataset.index = i;
                    dot.setAttribute('aria-label', '切换到第 ' + (i + 1) + ' 张');
                    dot.addEventListener('click', function() {
                        var index = parseInt(this.dataset.index);
                        loadPhoto(index);
                        resetAutoPlay();
                    });
                    dotsContainer.appendChild(dot);
                }
            }
        
            // 绑定按钮事件
            var prevBtn = document.getElementById('sliderPrev');
            var nextBtn = document.getElementById('sliderNext');
            
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
        
            // 点击图片切换（手动切换）
            var photoFrame = document.getElementById('photoFrame');
            if (photoFrame) {
                photoFrame.addEventListener('click', function() {
                    nextImage();
                });
            }
        
            // 键盘控制
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    prevImage();
                    e.preventDefault();
                } else if (e.key === 'ArrowRight') {
                    nextImage();
                    e.preventDefault();
                } else if (e.key === ' ') {
                    toggleAutoPlay();
                    e.preventDefault();
                }
            });
        
            // 鼠标悬停暂停自动播放
            var slider = document.querySelector('.photo-slider');
            if (slider) {
                slider.addEventListener('mouseenter', function() {
                    if (isAutoPlaying) {
                        stopAutoPlay();
                    }
                });
                slider.addEventListener('mouseleave', function() {
                    if (isAutoPlaying) {
                        startAutoPlay();
                    }
                });
            }
        
            // 启动自动播放
            if (imageList.length > 1) {
                startAutoPlay();
            }
        }

        // ===== 随机抽取功能 =====
        var randomHistory = [];
        var MAX_HISTORY = 8;
        var isRandomizing = false;

        // ===== 随机抽取歌曲 =====
        function pickRandomSong() {
            var btn = document.getElementById('randomBtn');
            var display = document.getElementById('randomDisplay');
            var textEl = document.getElementById('randomText');
            
            // 防止重复点击
            if (isRandomizing) return;
            
            // 获取当前歌单（考虑搜索和筛选状态）
            var currentSongs = getCurrentSongList();
            
            if (!currentSongs || currentSongs.length === 0) {
                textEl.textContent = '😅 歌单为空，无法抽取';
                textEl.style.color = '#e74c5e';
                return;
            }
            
            // 开始抽取动画
            isRandomizing = true;
            btn.classList.add('loading');
            btn.disabled = true;
            display.classList.remove('picked');
            textEl.classList.remove('picked');
            
            // 滚动效果（快速切换显示）
            var rollCount = 0;
            var maxRolls = 10 + Math.floor(Math.random() * 8);
            var rollInterval = setInterval(function() {
                var randomIndex = Math.floor(Math.random() * currentSongs.length);
                textEl.textContent = currentSongs[randomIndex];
                textEl.style.color = '#7a7e9a';
                rollCount++;
                
                if (rollCount >= maxRolls) {
                    clearInterval(rollInterval);
                    // 最终结果
                    var finalIndex = Math.floor(Math.random() * currentSongs.length);
                    var finalSong = currentSongs[finalIndex];
                    textEl.textContent = finalSong;
                    textEl.style.color = '#1e1f2b';
                    textEl.classList.add('picked');
                    display.classList.add('picked');

                    // 自动复制到剪贴板（包含"点歌 "前缀）
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText('点歌 ' + finalSong)
                            .then(function() {
                                // 可选：显示小提示
                            })
                            .catch(function() {});
                    }
                    
                    // 添加到历史记录
                    addHistory(finalSong);
                    
                    // 复制到剪贴板（可选）
                    copyToClipboard('' + finalSong);
                    
                    // 恢复按钮
                    isRandomizing = false;
                    btn.classList.remove('loading');
                    btn.disabled = false;
                }
            }, 80 + Math.random() * 60);
        }

        // ===== 获取当前歌单列表 =====
        function getCurrentSongList() {
            // 获取当前过滤后的歌曲列表
            var filtered = filterSongs(currentKeyword, currentGenre);
            return filtered.map(function(song) {
                return song;
            });
        }

        // ===== 添加历史记录 =====
        function addHistory(song) {
            randomHistory.unshift(song);
            if (randomHistory.length > MAX_HISTORY) {
                randomHistory.pop();
            }
            updateHistoryDisplay();
        }

        // ===== 更新历史记录显示 =====
        function updateHistoryDisplay() {
            var historyList = document.getElementById('historyList');
            if (!historyList) return;
            
            if (randomHistory.length === 0) {
                historyList.innerHTML = '<span class="empty-history">暂无记录</span>';
                return;
            }
            
            var html = '';
            for (var i = 0; i < randomHistory.length; i++) {
                var song = randomHistory[i];
                var cls = (i === 0) ? 'history-item' : 'history-item';
                html += '<span class="' + cls + '">' + song + '</span>';
            }
            historyList.innerHTML = html;
        }

        // ===== 清空历史记录 =====
        function clearHistory() {
            randomHistory = [];
            updateHistoryDisplay();
        }

        // ===== 绑定随机抽取事件 =====
        function initRandomPicker() {
            var randomBtn = document.getElementById('randomBtn');
            var display = document.getElementById('randomDisplay');
            
            if (randomBtn) {
                randomBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    pickRandomSong();
                });
            }
            
            // 点击显示区域也可以触发抽取
            if (display) {
                display.addEventListener('click', function() {
                    pickRandomSong();
                });
            }
            
            // 键盘快捷键：R 键抽取
            document.addEventListener('keydown', function(e) {
                if (e.key === 'r' || e.key === 'R') {
                    // 检查是否在输入框中
                    var active = document.activeElement;
                    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
                        return;
                    }
                    pickRandomSong();
                    e.preventDefault();
                }
            });
            
            // 初始化历史显示
            updateHistoryDisplay();
        }

        // ===== 初始化 =====
        if (bgPicker) {
            document.body.style.background = bgPicker.value;
        }

        var allTag = document.querySelector('.genre-tag[data-genre="全部"]');
        if (allTag) {
            allTag.style.background = 'rgba(42,44,66,0.2)';
        }

        updateView();

        // ===== 初始化轮播 =====
        initSlider();
        
        // ===== 初始化随机抽取 =====
        initRandomPicker();
        
        // 暴露清空历史到全局（供按钮使用）
        window.clearHistory = clearHistory;
    }

})();