"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "welcomePopupClosed";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem(STORAGE_KEY);
    if (!wasClosed) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  const handleJoinGroup = () => {
    handleClose();
    const pricingEl = document.getElementById("pricing");
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-accent font-semibold">
            Актуально
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-2 pt-2">
              <p className="font-medium text-foreground">
                19-я группа стартует в марте 2026
              </p>
              <p className="text-muted-foreground">
                Сейчас я заканчиваю работу с двумя группами, набранными в январе.
                Присоединяйтесь к 19-й группе — количество мест ограничено!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-2 pt-4">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
