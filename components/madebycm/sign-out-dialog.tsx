// @author madebycm (2025)
// Sign-out confirmation dialog with coherent UI design and clear actions
"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { LogOut, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/motion-primitives/dialog"
import { Button } from "@/components/ui/button"

interface SignOutDialogProps {
  children: React.ReactNode
  className?: string
}

export function SignOutDialog({ children, className }: SignOutDialogProps) {
  const [open, setOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Sign out error:", error)
      setIsSigningOut(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-md bg-background p-6">
        <DialogClose />
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Confirm Sign Out
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Are you sure you want to sign out? You&apos;ll need to sign in again to access your account.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-lg bg-muted/50 p-4 mb-6">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            You will be redirected to the home page after signing out.
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isSigningOut}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="w-full sm:w-auto"
          >
            {isSigningOut ? (
              <>
                <span className="animate-pulse">Signing out...</span>
              </>
            ) : (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}