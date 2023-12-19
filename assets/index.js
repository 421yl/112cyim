let slideIndex = 0;

        function showSlides(props) {
            let i;
            let slides = document.getElementsByClassName("singleSlide");

            if (props > slides.length) {
                slideIndex = 1;
            }

            if (props < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "flex";
        }

        function plusSlides(a) {
            showSlides((slideIndex += a));
        }

        showSlides(slideIndex); // 在這裡調用 showSlides 開始顯示第一張圖片
        plusSlides(0); // 在這裡調用 plusSlides，將初始顯示的三張圖片更正