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

    const pendidikanSelect = document.getElementById('pendidikan_terakhir');
    const options = ["SD", "SMP", "SMA/SMK", "Diploma", "Sarjana", "Magister", "Doktor"];

    options.forEach(function(option) {
        const optionElement = document.createElement('option');
        optionElement.value = option; 
        optionElement.textContent = option;
        pendidikanSelect.appendChild(optionElement);

    });
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const alamat = document.getElementById('alamat').value.trim();
        const no_hp = document.getElementById('no_hp').value.trim();
        const pendidikan_terakhir = document.getElementById('pendidikan_terakhir').value.trim();

        let hasEmptyField = false;
        let hasEmptyField1 = false;
        let isValidNumber = true;

        if (nama === "") {
            document.getElementById('nama').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('nama').classList.remove('error');
        }

        if (email === "") {
            document.getElementById('email').classList.add('error');
            hasEmptyField1 = true;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('email').classList.add('error');
                hasEmptyField1 = true;
            } else {
                document.getElementById('email').classList.remove('error');
            }
        }

        if (alamat === "") {
            document.getElementById('alamat').classList.add('error');
            hasEmptyField = true;
        } else {
            document.getElementById('alamat').classList.remove('error');
        }

        const numberPattern = /^\d+$/;
        if (!numberPattern.test(no_hp)) {
            document.getElementById('no_hp').classList.add('error');
            isValidNumber = false;
        } else {
            document.getElementById('no_hp').classList.remove('error');
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

        if (hasEmptyField1){
            alert('Contoh Email valid = dhani@dhani.com, dhani@dhani.org, dhani@dhani.me.net');
            return;
        }

        if (!isValidNumber) {
            alert('Nomor Hp harus berupa angka');
            return;
        }

        const hasil = `Nama: ${nama} <br>Email: ${email} <br>Alamat: ${alamat} <br>No. HP: ${no_hp} <br>Pendidikan Terakhir: ${pendidikan_terakhir}`;
        tampilHasil(hasil);
        resetForm();

        function tampilHasil(hasil) {
            const container = document.createElement('div');
            container.id = 'container';
            container.innerHTML = hasil;
            document.body.appendChild(container);
            container.style.border = '2px solid black';
            container.style.maxWidth = '24rem';
            container.style.borderRadius = '0.325rem';
            container.style.fontFamily = 'monospace';

        }
        function resetForm() {
            form.reset();
        }
    });
});
