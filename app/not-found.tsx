import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="text-center text-white">
        <div className="text-9xl font-bold mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-xl mb-8 opacity-90">
          Desculpe, a página que você está procurando não existe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-all inline-flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Voltar para Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center border-2 border-white"
          >
            <ArrowLeft size={20} className="mr-2" />
            Página Anterior
          </button>
        </div>
      </div>
    </div>
  )
}
