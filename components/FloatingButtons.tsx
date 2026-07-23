import { site } from "@/data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-4 z-40 flex flex-col gap-3 sm:left-6">
      
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-110"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.16L2 22l5.09-1.53a9.8 9.8 0 0 0 4.95 1.34h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.1a8.14 8.14 0 0 1-4.16-1.14l-.3-.18-3.02.91.92-2.94-.2-.31a8.15 8.15 0 0 1-1.26-4.33c0-4.5 3.66-8.17 8.17-8.17 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.17-8.31 8.17zm4.48-6.12c-.25-.12-1.45-.72-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.5.12-.12.27-.32.4-.48.13-.16.18-.28.27-.46.09-.18.05-.34-.03-.47-.08-.13-.52-1.24-.71-1.7-.19-.45-.38-.39-.53-.4-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.63 2.5 3.96 3.4 2.33.9 2.33.6 2.75.56.42-.04 1.36-.55 1.55-1.09.19-.53.19-.98.13-1.08-.06-.1-.22-.16-.47-.28z" />
        </svg>
      </a>
      
        href={site.phoneHref}
        aria-label="Call Cheesy Burger now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-card transition-transform hover:scale-110"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
