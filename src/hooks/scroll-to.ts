const scrollTo = (id: string) => {
  const element = document.getElementById(id)

  window.scrollTo({
    top: element ? element.offsetTop - 96 : 0,
    behavior: 'smooth'
  })
}

export default scrollTo
