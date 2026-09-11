const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

const updateHeaderOnScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

let menuScrollLocked = false;
let menuScrollPosition = 0;

const syncMenuScrollLock = () => {
  const shouldLock = header.classList.contains('open') && window.matchMedia('(max-width: 640px)').matches;

  if (shouldLock && !menuScrollLocked) {
    menuScrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${menuScrollPosition}px`;
    document.body.style.right = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';
    menuScrollLocked = true;
  } else if (!shouldLock && menuScrollLocked) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.right = '';
    document.body.style.left = '';
    document.body.style.width = '';
    menuScrollLocked = false;
    window.scrollTo({ top: menuScrollPosition, left: 0, behavior: 'instant' });
  }
};

menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  syncMenuScrollLock();
});
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1101px)').matches) {
    header.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
  }
  syncMenuScrollLock();
});
document.querySelectorAll('.gnb a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  syncMenuScrollLock();
}));
const scheduleData = {
  day1: {
    times: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    columns: [
      { title: '평화 스테이지', items: ['오프닝 피스 버스킹', '피스 버스킹 1', '-', '개막공연: 기억의 선', '개막식: PEACE CONTINUES.', '기억 콘서트: 1부', '기억 콘서트: 2부', '평화의 빛 세레머니'] },
      { title: '메모리 아카이브', items: ['기억의 기록전 개관', '도슨트 투어 1', '구술기록 영상 상영', '도슨트 투어 2', '-', '큐레이터 토크', '자유 관람', '운영 종료'] },
      { title: '피스 캠퍼스', items: ['-', '기조 토크: 기억은 어떻게 이어지는가', '워크숍: 나의 기억 기록하기', '-', '-', '-', '-', '운영 종료'] },
      { title: '커넥트 랩', items: ['평화 메시지 월 오픈', '평화 배지 랩', 'A LINE FOR PEACE', '시민 메시지 채집', '-', '평화의 빛 카드 만들기', '공동 설치작품 제작', '운영 종료'] }
    ]
  },
  day2: {
    times: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:30', '16:00', '17:00', '18:30', '20:00'],
    columns: [
      { title: '평화 스테이지', items: ['평화산책 사전 안내', '가족공연: 안녕, 평화', '글로벌 버스킹', 'ONE WORLD STAGE 1', '스트리트 퍼포먼스', '시민 평화합창', 'ONE WORLD STAGE 2', '댄스 프로젝트: CONNECT', '평화콘서트: CONNECTED VOICES', 'ALL TOGETHER FINALE'] },
      { title: '메모리 아카이브', items: ['전시 개관', '도슨트 투어 1', '구술기록 영상 상영', '도슨트 투어 2', '자유 관람', '기억 낭독회', '도슨트 투어 3', '특별 영상 상영', '운영 종료', '-'] },
      { title: '피스 캠퍼스', items: ['어린이 평화교실', '평화 그림책 토크', '-', '세계시민토크: 일상의 평화', '청년평화포럼: NEXT PEACE', '오픈 다이얼로그', 'SMALL ACTION LAB', '-', '운영 종료', '-'] },
      { title: '커넥트 랩', items: ['피스 패스포트 시작', '평화 배지 랩', '평화 엽서 만들기', 'A LINE FOR PEACE', '시민 공동벽화', '시민 공동벽화', '평화 메시지 프린팅', '공동 설치작품 제작', '운영 종료', '-'] }
    ]
  },
  day3: {
    times: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '17:40'],
    columns: [
      { title: '평화 스테이지', items: ['평화산책: MEMORY TO FUTURE', '가족공연: 내일의 정원', '어쿠스틱 피스 버스킹', '청소년 평화 프로젝트 발표', '시민예술무대', '피스 버스킹 파이널', '폐막 콘서트 1부', '폐막 콘서트 2부', '시민 평화선언 및 폐막식: PROMISE 2026'] },
      { title: '메모리 아카이브', items: ['전시 개관', '도슨트 투어 1', '구술기록 영상 상영', '도슨트 투어 2', '자유 관람', '큐레이터 토크', '마지막 도슨트 투어', '전시 종료', '-'] },
      { title: '피스 캠퍼스', items: ['-', '어린이 평화 스튜디오', '-', 'YOUNG PEACE MAKERS', '시민 라운드테이블: 오늘 이후의 평화', '미래 토크: HOW PEACE CONTINUES', '-', '-', '-'] },
      { title: '커넥트 랩', items: ['미래 약속 카드', '미래의 정원 만들기', '평화 배지 랩', 'A LINE FOR PEACE', '약속의 깃발 만들기', '공동 설치작품 완성', '시민 메시지 정리', '참여 프로그램 종료', '-'] }
    ]
  }
};

const renderSchedule = day => {
  const timetable = document.querySelector('.timetable');
  const dayData = scheduleData[day];
  if (!timetable || !dayData) return;

  const createColumn = (title, items, className = '') => {
    const column = document.createElement('div');
    if (className) column.className = className;

    const heading = document.createElement('b');
    heading.textContent = title;
    column.appendChild(heading);

    items.forEach(item => {
      const cell = document.createElement('span');
      cell.textContent = item;
      column.appendChild(cell);
    });

    return column;
  };

  timetable.replaceChildren(
    createColumn('시간', dayData.times, 'time-col'),
    ...dayData.columns.map(column => createColumn(column.title, column.items))
  );
};

renderSchedule('day1');

document.querySelectorAll('.day-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.day-tabs button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  renderSchedule(button.dataset.day);
}));
document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', event => event.preventDefault()));

const programContents = [
  { image: 'assets/img/festival.png', category: '전시', title: '기억의 기록전', description: '사진과 문서, 영상과 목소리를 통해 기억이 세대를 넘어 전해지는 과정을 살펴보는 전시입니다.' },
  { image: 'assets/img/moment1.png', category: '참여', title: '내일에게 보내는 편지', description: '미래의 누군가에게 전하고 싶은 평화의 메시지를 작성해 아카이브에 남기는 참여 프로그램입니다.' },
  { image: 'assets/img/moment2.png', category: '미션', title: '피스 패스포트', description: '행사장 네 개 공간의 프로그램에 참여하고 스탬프를 모으면 기념 평화 엽서를 받을 수 있습니다.' },
  { image: 'assets/img/moment3.png', category: '창작', title: '평화 배지 랩', description: '평화를 의미하는 여러 언어와 그래픽 요소를 조합해 나만의 배지를 만드는 프로그램입니다.' },
  { image: 'assets/img/moment4.png', category: '창작', title: '평화 그림 함께 그리기', description: '점과 선, 교차점을 활용해 시민이 함께 하나의 대형 평화 그림을 완성합니다.' },
  { image: 'assets/img/moment5.png', category: '체험', title: '글로벌 문화체험', description: '세계 여러 지역의 인사말과 생활문화를 체험하며 서로의 차이를 이해하는 참여 공간입니다.' },
  { image: 'assets/img/moment3.png', category: '포토', title: '피스 포토존', description: '축제의 열린 프레임과 연결된 선을 활용해 구성한 공식 촬영 구간입니다.' }
];

const programFeature = document.querySelector('.program-feature');
const programFeatureImage = programFeature?.querySelector(':scope > img');
const programFeatureCategory = programFeature?.querySelector('span');
const programFeatureTitle = programFeature?.querySelector('h3');
const programFeatureDescription = programFeature?.querySelector('p');
const programItems = [...document.querySelectorAll('.program-list > .program-item')];
let programUpdateId = 0;

const preloadProgramImage = source => new Promise(resolve => {
  const image = new Image();
  image.onload = resolve;
  image.onerror = resolve;
  image.src = source;
  if (image.complete) resolve();
});

const activateProgram = async (item, index) => {
  const content = programContents[index];
  if (!programFeature || !item || !content) return;
  if (item.classList.contains('is-active') && programFeature.parentElement === item) return;

  const updateId = ++programUpdateId;
  programItems.forEach(programItem => {
    programItem.classList.remove('is-active');
    programItem.setAttribute('aria-expanded', 'false');
    programItem.setAttribute('aria-pressed', 'false');
  });

  item.classList.add('is-active');
  item.setAttribute('aria-expanded', 'true');
  item.setAttribute('aria-pressed', 'true');
  item.appendChild(programFeature);
  programFeature.classList.add('is-loading');

  await Promise.all([
    preloadProgramImage(content.image),
    new Promise(resolve => window.setTimeout(resolve, 160))
  ]);

  if (updateId !== programUpdateId) return;
  programFeatureImage.src = content.image;
  programFeatureImage.alt = `${content.title} 프로그램 사진`;
  programFeatureCategory.textContent = content.category;
  programFeatureTitle.textContent = content.title;
  programFeatureDescription.textContent = content.description;
  window.requestAnimationFrame(() => programFeature.classList.remove('is-loading'));
};

programItems.forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  const isActive = item.classList.contains('is-active');
  item.setAttribute('aria-expanded', String(isActive));
  item.setAttribute('aria-pressed', String(isActive));

  item.addEventListener('click', () => activateProgram(item, index));
  item.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 1101px)').matches) {
      activateProgram(item, index);
    }
  });
  item.addEventListener('focus', () => {
    if (window.matchMedia('(min-width: 1101px)').matches) {
      activateProgram(item, index);
    }
  });
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateProgram(item, index);
    }
  });
});

const valueContents = [
  {
    image: 'assets/img/memories.png',
    title: '기억',
    description: '우리가 물려받은 역사와 이름을 기억합니다.\n평화는 그들의 희생을 기억하는 일에서부터 시작합니다.'
  },
  {
    image: 'assets/img/moment1.png',
    title: '연결',
    description: '과거와 오늘,\n세대와 세대, 사람과 사람을 연결합니다.'
  },
  {
    image: 'assets/img/moment2.png',
    title: '참여',
    description: '관람하는 것에서 멈추지 않고\n평화를 직접 몸으로 체험하고 표현합니다.'
  },
  {
    image: 'assets/img/moment3.png',
    title: '평화',
    description: '평화를 과거의 이상으로 남기는 것이 아닌\n오늘날 함께 실천할 가치로 만듭니다.'
  },
  {
    image: 'assets/img/moment5.png',
    title: '미래',
    description: '평화를 이어 나가기 위한 기억과 약속을\n다음 세대의 이야기로 이어갑니다.'
  }
];

const valueItems = document.querySelectorAll('.value-list li');
const valueCard = document.querySelector('.value-card');
const valueLayers = [...(valueCard?.querySelectorAll('.value-card-layer') || [])];
let valueVisibleLayer = valueLayers[0];
let valueHiddenLayer = valueLayers[1];
let valueTransitioning = false;
let valueAccordionTimer;
let valueDissolveTimer;

const setValueLayerContent = (layer, content) => {
  const image = layer.querySelector('img');
  const title = layer.querySelector('h4');
  const description = layer.querySelector('p');
  image.src = content.image;
  image.alt = `${content.title}의 가치를 표현하는 축제 사진`;
  title.textContent = content.title;
  description.textContent = content.description;
};

const applyValueSelection = (item, index) => {
  valueItems.forEach(valueItem => {
    valueItem.classList.remove('active');
    valueItem.setAttribute('aria-pressed', 'false');
  });
  item.classList.add('active');
  item.setAttribute('aria-pressed', 'true');
  valueCard.style.setProperty('--mobile-order', String((index * 2) + 3));

  const content = valueContents[index];
  setValueLayerContent(valueVisibleLayer, content);
};

valueItems.forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

  const selectValue = () => {
    if (item.classList.contains('active') || !valueCard || valueTransitioning) return;

    if (window.matchMedia('(max-width: 920px)').matches) {
      window.clearTimeout(valueAccordionTimer);
      valueCard.classList.add('is-accordion-collapsed');

      const collapseDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 320;
      valueAccordionTimer = window.setTimeout(() => {
        applyValueSelection(item, index);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => valueCard.classList.remove('is-accordion-collapsed'));
        });
      }, collapseDuration);
      return;
    }

    valueItems.forEach(valueItem => {
      valueItem.classList.remove('active');
      valueItem.setAttribute('aria-pressed', 'false');
    });
    item.classList.add('active');
    item.setAttribute('aria-pressed', 'true');
    valueTransitioning = true;

    const content = valueContents[index];
    setValueLayerContent(valueHiddenLayer, content);
    const incomingImage = valueHiddenLayer.querySelector('img');

    const startDissolve = () => {
      window.clearTimeout(valueDissolveTimer);
      valueVisibleLayer.classList.remove('is-visible');
      valueVisibleLayer.setAttribute('aria-hidden', 'true');
      valueHiddenLayer.classList.add('is-visible');
      valueHiddenLayer.setAttribute('aria-hidden', 'false');

      const dissolveDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 460;
      valueDissolveTimer = window.setTimeout(() => {
        const previousVisibleLayer = valueVisibleLayer;
        valueVisibleLayer = valueHiddenLayer;
        valueHiddenLayer = previousVisibleLayer;
        valueTransitioning = false;
      }, dissolveDuration);
    };

    if (incomingImage.complete) {
      window.requestAnimationFrame(() => window.requestAnimationFrame(startDissolve));
    } else {
      incomingImage.addEventListener('load', startDissolve, { once: true });
      incomingImage.addEventListener('error', startDissolve, { once: true });
    }
  };

  item.addEventListener('click', selectValue);
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectValue();
    }
  });
});

const mapMarkers = document.querySelectorAll('.map-marker');
const venueItems = document.querySelectorAll('.venue-list > div');
const parkingMarkers = document.querySelectorAll('.parking-marker');
const parkingItems = document.querySelectorAll('.parking-list span');

const activateVenue = venueNumber => {
  parkingMarkers.forEach(marker => {
    marker.classList.remove('active');
    marker.setAttribute('aria-pressed', 'false');
  });
  parkingItems.forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });

  mapMarkers.forEach(marker => {
    const active = marker.dataset.venue === venueNumber;
    marker.classList.toggle('active', active);
    marker.setAttribute('aria-pressed', String(active));
  });

  venueItems.forEach((item, index) => {
    const active = String(index + 1) === venueNumber;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
};

const activateParking = parkingName => {
  mapMarkers.forEach(marker => {
    marker.classList.remove('active');
    marker.setAttribute('aria-pressed', 'false');
  });
  venueItems.forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });

  parkingMarkers.forEach(marker => {
    const active = marker.dataset.parking === parkingName;
    marker.classList.toggle('active', active);
    marker.setAttribute('aria-pressed', String(active));
  });
  parkingItems.forEach((item, index) => {
    const active = `p${index + 1}` === parkingName;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
};

mapMarkers.forEach(marker => {
  marker.setAttribute('aria-pressed', 'false');
  marker.addEventListener('click', () => activateVenue(marker.dataset.venue));
});

venueItems.forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-pressed', 'false');

  const selectVenue = () => activateVenue(String(index + 1));
  item.addEventListener('click', selectVenue);
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectVenue();
    }
  });
});

parkingMarkers.forEach(marker => {
  marker.setAttribute('aria-pressed', 'false');
  marker.addEventListener('click', () => activateParking(marker.dataset.parking));
});

parkingItems.forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-pressed', 'false');

  const selectParking = () => activateParking(`p${index + 1}`);
  item.addEventListener('click', selectParking);
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectParking();
    }
  });
});

if (mapMarkers.length && venueItems.length) activateVenue('1');

const newsLinks = document.querySelectorAll('.news-list > a:not(.more)');
const newsDetails = [
  '제28회 UN평화축제가 평화공원 일원에서 개최됩니다. 공연과 전시, 시민 참여 프로그램을 통해 평화의 의미를 함께 나눠보세요.',
  '축제의 전체 일정과 프로그램별 운영 시간이 공개되었습니다. 방문 전 행사일정 영역에서 원하는 프로그램의 시간을 확인해 주세요.',
  '기억의 콘서트에 참여하는 아티스트와 공연 순서를 안내합니다. 세대를 잇는 음악과 평화의 메시지를 현장에서 만나보세요.',
  '전시와 체험, 시민 참여 프로그램은 행사 기간 동안 상시 운영됩니다. 일부 프로그램은 현장 접수가 필요할 수 있습니다.',
  '행사장 주변 교통이 혼잡할 수 있으니 대중교통 이용을 권장합니다. 안전하고 편안한 관람을 위해 현장 안내에 협조해 주세요.'
];

newsLinks.forEach((link, index) => {
  const detail = document.createElement('div');
  detail.className = 'news-detail';
  detail.id = `news-detail-${index + 1}`;
  detail.textContent = newsDetails[index];
  link.after(detail);
  link.setAttribute('aria-expanded', 'false');
  link.setAttribute('aria-controls', detail.id);

  link.addEventListener('click', event => {
    event.preventDefault();
    const willOpen = !detail.classList.contains('open');

    newsLinks.forEach(otherLink => otherLink.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.news-detail.open').forEach(otherDetail => otherDetail.classList.remove('open'));

    if (willOpen) {
      link.setAttribute('aria-expanded', 'true');
      detail.classList.add('open');
    }
  });
});

document.querySelectorAll('.brand, .footer-brand-link, .footer-top').forEach(topLink => {
  topLink.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#top');
  });
});

const revealTargets = document.querySelectorAll([
  '.about-panel',
  '.values-inner',
  '.program-grid',
  '.access-inner',
  '.festival-map',
  '.venue-list',
  '.parking-list',
  '.day-tabs',
  '.timetable',
  '.gallery',
  '.footer-inner'
].join(','));

const heroRevealTargets = document.querySelectorAll('.hero-copy > *');
const textRevealTargets = document.querySelectorAll([
  '.about-intro .eyebrow',
  '.about-intro h2',
  '.about-copy p',
  '.values-copy h3',
  '.values-copy > p',
  '.program .section-head .eyebrow',
  '.program .section-head h2',
  '.program .section-head > p',
  '.access-title .eyebrow',
  '.access-title h2',
  '.venue-head h3',
  '.venue-head p',
  '.schedule-head .eyebrow',
  '.schedule-head h2',
  '.schedule-head > p',
  '.archive .section-head .eyebrow',
  '.archive .section-head h2',
  '.archive .section-head > div:last-child > p',
  '.news .eyebrow',
  '.news h2'
].join(','));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach(target => target.classList.add('is-visible'));
  heroRevealTargets.forEach(target => target.classList.add('is-visible'));
  textRevealTargets.forEach(target => target.classList.add('is-visible'));
} else {
  heroRevealTargets.forEach((target, index) => {
    target.classList.add('hero-intro-item');
    target.style.setProperty('--hero-delay', `${220 + index * 190}ms`);
  });

  revealTargets.forEach((target, index) => {
    target.classList.add('scroll-reveal');
    target.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
  });

  textRevealTargets.forEach((target, index) => {
    target.classList.add('scroll-reveal-left');
    target.style.setProperty('--reveal-delay', `${(index % 5) * 135}ms`);
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });

  revealTargets.forEach(target => revealObserver.observe(target));
  textRevealTargets.forEach(target => revealObserver.observe(target));
}
