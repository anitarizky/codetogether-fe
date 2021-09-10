import React, {useState} from "react";
import {Card, CardHeader, CardBody, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from "reactstrap";

const defaultBelanja = [
    {barang: "Indomie Goreng", qty: 2, satuan: "Bungkus", lokasi: "Alfamidi"},
    {barang: "Sari Roti", qty: 20, satuan: "Bungkus", lokasi: "Alfamidi"},
    {barang: "Apel", qty: 10, satuan: "Buah", lokasi: "Alfamidi"},
    {barang: "Sabun Cair", qty: 2, satuan: "Botol", lokasi: "Alfamidi"},
];

const defaultTempTambah = {
    barang: "",
    qty: 1,
    satuan: "",
    tempat: "",
};

export default function Home(props){
    const [dataBelanja, setDataBelanja] = useState(defaultBelanja);
    const [bukaModal, setBukaModal] = useState(false);
    const [tempTambah, setTempTambah] = useState(defaultTempTambah);

    return (
        <div style={{padding: "20px"}}>
        <Card>
            <CardHeader>
                <Row>
                    <Col lg="8" md="8" sm="8">
                        <h5>List Belanja Keluarga Sekolah Minggu</h5>
                    </Col>
                    <Col lg="2" md="2" sm="2">
                        <Button color="success" onClick={() => {
                            setBukaModal(true);
                            setTempTambah(defaultTempTambah);
                        }}>
                            Tambah
                        </Button>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                {                                       
                dataBelanja.map((obj, index) => (          
                    <Row>
                        <Col lg="8" md="8" sm="8">
                            <p>
                                {index + 1}
                                {". "}
                                {obj.barang}
                                {" | "}                    
                                {obj.qty} {obj.satuan}
                                {" | "}
                                {obj.lokasi}
                            </p>
                        </Col>
                        <Col lg="2" md="2" sm="2">
                            <Button color="danger" onClick={() => {
                                let tempBelanja = dataBelanja;
                                tempBelanja.splice(index, 1);
                                setDataBelanja([...tempBelanja]);
                            }}>
                                Hapus
                            </Button>
                        </Col>
                        <Col lg="4" md="4" sm="2">
                            <Button color="warning" onClick={() => {
                                let tempBelanja = dataBelanja;
                                setBukaModal(true);
                                setTempTambah(defaultTempTambah);
                                setDataBelanja([...tempBelanja]);
                            }}>
                                Edit
                            </Button>
                        </Col>
                    </Row>             
                ))
            }
            </CardBody>  
        </Card>
        <Modal isOpen={bukaModal} toggle={() => setBukaModal(false)}>
        <ModalHeader toggle={() => setBukaModal(false)}>
          Tambah Daftar Belanja
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="namabarang">Nama Barang</Label>
            <Input
              type="text"
              name="nambarang"
              value={tempTambah?.barang}
              onChange={(e) => {
                setTempTambah({ ...tempTambah, barang: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="qty">Qty</Label>
            <Input
              type="number"
              name="qty"
              value={tempTambah?.qty}
              onChange={(e) => {
                setTempTambah({ ...tempTambah, qty: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="satuan">Satuan</Label>
            <Input
              type="text"
              name="satuan"
              value={tempTambah?.satuan}
              onChange={(anoeg) => {
                setTempTambah({ ...tempTambah, satuan: anoeg.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Tempat">Tempat</Label>
            <Input
              type="text"
              name="tempat"
              value={tempTambah?.tempat}
              onChange={(e) => {
                setTempTambah({ ...tempTambah, tempat: e.target.value });
              }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => {
              let tempArray = dataBelanja;
              tempArray.push({ ...tempTambah });
              setDataBelanja([...tempArray]);
              setBukaModal(false);
            }}
          >
            Simpan
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
}