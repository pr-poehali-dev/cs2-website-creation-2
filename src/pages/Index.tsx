import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const playerStats = [
    { name: "s1mple", kd: "1.35", rating: "1.28", matches: "156", team: "NAVI" },
    { name: "ZywOo", kd: "1.31", rating: "1.26", matches: "142", team: "G2" },
    { name: "sh1ro", kd: "1.24", rating: "1.19", matches: "134", team: "C9" },
    { name: "device", kd: "1.22", rating: "1.17", matches: "128", team: "Astralis" }
  ];

  const skinItems = [
    { name: "AK-47 Redline", price: "€47.50", rarity: "Classified", condition: "Field-Tested" },
    { name: "AWP Dragon Lore", price: "€2,450.00", rarity: "Covert", condition: "Factory New" },
    { name: "M4A4 Howl", price: "€1,280.00", rarity: "Contraband", condition: "Minimal Wear" },
    { name: "Karambit Fade", price: "€890.00", rarity: "★ Covert", condition: "Factory New" }
  ];

  const merchItems = [
    { name: "CS2 Gaming Chair", price: "€299.99", image: "/placeholder.svg" },
    { name: "Механическая клавиатура", price: "€149.99", image: "/placeholder.svg" },
    { name: "Gaming Headset Pro", price: "€89.99", image: "/placeholder.svg" },
    { name: "CS2 Mousepad XL", price: "€24.99", image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark font-roboto">
      {/* Navigation */}
      <nav className="border-b border-neon-green/20 bg-gaming-darker/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <img src="/img/52874239-4bbb-4602-9c34-53273b7b2f89.jpg" alt="CS2 Logo" className="w-10 h-10 rounded" />
                <span className="text-2xl font-oswald font-bold text-neon-green animate-neon-glow">CS2 GAMING</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-neon-green transition-colors">Главная</a>
                <a href="#" className="text-white hover:text-neon-pink transition-colors">Новости</a>
                <a href="#" className="text-white hover:text-neon-blue transition-colors">Статистика</a>
                <a href="#" className="text-white hover:text-neon-green transition-colors">Игроки</a>
              </div>
            </div>
            <Button className="bg-neon-green text-black hover:bg-neon-green/80 font-bold">
              <Icon name="ShoppingCart" size={20} />
              Магазин
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-6 animate-glitch">
              COUNTER-STRIKE 2
            </h1>
            <div className="text-4xl font-oswald text-transparent bg-gradient-to-r from-neon-green via-neon-pink to-neon-blue bg-clip-text mb-8 animate-float">
              КИБЕРСПОРТ АРЕНА
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Следите за профессиональными матчами, статистикой игроков и покупайте эксклюзивные скины в нашем магазине
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/80 font-bold text-lg px-8">
                <Icon name="Play" size={24} />
                Смотреть матчи
              </Button>
              <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-bold text-lg px-8">
                <Icon name="TrendingUp" size={24} />
                Статистика
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-dark/50 to-gaming-dark pointer-events-none"></div>
      </section>

      {/* Player Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-white mb-4">
              <Icon name="Users" size={36} className="inline mr-3 text-neon-blue" />
              ТОП ИГРОКИ
            </h2>
            <p className="text-gray-400 text-lg">Лучшие профессиональные игроки мира</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playerStats.map((player, index) => (
              <Card key={index} className="bg-gaming-darker border-neon-green/30 p-6 hover:border-neon-green transition-all hover:animate-neon-glow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-oswald font-bold text-white mb-2">{player.name}</h3>
                  <Badge className="bg-neon-pink/20 text-neon-pink mb-4">{player.team}</Badge>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>K/D:</span>
                      <span className="text-neon-green font-bold">{player.kd}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Рейтинг:</span>
                      <span className="text-neon-blue font-bold">{player.rating}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Матчи:</span>
                      <span className="text-white font-bold">{player.matches}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skins Shop Section */}
      <section className="py-16 px-6 bg-gaming-darker/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-white mb-4">
              <Icon name="Sparkles" size={36} className="inline mr-3 text-neon-pink" />
              МАГАЗИН СКИНОВ
            </h2>
            <p className="text-gray-400 text-lg">Эксклюзивные скины для вашего инвентаря</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skinItems.map((skin, index) => (
              <Card key={index} className="bg-gaming-dark border-neon-pink/30 overflow-hidden hover:border-neon-pink transition-all hover:scale-105">
                <div className="p-6">
                  <div className="h-32 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Zap" size={48} className="text-neon-pink" />
                  </div>
                  <h3 className="text-lg font-oswald font-bold text-white mb-2">{skin.name}</h3>
                  <Badge className="bg-neon-blue/20 text-neon-blue mb-2">{skin.rarity}</Badge>
                  <p className="text-sm text-gray-400 mb-4">{skin.condition}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-neon-green">{skin.price}</span>
                    <Button size="sm" className="bg-neon-pink hover:bg-neon-pink/80 text-black font-bold">
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-white mb-4">
              <Icon name="Package" size={36} className="inline mr-3 text-neon-green" />
              ИГРОВОЙ МЕРЧ
            </h2>
            <p className="text-gray-400 text-lg">Профессиональное игровое оборудование</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchItems.map((item, index) => (
              <Card key={index} className="bg-gaming-darker border-neon-blue/30 overflow-hidden hover:border-neon-blue transition-all hover:animate-float">
                <div className="aspect-square bg-gradient-to-br from-neon-blue/20 to-neon-green/20 flex items-center justify-center">
                  <Icon name="Gamepad2" size={64} className="text-neon-blue" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-oswald font-bold text-white mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-neon-blue">{item.price}</span>
                    <Button size="sm" className="bg-neon-green hover:bg-neon-green/80 text-black font-bold">
                      <Icon name="ShoppingBag" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 bg-gaming-darker/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-white mb-4">
              <Icon name="Newspaper" size={36} className="inline mr-3 text-neon-pink" />
              ПОСЛЕДНИЕ НОВОСТИ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gaming-dark border-neon-green/30 overflow-hidden hover:border-neon-green transition-all">
              <div className="h-48 bg-gradient-to-br from-neon-green/30 to-gaming-darker flex items-center justify-center">
                <img src="/img/d1ecb5a9-e61a-4629-9fc0-920bfbb65645.jpg" alt="News" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <Badge className="bg-neon-green/20 text-neon-green mb-3">Обновления</Badge>
                <h3 className="text-xl font-oswald font-bold text-white mb-3">Новые скины в CS2</h3>
                <p className="text-gray-400 mb-4">Valve представила новую коллекцию скинов для оружия...</p>
                <Button variant="ghost" className="text-neon-green hover:text-neon-green/80 p-0">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="bg-gaming-dark border-neon-pink/30 overflow-hidden hover:border-neon-pink transition-all">
              <div className="h-48 bg-gradient-to-br from-neon-pink/30 to-gaming-darker flex items-center justify-center">
                <Icon name="Trophy" size={96} className="text-neon-pink" />
              </div>
              <div className="p-6">
                <Badge className="bg-neon-pink/20 text-neon-pink mb-3">Турниры</Badge>
                <h3 className="text-xl font-oswald font-bold text-white mb-3">Major Championship 2024</h3>
                <p className="text-gray-400 mb-4">Стартует самый крупный турнир года с призовым фондом $1M...</p>
                <Button variant="ghost" className="text-neon-pink hover:text-neon-pink/80 p-0">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>

            <Card className="bg-gaming-dark border-neon-blue/30 overflow-hidden hover:border-neon-blue transition-all">
              <div className="h-48 bg-gradient-to-br from-neon-blue/30 to-gaming-darker flex items-center justify-center">
                <Icon name="Settings" size={96} className="text-neon-blue" />
              </div>
              <div className="p-6">
                <Badge className="bg-neon-blue/20 text-neon-blue mb-3">Патчи</Badge>
                <h3 className="text-xl font-oswald font-bold text-white mb-3">Патч 1.2.5 - Баланс</h3>
                <p className="text-gray-400 mb-4">Исправления баланса оружия и новые античит меры...</p>
                <Button variant="ghost" className="text-neon-blue hover:text-neon-blue/80 p-0">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-darker border-t border-neon-green/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/img/52874239-4bbb-4602-9c34-53273b7b2f89.jpg" alt="CS2 Logo" className="w-8 h-8 rounded" />
                <span className="text-xl font-oswald font-bold text-neon-green">CS2 GAMING</span>
              </div>
              <p className="text-gray-400">Лучшая платформа для киберспорта</p>
            </div>
            <div>
              <h4 className="text-white font-oswald font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-green transition-colors">Матчи</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-oswald font-bold mb-4">Магазин</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-neon-pink transition-colors">Скины</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Мерч</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-oswald font-bold mb-4">Контакты</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-neon-blue hover:text-neon-blue/80">
                  <Icon name="MessageSquare" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-neon-pink hover:text-neon-pink/80">
                  <Icon name="Heart" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-neon-green hover:text-neon-green/80">
                  <Icon name="Share2" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-neon-green/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CS2 Gaming. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;