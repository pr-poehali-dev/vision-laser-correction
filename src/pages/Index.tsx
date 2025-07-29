import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const LaserVisionLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    vision: '',
    problems: [],
    glasses: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (problem: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      problems: checked 
        ? [...prev.problems, problem]
        : prev.problems.filter(p => p !== problem)
    }));
  };

  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-blue to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-inter text-5xl font-bold mb-6 leading-tight">
                Лазерная коррекция зрения
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Современные технологии для идеального зрения. 
                Безопасно, быстро и эффективно.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-2" size={20} />
                  <span>15 минут</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="mr-2" size={20} />
                  <span>100% безопасно</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" className="mr-2" size={20} />
                  <span>Гарантия</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/d2176bdc-98e4-4eea-b1ee-e364d8c28226.jpg" 
                alt="Лазерная коррекция зрения"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Form */}
      <section className="py-16 bg-medical-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
                Предварительная диагностика зрения
              </h2>
              <p className="text-lg text-gray-600">
                Ответьте на несколько вопросов, чтобы мы могли подготовить для вас персональное предложение
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-inter">Расскажите о своем зрении</CardTitle>
                <CardDescription>
                  Все данные конфиденциальны и используются только для подбора оптимального метода коррекции
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Возраст *</Label>
                    <Input 
                      id="age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="30"
                    />
                  </div>
                </div>

                <div>
                  <Label>Используете ли вы очки или линзы?</Label>
                  <RadioGroup 
                    value={formData.glasses} 
                    onValueChange={(value) => handleInputChange('glasses', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="glasses" id="glasses" />
                      <Label htmlFor="glasses">Очки</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lenses" id="lenses" />
                      <Label htmlFor="lenses">Контактные линзы</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both">И то, и другое</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">Не использую</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Какие проблемы со зрением вас беспокоят?</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {[
                      'Близорукость',
                      'Дальнозоркость', 
                      'Астигматизм',
                      'Сухость глаз',
                      'Усталость глаз',
                      'Плохое зрение в темноте'
                    ].map((problem) => (
                      <div key={problem} className="flex items-center space-x-2">
                        <Checkbox 
                          id={problem}
                          checked={formData.problems.includes(problem)}
                          onCheckedChange={(checked) => handleCheckboxChange(problem, checked as boolean)}
                        />
                        <Label htmlFor={problem}>{problem}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="vision">Примерная острота зрения (если знаете)</Label>
                  <Input 
                    id="vision"
                    value={formData.vision}
                    onChange={(e) => handleInputChange('vision', e.target.value)}
                    placeholder="Например: -2.5, +1.0"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Расскажите о других особенностях вашего зрения или вопросах"
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-medical-blue hover:bg-blue-700 text-white" size="lg">
                  Получить персональную консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
              Преимущества лазерной коррекции
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Современные методы лазерной коррекции обеспечивают высокую точность и безопасность процедуры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Быстрая процедура',
                description: 'Коррекция занимает всего 10-15 минут на оба глаза'
              },
              {
                icon: 'Eye',
                title: 'Высокая точность',
                description: 'Современное оборудование обеспечивает точность до микрона'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Минимальные риски при соблюдении всех рекомендаций'
              },
              {
                icon: 'Clock',
                title: 'Быстрое восстановление',
                description: 'Возвращение к обычной жизни уже через несколько дней'
              },
              {
                icon: 'TrendingUp',
                title: 'Стабильный результат',
                description: 'Долгосрочный эффект без необходимости повторных процедур'
              },
              {
                icon: 'DollarSign',
                title: 'Экономичность',
                description: 'Окупается за 2-3 года по сравнению с очками и линзами'
              }
            ].map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} className="text-white" size={24} />
                  </div>
                  <h3 className="font-inter font-semibold text-xl mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-16 bg-medical-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
              Как проходит процедура
            </h2>
            <p className="text-lg text-gray-600">
              Простые шаги к идеальному зрению
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Консультация и диагностика',
                  description: 'Полное обследование глаз на современном оборудовании для определения оптимального метода коррекции',
                  icon: 'Search'
                },
                {
                  step: '02', 
                  title: 'Подготовка к операции',
                  description: 'Закапывание анестезирующих капель и фиксация век для обеспечения комфорта пациента',
                  icon: 'Droplets'
                },
                {
                  step: '03',
                  title: 'Лазерная коррекция',
                  description: 'Точное воздействие лазера на роговицу глаза в течение нескольких минут',
                  icon: 'Zap'
                },
                {
                  step: '04',
                  title: 'Восстановление',
                  description: 'Наблюдение в клинике и получение рекомендаций по послеоперационному уходу',
                  icon: 'Heart'
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Icon name={step.icon} className="text-medical-blue mr-3" size={24} />
                      <h3 className="font-inter font-semibold text-xl">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
              Наши врачи
            </h2>
            <p className="text-lg text-gray-600">
              Опытные офтальмологи с многолетним стажем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Иванов Алексей Петрович',
                position: 'Главный врач-офтальмолог',
                experience: '15 лет опыта',
                operations: '5000+ операций'
              },
              {
                name: 'Петрова Елена Михайловна',
                position: 'Врач-офтальмолог',
                experience: '12 лет опыта',
                operations: '3500+ операций'
              },
              {
                name: 'Сидоров Михаил Александрович',
                position: 'Врач-офтальмолог',
                experience: '10 лет опыта',
                operations: '2800+ операций'
              }
            ].map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src="/img/5951311b-52b6-49b9-a75b-4c4212b10cfd.jpg"
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-inter font-semibold text-xl mb-2">{doctor.name}</h3>
                  <p className="text-medical-blue font-medium mb-2">{doctor.position}</p>
                  <div className="space-y-1 text-gray-600">
                    <p>{doctor.experience}</p>
                    <p>{doctor.operations}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 bg-medical-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
              Цены на лазерную коррекцию
            </h2>
            <p className="text-lg text-gray-600">
              Прозрачная стоимость без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'LASIK',
                description: 'Классический метод коррекции',
                price: '45 000',
                features: [
                  'Быстрое восстановление',
                  'Минимальный дискомфорт',
                  'Подходит для большинства пациентов',
                  'Гарантия 1 год'
                ]
              },
              {
                title: 'Femto-LASIK',
                description: 'Современная технология',
                price: '65 000',
                features: [
                  'Максимальная точность',
                  'Бесконтактная процедура',
                  'Подходит для тонкой роговицы',
                  'Гарантия 2 года'
                ],
                popular: true
              },
              {
                title: 'SMILE',
                description: 'Инновационный метод',
                price: '85 000',
                features: [
                  'Минимальное вмешательство',
                  'Самое быстрое восстановление',
                  'Подходит для активного образа жизни',
                  'Пожизненная гарантия'
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-medical-blue border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-medical-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-inter text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-medical-blue mt-4">
                    {plan.price} ₽
                  </div>
                  <p className="text-sm text-gray-500">за оба глаза</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" className="text-green-500 mr-3" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-medical-blue hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-lg text-gray-600">
              Истории успешных операций наших пациентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Анна Сергеева',
                age: '28 лет',
                rating: 5,
                text: 'Делала LASIK два года назад. Результат превзошел все ожидания! Забыла про очки навсегда. Процедура прошла быстро и безболезненно.'
              },
              {
                name: 'Дмитрий Козлов',
                age: '35 лет', 
                rating: 5,
                text: 'Выбрал Femto-LASIK. Очень доволен результатом. Врачи профессиональны, оборудование современное. Рекомендую всем, кто сомневается.'
              },
              {
                name: 'Мария Волкова',
                age: '42 года',
                rating: 5,
                text: 'После операции SMILE вижу лучше, чем когда-либо в жизни. Восстановление прошло легко. Спасибо команде профессионалов!'
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.age}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-medical-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-inter text-3xl font-bold text-medical-gray mb-4">
                Контакты и запись
              </h2>
              <p className="text-lg text-gray-600">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-inter text-xl font-semibold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="MapPin" className="text-medical-blue mr-3" size={20} />
                    <span>г. Москва, ул. Медицинская, д. 15</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-medical-blue mr-3" size={20} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-medical-blue mr-3" size={20} />
                    <span>info@lasereye.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="text-medical-blue mr-3" size={20} />
                    <span>Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Как добраться</h4>
                  <p className="text-gray-600">
                    Метро "Парк Культуры", выход №2, далее 5 минут пешком. 
                    Рядом есть парковка для автомобилей.
                  </p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="font-inter">Быстрая запись</CardTitle>
                  <CardDescription>
                    Оставьте заявку и мы перезвоним в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя *</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон *</Label>
                    <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea 
                      id="contact-message" 
                      placeholder="Удобное время для звонка или вопросы"
                      rows={3}
                    />
                  </div>
                  <Button className="w-full bg-medical-blue hover:bg-blue-700 text-white">
                    Записаться на консультацию
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaserVisionLanding;