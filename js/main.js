function validateEmail(){
    var email = document.getElementById('email').value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        document.getElementById('error-msg').classList.remove('invisible');
        document.getElementById('email').classList.add('bg-[#FF6155]', 'placeholder:text-[#FF6155]', 'bg-opacity-15', 'text-[#FF6155]', 'focus:border-[#FF6155]');
    }
    else {
        document.getElementById('error-msg').classList.add('invisible');
        document.getElementById('email').classList.remove('bg-[#FF6155]', 'placeholder:text-[#FF6155]', 'bg-opacity-15', 'text-[#FF6155]', 'focus:border-[#FF6155]');
    }
}

document.getElementById('email').addEventListener('input', function() {
    validateEmail();
});

document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    if(document.getElementById('error-msg').classList.contains('invisible') && document.getElementById('email').value != '') {
        document.getElementById('main').classList.add('hidden');
        document.getElementById('confirm-email').innerText = document.getElementById('email').value;
        document.getElementById('thank-you').classList.remove('hidden');
        document.getElementById('thank-you').classList.add('flex');
    }
});

document.getElementById('dismiss-btn').addEventListener('click', function() {
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('thank-you').classList.remove('flex');
    document.getElementById('thank-you').classList.add('hidden');
    document.getElementById('email').value = '';
    document.getElementById('error-msg').classList.add('invisible');
});