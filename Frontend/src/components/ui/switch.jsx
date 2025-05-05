import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch'; // Radix UI primitive for accessible switch component
import { cn } from '@/lib/utils'; // Utility function for conditional className merging

/**
 * A customizable Switch component built on Radix UI's primitive.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names to apply to the switch
 * @param {Object} props... - All other props are spread to the root SwitchPrimitive component
 * @returns {JSX.Element} A styled switch component
 */
function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      // Data attribute for easier targeting in CSS/JS
      data-slot='switch'
      // Base styles and conditional styles for different states
      className={cn(
        // Base styles
        'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none',
        // Checked state (on)
        'data-[state=checked]:bg-primary',
        // Unchecked state (off)
        'data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
        // Focus styles
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Allow for custom class overrides
        className
      )}
      {...props} // Spread all other props to the root element
    >
      <SwitchPrimitive.Thumb
        // Data attribute for the thumb part
        data-slot='switch-thumb'
        // Thumb styles
        className={cn(
          // Base styles
          'pointer-events-none block size-4 rounded-full ring-0 transition-transform',
          // Background colors
          'bg-background', // Default background
          'dark:data-[state=unchecked]:bg-foreground', // Dark mode unchecked
          'dark:data-[state=checked]:bg-primary-foreground', // Dark mode checked
          // Position transitions
          'data-[state=checked]:translate-x-[calc(100%-2px)]', // Move right when checked
          'data-[state=unchecked]:translate-x-0' // Move left when unchecked
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };