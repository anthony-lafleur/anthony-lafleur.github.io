
  let scrollpos = window.scrollY
  const header = document.querySelector("nav")
  const header_height = 1

  
  console.log(header_height);
  
  const add_class_on_scroll = () => document.getElementById("nav").classList.add('nav_scrolled')
  const remove_class_on_scroll = () => document.getElementById("nav").classList.remove('nav_scrolled')

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })