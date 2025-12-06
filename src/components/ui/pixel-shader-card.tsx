import type { ReactNode } from 'react';

interface PixelShaderCardProps {
  children?: ReactNode;
}

export const PixelShaderCard = ({ children }: PixelShaderCardProps) => {
  return (
    <div className="hidden lg:flex items-start justify-end pt-12">
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black backdrop-blur-xl overflow-hidden"
        style={{ aspectRatio: '1 / 1' }}
      >
        {children}
      </div>
    </div>
  );
};
