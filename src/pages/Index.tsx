import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-inter font-bold text-corporate-gray">CollabSpace</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'services', 'portfolio', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {section === 'hero' ? 'Главная' : 
                   section === 'about' ? 'О нас' :
                   section === 'services' ? 'Услуги' :
                   section === 'portfolio' ? 'Портфолио' :
                   section === 'blog' ? 'Блог' : 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Начать работу
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-inter font-bold text-corporate-gray mb-6 leading-tight">
                Место для
                <span className="text-primary block">командной</span>
                работы
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Объединяйте идеи, управляйте проектами и создавайте вместе. 
                Современная платформа для эффективной коллаборации.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Посмотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  <span>2000+ пользователей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={16} />
                  <span>4.9 рейтинг</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className={`h-12 rounded-lg ${
                      i === 1 ? 'bg-primary' : 
                      i === 3 ? 'bg-accent' : 
                      i === 5 ? 'bg-purple-100' : 'bg-gray-100'
                    } animate-float`} style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-primary/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">О компании</Badge>
            <h2 className="text-4xl font-inter font-bold text-corporate-gray mb-6">
              Работайте вместе,<br />где бы вы ни находились
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем инструменты для современных команд, которые помогают 
              превращать идеи в реальность быстрее и эффективнее.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Users',
                title: 'Командная работа',
                description: 'Совместное редактирование, комментарии и обратная связь в реальном времени.'
              },
              {
                icon: 'Layers',
                title: 'Управление проектами', 
                description: 'Организуйте задачи, отслеживайте прогресс и достигайте целей команды.'
              },
              {
                icon: 'Zap',
                title: 'Интеграции',
                description: 'Подключайте любимые инструменты и работайте в едином пространстве.'
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-inter text-corporate-gray">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Услуги</Badge>
            <h2 className="text-4xl font-inter font-bold text-corporate-gray mb-6">
              Подходит для вашего стиля работы
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  'Brainstorming & Ideas',
                  'Wireframes & Design',
                  'Project Planning',
                  'Team Collaboration',
                  'Progress Tracking'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-lg font-medium text-corporate-gray group-hover:text-primary transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'Lightbulb', label: 'Идеи', color: 'bg-yellow-100 text-yellow-600' },
                  { icon: 'Palette', label: 'Дизайн', color: 'bg-purple-100 text-purple-600' },
                  { icon: 'Calendar', label: 'Планы', color: 'bg-blue-100 text-blue-600' },
                  { icon: 'BarChart', label: 'Аналитика', color: 'bg-green-100 text-green-600' }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon name={item.icon as any} size={32} />
                    </div>
                    <p className="font-medium text-corporate-gray">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-600 border-purple-200">Портфолио</Badge>
            <h2 className="text-4xl font-inter font-bold text-corporate-gray mb-6">
              Созданы для всех типов команд
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Стартапы', description: 'Быстрое прототипирование и тестирование идей', color: 'bg-blue-500' },
              { title: 'Агентства', description: 'Управление клиентскими проектами и командой', color: 'bg-purple-500' },
              { title: 'Корпорации', description: 'Масштабируемые решения для больших команд', color: 'bg-green-500' },
              { title: 'Дизайнеры', description: 'Инструменты для креативного процесса', color: 'bg-pink-500' },
              { title: 'Разработчики', description: 'Техническое планирование и документация', color: 'bg-orange-500' },
              { title: 'Маркетинг', description: 'Кампании и стратегическое планирование', color: 'bg-red-500' }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                <div className={`h-4 ${item.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl font-inter text-corporate-gray group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-600 border-green-200">Блог</Badge>
            <h2 className="text-4xl font-inter font-bold text-corporate-gray mb-6">
              Закройте лишние<br />вкладки — всё<br />уже здесь
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Эффективные методы командной работы',
                description: 'Как организовать процессы для максимальной продуктивности',
                date: '15 июля 2024',
                readTime: '5 мин'
              },
              {
                title: 'Будущее удаленной работы',
                description: 'Тренды и инструменты для распределенных команд',
                date: '12 июля 2024',
                readTime: '7 мин'
              },
              {
                title: 'Дизайн-мышление в продуктах',
                description: 'Как применять принципы UX в разработке',
                date: '8 июля 2024',
                readTime: '4 мин'
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg font-inter text-corporate-gray group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Контакты</Badge>
            <h2 className="text-4xl font-inter font-bold text-corporate-gray mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам команд, которые уже используют наши инструменты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { icon: 'Mail', label: 'Email', value: 'hello@collabspace.com' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                    { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Примерная, д. 1' }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon name={contact.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-corporate-gray">{contact.label}</p>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter text-corporate-gray">Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">Имя</label>
                      <div className="h-10 bg-gray-100 rounded-lg"></div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                      <div className="h-10 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Сообщение</label>
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-corporate-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-inter font-bold">CollabSpace</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Современная платформа для командной работы и управления проектами.
              </p>
            </div>

            {[
              {
                title: 'Продукт',
                links: ['Функции', 'Цены', 'Безопасность', 'API']
              },
              {
                title: 'Компания',
                links: ['О нас', 'Карьера', 'Пресс-кит', 'Партнеры']
              },
              {
                title: 'Поддержка',
                links: ['Помощь', 'Статус', 'Обновления', 'Контакты']
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

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CollabSpace. Все права защищены.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {['Twitter', 'Linkedin', 'Github'].map((social, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name={social as any} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;