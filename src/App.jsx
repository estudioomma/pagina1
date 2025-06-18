import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Camera, Users, Star, CheckCircle, Phone, MessageCircle, Upload, MapPin, Instagram } from 'lucide-react';
import logoOmma from './assets/LOGOPRETA.png';
import iramGuimaraes from './assets/iram_guimaraes.jpg';
import tuannyFavero from './assets/tuanny_favero.jpg';
import thaisFachinello from './assets/thais_fachinello.jpg';
import lucasSangalli from './assets/lucas_sangalli.jpg';
import portfolio1 from './assets/1.jpg';
import portfolio2 from './assets/2.jpg';
import portfolio3 from './assets/3.jpg';
import portfolio4 from './assets/4.jpg';
import portfolio5 from './assets/5.jpg';
import portfolio6 from './assets/6.jpg';
import './App.css';

function App() {
  const whatsappNumber = "5541988708588";

  const msgGeral = encodeURIComponent("Olá! Quero que meus retratos sejam feitos pelo Estúdio OMMA, pode me falar mais sobre como funciona?");
  const msgOmmaId = encodeURIComponent("Olá! Vi o ensaio OMMA ID no site e gostaria de agendar.");
  const msgOmmaSignature = encodeURIComponent("Olá! Vi o ensaio OMMA Signature no site e gostaria de saber mais a respeito");
  const msgOmmaCorporate = encodeURIComponent("Olá! Vi o ensaio OMMA Corporate no site e gostaria de saber mais.");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoOmma} alt="Estúdio Omma" className="h-60 md:h-96 w-auto max-w-none mx-auto" />
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                onClick={() => window.open('https://instagram.com/ommaphotoart', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgGeral}`, '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sua foto de perfil está à altura da sua carreira?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Seu próximo nível profissional começa aqui.
          </p>
          <p className="text-lg text-gray-500 mb-10">
            O Estúdio OMMA transforma sua imagem profissional com retratos que unem arte e essência.
          </p>
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById('solucoes').scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer Soluções
          </Button>
        </div>
      </section>

      <section className="py-16 px-7 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Para quem é este serviço?</h3>
          <p className="text-xl text-gray-600 text-justify mb-12 leading-relaxed">
            É para quem constrói negócios, defende causas ou lidera equipes. É para o <strong>profissional de alto nível</strong> que sabe que a primeira impressão, hoje, acontece online. É para o executivo, advogado ou médico que cansou de usar aquela foto "ok" da última festa da firma e precisa de uma imagem que gere respeito antes mesmo de abrir a boca.   Se você valoriza seu tempo e quer um resultado que te coloque na frente, sem complicação, estamos falando a mesma língua.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sobre o Fotógrafo</h3>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-xl text-gray-600 text-justify leading-relaxed">
                No coração do Estúdio Omma está <strong>Iram Guimarães</strong>, um fotógrafo que vê além da câmera.
                Inspirado pela profundidade estética de Sebastião Salgado, Steve McCurry e outros grandes nomes da fotografia, Iram acredita que cada sessão de fotos é um encontro
                humano, uma troca genuína na qual o fotógrafo e o fotografado compartilham atenção, medos e sonhos. Não é
                apenas sobre um clique, mas sobre sentir o que o outro sente, transformando cada retrato em uma
                narrativa autêntica da sua jornada. É essa conexão que eleva o <strong>retrato profissional</strong> a
                uma obra de arte, um reflexo fiel da sua alma e da sua trajetória.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col">
              <img src={iramGuimaraes} alt="Iram Guimarães" className="w-full h-full aspect-[4/5] object-cover rounded-lg mb-4" />
              <p className="text-sm text-gray-400 italic">
                Iram Guimarães - Fotógrafo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nosso Portfólio</h3>
          <p className="text-xl text-gray-600 mb-16 text-center">Alguns dos nossos trabalhos mais recentes</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group">
              <img
                src={portfolio1}
                alt="Retrato Profissional 1"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src={portfolio2}
                alt="Retrato Profissional 2"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src={portfolio3}
                alt="Retrato Profissional 3"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src={portfolio4}
                alt="Retrato Profissional 4"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src={portfolio5}
                alt="Retrato Profissional 5"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src={portfolio6}
                alt="Retrato Profissional 6"
                className="w-full aspect-[4/5] object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nossas Soluções</h3>
          <p className="text-xl text-gray-600 mb-16 text-center">Escolha a opção ideal para suas necessidades</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 hover:border-gray-300 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-blue-100 text-blue-800">Mais Vendido</Badge>
                <CardTitle className="text-2xl font-bold">OMMA ID</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-700">
                  Sua identidade profissional, resolvida.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-justify">
                  O OMMA ID é a solução direta e de alta qualidade para quem busca retratos impactantes de uso profissional. <strong>Ideal para perfis online</strong>, como Instagram, WhatsApp, LinkedIn, currículos e todas as suas plataformas digitais. Garanta uma imagem que fala por si, com a agilidade e a excelência que você precisa.
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">A partir de R$ 499</div>
                <Button
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgOmmaId}`, '_blank')}
                >
                  Saber Mais e Agendar
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-2 hover:border-gray-300 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-800">Premium</Badge>
                <CardTitle className="text-2xl font-bold">OMMA Signature</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-700">
                  Seu projeto de imagem e personalidade.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-justify">
                  Mais do que fotos, o OMMA Signature é uma experiência artística completa e sob medida. Através de um briefing detalhado, criamos um <strong>roteiro visual exclusivo</strong>, com direção criativa que traduz sua personalidade e seus objetivos em cada imagem. Ideal para quem busca um posicionamento de marca forte e autêntico.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-6">Projetos Sob Consulta</div>
                <Button
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgOmmaSignature}`, '_blank')}
                >
                  Iniciar uma Conversa
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-2 hover:border-gray-300 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-800">Empresas</Badge>
                <CardTitle className="text-2xl font-bold">OMMA Corporate</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-700">
                  Retratos de equipe que refletem a força da sua marca.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-justify">
                  O OMMA Corporate é uma solução personalizada para empresas que desejam padronizar e elevar a imagem de seus colaboradores. Seja no nosso estúdio ou in-loco. Garantimos flexibilidade na formatação da proposta e resultados que fortalecem a identidade visual da sua equipe. Invista na imagem da sua empresa com um <strong>headshot profissional</strong> de alto nível para todos.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</div>
                <Button
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgOmmaCorporate}`, '_blank')}
                >
                  Orçamento para Equipes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Como Funciona</h3>
          <p className="text-xl text-gray-600 mb-16 text-center">Nosso processo é simples, rápido e focado em você</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Contato Inicial</h4>
              <p className="text-gray-600">
                Você entra em contato, conversamos sobre suas necessidades e agendamos a melhor data.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">A Sessão</h4>
              <p className="text-gray-600">
                No dia, o fotógrafo te guia em uma experiência leve e profissional, capturando seus melhores ângulos e expressões.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Entrega Impecável</h4>
              <p className="text-gray-600">
                Você recebe suas fotos com tratamento PRO em meios digitais, prontas para impressionar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-16 text-center">O que nossos clientes dizem</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {index === 1 && <img src={tuannyFavero} alt="Tuanny Fávero" className="w-20 aspect-[4/5] rounded-lg object-cover" />}
                    {index === 2 && <img src={thaisFachinello} alt="Thais Fachinello" className="w-20 aspect-[4/5] rounded-lg object-cover" />}
                    {index === 3 && <img src={lucasSangalli} alt="Lucas Sangalli" className="w-20 aspect-[4/5] rounded-lg object-cover" />}
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    {index === 1 && "Desde 2021, o Iram tem sido o responsável por transformar os meus momentos em memória. Não é só sobre fotografia… é sobre confiar em alguém que consegue de alguma forma mágica, captar o que os olhos nem sempre veem, mas o coração sente. Em cada clique: cuidado, paciência e um olhar que transforma. Com talento e sensibilidade, ele tem deixado um rastro bonito de memórias para mim, para quem vê as fotografias e por onde ele passa."}
                    {index === 2 && "O Iram foi um excelente fotógrafo, além de me deixar muito a vontade, também deu várias dicas para que as fotos saíssem no tom da imagem que eu gostaria de transmitir, gostei muito do seu trabalho e talento. Com certeza a nota é 10/10."}
                    {index === 3 && "Esse foi o primeiro ensaio fotográfico em que realmente me senti à vontade diante das câmeras. Quando decidi fazer as fotos com o Iram, foi com o objetivo de fortalecer meu posicionamento pessoal e profissional — e o resultado superou todas as minhas expectativas. O olhar sensível, a direção segura e o ambiente acolhedor que ele proporciona fizeram toda a diferença. As fotos traduzem exatamente quem eu sou e a imagem que quero transmitir. Foi uma experiência marcante e transformadora."}
                  </p>
                  <p className="font-semibold text-gray-900 text-center">
                    {index === 1 && "Tuanny Fávero"}
                    {index === 2 && "Thais Fachinello"}
                    {index === 3 && "Lucas Sangalli"}
                  </p>
                  <p className="text-sm text-gray-400 text-center mt-1 italic">
                    {index === 1 && "Arquiteta"}
                    {index === 2 && "Advogada"}
                    {index === 3 && "Arquiteto"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nossa Localização</h3>
          <p className="text-xl text-gray-600 mb-12 text-center">Venha nos visitar no coração do Bigorrilho</p>
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-gray-600" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h4>
                <p className="text-gray-600 text-lg">
                  Rua Padre Anchieta, 2285<br />
                  Bigorrilho<br />
                  Curitiba/PR
                </p>
              </div>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800"
                onClick={() => window.open('https://maps.google.com/?q=Rua+Padre+Anchieta,+2285,+Bigorrilho,+Curitiba,+PR', '_blank')}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Ver no Google Maps
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgGeral}`, '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Sua imagem é seu maior ativo.
          </h3>
          <p className="text-xl mb-8">Invista nela com o Estúdio Omma.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${msgGeral}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Quero meu Retrato Profissional
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
              onClick={() => window.open('https://instagram.com/ommaphotoart', '_blank')}
            >
              <Instagram className="h-5 w-5 mr-2" />
              Siga no Instagram
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={logoOmma} alt="Estúdio Omma" className="h-32 w-auto filter invert max-w-none" />
          </div>
          <p className="text-gray-400 mb-2">Retratos profissionais em Curitiba</p>
          <p className="text-gray-400 text-sm">
            Rua Padre Anchieta, 2285 - Bigorrilho - Curitiba/PR
          </p>
          <p className="text-gray-400 text-sm mt-2">
            WhatsApp: (41) 98870-8588
          </p>
          <div className="flex justify-center mt-4">
            <Button
              variant="ghost"
              className="text-pink-400 hover:text-pink-300"
              onClick={() => window.open('https://instagram.com/ommaphotoart', '_blank')}
            >
              <Instagram className="h-5 w-5 mr-2" />
              @ommaphotoart
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;