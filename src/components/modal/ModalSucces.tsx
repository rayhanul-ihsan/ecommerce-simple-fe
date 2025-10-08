import React from "react";
import { Button, Modal } from "react-bootstrap";
import { DFlexJustifyCenter } from "../../styled/flex.styled";
import { P14Medium, P18High } from "../../styled/text.styled";

interface Proops {
  show: boolean;
  onHide: () => void;
}

export default function ModalSucces({ show, onHide }: Proops) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <DFlexJustifyCenter className="flex-column gap-3">
          <P18High>Berhasil Ditambah!</P18High>
          <P14Medium className="text-center m-0">
            Produk baru berhasil disimpan dan sekarang muncul di daftar produk.
          </P14Medium>
          <Button variant="outline-secondary" onClick={onHide}>
            tutup
          </Button>
        </DFlexJustifyCenter>
      </Modal.Body>
    </Modal>
  );
}
