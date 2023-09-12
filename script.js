var cards = document.querySelectorAll("#card-bootstrap");

cards.forEach((card) => {
  var elementHover = card.querySelector(".hover-dark");
  var playIcon = card.querySelector("#play-icon");

  card.addEventListener("mouseenter", () => {
    elementHover.classList.add("active");
    playIcon.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    elementHover.classList.remove("active");
    playIcon.classList.remove("active");
  });
});

// document.getElementById("submitBtn").addEventListener("click", function (e) {
//   e.preventDefault(); // Mencegah formulir dikirimkan secara default.

//   // Mengambil nilai dari input nama dan komentar
//   const user = document.getElementById("user").value;
//   const userComment = document.getElementById("user-comment").value;

//   // Membentuk pesan WhatsApp dengan data yang diambil
//   const pesanWA = `Dari : ${user}%0A Komentar : ${userComment}`;

//   // Redirect ke WhatsApp dengan menggunakan window.location.href
//   window.location.href = `https://api.whatsapp.com/send?phone=6285750667547&text=${encodeURIComponent(
//     pesanWA
//   )}`;
// });
