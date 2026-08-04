import styles from "./WhatsAppButton.module.css";

const whatsappUrl = "https://wa.me/8613794952627?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function WhatsAppButton() {
  return <a className={styles.button} href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Colotutu on WhatsApp" title="Chat on WhatsApp">
    <span className={styles.tooltip}>Chat on WhatsApp</span>
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M16.04 3.2A12.72 12.72 0 0 0 5.1 22.4L3.2 28.8l6.56-1.84a12.8 12.8 0 1 0 6.28-23.76Zm0 2.16a10.64 10.64 0 0 1 9.2 16.02 10.58 10.58 0 0 1-15.01 3.37l-.38-.22-3.79 1.06 1.08-3.7-.25-.39A10.64 10.64 0 0 1 16.04 5.36Zm-5.1 4.57c-.24 0-.63.1-.96.47-.33.36-1.27 1.24-1.27 3.02s1.3 3.5 1.48 3.74c.18.24 2.55 3.9 6.18 5.47.86.37 1.54.6 2.06.76.87.28 1.66.24 2.28.15.7-.1 2.14-.88 2.45-1.72.3-.85.3-1.57.21-1.72-.09-.15-.33-.24-.69-.42-.36-.18-2.14-1.06-2.47-1.18-.33-.12-.57-.18-.81.18-.24.36-.93 1.18-1.14 1.42-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79a10.85 10.85 0 0 1-2-2.49c-.2-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.96-1.11-2.68-.3-.7-.6-.61-.81-.62h-.7Z" />
    </svg>
  </a>;
}
