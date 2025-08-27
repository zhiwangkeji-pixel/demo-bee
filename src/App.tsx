import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Target, Users, MapPin, TrendingUp, BarChart3, Star, ArrowUp, ArrowDown, AlertTriangle, RotateCcw } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

const slides = [
  {
    id: 'cover',
    title: '封面页',
    icon: Home
  },
  {
    id: 'intro',
    title: '项目介绍',
    icon: Target
  },
  {
    id: 'jtbd',
    title: 'JTBD分析',
    icon: Users
  },
  {
    id: 'usermap',
    title: '用户故事地图',
    icon: MapPin
  },
  {
    id: 'kano',
    title: '卡诺模型分析',
    icon: TrendingUp
  },
  {
    id: 'metrics',
    title: '关键指标与成果',
    icon: BarChart3
  },
  {
    id: 'summary',
    title: '总结与展望',
    icon: Star
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Header Navigation */}
      <div className="h-16 bg-black/20 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-lg font-medium">商业计划书</h1>
          <div className="text-blue-300 text-sm">校园订餐案例</div>
        </div>
        
        {/* Slide Navigation */}
        <div className="flex items-center space-x-2">
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <Button
                key={slide.id}
                variant={currentSlide === index ? "default" : "ghost"}
                size="sm"
                onClick={() => goToSlide(index)}
                className={`${
                  currentSlide === index 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                } transition-all duration-200`}
              >
                <IconComponent className="w-4 h-4 mr-1" />
                {slide.title}
              </Button>
            );
          })}
        </div>

        <div className="text-white/60 text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-4rem)] relative">
        {currentSlide === 0 && <CoverSlide />}
        {currentSlide === 1 && <IntroSlide />}
        {currentSlide === 2 && <JTBDSlide />}
        {currentSlide === 3 && <UserMapSlide />}
        {currentSlide === 4 && <KanoSlide />}
        {currentSlide === 5 && <MetricsSlide />}
        {currentSlide === 6 && <SummarySlide />}

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Cover Slide Component
function CoverSlide() {
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            商业计划书
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-2xl text-blue-200 mb-12">
            基于校园订餐案例的产品需求与设计
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">需求分析</h3>
            <p className="text-white/70 text-sm">深入挖掘用户真实需求</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">用户洞察</h3>
            <p className="text-white/70 text-sm">基于数据的用户行为分析</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-white text-lg mb-2">商业价值</h3>
            <p className="text-white/70 text-sm">打造校园生态服务平台</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Project Introduction Slide
function IntroSlide() {
  return (
    <div className="h-full p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">项目介绍</h1>
        
        <div className="space-y-8 h-[calc(100%-6rem)]">
          {/* 网站描述 */}
          <Card className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm border-blue-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
              <h2 className="text-2xl text-white">网站描述</h2>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              一个为在校大学生服务的送餐网站
            </p>
          </Card>

          {/* 项目背景 */}
          <Card className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 backdrop-blur-sm border-purple-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full mr-4"></div>
              <h2 className="text-2xl text-white">项目背景</h2>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              大学生就餐难、排队时间长
            </p>
          </Card>

          {/* 需求分析 */}
          <Card className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-sm border-green-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
              <h2 className="text-2xl text-white">需求分析</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {/* 用户行为 */}
              <div>
                <h3 className="text-xl text-green-300 mb-4">用户行为</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span className="text-white">男生数量 &gt; 女生</span>
                    <div className="flex items-center">
                      <span className="text-green-400 text-2xl mr-2">5</span>
                      <span className="text-white">倍</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span className="text-white">午餐非本人签收率</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-2xl mr-2">80</span>
                      <span className="text-white">%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span className="text-white">晚间订餐量增长</span>
                    <div className="flex items-center">
                      <span className="text-red-400 text-2xl mr-2">1300</span>
                      <span className="text-white">%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 行为分析 */}
              <div>
                <h3 className="text-xl text-green-300 mb-4">行为分析</h3>
                <div className="bg-white/10 rounded-lg p-6 h-full flex items-center">
                  <p className="text-white/90 text-lg leading-relaxed">
                    学生的真实需求不仅是"吃饭"，而是"不想中断当前的娱乐或学习"
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// JTBD Analysis Slide
function JTBDSlide() {
  const pushItems = [
    "去食堂或超市要花时间排队、打包，打断午休或游戏节奏",
    "让室友代买有\"欠人情\"压力，且不稳定",
    "速食选择有限，长期吃不健康",
    "外卖平台送进校园受限，配送慢、到校门口还要自取"
  ];

  const pullItems = [
    "寝室直达：商品直接送到寝室门口，不用中断活动",
    "品类丰富：既能点食堂餐食，又能买超市零食、饮料、生活用品",
    "支付灵活：支持在线支付+货到付款，满足不同用户偏好",
    "流程极简：3步下单，无需反复确认",
    "实时追踪：能看到订单状态，心里有数"
  ];

  const anxietyItems = [
    "担心配送速度慢，导致饭菜凉了",
    "害怕价格高于食堂或超市本价",
    "担心寝室配送不准确（送错寝室/联系不上）",
    "商品质量无法确认（比如饭菜分量、超市商品是否临期）",
    "售后限制（校园商品不支持退货）可能让人犹豫"
  ];

  const habitItems = [
    "已习惯顺路去食堂/超市，认为\"自己买更放心\"",
    "室友之间互相帮带饭，已有稳定的小社交习惯",
    "对速食和外卖已形成固定消费模式，不愿意再学习新平台",
    "部分同学有\"亲自挑选\"的习惯，特别是超市商品（水果、饮料口味）"
  ];

  return (
    <div className="h-full p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">JTBD（Job To Be Done）分析</h1>
        
        <div className="grid grid-cols-2 gap-6 h-[calc(100%-6rem)]">
          {/* 推力 Push */}
          <Card className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm border-red-400/30 p-6">
            <div className="flex items-center mb-6">
              <ArrowUp className="w-8 h-8 text-red-400 mr-3" />
              <div>
                <h3 className="text-xl text-white">推力 Push</h3>
                <p className="text-red-300 text-sm">现状的不满</p>
              </div>
            </div>
            <div className="space-y-3">
              {pushItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* 拉力 Pull */}
          <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border-green-400/30 p-6">
            <div className="flex items-center mb-6">
              <ArrowDown className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h3 className="text-xl text-white">拉力 Pull</h3>
                <p className="text-green-300 text-sm">新方案的吸引</p>
              </div>
            </div>
            <div className="space-y-3">
              {pullItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* 焦虑 Anxiety */}
          <Card className="bg-gradient-to-br from-yellow-600/20 to-orange-800/20 backdrop-blur-sm border-yellow-400/30 p-6">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mr-3" />
              <div>
                <h3 className="text-xl text-white">焦虑 Anxiety</h3>
                <p className="text-yellow-300 text-sm">改变的担忧</p>
              </div>
            </div>
            <div className="space-y-3">
              {anxietyItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* 惯性 Habit */}
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-800/20 backdrop-blur-sm border-blue-400/30 p-6">
            <div className="flex items-center mb-6">
              <RotateCcw className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl text-white">惯性 Habit</h3>
                <p className="text-blue-300 text-sm">习惯的阻力</p>
              </div>
            </div>
            <div className="space-y-3">
              {habitItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// User Story Map Slide
function UserMapSlide() {
  const steps = [
    { title: "快速登录平台", desc: "通过学号或手机号注册/登录，不需要复杂流程，确保能在游戏开始前完成账号绑定，后续下单无需重复输入信息。", icon: "🔐" },
    { title: "寝室内直接浏览商品", desc: "进入首页即可看到食堂和超市的商品列表，可以通过搜索或筛选快速找到想要的食品或日用品，无需出门。", icon: "📱" },
    { title: "查看商品详情", desc: "点击商品后，可查看价格、库存、预计配送时间等关键信息，确认商品是否符合需求。", icon: "🔍" },
    { title: "快速加入购物车并下单", desc: "在游戏中途只需点击\"加入购物车\"或\"立即下单\"，即可完成选购，避免复杂操作，保持流程极简。", icon: "🛒" },
    { title: "填写寝室号与备注", desc: "在订单确认页面，直接选择已保存的寝室地址，或输入寝室号，并备注特殊需求（如\"轻轻敲门即可\"），确保准确送达。", icon: "🏠" },
    { title: "自由选择支付方式", desc: "可选择在线支付或货到付款，满足不同支付偏好，保证体验灵活性。", icon: "💳" },
    { title: "实时查看订单状态", desc: "下单后，可随时查看订单配送进度，如\"已接单 → 配送中 → 已送达\"，避免无谓等待或焦虑。", icon: "📊" },
    { title: "收货后查看订单记录并反馈", desc: "在订单详情页确认收货，查看历史订单，并可对服务提出建议或投诉（如延迟、商品问题）。由于为校园商品，不支持退货，售后以反馈为主。", icon: "📝" }
  ];

  return (
    <div className="h-full p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">用户故事地图</h1>
        
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{step.icon}</span>
                    <h3 className="text-lg text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Kano Model Slide
function KanoSlide() {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">卡诺模型分析</h1>
        
        <div className="grid grid-cols-1 gap-8 h-[calc(100%-8rem)]">
          <Card className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border-red-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
              <h3 className="text-2xl text-white">基本型需求（必备）</h3>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              快速配送、寝室直达、支付便捷
            </p>
          </Card>

          <Card className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 backdrop-blur-sm border-orange-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-orange-500 rounded-full mr-4"></div>
              <h3 className="text-2xl text-white">期望型需求（提升满意度）</h3>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              夜间下单及时响应、零食饮料选择丰富
            </p>
          </Card>

          <Card className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-sm border-green-400/30 p-8">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
              <h3 className="text-2xl text-white">兴奋型需求（惊喜）</h3>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              个性化推荐、边玩游戏边下单的快捷入口
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Metrics Slide
function MetricsSlide() {
  return (
    <div className="h-full p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">关键指标与成果</h1>
        
        <div className="grid grid-cols-2 gap-8 h-[calc(100%-8rem)]">
          <div>
            <h2 className="text-2xl text-blue-300 mb-6">关键指标</h2>
            <div className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">平均配送时长</span>
                  <div className="flex items-center">
                    <span className="text-green-400 text-2xl mr-2">≤</span>
                    <span className="text-white text-xl">15 分钟</span>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">用户留存率</span>
                  <div className="flex items-center">
                    <span className="text-green-400 text-2xl mr-2">≥</span>
                    <span className="text-white text-xl">40%</span>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">夜间活跃订单数提升</span>
                  <div className="flex items-center">
                    <span className="text-green-400 text-2xl mr-2">≥</span>
                    <span className="text-white text-xl">50%</span>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">平均客单价</span>
                  <div className="flex items-center">
                    <TrendingUp className="text-green-400 w-6 h-6 mr-2" />
                    <span className="text-white text-xl">持续增长</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-purple-300 mb-6">预期成果</h2>
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm border-blue-400/30 p-6">
                <div className="flex items-center mb-3">
                  <Target className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-white text-lg">用户体验提升</h3>
                </div>
                <p className="text-white/90">提升学生消费便利性与体验</p>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 backdrop-blur-sm border-purple-400/30 p-6">
                <div className="flex items-center mb-3">
                  <BarChart3 className="text-purple-400 w-6 h-6 mr-3" />
                  <h3 className="text-white text-lg">商业价值</h3>
                </div>
                <p className="text-white/90">提高平台交易额，形成高频流量入口</p>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-sm border-green-400/30 p-6">
                <div className="flex items-center mb-3">
                  <Star className="text-green-400 w-6 h-6 mr-3" />
                  <h3 className="text-white text-lg">生态建设</h3>
                </div>
                <p className="text-white/90">打造校园电商生态闭环</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Summary Slide
function SummarySlide() {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">总结与展望</h1>
        
        <div className="space-y-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">深度分析</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  本商业计划书通过 JTBD、用户故事地图、卡诺模型深入挖掘了学生群体的核心需求
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">💡</span>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">创新体验</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  产品不仅解决"吃饭难"，更创造了"不打断娱乐也能即时消费"的新体验
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">未来展望</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  未来：拓展至学习用品、生活服务，形成校园全场景服务平台
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-8 py-3">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white">感谢观看</span>
            <Star className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}