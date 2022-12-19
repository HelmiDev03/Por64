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
  resume.classList.toggle('click')
  contact.classList.toggle('notclick')
  project.classList.toggle('notclick')
  about.classList.toggle('notclick')