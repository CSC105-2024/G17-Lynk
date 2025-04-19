import { cn } from "@/lib/utils"

// Skeleton component renders a placeholder UI element typically used during loading states.
// It displays a pulsing, rounded rectangle with accent background color.
// The `className` prop allows customizing or extending the styles.
// Additional props are spread onto the root div element.
function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton" // Data attribute for slot identification or styling hooks
      // Combine default skeleton styles with any additional classes passed via className
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props} // Spread any other props (e.g., id, style, event handlers)
    />
  );
}

export { Skeleton }
