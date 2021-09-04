import React, {useState} from "react";
import {Card, CardHeader, CardBody} from "reactstrap";

const defaultBelanja = [
    {barang: "Indomie Goreng", qty: 2, satuan: "Bungkus", lokasi: "Alfamidi"},
    {barang: "Sari Roti", qty: 20, satuan: "Bungkus", lokasi: "Alfamidi"},
    {barang: "Apel", qty: 10, satuan: "Buah", lokasi: "Alfamidi"},
    {barang: "Sabun Cair", qty: 2, satuan: "Botol", lokasi: "Alfamidi"},
];

// const r = 0;
// const d = defaultBelanja.find[{barang: 'Apel'}];


// function qtyteh(defaultBelanja) {
//     const doubleqty = 0;
//     while(defaultBelanja === "Indomie Goreng"){
//     const valueindomie = defaultBelanja.qty;
//     if (defaultBelanja === "Teh Botol") {
//        doubleqty = valueindomie * 2
//     }
//     // console.log(doubleqty);
//     }
// }

export default function Home(props){
    const [dataBelanja, setDataBelanja] = useState(defaultBelanja, additem);

    return (
        <div style={{padding: "20px"}}>
        <Card>
            <CardHeader>
                List Belanja Keluarga Sekolah Minggu
            </CardHeader>
            <CardBody>
                {                   
                    dataBelanja = [ 
                    {barang: "Teh Botol", qty: defaultBelanja[1].qty * 2, satuan: "Botol", lokasi: "Indomaret"},
                    ],
                    
                dataBelanja.map((obj, index) => (                    
                    <p>        
                    {index + 1}
                    {". "}
                    {obj.barang}
                    {" | "}                    
                    {obj.qty} {obj.satuan}
                    {" | "}
                    {obj.lokasi}
                    </p>                    
                ))
                // (
                //     dataBelanja.map((objek, index) => (
                //     <p>        
                //     {index + 1}
                //     {". "}
                //     {objek.barang}
                //     {" | "}                    
                //     {objek.qty} {objek.satuan}
                //     {" | "}
                //     {objek.lokasi}
                //     </p>
                // )))
            }
            </CardBody>  
        </Card>
        </div>
    );
}