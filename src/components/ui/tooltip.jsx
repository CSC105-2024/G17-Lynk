"use client" // Marks this as a Client Component in Next.js

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip" // Radix UI primitive for accessible tooltips
import { cn } from "@/lib/utils" // Utility for className concatenation

/**
 * Tooltip provider component that wraps the tooltip ecosystem
 * @param {number} [delayDuration=0] - Delay before showing tooltip (ms)
 * @param {Object} props - Additional props to spread to the provider
 */
function TooltipProvider({
  delayDuration = 0, // Default to showing immediately
  ...props
}) {
  return (
    <TooltipPrimitive.Provider 
      data-slot="tooltip-provider" // Data attribute for styling/targeting
      delayDuration={delayDuration} 
      {...props} 
    />
  );
}

/**
 * Root Tooltip component that manages the tooltip state
 * @param {Object} props - Props to spread to the TooltipPrimitive.Root
 */
function Tooltip({ ...props }) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

/**
 * The element that triggers the tooltip when hovered/focused
 * @param {Object} props - Props to spread to the trigger component
 */
function TooltipTrigger({ ...props }) {
  return (
    <TooltipPrimitive.Trigger 
      data-slot="tooltip-trigger" 
      {...props} 
    />
  );
}

/**
 * The actual tooltip content that appears
 * @param {string} [className] - Additional class names
 * @param {number} [sideOffset=0] - Offset from the trigger element
 * @param {ReactNode} children - Tooltip content
 * @param {Object} props - Additional props to spread to the content
 */
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return (
    <TooltipPrimitive.Portal>
      {/* Portal ensures tooltip appears in correct DOM location */}
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // Base styles
          "z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
          // Colors
          "bg-primary text-primary-foreground",
          // Animations
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          // Entrance animations based on side
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          // Transform origin
          "origin-(--radix-tooltip-content-transform-origin)",
          className
        )}
        {...props}
      >
        {children}
        {/* Arrow pointing to the trigger element */}
        <TooltipPrimitive.Arrow
          className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" 
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }