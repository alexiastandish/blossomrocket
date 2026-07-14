"use client";

import { useContactModal } from "@/contexts/contact-modal-context";
import ContactModal from "./ContactForm";

export function ContactModalRoot() {
  const { isOpen, close } = useContactModal();
  return <ContactModal isOpen={isOpen} onClose={close} />;
}
