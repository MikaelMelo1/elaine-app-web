import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Eye, EyeOff, ChevronDown } from 'lucide-react-native';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const handleLogin = async () => {
    setError('');
    if (email && password) {
      const success = await login(email, password);
      if (success) {
        navigation.replace('Home');
      } else {
        setError(t('invalidCredentials'));
      }
    }
  };

  const toggleLanguage = () => {
    const langs: ('en' | 'pt' | 'es')[] = ['en', 'pt', 'es'];
    const nextLang = langs[(langs.indexOf(language) + 1) % langs.length];
    setLanguage(nextLang);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-[#FDFBF7]"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 relative">
          {/* Header Image */}
          <View className="h-[40%] w-full relative">
            <ImageBackground 
              source={{ uri: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop' }} 
              className="absolute inset-0 w-full h-full opacity-90"
            />
            <View className="absolute inset-0 bg-[#57081F]/40" />
            <View className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
            
            <View className="absolute top-12 right-6">
              <TouchableOpacity 
                onPress={toggleLanguage} 
                className="flex-row items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full border border-white/30"
              >
                <Text className="text-white font-bold text-xs">{language.toUpperCase()}</Text>
                <ChevronDown size={14} color="white" />
              </TouchableOpacity>
            </View>

            <View className="absolute bottom-6 left-6">
              <Text className="text-3xl font-serif font-bold text-[#57081F]">Elaine <Text className="text-[#D4AF37] italic">MedSpa</Text></Text>
              <Text className="text-xs font-bold text-[#57081F] uppercase tracking-widest mt-1">{t('adminPortal')}</Text>
            </View>
          </View>

          {/* Form Content */}
          <View className="flex-1 px-6 pt-6 pb-12">
            <Text className="text-2xl font-serif font-bold text-[#57081F] mb-2">{t('welcomeBack')}</Text>
            <Text className="text-sm text-gray-500 mb-8">{t('enterCredentials')}</Text>

            {error ? (
              <View className="bg-red-50 border border-red-200 p-3 rounded-lg mb-4">
                <Text className="text-red-600 text-xs text-center">{error}</Text>
              </View>
            ) : null}

            <View className="space-y-4">
              <View>
                <Text className="text-xs font-bold text-[#57081F] uppercase tracking-widest mb-2">{t('emailAddress')}</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="elaine"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="none"
                  className="w-full bg-white border border-[#D4AF37]/30 rounded-xl px-4 py-4 text-gray-800"
                />
              </View>

              <View className="mt-4">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="text-xs font-bold text-[#57081F] uppercase tracking-widest">{t('password')}</Text>
                  <TouchableOpacity>
                    <Text className="text-xs text-[#D4AF37] font-medium">{t('forgotPassword')}</Text>
                  </TouchableOpacity>
                </View>
                <View className="relative">
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="elaine"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showPassword}
                    className="w-full bg-white border border-[#D4AF37]/30 rounded-xl px-4 py-4 text-gray-800 pr-12"
                  />
                  <TouchableOpacity 
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4"
                  >
                    {showPassword ? <EyeOff size={20} color="#9CA3AF" /> : <Eye size={20} color="#9CA3AF" />}
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity 
                onPress={handleLogin}
                className="w-full bg-[#57081F] rounded-xl py-4 mt-8 flex-row justify-center items-center shadow-lg shadow-[#57081F]/30"
              >
                <Text className="text-white font-bold text-sm uppercase tracking-widest">{t('logIn')}</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-auto pt-8">
              <Text className="text-center text-[10px] text-gray-400 uppercase tracking-widest">{t('developedBy')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
