import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, Sparkles, Calendar, Wallet, User } from 'lucide-react';

export default function BottomNav() {
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-[84px] shadow-lg shadow-black/5 max-w-md mx-auto right-0">
      <NavLink to="/home" className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#651c32]' : 'text-gray-400 hover:text-[#651c32]'}`}>
        {({ isActive }) => (
          <>
            <Home size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide">{t('navHome')}</span>
          </>
        )}
      </NavLink>
      
      <NavLink to="/procedures" className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#651c32]' : 'text-gray-400 hover:text-[#651c32]'}`}>
        {({ isActive }) => (
          <>
            <Sparkles size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide">{t('navProcedures')}</span>
          </>
        )}
      </NavLink>
      
      <NavLink to="/book" className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#651c32]' : 'text-gray-400 hover:text-[#651c32]'}`}>
        {({ isActive }) => (
          <>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center -mt-6 border-4 border-[#fffcf7] ${isActive ? 'bg-[#651c32] shadow-lg shadow-[#651c32]/30 text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Calendar size={24} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-medium tracking-wide font-serif">{t('navBook')}</span>
          </>
        )}
      </NavLink>
      
      <NavLink to="/wallet" className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#651c32]' : 'text-gray-400 hover:text-[#651c32]'}`}>
        {({ isActive }) => (
          <>
            <Wallet size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide">{t('navWallet')}</span>
          </>
        )}
      </NavLink>
      
      <NavLink to="/profile" className={({ isActive }: { isActive: boolean }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[#651c32]' : 'text-gray-400 hover:text-[#651c32]'}`}>
        {({ isActive }) => (
          <>
            <User size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide">{t('navProfile')}</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
