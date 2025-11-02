let daftarTugas = [];
let idEdit = null;
let daftarMataKuliah = [
    'Jaringan Komputer',
    'Interaksi Desain',
    'Pengembangan Aplikasi Web',
    'Metodologi Penelitian',
    'Sistem Informasi'
];

// Fungsi Dasar Aplikasi
function inisialisasi() {
    muatDaftarMataKuliah();
    muatTugas();
    setMinDate();
}

function muatDaftarMataKuliah() {
    const select = document.getElementById('mataKuliahTugas');
    select.innerHTML = '<option value="">-- Pilih Mata Kuliah --</option>';
    
    daftarMataKuliah.forEach(matkul => {
        const option = document.createElement('option');
        option.value = matkul;
        option.textContent = matkul;
        select.appendChild(option);
    });
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('deadlineTugas').min = today;
}

function muatTugas() {
    const tugasTersimpan = localStorage.getItem('daftarTugas');
    if (tugasTersimpan) {
        daftarTugas = JSON.parse(tugasTersimpan);
    }
    tampilkanTugas();
    perbaruiStatistik();
    perbaruiFilterMataKuliah();
}

function simpanKeStorage() {
    localStorage.setItem('daftarTugas', JSON.stringify(daftarTugas));
}

function bukaModal() {
    document.getElementById('modalTugas').style.display = 'block';
    document.getElementById('judulModal').textContent = 'Tambah Tugas Baru';
    document.getElementById('formTugas').reset();
    document.getElementById('mataKuliahTugas').style.display = 'block';
    idEdit = null;
    hapusError();
    setMinDate();
}

function tutupModal() {
    document.getElementById('modalTugas').style.display = 'none';
    idEdit = null;
}

function hapusError() {
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('error'));
}

function validasiForm() {
    hapusError();
    let valid = true;

    const nama = document.getElementById('namaTugas').value.trim();
    const mataKuliah = document.getElementById('mataKuliahTugas').value;
    const deadline = document.getElementById('deadlineTugas').value;

    if (!nama) {
        document.getElementById('errorNama').style.display = 'block';
        document.getElementById('namaTugas').classList.add('error');
        valid = false;
    }

    if (!mataKuliah) {
        document.getElementById('errorMataKuliah').style.display = 'block';
        document.getElementById('mataKuliahTugas').classList.add('error');
        valid = false;
    }

    if (!deadline) {
        document.getElementById('errorDeadline').style.display = 'block';
        document.getElementById('deadlineTugas').classList.add('error');
        valid = false;
    } else {
        const tanggalDipilih = new Date(deadline);
        const hariIni = new Date();
        hariIni.setHours(0, 0, 0, 0);
        
        if (tanggalDipilih < hariIni) {
            document.getElementById('errorDeadline').style.display = 'block';
            document.getElementById('deadlineTugas').classList.add('error');
            valid = false;
        }
    }

    return valid;
}

// Operasi CRUD Tugas
function simpanTugas(e) {
    e.preventDefault();

    if (!validasiForm()) return;

    const nama = document.getElementById('namaTugas').value.trim();
    const mataKuliah = document.getElementById('mataKuliahTugas').value;
    const deadline = document.getElementById('deadlineTugas').value;

    if (idEdit !== null) {
        const tugas = daftarTugas.find(t => t.id === idEdit);
        Object.assign(tugas, { nama, mataKuliah, deadline });
    } else {
        daftarTugas.push({
            id: Date.now(),
            nama,
            mataKuliah,
            deadline,
            selesai: false
        });
    }

    simpanKeStorage();
    tampilkanTugas();
    perbaruiStatistik();
    perbaruiFilterMataKuliah();
    tutupModal();
}

// Fungsi Pengelolaan Status Tugas 
function toggleSelesai(id) {
    const tugas = daftarTugas.find(t => t.id === id);
    if (tugas) {
        tugas.selesai = !tugas.selesai;
        simpanKeStorage();
        tampilkanTugas();
        perbaruiStatistik();
    }
}

function editTugas(id) {
    const tugas = daftarTugas.find(t => t.id === id);
    if (tugas) {
        document.getElementById('judulModal').textContent = 'Edit Tugas';
        document.getElementById('namaTugas').value = tugas.nama;
        document.getElementById('mataKuliahTugas').value = tugas.mataKuliah;
        document.getElementById('deadlineTugas').value = tugas.deadline;
        idEdit = id;
        document.getElementById('modalTugas').style.display = 'block';
    }
}

function hapusTugas(id) {
    if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
        daftarTugas = daftarTugas.filter(t => t.id !== id);
        simpanKeStorage();
        tampilkanTugas();
        perbaruiStatistik();
        perbaruiFilterMataKuliah();
    }
}

// Fungsi Pembantu
function deadlineDekat(stringTanggal) {
    const deadline = new Date(stringTanggal);
    const hariIni = new Date();
    const selisihWaktu = deadline - hariIni;
    const selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));
    return selisihHari <= 3 && selisihHari >= 0;
}

function formatTanggal(stringTanggal) {
    const tanggal = new Date(stringTanggal);
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${tanggal.getDate()} ${bulan[tanggal.getMonth()]} ${tanggal.getFullYear()}`;
}

// Fungsi Tampilan dan Filter 
function dapatkanTugasTerfilter() {
    const kataKunci = document.getElementById('inputPencarian').value.toLowerCase();
    const filterStatus = document.getElementById('filterStatus').value;
    const filterMataKuliah = document.getElementById('filterMataKuliah').value;

    return daftarTugas.filter(tugas => {
        const cocokPencarian = tugas.nama.toLowerCase().includes(kataKunci) ||
                              tugas.mataKuliah.toLowerCase().includes(kataKunci);
        const cocokStatus = filterStatus === 'semua' || 
                           (filterStatus === 'selesai' && tugas.selesai) ||
                           (filterStatus === 'belumSelesai' && !tugas.selesai);
        const cocokMataKuliah = filterMataKuliah === 'semua' || tugas.mataKuliah === filterMataKuliah;
        
        return cocokPencarian && cocokStatus && cocokMataKuliah;
    });
}

// Fungsi Tampilan 
function tampilkanTugas() {
    const container = document.getElementById('daftarTugas');
    const tugasTerfilter = dapatkanTugasTerfilter();

    if (tugasTerfilter.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Tidak ada tugas ditemukan</p></div>';
        return;
    }

    container.innerHTML = tugasTerfilter.map(tugas => `
        <div class="task-item ${tugas.selesai ? 'selesai' : ''}">
            <div class="task-content">
                <div class="task-title">${tugas.nama}</div>
                <div class="task-meta">
                    <span class="badge badge-matkul">${tugas.mataKuliah}</span>
                    <span class="badge ${deadlineDekat(tugas.deadline) ? 'badge-urgent' : 'badge-deadline'}">
                        ${formatTanggal(tugas.deadline)}
                        ${deadlineDekat(tugas.deadline) && !tugas.selesai ? ' (Mendesak)' : ''}
                    </span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-action btn-check" onclick="toggleSelesai(${tugas.id})" title="${tugas.selesai ? 'Tandai belum selesai' : 'Tandai selesai'}">
                    ${tugas.selesai ? '↩' : '✓'}
                </button>
                <button class="btn-action btn-edit" onclick="editTugas(${tugas.id})" title="Edit tugas">✎</button>
                <button class="btn-action btn-delete" onclick="hapusTugas(${tugas.id})" title="Hapus tugas">×</button>
            </div>
        </div>
    `).join('');
}
// Fungsi Pembaruan Data
function perbaruiStatistik() {
    const total = daftarTugas.length;
    const selesai = daftarTugas.filter(t => t.selesai).length;
    const belumSelesai = total - selesai;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statSelesai').textContent = selesai;
    document.getElementById('statBelumSelesai').textContent = belumSelesai;
}

function perbaruiFilterMataKuliah() {
    const mataKuliah = [...new Set(daftarTugas.map(t => t.mataKuliah))];
    const select = document.getElementById('filterMataKuliah');
    const nilaiSekarang = select.value;

    select.innerHTML = '<option value="semua">Semua Mata Kuliah</option>';
    mataKuliah.forEach(mk => {
        const option = document.createElement('option');
        option.value = mk;
        option.textContent = mk;
        select.appendChild(option);
    });

    if (mataKuliah.includes(nilaiSekarang)) {
        select.value = nilaiSekarang;
    }
}

// Penanganan Event
window.onclick = function(event) {
    const modal = document.getElementById('modalTugas');
    if (event.target === modal) {
        tutupModal();
    }
}
// Inisialisasi Aplikasi
inisialisasi();