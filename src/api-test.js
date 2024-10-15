// одно из требуемых заданий для тестового - реализация fake api запроса

const URL = 'https://petstore3.swagger.io/api/v3'
const URL_DATA = '/pet/findByStatus?status=available'

const sendRequest = async () => {
  try{
    const response = await fetch(URL + URL_DATA, { method: 'GET'})
    const data = await response.json()
    
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
 
}

const showData =  async () => {
  await sendRequest()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

showData()

// реализацию скрипта можно посмотреть в TheHeader (при нажатии на заголовок будет осуществлен запрос)


