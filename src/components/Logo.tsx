import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';
import { fetchSiteSettings } from '../utils/sanityClient';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [darkLogo, setDarkLogo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        console.log('Fetching site settings...');
        const settings = await fetchSiteSettings();
        console.log('Site settings received:', settings);
        if (settings) {
          setLogo(settings.logo);
          setDarkLogo(settings.darkLogo);
          console.log('Logo URL:', settings.logo);
          console.log('Dark Logo URL:', settings.darkLogo);
        }
      } catch (error) {
        console.error('Error loading logo:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLogo();
  }, []);

  // Determine which logo to use based on variant
  const logoUrl = variant === 'dark' && darkLogo ? darkLogo : logo;

  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-serif font-bold tracking-tighter ${className}`}
    >
      {isLoading || !logoUrl ? (
        // Fallback to icon if no logo is available
        <Music size={24} className={variant === 'dark' ? 'text-amber-500' : 'text-amber-500'} />
      ) : (
        <img
          src={logoUrl}
          alt="Tollington Gospel Choir"
          className="h-10 w-auto"
          onError={(e) => {
            console.error('Error loading logo image:', e);
            // Replace with icon on error
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            // Force re-render with icon
            setLogo(null);
          }}
        />
      )}
      <span className={variant === 'dark' ? 'text-white' : 'text-purple-900'}>
        Tollington Gospel Choir
      </span>
    </Link>
  );
};

export default Logo;
