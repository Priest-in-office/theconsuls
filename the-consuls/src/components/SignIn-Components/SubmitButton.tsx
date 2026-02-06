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
        className="btn-gradient w-full h-14 rounded-full text-white font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
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

