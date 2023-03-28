const mongoose = require('mongoose');

const NhanVienSchema = new mongoose.Schema ({
    ten: {
        type: String
    },
    tuoi: {
        type: Number,
        default: 0
    },
    diachi: {
        type: String,
        required: true
    }
});

const NhanVienModel = new mongoose.model('nhanvien', NhanVienSchema);

module.exports = NhanVienModel;




