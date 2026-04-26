'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { useState } from 'react'
import { Upload, CheckCircle } from 'lucide-react'

export default function MatriculasPage() {
  const [formData, setFormData] = useState({
    nomeAluno: '',
    dataNascimento: '',
    cpfAluno: '',
    serie: '',
    nomeResponsavel: '',
    cpfResponsavel: '',
    telefone: '',
    email: '',
    endereco: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria a integração com backend
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-neutral-50 py-16">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="text-center">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h2 className="text-3xl font-bold mb-4">Pré-matrícula enviada com sucesso!</h2>
              <p className="text-gray-600 mb-6">
                Recebemos sua solicitação de matrícula. Nossa equipe entrará em contato em até 48 horas 
                para dar continuidade ao processo.
              </p>
              <p className="text-gray-600 mb-8">
                Um email de confirmação foi enviado para <strong>{formData.email}</strong>
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="btn-primary"
              >
                Fazer outra pré-matrícula
              </button>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Matrículas 2026</h1>
            <p className="text-xl opacity-95">Garanta a vaga do seu filho no Liceu Monteiro Lobato</p>
          </div>
        </section>

        {/* Informações */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-blue-50 border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">📋 Documentos Necessários</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>• Certidão de Nascimento do aluno</li>
                  <li>• RG e CPF do aluno (se houver)</li>
                  <li>• RG e CPF do responsável</li>
                  <li>• Comprovante de residência</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Histórico escolar</li>
                  <li>• Declaração de escolaridade</li>
                  <li>• Carteira de vacinação</li>
                  <li>• 2 fotos 3x4</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Formulário */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold mb-6 text-center">Formulário de Pré-Matrícula</h2>
              <p className="text-gray-600 text-center mb-8">
                Preencha os dados abaixo para iniciar o processo de matrícula
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados do Aluno */}
                <div>
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-primary">Dados do Aluno</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nome Completo do Aluno *</label>
                      <input
                        type="text"
                        name="nomeAluno"
                        required
                        value={formData.nomeAluno}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Digite o nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Data de Nascimento *</label>
                        <input
                          type="date"
                          name="dataNascimento"
                          required
                          value={formData.dataNascimento}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">CPF do Aluno</label>
                        <input
                          type="text"
                          name="cpfAluno"
                          value={formData.cpfAluno}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Série Pretendida *</label>
                      <select
                        name="serie"
                        required
                        value={formData.serie}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selecione a série</option>
                        <optgroup label="Educação Infantil">
                          <option value="infantil-1">Infantil I</option>
                          <option value="infantil-2">Infantil II</option>
                          <option value="infantil-3">Infantil III</option>
                        </optgroup>
                        <optgroup label="Ensino Fundamental">
                          <option value="1-ano">1º Ano</option>
                          <option value="2-ano">2º Ano</option>
                          <option value="3-ano">3º Ano</option>
                          <option value="4-ano">4º Ano</option>
                          <option value="5-ano">5º Ano</option>
                          <option value="6-ano">6º Ano</option>
                          <option value="7-ano">7º Ano</option>
                          <option value="8-ano">8º Ano</option>
                          <option value="9-ano">9º Ano</option>
                        </optgroup>
                        <optgroup label="Ensino Médio">
                          <option value="1-em">1º Ano EM</option>
                          <option value="2-em">2º Ano EM</option>
                          <option value="3-em">3º Ano EM</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dados do Responsável */}
                <div>
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-primary">Dados do Responsável</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nome Completo do Responsável *</label>
                      <input
                        type="text"
                        name="nomeResponsavel"
                        required
                        value={formData.nomeResponsavel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Digite o nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">CPF do Responsável *</label>
                        <input
                          type="text"
                          name="cpfResponsavel"
                          required
                          value={formData.cpfResponsavel}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="000.000.000-00"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Telefone *</label>
                        <input
                          type="tel"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="(11) 98765-4321"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="seuemail@exemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Endereço Completo *</label>
                      <textarea
                        name="endereco"
                        required
                        value={formData.endereco}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Rua, número, complemento, bairro, cidade, estado, CEP"
                      />
                    </div>
                  </div>
                </div>

                {/* Upload de Documentos */}
                <div>
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-primary">Documentos</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-3" size={48} />
                    <p className="text-gray-600 mb-2">Clique para fazer upload dos documentos</p>
                    <p className="text-sm text-gray-500">ou arraste e solte aqui</p>
                    <input type="file" multiple className="hidden" />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Enviar Pré-Matrícula
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
