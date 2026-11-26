// Live data from the public GitHub API (no token). Cached for 15 minutes; falls back quietly.
const USER = 'adham107harp';
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const LANG_COL = { TypeScript: '#3178c6', JavaScript: '#e9c84c', Python: '#3572A5', 'C++': '#f34b7d', C: '#8a8a8a', 'C#': '#178600', Java: '#b07219', HTML: '#e34c26', CSS: '#663399' };

function ago(iso) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  const u = [[31536000, 'year'], [2592000, 'month'], [604800, 'week'], [86400, 'day'], [3600, 'hour'], [60, 'minute']];
  for (const [n, w] of u) if (s >= n) { const k = Math.floor(s / n); return `${k} ${w}${k > 1 ? 's' : ''} ago`; }
  return 'just now';
}

async function getJSON(url) {
  const key = 'gh:' + url;
  try { const c = JSON.parse(sessionStorage.getItem(key) || 'null'); if (c && Date.now() - c.at < 9e5) return c.data; } catch (e) {}
  const r = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
  if (!r.ok) throw new Error(r.status);
  const data = await r.json();
  try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data })); } catch (e) {}
  return data;
}

export async function loadGitHub(el) {
  if (!el) return;
  try {
    const [user, repos, events] = await Promise.all([
      getJSON(`https://api.github.com/users/${USER}`),
      getJSON(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`),
      getJSON(`https://api.github.com/users/${USER}/events/public?per_page=30`).catch(() => []),
    ]);
    const own = repos.filter((r) => !r.fork && r.name !== USER);
    const stars = own.reduce((a, r) => a + r.stargazers_count, 0);
    const langs = {}; own.forEach((r) => { if (r.language) langs[r.language] = (langs[r.language] || 0) + 1; });
    const pushes = events.filter((e) => e.type === 'PushEvent').slice(0, 3);
    el.innerHTML = `
      <div class="gh-stats">
        <span><b>${esc(user.public_repos)}</b> public repos</span>
        <span><b>${esc(user.followers)}</b> followers</span>
        <span><b>${esc(stars)}</b> stars</span>
      </div>
      <ul class="gh-repos">${own.slice(0, 4).map((r) => `
        <li><a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(r.name)}</a>
          <span class="gh-meta">${r.language ? `<i style="background:${esc(LANG_COL[r.language] || '#9fb0e8')}"></i>${esc(r.language)} · ` : ''}pushed ${esc(ago(r.pushed_at))}</span></li>`).join('')}
      </ul>
      ${pushes.length ? `<p class="gh-sub">Latest commits</p><ul class="gh-commits">${pushes.map((e) => {
        const c = (e.payload.commits || []).slice(-1)[0];
        return `<li><span class="mono">${esc(e.repo.name.split('/')[1])}</span> ${esc((c && c.message || 'pushed').split('\n')[0]).slice(0, 80)} <em>${esc(ago(e.created_at))}</em></li>`;
      }).join('')}</ul>` : ''}
      <p class="gh-langs">${Object.entries(langs).sort((a, b) => b[1] - a[1]).map(([l]) => `<span><i style="background:${esc(LANG_COL[l] || '#9fb0e8')}"></i>${esc(l)}</span>`).join('')}</p>`;
    el.classList.add('ready');
  } catch (e) {
    el.innerHTML = `<p class="gh-off">Live data is resting (GitHub's API limit). Everything is at <a href="https://github.com/${USER}" target="_blank" rel="noopener">github.com/${USER}</a>.</p>`;
  }
}
