import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNav from '../components/BottomNav';
import { ArrowLeft, Info, ChevronDown, Sparkles } from 'lucide-react';

export default function Procedures() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    facials: true,
    laser: false,
    iv: false,
    body: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-[#f9f6f2] text-slate-800 font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <div className="sticky top-0 z-20 bg-[#f9f6f2]/95 backdrop-blur-md border-b border-[#50192e]/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={() => navigate(-1)} className="flex w-10 h-10 items-center justify-center rounded-full text-[#50192e] hover:bg-[#50192e]/5 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-serif font-semibold text-[#50192e]">{t('proceduresAndPoints')}</h1>
          <button className="flex w-10 h-10 items-center justify-center rounded-full text-[#50192e] hover:bg-[#50192e]/5 transition-colors">
            <Info size={24} />
          </button>
        </div>

        <div className="px-4 pb-4">
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 gap-6 pb-32">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['all', 'facials', 'laser', 'injectables'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                activeTab === tab 
                  ? 'bg-gradient-to-br from-[#50192e] to-[#3a1020] text-white shadow-md border border-white/10' 
                  : 'bg-white border border-[#50192e]/10 text-[#50192e]/70 hover:bg-[#50192e]/5'
              }`}
            >
              {t(tab as any)}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {/* Facials */}
          <div className="rounded-xl bg-white shadow-[0_4px_20px_-2px_rgba(80,25,46,0.1)] border border-[#50192e]/5 overflow-hidden">
            <div 
              onClick={() => toggleSection('facials')}
              className="relative flex cursor-pointer items-center justify-between p-0 transition-colors"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#50192e]/60 mix-blend-multiply z-10 transition-opacity hover:bg-[#50192e]/70"></div>
                <img alt="Facial treatment" className="h-full w-full object-cover object-center grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-f-uR96utCtrfvml0sURXjZxrPhd3LTSPhdVUOBsUTSwNjMronHsTqiBCxMvCXcPNEiGkGtTSHi8Ilk2JYLViZ89HhXpehV8A58z2ADvDBadIn-FDLs-eZvxtuZSuR7JCXyQSNm1Z7GBlwmIR3tQlwwxCpwsWAvq8sWgczq6gP29Sea6iCBlbJ7DKnSyewvHwVgFuWirf38AhqVixYiNjyBQld2wVD_FM-aIp-9epE1Qn6LMW927I1vnZSYlMJ3Cd0TOTYRMbsLE" />
                <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif font-medium text-white drop-shadow-md tracking-tight">{t('signatureFacials')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#cfaa68] font-semibold mt-1">{t('rejuvenateGlow')}</span>
                  </div>
                  <div className={`bg-white/20 backdrop-blur-md rounded-full p-1.5 transition-transform border border-white/20 ${openSections.facials ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {openSections.facials && (
              <div className="flex flex-col divide-y divide-[#50192e]/5 px-6 pb-2 pt-2">
                <div className="py-5 cursor-pointer hover:bg-gray-50 transition-colors -mx-6 px-6" onClick={() => navigate('/timeline')}>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-medium text-[#50192e]">{t('hydrafacialDeluxe')}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{t('cashPrice')}: $250</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{t('save')} $50</span>
                    </div>
                  </div>
                </div>

                <div className="py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-medium text-[#50192e]">{t('oxygeneo')}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{t('cashPrice')}: $300</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{t('save')} $55</span>
                    </div>
                  </div>
                </div>

                <div className="py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-medium text-[#50192e]">{t('dermaplaning')}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{t('cashPrice')}: $85</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{t('save')} $15</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Laser Treatments */}
          <div className="rounded-xl bg-white shadow-[0_4px_20px_-2px_rgba(80,25,46,0.1)] border border-[#50192e]/5 overflow-hidden">
            <div 
              onClick={() => toggleSection('laser')}
              className="relative flex cursor-pointer items-center justify-between p-0 transition-colors"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#50192e]/60 mix-blend-multiply z-10 transition-opacity hover:bg-[#50192e]/70"></div>
                <img alt="Laser treatment" className="h-full w-full object-cover object-center grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEid_UZQEOpufOwrCeGghxIIyLur4EzPGMBh45eMFOuYWAW9pjLlp-PlrEe2A2Z0IH1KnsFD8v3jxWeEpf-3hqFVgCL78ZkjcXsXtdN2l0FCtisEpEFJ82hIy2nC4lmlbSNGrjb_VpSIykzucG8wGkrvq746Cni0KMV2qqUmuA-j96g_i6J_zwRFGF0mWw5L9pC0v1pdU7kDPcI8Fp-ZsnBYZq6D9s-AxedlB-4DHgHhzy8QREZqjF_X2ndXg_pYCBT7mILadtWCc" />
                <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif font-medium text-white drop-shadow-md tracking-tight">{t('laserTreatments')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#cfaa68] font-semibold mt-1">{t('advancedCare')}</span>
                  </div>
                  <div className={`bg-white/20 backdrop-blur-md rounded-full p-1.5 transition-transform border border-white/20 ${openSections.laser ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {openSections.laser && (
              <div className="px-6 py-2 text-sm text-slate-500">
                <div className="py-5 border-b border-[#50192e]/5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-medium text-[#50192e]">{t('fullFaceIpl')}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{t('cashPrice')}: $400</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{t('save')} $80</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Peptides & IV */}
          <div className="rounded-xl bg-white shadow-[0_4px_20px_-2px_rgba(80,25,46,0.1)] border border-[#50192e]/5 overflow-hidden">
            <div 
              onClick={() => toggleSection('iv')}
              className="relative flex cursor-pointer items-center justify-between p-0 transition-colors"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#50192e]/60 mix-blend-multiply z-10 transition-opacity hover:bg-[#50192e]/70"></div>
                <img alt="IV treatment" className="h-full w-full object-cover object-center grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKCDuMezkj2eLNZN_2b1YipC6DENp-dznF-jFEp8ALAfyzekZDl5Sqjj-8OESOHK_aNB6rukOKvW4YmfF2fBvLqvzbFTRGpV7syQBHHyR6fpzwTDhlhTjJEMTtiMqm58N9JU4ClmZk7dLMy6rBdWNpDk4whx-qC5PbG_5vV-6LuxCrZJQiALVl7R8Rg_v2Bst3oqlMUoCGqT7KAUFzm3cJzFtTYqAtA0AY8SGvf4wr-RcdmERpmVm8RX4yaXgUws26m77jAfHq9Q" />
                <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif font-medium text-white drop-shadow-md tracking-tight">{t('peptidesIv')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#cfaa68] font-semibold mt-1">{t('wellnessInfusion')}</span>
                  </div>
                  <div className={`bg-white/20 backdrop-blur-md rounded-full p-1.5 transition-transform border border-white/20 ${openSections.iv ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {openSections.iv && (
              <div className="px-6 py-6 text-sm text-slate-500">
                <p className="text-center font-serif italic text-slate-400">{t('checkBackLater')}</p>
              </div>
            )}
          </div>

          {/* Body Contouring */}
          <div className="rounded-xl bg-white shadow-[0_4px_20px_-2px_rgba(80,25,46,0.1)] border border-[#50192e]/5 overflow-hidden">
            <div 
              onClick={() => toggleSection('body')}
              className="relative flex cursor-pointer items-center justify-between p-0 transition-colors"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#50192e]/60 mix-blend-multiply z-10 transition-opacity hover:bg-[#50192e]/70"></div>
                <img alt="Body contouring" className="h-full w-full object-cover object-center grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaCgRn70sRYdNdiAiKi_obFqoaTC8F5JhSdL7J7E925myd_NZAvfH_UUxaJp5s_8QKn3oRDMSBkbDdMSCAgRkO9MGylsq4PPrxTxZGKD4aOEfESBr8ZjaPm7VE0ToH115Elh4bs2eUw3aK_qVC-KhOKzpD2HHSgowfGdRdDOqX2VtMELzLULP5ZnkDHCPodGnAguzmKELsfHLakIWIHeuujTrxuufRDVWvjHav_2ftYhl0bYtLW6CEBta5nWeGxw3eJTOlKpwnpXs" />
                <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif font-medium text-white drop-shadow-md tracking-tight">{t('bodyContouring')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#cfaa68] font-semibold mt-1">{t('sculptTone')}</span>
                  </div>
                  <div className={`bg-white/20 backdrop-blur-md rounded-full p-1.5 transition-transform border border-white/20 ${openSections.body ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {openSections.body && (
              <div className="flex flex-col divide-y divide-[#50192e]/5 px-6 pb-2 pt-2">
                <div className="py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif text-lg font-medium text-[#50192e]">{t('coolSculpting')}</h3>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{t('cashPrice')}: $750</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{t('save')} $120</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      
      <BottomNav />
    </div>
  );
}
