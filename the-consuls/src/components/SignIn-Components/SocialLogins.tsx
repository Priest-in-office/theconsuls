interface SocialLoginsProps {
  onGoogleClick: () => void;
  onAppleClick: () => void;
}

export default function SocialLogins({ onGoogleClick, onAppleClick }: SocialLoginsProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] flex-1 bg-[#dbdbe6] dark:bg-gray-700"></div>
        <span className="text-[#60608a] text-sm font-medium">Or continue with</span>
        <div className="h-[1px] flex-1 bg-[#dbdbe6] dark:bg-gray-700"></div>
      </div>
      <div className="flex gap-4 mb-10">
        <button 
          onClick={onGoogleClick} 
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full border border-[#dbdbe6] dark:border-gray-700 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        >
          <img 
            alt="Google logo" 
            className="w-5 h-5" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5PHexRt0WZoSUvM_C2ayhF5Fu8XaLXvoFc7ycTEEffH2eKyEyjj1315UHLO1---LcLOOp-XrDEwXjCzXiGtrztbDt4f9XQ4n6UA1k0ZzW5hS6wX_NbQENFBVEu9HxoIDfJ0HrBg_bACE_ZTShIsc9G68LEJEFlgPNOP0UlQrnnNKTFo1gUd53HDG65tBW5RBGNBd7bSthDyuLbNCbuod7jnoPMqhc0Y-4Q168AXna5iL5UzGGwQhPlSr0rxrzfWaRB4jvg2YYcg"
          />
          <span className="font-bold text-[#111118] dark:text-white">Google</span>
        </button>

        <button 
          onClick={onAppleClick} 
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-2xl">ios</span>
          <span className="font-bold">Apple</span>
        </button>
      </div>
    </>
  );
}