document.addEventListener('DOMContentLoaded', function() {

    // --- Bagian untuk Jam Digital ---

    const jamElement = document.getElementById('currentTime');

    function perbaruiJam() {
        const sekarang = new Date(); // Dapatkan waktu saat ini
        // Ubah waktu menjadi teks yang mudah dibaca (format Indonesia)
        jamElement.textContent = sekarang.toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'medium'
        });
    }

    setInterval(perbaruiJam, 1000);


    // --- Bagian untuk Formulir Kontak ---

    // 1. Temukan formulir di HTML menggunakan ID-nya.
    const messageForm = document.getElementById('messageForm');

    // 2. Tambahkan 'event listener' yang akan berjalan saat tombol 'submit' ditekan.
    messageForm.addEventListener('submit', function(event) {
        
        // 3. Mencegah halaman memuat ulang secara otomatis.
        event.preventDefault();

        // 4. Ambil semua nilai dari setiap input di dalam formulir.
        const nama = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tanggalLahir = document.getElementById('dob').value;
        const jenisKelaminInput = document.querySelector('input[name="gender"]:checked');
        const pesan = document.getElementById('message').value;

        // 5. Tampilkan nilai yang sudah diambil ke dalam elemen output.
        document.getElementById('output-name').textContent = nama;
        document.getElementById('output-email').textContent = email;
        document.getElementById('output-dob').textContent = tanggalLahir;
        
        // Periksa apakah jenis kelamin sudah dipilih sebelum menampilkannya.
        if (jenisKelaminInput) {
            document.getElementById('output-gender').textContent = jenisKelaminInput.value;
        } else {
            document.getElementById('output-gender').textContent = 'Belum dipilih';
        }
        
        document.getElementById('output-message').textContent = pesan;

        // 6. Kosongkan kembali formulir setelah data dikirim.
        messageForm.reset();
    });

});
