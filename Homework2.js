const form = document.querySelector('formUserForm')

const renderColor = function(favoriteColor) {
const colorDiv = document.createElement('div')
colorDiv.style.backgroundColor = favoriteColor
colorDiv.style.width = '6rem'
colorDiv.style.height = '3rem'
return colorDiv
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const users = document.querySelector('Musers')
  users.innerHTML += `<p>${userName}, ${age}</p>`
  form.userName.value = ''
  form.reset()
  form.userName.focus()
  

colorItem.appendChild(renderColor(favoriteColor))


}

form.addEventListener('submit', handleSubmit)

