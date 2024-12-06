/* eslint-disable prettier/prettier */
const validator = (text, func, timer=[0, 0]) => {
  if (text.trim().length > 0) {
    func(text, timer[0], timer[1])
  } else {
    alert('Задача не может состоять из пробелов!')
  }
}
export default validator