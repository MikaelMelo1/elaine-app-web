import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNav from '../components/BottomNav';
import { ArrowLeft, Sparkles, CheckCircle2, CalendarDays, Gift, Diamond, Crown, PlusCircle, Verified, ChevronDown } from 'lucide-react';

export default function Wallet() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FDFBF7] text-[#3D3D3D] font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-20 bg-[#FDFBF7]/90 backdrop-blur-md px-6 pt-12 pb-4 transition-colors duration-300 border-b border-[#D4AF37]/10">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="flex w-10 h-10 items-center justify-center rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 transition-colors text-slate-800">
            <ArrowLeft size={20} />
          </button>
          <Sparkles className="text-[#D4AF37]" size={32} />
          <div className="w-10 h-10"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#50192e] to-[#3a1020] p-6 text-white shadow-[0_4px_20px_-2px_rgba(80,25,46,0.3)] border border-[#cfaa68]/30 mb-4">
          <div className="absolute right-0 top-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-[#cfaa68]/20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-[#cfaa68]/10 blur-xl"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#cfaa68]">{t('currentBalance')}</span>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-serif font-medium text-white drop-shadow-sm">120</span>
              <span className="text-lg font-light text-[#cfaa68] opacity-90">pts</span>
            </div>
            <div className="mt-4 flex w-full items-center justify-between rounded-lg bg-white/10 px-4 py-2.5 text-sm backdrop-blur-sm border border-white/10">
              <span className="font-serif italic text-[#e6c992]">{t('platinumMember')}</span>
              <span className="flex items-center gap-1 text-xs font-medium tracking-wide uppercase text-white/90 cursor-pointer hover:text-white transition-colors">
                {t('history')} <ChevronDown size={16} className="-rotate-90" />
              </span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-serif font-bold tracking-tight text-slate-900">{t('membershipPlans')}</h1>
          <p className="text-slate-600 text-[10px] font-medium tracking-wide uppercase">{t('elevateBeauty')}</p>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-6 p-5 pb-24 overflow-y-auto no-scrollbar">
        {/* Tulip Seed */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-stone-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-200 to-stone-300"></div>
          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col items-center text-center gap-1">
              <Sparkles className="text-[#D4AF37] mb-2" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-slate-800">{t('tulipSeed')}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#B48E1A]">$100</span>
                <span className="text-sm text-slate-400 font-medium">/ {t('month')}</span>
              </div>
            </div>
            <div className="h-px w-2/3 bg-stone-100 mx-auto"></div>
            <ul className="flex flex-col gap-3 px-2">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#D4AF37]" size={18} />
                <span>{t('earnPointsMonthly', { points: 150 })}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CalendarDays className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('pointsAnnually', { points: '1,800' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('bonusOnPurchases', { bonus: 0 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Gift className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('signupBonus', { points: 150 })}</strong></span>
              </li>
            </ul>
            <button className="mt-2 w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B48E1A] py-3.5 text-sm font-bold text-white uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300">
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Tulip Seed Plus */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-stone-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-300 to-[#D4AF37]/50"></div>
          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col items-center text-center gap-1">
              <Sparkles className="text-[#D4AF37] mb-2" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-slate-800">{t('tulipSeedPlus')}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#B48E1A]">$200</span>
                <span className="text-sm text-slate-400 font-medium">/ {t('month')}</span>
              </div>
            </div>
            <div className="h-px w-2/3 bg-stone-100 mx-auto"></div>
            <ul className="flex flex-col gap-3 px-2">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#D4AF37]" size={18} />
                <span>{t('earnPointsMonthly', { points: 300 })}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CalendarDays className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('pointsAnnually', { points: '3,600' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('bonusOnPurchases', { bonus: 0 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Gift className="text-[#D4AF37]" size={18} />
                <span><strong className="text-slate-800">{t('signupBonus', { points: 150 })}</strong></span>
              </li>
            </ul>
            <button className="mt-2 w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B48E1A] py-3.5 text-sm font-bold text-white uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300">
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Tulip Bloom (Most Popular) */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#FDFBF7] shadow-[0_10px_40px_-10px_rgba(212,175,55,0.2)] border border-[#D4AF37]/30">
          <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
          <div className="p-6 flex flex-col gap-5 relative">
            <div className="absolute top-4 right-4">
              <span className="bg-[#8C1D40] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{t('mostPopular')}</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 mt-2">
              <Sparkles className="text-[#D4AF37] mb-2 drop-shadow-sm" size={40} />
              <h3 className="text-3xl font-serif font-bold text-slate-800">{t('tulipBloom')}</h3>
              <p className="text-xs font-medium text-[#B48E1A] uppercase tracking-widest mb-1">{t('optimalRadiance')}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#8C1D40]">$250</span>
                <span className="text-sm text-slate-400 font-medium">/ {t('month')}</span>
              </div>
            </div>
            <div className="h-px w-2/3 bg-[#D4AF37]/20 mx-auto my-1"></div>
            <ul className="flex flex-col gap-3 px-2">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="text-[#8C1D40]" size={18} />
                <span><strong className="text-slate-900">{t('basePointsMonthly', { points: 375 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <PlusCircle className="text-[#8C1D40]" size={18} />
                <span><strong className="text-slate-900">{t('bonusTotal', { bonus: 10, bonusPts: 37, total: 412 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CalendarDays className="text-[#8C1D40]" size={18} />
                <span><strong className="text-slate-900">{t('pointsAnnually', { points: '4,944' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Gift className="text-[#8C1D40]" size={18} />
                <span><strong className="text-slate-900">{t('signupBonus', { points: 300 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Diamond className="text-[#8C1D40]" size={18} />
                <span>{t('priorityBooking')}</span>
              </li>
            </ul>
            <button className="mt-2 w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B48E1A] py-3.5 text-sm font-bold text-white uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300">
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Tulip Royale */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f1f1f] to-black shadow-2xl border border-white/10 text-[#FDFBF7]">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
          <div className="p-6 flex flex-col gap-5 relative z-10">
            <div className="flex flex-col items-center text-center gap-1">
              <Sparkles className="text-[#D4AF37] mb-2" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-white">{t('tulipRoyale')}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-[#D4AF37]">$400</span>
                <span className="text-sm text-white/60 font-medium">/ {t('month')}</span>
              </div>
            </div>
            <div className="h-px w-2/3 bg-white/10 mx-auto"></div>
            <ul className="flex flex-col gap-3 px-2">
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <CheckCircle2 className="text-[#D4AF37]" size={18} />
                <span><strong className="text-white">{t('basePointsMonthly', { points: 600 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <PlusCircle className="text-[#D4AF37]" size={18} />
                <span><strong className="text-white">{t('bonusTotal', { bonus: 20, bonusPts: 120, total: 720 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <CalendarDays className="text-[#D4AF37]" size={18} />
                <span><strong className="text-white">{t('pointsAnnually', { points: '8,640' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Gift className="text-[#D4AF37]" size={18} />
                <span><strong className="text-white">{t('signupBonus', { points: 550 })}</strong></span>
              </li>
            </ul>
            <button className="mt-2 w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B48E1A] py-3.5 text-sm font-bold text-white uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300">
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Golden Tulip */}
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-black shadow-[0_10px_50px_-10px_rgba(0,0,0,0.5)] border border-[#D4AF37]/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent opacity-40"></div>
          <div className="p-8 flex flex-col gap-6 relative z-10">
            <div className="flex flex-col items-center text-center gap-1">
              <div className="mb-3 relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-30 rounded-full"></div>
                <Sparkles className="relative text-[#D4AF37]" size={48} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#D4AF37] bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] animate-pulse" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                {t('goldenTulip')}
              </h3>
              <p className="text-xs font-medium text-[#D4AF37]/80 uppercase tracking-[0.2em] mb-2">{t('theUltimateLuxury')}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$600</span>
                <span className="text-sm text-stone-400 font-medium">/ {t('month')}</span>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
            <ul className="flex flex-col gap-4 px-2">
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Verified className="text-[#D4AF37]" size={20} />
                <span><strong className="text-[#D4AF37]">{t('basePointsMonthly', { points: 900 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <PlusCircle className="text-[#D4AF37]" size={20} />
                <span><strong className="text-[#D4AF37]">{t('bonusTotal', { bonus: 30, bonusPts: 270, total: '1,170' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <CalendarDays className="text-[#D4AF37]" size={20} />
                <span><strong className="text-[#D4AF37]">{t('pointsAnnually', { points: '14,040' })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Gift className="text-[#D4AF37]" size={20} />
                <span><strong className="text-[#D4AF37]">{t('signupBonus', { points: 950 })}</strong></span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-300">
                <Crown className="text-[#D4AF37]" size={20} />
                <span>{t('vipEventAccess')}</span>
              </li>
            </ul>
            <button className="mt-4 w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B48E1A] py-4 text-sm font-bold text-black uppercase tracking-wider shadow-[0_0_20px_-5px_#D4AF37] hover:shadow-[0_0_30px_-5px_#D4AF37] transition-all duration-300">
              {t('getStarted')}
            </button>
          </div>
        </div>

        <div className="h-8"></div>
      </main>
      
      <BottomNav />
    </div>
  );
}
