import React from "react";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Clock,
  Users,
  Award,
  Wind,
  Thermometer,
  Wrench,
  MessageCircle,
  Mail
} from "lucide-react";

function App() {
  const services = [
    {
      icon: <Wind className="w-8 h-8 text-orange-500" />,
      title: "Instalação de Ar Condicionado",
      description:
        "Instalação profissional de sistemas de ar condicionado residenciais e comerciais com garantia.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      title: "Manutenção Preventiva",
      description:
        "Serviços de manutenção preventiva para garantir o funcionamento eficiente do seu equipamento.",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-orange-500" />,
      title: "Limpeza e Higienização",
      description:
        "Limpeza profunda e higienização completa para manter a qualidade do ar.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Conserto e Reparo",
      description:
        "Diagnóstico e reparo de problemas em sistemas de ar condicionado de todas as marcas.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Jardim da Penha",
      rating: 5,
      text: "Excelente atendimento! Instalaram meu ar condicionado com muita eficiência e limpeza. Recomendo!",
    },
    {
      name: "Maria Santos",
      location: "Praia do Canto",
      rating: 5,
      text: "Profissionais muito competentes. Fizeram a manutenção do meu ar condicionado e ficou como novo. Serviço de qualidade!",
    },
    {
      name: "João Oliveira",
      location: "Centro",
      rating: 5,
      text: "Atendimento rápido e preço justo. Resolveram o problema do meu ar condicionado no mesmo dia. Muito satisfeito!",
    },
  ];

  const whatsappNumber = "5527997647572";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da Faztudo Soluções em Ar Condicionado.";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">
            Faztudo Soluções
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="hover:text-orange-500 transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="hover:text-orange-500 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="hover:text-orange-500 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className="hover:text-orange-500 transition-colors"
            >
              Localização
            </a>
          </nav>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition-colors flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Contato</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 h-[80vh] flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções Completas em
              <span className="text-orange-500"> Ar Condicionado</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Instalação, manutenção e reparo com qualidade e garantia em
              Vitória/ES
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </a>
              <a
                href="#servicos"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-gray-600">
                Atendemos sua solicitação em até 2 horas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipe Qualificada</h3>
              <p className="text-gray-600">
                Técnicos certificados e experientes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
              <p className="text-gray-600">Todos os serviços com garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em ar condicionado para residências
              e empresas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border-t-4 border-orange-500 transition-all hover:-translate-y-5"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Confira os depoimentos de quem já confiou em nossos serviços
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-5 transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-orange-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Atendemos Vitória e toda a Grande Vitória
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-700 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span>
                      R. Francisco Eugênio Mussielo - Jardim da Penha, Vitória -
                      ES, 29060-290
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>(27) 99764-7572</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span>contato@faztudoar.com.br</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">
                    Horário de Atendimento
                  </h4>
                  <p className="text-blue-100">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-blue-100">Sábado: 8h às 12h</p>
                  <p className="text-blue-100">Emergências: 24h</p>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.721490812433!2d-40.29974675641191!3d-20.28244570871855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817f647ab423b%3A0x7bb5f0053d23e322!2sR.%20Francisco%20Eug%C3%AAnio%20Mussielo%20-%20Jardim%20da%20Penha%2C%20Vit%C3%B3ria%20-%20ES%2C%2029060-290!5e0!3m2!1spt-BR!2sbr!4v1752003798350!5m2!1spt-BR!2sbr"
                width="800"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Faztudo Soluções
              </h3>
              <p className="text-gray-300 mb-4">
                Especialistas em ar condicionado com mais de 10 anos de
                experiência no mercado capixaba.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {/* <Facebook className="w-5 h-5" /> */}
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {/* <Instagram className="w-5 h-5" /> */}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Instalação de Ar Condicionado</li>
                <li>Manutenção Preventiva</li>
                <li>Limpeza e Higienização</li>
                <li>Conserto e Reparo</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Regiões Atendidas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Vitória</li>
                <li>Vila Velha</li>
                <li>Serra</li>
                <li>Cariacica</li>
                <li>Viana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Faztudo Soluções em Ar Condicionado. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 shadow-lg transition-all transform hover:scale-110 z-50"
      >
        <img src="/whatsapp.png" alt="" width={70} height={70} />
      </a>
    </div>
  );
}

export default App;
