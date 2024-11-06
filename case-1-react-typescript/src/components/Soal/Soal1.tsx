import Header from "../header/Header";
import Table from 'react-bootstrap/Table';
type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];
function GetFruitName(){
    let fruitName:string[] = [];
    for (let index = 0; index < fruits.length; index++) {
        fruitName.push(fruits[index]['fruitName']);
    }
    return fruitName.toString();
}

function GetWadah(){
    let wadahName:string[] = [];
    for (let index = 0; index < fruits.length; index++) {
        wadahName.push(fruits[index]['fruitType']);
    }
    
    let wadahName2      = wadahName.filter((n, i) => wadahName.indexOf(n) === i);
    return wadahName2;
}
function ListWadah(){
    let wadahName2 = GetWadah();
    return wadahName2.toString();
}
function JumlahWadah(){
    let wadahName:string[] = [];
    for (let index = 0; index < fruits.length; index++) {
        wadahName.push(fruits[index]['fruitType']);
    }
    
    let wadahName2      = wadahName.filter((n, i) => wadahName.indexOf(n) === i);
    return wadahName2.length;
}


let getFruitName    = GetFruitName();
let wadahName       = ListWadah();
let jumlahWadah     = JumlahWadah();

type p = {
    strWdh: string,
    strIsi: string
}
function buatPerjenisWadah(){
    let wdhName = GetWadah();
    let stringwadah = '';
    let stringIsi = '';
    let r:p[] = [];
    for (let index = 0; index < wdhName.length; index++) {    
        stringwadah = wdhName[index];
        for (let j = 0; j < fruits.length; j++) {
            if(fruits[j]['fruitType'] == stringwadah) {
                stringIsi += "," + fruits[j]['fruitName']; 
            }
        }
        stringIsi = stringIsi.substr(1)
        r.push({strWdh:stringwadah, strIsi:stringIsi});
        stringIsi = ""
    }
    return r;
}

let listBuahPerWadah = buatPerjenisWadah(); 

type pStok = {
    strWdh: string,
    numStok: number
}

function buatPerjenisStok(){
    let wdhName = GetWadah();
    let stringwadah = '';
    let numStok     = 0;
    let r:pStok[] = [];
    for (let index = 0; index < wdhName.length; index++) {    
        stringwadah = wdhName[index];
        for (let j = 0; j < fruits.length; j++) {
            if(fruits[j]['fruitType'] == stringwadah) {
                numStok += fruits[j]['stock']; 
            }
        }
        r.push({strWdh:stringwadah, numStok:numStok});
        numStok = 0;
    }
    return r;
}

let totalStokPerwadah = buatPerjenisStok();

function Soal1 () {
    return (
        <>
        <Header/>
        <div className="container">
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>Soal</th>
                        <th>Jawaban</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                1 :  Buah apa saja yang dimiliki Andi?
                            </p>
                        </td>
                        <td>{getFruitName}</td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
                                (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja 
                                di masing-masing wadah?
                            </p>
                        </td>
                        <td>
                            <p>Jumlah Wadah :{jumlahWadah}</p>
                            <p>Nama-nama Wadah :{wadahName}</p>
                            {listBuahPerWadah.map((keys) => {
                                return(
                                    <p key={keys.strWdh}>Wadah {keys.strWdh} : Berisikan Buah : {keys.strIsi}</p>
                                )
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                3. Berapa total stock buah yang ada di masing-masing wadah?
                            </p>
                        </td>
                        <td>
                            {totalStokPerwadah.map((keys) => {
                                return(
                                    <p key={keys.strWdh}>Wadah {keys.strWdh} : Memiliki Jumlah Stok Buah : {keys.numStok}</p>
                                )
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                4. Apakah ada komentar terkait kasus di atas?
                            </p>
                        </td>
                        <td>
                            <p>
                                Tidak ada komentar 
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </>
    );
}
export default Soal1;
