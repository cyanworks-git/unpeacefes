const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

const updateHeaderOnScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.gnb a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));
const scheduleData = {
  day1: [
    { title: '기억의 무대', items: ['개막식 및 평화 퍼포먼스', '기억의 콘서트', '평화 토크 콘서트', '청소년 평화 합창', '시민 참여 공연', '기억의 영화 상영', '운영 종료'] },
    { title: '피스 캠퍼스', items: ['평화도시 부산 이야기', '기억 기록 워크숍', '글로벌 피스 토크', '시민 라운드테이블', '평화 교육 세미나', '내일을 위한 대화', '운영 종료'] },
    { title: '커넥트 랩', items: ['평화의 메시지 월 오픈', '평화 배지 랩', 'A LINE FOR PEACE', '시민 메시지 채집', '피스 패스포트', '공동 설치작품 제작', '운영 종료'] }
  ],
  day2: [
    { title: '연결의 무대', items: ['시민 평화 퍼레이드', '세계음악 콘서트', '세대공감 토크쇼', '평화 댄스 프로젝트', '부산 청년 공연', '별빛 평화 콘서트', '운영 종료'] },
    { title: '글로벌 빌리지', items: ['세계문화 인사이드', '어린이 문화 교실', '글로벌 피스 퀴즈', '전통의상 체험', '세계 간식 이야기', '평화 네트워킹', '운영 종료'] },
    { title: '미래의 정원', items: ['가족 요가 클래스', '평화 그림책 낭독', '업사이클링 공방', '어린이 평화 놀이터', '정원 음악회', '빛의 카드 만들기', '운영 종료'] }
  ],
  day3: [
    { title: '미래의 무대', items: ['평화 청소년 포럼', '내일의 목소리', '시민 약속 낭독', '평화 예술 공연', '미래세대 콘서트', '폐막식 및 피날레', '운영 종료'] },
    { title: '피스 캠퍼스', items: ['지속가능한 도시', '청소년 아이디어톤', '평화교육 사례 발표', '시민 정책 제안', '미래 평화 워크숍', '참가자 네트워킹', '운영 종료'] },
    { title: '커넥트 랩', items: ['메시지 월 아카이빙', '피스 패스포트 완주', '공동작품 마무리', '평화 사진 인화', '미래 편지 봉인식', '작품 전시 투어', '운영 종료'] }
  ]
};

const renderSchedule = day => {
  const columns = document.querySelectorAll('.timetable > div:not(.time-col)');
  scheduleData[day].forEach((columnData, columnIndex) => {
    const column = columns[columnIndex];
    column.querySelector('b').textContent = columnData.title;
    column.querySelectorAll('span').forEach((cell, itemIndex) => {
      cell.textContent = columnData.items[itemIndex];
    });
  });
};

document.querySelectorAll('.day-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.day-tabs button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  renderSchedule(button.dataset.day);
}));
document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', event => event.preventDefault()));

const programDetails = [
  '평화로운 내일을 상상하며 미래 세대에게 전하고 싶은 메시지를 편지로 남기는 참여 프로그램입니다.',
  '행사장 곳곳의 평화 미션을 수행하고 스탬프를 모아 완주 기념품을 받아보세요.',
  '평화를 상징하는 문구와 그림을 활용해 나만의 배지를 직접 만들어보는 체험입니다.',
  '참가자들이 한 줄씩 그림을 이어 그리며 모두의 평화 작품을 완성합니다.',
  '여러 나라의 전통문화와 평화 활동을 놀이와 만들기를 통해 경험할 수 있습니다.',
  '축제의 상징 조형물과 함께 사진을 남기고 평화의 순간을 오래 기억해보세요.'
];

const programContents = [
  { image: 'assets/img/festival.png', category: '전시', title: '기억의 기록전', description: '사진과 문서, 영상과 목소리를 통해 기억이 세대를 넘어 전해지는 과정을 살펴보는 전시입니다.' },
  { image: 'assets/img/moment1.png', category: '참여', title: '내일에게 보내는 편지', description: programDetails[0] },
  { image: 'assets/img/moment2.png', category: '미션', title: '피스 패스포트', description: programDetails[1] },
  { image: 'assets/img/moment3.png', category: '창작', title: '평화 배지 랩', description: programDetails[2] },
  { image: 'assets/img/moment4.png', category: '창작', title: '평화 그림 함께 그리기', description: programDetails[3] },
  { image: 'assets/img/moment5.png', category: '체험', title: '글로벌 문화체험', description: programDetails[4] },
  { image: 'assets/img/moment3.png', category: '포토', title: '피스 포토존', description: programDetails[5] }
];

const programFeature = document.querySelector('.program-feature');
const programFeatureImage = programFeature?.querySelector(':scope > img');
const programFeatureCategory = programFeature?.querySelector('span');
const programFeatureTitle = programFeature?.querySelector('h3');
const programFeatureDescription = programFeature?.querySelector('p');
const programList = document.querySelector('.program-list');
const programGrid = document.querySelector('.program-grid');
let programMoveTimer;
let programGhost;
let programMobileTimer;
let programMobileGhost;

const moveProgramFeatureBefore = (item, updateContent) => {
  if (!programFeature || !programList) return;
  if (programFeature.nextElementSibling === item) {
    updateContent();
    return;
  }

  window.clearTimeout(programMoveTimer);
  if (programGhost) {
    programGhost.replaceWith(programFeature);
    programGhost = null;
    programFeature.classList.remove('desktop-collapsed');
  }

  updateContent(true);
  programGhost = programFeature.cloneNode(true);
  programGhost.classList.remove('is-changing', 'compact-hidden');
  programGhost.classList.add('program-feature-ghost', 'desktop-collapsed');
  programGhost.setAttribute('aria-hidden', 'true');
  programList.insertBefore(programGhost, item);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      programFeature.classList.add('desktop-collapsed');
      programGhost?.classList.remove('desktop-collapsed');
    });
  });

  programMoveTimer = window.setTimeout(() => {
    if (!programGhost) return;
    programGhost.replaceWith(programFeature);
    programGhost = null;
    programFeature.classList.remove('desktop-collapsed');
  }, 520);
};

document.querySelectorAll('.program-list > div').forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-expanded', 'false');
  item.setAttribute('aria-pressed', 'false');

  const selectProgram = (immediate = false) => {
    const content = programContents[index + 1];
    document.querySelectorAll('.program-list > div').forEach(programItem => {
      programItem.classList.remove('selected');
      programItem.setAttribute('aria-pressed', 'false');
    });
    item.classList.add('selected');
    item.setAttribute('aria-pressed', 'true');
    if (!programFeature || !content) return;
    const applyContent = () => {
      programFeatureImage.src = content.image;
      programFeatureImage.alt = `${content.title} 프로그램 사진`;
      programFeatureCategory.textContent = content.category;
      programFeatureTitle.textContent = content.title;
      programFeatureDescription.textContent = content.description;
      programFeature.classList.remove('is-changing');
    };

    if (immediate) {
      applyContent();
    } else {
      programFeature.classList.add('is-changing');
      window.setTimeout(applyContent, 160);
    }
  };

  const toggleProgram = () => {
    if (!window.matchMedia('(max-width: 1100px)').matches) {
      selectProgram();
      return;
    }

    window.clearTimeout(programMobileTimer);
    if (programMobileGhost) {
      programMobileGhost.remove();
      programMobileGhost = null;
    }
    const willOpen = !item.classList.contains('open');
    document.querySelectorAll('.program-list > div.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.setAttribute('aria-expanded', 'false');
    });
    item.classList.toggle('open', willOpen);
    item.setAttribute('aria-expanded', String(willOpen));

    if (!willOpen) {
      programFeature.classList.add('compact-hidden');
      return;
    }

    if (programFeature.classList.contains('compact-hidden')) {
      selectProgram(true);
      programList.insertBefore(programFeature, item);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => programFeature.classList.remove('compact-hidden'));
      });
    } else {
      programMobileGhost = programFeature.cloneNode(true);
      programMobileGhost.classList.remove('is-changing');
      programMobileGhost.classList.add('program-mobile-ghost');
      programMobileGhost.setAttribute('aria-hidden', 'true');
      programFeature.replaceWith(programMobileGhost);

      programFeature.classList.add('compact-hidden');
      selectProgram(true);
      programList.insertBefore(programFeature, item);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          programMobileGhost?.classList.add('compact-hidden');
          programFeature.classList.remove('compact-hidden');
        });
      });

      programMobileTimer = window.setTimeout(() => {
        programMobileGhost?.remove();
        programMobileGhost = null;
      }, 500);
    }
  };

  item.addEventListener('click', toggleProgram);
  item.addEventListener('mouseenter', () => {
    if (window.matchMedia('(min-width: 1101px)').matches) {
      moveProgramFeatureBefore(item, selectProgram);
    }
  });
  item.addEventListener('focus', () => {
    if (window.matchMedia('(min-width: 1101px)').matches) {
      moveProgramFeatureBefore(item, selectProgram);
    }
  });
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleProgram();
    }
  });
});

const syncProgramLayout = () => {
  if (!programFeature || !programList || !programGrid) return;
  window.clearTimeout(programMoveTimer);
  window.clearTimeout(programMobileTimer);
  if (programMobileGhost) {
    programMobileGhost.remove();
    programMobileGhost = null;
  }
  if (programGhost) {
    programGhost.remove();
    programGhost = null;
    programFeature.classList.remove('desktop-collapsed');
  }
  if (window.matchMedia('(min-width: 1101px)').matches) {
    if (programFeature.parentElement !== programList) programList.insertBefore(programFeature, programList.firstElementChild);
    programFeature.classList.remove('desktop-collapsed');
    programFeature.classList.remove('compact-hidden');
    document.querySelectorAll('.program-list > div.open').forEach(item => {
      item.classList.remove('open');
      item.setAttribute('aria-expanded', 'false');
    });
  } else if (programFeature.parentElement === programList) {
    programGrid.insertBefore(programFeature, programList);
    programFeature.classList.remove('desktop-collapsed');
    programFeature.classList.remove('compact-hidden');
  }
};

window.addEventListener('resize', syncProgramLayout);
syncProgramLayout();

const valueContents = [
  {
    image: 'assets/img/memories.png',
    title: '기억',
    description: '우리가 물려받은 역사와 이름을 기억합니다. 평화는 그들의 희생을 기억하는 일에서부터 시작합니다.'
  },
  {
    image: 'assets/img/moment1.png',
    title: '연결',
    description: '서로 다른 세대와 문화가 만나 이야기를 나눕니다. 연결된 마음은 더 넓은 평화의 길을 만들어갑니다.'
  },
  {
    image: 'assets/img/moment2.png',
    title: '참여',
    description: '보고, 듣고, 만들고, 표현하는 모든 순간이 평화를 위한 참여가 됩니다. 당신의 작은 행동에서 변화가 시작됩니다.'
  },
  {
    image: 'assets/img/moment3.png',
    title: '평화',
    description: '일상 속에서 서로를 존중하고 이해하는 마음을 나눕니다. 함께할 때 평화는 우리 곁에 계속됩니다.'
  },
  {
    image: 'assets/img/moment5.png',
    title: '미래',
    description: '오늘 함께 만든 평화의 경험을 다음 세대에 전합니다. 우리의 약속은 더 나은 내일로 이어집니다.'
  }
];

const valueItems = document.querySelectorAll('.value-list li');
const valueCard = document.querySelector('.value-card');
const valueImage = valueCard?.querySelector(':scope > img');
const valueTitle = valueCard?.querySelector('h4');
const valueDescription = valueCard?.querySelector('p');

valueItems.forEach((item, index) => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

  const selectValue = () => {
    if (item.classList.contains('active') || !valueCard) return;
    valueItems.forEach(valueItem => {
      valueItem.classList.remove('active');
      valueItem.setAttribute('aria-pressed', 'false');
    });
    item.classList.add('active');
    item.setAttribute('aria-pressed', 'true');
    valueCard.classList.add('is-changing');

    window.setTimeout(() => {
      const content = valueContents[index];
      valueImage.src = content.image;
      valueImage.alt = `${content.title}의 가치를 표현하는 축제 사진`;
      valueTitle.textContent = content.title;
      valueDescription.textContent = content.description;
      valueCard.classList.remove('is-changing');
    }, 180);
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
