import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Heart, Clock, Star, ArrowRight } from 'lucide-react';

export default function Timeline() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-[#FDFBF7] min-h-screen flex justify-center w-full font-sans antialiased">
      <div className="w-full max-w-md bg-[#FDFBF7] min-h-screen relative flex flex-col shadow-2xl overflow-hidden">
        <div className="relative h-72 w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2saHHE9UNke0GCf-M9kkB5zeU54vWvZA_fWdrzjK5Bcvl2LiJGEX4GNMniBqXBhat_eLW_tz8LswWYOcQx0cbNw36qSp69Z2J1JxYrgpQHwnK_U2UJqVEGnu7fWnIjhpb95vvtrMxCI_TukX2rHGxiEySvF1Gc3oAHnjWcemlNPMk8sRrPzHZ14RLN5hxSSj2vlhu39Tgq6GiegN4nzDdKf-gwA74ijD-9fntxgwEwOwt4MDucL_nARsdTPMkSvAoUhP8EvENi4s')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FDFBF7]"></div>
          
          <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-12 pb-4 z-20">
            <button onClick={() => navigate(-1)} className="bg-white/20 backdrop-blur-md text-white p-2 -ml-2 rounded-full hover:bg-white/30 transition-colors border border-white/20">
              <ArrowLeft size={24} />
            </button>
            <button className="bg-white/20 backdrop-blur-md text-white p-2 -mr-2 rounded-full hover:bg-white/30 transition-colors border border-white/20">
              <Heart size={24} />
            </button>
          </header>
          
          <div className="absolute bottom-6 left-6 z-10">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-widest text-white uppercase bg-[#b8143d]/80 backdrop-blur-sm rounded-full">
              {t('signatureTreatment')}
            </span>
            <h1 className="text-3xl font-serif font-bold text-slate-900 drop-shadow-sm">{t('hydrafacialDeluxe')}</h1>
            <div className="flex items-center gap-4 mt-1 text-slate-700 text-sm font-medium">
              <span className="flex items-center gap-1"><Clock size={16} /> 60 {t('mins')}</span>
              <span className="w-1 h-1 bg-[#b8143d] rounded-full"></span>
              <span>$250</span>
            </div>
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-32">
          <div className="mb-8">
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-2">{t('treatmentTimeline')}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('experienceSignature')}
            </p>
          </div>
          
          <div className="space-y-0 pl-2">
            <div className="relative flex gap-6 pb-8 group">
              <div className="absolute left-[14px] top-[30px] bottom-[-24px] w-[2px] bg-[#b8143d] opacity-20"></div>
              <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37] flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                <span className="text-[#D4AF37] font-bold text-sm">1</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-bold text-[#b8143d] mb-1">{t('cleansingPeeling')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {t('cleansingDesc')}
                </p>
              </div>
            </div>
            
            <div className="relative flex gap-6 pb-8 group">
              <div className="absolute left-[14px] top-[30px] bottom-[-24px] w-[2px] bg-[#b8143d] opacity-20"></div>
              <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37] flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                <span className="text-[#D4AF37] font-bold text-sm">2</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-bold text-[#b8143d] mb-1">{t('extractHydrate')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {t('extractDesc')}
                </p>
              </div>
            </div>
            
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37] flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                <span className="text-[#D4AF37] font-bold text-sm">3</span>
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-bold text-[#b8143d] mb-1">{t('fuseProtect')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {t('fuseDesc')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 rounded-xl bg-white shadow-[0_4px_20px_-2px_rgba(184,20,61,0.08)] border border-[#EFEAE4] flex items-start gap-3">
            <Star className="text-[#D4AF37] mt-0.5 fill-current" size={20} />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{t('proTip')}</h4>
              <p className="text-xs text-slate-500 mt-1">
                {t('enhanceHydrafacial')}
              </p>
            </div>
          </div>
        </main>
        
        <div className="absolute bottom-0 w-full bg-[#FDFBF7]/90 backdrop-blur-lg border-t border-[#EFEAE4] p-6 z-30">
          <button className="w-full h-14 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] text-slate-900 font-bold text-lg shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span>{t('bookAppointment')}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
