// Import icons from lucide-react library
import { Moon, Sun } from 'lucide-react';

// Import UI components
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Import theme hook from custom provider
import { useTheme } from '@/components/theme-provider';

/**
 * Theme mode toggle component that allows switching between light/dark/system themes
 * @returns {JSX.Element} A dropdown menu for theme selection
 */
export function ModeToggle() {
  // Get theme setter function from theme context
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      {/* Trigger button that shows the dropdown */}
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline' // Outline button style
          size='icon' // Square icon button
          aria-label='Toggle theme' // Accessibility label
        >
          {/* Sun icon - visible in light mode */}
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />

          {/* Moon icon - visible in dark mode */}
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />

          {/* Screen reader only text for accessibility */}
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown menu content */}
      <DropdownMenuContent align='end'>
        {' '}
        {/* Aligns to end of trigger */}
        {/* Light theme option */}
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        {/* Dark theme option */}
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        {/* System preference option */}
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
