import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liceu Monteiro Lobato</h3>
            <p className="text-sm opacity-90">
              Educação de qualidade com tradição e inovação, formando cidadãos preparados para o futuro.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/escola" className="hover:text-secondary transition-colors">A Escola</Link></li>
              <li><Link href="/ensino" className="hover:text-secondary transition-colors">Ensino</Link></li>
              <li><Link href="/noticias" className="hover:text-secondary transition-colors">Notícias</Link></li>
              <li><Link href="/calendario" className="hover:text-secondary transition-colors">Calendário</Link></li>
              <li><Link href="/matriculas" className="hover:text-secondary transition-colors">Matrículas</Link></li>
            </ul>
          </div>

          {/* Portal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Portal Escolar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portal/login" className="hover:text-secondary transition-colors">Portal dos Pais</Link></li>
              <li><Link href="/portal/login" className="hover:text-secondary transition-colors">Portal do Aluno</Link></li>
              <li><Link href="/portal/login" className="hover:text-secondary transition-colors">Portal do Professor</Link></li>
              <li><Link href="/portal/login" className="hover:text-secondary transition-colors">Portal Administrativo</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Rua Exemplo, 123<br />Bairro - Cidade/UF</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contato@liceumlobato.edu.br</span>
              </li>
            </ul>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Liceu Monteiro Lobato. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido por <span className="font-semibold">MGR Solutions</span></p>
        </div>
      </div>
    </footer>
  )
}
