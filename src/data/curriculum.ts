import type { Course } from '../types/curriculum'

export const course: Course = {
  id: 'tcm-fundamentals',
  title: '中医基础',
  description: '系统学习中医核心理论，从阴阳五行到经络穴位，掌握中医思维',
  units: [
    {
      id: 'unit-1',
      courseId: 'tcm-fundamentals',
      order: 1,
      title: '阴阳学说',
      description: '学习中医最根本的哲学基础——阴阳理论',
      icon: '☯️',
      requiredUnitIds: [],
      lessons: [
        {
          id: 'unit-1-lesson-1',
          unitId: 'unit-1',
          order: 1,
          title: '什么是阴阳',
          description: '认识阴阳的基本概念和特征',
          icon: '🌓',
          exercises: [
            { id: 'ex-u1l1-1', xpReward: 10, question: { id: 'q-yy-1', type: 'multiple-choice', prompt: '在中医理论中，阴的特性是：', options: ['寒冷、静止、向内', '温热、活跃、向外', '中性、平衡', '不寒不热'], correctAnswer: '寒冷、静止、向内', explanation: '阴代表被动的、寒冷的、收缩的、向内的特性。' } },
            { id: 'ex-u1l1-2', xpReward: 10, question: { id: 'q-yy-2', type: 'multiple-choice', prompt: '以下哪一项属于"阳"的特征？', options: ['黑暗', '静止', '温热', '下降'], correctAnswer: '温热', explanation: '阳代表温热的、明亮的、活跃的、向上的、向外的特性。' } },
            { id: 'ex-u1l1-3', xpReward: 10, question: { id: 'q-yy-3', type: 'true-false', prompt: '阴阳是绝对对立的，不可相互转化。', correctAnswer: 'false', explanation: '阴阳是相对的，可以相互转化。比如白天（阳）会变成黑夜（阴），热水（阳）会冷却（阴）。' } },
            { id: 'ex-u1l1-4', xpReward: 10, question: { id: 'q-yy-4', type: 'multiple-choice', prompt: '《黄帝内经》中说"阴阳者，天地之道也"，这句话的核心意思是：', options: ['阴阳是太极图的名字', '阴阳是宇宙万物的根本规律', '阴阳只适用于医学', '阴阳是古人的迷信'], correctAnswer: '阴阳是宇宙万物的根本规律', explanation: '阴阳是宇宙万物运动变化的根本规律，是中医理论的核心基石。' } },
            { id: 'ex-u1l1-5', xpReward: 10, question: { id: 'q-yy-5', type: 'fill-in-blank', prompt: '中医认为，人体背部属___，腹部属___。', correctAnswer: '阳，阴', explanation: '背为阳，腹为阴。背部向外朝阳，腹部向内属阴。' } },
            { id: 'ex-u1l1-6', xpReward: 10, question: { id: 'q-yy-6', type: 'matching', prompt: '将下列事物的阴阳属性配对：', pairs: [{ left: '太阳', right: '阳' }, { left: '月亮', right: '阴' }, { left: '火', right: '阳' }, { left: '水', right: '阴' }], correctAnswer: '', explanation: '太阳和火属于阳，月亮和水属于阴。' } },
          ]
        },
        {
          id: 'unit-1-lesson-2',
          unitId: 'unit-1',
          order: 2,
          title: '阴阳在人体中的体现',
          description: '理解阴阳如何解释人体结构和功能',
          icon: '🧍',
          exercises: [
            { id: 'ex-u1l2-1', xpReward: 10, question: { id: 'q-yy-7', type: 'multiple-choice', prompt: '人体的"气"属于阴还是阳？', options: ['纯阴', '纯阳', '气属阳，血属阴', '气和血都属阴'], correctAnswer: '气属阳，血属阴', explanation: '气主动、温热、无形，属阳；血主静、濡养、有形，属阴。' } },
            { id: 'ex-u1l2-2', xpReward: 10, question: { id: 'q-yy-8', type: 'true-false', prompt: '五脏（心肝脾肺肾）属阴，六腑（胆胃大肠小肠膀胱三焦）属阳。', correctAnswer: 'true', explanation: '五脏藏精气而不泻，属阴；六腑传化物而不藏，属阳。' } },
            { id: 'ex-u1l2-3', xpReward: 10, question: { id: 'q-yy-9', type: 'multiple-choice', prompt: '"阴平阳秘"描述的是什么状态？', options: ['疾病状态', '阴阳失衡', '健康平衡状态', '阳气过盛'], correctAnswer: '健康平衡状态', explanation: '阴平阳秘指阴阳平衡协调，是人体健康的最佳状态。' } },
            { id: 'ex-u1l2-4', xpReward: 10, question: { id: 'q-yy-10', type: 'multiple-choice', prompt: '白天精力充沛、晚上安然入睡，体现了什么？', options: ['阴阳对立', '阴阳消长', '阴阳互根', '阴阳转化'], correctAnswer: '阴阳消长', explanation: '白天阳气旺盛（清醒活动），夜晚阴气旺盛（安静睡眠），体现了阴阳的消长变化。' } },
            { id: 'ex-u1l2-5', xpReward: 10, question: { id: 'q-yy-11', type: 'fill-in-blank', prompt: '阴阳的关系包括：对立制约、___、消长平衡和相互转化。', correctAnswer: '互根互用', explanation: '阴阳互根互用，意思是阴阳相互依存，阴生于阳，阳生于阴，不能单独存在。' } },
            { id: 'ex-u1l2-6', xpReward: 10, question: { id: 'q-yy-12', type: 'multiple-choice', prompt: '如果一个人总是怕冷、手脚冰凉，从阴阳角度看是：', options: ['阳盛', '阴虚', '阳虚', '阴盛'], correctAnswer: '阳虚', explanation: '阳气不足（阳虚）导致温煦功能减退，出现怕冷、手脚冰凉等寒象。' } },
          ]
        },
        {
          id: 'unit-1-lesson-3',
          unitId: 'unit-1',
          order: 3,
          title: '阴阳失调与疾病',
          description: '学习阴阳失衡导致的常见病症',
          icon: '⚖️',
          exercises: [
            { id: 'ex-u1l3-1', xpReward: 10, question: { id: 'q-yy-13', type: 'multiple-choice', prompt: '阴虚的典型症状是？', options: ['怕冷、四肢冰凉', '潮热、盗汗、口干', '浮肿、痰多', '气短、乏力'], correctAnswer: '潮热、盗汗、口干', explanation: '阴虚不能制阳，虚热内生，表现为潮热、盗汗、口干咽燥等虚热症状。' } },
            { id: 'ex-u1l3-2', xpReward: 10, question: { id: 'q-yy-14', type: 'multiple-choice', prompt: '"阴胜则寒，阳胜则热"出自哪部经典？', options: ['《本草纲目》', '《黄帝内经》', '《伤寒论》', '《千金方》'], correctAnswer: '《黄帝内经》', explanation: '这句话出自《黄帝内经·素问》，揭示了阴阳偏盛的基本病理。' } },
            { id: 'ex-u1l3-3', xpReward: 10, question: { id: 'q-yy-15', type: 'true-false', prompt: '阳虚的人适合多吃西瓜、梨等寒凉食物。', correctAnswer: 'false', explanation: '阳虚体质本身阳气不足，应吃温补食物（如羊肉、生姜），吃寒凉食物会加重阳虚。' } },
            { id: 'ex-u1l3-4', xpReward: 10, question: { id: 'q-yy-16', type: 'multiple-choice', prompt: '治疗阴虚证的基本原则是：', options: ['温阳散寒', '滋阴降火', '发汗解表', '攻下通便'], correctAnswer: '滋阴降火', explanation: '阴虚则热，需用滋阴药物补阴液之不足，同时清降虚火。' } },
            { id: 'ex-u1l3-5', xpReward: 10, question: { id: 'q-yy-17', type: 'fill-in-blank', prompt: '中医治疗的基本原则是"___"，即调整阴阳使之恢复平衡。', correctAnswer: '调和阴阳', explanation: '调和阴阳是中医治疗的核心目标，各种治法最终都是为了恢复阴阳平衡。' } },
            { id: 'ex-u1l3-6', xpReward: 10, question: { id: 'q-yy-18', type: 'multiple-choice', prompt: '六味地黄丸主要治疗什么证？', options: ['肾阳虚', '肾阴虚', '脾阳虚', '心阴虚'], correctAnswer: '肾阴虚', explanation: '六味地黄丸是滋补肾阴的代表方，用于肾阴虚引起的腰膝酸软、头晕耳鸣等。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      courseId: 'tcm-fundamentals',
      order: 2,
      title: '五行学说',
      description: '掌握木火土金水五行的相生相克规律',
      icon: '⭐',
      requiredUnitIds: ['unit-1'],
      lessons: [
        {
          id: 'unit-2-lesson-1',
          unitId: 'unit-2',
          order: 1,
          title: '认识五行',
          description: '了解五行的基本概念和特性',
          icon: '🔢',
          exercises: [
            { id: 'ex-u2l1-1', xpReward: 10, question: { id: 'q-wx-1', type: 'multiple-choice', prompt: '五行的正确顺序（相生顺序）是：', options: ['金木水火土', '木火土金水', '土金水木火', '火水木金土'], correctAnswer: '木火土金水', explanation: '五行相生：木生火，火生土，土生金，金生水，水生木。' } },
            { id: 'ex-u2l1-2', xpReward: 10, question: { id: 'q-wx-2', type: 'multiple-choice', prompt: '木的特性是？', options: ['承载、受纳', '清洁、沉降', '生长、升发、条达', '温热、上升'], correctAnswer: '生长、升发、条达', explanation: '木曰曲直，代表生长、升发、条达舒畅的特性，如同树木向上向外生长。' } },
            { id: 'ex-u2l1-3', xpReward: 10, question: { id: 'q-wx-3', type: 'matching', prompt: '将五行与其特性配对：', pairs: [{ left: '木', right: '生长、升发' }, { left: '火', right: '温热、上升' }, { left: '土', right: '承载、生化' }, { left: '金', right: '清洁、沉降' }, { left: '水', right: '滋润、下行' }], correctAnswer: '', explanation: '这是五行各自的特性概括，是理解五行学说的基础。' } },
            { id: 'ex-u2l1-4', xpReward: 10, question: { id: 'q-wx-4', type: 'multiple-choice', prompt: '五行中，"水曰润下"的意思是？', options: ['水向上蒸发', '水滋润下行', '水是固态的', '水可以燃烧'], correctAnswer: '水滋润下行', explanation: '润即滋润，下即向下。水具有滋润万物和向下流动的特性。' } },
            { id: 'ex-u2l1-5', xpReward: 10, question: { id: 'q-wx-5', type: 'true-false', prompt: '五行学说仅仅用于中医，和其他领域无关。', correctAnswer: 'false', explanation: '五行学说广泛应用于中医、天文、历法、音乐、兵法、建筑等多个领域。' } },
            { id: 'ex-u2l1-6', xpReward: 10, question: { id: 'q-wx-6', type: 'fill-in-blank', prompt: '五行中，___的特性是"温热、向上"，对应夏季。', correctAnswer: '火', explanation: '火曰炎上，代表温热、上升的特性，与夏季、南方、红色相应。' } },
          ]
        },
        {
          id: 'unit-2-lesson-2',
          unitId: 'unit-2',
          order: 2,
          title: '五行相生相克',
          description: '掌握五行之间的生克关系',
          icon: '🔄',
          exercises: [
            { id: 'ex-u2l2-1', xpReward: 10, question: { id: 'q-wx-7', type: 'multiple-choice', prompt: '"木生火"可以理解为：', options: ['木头是湿的', '木材可以燃烧产生火', '树木不喜欢火', '火可以变成木头'], correctAnswer: '木材可以燃烧产生火', explanation: '木生火，取象于木材燃烧产生火焰，代表一种促进、资生的关系。' } },
            { id: 'ex-u2l2-2', xpReward: 10, question: { id: 'q-wx-8', type: 'multiple-choice', prompt: '"金克木"的意思是：', options: ['金属可以变成木头', '金属工具可以砍伐树木', '木头可以变成金属', '互不相关'], correctAnswer: '金属工具可以砍伐树木', explanation: '金克木，取象于金属刀具可以砍伐树木，代表制约、克制的关系。' } },
            { id: 'ex-u2l2-3', xpReward: 10, question: { id: 'q-wx-9', type: 'fill-in-blank', prompt: '火生___，___生金，金生___。', correctAnswer: '土，土，水', explanation: '火生土（灰烬归土），土生金（金属埋藏于土中），金生水（金属熔化后为液态）。' } },
            { id: 'ex-u2l2-4', xpReward: 10, question: { id: 'q-wx-10', type: 'true-false', prompt: '相生和相克是互相矛盾的，不能同时存在。', correctAnswer: 'false', explanation: '相生和相克同时存在，维持着五行系统的动态平衡。生中有克，克中有生。' } },
            { id: 'ex-u2l2-5', xpReward: 10, question: { id: 'q-wx-11', type: 'multiple-choice', prompt: '如果木过于亢盛，会过度克制哪个行？', options: ['火', '土', '金', '水'], correctAnswer: '土', explanation: '木克土，木过盛则"木旺乘土"，过度克制脾土，导致脾胃功能失调。' } },
            { id: 'ex-u2l2-6', xpReward: 10, question: { id: 'q-wx-12', type: 'multiple-choice', prompt: '"虚则补其母"中，火的"母"是？', options: ['木', '土', '金', '水'], correctAnswer: '木', explanation: '木生火，因此木为火之母。虚则补其母，火不足时可以补木（肝）。' } },
          ]
        },
        {
          id: 'unit-2-lesson-3',
          unitId: 'unit-2',
          order: 3,
          title: '五行与脏腑',
          description: '理解五行在人体脏腑分类中的应用',
          icon: '🫁',
          exercises: [
            { id: 'ex-u2l3-1', xpReward: 10, question: { id: 'q-wx-13', type: 'multiple-choice', prompt: '肝属于五行中的哪一行？', options: ['火', '土', '木', '水'], correctAnswer: '木', explanation: '肝属木，因肝主疏泄，喜条达而恶抑郁，与木的生长升发特性相似。' } },
            { id: 'ex-u2l3-2', xpReward: 10, question: { id: 'q-wx-14', type: 'matching', prompt: '将五脏与对应的五行配对：', pairs: [{ left: '心', right: '火' }, { left: '肝', right: '木' }, { left: '脾', right: '土' }, { left: '肺', right: '金' }, { left: '肾', right: '水' }], correctAnswer: '', explanation: '心属火、肝属木、脾属土、肺属金、肾属水，这是五行配五脏的基本框架。' } },
            { id: 'ex-u2l3-3', xpReward: 10, question: { id: 'q-wx-15', type: 'multiple-choice', prompt: '根据五行生克，肺（金）有问题时，应该注意哪个脏？', options: ['只注意肺', '心（火克金）', '肝（金克木）', '以上都要考虑'], correctAnswer: '以上都要考虑', explanation: '肺属金，火克金（心会影响肺），金克木（肺会影响肝），土生金（脾会影响肺），需综合考虑。' } },
            { id: 'ex-u2l3-4', xpReward: 10, question: { id: 'q-wx-16', type: 'fill-in-blank', prompt: '五行中，___对应心脏，开窍于舌，其华在面。', correctAnswer: '火', explanation: '心属火，开窍于舌，其华在面。面色红润与否可以反映心血的盛衰。' } },
            { id: 'ex-u2l3-5', xpReward: 10, question: { id: 'q-wx-17', type: 'true-false', prompt: '肾属水，所以肾虚的人应该多吃辛辣食物来补充。', correctAnswer: 'false', explanation: '肾属水，辛味入肺属金，金生水，适量辛味可以间接补肾。但过量辛辣反而耗伤阴液，对肾阴虚不利。' } },
            { id: 'ex-u2l3-6', xpReward: 10, question: { id: 'q-wx-18', type: 'multiple-choice', prompt: '五行中"土"对应的情志是？', options: ['怒', '喜', '思', '恐'], correctAnswer: '思', explanation: '脾属土，在志为思。过度思虑会伤脾，影响消化功能。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      courseId: 'tcm-fundamentals',
      order: 3,
      title: '气血津液',
      description: '认识人体生命活动的三大物质基础',
      icon: '💧',
      requiredUnitIds: ['unit-1'],
      lessons: [
        {
          id: 'unit-3-lesson-1',
          unitId: 'unit-3',
          order: 1,
          title: '气的奥秘',
          description: '理解气的概念、来源和功能',
          icon: '🌬️',
          exercises: [
            { id: 'ex-u3l1-1', xpReward: 10, question: { id: 'q-qq-1', type: 'multiple-choice', prompt: '在中医里，"气"最基本的功能不包括：', options: ['推动', '温煦', '防御', '产生热量卡路里'], correctAnswer: '产生热量卡路里', explanation: '气有推动、温煦、防御、固摄、气化五大功能，卡路里是现代营养学概念。' } },
            { id: 'ex-u3l1-2', xpReward: 10, question: { id: 'q-qq-2', type: 'multiple-choice', prompt: '人体的气主要来源于？', options: ['只有呼吸', '先天精气+水谷精气+清气', '只有饮食', '只有遗传'], correctAnswer: '先天精气+水谷精气+清气', explanation: '气来自三个方面：父母的先天之精气、饮食中的水谷精气、呼吸的自然清气。' } },
            { id: 'ex-u3l1-3', xpReward: 10, question: { id: 'q-qq-3', type: 'true-false', prompt: '元气（原气）是人体最根本、最重要的气。', correctAnswer: 'true', explanation: '元气源于先天，藏于肾中，是人体生命活动的原动力，也是全身之气的基础。' } },
            { id: 'ex-u3l1-4', xpReward: 10, question: { id: 'q-qq-4', type: 'multiple-choice', prompt: '卫气的主要功能是？', options: ['推动血液循环', '防御外邪、温养肌肤', '生成血液', '消化食物'], correctAnswer: '防御外邪、温养肌肤', explanation: '卫气行于脉外，具有防御外邪、温养肌肤、调节汗孔开合的功能。' } },
            { id: 'ex-u3l1-5', xpReward: 10, question: { id: 'q-qq-5', type: 'fill-in-blank', prompt: '___气运行于脉内，主要负责营养全身。___气运行于脉外，主要防御外邪。', correctAnswer: '营，卫', explanation: '营气行于脉中，化生血液、营养全身；卫气行于脉外，防御外邪、温养肌肤。' } },
            { id: 'ex-u3l1-6', xpReward: 10, question: { id: 'q-qq-6', type: 'multiple-choice', prompt: '"气虚"最常见的症状是？', options: ['发热口渴', '神疲乏力、少气懒言', '大便秘结', '失眠多梦'], correctAnswer: '神疲乏力、少气懒言', explanation: '气虚推动无力，故神疲乏力、少气懒言、动则汗出。' } },
          ]
        },
        {
          id: 'unit-3-lesson-2',
          unitId: 'unit-3',
          order: 2,
          title: '血的运行',
          description: '学习血的生成、功能和运行规律',
          icon: '🩸',
          exercises: [
            { id: 'ex-u3l2-1', xpReward: 10, question: { id: 'q-qq-7', type: 'multiple-choice', prompt: '中医认为血的生成与哪些脏腑关系最密切？', options: ['心肝', '脾胃', '肺肾', '胆与三焦'], correctAnswer: '脾胃', explanation: '脾胃为气血生化之源，水谷精微通过脾胃运化化为血。此外心、肝、肾也参与。' } },
            { id: 'ex-u3l2-2', xpReward: 10, question: { id: 'q-qq-8', type: 'true-false', prompt: '血与气的关系可以概括为"气为血之帅，血为气之母"。', correctAnswer: 'true', explanation: '气能生血、行血、摄血（气为血之帅）；血能载气、养气（血为气之母）。' } },
            { id: 'ex-u3l2-3', xpReward: 10, question: { id: 'q-qq-9', type: 'multiple-choice', prompt: '血虚的常见表现不包括：', options: ['面色苍白', '头晕眼花', '心烦失眠', '高热不退'], correctAnswer: '高热不退', explanation: '高热不退是热证的表现，血虚主要表现为面色苍白、头晕眼花、心悸失眠等。' } },
            { id: 'ex-u3l2-4', xpReward: 10, question: { id: 'q-qq-10', type: 'fill-in-blank', prompt: '心主___，肝主___，脾主___。', correctAnswer: '血，藏血，统血', explanation: '心主血脉、推动血液运行；肝藏血、调节血量；脾统血、使血行脉内不溢出。' } },
            { id: 'ex-u3l2-5', xpReward: 10, question: { id: 'q-qq-11', type: 'multiple-choice', prompt: '血瘀的典型表现是？', options: ['面色萎黄', '刺痛固定不移、舌有瘀斑', '口干咽燥', '腹胀便溏'], correctAnswer: '刺痛固定不移、舌有瘀斑', explanation: '血瘀指血液运行不畅或停滞，表现为刺痛固定、舌质紫暗或有瘀斑瘀点。' } },
          ]
        },
        {
          id: 'unit-3-lesson-3',
          unitId: 'unit-3',
          order: 3,
          title: '津液代谢',
          description: '了解津液的概念、代谢和功能',
          icon: '💦',
          exercises: [
            { id: 'ex-u3l3-1', xpReward: 10, question: { id: 'q-qq-12', type: 'multiple-choice', prompt: '津和液的区别是？', options: ['没有区别', '津清稀分布于表，液稠厚分布于里', '津是水，液是油', '津属阳，液属阴'], correctAnswer: '津清稀分布于表，液稠厚分布于里', explanation: '津质清稀、流动性大、分布于体表；液质稠厚、流动性小、分布于关节和脑髓。' } },
            { id: 'ex-u3l3-2', xpReward: 10, question: { id: 'q-qq-13', type: 'multiple-choice', prompt: '津液代谢与哪些脏腑关系最密切？', options: ['仅与肾有关', '肺脾肾三脏', '仅与膀胱有关', '仅与胃有关'], correctAnswer: '肺脾肾三脏', explanation: '肺主通调水道，脾主运化水湿，肾主水而司二便，三脏协同调节津液代谢。' } },
            { id: 'ex-u3l3-3', xpReward: 10, question: { id: 'q-qq-14', type: 'true-false', prompt: '水肿的发生往往与肺、脾、肾功能失调有关。', correctAnswer: 'true', explanation: '肺失宣降、脾失运化、肾失气化都可导致水液停聚形成水肿。' } },
            { id: 'ex-u3l3-4', xpReward: 10, question: { id: 'q-qq-15', type: 'fill-in-blank', prompt: '津液不足（伤津）的典型表现是口___、咽___、皮肤___。', correctAnswer: '干，干，干燥', explanation: '津液亏虚，不能滋润濡养，故见口干、咽干、皮肤干燥、小便短少等。' } },
            { id: 'ex-u3l3-5', xpReward: 10, question: { id: 'q-qq-16', type: 'multiple-choice', prompt: '下列哪种情况最容易导致"痰湿"内生？', options: ['运动过多', '脾虚湿困', '饮水充足', '肺活量大'], correctAnswer: '脾虚湿困', explanation: '脾主运化水湿，脾虚则水湿不化，凝聚成痰。中医认为"脾为生痰之源"。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      courseId: 'tcm-fundamentals',
      order: 4,
      title: '五脏—藏',
      description: '深入学习心、肝、脾、肺、肾五脏的功能',
      icon: '❤️',
      requiredUnitIds: ['unit-2'],
      lessons: [
        {
          id: 'unit-4-lesson-1',
          unitId: 'unit-4',
          order: 1,
          title: '心——君主之官',
          description: '心的生理功能和病理特点',
          icon: '💗',
          exercises: [
            { id: 'ex-u4l1-1', xpReward: 10, question: { id: 'q-zf-1', type: 'multiple-choice', prompt: '中医认为心最重要的功能是：', options: ['消化食物', '主血脉和主神志', '呼吸', '排泄'], correctAnswer: '主血脉和主神志', explanation: '心主血脉，推动血液运行；心主神志，主管精神意识和思维活动。' } },
            { id: 'ex-u4l1-2', xpReward: 10, question: { id: 'q-zf-2', type: 'multiple-choice', prompt: '"心开窍于"哪个器官？', options: ['目', '舌', '口', '鼻'], correctAnswer: '舌', explanation: '心开窍于舌。舌的颜色、形态能反映心血的盛衰，如舌尖红赤常提示心火亢盛。' } },
            { id: 'ex-u4l1-3', xpReward: 10, question: { id: 'q-zf-3', type: 'true-false', prompt: '心与小肠相表里。', correctAnswer: 'true', explanation: '心与小肠通过经络相连，构成表里关系。心火可下移小肠，出现小便赤涩等症。' } },
            { id: 'ex-u4l1-4', xpReward: 10, question: { id: 'q-zf-4', type: 'fill-in-blank', prompt: '心在志为___，过度的这种情绪会伤___。', correctAnswer: '喜，心', explanation: '心在志为喜，但喜乐过度则耗伤心气，所谓"喜伤心"。' } },
            { id: 'ex-u4l1-5', xpReward: 10, question: { id: 'q-zf-5', type: 'multiple-choice', prompt: '心气虚的常见表现是？', options: ['心烦失眠', '心悸气短、自汗', '口舌生疮', '小便短赤'], correctAnswer: '心悸气短、自汗', explanation: '心气虚推动无力，故心悸、气短、自汗、面色淡白。' } },
            { id: 'ex-u4l1-6', xpReward: 10, question: { id: 'q-zf-6', type: 'multiple-choice', prompt: '心的五行属性是？', options: ['木', '火', '土', '金'], correctAnswer: '火', explanation: '心属火，为阳中之阳，与夏季、南方、赤色相应。' } },
          ]
        },
        {
          id: 'unit-4-lesson-2',
          unitId: 'unit-4',
          order: 2,
          title: '肝——将军之官',
          description: '肝的疏泄和藏血功能',
          icon: '💚',
          exercises: [
            { id: 'ex-u4l2-1', xpReward: 10, question: { id: 'q-zf-7', type: 'multiple-choice', prompt: '肝最重要的生理功能是？', options: ['主呼吸', '主疏泄和藏血', '主消化', '主排泄'], correctAnswer: '主疏泄和藏血', explanation: '肝主疏泄（调畅气机）、主藏血（贮藏血液和调节血量）。' } },
            { id: 'ex-u4l2-2', xpReward: 10, question: { id: 'q-zf-8', type: 'multiple-choice', prompt: '肝开窍于：', options: ['舌', '口', '目', '耳'], correctAnswer: '目', explanation: '肝开窍于目，肝血充足则目能视物清晰；肝血不足则目涩眼花。' } },
            { id: 'ex-u4l2-3', xpReward: 10, question: { id: 'q-zf-9', type: 'true-false', prompt: '肝与胆相表里。', correctAnswer: 'true', explanation: '肝与胆通过经络相连，肝为脏属阴，胆为腑属阳，构成表里关系。胆汁由肝之余气化生。' } },
            { id: 'ex-u4l2-4', xpReward: 10, question: { id: 'q-zf-10', type: 'multiple-choice', prompt: '肝在志为：', options: ['喜', '怒', '思', '恐'], correctAnswer: '怒', explanation: '肝在志为怒。怒则气上，过度愤怒会伤肝，导致肝气上逆，出现头痛、面红等。' } },
            { id: 'ex-u4l2-5', xpReward: 10, question: { id: 'q-zf-11', type: 'fill-in-blank', prompt: '肝的疏泄功能失常，最常见两种类型：肝气___和肝气___。', correctAnswer: '郁结，上逆', explanation: '疏泄不及则肝气郁结（郁闷、胁痛）；疏泄太过则肝气上逆（急躁、头痛、眩晕）。' } },
            { id: 'ex-u4l2-6', xpReward: 10, question: { id: 'q-zf-12', type: 'multiple-choice', prompt: '肝属木，根据五行，肝病最易影响哪个脏？', options: ['心', '脾', '肺', '肾'], correctAnswer: '脾', explanation: '木克土，肝木过旺会克制脾土，称"肝木乘脾"，出现胁痛、腹胀、腹泻等症。' } },
          ]
        },
        {
          id: 'unit-4-lesson-3',
          unitId: 'unit-4',
          order: 3,
          title: '脾——仓廪之官',
          description: '脾主运化的核心功能',
          icon: '💛',
          exercises: [
            { id: 'ex-u4l3-1', xpReward: 10, question: { id: 'q-zf-13', type: 'multiple-choice', prompt: '脾最重要的功能是：', options: ['主呼吸', '主运化和统血', '主生殖', '主排泄'], correctAnswer: '主运化和统血', explanation: '脾主运化水谷精微（消化吸收）和运化水湿，又主统血（使血行脉内）。' } },
            { id: 'ex-u4l3-2', xpReward: 10, question: { id: 'q-zf-14', type: 'multiple-choice', prompt: '脾开窍于：', options: ['目', '舌', '口', '鼻'], correctAnswer: '口', explanation: '脾开窍于口，其华在唇。脾气健运则口味正常、口唇红润。' } },
            { id: 'ex-u4l3-3', xpReward: 10, question: { id: 'q-zf-15', type: 'true-false', prompt: '脾喜燥恶湿，湿邪最容易困脾。', correctAnswer: 'true', explanation: '脾的特性是喜燥而恶湿。湿邪内侵最易困遏脾阳，导致运化失常。' } },
            { id: 'ex-u4l3-4', xpReward: 10, question: { id: 'q-zf-16', type: 'fill-in-blank', prompt: '脾胃被称为"___之本"和"___之源"。', correctAnswer: '后天，气血生化', explanation: '脾胃为后天之本，气血生化之源。人出生后依赖脾胃运化水谷精微来维持生命活动。' } },
            { id: 'ex-u4l3-5', xpReward: 10, question: { id: 'q-zf-17', type: 'multiple-choice', prompt: '脾气虚最常见的症状是？', options: ['失眠多梦', '食少腹胀、便溏', '咳嗽气喘', '腰膝酸软'], correctAnswer: '食少腹胀、便溏', explanation: '脾气虚运化无力，故食欲不振、食后腹胀、大便溏薄。' } },
            { id: 'ex-u4l3-6', xpReward: 10, question: { id: 'q-zf-18', type: 'multiple-choice', prompt: '脾与哪个腑相表里？', options: ['胆', '小肠', '胃', '大肠'], correctAnswer: '胃', explanation: '脾与胃相表里。脾主升清，胃主降浊，一升一降，协调完成消化吸收。' } },
          ]
        },
        {
          id: 'unit-4-lesson-4',
          unitId: 'unit-4',
          order: 4,
          title: '肺与肾——相辅与先天',
          description: '肺主气、肾藏精的功能详解',
          icon: '🫁',
          exercises: [
            { id: 'ex-u4l4-1', xpReward: 10, question: { id: 'q-zf-19', type: 'multiple-choice', prompt: '肺被称为"华盖"，因为：', options: ['肺是最大的脏器', '肺位于最高位覆盖诸脏', '肺是最小的脏器', '肺可以随意移动'], correctAnswer: '肺位于最高位覆盖诸脏', explanation: '肺在五脏中位置最高，覆盖在心脏和其他脏器之上，故称"华盖"。' } },
            { id: 'ex-u4l4-2', xpReward: 10, question: { id: 'q-zf-20', type: 'multiple-choice', prompt: '肺开窍于：', options: ['目', '舌', '口', '鼻'], correctAnswer: '鼻', explanation: '肺开窍于鼻，鼻的通气和嗅觉功能依赖于肺气的宣发。' } },
            { id: 'ex-u4l4-3', xpReward: 10, question: { id: 'q-zf-21', type: 'true-false', prompt: '肾为先天之本，是人体生命活动的根基。', correctAnswer: 'true', explanation: '肾藏先天之精，是人体生长、发育和生殖的基础，故称肾为先天之本。' } },
            { id: 'ex-u4l4-4', xpReward: 10, question: { id: 'q-zf-22', type: 'multiple-choice', prompt: '肾在志为：', options: ['喜', '怒', '思', '恐'], correctAnswer: '恐', explanation: '肾在志为恐。恐惧过度则伤肾，可致肾气不固，出现二便失禁等症状。' } },
            { id: 'ex-u4l4-5', xpReward: 10, question: { id: 'q-zf-23', type: 'fill-in-blank', prompt: '肺主___，司___；肾主___，主___.', correctAnswer: '气，呼吸，藏精，水', explanation: '肺主气、司呼吸；肾主藏精、主水液代谢。肺为气之主，肾为气之根。' } },
            { id: 'ex-u4l4-6', xpReward: 10, question: { id: 'q-zf-24', type: 'multiple-choice', prompt: '肾虚最常见的两种类型是？', options: ['肾气虚和肾血虚', '肾阴虚和肾阳虚', '肾热和肾寒', '肾实和肾虚'], correctAnswer: '肾阴虚和肾阳虚', explanation: '肾多虚证，最常见肾阴虚（腰酸、潮热、盗汗）和肾阳虚（腰膝冷痛、畏寒）。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-5',
      courseId: 'tcm-fundamentals',
      order: 5,
      title: '六腑—腑',
      description: '认识六腑的传化功能',
      icon: '🔗',
      requiredUnitIds: ['unit-4'],
      lessons: [
        {
          id: 'unit-5-lesson-1',
          unitId: 'unit-5',
          order: 1,
          title: '胆与胃',
          description: '胆主决断、胃主受纳的功能',
          icon: '🫁',
          exercises: [
            { id: 'ex-u5l1-1', xpReward: 10, question: { id: 'q-fu-1', type: 'multiple-choice', prompt: '胆在中医中被称为：', options: ['中正之官', '仓廪之官', '将军之官', '君主之官'], correctAnswer: '中正之官', explanation: '胆为中正之官，主决断。胆气充足则决断果敢，胆气虚则犹豫不决。' } },
            { id: 'ex-u5l1-2', xpReward: 10, question: { id: 'q-fu-2', type: 'true-false', prompt: '胆既是六腑之一，又属于奇恒之腑。', correctAnswer: 'true', explanation: '胆既与其他五腑构成六腑系统，又因其贮藏胆汁（类似五脏藏精）而列入奇恒之腑。' } },
            { id: 'ex-u5l1-3', xpReward: 10, question: { id: 'q-fu-3', type: 'multiple-choice', prompt: '胃的主要功能是？', options: ['主决断', '受纳和腐熟水谷', '主呼吸', '主藏精'], correctAnswer: '受纳和腐熟水谷', explanation: '胃主受纳（接受食物）和腐熟水谷（初步消化），为水谷之海。' } },
            { id: 'ex-u5l1-4', xpReward: 10, question: { id: 'q-fu-4', type: 'fill-in-blank', prompt: '胃气以___为顺，胃气___则食物无法正常下行。', correctAnswer: '降，不降', explanation: '胃气以降为顺，胃气下降，食物才能向下传送到小肠。胃气不降则出现嗳气、恶心、呕吐。' } },
            { id: 'ex-u5l1-5', xpReward: 10, question: { id: 'q-fu-5', type: 'multiple-choice', prompt: '中医临床上非常重视"保胃气"，因为：', options: ['胃气影响呼吸', '胃气关乎消化吸收和生命预后', '胃气与睡眠有关', '胃气影响听力'], correctAnswer: '胃气关乎消化吸收和生命预后', explanation: '有胃气则生，无胃气则死。胃气的盛衰直接关系到疾病的预后和转归。' } },
            { id: 'ex-u5l1-6', xpReward: 10, question: { id: 'q-fu-6', type: 'multiple-choice', prompt: '胆汁的分泌和排泄主要由哪个脏器调节？', options: ['心', '肝', '脾', '肺'], correctAnswer: '肝', explanation: '肝的疏泄功能正常，胆汁才能正常分泌和排泄。肝气郁结可导致胆汁排泄不畅。' } },
          ]
        },
        {
          id: 'unit-5-lesson-2',
          unitId: 'unit-5',
          order: 2,
          title: '小肠、大肠与膀胱',
          description: '分清泌浊与传导糟粕',
          icon: '🔄',
          exercises: [
            { id: 'ex-u5l2-1', xpReward: 10, question: { id: 'q-fu-7', type: 'multiple-choice', prompt: '小肠的功能被概括为：', options: ['只吸收营养', '受盛化物、分清泌浊', '只排泄', '储存粪便'], correctAnswer: '受盛化物、分清泌浊', explanation: '小肠接受胃传来的食糜，进一步消化（化物），并将清者（营养）吸收、浊者（残渣）传给大肠。' } },
            { id: 'ex-u5l2-2', xpReward: 10, question: { id: 'q-fu-8', type: 'multiple-choice', prompt: '大肠的主要功能是：', options: ['分清泌浊', '传导糟粕、吸收水分', '腐熟水谷', '贮藏胆汁'], correctAnswer: '传导糟粕、吸收水分', explanation: '大肠主传导，将小肠传来的残渣进一步吸收水分后形成粪便排出体外。' } },
            { id: 'ex-u5l2-3', xpReward: 10, question: { id: 'q-fu-9', type: 'true-false', prompt: '膀胱的功能仅仅是储存尿液。', correctAnswer: 'false', explanation: '膀胱不仅储存尿液，还在肾的气化作用下排泄尿液。肾气不足可致小便不利或失禁。' } },
            { id: 'ex-u5l2-4', xpReward: 10, question: { id: 'q-fu-10', type: 'fill-in-blank', prompt: '小肠与___相表里，大肠与___相表里。', correctAnswer: '心，肺', explanation: '心与小肠相表里，肺与大肠相表里。肺气肃降有助于大肠传导。' } },
            { id: 'ex-u5l2-5', xpReward: 10, question: { id: 'q-fu-11', type: 'multiple-choice', prompt: '便秘与哪个脏腑关系最不直接？', options: ['大肠', '肺', '脾', '胆'], correctAnswer: '胆', explanation: '大肠传导失常直接导致便秘；肺与大肠相表里，肺气不降也可致便秘；脾虚运化无力也会便秘。胆与便秘关系相对间接。' } },
          ]
        },
        {
          id: 'unit-5-lesson-3',
          unitId: 'unit-5',
          order: 3,
          title: '三焦——孤腑',
          description: '理解三焦的独特概念',
          icon: '🏺',
          exercises: [
            { id: 'ex-u5l3-1', xpReward: 10, question: { id: 'q-fu-12', type: 'multiple-choice', prompt: '三焦在中医中的概念是：', options: ['一个具体的解剖器官', '划分人体上中下三部分的功能区域', '就是膀胱', '就是胃'], correctAnswer: '划分人体上中下三部分的功能区域', explanation: '三焦并非具体的解剖器官，而是对人体上、中、下三个功能区域的划分。' } },
            { id: 'ex-u5l3-2', xpReward: 10, question: { id: 'q-fu-13', type: 'multiple-choice', prompt: '上焦的主要功能是？', options: ['分清泌浊', '如雾（宣发敷布）', '如沤（腐熟消化）', '如渎（排泄）'], correctAnswer: '如雾（宣发敷布）', explanation: '上焦如雾，指心肺将水谷精微像雾露一样布散到全身。' } },
            { id: 'ex-u5l3-3', xpReward: 10, question: { id: 'q-fu-14', type: 'matching', prompt: '将三焦部位与其功能特征配对：', pairs: [{ left: '上焦', right: '如雾——宣发敷布' }, { left: '中焦', right: '如沤——腐熟运化' }, { left: '下焦', right: '如渎——排泄传导' }], correctAnswer: '', explanation: '上焦如雾（心肺宣发布散），中焦如沤（脾胃腐熟运化），下焦如渎（肾与膀胱排泄）。' } },
            { id: 'ex-u5l3-4', xpReward: 10, question: { id: 'q-fu-15', type: 'true-false', prompt: '三焦是人体气机升降出入的通道和水液运行的通道。', correctAnswer: 'true', explanation: '三焦是元气通行和水液运行的道路，总司全身气机和气化。' } },
            { id: 'ex-u5l3-5', xpReward: 10, question: { id: 'q-fu-16', type: 'fill-in-blank', prompt: '三焦被称为"___之官，___出焉"。', correctAnswer: '决渎，水道', explanation: '三焦为决渎之官，水道出焉。三焦通畅则水液代谢正常，三焦不利则水肿、小便不利。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-6',
      courseId: 'tcm-fundamentals',
      order: 6,
      title: '经络总论',
      description: '认识人体经络系统的组成和分布',
      icon: '📡',
      requiredUnitIds: ['unit-4'],
      lessons: [
        {
          id: 'unit-6-lesson-1',
          unitId: 'unit-6',
          order: 1,
          title: '经络是什么',
          description: '了解经络的概念和组成',
          icon: '🕸️',
          exercises: [
            { id: 'ex-u6l1-1', xpReward: 10, question: { id: 'q-jl-1', type: 'multiple-choice', prompt: '经络系统的主体是？', options: ['经筋', '十二经脉', '皮部', '浮络'], correctAnswer: '十二经脉', explanation: '十二经脉是经络系统的主体，加上奇经八脉、络脉等构成完整的经络网络。' } },
            { id: 'ex-u6l1-2', xpReward: 10, question: { id: 'q-jl-2', type: 'multiple-choice', prompt: '经络的"经"字本义是？', options: ['经过', '纵向的主干', '横向的分支', '圆形'], correctAnswer: '纵向的主干', explanation: '经是纵向的主干，络是横向的分支。经像河流主干道，络像支流网络。' } },
            { id: 'ex-u6l1-3', xpReward: 10, question: { id: 'q-jl-3', type: 'true-false', prompt: '经络系统仅包括经脉，不包括络脉。', correctAnswer: 'false', explanation: '经络系统包括经脉（十二经脉+奇经八脉）和络脉（别络、浮络、孙络）等。' } },
            { id: 'ex-u6l1-4', xpReward: 10, question: { id: 'q-jl-4', type: 'fill-in-blank', prompt: '十二经脉中，___条行于手臂，___条行于腿足。', correctAnswer: '六，六', explanation: '手三阴经+手三阳经共6条分布在手臂；足三阴经+足三阳经共6条分布在腿足。' } },
            { id: 'ex-u6l1-5', xpReward: 10, question: { id: 'q-jl-5', type: 'multiple-choice', prompt: '阴经和阳经的区别是？', options: ['没有区别', '阴经行于内侧属脏，阳经行于外侧属腑', '阴经在上，阳经在下', '阴经是红的，阳经是白的'], correctAnswer: '阴经行于内侧属脏，阳经行于外侧属腑', explanation: '阴经分布于四肢内侧，属脏络腑；阳经分布于四肢外侧，属腑络脏。' } },
            { id: 'ex-u6l1-6', xpReward: 10, question: { id: 'q-jl-6', type: 'multiple-choice', prompt: '奇经八脉中，被称为"阳脉之海"的是？', options: ['任脉', '督脉', '冲脉', '带脉'], correctAnswer: '督脉', explanation: '督脉总督一身之阳经，称"阳脉之海"；任脉总任一身之阴经，称"阴脉之海"。' } },
          ]
        },
        {
          id: 'unit-6-lesson-2',
          unitId: 'unit-6',
          order: 2,
          title: '十二经脉循行',
          description: '掌握十二经脉的走向和流注规律',
          icon: '🗺️',
          exercises: [
            { id: 'ex-u6l2-1', xpReward: 10, question: { id: 'q-jl-7', type: 'multiple-choice', prompt: '手三阴经的循行方向是？', options: ['从头到脚', '从胸走手', '从手走头', '从脚走胸'], correctAnswer: '从胸走手', explanation: '手三阴经（肺经、心包经、心经）从胸部走向手指末端。' } },
            { id: 'ex-u6l2-2', xpReward: 10, question: { id: 'q-jl-8', type: 'multiple-choice', prompt: '手三阳经的循行方向是？', options: ['从胸走手', '从手走头', '从头走脚', '从脚走胸'], correctAnswer: '从手走头', explanation: '手三阳经（大肠经、三焦经、小肠经）从手指末端走向头部。' } },
            { id: 'ex-u6l2-3', xpReward: 10, question: { id: 'q-jl-9', type: 'true-false', prompt: '足三阴经从足走胸腹，足三阳经从头走足。', correctAnswer: 'true', explanation: '足三阴经从足走腹胸，足三阳经从头走足。这是十二经脉循环流注的规律。' } },
            { id: 'ex-u6l2-4', xpReward: 10, question: { id: 'q-jl-10', type: 'fill-in-blank', prompt: '十二经脉的流注顺序从___经开始，到___经结束，再回到___经。', correctAnswer: '肺，肝，肺', explanation: '十二经脉从手太阴肺经开始，依次流注，最后到足厥阴肝经，再由肝经注回肺经，如环无端。' } },
            { id: 'ex-u6l2-5', xpReward: 10, question: { id: 'q-jl-11', type: 'matching', prompt: '将经脉与正确的循行方向配对：', pairs: [{ left: '手太阴肺经', right: '从胸走手（内侧）' }, { left: '手阳明大肠经', right: '从手走头（外侧）' }, { left: '足阳明胃经', right: '从头走足（前侧）' }, { left: '足太阴脾经', right: '从足走胸（内侧）' }], correctAnswer: '', explanation: '经络循行遵循固定的规律，阴经走内侧，阳经走外侧。' } },
            { id: 'ex-u6l2-6', xpReward: 10, question: { id: 'q-jl-12', type: 'multiple-choice', prompt: '"经脉者，所以行血气而营阴阳"出自哪部经典？', options: ['《难经》', '《黄帝内经》', '《神农本草经》', '《伤寒论》'], correctAnswer: '《黄帝内经》', explanation: '出自《黄帝内经·灵枢》，说明经络是运行气血、协调阴阳的通道系统。' } },
          ]
        },
        {
          id: 'unit-6-lesson-3',
          unitId: 'unit-6',
          order: 3,
          title: '经络的功能与临床应用',
          description: '理解经络的生理功能和针灸理论',
          icon: '💉',
          exercises: [
            { id: 'ex-u6l3-1', xpReward: 10, question: { id: 'q-jl-13', type: 'multiple-choice', prompt: '经络的生理功能不包括：', options: ['运行气血', '联络脏腑', '传递信息', '产生激素'], correctAnswer: '产生激素', explanation: '经络运行气血、联络脏腑肢节、传导刺激信息，但不产生激素（那是内分泌系统的功能）。' } },
            { id: 'ex-u6l3-2', xpReward: 10, question: { id: 'q-jl-14', type: 'multiple-choice', prompt: '针灸治疗的基本原则是？', options: ['随便扎针', '循经取穴、调和气血', '只扎痛点', '越深越好'], correctAnswer: '循经取穴、调和气血', explanation: '针灸根据经络循行选穴，通过刺激腧穴来调整经络气血，恢复阴阳平衡。' } },
            { id: 'ex-u6l3-3', xpReward: 10, question: { id: 'q-jl-15', type: 'true-false', prompt: '每条经脉上都有穴位，刺激穴位可以治疗该经脉所过之处的疾病。', correctAnswer: 'true', explanation: '这是"经络所过，主治所及"的原则。每条经脉上的穴位都可以治疗这条经脉循行路线上的病症。' } },
            { id: 'ex-u6l3-4', xpReward: 10, question: { id: 'q-jl-16', type: 'fill-in-blank', prompt: '中医诊断经络病变的方法有___诊和___诊等。', correctAnswer: '经络，腧穴', explanation: '经络诊察包括沿经络循行路线按压寻找压痛点、结节等反应点，以及观察经脉所过部位的色泽变化。' } },
            { id: 'ex-u6l3-5', xpReward: 10, question: { id: 'q-jl-17', type: 'multiple-choice', prompt: '头痛在前额，依据经络辨证最可能与哪条经有关？', options: ['太阳经', '阳明经', '少阳经', '厥阴经'], correctAnswer: '阳明经', explanation: '前额头痛属阳明经；后头痛属太阳经；两侧头痛属少阳经；头顶痛属厥阴经。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-7',
      courseId: 'tcm-fundamentals',
      order: 7,
      title: '常用腧穴',
      description: '学习最常见的20个重要穴位',
      icon: '📍',
      requiredUnitIds: ['unit-6'],
      lessons: [
        {
          id: 'unit-7-lesson-1',
          unitId: 'unit-7',
          order: 1,
          title: '头部与上肢要穴',
          description: '认识头部和手臂上最重要的穴位',
          icon: '🎯',
          exercises: [
            { id: 'ex-u7l1-1', xpReward: 10, question: { id: 'q-acu-1', type: 'multiple-choice', prompt: '百会穴位于？', options: ['脚底', '头顶正中', '肚脐', '手掌心'], correctAnswer: '头顶正中', explanation: '百会在头顶正中线与两耳尖连线的交点处，是督脉要穴，能升阳举陷、醒脑开窍。' } },
            { id: 'ex-u7l1-2', xpReward: 10, question: { id: 'q-acu-2', type: 'multiple-choice', prompt: '合谷穴位于？', options: ['脚背', '手背第1-2掌骨之间', '肘窝', '膝盖'], correctAnswer: '手背第1-2掌骨之间', explanation: '合谷在手背第1、2掌骨之间近第2掌骨中点处，是大肠经原穴，善治头面疾病。' } },
            { id: 'ex-u7l1-3', xpReward: 10, question: { id: 'q-acu-3', type: 'true-false', prompt: '合谷穴的简便取穴法是"一手拇指横纹对准另一手虎口，拇指尖下即是"。', correctAnswer: 'true', explanation: '这也是最常用的合谷定位法。"面口合谷收"，头面部问题常取合谷。' } },
            { id: 'ex-u7l1-4', xpReward: 10, question: { id: 'q-acu-4', type: 'multiple-choice', prompt: '内关穴属于哪条经脉？', options: ['肺经', '心包经', '心经', '肝经'], correctAnswer: '心包经', explanation: '内关是手厥阴心包经的络穴，位于腕横纹上2寸两筋之间，善治心胸疾病。' } },
            { id: 'ex-u7l1-5', xpReward: 10, question: { id: 'q-acu-5', type: 'fill-in-blank', prompt: '太阳穴位于___和___之间凹陷处，主治___痛。', correctAnswer: '眉梢，外眼角，头', explanation: '太阳穴为经外奇穴，位于眉梢与外眼角之间向后约一横指的凹陷处，善治头痛、目疾。' } },
            { id: 'ex-u7l1-6', xpReward: 10, question: { id: 'q-acu-6', type: 'multiple-choice', prompt: '曲池穴的主治不包括：', options: ['发热', '肘臂疼痛', '高血压', '脚踝扭伤'], correctAnswer: '脚踝扭伤', explanation: '曲池是大肠经合穴，位于肘横纹外侧端，治疗发热、肘臂疼痛、高血压、皮肤瘙痒等，不治脚踝。' } },
          ]
        },
        {
          id: 'unit-7-lesson-2',
          unitId: 'unit-7',
          order: 2,
          title: '躯干要穴',
          description: '学习胸腹和背部的重要穴位',
          icon: '🎯',
          exercises: [
            { id: 'ex-u7l2-1', xpReward: 10, question: { id: 'q-acu-7', type: 'multiple-choice', prompt: '关元穴位于？', options: ['胸骨上', '脐下3寸', '脚底心', '后腰部'], correctAnswer: '脐下3寸', explanation: '关元在脐下3寸，是任脉要穴，为元气所藏之处，善治虚损和生殖系统疾病。' } },
            { id: 'ex-u7l2-2', xpReward: 10, question: { id: 'q-acu-8', type: 'multiple-choice', prompt: '命门穴位于？', options: ['肚脐', '第2腰椎棘突下', '颈部', '膝盖后方'], correctAnswer: '第2腰椎棘突下', explanation: '命门在腰部第2腰椎棘突下，属督脉，是补肾壮阳的要穴。' } },
            { id: 'ex-u7l2-3', xpReward: 10, question: { id: 'q-acu-9', type: 'true-false', prompt: '中脘穴位于脐上4寸，是胃的募穴，善治消化系统疾病。', correctAnswer: 'true', explanation: '中脘在脐上4寸，为胃之募穴、八会穴之腑会，是治疗胃痛、腹胀等脾胃疾病的首选穴。' } },
            { id: 'ex-u7l2-4', xpReward: 10, question: { id: 'q-acu-10', type: 'fill-in-blank', prompt: '背部的___穴群是膀胱经上的穴位，是脏腑之气输注于背部的特定穴位。', correctAnswer: '背俞', explanation: '背俞穴是脏腑之气输注于背腰部的腧穴，如心俞、肝俞、脾俞、肺俞、肾俞等。' } },
            { id: 'ex-u7l2-5', xpReward: 10, question: { id: 'q-acu-11', type: 'multiple-choice', prompt: '膻中穴位于两乳头连线中点，主要治疗？', options: ['脚痛', '胸闷、咳喘、心悸', '腹痛', '耳鸣'], correctAnswer: '胸闷、咳喘、心悸', explanation: '膻中为气会，位于胸部正中，善治一切气机不畅所致的胸闷、咳喘、心悸等。' } },
          ]
        },
        {
          id: 'unit-7-lesson-3',
          unitId: 'unit-7',
          order: 3,
          title: '下肢要穴',
          description: '掌握腿足部最关键的穴位',
          icon: '🦵',
          exercises: [
            { id: 'ex-u7l3-1', xpReward: 10, question: { id: 'q-acu-12', type: 'multiple-choice', prompt: '足三里位于？', options: ['脚底', '小腿外侧犊鼻下3寸', '膝盖正上方', '脚踝内侧'], correctAnswer: '小腿外侧犊鼻下3寸', explanation: '足三里在犊鼻（外膝眼）下3寸胫骨前缘外一横指处，是胃经合穴，为强壮保健第一要穴。' } },
            { id: 'ex-u7l3-2', xpReward: 10, question: { id: 'q-acu-13', type: 'multiple-choice', prompt: '三阴交位于？', options: ['手背', '内踝尖上3寸', '膝盖后方', '脚背最高处'], correctAnswer: '内踝尖上3寸', explanation: '三阴交在内踝尖上3寸胫骨内侧缘后方，是肝脾肾三条阴经的交会穴，善治妇科疾病。' } },
            { id: 'ex-u7l3-3', xpReward: 10, question: { id: 'q-acu-14', type: 'true-false', prompt: '涌泉穴位于足底心，是肾经的井穴，可以引火归元。', correctAnswer: 'true', explanation: '涌泉在足底（去趾）前1/3凹陷处，是肾经井穴，能滋阴降火、醒神开窍。' } },
            { id: 'ex-u7l3-4', xpReward: 10, question: { id: 'q-acu-15', type: 'multiple-choice', prompt: '"肚腹三里留"这句针灸歌诀的意思是？', options: ['三里是肚脐的别名', '腹部问题取足三里', '三里是腹部的穴位', '三里在肚子上'], correctAnswer: '腹部问题取足三里', explanation: '四总穴歌之一，腹部消化系统疾病首选足三里治疗。' } },
            { id: 'ex-u7l3-5', xpReward: 10, question: { id: 'q-acu-16', type: 'fill-in-blank', prompt: '太冲穴位于___，是___经的原穴，善治___痛。', correctAnswer: '足背第1-2跖骨间,肝,头', explanation: '太冲在足背第1、2跖骨结合部之前凹陷中，是肝经原穴，能平肝潜阳，善治头痛眩晕。' } },
          ]
        },
        {
          id: 'unit-7-lesson-4',
          unitId: 'unit-7',
          order: 4,
          title: '特定穴与配穴法',
          description: '学习五输穴和常用配穴原则',
          icon: '🧩',
          exercises: [
            { id: 'ex-u7l4-1', xpReward: 10, question: { id: 'q-acu-17', type: 'multiple-choice', prompt: '五输穴不包括？', options: ['井穴', '荥穴', '俞穴', '募穴'], correctAnswer: '募穴', explanation: '五输穴是井、荥、输、经、合五类穴位，分布在肘膝以下。募穴是另一个分类系统。' } },
            { id: 'ex-u7l4-2', xpReward: 10, question: { id: 'q-acu-18', type: 'true-false', prompt: '原穴是脏腑原气经过和留止的部位，每条正经各有一个原穴。', correctAnswer: 'true', explanation: '十二经脉各有一个原穴，是原气经过留止之处，与脏腑关系密切，善治相应脏腑病变。' } },
            { id: 'ex-u7l4-3', xpReward: 10, question: { id: 'q-acu-19', type: 'multiple-choice', prompt: '"原络配穴"是指？', options: ['随意取穴', '原穴+络穴组合使用', '只取原穴', '只取络穴'], correctAnswer: '原穴+络穴组合使用', explanation: '原络配穴法将本经原穴与相表里经的络穴配合使用，增强疗效。' } },
            { id: 'ex-u7l4-4', xpReward: 10, question: { id: 'q-acu-20', type: 'fill-in-blank', prompt: '八会穴是___、___、___、___、___、___、___、___八个精气会聚的穴位。', correctAnswer: '脏、腑、气、血、筋、脉、骨、髓', explanation: '脏会章门、腑会中脘、气会膻中、血会膈俞、筋会阳陵泉、脉会太渊、骨会大杼、髓会绝骨。' } },
            { id: 'ex-u7l4-5', xpReward: 10, question: { id: 'q-acu-21', type: 'multiple-choice', prompt: '艾灸最适合什么类型的疾病？', options: ['实热证', '虚寒证', '外伤出血', '高热不退'], correctAnswer: '虚寒证', explanation: '艾灸温经散寒、扶阳固脱，最适合虚寒性质的疾病。实热证一般忌灸。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-8',
      courseId: 'tcm-fundamentals',
      order: 8,
      title: '中药入门',
      description: '认识常用中药的四气五味和功效',
      icon: '🌿',
      requiredUnitIds: ['unit-4'],
      lessons: [
        {
          id: 'unit-8-lesson-1',
          unitId: 'unit-8',
          order: 1,
          title: '四气五味',
          description: '理解中药的寒热温凉和辛甘酸苦咸',
          icon: '🌡️',
          exercises: [
            { id: 'ex-u8l1-1', xpReward: 10, question: { id: 'q-hb-1', type: 'multiple-choice', prompt: '四气是指中药的哪四种性质？', options: ['春夏秋冬', '寒热温凉', '升降浮沉', '酸甜苦辣'], correctAnswer: '寒热温凉', explanation: '四气即寒、热、温、凉四种药性。寒凉药清热，温热药祛寒。' } },
            { id: 'ex-u8l1-2', xpReward: 10, question: { id: 'q-hb-2', type: 'multiple-choice', prompt: '五味不包括？', options: ['辛', '甘', '酸', '辣'], correctAnswer: '辣', explanation: '中药五味是辛、甘、酸、苦、咸。辣不属于中药的五味分类，辛味包含但不等于辣。' } },
            { id: 'ex-u8l1-3', xpReward: 10, question: { id: 'q-hb-3', type: 'matching', prompt: '将五味与其作用配对：', pairs: [{ left: '辛', right: '发散、行气' }, { left: '甘', right: '补益、缓急' }, { left: '酸', right: '收敛、固涩' }, { left: '苦', right: '泻下、燥湿' }, { left: '咸', right: '软坚、散结' }], correctAnswer: '', explanation: '辛散、甘补、酸收、苦泻、咸软，这是五味功效的经典概括。' } },
            { id: 'ex-u8l1-4', xpReward: 10, question: { id: 'q-hb-4', type: 'true-false', prompt: '寒性药适用于实热证，热性药适用于虚寒证。', correctAnswer: 'true', explanation: '寒者热之，热者寒之。寒凉药清热泻火，用于热证；温热药温里散寒，用于寒证。' } },
            { id: 'ex-u8l1-5', xpReward: 10, question: { id: 'q-hb-5', type: 'fill-in-blank', prompt: '味___入肝，味___入心，味___入脾，味___入肺，味___入肾。', correctAnswer: '酸，苦，甘，辛，咸', explanation: '酸入肝、苦入心、甘入脾、辛入肺、咸入肾，这是五味入五脏的归经规律。' } },
            { id: 'ex-u8l1-6', xpReward: 10, question: { id: 'q-hb-6', type: 'multiple-choice', prompt: '以下哪味药属于辛温解表药？', options: ['黄连', '麻黄', '大黄', '熟地'], correctAnswer: '麻黄', explanation: '麻黄辛温，发汗解表、宣肺平喘，是辛温解表代表药。黄连苦寒清热，大黄苦寒泻下，熟地甘温补血。' } },
          ]
        },
        {
          id: 'unit-8-lesson-2',
          unitId: 'unit-8',
          order: 2,
          title: '解表药与清热药',
          description: '认识常用的感冒药和清热药',
          icon: '🤧',
          exercises: [
            { id: 'ex-u8l2-1', xpReward: 10, question: { id: 'q-hb-7', type: 'multiple-choice', prompt: '桂枝的主要功效是？', options: ['清热泻火', '发汗解肌、温通经脉', '泻下通便', '安神助眠'], correctAnswer: '发汗解肌、温通经脉', explanation: '桂枝辛甘温，发汗解肌、温通经脉、助阳化气，是辛温解表要药。' } },
            { id: 'ex-u8l2-2', xpReward: 10, question: { id: 'q-hb-8', type: 'multiple-choice', prompt: '金银花的主要功效是？', options: ['温中散寒', '清热解毒', '活血化瘀', '泻下通便'], correctAnswer: '清热解毒', explanation: '金银花甘寒，清热解毒、疏散风热，是治疗热毒疮痈和风热感冒的常用药。' } },
            { id: 'ex-u8l2-3', xpReward: 10, question: { id: 'q-hb-9', type: 'true-false', prompt: '柴胡既可用于解表（感冒发热），又可用于疏肝解郁。', correctAnswer: 'true', explanation: '柴胡苦辛微寒，既能疏散退热（治少阳证寒热往来），又能疏肝解郁（治肝气郁结）。' } },
            { id: 'ex-u8l2-4', xpReward: 10, question: { id: 'q-hb-10', type: 'multiple-choice', prompt: '黄连的主要功效和特点是？', options: ['辛温发汗', '苦寒清热燥湿', '甘温补气', '咸寒软坚'], correctAnswer: '苦寒清热燥湿', explanation: '黄连苦寒，清热燥湿、泻火解毒，尤善清心胃之火，是清热燥湿代表药。' } },
            { id: 'ex-u8l2-5', xpReward: 10, question: { id: 'q-hb-11', type: 'fill-in-blank', prompt: '___被称为"疮家圣药"，常用于治疗疮疡肿毒。', correctAnswer: '金银花', explanation: '金银花清热解毒力强，善治一切疮疡肿毒，被称为"疮家圣药"。' } },
            { id: 'ex-u8l2-6', xpReward: 10, question: { id: 'q-hb-12', type: 'multiple-choice', prompt: '生地黄的主要功效是？', options: ['发汗解表', '清热凉血、养阴生津', '泻下攻积', '活血化瘀'], correctAnswer: '清热凉血、养阴生津', explanation: '生地黄甘苦寒，清热凉血、养阴生津，用于热入营血和阴虚内热证。' } },
          ]
        },
        {
          id: 'unit-8-lesson-3',
          unitId: 'unit-8',
          order: 3,
          title: '补益药与活血药',
          description: '学习补气、补血、活血化瘀药物',
          icon: '💪',
          exercises: [
            { id: 'ex-u8l3-1', xpReward: 10, question: { id: 'q-hb-13', type: 'multiple-choice', prompt: '人参的主要功效是？', options: ['清热泻火', '大补元气', '活血化瘀', '泻下通便'], correctAnswer: '大补元气', explanation: '人参甘微苦微温，大补元气、补脾益肺、生津安神，是补气第一要药。' } },
            { id: 'ex-u8l3-2', xpReward: 10, question: { id: 'q-hb-14', type: 'multiple-choice', prompt: '当归的主要功效是？', options: ['清热凉血', '补血活血、调经止痛', '利水渗湿', '消食化积'], correctAnswer: '补血活血、调经止痛', explanation: '当归甘辛温，补血活血、调经止痛、润肠通便，是妇科调经要药。' } },
            { id: 'ex-u8l3-3', xpReward: 10, question: { id: 'q-hb-15', type: 'true-false', prompt: '黄芪和人参都能补气，但黄芪更偏于固表利水，人参更偏于大补元气。', correctAnswer: 'true', explanation: '黄芪甘温，补气固表、利水消肿、托毒生肌，作用偏表偏外；人参大补元气，作用偏里偏深。' } },
            { id: 'ex-u8l3-4', xpReward: 10, question: { id: 'q-hb-16', type: 'multiple-choice', prompt: '丹参的主要功效是？', options: ['发汗解表', '活血祛瘀、清心除烦', '消食化积', '化痰止咳'], correctAnswer: '活血祛瘀、清心除烦', explanation: '丹参苦微寒，活血祛瘀、通经止痛、清心除烦，广泛应用于各种血瘀证。' } },
            { id: 'ex-u8l3-5', xpReward: 10, question: { id: 'q-hb-17', type: 'fill-in-blank', prompt: '___与当归配伍，是补血活血最经典的组合之一。', correctAnswer: '川芎', explanation: '川芎活血行气、祛风止痛，与当归配伍既补血又活血，是四物汤中的经典配伍。' } },
            { id: 'ex-u8l3-6', xpReward: 10, question: { id: 'q-hb-18', type: 'multiple-choice', prompt: '枸杞子的主要功效是？', options: ['清热泻火', '滋补肝肾、明目', '发汗解表', '活血化瘀'], correctAnswer: '滋补肝肾、明目', explanation: '枸杞子甘平，滋补肝肾、益精明目，是养生保健常用药。' } },
          ]
        },
        {
          id: 'unit-8-lesson-4',
          unitId: 'unit-8',
          order: 4,
          title: '祛湿药与理气药',
          description: '认识祛除湿气、调理气机的常用药',
          icon: '🍃',
          exercises: [
            { id: 'ex-u8l4-1', xpReward: 10, question: { id: 'q-hb-19', type: 'multiple-choice', prompt: '茯苓的主要功效是？', options: ['发汗解表', '利水渗湿、健脾宁心', '活血化瘀', '清热凉血'], correctAnswer: '利水渗湿、健脾宁心', explanation: '茯苓甘淡平，利水渗湿、健脾、宁心安神，是利水渗湿第一要药。' } },
            { id: 'ex-u8l4-2', xpReward: 10, question: { id: 'q-hb-20', type: 'multiple-choice', prompt: '陈皮的主要功效是？', options: ['清热解毒', '理气健脾、燥湿化痰', '活血化瘀', '补气养血'], correctAnswer: '理气健脾、燥湿化痰', explanation: '陈皮辛苦温，理气健脾、燥湿化痰，是治疗脾胃气滞和痰湿的要药。' } },
            { id: 'ex-u8l4-3', xpReward: 10, question: { id: 'q-hb-21', type: 'true-false', prompt: '陈皮就是晒干的橘子皮，越陈越好，故称"陈皮"。', correctAnswer: 'true', explanation: '陈皮是橘及其栽培变种的干燥成熟果皮，以陈久者为佳。有理气健脾、燥湿化痰之效。' } },
            { id: 'ex-u8l4-4', xpReward: 10, question: { id: 'q-hb-22', type: 'multiple-choice', prompt: '广藿香的主要功效是？', options: ['补气', '芳香化湿、和中止呕', '活血', '攻下'], correctAnswer: '芳香化湿、和中止呕', explanation: '广藿香辛微温，芳香化湿、和中止呕、发表解暑，是夏季暑湿感冒常用药。' } },
            { id: 'ex-u8l4-5', xpReward: 10, question: { id: 'q-hb-23', type: 'fill-in-blank', prompt: '___是"中药八珍"之一，能燥湿健脾、祛风散寒，常用于湿困脾胃。', correctAnswer: '苍术', explanation: '苍术辛苦温，燥湿健脾、祛风散寒，是治疗湿阻中焦的常用药，常与厚朴、陈皮同用。' } },
            { id: 'ex-u8l4-6', xpReward: 10, question: { id: 'q-hb-24', type: 'multiple-choice', prompt: '半夏的主要功效是？', options: ['补气养血', '燥湿化痰、降逆止呕', '清热解毒', '活血化瘀'], correctAnswer: '燥湿化痰、降逆止呕', explanation: '半夏辛温（有毒，需炮制），燥湿化痰、降逆止呕、消痞散结，是化痰止呕要药。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-9',
      courseId: 'tcm-fundamentals',
      order: 9,
      title: '经典方剂',
      description: '掌握中医最著名的经典方剂',
      icon: '📜',
      requiredUnitIds: ['unit-8'],
      lessons: [
        {
          id: 'unit-9-lesson-1',
          unitId: 'unit-9',
          order: 1,
          title: '补益名方',
          description: '四君子汤、四物汤等补益基础方',
          icon: '🍵',
          exercises: [
            { id: 'ex-u9l1-1', xpReward: 10, question: { id: 'q-fj-1', type: 'multiple-choice', prompt: '四君子汤的组成是？', options: ['人参白术茯苓甘草', '当归川芎白芍熟地', '麻黄桂枝杏仁甘草', '黄连黄芩黄柏栀子'], correctAnswer: '人参白术茯苓甘草', explanation: '四君子汤由人参、白术、茯苓、甘草组成，是补气的基础方。' } },
            { id: 'ex-u9l1-2', xpReward: 10, question: { id: 'q-fj-2', type: 'multiple-choice', prompt: '四物汤的组成是？', options: ['人参白术茯苓甘草', '当归川芎白芍熟地', '柴胡黄芩半夏生姜', '大黄芒硝枳实厚朴'], correctAnswer: '当归川芎白芍熟地', explanation: '四物汤由当归、川芎、白芍、熟地黄组成，是补血调血的基础方。' } },
            { id: 'ex-u9l1-3', xpReward: 10, question: { id: 'q-fj-3', type: 'true-false', prompt: '八珍汤就是四君子汤与四物汤的合方，气血双补。', correctAnswer: 'true', explanation: '八珍汤=四君子汤+四物汤，加上生姜大枣，是气血双补的代表方。' } },
            { id: 'ex-u9l1-4', xpReward: 10, question: { id: 'q-fj-4', type: 'fill-in-blank', prompt: '六味地黄丸由熟地、山萸肉、山药、___、___、___组成。', correctAnswer: '泽泻，茯苓，丹皮', explanation: '六味地黄丸三补三泻：熟地补肾、山萸肉补肝、山药补脾（三补）；泽泻泻肾、丹皮泻肝、茯苓泻脾（三泻）。' } },
            { id: 'ex-u9l1-5', xpReward: 10, question: { id: 'q-fj-5', type: 'multiple-choice', prompt: '归脾汤主要治疗什么证？', options: ['肝火上炎', '心脾两虚（失眠健忘）', '肺热咳嗽', '肾阳虚水肿'], correctAnswer: '心脾两虚（失眠健忘）', explanation: '归脾汤益气补血、健脾养心，治疗心脾两虚所致的失眠、健忘、心悸、食少等。' } },
            { id: 'ex-u9l1-6', xpReward: 10, question: { id: 'q-fj-6', type: 'multiple-choice', prompt: '十全大补汤在八珍汤基础上加了哪两味药？', options: ['麻黄和桂枝', '黄芪和肉桂', '大黄和芒硝', '半夏和陈皮'], correctAnswer: '黄芪和肉桂', explanation: '十全大补汤=八珍汤+黄芪+肉桂，温补气血之力更强。' } },
          ]
        },
        {
          id: 'unit-9-lesson-2',
          unitId: 'unit-9',
          order: 2,
          title: '解表与和解方',
          description: '麻黄汤、桂枝汤、小柴胡汤等',
          icon: '🤒',
          exercises: [
            { id: 'ex-u9l2-1', xpReward: 10, question: { id: 'q-fj-7', type: 'multiple-choice', prompt: '麻黄汤的组成是？', options: ['麻黄桂枝杏仁甘草', '柴胡黄芩半夏生姜', '大黄芒硝枳实厚朴', '人参白术茯苓甘草'], correctAnswer: '麻黄桂枝杏仁甘草', explanation: '麻黄汤由麻黄、桂枝、杏仁、甘草组成，是辛温解表的代表方。' } },
            { id: 'ex-u9l2-2', xpReward: 10, question: { id: 'q-fj-8', type: 'multiple-choice', prompt: '桂枝汤中桂枝与白芍的配伍关系是？', options: ['互不相关', '一散一收，调和营卫', '两个都是发散', '两个都是收敛'], correctAnswer: '一散一收，调和营卫', explanation: '桂枝辛温发散（散），白芍酸甘收敛（收），一散一收，调和营卫。' } },
            { id: 'ex-u9l2-3', xpReward: 10, question: { id: 'q-fj-9', type: 'true-false', prompt: '小柴胡汤是和解少阳的代表方，主治寒热往来、胸胁苦满。', correctAnswer: 'true', explanation: '小柴胡汤由柴胡、黄芩、半夏、生姜、人参、甘草、大枣组成，是和解少阳的经典名方。' } },
            { id: 'ex-u9l2-4', xpReward: 10, question: { id: 'q-fj-10', type: 'fill-in-blank', prompt: '银翘散是治疗___感冒的代表方。', correctAnswer: '风热', explanation: '银翘散辛凉解表，清热解毒，治疗风热感冒初起。麻黄汤用于风寒感冒。' } },
            { id: 'ex-u9l2-5', xpReward: 10, question: { id: 'q-fj-11', type: 'multiple-choice', prompt: '服用桂枝汤后需要"啜热稀粥"的目的是？', options: ['为了口感好', '助药力发汗', '纯粹是古人的习惯', '防止药物伤胃'], correctAnswer: '助药力发汗', explanation: '桂枝汤服后啜热稀粥，借水谷之精气助药力发汗，使微汗出而邪去。' } },
          ]
        },
        {
          id: 'unit-9-lesson-3',
          unitId: 'unit-9',
          order: 3,
          title: '清热与泻下方',
          description: '白虎汤、大承气汤等经典名方',
          icon: '🔥',
          exercises: [
            { id: 'ex-u9l3-1', xpReward: 10, question: { id: 'q-fj-12', type: 'multiple-choice', prompt: '白虎汤主治什么证？', options: ['风寒感冒', '阳明气分热盛（四大症）', '血虚', '水肿'], correctAnswer: '阳明气分热盛（四大症）', explanation: '白虎汤（石膏知母甘草粳米）主治阳明气分热盛，以身大热、口大渴、汗大出、脉洪大为特征。' } },
            { id: 'ex-u9l3-2', xpReward: 10, question: { id: 'q-fj-13', type: 'multiple-choice', prompt: '大承气汤由哪几味药组成？', options: ['石膏知母甘草', '大黄芒硝枳实厚朴', '柴胡黄芩半夏', '当归川芎白芍'], correctAnswer: '大黄芒硝枳实厚朴', explanation: '大承气汤（大黄芒硝枳实厚朴）峻下热结，主治阳明腑实证（痞满燥实俱全）。' } },
            { id: 'ex-u9l3-3', xpReward: 10, question: { id: 'q-fj-14', type: 'true-false', prompt: '龙胆泻肝汤是清肝胆实火的代表方。', correctAnswer: 'true', explanation: '龙胆泻肝汤清肝胆实火、利肝胆湿热，主治肝胆实火上炎和肝胆湿热下注证。' } },
            { id: 'ex-u9l3-4', xpReward: 10, question: { id: 'q-fj-15', type: 'fill-in-blank', prompt: '大承气汤中，___为君药，泻热通便；___为臣药，软坚润燥。', correctAnswer: '大黄，芒硝', explanation: '大黄苦寒泻热通便为君，芒硝咸寒软坚润燥为臣，枳实厚朴行气破结为佐使。' } },
            { id: 'ex-u9l3-5', xpReward: 10, question: { id: 'q-fj-16', type: 'multiple-choice', prompt: '服用大承气汤后若大便已通，应该？', options: ['继续加量服用', '立即停药', '改服其他方', '随意增加次数'], correctAnswer: '立即停药', explanation: '大承气汤为攻下峻剂，得下即止，不可过服，以免损伤正气。' } },
          ]
        }
      ]
    },
    {
      id: 'unit-10',
      courseId: 'tcm-fundamentals',
      order: 10,
      title: '四诊合参',
      description: '掌握望闻问切四种诊断方法',
      icon: '🔍',
      requiredUnitIds: ['unit-4', 'unit-6'],
      lessons: [
        {
          id: 'unit-10-lesson-1',
          unitId: 'unit-10',
          order: 1,
          title: '望诊——观其外知其内',
          description: '通过观察外在表现判断内在健康',
          icon: '👁️',
          exercises: [
            { id: 'ex-u10l1-1', xpReward: 10, question: { id: 'q-dx-1', type: 'multiple-choice', prompt: '望诊中最重要的是？', options: ['望头发', '望舌（舌诊）', '望耳朵', '望指甲'], correctAnswer: '望舌（舌诊）', explanation: '舌诊是中医望诊的核心，舌为心之苗，又是脾之外候，能较客观地反映体内状况。' } },
            { id: 'ex-u10l1-2', xpReward: 10, question: { id: 'q-dx-2', type: 'multiple-choice', prompt: '正常舌象的特征是？', options: ['舌质红、苔黄厚', '舌质淡红、苔薄白', '舌质紫暗、苔黑', '舌质白、无苔'], correctAnswer: '舌质淡红、苔薄白', explanation: '正常舌象为"淡红舌、薄白苔"，表示气血充足、胃气正常。' } },
            { id: 'ex-u10l1-3', xpReward: 10, question: { id: 'q-dx-3', type: 'matching', prompt: '将舌象变化与对应的病理配对：', pairs: [{ left: '舌质淡白', right: '气血两虚' }, { left: '舌质红', right: '热证' }, { left: '舌质紫暗/瘀斑', right: '血瘀' }, { left: '苔黄腻', right: '湿热' }], correctAnswer: '', explanation: '舌质反映脏腑气血的盛衰，舌苔反映邪气的性质和深浅。' } },
            { id: 'ex-u10l1-4', xpReward: 10, question: { id: 'q-dx-4', type: 'true-false', prompt: '望面色时，青色主寒证、痛证、血瘀、惊风。', correctAnswer: 'true', explanation: '青为肝之色，主寒证、痛证、血瘀、惊风。如面色青灰多提示心脉瘀阻。' } },
            { id: 'ex-u10l1-5', xpReward: 10, question: { id: 'q-dx-5', type: 'fill-in-blank', prompt: '五色主病：赤主___，白主___，黄主___，青主___，黑主___。', correctAnswer: '热，虚，湿，寒（瘀），肾虚', explanation: '赤主热证（满面通红为实热，两颧潮红为虚热），白主虚寒/血虚，黄主湿/脾虚，青主寒/瘀/痛，黑主肾虚/水饮。' } },
            { id: 'ex-u10l1-6', xpReward: 10, question: { id: 'q-dx-6', type: 'multiple-choice', prompt: '看舌苔的厚薄主要判断什么？', options: ['年龄大小', '病邪的深浅和胃气的盛衰', '性别', '身高体重'], correctAnswer: '病邪的深浅和胃气的盛衰', explanation: '苔薄为病邪在表，苔厚为病邪入里或食积痰湿内停。有苔表示胃气尚存。' } },
          ]
        },
        {
          id: 'unit-10-lesson-2',
          unitId: 'unit-10',
          order: 2,
          title: '闻诊与问诊',
          description: '听声音、嗅气味、系统问病情',
          icon: '👂',
          exercises: [
            { id: 'ex-u10l2-1', xpReward: 10, question: { id: 'q-dx-7', type: 'multiple-choice', prompt: '闻诊包括？', options: ['只有听声音', '听声音和嗅气味', '只有问问题', '只有看面色'], correctAnswer: '听声音和嗅气味', explanation: '闻诊包括听声音（语声、呼吸、咳嗽等）和嗅气味（口臭、体味、排泄物气味等）。' } },
            { id: 'ex-u10l2-2', xpReward: 10, question: { id: 'q-dx-8', type: 'true-false', prompt: '问诊的"十问歌"是中医系统问诊的重要指南。', correctAnswer: 'true', explanation: '十问歌概括了中医问诊的主要内容：一问寒热、二问汗、三问头身、四问便、五问饮食、六问胸腹、七问耳目、八问渴、九问旧病、十问因。' } },
            { id: 'ex-u10l2-3', xpReward: 10, question: { id: 'q-dx-9', type: 'multiple-choice', prompt: '患者声音低微、少气懒言，多属于？', options: ['实证', '热证', '虚证（气虚）', '寒证'], correctAnswer: '虚证（气虚）', explanation: '语声低微、少气懒言是气虚的典型表现。声高气粗多属实证。' } },
            { id: 'ex-u10l2-4', xpReward: 10, question: { id: 'q-dx-10', type: 'fill-in-blank', prompt: '恶寒发热同时出现多见于___证，寒热往来多见于___证。', correctAnswer: '表，少阳', explanation: '恶寒发热并见是表证的特征（外邪侵袭肌表）；寒热往来是少阳病的特征（正邪交争于半表半里）。' } },
            { id: 'ex-u10l2-5', xpReward: 10, question: { id: 'q-dx-11', type: 'multiple-choice', prompt: '潮热（午后或夜间定时发热）最常见于？', options: ['风寒感冒', '阴虚内热', '气虚', '血瘀'], correctAnswer: '阴虚内热', explanation: '午后潮热、夜间发热是阴虚内热的典型表现，同时常伴盗汗、口干、五心烦热。' } },
          ]
        },
        {
          id: 'unit-10-lesson-3',
          unitId: 'unit-10',
          order: 3,
          title: '脉诊入门',
          description: '了解切脉的基本方法',
          icon: '🤚',
          exercises: [
            { id: 'ex-u10l3-1', xpReward: 10, question: { id: 'q-dx-12', type: 'multiple-choice', prompt: '切脉最常用的部位是？', options: ['颈部', '手腕（寸口脉）', '脚踝', '肘窝'], correctAnswer: '手腕（寸口脉）', explanation: '寸口（手腕桡动脉处）是切脉最常用的部位，分为寸、关、尺三部。' } },
            { id: 'ex-u10l3-2', xpReward: 10, question: { id: 'q-dx-13', type: 'multiple-choice', prompt: '寸口脉的寸关尺三部各对应哪些脏腑？', options: ['随意分配', '左寸心、左关肝、左尺肾；右寸肺、右关脾、右尺命门', '全都是心', '全都是肝'], correctAnswer: '左寸心、左关肝、左尺肾；右寸肺、右关脾、右尺命门', explanation: '左手寸关尺对应心肝肾，右手寸关尺对应肺脾命门（肾阳）。' } },
            { id: 'ex-u10l3-3', xpReward: 10, question: { id: 'q-dx-14', type: 'true-false', prompt: '正常脉象（平脉）的特点是：不浮不沉、不快不慢、从容和缓、节律均匀。', correctAnswer: 'true', explanation: '平脉是健康人的脉象特征，一息4-5至（每分钟约60-90次），有胃、有神、有根。' } },
            { id: 'ex-u10l3-4', xpReward: 10, question: { id: 'q-dx-15', type: 'matching', prompt: '将常见脉象与主病配对：', pairs: [{ left: '浮脉', right: '表证' }, { left: '沉脉', right: '里证' }, { left: '数脉', right: '热证' }, { left: '迟脉', right: '寒证' }, { left: '滑脉', right: '痰湿、食积' }, { left: '涩脉', right: '血瘀、精伤' }], correctAnswer: '', explanation: '这是最常见脉象的主病规律。浮主表、沉主里、数主热、迟主寒、滑主痰湿、涩主血瘀。' } },
            { id: 'ex-u10l3-5', xpReward: 10, question: { id: 'q-dx-16', type: 'fill-in-blank', prompt: '脉诊时需要患者保持___状态，医生用___指同时按在寸口脉上，分别感受___、___、___三部的脉象。', correctAnswer: '平静，三，寸，关，尺', explanation: '切脉时患者需安静，医者右手三指（食指-寸、中指-关、无名指-尺）同时按在寸口，分别触诊三部脉象。' } },
          ]
        }
      ]
    }
  ]
}
