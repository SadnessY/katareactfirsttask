export default function validator(text, func) {
    if (text.trim().length > 0) {
        func(text)
    } else {
        alert("Задача не может состоять из пробелов!")
    }
}