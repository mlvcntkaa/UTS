
    // Membuat array yang berisi elemen dengan class "less" (tombol "More Info")
    const lessButtons = document.querySelectorAll(".less");

    // Menambahkan event listener untuk setiap tombol "More Info"
    lessButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Temukan elemen saudara (sibling) yang merupakan elemen <p> dengan detail informasi
            const infoElement = this.nextElementSibling;

            // Toggle class "show" pada elemen detail informasi
            infoElement.classList.toggle("show");

            // Mengubah teks tombol sesuai dengan status informasi ditampilkan/sembunyikan
            if (infoElement.classList.contains("show")) {
                this.textContent = "Less Info";
            } else {
                this.textContent = "More Info";
            }
        });
    });

