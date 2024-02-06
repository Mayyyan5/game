document.getElementById('btn1').addEventListener('click', function (event) {
  

  var phoneStr = document.getElementById('phone').value;
  var phone = Number(phoneStr)

  axios.post('http://47.109.84.129:8080/user/sendCode', { 
    phone_number: phone })
    .then(function (response) {
      var data = response.data
      if(data.message === 'sent code success')
      alert('验证码已发送，请注意查收！');
      // 执行其他操作
    })
    .catch(function (error) {
      alert('发送验证码失败！');
      // 执行其他操作
    });
});

// 登录按钮的点击事件监听器
document.getElementById('btn2').addEventListener('click', function (event) {
  event.preventDefault(); // 阻止表单默认提交行为

  var phone = document.getElementById('phone').value;
  var code = document.getElementById('code').value;
  var username = document.getElementById('name').value;
  var password = document.getElementById('password').value;



  axios.post('http://47.109.84.129:8080/user/login/byPhoneNumber', { 
    phone_number: phone, code: code, username: username, password: password
  }).then(function (response) {
      var data = response.data; 
      if (data.message === 'login by phone number success')
      alert('登录成功！');
      const smsToken = response.data.token;

      // 将token保存在LocalStorage中
      localStorage.setItem('smsToken', smsToken);
      window.location.href='游戏大厅.html'
    })

})
