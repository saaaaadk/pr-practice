// 前端：只通过 /api 和后端通信
const list = document.getElementById('list');

async function load() {
  const res = await fetch('/api/todos');
  const todos = await res.json();
  list.innerHTML = todos.map((t) => `<li>📌${t.title}</li>`).join('');
}

document.getElementById('add').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  await fetch('/api/todos', { method: 'POST', body: JSON.stringify({ title }) });
  document.getElementById('title').value = '';
  load();
});

load();
