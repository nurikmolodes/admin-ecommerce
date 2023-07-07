"use client"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const onClose = useStoreModal((state) => state.onClose)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!open) {
      onOpen()
    }
  }, [isOpen, onOpen])
  return (
    <div className="p-4">
      h1
    </div>
  );
};

export default SetupPage;
