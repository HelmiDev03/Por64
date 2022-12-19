const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('nav')
  const navBtnDOM = getElement('.navbtn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-nav')
  })
  const about=  getElement('.active');
const resume=  getElement('.active1');
const project=  getElement('.active2');
const contact=  getElement('.active3');
  about.classList.toggle('click')
  resume.classList.toggle('notclick')
  project.classList.toggle('notclick')
  contact.classList.toggle('notclick')


 /*make web developer appear and deseaper*/


 var interval=500,i=0;
 setInterval(function(){
   i++;
    if (i % 3 !== 0) {
      document.getElementById('type1').style.visibility = 'visible';
      document.getElementById('type1').style.visibility = 'hidden';
 
    } else {
      document.getElementById('type1').style.visibility = 'hidden';
      document.getElementById('type1').style.visibility = 'visible';
    }
 },interval);


  

 
