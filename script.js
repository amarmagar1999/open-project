
const controller = document.querySelector(".controller");

let flag = 0;

controller.addEventListener('click', e => {

  // prev 
  if(e.target.id === "prev") {
    sliderImage(flag -= 1)
  }
  // next
  if(e.target.id === "next") {
    sliderImage(flag += 1);
  }

});

const sliderImage = (num) => {

  const slider = document.querySelectorAll(".slider");

  for(let img of slider) {
    img.style.display = "none";
  }

  console.log(num);

  num == slider.length ? (flag=0, num=0) : num;
  num < 0 ? (flag=slider.length-1, num=slider.length-1) : num;

  slider[num].style.display = "block";
  
};

sliderImage(flag);