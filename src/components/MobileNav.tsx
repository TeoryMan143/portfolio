import { type ReactNode, useEffect, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

// Simple store for managing menu state across components
class MobileMenuStore {
  private state = { isOpen: false };
  private listeners: (() => void)[] = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getState() {
    return this.state;
  }

  setState(newState: Partial<typeof this.state>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => {
      listener();
    });
  }

  openMenu() {
    this.setState({ isOpen: true });
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }
}

const menuStore = new MobileMenuStore();

function useMobileMenuStore() {
  const [state, setState] = useState(menuStore.getState());

  useEffect(() => {
    const unsubscribe = menuStore.subscribe(() => {
      setState(menuStore.getState());
    });
    return unsubscribe;
  }, []);

  return state;
}

export function MobileNavButton() {
  return (
    <button
      onClick={() => menuStore.openMenu()}
      className='md:hidden text-gray-300 hover:text-blue-300 transition-colors'
      type='button'
      aria-label='Toggle menu'
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <title>Menu</title>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </button>
  );
}

interface MobileNavDrawerProps {
  navLinks: NavLink[];
  children?: ReactNode;
}

export function MobileNavDrawer({ navLinks, children }: MobileNavDrawerProps) {
  const { isOpen } = useMobileMenuStore();

  const closeMenu = () => menuStore.closeMenu();

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className='fixed inset-0 bg-black/50 md:hidden'
          style={{ zIndex: 9998 }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-blue-500/20 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className='flex flex-col h-full'>
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button
              onClick={closeMenu}
              className='text-gray-300 hover:text-blue-300 transition-colors'
              type='button'
              aria-label='Close menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <title>Close</title>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className='flex flex-col gap-2 px-4 grow'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className='text-gray-300 hover:text-blue-300 hover:bg-slate-800 transition-colors font-medium px-3 py-2 rounded'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Picker in Mobile */}
          <div className='p-4 border-t border-blue-500/20'>{children}</div>
        </div>
      </div>
    </>
  );
}
