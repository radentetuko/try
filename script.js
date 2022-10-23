function signUp(e){
    let nama = document.getElementById('nama').value,
    email = document.getElementById('email').value,
    nomorTelepon = document.getElementById('nomorTelepon').value,
    pass = document.getElementById('pass').value,
    confirmPass = document.getElementById('confirmPass').value,
    kelamin = document.getElementById('kelamin').value,
    tinggi = document.getElementById('tinggi').value,
    berat = document.getElementById('berat').value,
    umur = document.getElementById('umur').value,
    aktivitas = document.getElementById('aktivitas').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.nama.toLowerCase() == nama.toLowerCase() &&
            data.nomorTelepon.toLowerCase() == nomorTelepon.toLowerCase() &&
            data.confirmPass.toLowerCase() == confirmPass.toLowerCase() &&
            data.kelamin.toLowerCase() == kelamin.toLowerCase() &&
            data.tinggi.toLowerCase() == tinggi.toLowerCase() &&
            data.berat.toLowerCase() == berat.toLowerCase() &&
            data.umur.toLowerCase() == umur.toLowerCase() &&
            data.aktivitas.toLowerCase() == aktivitas.toLowerCase()
            );
    if(!exist){
        formData.push({ nama, email, nomorTelepon, pass, confirmPass, kelamin, tinggi, berat, umur, aktivitas });
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('nama').focus();
        alert("Your account has been successfully created\nPlease login again to continue into the application");
        location.href = "login.html";
    }
    else{
        alert("There was an input error, Please register again");
    }
    e.preventDefault();
}

function login(e){
    let email = document.getElementById('email').value,
    pass = document.getElementById('pass').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pass.toLowerCase() == pass);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "homepage.html";
    }
    e.preventDefault();
}
