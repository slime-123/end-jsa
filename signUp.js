const emailQuery = document.getElementById('email')
const passwordQuery = document.getElementById('password')
const repasswordQuery = document.getElementById('repassword')
const nameQuery = document.getElementById('username')

const oneClick = () => {
    // const btnLoginQuery = document.querySelector('#signupBtn')

    const email_value = emailQuery.value;
    const password_value = passwordQuery.value;
    const nameVal = nameQuery.value;
    const repassword_value = repasswordQuery.value;
    // const userInfo = {
    //     email: email_value,
    //     password: password_value,
    //     name: nameVal
    // }


    if (email_value.length >= 10 && email_value.includes('@') && password_value.length >= 6 && password_value === repassword_value && nameVal.length !== '') {
        localStorage.setItem(
            'login', 
        JSON.stringify({
            email: email_value,
            password: password_value,
            name: nameVal
    }))


        window.location.href = 'login.html'
        alert('Đăng ký thành công')


    } else {
        alert('Đăng ký thất bại!')
        //mở file html buổi 10.html
        alert('Sai mật khẩu')
        window.location.href = 'signUp.html'

    }

    console.log('text');



}
