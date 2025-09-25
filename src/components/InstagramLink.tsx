import { Instagram } from "lucide-react";

interface InstagramLinkProps {
  variant?: 'default' | 'button' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const InstagramLink: React.FC<InstagramLinkProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  showText = true 
}) => {
  const instagramUrl = "https://www.instagram.com/oxcash?igsh=MTRqNWc3ZTZ6dGFxag==";

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  const buttonSizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleInstagramClick}
        className={`text-pink-500 hover:text-pink-400 transition-colors duration-200 ${className}`}
        aria-label="Seguir no Instagram"
      >
        <Instagram className={sizeClasses[size]} />
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={handleInstagramClick}
        className={`
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
          hover:from-purple-600 hover:via-pink-600 hover:to-orange-600
          text-white font-semibold rounded-lg 
          flex items-center gap-2 transition-all duration-300 
          transform hover:scale-105 shadow-lg hover:shadow-xl
          ${buttonSizeClasses[size]} ${className}
        `}
      >
        <Instagram className={sizeClasses[size]} />
        {showText && <span>Instagram</span>}
      </button>
    );
  }

  if (variant === 'text') {
    return (
      <button
        onClick={handleInstagramClick}
        className={`
          text-pink-500 hover:text-pink-400 font-medium
          flex items-center gap-2 transition-colors duration-200
          hover:underline ${className}
        `}
      >
        <Instagram className={sizeClasses[size]} />
        {showText && <span>@oxcash</span>}
      </button>
    );
  }

  // Variant default - card style
  return (
    <button
      onClick={handleInstagramClick}
      className={`
        group bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10
        border border-pink-500/30 rounded-xl p-4
        hover:border-pink-500/60 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-orange-500/20
        transition-all duration-300 transform hover:scale-105
        flex items-center gap-3 ${className}
      `}
    >
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
        <Instagram className={`${sizeClasses[size]} text-white`} />
      </div>
      {showText && (
        <div className="text-left">
          <div className="font-semibold text-white">Siga-nos</div>
          <div className="text-sm text-pink-400">@oxcash</div>
        </div>
      )}
    </button>
  );
};

export default InstagramLink;