import React, {useState} from "react";
import {Card, CardHeader, CardBody} from "reactstrap";

const defaultBelanja = [
    {barang: "Indomie Goreng", qty: 2, satuan: "Bungkus"},
    {barang: "Sari Roti", qty: 20, satuan: "Bungkus"},
    {barang: "Apel", qty: 10, satuan: "Buah"},
    {barang: "Sabun Cair", qty: 2, satuan: "Botol"}
];
export default function Home(props){
    const [dataBelanja, setDataBelanja] = useState(defaultBelanja);
    
    return (
        <div style={{padding: "20px"}}>
        <Card>
            <CardHeader>
                List Belanja Keluarga Sekolah Minggu
            </CardHeader>
            <CardBody>
                {dataBelanja.map((obj, index) => (
                    <p>
                    {index + 1}
                    {". "}
                    {obj.barang}
                    {" | "}
                    {obj.qty} {obj.satuan}
                    </p>
                ))}
            </CardBody>

        </Card>
        </div>
    );
}