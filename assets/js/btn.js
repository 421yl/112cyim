var num_jia_buttons = document.querySelectorAll(".num-jia");
var num_jian_buttons = document.querySelectorAll(".num-jian");
var input_nums = document.querySelectorAll(".input-num");

num_jia_buttons.forEach(function(button) {
    button.onclick = function() {
        input_nums.forEach(function(input_num) {
            input_num.value = parseInt(input_num.value) + 1;
        });
    };
});

num_jian_buttons.forEach(function(button) {
    button.onclick = function() {
        input_nums.forEach(function(input_num) {
            if (input_num.value > 0) {
                input_num.value = parseInt(input_num.value) - 1;
            }
        });
    };
});