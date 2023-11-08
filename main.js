document.getElementById('myForm').addEventListener('submit', function (event) {
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (email === '' || subject === '' || message === '') {
    event.preventDefault(); // Menghentikan pengiriman formulir
    alert('Harap isi semua kolom .');
  }
});