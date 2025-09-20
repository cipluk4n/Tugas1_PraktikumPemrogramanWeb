document.addEventListener('DOMContentLoaded', () => {
    const hapusButton = document.querySelector('#deleteModal .btn-danger');
    if (hapusButton){
        hapusButton.addEventListener('click', () => {
            console.log("Data mahasiswa berhasil dihapus!");
            const myModalEL = document.getElementById('deleteModal');
            const modal = bootstrap.Modal.getInstance(myModalEL);
            modal.hide();
        });
    }
});
