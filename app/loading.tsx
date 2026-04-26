export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white">
      <div className="text-center">
        {/* Logo com animação de pulse */}
        <div className="mb-8 animate-pulse">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Spinner elegante */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-neutral-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Texto com animação */}
        <p className="text-neutral-600 font-medium text-lg mb-2">Carregando...</p>
        <p className="text-neutral-400 text-sm">Preparando sua experiência educacional</p>
      </div>
    </div>
  )
}
