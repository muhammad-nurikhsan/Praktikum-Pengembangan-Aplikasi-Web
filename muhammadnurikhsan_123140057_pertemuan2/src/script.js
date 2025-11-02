// ========== CLASSES ==========
class Storage {
  constructor(key) {
    this.key = key;
  }

  async save(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(this.key, JSON.stringify(data));
        resolve(true);
      }, 100);
    });
  }

  async load(defaultValue = []) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = localStorage.getItem(this.key);
        resolve(data ? JSON.parse(data) : defaultValue);
      }, 100);
    });
  }
}

class Schedule {
  constructor(course, day, start, end, room) {
    this.id = Date.now();
    this.course = course;
    this.day = day;
    this.start = start;
    this.end = end;
    this.room = room;
  }
}

class Todo {
  constructor(name, date, category) {
    this.id = Date.now();
    this.name = name;
    this.date = date;
    this.category = category;
    this.done = false;
  }

  toggleDone() {
    this.done = !this.done;
  }
}

class Dashboard {
  constructor() {
    this.scheduleStorage = new Storage('schedules');
    this.todoStorage = new Storage('todos');
    this.schedules = [];
    this.todos = [];
    this.currentDay = 'all';
    this.currentTodoFilter = 'all';
  }

  async init() {
    this.schedules = await this.scheduleStorage.load();
    this.todos = await this.todoStorage.load();
    this.renderAll();
    this.startClock();
  }

  // ========== CLOCK ==========
  startClock() {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('id-ID');
      const date = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      document.getElementById('clock').textContent = time;
      document.getElementById('date').textContent = date;
    };

    setInterval(updateClock, 1000);
    updateClock();
  }

  // ========== SCHEDULE METHODS ==========
  async addSchedule(course, day, start, end, room) {
    const schedule = new Schedule(course, day, start, end, room);
    this.schedules = [...this.schedules, schedule]; // Spread operator
    await this.scheduleStorage.save(this.schedules);
    this.renderAll();
  }

  async deleteSchedule(id) {
    this.schedules = this.schedules.filter(s => s.id !== id);
    await this.scheduleStorage.save(this.schedules);
    this.renderAll();
  }

  filterSchedules(day = 'all') {
    this.currentDay = day;
    this.renderSchedule();
  }

  getFilteredSchedules() {
    return this.currentDay === 'all' 
      ? this.schedules 
      : this.schedules.filter(s => s.day === this.currentDay);
  }

  renderSchedule() {
    const filtered = this.getFilteredSchedules();
    const tbody = document.getElementById('scheduleBody');
    
    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty">Tidak ada jadwal</td></tr>';
      return;
    }
    
    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td>${s.day}</td>
        <td>${s.course}</td>
        <td>${s.start} - ${s.end}</td>
        <td>${s.room}</td>
        <td><button onclick="dashboard.deleteSchedule(${s.id})">Hapus</button></td>
      </tr>
    `).join('');
  }

  // ========== TODO METHODS ==========
  async addTodo(name, date, category) {
    const todo = new Todo(name, date, category);
    this.todos = [...this.todos, todo]; // Spread operator
    await this.todoStorage.save(this.todos);
    this.renderAll();
  }

  async toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.toggleDone();
      await this.todoStorage.save(this.todos);
      this.renderAll();
    }
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    await this.todoStorage.save(this.todos);
    this.renderAll();
  }

  filterTodos(filter = 'all') {
    this.currentTodoFilter = filter;
    this.renderTodo();
  }

  getFilteredTodos(search = '') {
    let filtered = this.todos.filter(t => 
      t.name.toLowerCase().includes(search.toLowerCase())
    );
    
    if (this.currentTodoFilter === 'active') {
      filtered = filtered.filter(t => !t.done);
    } else if (this.currentTodoFilter === 'done') {
      filtered = filtered.filter(t => t.done);
    }
    
    return filtered;
  }

  renderTodo() {
    const search = document.getElementById('searchTodo').value;
    const filtered = this.getFilteredTodos(search);
    const list = document.getElementById('todoList');
    
    if (filtered.length === 0) {
      list.innerHTML = '<div class="empty">Tidak ada to do</div>';
      return;
    }
    
    list.innerHTML = filtered.map(t => `
      <div class="todo-item ${t.done ? 'done' : ''}">
        <div class="todo-text">
          <h4>${t.name}</h4>
          <p>${t.category} - ${t.date}</p>
        </div>
        <div class="todo-actions">
          <button class="btn-done" onclick="dashboard.toggleTodo(${t.id})">
            ${t.done ? 'Batal' : 'Selesai'}
          </button>
          <button class="btn-delete" onclick="dashboard.deleteTodo(${t.id})">Hapus</button>
        </div>
      </div>
    `).join('');
  }

  // ========== DASHBOARD STATS ==========
  updateDashboard() {
    const { todos, schedules } = this; // Destructuring
    
    document.getElementById('totalTodo').textContent = todos.length;
    document.getElementById('doneTodo').textContent = todos.filter(t => t.done).length;
    
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
    const todaySchedules = schedules.filter(s => s.day === today);
    document.getElementById('todaySchedule').textContent = todaySchedules.length;
    
    this.renderTodayTodo();
    this.renderNextSchedule(todaySchedules);
  }

  renderTodayTodo() {
    const todayDate = new Date().toISOString().split('T')[0];
    const todayTodos = this.todos
      .filter(t => !t.done && t.date === todayDate)
      .slice(0, 5);
    
    const todoBox = document.getElementById('todayTodo');
    
    if (todayTodos.length === 0) {
      todoBox.innerHTML = '<p class="empty">Tidak ada to do hari ini</p>';
      return;
    }
    
    todoBox.innerHTML = todayTodos.map(({ name, category }) => `
      <div style="padding:8px; border-left:3px solid #2563eb; margin-bottom:8px;">
        <strong>${name}</strong><br>
        <small>${category}</small>
      </div>
    `).join('');
  }

  renderNextSchedule(todaySchedules = []) {
    const sorted = [...todaySchedules].sort((a, b) => a.start.localeCompare(b.start));
    const next = sorted[0];
    const scheduleBox = document.getElementById('nextSchedule');
    
    if (next) {
      const { course, start, end, room } = next; // Destructuring
      scheduleBox.innerHTML = `
        <div style="padding:8px; border-left:3px solid #2563eb;">
          <strong>${course}</strong><br>
          <small>${start} - ${end} | ${room}</small>
        </div>
      `;
    } else {
      scheduleBox.innerHTML = '<p class="empty">Tidak ada jadwal</p>';
    }
  }

  // ========== RENDER ALL ==========
  renderAll() {
    this.renderSchedule();
    this.renderTodo();
    this.updateDashboard();
  }
}

// ========== GLOBAL INSTANCE ==========
const dashboard = new Dashboard();

// ========== NAVIGATION ==========
const showPage = (page) => {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  document.getElementById(page).classList.add('active');
  event.target.classList.add('active');
  
  const titles = { home: 'Dashboard', jadwal: 'Jadwal Kuliah', todo: 'To Do List' };
  document.getElementById('pageTitle').textContent = titles[page];
};

// ========== SCHEDULE HANDLERS ==========
const addSchedule = () => {
  const course = document.getElementById('courseName').value;
  const day = document.getElementById('day').value;
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const room = document.getElementById('room').value;
  
  if (!course || !start || !end || !room) {
    alert('Lengkapi semua field!');
    return;
  }
  
  dashboard.addSchedule(course, day, start, end, room);
  
  // Clear form
  document.getElementById('courseName').value = '';
  document.getElementById('startTime').value = '';
  document.getElementById('endTime').value = '';
  document.getElementById('room').value = '';
};

const filterDay = (day) => {
  dashboard.filterSchedules(day);
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
};

// ========== TODO HANDLERS ==========
const addTodo = () => {
  const name = document.getElementById('todoName').value;
  const date = document.getElementById('todoDate').value;
  const category = document.getElementById('todoCategory').value;
  
  if (!name || !date) {
    alert('Nama dan tanggal harus diisi!');
    return;
  }
  
  dashboard.addTodo(name, date, category);
  
  // Clear form
  document.getElementById('todoName').value = '';
  document.getElementById('todoDate').value = '';
};

const filterTodo = (filter) => {
  dashboard.filterTodos(filter);
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
};

// ========== INIT ==========
dashboard.init();