<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>编辑歌单</title>
    <style>
        /* 编辑页面样式 */
        body { font-family: -apple-system, sans-serif; background: #f5f3f8; padding: 20px; }
        .edit-container { max-width: 900px; margin: 0 auto; background: white; border-radius: 16px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        h1 { margin-bottom: 20px; color: #1e1f2b; }
        .form-row { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
        .form-row input, .form-row select { padding: 8px 14px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; flex: 1; min-width: 120px; }
        .form-row button { padding: 8px 20px; background: #4a6cf7; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; }
        .form-row button:hover { background: #3a5cd7; }
        .song-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        .song-table th { text-align: left; padding: 10px 12px; background: #f0eef5; font-weight: 600; font-size: 13px; color: #555; }
        .song-table td { padding: 8px 12px; border-bottom: 1px solid #eee; vertical-align: middle; }
        .song-table .edit-input { border: 1px solid #ddd; border-radius: 4px; padding: 4px 8px; font-size: 13px; width: 100%; }
        .song-table .edit-input:focus { border-color: #4a6cf7; outline: none; }
        .btn-sm { padding: 4px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; }
        .btn-save { background: #27ae60; color: white; }
        .btn-save:hover { background: #219a52; }
        .btn-delete { background: #e74c5e; color: white; }
        .btn-delete:hover { background: #c0392b; }
        .btn-cancel { background: #95a5a6; color: white; }
        .btn-cancel:hover { background: #7f8c8d; }
        .back-link { display: inline-block; margin-bottom: 16px; color: #4a6cf7; text-decoration: none; }
        .back-link:hover { text-decoration: underline; }
        .stats { margin-top: 12px; color: #888; font-size: 13px; }
        .editing-row { background: #f8f9ff; }
        .action-cell { display: flex; gap: 6px; flex-wrap: wrap; }
    </style>
</head>
<body>
<div class="edit-container" id="editApp">
    <a href="./index3.html" class="back-link">← 返回歌单</a>
    <h1>📝 编辑歌单（含歌手）</h1>
    
    <!-- 添加表单 -->
    <div class="form-row">
        <input type="text" id="newName" placeholder="歌名 *" />
        <input type="text" id="newArtist" placeholder="歌手" />
        <input type="text" id="newGenre" placeholder="曲风（如：流行）" />
        <button id="addBtn">➕ 添加</button>
        <button id="resetBtn" style="background:#e67e22;">🔄 重置</button>
    </div>

    <div style="overflow-x:auto;">
        <table class="song-table" id="songTable">
            <thead>
                <tr>
                    <th style="width:50px;">#</th>
                    <th style="min-width:100px;">歌名</th>
                    <th style="min-width:100px;">歌手</th>
                    <th style="min-width:80px;">曲风</th>
                    <th style="width:160px;">操作</th>
                </tr>
            </thead>
            <tbody id="songTableBody">
                <!-- 由 JS 渲染 -->
            </tbody>
        </table>
    </div>
    <div class="stats" id="editStats">共 0 首歌曲</div>
</div>

<script>
    // 编辑页面逻辑 - 使用 PlaylistAPI
    (function() {
        'use strict';

        function renderTable() {
            const playlist = window.PlaylistAPI.get();
            const tbody = document.getElementById('songTableBody');
            const stats = document.getElementById('editStats');
            
            if (!tbody) return;
            
            if (playlist.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#999;padding:30px;">暂无歌曲，添加一些吧 🎵</td></tr>';
                if (stats) stats.textContent = '共 0 首歌曲';
                return;
            }

            let html = '';
            for (let i = 0; i < playlist.length; i++) {
                const item = playlist[i];
                const name = item.name || '';
                const artist = item.artist || '未知歌手';
                const genre = item.genre || '流行';
                
                html += `
                    <tr data-index="${i}">
                        <td>${i + 1}</td>
                        <td><input class="edit-input" type="text" value="${name}" data-field="name" /></td>
                        <td><input class="edit-input" type="text" value="${artist}" data-field="artist" /></td>
                        <td><input class="edit-input" type="text" value="${genre}" data-field="genre" /></td>
                        <td class="action-cell">
                            <button class="btn-sm btn-save" data-action="save">💾 保存</button>
                            <button class="btn-sm btn-delete" data-action="delete">🗑️ 删除</button>
                        </td>
                    </tr>
                `;
            }
            tbody.innerHTML = html;
            if (stats) stats.textContent = `共 ${playlist.length} 首歌曲`;

            // 绑定事件
            tbody.querySelectorAll('[data-action="save"]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const tr = this.closest('tr');
                    const index = parseInt(tr.dataset.index);
                    const nameInput = tr.querySelector('[data-field="name"]');
                    const artistInput = tr.querySelector('[data-field="artist"]');
                    const genreInput = tr.querySelector('[data-field="genre"]');
                    
                    const newName = nameInput ? nameInput.value : '';
                    const newArtist = artistInput ? artistInput.value : '';
                    const newGenre = genreInput ? genreInput.value : '';
                    
                    if (!newName.trim()) {
                        alert('歌名不能为空！');
                        return;
                    }
                    
                    try {
                        window.PlaylistAPI.update(index, newName, newArtist, newGenre);
                        renderTable();
                        // 通知主页面刷新
                        localStorage.setItem('playlist_updated', Date.now().toString());
                    } catch (e) {
                        alert('保存失败: ' + e.message);
                    }
                });
            });

            tbody.querySelectorAll('[data-action="delete"]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const tr = this.closest('tr');
                    const index = parseInt(tr.dataset.index);
                    const name = tr.querySelector('[data-field="name"]').value || '未知';
                    
                    if (!confirm(`确定要删除 "${name}" 吗？`)) return;
                    
                    try {
                        window.PlaylistAPI.deleteByIndex(index);
                        renderTable();
                        localStorage.setItem('playlist_updated', Date.now().toString());
                    } catch (e) {
                        alert('删除失败: ' + e.message);
                    }
                });
            });
        }

        // 添加歌曲
        document.getElementById('addBtn').addEventListener('click', function() {
            const nameInput = document.getElementById('newName');
            const artistInput = document.getElementById('newArtist');
            const genreInput = document.getElementById('newGenre');
            
            const name = nameInput.value.trim();
            const artist = artistInput.value.trim();
            const genre = genreInput.value.trim();
            
            if (!name) {
                alert('请输入歌名！');
                nameInput.focus();
                return;
            }
            
            try {
                window.PlaylistAPI.add(name, artist || undefined, genre || undefined);
                nameInput.value = '';
                artistInput.value = '';
                genreInput.value = '';
                renderTable();
                localStorage.setItem('playlist_updated', Date.now().toString());
            } catch (e) {
                alert('添加失败: ' + e.message);
            }
        });

        // 重置歌单
        document.getElementById('resetBtn').addEventListener('click', function() {
            if (!confirm('⚠️ 确定要重置为默认歌单吗？当前数据将丢失！')) return;
            try {
                window.PlaylistAPI.reset();
                renderTable();
                localStorage.setItem('playlist_updated', Date.now().toString());
            } catch (e) {
                alert('重置失败: ' + e.message);
            }
        });

        // 初始化
        if (window.PlaylistAPI) {
            renderTable();
            console.log('📝 编辑页面已加载，当前歌曲数:', window.PlaylistAPI.count());
        } else {
            alert('PlaylistAPI 未加载，请检查 playlist2.js 是否引入');
        }

        // 监听 storage 变化，同步更新
        window.addEventListener('storage', function(e) {
            if (e.key === 'playlist_updated') {
                renderTable();
            }
        });

    })();
</script>
</body>
</html>