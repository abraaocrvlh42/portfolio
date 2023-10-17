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
    
  })

  console.log(elementProjects)
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)