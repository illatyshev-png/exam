"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "welcomePopupClosed";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem(STORAGE_KEY);
    if (!wasClosed) {
      setOpen(true);
    }
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  const handleJoinGroup = () => {
    handleClose();
    const pricingEl = document.getElementById("pricing");
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
    >
      {/* Overlay — клик закрывает */}
      <div
        className="absolute inset-0 cursor-pointer bg-black/80"
        onClick={handleClose}
        aria-hidden
      />
      {/* Контент — клик не закрывает */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg",
          "animate-in fade-in-0 zoom-in-95 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Закрыть"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-2 pr-8">
          <h2 id="welcome-popup-title" className="text-lg font-semibold text-accent">
            Актуально
          </h2>
          <p className="font-medium text-foreground">
            19-я группа стартует в марте 2026
          </p>
          <p className="text-sm text-muted-foreground">
            Сейчас я заканчиваю работу с двумя группами, набранными в январе.
            Присоединяйтесь к 19-й группе — количество мест ограничено!
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            onClick={handleClose}
            className="w-full sm:w-auto"
          >
            Узнать подробности
          </Button>
          <Button
            variant="default"
            onClick={handleJoinGroup}
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Присоединиться к группе
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
