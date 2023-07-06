let cnic = document.getElementById('lfli1');
let pass = document.getElementById('lfli2');

function login() {
    if (cnic.value == '3310493114149') {
        if (pass.value == 'gujjar') {

            // document.getElementById('login_suc_fail_btn').innerText = 'Login Success';
            window.location.href = 'record.html';
            alert('Login Successfully');
            // var log_btn = document.getElementById('log_btn');
            // log_btn.type = 'submit';
        }
        else {
            // document.getElementById('login_suc_fail_btn').innerText = 'Login Failed';
            alert('Login Failed !   Please try again');

        }
    }
    else if (cnic.value == '' || pass.value == '') {

        // document.getElementById('login_suc_fail_btn').innerText = 'Enter CNIC & Password';
        alert('Please Enter CNIC & password');

    }
    else {

        // document.getElementById('login_suc_fail_btn').innerText = 'Login Failed';
        alert('Login Failed !   Please try again');

    }
}
function form(){

    window.location.href = 'gcuf2.html';
}
