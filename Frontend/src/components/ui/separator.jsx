"use client" // Mark this file to be treated as a client component (Next.js)

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator" // Import Radix UI Separator
import { cn } from "@/lib/utils" // Utility to conditionally merge class names

// Separator component
function Separator({
  className,
  orientation = "horizontal", // Default orientation is horizontal
  decorative = true,          // Decorative by default (doesn't announce to screen readers)
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root" // Helpful for styling or testing
      decorative={decorative}    // Hides separator from screen readers if it's just visual
      orientation={orientation}  // Can be "horizontal" or "vertical"
      className={cn(
        // Base styles for the separator
        "bg-border shrink-0",
        // Adjust dimensions based on orientation
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className // Allow custom styles to be added
      )}
      {...props} // Spread any additional props like `role`, `aria-*`, etc.
    />
  );
}

// Export the Separator component
export { Separator }
