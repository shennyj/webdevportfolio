const menuEl = document.querySelector('.nav-icon-menu')
const closeEl = document.querySelector('.nav-icon-close')
const navEl = document.querySelector('.nav')

menuEl.addEventListener('click',()=>{
    navEl.classList.toggle('nav-open')
})
closeEl.addEventListener('click',()=>{
    navEl.classList.toggle('nav-open')
})

const skillBar = document.querySelectorAll('.skillbar')
const innerSkillBar = document.querySelectorAll('.skillbar-bar')

function skillBarAnimation(){
    skillBar.forEach((bar,index)=>{
        let i=0
        move()
        function move(){
       if(i==0){
        const percent = bar.getAttribute("data-percent")
        let width = 1
        let id = setInterval(frame,10)
            function frame(){
                if (width>=percent){
                    clearInterval(id)
                    i=0
    
                }else{
                    width++
                    innerSkillBar[index].style.width=`${width}%`
                }
            }
        }
    }
        
    })
}


const year = document.querySelector('.footerCopyright')
const currentYear = new Date().getFullYear()
year.innerText=`Copyright © ${currentYear} John Shen`


const sections = document.querySelectorAll('section')
const faders = document.querySelectorAll('.fade-in')
const aboutMe = document.querySelector('#about-me')
const skillsSection=document.querySelector('#languages')
const projectsSection=document.querySelector('#projects')
const whoIAmSection = document.querySelector('#who-i-am')
const contactSection = document.querySelector('#contact')
const sliders = document.querySelectorAll('.slide-in')




const appearScrollOptions = {
    threshold: 0
    
  };
  
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear")
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
appearScrollOptions);

  sliders.forEach(slider=>{
    appearOnScroll.observe(slider)
    })

  

const aboutOptions={
    threshold:0,
    
}
const appearOnAbout= new IntersectionObserver
(function(entries,appearOnAbout){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return 
        }else{
            entry.target.classList.add('appear')
            appearOnAbout.unobserve(entry.target)
        }


    })
},aboutOptions)
appearOnAbout.observe(aboutMe)

const whoOptions={
    threshold:.25,
    
}
const appearOnWho= new IntersectionObserver
(function(entries,appearOnWho){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return 
        }else{
            entry.target.classList.add('appear')
            appearOnWho.unobserve(entry.target)
        }


    })
},whoOptions)
appearOnWho.observe(whoIAmSection)

const appearOptions={
    threshold:.75,
    
}
const appearOnLanguages = new IntersectionObserver
(function(entries,appearOnLanguages){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return 
        }else{
            entry.target.classList.add('appear')
            skillBarAnimation()
            appearOnLanguages.unobserve(entry.target)
        }


    })
},appearOptions)
appearOnLanguages.observe(skillsSection)

const projectOptions={
    threshold:.25,
    
}
const appearOnProjects = new IntersectionObserver
(function(entries,appearOnProjects){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return 
        }else{
            entry.target.classList.add('appear')
            appearOnProjects.unobserve(entry.target)
        }


    })
},projectOptions)
appearOnProjects.observe(projectsSection)

const contactOptions={
    threshold:.25,
    
}
const appearOnContact= new IntersectionObserver
(function(entries,appearOnContact){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return 
        }else{
            entry.target.classList.add('appear')
            appearOnContact.unobserve(entry.target)
        }


    })
},contactOptions)
appearOnContact.observe(contactSection)

