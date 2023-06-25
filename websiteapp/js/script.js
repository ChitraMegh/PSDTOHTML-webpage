

const wrapper = document.querySelector('.cards-wrapper');
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  

  dot.setAttribute('data-num', idx);
  

  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);

    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
     er
      let displayArea = wrapper.parentElement.clientWidth;
     
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';

      dots[activeDotNum].classList.remove('active');

      dots[clickedDotNum].classList.add('active');

      activeDotNum = clickedDotNum;
    }
    
  });
});
