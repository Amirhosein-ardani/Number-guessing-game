const numberRandom = Math.floor(Math.random() * 100) + 1;
let digit = 0;
const maxdigit = 10;
const click= document.querySelector("#click")
const Target = document.querySelector('#Target');
const june = document.querySelector('#june');
click.addEventListener('click',(checkNumber)=>{
    const user = Number(document.querySelector('#guess').value);

  switch (true) {
    case user === numberRandom:
      Target.textContent = "تبریک عدد درست را حدس زدید.";
      
      break;
    case digit >= maxdigit - 1:
      Target.textContent = "شما باختید عدد درست " + randomNumber + " بود.";
      break;
    case user> numberRandom:
      Target.textContent = "عدد کمتر است";
      digit++;
      june.textContent = "جون‌ها: " + (maxdigit - digit);
      break;
    case user< numberRandom:
      Target.textContent = "عدد بیشتر است";
      digit++;
      june.textContent = "فرصت ها " + (maxdigit - digit);
      break;
    default:
      Target.textContent = "لطفاً یک عدد معتبر وارد کنید.";
  }
})