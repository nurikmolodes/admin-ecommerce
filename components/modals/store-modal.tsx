"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="create"
      description="add a new store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      Future create
    </Modal>
  );
};
