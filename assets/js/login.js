// 入口函数
$(function () {


    // 点击去注册账号的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show()
    })
    // 点击去登录的链接
    $('#link_login').on('click', function () {
        $('.login-box').show();
        $('.reg-box').hide();
    })


    // 自定义校验规则，从layui中获取form对象
    var form = layui.form;
    // 通过form.verify函数定义校验规则
    form.verify({
        // 自定义了一个pwd的校验规则
        'pwd': [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        // 校验确认密码
        'repwd':function(value){
            // 通过形参拿到的是确认密码框的内容
            // 拿到密码框的内容
            var pwd = $('.reg-box [name = password]').val()
            // 判断是否一致
            if(pwd !== value){
                return '两次密码不一致'
            }
            // 失败，提示消息
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit',function(e){
        // 阻止默认提交行为
        e.preventDefault();
        // 发起ajax请求
        $.post('http://127.0.0.1:3007/api/reguser',{
            username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()
        },function(res){
            if(res.status !== 0){
                return console.log(res.message)
            }
            console.log("注册成功")
        })
    })
})