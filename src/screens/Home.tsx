import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNav from '../components/BottomNav';
import { ChevronDown, Sparkles, ArrowRight, Info, Phone, Calendar } from 'lucide-react';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const langs: ('en' | 'pt' | 'es')[] = ['en', 'pt', 'es'];
    const nextLang = langs[(langs.indexOf(language) + 1) % langs.length];
    setLanguage(nextLang);
  };

  return (
    <div className="bg-[#FDFBF7] text-[#57081F] font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-0.5">{t('welcomeTo')}</span>
          <h1 className="text-2xl font-serif font-bold text-[#57081F] leading-none tracking-tight">Elaine <span className="text-[#D4AF37] italic">MedSpa</span></h1>
        </div>
        <button onClick={toggleLanguage} className="flex items-center gap-1 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full text-xs font-serif font-semibold text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
          <span>{language.toUpperCase()}</span>
          <ChevronDown size={16} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="relative w-full h-[320px] bg-[#57081F] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQmysifq-R-vUV4WkbmxFxuvc7hzxEn4Pv_Hf3YHSXmK4BszIk14MZxgSf-Z02Zmcdwh7pFFGs9rVhKczrRTtYEttQBzRlXn_xkSL1UmNpKdDTYVYZI1nwxa60GPcJHBqte_KmFwtZclHn3gCVuBMryd6UNfFpKgTYRzAYFEonYbdwKIz8YzkzxfsWtsXfCPjtgLAtXn_W_B8HA_yFX37Y2UoHhymVornu4nTbpqeOvGZe8fmq5ZRQkRauMum77k_ZzDmmphLTuPg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#57081F]/30 via-transparent to-[#57081F]"></div>
          <div className="relative h-full flex flex-col justify-end p-6 text-center pb-12">
            <h2 className="font-serif text-3xl text-white mb-2 leading-tight whitespace-pre-line">{t('whereBeautyMeets')}</h2>
            <p className="text-[#FDFBF7]/90 text-sm font-light mb-6 font-sans">{t('yourBeautyHaven')}</p>
            <button className="mx-auto px-6 py-3 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white text-xs font-serif font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-white/20 hover:scale-105 transition-transform">
              {t('bookYourMoment')}
            </button>
          </div>
        </div>

        <div className="px-6 -mt-6 relative z-10">
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_30px_-5px_rgba(87,8,31,0.15)] border border-[#D4AF37]/20 text-center">
            <h3 className="font-serif text-xl text-[#57081F] mb-2">{t('ourStory')}</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3 font-sans">
              {t('foundedBy')}
            </p>
            <div className="w-full h-32 rounded-lg overflow-hidden relative mb-3">
              <img alt="Elaine Portrait" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDNIIjcPEKrh_8Gh1uzQdVtG7dqcVRJbozPqZf6QiREut_ZSRjwzbddTPHlsHzAy_wcIZC3rkcldAHO7Jj81HZ6xstdaZEOP2_6hx2LJbc4DVBC8Z5_qpJeVFdDyx_eliCDdtLL-nCGuPgNhrfzQrWX6aC0bEaiP-vZukBYlmP_mQs1r1AfXWtOoUFescgUJP8zQyUnyRrXCxnD9o7G-dBRshmqISb9hrR_1c2snSMGtj-9vrcumn4w3lg7AkFL37cj32MSub4Ww" />
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <h3 className="font-serif text-2xl text-[#57081F] mb-6 italic">{t('dashboard')}</h3>
          <div className="grid grid-cols-1 gap-5">
            <div onClick={() => navigate('/wallet')} className="relative overflow-hidden rounded-xl bg-black border border-[#D4AF37]/40 shadow-[0_10px_30px_-5px_rgba(87,8,31,0.15)] group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>
              <div className="relative p-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-[#D4AF37]" size={16} />
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-sans">{t('premium')}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-1">{t('goldenTulip')}</h4>
                  <p className="text-gray-400 text-xs font-light font-sans">{t('exclusiveBenefits')}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>

            <div onClick={() => navigate('/procedures')} className="group relative overflow-hidden rounded-xl bg-white border border-[#57081F]/10 shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(87,8,31,0.15)] transition-all cursor-pointer">
              <div className="flex h-auto min-h-[120px]">
                <div className="w-[100px] shrink-0 relative">
                  <img alt="Procedures" className="absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYF5-pdoEdUFqglkB8zPnMXEmp0w8D6RITeJWSHWXcQVuSxyAajaGOeMAzC8QlnG8N2sVs8-kGl3N9pARmKhfhl315J6YuWvjbzsoAnAdvklKewpJ_0dOZ1UhICAvE7TGVJmGcegyi10Htyip3NwU8gn4RKJjaeJ6xg6m503xOmAuRxx5TDgegmNotPBEC0P7d3Hs0-x7ITiTZTvhFH_beXalZkhtKe015hLB8I8zrT7CtXnv4il44mQtqHSW2kMJeXTqMmeoC-wo" />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center border-l border-[#57081F]/5">
                  <h4 className="font-serif text-lg text-[#57081F] mb-1 leading-tight">{t('personalizedProcedures')}</h4>
                  <p className="text-gray-500 text-xs mb-3 font-sans leading-relaxed">{t('discoverAdvanced')}</p>
                  <span className="text-[#57081F] text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all font-sans mt-auto">
                    {t('viewTreatments')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white p-5 rounded-xl border border-[#D4AF37]/20 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between h-32 group">
                <div className="w-8 h-8 rounded-full bg-[#F5F0E6] text-[#57081F] flex items-center justify-center mb-auto group-hover:bg-[#57081F] group-hover:text-white transition-colors">
                  <Info size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-[#57081F] text-lg leading-none mb-1">{t('howItWorks')}</h4>
                  <p className="text-[10px] text-gray-500 font-sans">{t('yourJourneyBegins')}</p>
                </div>
              </button>
              
              <button className="bg-white p-5 rounded-xl border border-[#D4AF37]/20 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between h-32 group">
                <div className="w-8 h-8 rounded-full bg-[#F5F0E6] text-[#57081F] flex items-center justify-center mb-auto group-hover:bg-[#57081F] group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-[#57081F] text-lg leading-none mb-1">{t('contact')}</h4>
                  <p className="text-[10px] text-gray-500 font-sans">{t('getInTouch')}</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-[#57081F] text-white p-5 rounded-xl shadow-[0_10px_30px_-5px_rgba(87,8,31,0.15)] flex items-center justify-between relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-white/10 p-2.5 rounded-lg text-[#F3E5AB] border border-white/10">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-[10px] text-[#F3E5AB] uppercase tracking-widest font-medium mb-0.5 font-sans">{t('nextAppointment')}</p>
                <p className="text-sm font-serif">{t('noUpcomingBookings')}</p>
              </div>
            </div>
            <button className="text-xs font-serif font-bold text-white bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:brightness-110 transition-colors relative z-10">
              {t('bookNow')}
            </button>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
