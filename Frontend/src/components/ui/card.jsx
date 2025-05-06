// Import React
import * as React from "react"

// Import utility function for merging class names
import { cn } from "@/lib/utils"

// Main Card container component
function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card" // Used for targeting or styling
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className // Merge in any custom class names passed in
      )}
      {...props} // Spread the rest of the props (like style, id, etc.)
    />
  );
}

// Card Header component (for title and actions)
function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

// Card Title component (usually inside the header)
function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold", // Basic text style for title
        className
      )}
      {...props}
    />
  );
}

// Card Description component (subtitle text or small description)
function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm", // Muted small text
        className
      )}
      {...props}
    />
  );
}

// Card Action component (usually for buttons or actions in header)
function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end", // Aligns to top-right of the header
        className
      )}
      {...props}
    />
  );
}

// Card Content component (the main body content area)
function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6", // Padding for inner content
        className
      )}
      {...props}
    />
  );
}

// Card Footer component (usually for actions at the bottom like buttons)
function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 [.border-t]:pt-6", // Flex container with padding and top spacing if border exists
        className
      )}
      {...props}
    />
  );
}

// Export all the card-related components
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
