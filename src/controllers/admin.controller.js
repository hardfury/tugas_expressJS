exports.getAdmin = (req, res, next) => {
    res.send({
        pesan: 'ini respon api admin',
        namaAdmin: 'Dicky',
        alamat: 'sulawesi-selatan'
    });
};