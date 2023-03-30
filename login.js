const btnLoginQuery = document.querySelector('#login')

const inputEmail =  document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputName = document.querySelector('#name')


function oneClick() {
    event.preventDefault()
    btnLoginQuery.innertext = 'Success'
    const email_value = inputEmail.value;
    const password_value = inputPassword.value;
    const nameVal = inputName.value;

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))


    // const valueEmail = localStorage.getItem('email')
    // const valuePw = localStorage.getItem('password')
    // const valueName = localStorage.getItem('name')

    if (inputEmail.value === userInfo.email_value && inputPassword.value === userInfo.password_value && inputName.value === userInfo.nameVal) {
        window.location.href='end3 jsa.html'
        alert('Đăng nhập thành công')


    } else{
        alert('Đăng nhập thất bại!')
        //mở file html buổi 10.html
        alert('Sai mật khẩu')
        window.location.href ='login.html'

    }
}