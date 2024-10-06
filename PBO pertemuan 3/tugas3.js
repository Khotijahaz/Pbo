class Motor {
    constructor(nama, merk, tahun, tipe) {
        this.nama = nama;
        this.merk = merk;
        this.tahun = tahun;
        this.tipe = tipe;
    }

    infoMotor() {
        return `Motor ${this.nama} adalah merk ${this.merk} yang diproduksi pada tahun ${this.tahun} dengan tipe ${this.tipe}.`;
    }
}

class MotorSport extends Motor {
    constructor(nama, merk, tahun, tipe, kecepatanMaks) {
        super(nama, merk, tahun, tipe); 
        this.kecepatanMaks = kecepatanMaks; 
    }

    // Method khusus untuk motor sport
    infoMotorSport() {
        return `${this.infoMotor()} Motor ini memiliki kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

const motorMatic = new Motor("Vario", "Honda", 2021, "matic");
const motorBebek = new Motor("Jupiter", "Yamaha", 2019, "bebek");
const motorSport1 = new MotorSport("CBR1000RR", "Honda", 2022, "sport", 299);

console.log(motorMatic.infoMotor());
console.log(motorBebek.infoMotor());
console.log(motorSport1.infoMotorSport());
