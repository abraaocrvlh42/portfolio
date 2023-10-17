// Script for my Portfolio

const elementProjects = document.getElementById('project__content')

const loadProjects = (projects) => {
  projects.forEach(project => {
    const elementProjects = document.createElement('a')
    // Get Attributes
    elementProjects.setAttribute('href', project.link)
    elementProjects.setAttribute('target', '_blank')

    // Get Classes
    elementProjects.classList.add('project')

    // Get Images
    const elementPicture = document.createElement('picture')
    const elementImg = document.createElement('img')

    elementImg.setAttribute('src', project.image)

    elementPicture.appendChild(elementImg)

    // Get HTML tags
    const elementStrong = document.createElement('strong')
    elementStrong.innerText = project.name

    const elementTags = document.createElement('div')
    project.tags.forEach(tag => {
      const elementTag = document.createElement('span')
      elementTag.innerText = tag
    })
  })

  console.log(elementProjects)
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)