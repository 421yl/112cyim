let slideIndex = 0; // 將預設值改為0
let interval = 3500; // 自動切換的間隔時間

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("singleSlide");

  // 將所有圖片隱藏
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 更新 slideIndex，循環顯示圖片
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // 顯示當前圖片
  slides[slideIndex - 1].style.display = "flex";

  // 設定下一次切換的時間
  setTimeout(showSlides, interval);
}

// 當頁面載入完成後，啟動輪播
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});

function plusSlides(a) {
  // 停止自動輪播
  clearTimeout(timer);
  showSlides((slideIndex += a));
}

// 使用者點擊左右按鈕時，並傳入參數1或-1，代表下一張或上一張
plusSlides(0);
