import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNav from '../components/BottomNav';
import { ClipboardList, Sparkles, Edit, DollarSign, Star, Syringe, TrendingUp, Save, ChevronRight } from 'lucide-react';

export default function Profile() {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const langs: ('en' | 'pt' | 'es')[] = ['en', 'pt', 'es'];
    const nextLang = langs[(langs.indexOf(language) + 1) % langs.length];
    setLanguage(nextLang);
  };

  return (
    <div className="bg-[#f8f8f5] text-[#181611] font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#f8f8f5]/90 backdrop-blur-md border-b border-stone-200">
        <h1 className="text-xl font-bold tracking-tight text-stone-900">{t('adminDashboard')}</h1>
        <button onClick={toggleLanguage} className="flex items-center gap-1 rounded-full bg-white border border-stone-200 px-3 py-1.5 text-xs font-bold text-[#f2b90d] shadow-sm hover:bg-stone-50 transition-colors">
          <span>{language.toUpperCase()}</span>
        </button>
      </header>

      <main className="flex-1 px-6 pb-48 pt-6 space-y-8 overflow-y-auto no-scrollbar">
        <section className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 rounded-xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2b90d]/10 text-[#f2b90d]">
                <ClipboardList size={20} />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-stone-900">12</p>
            <p className="text-sm font-medium text-stone-500">{t('totalPlans')}</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2b90d]/10 text-[#f2b90d]">
                <Sparkles size={20} />
              </div>
            </div>
            <p className="text-3xl font-extrabold text-stone-900">48</p>
            <p className="text-sm font-medium text-stone-500">{t('activeProcedures')}</p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-stone-900">{t('management')}</h2>
            <button className="text-xs font-semibold text-[#f2b90d] hover:text-[#f2b90d]/80 transition-colors">{t('viewLogs')}</button>
          </div>
          
          <div className="flex flex-col gap-3">
            <button className="group flex items-center justify-between rounded-full bg-white p-2 pl-3 pr-5 shadow-sm border border-stone-100 hover:border-[#f2b90d]/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-600 group-hover:bg-gradient-to-br group-hover:from-[#f2b90d] group-hover:to-[#d49e08] group-hover:text-white transition-all duration-300">
                  <Edit size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-stone-900">{t('editPlans')}</p>
                  <p className="text-xs font-medium text-stone-500">{t('configureTiers')}</p>
                </div>
              </div>
              <ChevronRight className="text-stone-300 group-hover:text-[#f2b90d] transition-colors" size={24} />
            </button>
            
            <button className="group flex items-center justify-between rounded-full bg-white p-2 pl-3 pr-5 shadow-sm border border-stone-100 hover:border-[#f2b90d]/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-600 group-hover:bg-gradient-to-br group-hover:from-[#f2b90d] group-hover:to-[#d49e08] group-hover:text-white transition-all duration-300">
                  <DollarSign size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-stone-900">{t('editPricing')}</p>
                  <p className="text-xs font-medium text-stone-500">{t('updateServiceCosts')}</p>
                </div>
              </div>
              <ChevronRight className="text-stone-300 group-hover:text-[#f2b90d] transition-colors" size={24} />
            </button>
            
            <button className="group flex items-center justify-between rounded-full bg-white p-2 pl-3 pr-5 shadow-sm border border-stone-100 hover:border-[#f2b90d]/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-600 group-hover:bg-gradient-to-br group-hover:from-[#f2b90d] group-hover:to-[#d49e08] group-hover:text-white transition-all duration-300">
                  <Star size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-stone-900">{t('editPoints')}</p>
                  <p className="text-xs font-medium text-stone-500">{t('loyaltyRewardsLogic')}</p>
                </div>
              </div>
              <ChevronRight className="text-stone-300 group-hover:text-[#f2b90d] transition-colors" size={24} />
            </button>
            
            <button className="group flex items-center justify-between rounded-full bg-white p-2 pl-3 pr-5 shadow-sm border border-stone-100 hover:border-[#f2b90d]/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-600 group-hover:bg-gradient-to-br group-hover:from-[#f2b90d] group-hover:to-[#d49e08] group-hover:text-white transition-all duration-300">
                  <Syringe size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-stone-900">{t('editProcedures')}</p>
                  <p className="text-xs font-medium text-stone-500">{t('manageClinicalOfferings')}</p>
                </div>
              </div>
              <ChevronRight className="text-stone-300 group-hover:text-[#f2b90d] transition-colors" size={24} />
            </button>
            
            <button className="group flex items-center justify-between rounded-full bg-white p-2 pl-3 pr-5 shadow-sm border border-stone-100 hover:border-[#f2b90d]/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-600 group-hover:bg-gradient-to-br group-hover:from-[#f2b90d] group-hover:to-[#d49e08] group-hover:text-white transition-all duration-300">
                  <TrendingUp size={24} />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-stone-900">{t('bonusStructure')}</p>
                  <p className="text-xs font-medium text-stone-500">{t('staffIncentiveMetrics')}</p>
                </div>
              </div>
              <ChevronRight className="text-stone-300 group-hover:text-[#f2b90d] transition-colors" size={24} />
            </button>
          </div>
        </section>
      </main>

      <div className="absolute bottom-[100px] left-0 right-0 z-10 flex justify-center px-6 pointer-events-none">
        <button className="pointer-events-auto shadow-lg shadow-[#f2b90d]/20 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#f2b90d] to-[#d49e08] px-6 py-4 text-white hover:brightness-110 active:scale-[0.98] transition-all duration-200">
          <Save size={20} />
          <span className="text-base font-bold">{t('saveGlobalChanges')}</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
