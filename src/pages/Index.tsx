import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-gray-900">miro</div>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Продукт</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Решения</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Ресурсы</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Сообщество</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Тарифы</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Search" size={20} className="text-gray-500" />
              <Button variant="ghost" className="text-gray-600">Войти</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Бесплатно навсегда
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Место для
                <br />
                <span className="text-blue-600">командной</span>
                <br />
                работы
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Miro помогает командам работать более эффективно — 
                от мозгового штурма и планирования до исследований и дизайна.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Начать бесплатно
              </Button>
              <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                <span>45M+ пользователей</span>
                <span>•</span>
                <span>200K+ команд</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                  Trusted
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
                {/* Miro board mockup */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="h-8 bg-yellow-200 rounded"></div>
                  <div className="h-8 bg-blue-200 rounded"></div>
                  <div className="h-8 bg-purple-200 rounded"></div>
                  <div className="h-8 bg-green-200 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="h-16 bg-orange-100 rounded border-l-4 border-orange-400 p-2">
                      <div className="h-2 bg-orange-300 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-orange-300 rounded w-1/2"></div>
                    </div>
                    <div className="h-12 bg-pink-100 rounded p-2">
                      <div className="h-2 bg-pink-300 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-blue-100 rounded p-2">
                      <div className="h-2 bg-blue-300 rounded w-full mb-1"></div>
                      <div className="h-2 bg-blue-300 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-blue-300 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-14 bg-green-100 rounded p-2">
                      <div className="h-2 bg-green-300 rounded w-2/3 mb-1"></div>
                      <div className="h-2 bg-green-300 rounded w-1/3"></div>
                    </div>
                    <div className="h-10 bg-purple-100 rounded"></div>
                  </div>
                </div>
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <line x1="25%" y1="40%" x2="50%" y2="60%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="50%" y1="30%" x2="75%" y2="50%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4,4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://cdn.poehali.dev/files/3fe07c0a-e03a-40ed-a02c-e4aefd092beb.png" alt="Work" className="rounded-lg w-full h-48 object-cover" />
              <img src="https://cdn.poehali.dev/files/3fe07c0a-e03a-40ed-a02c-e4aefd092beb.png" alt="Team" className="rounded-lg w-full h-48 object-cover" />
              <img src="https://cdn.poehali.dev/files/3fe07c0a-e03a-40ed-a02c-e4aefd092beb.png" alt="Planning" className="rounded-lg w-full h-48 object-cover" />
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex -space-x-2 justify-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  </div>
                  <p className="text-sm font-medium">+50 участников</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Работайте вместе,
                <br />
                где бы вы ни
                <br />
                находились
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Miro дает всем — от начинающих до профессионалов — 
                возможность участвовать в работе команды, делиться 
                идеями и строить будущее вместе, где бы они ни находились.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Закройте лишние
                <br />
                вкладки — всё
                <br />
                уже здесь
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Miro объединяет все ваши инструменты для совместной работы 
                в одном месте, так что команды могут оставаться на связи 
                независимо от расстояния.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Узнать больше
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 relative overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`h-16 rounded-lg ${
                      i === 0 ? 'bg-orange-200' : 
                      i === 2 ? 'bg-blue-200' : 
                      i === 4 ? 'bg-green-200' : 
                      i === 6 ? 'bg-purple-200' : 
                      i === 8 ? 'bg-pink-200' : 'bg-gray-200'
                    }`}></div>
                  ))}
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-500 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Подходит для вашего стиля работы
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {[
              'Мозговой штурм',
              'Диаграммы',
              'Планирование',
              'Исследования',
              'Дизайн-мышление',
              'Стратегическое планирование'
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <Icon name="Lightbulb" size={24} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Miro для команд</h3>
                  <p className="text-gray-600">Визуализируйте, планируйте и создавайте вместе</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Создан для всех типов команд
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Agile-команды',
              'Дизайнеры',
              'Продакт',
              'UX/UI',
              'Консалтинг',
              'Маркетинг'
            ].map((team, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-lg font-medium text-gray-900 mb-2">{team}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Начните с шаблонов
                </h3>
                <p className="text-gray-600 mb-6">
                  Выберите из 300+ готовых шаблонов для быстрого старта 
                  или создайте доску с нуля.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Посмотреть шаблоны
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="h-20 bg-blue-100 rounded mb-3"></div>
                  <p className="text-sm font-medium">Kanban Board</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="h-20 bg-green-100 rounded mb-3"></div>
                  <p className="text-sm font-medium">Mind Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">miro</div>
              <p className="text-gray-400 text-sm">
                Визуальная платформа для инноваций
              </p>
            </div>
            
            {[
              {
                title: 'Продукт',
                links: ['Возможности', 'Безопасность', 'Enterprise', 'Customer stories']
              },
              {
                title: 'Решения',
                links: ['Brainstorming', 'Diagramming', 'Meetings', 'Scrum events']
              },
              {
                title: 'Ресурсы',
                links: ['Help Center', 'Miro Academy', 'Community', 'Developers']
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-medium mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;