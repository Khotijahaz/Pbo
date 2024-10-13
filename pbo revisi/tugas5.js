class Motor {
    constructor(nama, merk, tahun, jenis) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.jenis = jenis;
    }

    infoMotor() {
        return `Motor ${this.nama} adalah merk ${this.merk}, diproduksi pada tahun ${this.tahun}, dengan jenis ${this.jenis}.`;
    }
}

class MotorSport extends Motor {
    constructor(nama, merk, tahun, jenis, kecepatanMaks) {
        super(nama, merk, tahun, jenis);
        this.kecepatanMaks = kecepatanMaks;
    }

    infoMotor() {
        return `${super.infoMotor()} Motor ini memiliki kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

class MotorMatic extends Motor {
    constructor(nama, merk, tahun, jenis, kapasitasMesin) {
        super(nama, merk, tahun, jenis);
        this.kapasitasMesin = kapasitasMesin;
    }

    infoMotor() {
        return `${super.infoMotor()} Motor ini memiliki kapasitas mesin ${this.kapasitasMesin} cc.`;
    }
}

class MotorBebek extends Motor {
    constructor(nama, merk, tahun, jenis, konsumsiBahanBakar) {
        super(nama, merk, tahun, jenis);
        this.konsumsiBahanBakar = konsumsiBahanBakar;
    }

    infoMotor() {
        return `${super.infoMotor()} Motor ini memiliki konsumsi bahan bakar ${this.konsumsiBahanBakar} km/liter.`;
    }
}

class MotorTrail extends Motor {
    constructor(nama, merk, tahun, jenis, suspensi) {
        super(nama, merk, tahun, jenis);
        this.suspensi = suspensi;
    }

    infoMotor() {
        return `${super.infoMotor()} Motor ini memiliki suspensi ${this.suspensi}.`;
    }
}

// Polimorfisme
const motorMatic1 = new MotorMatic("Vario", "Honda", 2022, "matic", 150);
const motorSport1 = new MotorSport("Ninja", "Kawasaki", 2021, "sport", 200);
const motorBebek1 = new MotorBebek("Supra", "Honda", 2020, "bebek", 55);
const motorTrail1 = new MotorTrail("KLX", "Kawasaki", 2023, "trail", "depan dan belakang");

const motorList = [motorMatic1, motorSport1, motorBebek1, motorTrail1];

// Menampilkan informasi dengan polimorfisme
motorList.forEach(motor => {
    console.log(motor.infoMotor());
});
