document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const button = document.createElement('button');
    button.textContent = 'Submit';

    button.style.backgroundColor = 'rgba(17, 24, 39, 1)';
    button.style.color = 'white';
    button.style.padding = '6px 17px';
    button.style.margin = '20px';
    button.style.border = 'none';
    button.style.borderRadius = '0.325rem';

    document.body.appendChild(button);
    

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const alamat = document.getElementById('alamat').value.trim();
        const no_hp = document.getElementById('no_hp').value.trim();
        const pendidikan_terakhir = document.getElementById('pendidikan_terakhir').value.trim();

        let hasEmptyField = false;

        if (nama === "") {
            document.getElementById('nama').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('nama').classList.remove('error');
        }

        if (email === "") {
            document.getElementById('email').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('email').classList.remove('error');
        }

        if (alamat === "") {
            document.getElementById('alamat').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('alamat').classList.remove('error');
        }

        if (no_hp === "") {
            document.getElementById('no_hp').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('no_hp').classList.remove('error');
        }

        if (pendidikan_terakhir === "") {
            document.getElementById('pendidikan_terakhir').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('pendidikan_terakhir').classList.remove('error');
        }

        if (hasEmptyField) {
            alert('Kolom tidak boleh kosong, wajib diisi');
            return;
        }
        
        form.submit();
    });
});

