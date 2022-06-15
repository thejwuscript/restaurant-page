function homeContent() {
  const headline = document.createElement('h1')
  headline.textContent = "Asian Fusion"
  const foundedInfo = document.createElement('p')
  foundedInfo.textContent = "Founded in 1967"

  return [headline, foundedInfo]
}

export default homeContent;