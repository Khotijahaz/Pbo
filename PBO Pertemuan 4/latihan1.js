//Class1 kamera
class kamera {
    constructor (jenis) {
        this.jenis = jenis
    }
    jeniskamera(){
        console.log(`kamera ${this.jenis} merupakan kamera`)
    }
}   

class sony extends kamera {
    jeniskamera() {
        console.log(`kamera ${this.jenis} merupakan kamera mirrorless` )
    }
}

class nikon extends kamera {
    jeniskamera() {
        console.log(`kamera ${this.jenis} merupakan kamera DSLR`)
    }
}

let Kamera = [new sony('sony'), new nikon('nikon')]
Kamera.forEach(kamera => kamera.jeniskamera())


//Class2 Mobil
class mobil {
    constructor (merk) {
        this.merk = merk
    }
    merkmobil(){
        console.log(`mobil ini merknya ${this.merk}`)
    }
}   

class tesla extends mobil {
    merkmobil() {
        console.log(`mobil dengan merk ${this.merk} breasal dari Amerika` )
    }
}

class hotwheels extends mobil {
    merkmobil() {
        console.log(`mobil dengan merk ${this.merk} berasal dari alfamart dan indomart`)
    }
}

let Mobil = [new tesla('tesla'), new hotwheels('hotwheels')]
Mobil.forEach(mobil => mobil.merkmobil())


//Class3 Sepatu
class sepatu {
    constructor (merk) {
        this.merk = merk
    }
    bahan(){
        console.log(`sepatu dengan merk ${this.merk}`)
    }
}   

class converse extends sepatu {
    bahan() {
        console.log(`sepatu ${this.merk} terbuat dari bahan kanvas`)
    }
}

class docmart extends sepatu {
    bahan() {
        console.log(`sepatu ${this.merk} terbuat dari bahan leather`)
    }
}

let Sepatu = [new converse('converse'), new docmart('docmart')]
Sepatu.forEach(sepatu => sepatu.bahan())


//class4 Kipas
class kipas {
    constructor (merk) {
        this.merk = merk
    }
    balingbaling(){
        console.log(`kipas ini bermerk ${this.merk}`)
    }
}   

class miyako extends kipas {
    balingbaling() {
        console.log(`kipas dengan merk ${this.merk} memiliki 3 baling-baling`)
    }
}

class cosmos extends kipas {
    balingbaling() {
        console.log(`kipas dengan merk ${this.merk} memiliki 4 baling-baling`)
    }
}

let Kipas = [new miyako('miyako'), new cosmos('cosmos')]
Kipas.forEach(kipas => kipas.balingbaling())