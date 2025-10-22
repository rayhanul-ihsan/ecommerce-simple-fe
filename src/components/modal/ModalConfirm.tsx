import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
    modalProps: any
    onClose: any
    handleApplyConfirm: any
    title: string
    body: any
}

export default function ModalConfirm({title, body, modalProps, onClose, handleApplyConfirm }: Props) {
  return (
    <Modal
      show={modalProps.show}
      onHide={onClose}
      size="sm"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Hapus {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Apakah Anda yakin ingin menghapus {title}{" "}
          <strong>{body}</strong>?
        </p>
        <p className="text-muted small">Tindakan ini tidak dapat dibatalkan.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handleApplyConfirm("cancel")}
        >
          Batal
        </Button>
        <Button variant="danger" onClick={() => handleApplyConfirm("confirm")}>
          Hapus
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
