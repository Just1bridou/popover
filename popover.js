document.addEventListener('DOMContentLoaded', () => {

    let popovers = document.querySelectorAll('.popover')

    for(let pop of popovers) {
        popover(pop)
    }

})

function popover(section) {
    section.classList.add('popover-hide')
    section.classList.add('popover-hide-animation')

    var title = section.getAttribute('title')

    var popButton = document.querySelectorAll('[popover="'+section.id+'"]');
    popButton[0].addEventListener("click", () => {
        section.classList.remove('popover-hide')
        setTimeout(() => {
            section.classList.remove('popover-hide-animation')
        }, 1)
    })

    var closeButton = document.createElement('div')
    closeButton.innerHTML= '<i class="far fa-times-circle"></i>'
    closeButton.classList.add('popover-close-button')
    section.insertBefore(closeButton, section.children[0])

    var popTitle = document.createElement('h3')
    popTitle.innerHTML= title
    popTitle.classList.add('popover-title')
    section.insertBefore(popTitle, section.children[0])

    closeButton.addEventListener('click', () => {
        section.classList.add('popover-hide-animation')
        setTimeout(() => {
            section.classList.add('popover-hide')
        }, 700)
    })
}
  
function _(tag, parent, text=null,  id=null, classs=null) {
    let element = document.createElement(tag)
    if (text)
        element.appendChild(document.createTextNode(text))
    parent.appendChild(element)
    if (id)
        element.id = id
    if (classs)
        element.classList.add(classs)
    return element
}
