// 1. Ambil elemen tombol dari HTML berdasarkan ID-nya
const btnAtas = document.getElementById("tombolAtas");

// 2. Beritahu browser untuk menjalankan fungsi setiap kali layar di-scroll
window.onscroll = function() {
    pantauScrollLayar();
};

function pantauScrollLayar() {
    // Jika layar diturunkan lebih dari 300 piksel dari atas
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnAtas.style.display = "flex"; // Munculkan tombolnya (menggunakan flex agar ikon panah pas di tengah)
    } else {
        btnAtas.style.display = "none";  // Sembunyikan kembali tombolnya
    }
}

// 3. Jalankan fungsi jika tombol "Kembali ke Atas" diklik
btnAtas.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Efek guliran ke atas dibuat halus
    });
});
