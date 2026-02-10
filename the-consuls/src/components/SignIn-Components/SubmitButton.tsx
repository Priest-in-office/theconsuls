interface SubmitButtonProps {
  text: string;
  isLoading?: boolean;
  onClick: () => void;
}

export default function SubmitButton({ text, isLoading, onClick }: SubmitButtonProps) {
  return (
    <div className="mb-8">
      <button 
        onClick={onClick} 
        disabled={isLoading} 
        className="btn-gradient w-full h-14 rounded-full text-black font-bold text-lg shadow-[0_0_20px_rgba(0,255,163,0.4)] hover:shadow-[0_0_30px_rgba(0,255,163,0.6)] active:scale-[0.98] transition-all"
      >
        {isLoading ? (
          <span className="material-symbols-outlined animate-spin">progress_activity</span>
        ) : (
          text
        )}
      </button>
    </div>
  )
}

