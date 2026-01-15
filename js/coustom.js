/**Scroll reveal 효과 **/
const sr = ScrollReveal({
  reset: false, //스크롤시 한번만 실행
});

sr.reveal('.landing-text-box', {
  duration: 1000,
  origin: 'right',
  distance: '80px',
});
sr.reveal('.meet-text-box', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
});
sr.reveal('.meet-wrapper img, .feature', {
  duration: 1000,
  origin: 'bottom',
  distance: '40px',
  interval: 200, //0.2초 간격 차례로 효과진행
});
