const Logo = () => (
  <div className="flex items-center space-x-2 text-small sm:text-medium text-justify text-pretty leading-relaxed font-light">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-12 sm:h-12 text-[#ef9c00] filter drop-shadow-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: 'drop-shadow(0 0 10px rgba(239, 156, 0, 0.9))' }}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(239,156,0)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(255,204,0)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" stroke="url(#grad1)" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-[#ef9c00]">EL-ROB</span>
      <span>Elektro Usługi</span>
    </div>
  </div>
);


export default Logo;
