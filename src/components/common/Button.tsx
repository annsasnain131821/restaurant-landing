import type { ButtonVariant } from '../../types';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200';
  const variants = {
    primary: 'bg-brand-500 text-stone-950 hover:bg-brand-700 hover:text-white',
    secondary: 'border border-white/20 bg-white/10 text-white hover:bg-white/20',
  };

  return <button className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</button>;
}

export default Button;
