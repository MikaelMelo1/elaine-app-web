import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';
import { Mail, Lock, Eye, EyeOff, Sparkles, Smile } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { t, setLanguage, language } = useLanguage();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/home');
    } else {
      setError(t('invalidCredentials'));
    }
  };

  return (
    <div className="bg-[#fff9f2] font-sans min-h-screen antialiased flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <div className="w-full bg-[#57182c] py-3 px-6 shadow-md z-30 flex justify-between items-center fixed top-0 left-0 max-w-md mx-auto right-0">
        <div className="flex items-center gap-2">
          <Sparkles className="text-[#dcb065]" size={24} />
          <div className="flex flex-col">
            <span className="font-serif text-white text-xl leading-tight tracking-wide font-medium">Elaine</span>
            <span className="font-sans text-white/70 text-[10px] uppercase tracking-[0.2em] leading-none">Esthetics</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setLanguage('en')} className={`w-6 h-4 overflow-hidden rounded-[2px] transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
            <img alt="USA Flag" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyNsKhlbrBvEtDnbkMH6FV8R3kLofcclNeCArIjsXCWq_aTlPbCplMqmgMkUO6ZDR7k02CgzjhyzROES-nzC5LwbKk3cejOeHIzHRoJoEoTUnzwAsQm7N1aPTreLweA9ZJGqdlm6gkLyZx0TI-AQueuX99ltJKA66K1pXm3RuOVHWT3OseJNoxRsaackMtj-NoAI2ItEmg_ihBGG5yzXtUmtYUfOBgAJpTmnAzBie7GT5MtzFIMzhoP90TWj_OnkWUSkzYEztlhcg" />
          </button>
          <button onClick={() => setLanguage('pt')} className={`w-6 h-4 overflow-hidden rounded-[2px] transition-opacity ${language === 'pt' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
            <img alt="Brazil Flag" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrTsh9thGJXfKVgeBwlAxeyBi4M8ex2_KQ5oOTr4puBsDOibIU7AE5uJSdBKeuzQuumRVcHRRF-O_pxgZF04XKwQLS-SzngPYzCUdVvSaiKuA-2Eiid5dExoqUM0x8SdURxqFRzjB6Z5od5a1CokijEZ7gAFbal74GmtWLxTi66nLGLPHgfPV82RJqC5Fg840Qv4OhXFG6kAYauh9GH9aEEkywR6_YBtfftQWikaIELkPjfc-VX-92b2r4arY0lWy3fhs2d3waoMM" />
          </button>
          <button onClick={() => setLanguage('es')} className={`w-6 h-4 overflow-hidden rounded-[2px] transition-opacity ${language === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
            <img alt="Spain Flag" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpGXZVYEMDX7J8k-PYxDvj1_yIum_DwLjFmmX70SCpD76MeNXmPZ4IBehb5sxi7HUxlXR7NoTXm74uS9_1Ng2ZzzHb-3dsGFgluxinOgMtaF5FqxgJXOsJlN4mNW-Gy_Ib74ytHwO4I43OiTbuM1JSDy4aEcFE-WQS_OIvhthY3crINdvJB7YBCnylT_ggL5HXoP8Cn7K7mNAea-dPlA57KcAcPpFdSVI5aq1LWHDfLFBrswNwwlByQuu2wVxNbjMbK9GHLTq6RMg" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full pt-[60px]">
        <div className="w-full h-[200px] relative overflow-hidden bg-[#57182c]">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img alt="Spa treatment lifestyle" className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVt-D8Zsp2Hb3byr6lk_3aj5hHCEg5AgzYLT0h6quyP3SDT3TmVmc43IrewZvyzKf8ZjSjzWvDYtavLa06FUaBEtOcbvfvZLqEozNOxP8PRxzuy60SrTOExbxNS1kbCkqnbHMadE6wKbXXOgAyLMqJUspdRnXQApejG39KwF9xfH9sWzt8QvT1h1ajE_jviKF5cgSGYUEP2EHV63ybdSD8bxVb5fHbe9Be-6IYWbMRLq483z6IL1Yrmde-25J8W7tD9CiGhwTFPM" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <h2 className="font-serif text-3xl text-white italic drop-shadow-md mb-2 whitespace-pre-line">{t('whereBeautyMeets')}</h2>
            <p className="font-sans text-[#dcb065] text-xs uppercase tracking-widest font-semibold mt-2">{t('adminPortal')}</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fff9f2] to-transparent z-20"></div>
        </div>

        <div className="w-full flex flex-col justify-center items-center px-6 py-8 bg-[#fff9f2] relative flex-1">
          <div className="w-full max-w-sm space-y-8 z-10">
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl text-[#57182c] mb-2">{t('welcomeBack')}</h1>
              <p className="text-gray-500 text-sm font-light">{t('enterCredentials')}</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#57182c] uppercase tracking-widest ml-1">{t('emailAddress')}</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="text-gray-400 group-focus-within:text-[#57182c] transition-colors" size={20} />
                  </div>
                  <input 
                    className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm focus:ring-1 focus:ring-[#dcb065] focus:border-[#dcb065] focus:outline-none transition-all duration-300 font-medium text-sm" 
                    placeholder="elaine" 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block text-xs font-bold text-[#57182c] uppercase tracking-widest">{t('password')}</label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="text-gray-400 group-focus-within:text-[#57182c] transition-colors" size={20} />
                  </div>
                  <input 
                    className="block w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm focus:ring-1 focus:ring-[#dcb065] focus:border-[#dcb065] focus:outline-none transition-all duration-300 font-medium text-sm" 
                    placeholder="••••••••" 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#57182c] transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}

                <div className="flex justify-between items-center pt-1 px-1">
                  <label className="inline-flex items-center cursor-pointer group">
                    <input className="w-4 h-4 rounded border-gray-300 text-[#dcb065] focus:ring-[#dcb065]/50 transition duration-150 ease-in-out cursor-pointer" type="checkbox" />
                    <span className="ml-2 text-xs font-semibold text-gray-500 group-hover:text-[#57182c] transition-colors">{t('saveUser')}</span>
                  </label>
                  <a className="text-xs font-semibold text-[#57182c]/80 hover:text-[#57182c] underline decoration-[#dcb065]/50 hover:decoration-[#dcb065] transition-all" href="#">
                    {t('forgotPassword')}
                  </a>
                </div>
              </div>

              <button className="w-full bg-[#dcb065] hover:bg-[#c99e55] text-[#57182c] font-bold py-4 px-4 rounded-full shadow-lg shadow-[#dcb065]/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group mt-6 uppercase tracking-wider text-sm" type="submit">
                <span>{t('logIn')}</span>
              </button>
            </form>

            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] bg-gray-200 flex-1"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('or')}</span>
              <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>

            <div className="flex justify-center">
              <button className="p-3 rounded-full bg-white border border-gray-100 shadow-sm text-[#57182c] hover:bg-[#57182c] hover:text-[#dcb065] hover:border-[#57182c] transition-all duration-300 group">
                <Smile className="group-hover:scale-110 transition-transform" size={28} />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center z-10 relative">
            <p className="text-[10px] text-gray-400 font-medium">
              © 2026 Elaine Esthetics. All rights reserved.
            </p>
            <p className="text-[9px] text-[#dcb065]/80 mt-1 uppercase tracking-wider font-semibold">
              {t('developedBy')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
