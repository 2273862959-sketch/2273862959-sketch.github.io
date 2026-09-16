export const github = 'https://github.com/2273862959-sketch';
export const projects = [
  {
    id: 'affectlens', name: 'AffectLens', zhName: 'AffectLens · 表情识别', category: ['Machine learning', '机器学习'], image: 'affectlens.png',
    subtitle: ['Facial expression recognition with a sense of uncertainty.', '让表情识别理解自身的不确定性。'],
    description: ['A seven-class facial expression system connecting model training, calibrated confidence and real-time visual feedback.', '将模型训练、置信度校准与实时可视化连接起来的七分类人脸表情识别系统。'],
    tags: ['PyTorch', 'ResNet-18', 'FastAPI', 'OpenCV'], status: ['Research & application', '研究与应用'],
    metric: ['71.58%', 'v2 test accuracy', 'v2 测试准确率'],
    problem: ['A confident prediction is not necessarily a reliable one. Expression datasets contain noisy labels and uneven class distributions, while camera inputs vary in lighting, size and blur.', '高置信度不一定意味着可靠。表情数据存在标签噪声与类别不均衡，摄像头输入也受到光照、人脸尺寸和模糊程度影响。'],
    method: [
      ['Train an ImageNet-pretrained ResNet-18 with FER+ vote blending, class-balanced focal loss and image augmentation.', '使用 ImageNet 预训练 ResNet-18，结合 FER+ 投票标签、类别平衡 focal loss 与图像增强进行训练。'],
      ['Fit temperature scaling on the validation split. Combine image quality and prediction confidence to abstain on unreliable inputs.', '在验证集上进行温度缩放，将画面质量与模型置信度结合，对不可靠输入返回“不确定”。'],
      ['Connect expression probabilities and valence/arousal estimates to a real-time dashboard, temporal smoothing and Grad-CAM explanations.', '将表情概率、效价与唤醒度估计接入实时面板，并加入时间平滑和 Grad-CAM 可解释性展示。']
    ],
    outcome: ['The recorded balanced ResNet-18 v2 experiment achieved 71.58% accuracy and 70.33% macro-F1 on 3,589 FER2013 PrivateTest images. These figures describe that saved experiment, not every later checkpoint or real-world camera condition.', '已保存的平衡 ResNet-18 v2 实验在 FER2013 PrivateTest 的 3,589 张图片上取得 71.58% 准确率与 70.33% macro-F1。这些指标对应该次实验，不代表所有后续权重或真实摄像头场景。'],
    scope: ['The application estimates visible expression patterns, not a person’s true internal emotions. Inference runs locally; the portfolio does not access a visitor’s camera.', '应用估计的是可见表情模式，不能据此确定人的真实内心情绪。推理在本地运行，作品集页面不访问访客摄像头。'],
    links: [['Source code', '项目源码', `${github}/AffectLens`], ['Recorded evaluation', '实验记录', `${github}/AffectLens/blob/main/results/resnet18-balanced-s42.json`], ['Model releases', '模型下载', `${github}/AffectLens/releases`]],
    figures: [['confusion-matrix.png', 'Saved evaluation visualization · see the repository for experiment context', '已保存的评估可视化 · 实验背景见项目仓库']]
  },
  {
    id: 'mevidon', name: 'Mevidon', zhName: 'Mevidon · SEO 与网站工程', category: ['Web engineering', '网站工程'], image: 'mevidon.png',
    subtitle: ['A product catalogue built for discovery.', '面向搜索发现的产品网站。'],
    description: ['An international veterinary-equipment website bringing product information architecture, technical SEO and inquiry workflows into one system.', '面向国际市场的兽医设备网站，将产品信息架构、技术 SEO 和询盘流程整合为完整系统。'],
    tags: ['TypeScript', 'React', 'SEO / GEO', 'Cloudflare D1'], status: ['Industry project', '商业项目'],
    metric: ['8', 'product categories', '产品主分类'],
    problem: ['A technical product catalogue must help both customers and search engines understand the relationships between categories, equipment families and individual models.', '技术产品目录需要帮助客户和搜索引擎理解主分类、设备家族与具体型号之间的关系。'],
    method: [
      ['Build a consistent category → family → model structure, with aligned navigation, breadcrumbs and sitemap entries.', '建立一致的“分类 → 家族 → 型号”结构，同步导航、面包屑与 sitemap。'],
      ['Translate approved product materials into structured collection pages, buying guides, FAQs and crawlable content.', '将经过确认的产品材料整理为结构化集合页、选购指南、FAQ 与可抓取内容。'],
      ['Connect product-specific inquiries with persistent storage, a sign-in-gated staff inbox and a customer follow-up thread.', '将产品询盘连接到持久化存储、需要登录的工作人员收件箱与客户跟进会话。']
    ],
    outcome: ['The delivered architecture covers eight product categories, structured product collections and a working inquiry flow. This case study documents implementation; it does not claim unverified traffic, ranking or sales increases.', '已交付的架构覆盖八个产品主分类、结构化产品集合与询盘流程。本案例展示工程实现，不声称未经验证的流量、排名或销售增长。'],
    scope: ['Public case study of a commercial website. Source code and customer inquiry records remain private.', '商业网站的公开案例展示。源代码与客户询盘记录保持私有。'],
    links: [['Visit Mevidon', '访问 Mevidon', 'https://www.mevidon.com/'], ['Product catalogue', '产品目录', 'https://www.mevidon.com/products']]
  },
  {
    id: 'plants-vs-zombies', name: 'Plants vs. Zombies', zhName: '植物大战僵尸 · C++', category: ['Game development', '游戏开发'], image: 'pvz.png',
    subtitle: ['A desktop tower-defense game, frame by frame.', '从逐帧动画到完整塔防循环。'],
    description: ['A C++17 and EasyX course project exploring grid placement, projectile collisions, zombie state transitions and resource management.', '基于 C++17 与 EasyX 的课程项目，实践网格种植、弹道碰撞、僵尸状态转换与资源管理。'],
    tags: ['C++17', 'EasyX', 'Win32', 'Game loop'], status: ['Course project', '课程项目'], metric: ['3', 'zombie types', '僵尸类型'],
    problem: ['A playable tower-defense loop needs predictable input handling, animation timing, collision logic and object lifetimes.', '可玩的塔防循环需要稳定的输入处理、动画计时、碰撞逻辑与对象生命周期管理。'],
    method: [
      ['Represent plants, projectiles and zombie variants using C++ objects; map mouse input to a lawn grid and conveyor cards.', '用 C++ 对象表达植物、子弹和僵尸变体，将鼠标输入映射到草坪网格与传送带卡片。'],
      ['Implement normal and frozen projectiles, attack animations, damage states and time-dependent enemy spawning.', '实现普通与寒冰子弹、攻击动画、受损状态及随时间变化的刷怪逻辑。'],
      ['Repair out-of-bounds animation access, erase-while-iterating issues and image resource leaks; provide a reproducible build script.', '修复动画越界、遍历删除和图像资源泄漏问题，并提供可复现构建脚本。']
    ],
    outcome: ['The published Windows project builds with C++17 and includes a runtime asset check. Four plant types appear in the conveyor level; seven plant classes and their assets are retained for extension.', '公开的 Windows 项目支持 C++17 构建并提供运行素材检查。传送带关卡投放四类植物，代码保留七类植物及相关素材以便扩展。'],
    scope: ['A non-commercial fan-made course project. Plants vs. Zombies artwork, audio and trademarks belong to their respective rights holders.', '非商业同人课程项目。《植物大战僵尸》的美术、音频及商标归相应权利人所有。'],
    links: [['Source & build guide', '源码与构建指南', `${github}/Plants-vs-Zombies-Cpp`]]
  },
  {
    id: 'garden-guardian', name: 'Garden Guardian', zhName: '田园守护', category: ['Interactive systems', '交互系统'], image: 'garden.png',
    subtitle: ['Twenty levels. One garden to protect.', '二十道关卡，守护一片田园。'],
    description: ['A mobile-first browser tower-defense game with upgradeable crop towers, enemy waves, speed controls and local progress.', '手机端优先的浏览器塔防游戏，包含作物升级、怪物波次、速度控制和本地进度保存。'],
    tags: ['JavaScript', 'HTML Canvas', 'Local storage', 'Responsive UI'], status: ['Playable in browser', '浏览器可玩'], metric: ['20', 'playable levels', '可玩关卡'],
    problem: ['Make strategic tower placement and wave management comfortable on a small screen without requiring installation.', '在小屏幕上提供清晰的塔位选择与波次管理体验，让玩家无需安装即可游玩。'],
    method: [
      ['Design five crop-tower archetypes, including area damage, slow effects, armor breaking and chain attacks.', '设计五类作物塔，覆盖范围伤害、减速、破甲与连锁攻击。'],
      ['Implement a 20-level progression with multiple enemy types, tower upgrades, restart, pause and three game speeds.', '实现二十关进度、多类敌人、塔升级、重开、暂停与三档游戏速度。'],
      ['Store progress in the browser and adapt the interface to touch input and mobile layouts.', '在浏览器本地保存进度，适配触屏操作与移动端布局。']
    ],
    outcome: ['A self-contained browser game that can be distributed through static hosting. Level progress stays on the player’s device.', '可通过静态托管分发的浏览器游戏，关卡进度保存在玩家设备上。'],
    scope: ['The account and save system is a local prototype, not a cloud authentication service. Saves do not synchronize across devices.', '账户与存档是本地原型，并非云端身份认证服务，进度不会跨设备同步。'],
    links: [['Play the game', '在线试玩', 'https://2273862959-sketch.github.io/garden-guardian/'], ['Source code', '项目源码', `${github}/garden-guardian`]]
  },
  {
    id: 'xuanjing', name: 'Xuanjing Tarot', zhName: '玄镜塔罗', category: ['AI applications', 'AI 应用'], image: 'tarot.png',
    subtitle: ['An interactive space for reflection.', '用于自我探索的交互式卡牌应用。'],
    description: ['A card-based PWA combining structured local interpretations, multiple spreads and an optional server-side language-model workflow.', '将本地规则解读、多种牌阵与可选服务端语言模型流程结合的卡牌 PWA。'],
    tags: ['TypeScript', 'PWA', 'Server-side AI', 'Product design'], status: ['Private application', '私有应用'], metric: ['78', 'cards in the system', '完整牌组'],
    problem: ['Combine a coherent card interaction with interpretable local results and optional AI assistance, while keeping service keys out of the browser.', '将完整卡牌交互、本地可解释结果与可选 AI 辅助结合，并避免在浏览器中暴露服务密钥。'],
    method: [
      ['Model 78 Rider–Waite–Smith cards, upright/reversed states and one-, three- and five-card spreads.', '建立 78 张 Rider–Waite–Smith 卡牌、正逆位与一／三／五张牌阵的数据模型。'],
      ['Provide local rule-based interpretation and device-local history, with optional server-side AI interpretation.', '提供本地规则解读与设备历史记录，可选接入服务端 AI 解读。'],
      ['Implement installable PWA behavior and keep API calls out of the offline cache.', '实现可安装的 PWA 体验，并将 API 调用排除在离线缓存之外。']
    ],
    outcome: ['A functional application prototype with a complete deck and two interpretation paths. This portfolio presents the product; the private deployment is not advertised as an open demo.', '具有完整牌组和两条解读路径的应用原型。此处展示产品案例，当前私有部署不作为公开试玩入口。'],
    scope: ['Designed for reflection and entertainment. It does not provide deterministic predictions or professional advice. Source code remains private.', '面向自我探索与娱乐，不提供确定性预言或专业意见。源码保持私有。'], links: []
  },
  {
    id: 'particle-bouquet', name: 'Particle Bouquet', zhName: '七夕 · 粒子玫瑰', category: ['Creative coding', '创意编程'], image: '',
    subtitle: ['Flowers composed of moving points.', '用运动的粒子描绘花束。'],
    description: ['An interactive particle bouquet with rotation, zoom and blooming animation, designed to be shared as a self-contained webpage.', '支持旋转、缩放和绽放动画的交互粒子花束，以独立网页形式分享。'],
    tags: ['JavaScript', 'Particles', 'Animation', 'Touch interaction'], status: ['Interactive demo', '交互演示'], metric: ['360°', 'interactive rotation', '交互旋转'],
    problem: ['Create a lightweight visual experience that feels responsive on both mouse and touch devices.', '让轻量的视觉体验同时适应鼠标与触屏设备。'],
    method: [
      ['Use particles to represent the bouquet and animate the blooming sequence.', '用粒子表达花束形态并实现绽放序列动画。'],
      ['Support drag rotation, wheel or pinch zoom, replay and fullscreen viewing.', '支持拖动旋转、滚轮或双指缩放、动画重播与全屏浏览。']
    ],
    outcome: ['A publicly accessible static webpage, with interaction and rendering handled in the visitor’s browser.', '可公开访问的静态网页，交互和渲染在访客浏览器中完成。'],
    scope: ['A creative coding experiment, presented separately from research and commercial work.', '创意编程实验，与科研和商业项目分开展示。'],
    links: [['Open the experience', '打开交互作品', 'https://2273862959-sketch.github.io/qixi-particle-bouquet/'], ['Source code', '项目源码', `${github}/qixi-particle-bouquet`]]
  },
  {
    id: 'ml-foundations', name: 'Learning the Fundamentals', zhName: '机器学习基础实验', category: ['Coursework', '课程实验'], image: '',
    subtitle: ['From logistic regression to convolutional networks.', '从逻辑回归到卷积神经网络。'],
    description: ['Four course notebooks exploring gradient descent, regularization, dense networks and convolutional MNIST classification.', '四份课程 Notebook，探索梯度下降、正则化、全连接网络与 MNIST 卷积分类。'],
    tags: ['NumPy', 'TensorFlow / Keras', 'scikit-learn', 'Jupyter'], status: ['Coursework', '课程实验'], metric: ['4', 'learning notebooks', '学习 Notebook'],
    problem: ['Understand how optimization, feature scaling, model capacity and regularization affect a classifier.', '理解优化方法、特征缩放、模型容量与正则化如何影响分类器。'],
    method: [
      ['Implement logistic regression and regularized polynomial classification, then inspect the loss and decision boundaries.', '实现逻辑回归与正则化多项式分类，观察损失与决策边界。'],
      ['Build dense and convolutional MNIST models in Keras, with validation splits and optimizer comparisons.', '使用 Keras 搭建全连接和卷积 MNIST 模型，设置验证集并比较优化器。']
    ],
    outcome: ['The original course notebooks have been prepared for public reading with execution outputs cleared and local paths made portable. They are educational exercises, not independent research claims.', '原课程 Notebook 经输出清理与路径整理后用于公开阅读。这些是教学实验，不作为独立科研成果声称。'],
    scope: ['Course exercise prompts and datasets retain their original provenance. External datasets are not republished.', '保留课程题目与数据的原始来源属性，不重新分发外部数据集。'],
    links: [['Explore notebooks', '查看 Notebook', `${github}/scientific-computing-lab/tree/main/notebooks/machine-learning`]]
  },
  {
    id: 'geospatial', name: 'Arctic Data Stories', zhName: '北极浮标数据可视化', category: ['Scientific computing', '科学计算'], image: 'arctic.png',
    subtitle: ['Reading environmental change through data.', '通过数据阅读环境变化。'],
    description: ['A scientific computing course study of Arctic buoy trajectories, environmental time series and correlation analysis.', '围绕北极浮标轨迹、环境时间序列和相关性分析的科学计算课程实践。'],
    tags: ['Pandas', 'Cartopy', 'Matplotlib', 'SciPy'], status: ['Course study', '课程实践'], metric: ['3', 'buoy series examined', '浮标序列'],
    problem: ['Turn environmental observations into readable temporal and spatial evidence, with explicit coordinates, units and context.', '将环境观测转化为可读的时空证据，清楚表达坐标、单位和背景。'],
    method: [
      ['Read and clean buoy CSV data, then derive trajectories and time-dependent summaries.', '读取并清理浮标 CSV 数据，整理轨迹与随时间变化的观测。'],
      ['Use Cartopy for geographic plotting and Matplotlib/SciPy for time series and correlation analysis.', '使用 Cartopy 进行地理绘图，以 Matplotlib 与 SciPy 进行时间序列和相关性分析。']
    ],
    outcome: ['The archived coursework contains trajectory, time-series and correlation figures for three buoy series. The public version includes the notebook and selected figures; original datasets must be obtained separately.', '已存档的课程成果包含三组浮标的轨迹、时间序列与相关性图。公开版本提供 Notebook 和精选图表，原始数据需要另行获取。'],
    scope: ['A course-based analysis using the International Arctic Buoy Programme context. No new geophysical finding is claimed.', '基于国际北极浮标计划背景的课程分析，不声称新的地球物理学发现。'],
    links: [['Notebook & figures', 'Notebook 与图表', `${github}/scientific-computing-lab/tree/main/notebooks/geospatial`]]
  }
];
