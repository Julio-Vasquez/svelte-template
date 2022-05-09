<script lang="ts">
  import { Modal, ModalBody, ModalHeader } from 'sveltestrap'
  export let open: boolean, title: string, changeDialog: () => boolean

  export const victor: string = 'victor'
</script>

<Modal isOpen={open} toggle={changeDialog}>
  <ModalHeader>{title}</ModalHeader>
  <ModalBody><slot /></ModalBody>
</Modal>
