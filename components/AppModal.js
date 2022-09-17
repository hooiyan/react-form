import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

function AppModal({ isSubmitted, title, children, handleClose }) {
  return (
    <Modal
      onClose={handleClose}
      isOpen={isSubmitted}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent textAlign="center">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter mx="auto">
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AppModal
