// What mini-Adham says on each level, in English and Egyptian Arabic.
export const LEVEL_NAMES = ['Start', 'About', 'Stack', 'Work', 'Research', 'Contests', 'Contact'];
export const MODES = ['wave', 'point', 'think', 'point', 'point', 'celebrate', 'wave'];

export const LINES = {
  en: [
    ["Hi, I'm Adham. This pyramid is my stack, one layer per step.", 'Scroll to climb with me, or click me anytime.'],
    ['Step one. I study AI & Data Science, but backend is home.', "APIs, databases, and the logic nobody sees. That's my favourite part."],
    ['Node.js and PostgreSQL for servers, C++ for contests, Python for data.', 'And tests: Jest and supertest on the SmartHabbit backend.'],
    ['SmartHabbit is my main project. I built most of its backend.', 'That space game? We built it for NASA Space Apps 2026.'],
    ['Sensor data goes to XGBoost, network traffic to Isolation Forest.', 'Both fuse into one risk tier. The paper is on IEEE Xplore.'],
    ['In ICPC, every balloon means a solved problem.', 'ECPC qualifications: 88th in 2025, 177th in 2026.'],
    ['We made it to the top. Send me a message below.', 'Or grab my email, GitHub or LinkedIn from the links.'],
  ],
  ar: [
    ['أهلاً، أنا أدهم. الهرم ده الـ stack بتاعي، كل درجة طبقة.', 'اعمل scroll وأنا هطلع معاك، ودوس عليّا في أي وقت.'],
    ['أول درجة. بدرس AI و Data Science، بس قلبي مع الباك إند.', 'الـ APIs والداتابيز والمنطق اللي محدش بيشوفه، دي أكتر حاجة بحبها.'],
    ['Node.js و PostgreSQL للسيرفرات، C++ للمسابقات، و Python للداتا.', 'وتستات: Jest و supertest على الباك إند بتاع SmartHabbit.'],
    ['SmartHabbit أهم مشروع عندي، وأنا عامل أغلب الباك إند بتاعه.', 'لعبة الفضاء دي؟ عملناها في NASA Space Apps 2026.'],
    ['داتا الحساسات بتروح لـ XGBoost، وترافيك الشبكة لـ Isolation Forest.', 'الاتنين بيتجمعوا في risk tier واحد، والورقة منشورة على IEEE Xplore.'],
    ['في الـ ICPC، كل بالونة معناها مسألة اتحلت.', 'تصفيات ECPC: المركز 88 سنة 2025، و177 سنة 2026.'],
    ['وصلنا القمة! ابعتلي رسالة من تحت.', 'أو خد الإيميل أو الـ GitHub أو الـ LinkedIn من اللينكات.'],
  ],
};

export const POKES = {
  en: ['Hey, that tickles!', "Status 418: I'm a teapot.", 'SELECT * FROM snacks;'],
  ar: ['بتزغزغني كده!', 'Status 418: أنا براد شاي ☕', 'SELECT * FROM snacks;'],
};
export const SENT = { en: '201 Created. Message sent.', ar: '201 Created. الرسالة اتبعتت.' };

export const CLICKS = {
  balloon: { en: 'Pop! Each balloon is a solved problem.', ar: 'بوم! كل بالونة مسألة اتحلت.' },
  rocket: { en: 'Full thrust! Same energy as hackathon weekend.', ar: 'Full thrust! نفس طاقة ويك إند الهاكاثون.' },
  moon: { en: 'The Moon from Level 0 of CAPCOM: Storm Watch says hi.', ar: 'القمر بتاع Level 0 في لعبة CAPCOM بيسلّم عليك.' },
  cap: { en: 'You found the capstone. Send me a message below.', ar: 'لقيت القمة الدهب! ابعتلي رسالة من تحت.' },
};

// where each skill shows up in my work (for the Stack chips)
export const SKILLS = {
  'C++': ['ICPC contests and Sentinel FDS, a Qt desktop app.', 'مسابقات ICPC، و Sentinel FDS برنامج ديسكتوب بـ Qt.'],
  TypeScript: ['The SmartHabbit backend and the BU-LabTrack frontend.', 'الباك إند بتاع SmartHabbit والفرونت بتاع BU-LabTrack.'],
  JavaScript: ['CAPCOM: Storm Watch and this 3D portfolio.', 'لعبة CAPCOM والبورتفوليو الـ 3D ده.'],
  Python: ['Experiments for my IEEE IoT anomaly-detection paper.', 'تجارب ورقة IEEE بتاعتي عن anomaly detection في IoT.'],
  SQL: ['SmartHabbit schema: 11 PostgreSQL migrations.', 'سكيما SmartHabbit: 11 migration على PostgreSQL.'],
  Java: ['OOP at ITI DevBelt; HackerRank Java (Basic) certificate.', 'OOP في ITI DevBelt، وشهادة Java (Basic) من HackerRank.'],
  'Node.js': ['My main backend runtime: SmartHabbit and BU-LabTrack.', 'الـ runtime الأساسي بتاعي: SmartHabbit و BU-LabTrack.'],
  Express: ['Routes, middleware and error handling in SmartHabbit.', 'الـ routes والـ middleware والـ error handling في SmartHabbit.'],
  REST: ['BU-LabTrack: labs, equipment, reservations, maintenance.', 'BU-LabTrack: معامل وأجهزة وحجوزات وصيانة.'],
  JWT: ['Access + refresh tokens, with bcrypt and rate limits.', 'Access و refresh tokens مع bcrypt و rate limit.'],
  'socket.io': ['Real-time chat and notifications in SmartHabbit.', 'الشات والإشعارات اللحظية في SmartHabbit.'],
  PostgreSQL: ['SmartHabbit\'s database, tested against a scratch DB.', 'داتابيز SmartHabbit، ومتيسّتة على داتابيز مؤقتة.'],
  SQLite: ['Sentinel FDS stores its transactions in SQLite.', 'Sentinel FDS بيخزن العمليات في SQLite.'],
  MySQL: ['Database coursework.', 'كورسات الداتابيز.'],
  XGBoost: ['The supervised pipeline in my IEEE paper.', 'الـ pipeline الـ supervised في ورقة IEEE.'],
  'Isolation Forest': ['The unsupervised pipeline in my IEEE paper.', 'الـ pipeline الـ unsupervised في ورقة IEEE.'],
  React: ['BU-LabTrack\'s frontend, with shadcn/ui.', 'فرونت BU-LabTrack مع shadcn/ui.'],
  'three.js': ['CAPCOM: Storm Watch and this 3D portfolio.', 'لعبة CAPCOM والبورتفوليو الـ 3D ده.'],
  Docker: ['SmartHabbit ships in a non-root Docker image.', 'SmartHabbit بيتشحن في Docker image من غير root.'],
  Git: ['Version control on every project.', 'Version control في كل مشروع.'],
  Jest: ['Integration tests with supertest in SmartHabbit.', 'تستات integration مع supertest في SmartHabbit.'],
  Postman: ['Testing every API before the frontend touches it.', 'بجرب كل API قبل ما الفرونت يلمسه.'],
  Qt: ['Sentinel FDS, a C++17 desktop app.', 'Sentinel FDS، برنامج ديسكتوب بـ C++17.'],
  Vercel: ['CAPCOM is deployed there, with a serverless function.', 'CAPCOM متنشرة هناك مع serverless function.'],
};

export const EXTRA = {
  term: { en: 'Ooh, a terminal. Type "help".', ar: 'تيرمينال! اكتب help.' },
  threatHi: { en: 'Critical risk! The fusion layer would raise the alarm right now.', ar: 'خطر عالي جداً! طبقة الـ fusion كانت هتضرب إنذار حالاً.' },
  gameStart: { en: 'Go go go! Pop them before they fly away!', ar: 'يلا يلا! فرقعهم قبل ما يطيروا!' },
  gameEnd: { en: (n) => `${n} balloons! ${n >= 8 ? 'That\'s a gold-medal pace.' : 'Not bad. Try again?'}`, ar: (n) => `${n} بالونة! ${n >= 8 ? 'ده مستوى ميدالية دهب.' : 'مش وحش. تجرب تاني؟'}` },
  wake: { en: 'Huh? I wasn\'t sleeping. I was… compiling.', ar: 'ها؟ أنا مكنتش نايم… كنت بعمل compile.' },
  dizzy: { en: 'Whoa, slow down! The stairs are spinning.', ar: 'بالراحة! السلم بيلف بيا.' },
  shy: { en: 'Okay, okay. Let\'s keep climbing.', ar: 'خلاص خلاص، يلا نكمل طلوع.' },
  annoyed: { en: 'Error 429: too many pokes.', ar: 'Error 429: زقات كتير أوي.' },
  allArtifacts: { en: 'You found all ten artifacts. Thanks for exploring.', ar: 'لقيت العشر قطع كلهم! شكراً إنك استكشفت.' },
  focus: { en: 'Here it is, up close.', ar: 'أهو، من قريب.' },
};

export const MOOD_BY_LEVEL = ['happy', 'focused', 'thinking', 'excited', 'focused', 'cool', 'happy'];
