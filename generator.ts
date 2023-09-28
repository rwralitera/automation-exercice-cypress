const { faker } = require('@faker-js/faker')
const fs = require('fs')

let data = []
let futureDate = faker.date.future(5)
let birthday
let title
//random title
const radioButtons = ['#id_gender1', '#id_gender2']

//random country
const countries = [
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore',
]
function randomCountry(country) {
  const randomIndex = Math.floor(Math.random() * country.length)
  return country[randomIndex]
}

for (let i = 0; i < 100; i++) {
  const country = randomCountry(countries)
  const randomIndex = Math.floor(Math.random() * radioButtons.length)
  let randomRadioButton = radioButtons[randomIndex]
  if (randomRadioButton == '#id_gender1') {
    title = 'Mr.'
  } else {
    title = 'Mrs.'
  }
  birthday = faker.date.birthdate({ min: 1900, max: 2000, mode: 'year' })

  let gender = [randomRadioButton]
  gender.push(title)
  data.push({
    gender,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    lastName: faker.name.lastName(),
    birthDate: birthday.getDate().toString(),
    birthMonth: (birthday.getMonth() + 1).toString(),
    birthYear: birthday.getFullYear().toString(),
    companyName: faker.company.companyName(),
    address1: faker.address.city(),
    address2: faker.address.city(),
    country,
    state: faker.address.state(),
    city: faker.address.cityName(),
    zipCode: faker.address.zipCode(),
    phoneNumber: faker.phone.number(),
    cardNumber: faker.finance.creditCardNumber(),
    cvc: faker.finance.creditCardCVV(),
    cardMonth: faker.datatype.number({ min: 1, max: 12 }).toString(),
    cardYear: futureDate.getFullYear().toString(),
  })
}

fs.writeFile(
  'cypress/fixtures/data.json',
  JSON.stringify(data),
  function (err) {
    if (err) throw err
    console.log('Fichier créé !')
  },
)
