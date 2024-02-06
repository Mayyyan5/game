

axios({
    url:'http://47.109.84.129:8080/user/information'
}).then(function (response) {
    const userInfoData = response.data;
    const userinformation = JSON.parse(userInfoData);
    const username = userinformation.username
    const mobile = userinformation.phone_number
    const code = userinformation.code
    document.querySelector('.name').innerHTML = username
    document.querySelector('phonenumber').innerHTML = mobile
    document.querySelector('.input_play').innerHTML = code
})