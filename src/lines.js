// What mini-Adham says on each level, in English and Egyptian Arabic.
export const LEVEL_NAMES = ['Ground', 'Foundation', 'Stack', 'Work', 'Research', 'Arena', 'Capstone'];
export const MODES = ['wave', 'point', 'think', 'point', 'point', 'celebrate', 'wave'];

export const LINES = {
  en: [
    ["Hey! I'm Adham. Well, the mini version.", 'This pyramid is my stack. Every step is one layer of what I do.', "Scroll and I'll climb it with you. Click me if you get bored."],
    ['Step one: the foundation.', 'I study AI & Data Science at Badya University, class of 2028.', 'My favourite part is the backend: APIs, databases, the logic nobody sees.'],
    ['These are my tools. They orbit me all day.', 'Node.js and PostgreSQL for servers, C++ for contests, Python for data.', 'And tests. Lots of tests.'],
    ['My projects! Real screenshots, real repos.', 'SmartHabbit is my main one. I built most of its backend.', 'See the space game on that screen? We built it for NASA Space Apps 2026.'],
    ['Research level. Watch the particles.', 'Sensor data goes to XGBoost, network traffic goes to Isolation Forest.', 'They meet in the gold node and become one risk score. It is on IEEE Xplore!'],
    ['The arena! In ICPC, every balloon means a solved problem.', '88th in the ECPC qualifications in 2025, 177th in 2026. The next one is mine.', 'And that rocket? Still orbiting since Space Apps.'],
    ['We made it to the top!', 'Write me a request below and the capstone will fire it.', 'I reply faster than my APIs. Almost.'],
  ],
  ar: [
    ['أهلاً! أنا أدهم… النسخة الميني يعني 😄', 'الهرم ده هو الـ stack بتاعي، كل درجة فيه طبقة من شغلي.', 'اعمل scroll وأنا هطلع معاك درجة درجة. ولو زهقت دوس عليّا.'],
    ['أول درجة: الأساس.', 'بدرس AI و Data Science في جامعة بادية، دفعة 2028.', 'بس أكتر حاجة بحبها الباك إند: الـ APIs والداتابيز والمنطق اللي محدش بيشوفه.'],
    ['دي أدواتي، بتلف حواليا طول اليوم.', 'Node.js و PostgreSQL للسيرفرات، C++ للمسابقات، و Python للداتا.', 'وتستات… تستات كتير.'],
    ['دي مشاريعي! سكرين شوتس حقيقية وريبوز حقيقية.', 'SmartHabbit أهمهم، وأنا عامل أغلب الباك إند بتاعه.', 'شايف لعبة الفضاء اللي على الشاشة؟ عملناها في هاكاثون ناسا Space Apps 2026.'],
    ['دي درجة البحث العلمي. بص على النقط اللي بتجري.', 'داتا الحساسات بتروح لـ XGBoost، وترافيك الشبكة بيروح لـ Isolation Forest.', 'بيتقابلوا في النقطة الدهب ويطلعوا risk score واحد. والورقة منشورة على IEEE Xplore!'],
    ['الأرينا! في الـ ICPC كل بالونة معناها مسألة اتحلت.', 'المركز 88 في تصفيات ECPC سنة 2025، و177 في 2026. الجاية بتاعتي.', 'والصاروخ ده؟ لسه بيلف من أيام Space Apps.'],
    ['وصلنا القمة!', 'ابعتلي request من تحت، والقمة الدهب هتطلقه.', 'برد أسرع من الـ APIs بتاعتي… تقريباً.'],
  ],
};

export const POKES = {
  en: ['Hey, that tickles!', "Status 418: I'm a teapot.", 'Did you try turning it off and on again?', 'SELECT * FROM snacks;', 'My code works and I know exactly why. Mostly.', 'Rate limit: 5 pokes per 15 minutes. Just kidding.'],
  ar: ['بتزغزغني كده!', 'Status 418: أنا براد شاي ☕', 'جربت تقفله وتفتحه تاني؟', 'SELECT * FROM snacks;', 'الكود شغال وأنا عارف ليه… غالباً.', 'Rate limit: خمس زقات كل ربع ساعة. بهزر.'],
};
export const SENT = { en: '201 Created! Your request reached the top.', ar: '201 Created! الريكويست بتاعك وصل للقمة.' };

export const CLICKS = {
  balloon: { en: 'Pop! Every balloon is a solved problem. It comes back when I solve another one.', ar: 'بوم! كل بالونة مسألة اتحلت، وهترجع لما أحل واحدة كمان.' },
  rocket: { en: 'Full thrust! Same energy as hackathon weekend.', ar: 'Full thrust! نفس طاقة ويك إند الهاكاثون.' },
  moon: { en: 'The Moon from Level 0 of CAPCOM: Storm Watch says hi.', ar: 'القمر بتاع Level 0 في لعبة CAPCOM بيسلّم عليك.' },
  cap: { en: 'You found the capstone! Now send me a real request below.', ar: 'لقيت القمة الدهب! ابعتلي بقى request بجد من تحت.' },
};

// where each skill shows up in my work (for the Stack chips)
export const SKILLS = {
  'C++': ['ICPC contests and Sentinel FDS, a Qt desktop app.', 'مسابقات ICPC، و Sentinel FDS برنامج ديسكتوب بـ Qt.'],
  TypeScript: ['The SmartHabbit backend and the BU-LabTrack frontend.', 'الباك إند بتاع SmartHabbit والفرونت بتاع BU-LabTrack.'],
  JavaScript: ['CAPCOM: Storm Watch and this whole pyramid.', 'لعبة CAPCOM والهرم ده كله.'],
  Python: ['The IoT Sentinel experiments and Shubha\'s fraud model.', 'تجارب IoT Sentinel وموديل الاحتيال بتاع شُبهة.'],
  SQL: ['Every schema I design. SmartHabbit has 11 migrations.', 'كل سكيما بعملها. SmartHabbit فيه 11 migration.'],
  Java: ['ITI DevBelt OOP and the HackerRank certificate.', 'كورس OOP في ITI وشهادة HackerRank.'],
  'C#': ['University coursework, and a lot of curiosity.', 'شغل الجامعة… وفضول كتير.'],
  'Node.js': ['My main backend runtime: SmartHabbit and BU-LabTrack.', 'الـ runtime الأساسي بتاعي: SmartHabbit و BU-LabTrack.'],
  Express: ['Routes, middleware and error handling in SmartHabbit.', 'الـ routes والـ middleware والـ error handling في SmartHabbit.'],
  REST: ['BU-LabTrack: labs, equipment, reservations, maintenance.', 'BU-LabTrack: معامل وأجهزة وحجوزات وصيانة.'],
  JWT: ['Access + refresh tokens, with bcrypt and rate limits.', 'Access و refresh tokens مع bcrypt و rate limit.'],
  'socket.io': ['Real-time chat and notifications in SmartHabbit.', 'الشات والإشعارات اللحظية في SmartHabbit.'],
  PostgreSQL: ['SmartHabbit\'s database, tested against a scratch DB.', 'داتابيز SmartHabbit، ومتيسّتة على داتابيز مؤقتة.'],
  SQLite: ['Sentinel FDS stores its transactions in SQLite.', 'Sentinel FDS بيخزن العمليات في SQLite.'],
  MySQL: ['Database courses and side projects.', 'كورسات الداتابيز ومشاريع جانبية.'],
  XGBoost: ['The supervised pipeline in my IEEE paper.', 'الـ pipeline الـ supervised في ورقة IEEE.'],
  'Isolation Forest': ['The unsupervised pipeline in my IEEE paper.', 'الـ pipeline الـ unsupervised في ورقة IEEE.'],
  'Power BI': ['DataCamp: Introduction to Power BI.', 'كورس Power BI على DataCamp.'],
  React: ['BU-LabTrack\'s frontend, with shadcn/ui.', 'فرونت BU-LabTrack مع shadcn/ui.'],
  'three.js': ['CAPCOM: Storm Watch, and the pyramid you\'re standing on.', 'لعبة CAPCOM، والهرم اللي إنت واقف عليه.'],
  Docker: ['SmartHabbit ships in a non-root Docker image.', 'SmartHabbit بيتشحن في Docker image من غير root.'],
  Git: ['Every project. Small commits, clear messages.', 'كل مشروع. commits صغيرة ورسايل واضحة.'],
  Jest: ['Integration tests with supertest in SmartHabbit.', 'تستات integration مع supertest في SmartHabbit.'],
  Postman: ['Testing every API before the frontend touches it.', 'بجرب كل API قبل ما الفرونت يلمسه.'],
  Qt: ['Sentinel FDS, a C++17 desktop app.', 'Sentinel FDS، برنامج ديسكتوب بـ C++17.'],
  Vercel: ['CAPCOM is deployed there, with a serverless function.', 'CAPCOM متنشرة هناك مع serverless function.'],
};
export const MOOD_BY_LEVEL = ['happy', 'focused', 'thinking', 'excited', 'focused', 'cool', 'happy'];
export const EXTRA = {
  term: { en: 'Ooh, a terminal. Type "help".', ar: 'تيرمينال! اكتب help.' },
  threatHi: { en: 'Critical risk! The fusion layer would raise the alarm right now.', ar: 'خطر عالي جداً! طبقة الـ fusion كانت هتضرب إنذار حالاً.' },
  gameStart: { en: 'Go go go! Pop them before they fly away!', ar: 'يلا يلا! فرقعهم قبل ما يطيروا!' },
  gameEnd: { en: (n) => `${n} balloons! ${n >= 8 ? 'That\'s a gold-medal pace.' : 'Not bad. Try again?'}`, ar: (n) => `${n} بالونة! ${n >= 8 ? 'ده مستوى ميدالية دهب.' : 'مش وحش. تجرب تاني؟'}` },
  wake: { en: 'Huh? I wasn\'t sleeping. I was… compiling.', ar: 'ها؟ أنا مكنتش نايم… كنت بعمل compile.' },
  dizzy: { en: 'Whoa, slow down! The stairs are spinning.', ar: 'بالراحة! السلم بيلف بيا.' },
  shy: { en: 'Okay okay, I get it, I\'m cute.', ar: 'خلاص خلاص، عرفت إني كيوت.' },
  annoyed: { en: 'Error 429: too many pokes.', ar: 'Error 429: زقات كتير أوي.' },
  allArtifacts: { en: 'You found all ten artifacts! You\'d be a great teammate.', ar: 'لقيت العشر قطع كلهم! إنت هتبقى teammate جامد.' },
  focus: { en: 'Here it is, up close.', ar: 'أهو، من قريب.' },
};
