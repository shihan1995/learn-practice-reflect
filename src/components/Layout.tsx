
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Mic, Users, Settings, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Focus', icon: Home },
    { path: '/hlp', label: 'Lessons', icon: Book },
    { path: '/practice', label: 'Record', icon: Mic },
    { path: '/reflect', label: 'Community', icon: Users },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-full w-56 bg-white shadow-sm">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="p-6">
              <Link 
                to="/" 
                className="inline-flex items-center text-3xl font-bold text-teachfx-blue transition-opacity hover:opacity-80"
              >
                Teach<span className="font-normal">FX</span>
              </Link>
            </div>
            <nav className="px-2">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                        isActive(item.path)
                          ? 'bg-teachfx-lightblue text-teachfx-blue'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 h-5 w-5 ${
                          isActive(item.path) ? 'text-teachfx-blue' : 'text-gray-500'
                        }`}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/settings"
                  className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100"
                >
                  <Settings className="mr-3 h-5 w-5 text-gray-500" />
                  Settings
                </Link>
              </li>
              <li>
                <button className="flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100">
                  <LogOut className="mr-3 h-5 w-5 text-gray-500" />
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-56 flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-7xl p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
