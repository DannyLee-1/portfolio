# IT 서비스 기획 · PM 포트폴리오 — 이승주

현상의 이면에 있는 본질을 정의하고, 화면과 데이터로 구조화하여 배포까지 완결합니다.

공공 제도 설계와 플랫폼 서비스 기획, 두 프로젝트의 산출물입니다.  
기획서에 머무르지 않고 **인터랙티브 프로토타입과 실제 배포된 MVP**로 작동을 증명했습니다.

| 포트폴리오 전문 | 프로토타입 | MVP 배포 |
|:--:|:--:|:--:|
| [열기](https://docs.google.com/presentation/d/104Rfggc78MU85dSzDAzINbqo-7tuh9yG/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) | [체험하기](https://dannylee-1.github.io/portfolio/file/ORBIT_Prototype_Desktop_v2.0.html) | [접속하기](https://portfolio-adamlee.vercel.app) |

---

## 빠른 확인 가이드

| 문서 | 핵심 확인 포인트 |
|---|---|
| [포트폴리오 전문](https://docs.google.com/presentation/d/104Rfggc78MU85dSzDAzINbqo-7tuh9yG/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) (p.1–3) | 문제 정의와 핵심 성과 요약 |
| ↳ [프로토타입](https://dannylee-1.github.io/portfolio/file/ORBIT_Prototype_Desktop_v2.0.html) | 기획의 실제 화면 구현. 상단 「스펙·계측」에서 화면별 기획 근거와 이벤트 로그 확인 |
| ↳ [PRD](https://seungjoo-lee.notion.site/ORBIT-PRD_v2-1-1-39270ad10eed807b86a2c629999cb41e?source=copy_link) → [화면정의서](https://docs.google.com/spreadsheets/d/1pbuwz1ufTGbICS8LN3hzoa8X7hSJLZJC/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) | 문서 작성의 완성도와 의사결정 근거 추적(Traceability) |

> 💡 단 하나의 산출물만 보신다면 **[프로토타입](https://dannylee-1.github.io/portfolio/file/ORBIT_Prototype_Desktop_v2.0.html)**을 추천합니다.

---

## 기획 산출물

기획의 논리적 전개 순서대로 정렬되어 있습니다. 선행 문서가 후행 문서의 근거가 되며, 모든 화면 요소는 기획서로 역추적됩니다.

| # | 산출물 | 설명 | 링크 |
|:--:|---|---|:--:|
| 0 | **포트폴리오 전문** | 두 프로젝트의 전 과정 및 핵심 인사이트 요약 (14p) | [바로보기](https://docs.google.com/presentation/d/104Rfggc78MU85dSzDAzINbqo-7tuh9yG/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) |
| 1 | **PRD** v2.1.1 | 문제 정의, 검증 가설, 제품 요구사항 명세 | [바로보기](https://seungjoo-lee.notion.site/ORBIT-PRD_v2-1-1-39270ad10eed807b86a2c629999cb41e?source=copy_link) |
| 2 | **정보구조도(IA)** v2.1.1 | 서비스 구조 및 사용자 권한별 화면 체계도 | [바로보기](https://docs.google.com/spreadsheets/d/1JQs9eTeKOoI57Uw6eW30jp50jsUn18-s/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) |
| 3 | **사용자 흐름도** v1.1 | 핵심 과업(Task) 중심의 End-to-End 사용자 동선 | [바로보기](https://dannylee-1.github.io/portfolio/file/ORBIT_UserFlow_v1.1.html) |
| 4 | **와이어프레임** v1.1 | 화면 레이아웃 및 컴포넌트 배치 의도 | [바로보기](https://dannylee-1.github.io/portfolio/file/ORBIT_Wireframe_Desktop_v1.1.html) |
| 5 | **화면정의서** v1.0 | 개발 소통용 상세 명세 (컴포넌트 기능, 상태값, 예외/에러) | [바로보기](https://docs.google.com/spreadsheets/d/1pbuwz1ufTGbICS8LN3hzoa8X7hSJLZJC/edit?usp=drive_link&ouid=102223352084121291107&rtpof=true&sd=true) |
| 6 | **프로토타입** v2.0 | 인터랙션과 기획 의도를 직접 검증하는 웹 데모 | [바로보기](https://dannylee-1.github.io/portfolio/file/ORBIT_Prototype_Desktop_v2.0.html) |
| 7 | **MVP 배포** | 실제 환경에서 동작하는 라이브 웹 서비스 | [바로보기](https://portfolio-adamlee.vercel.app) |
| — | **임산부 불빛 배려석 제안서** | 사례 ① 공공 제도 개선 원본 제안서 (PDF) | [바로보기](./file/임산부_배려석.pdf) |

---

## 핵심 프로젝트

### ① 임산부 불빛 배려석 — 공공 제도 설계

하나의 좌석에서 두 가지 모순이 동시에 발생합니다. 일반 시민의 심리적 부담으로 **상시 공석**이 유지되고, 정작 임산부는 **필요한 순간 배려받지 못합니다.**

문제를 '시민 의식 부재(통제 불가)'에서 **'작동 메커니즘 없는 좌석 지정(설계로 통제 가능)'**으로 재정의했습니다. 버튼을 누르면 점등되는 직관적인 신호 체계로 해결하고, 제작 원가·유지 관리·오남용 방지책까지 완결했습니다.

> 🏛️ **공공기관 재직 중 단독 기획·제안** · 심사위원 전원 적격 판정 → 서울시 아이디어풀 등재 과제 선정

### ② ORBIT — 팀빌딩 매칭 플랫폼

대규모 채용에는 공채 플랫폼이, 단건 외주에는 프리랜서 마켓이 있습니다. 하지만 **초기 3인이 모여 시작하는 '프로젝트 팀빌딩' 시장은 비어 있습니다.**

기존 플랫폼은 구인자가 '필요한 직무와 역량'을 이미 안다고 전제합니다. ORBIT은 막연한 '한 줄 아이디어'를 구체적인 역할 요건으로 자동 번역하고, 성과와 지분을 나눌 최적의 팀원을 매칭합니다.

> 🚀 **3인 팀 프로젝트 (2026.06–07)** · 문제 정의 및 제품 기획 리드 · 사전 사용자 리서치부터 MVP 배포까지 8단계 전 과정 완주

---

## 이 포트폴리오가 증명하는 역량

| 역량 | 검증 포인트 |
|---|---|
| **본질적 문제 재정의** | 현상에 갇히지 않고 해결 가능한 구조적 문제로 전환 (예: '시민 의식 개선' → '제도 및 신호 체계 설계') |
| **명확한 MVP 스코핑** | [PRD §6] 과도한 구현을 덜어내고 "핵심 1개 역할·1명 매칭 완주"로 가설 검증 범위를 전략적 집중 |
| **의사결정의 추적성 (Traceability)** | 와이어프레임 주석 및 화면정의서 '근거' 열을 통해 모든 UI 요소가 PRD 요구사항으로 상호 역추적 |
| **투명한 오픈 이슈 관리** | [화면정의서 10_OpenIssue] 정책 미정의 및 충돌 14건을 자의적으로 판단하지 않고 공식 이슈로 분리 관리 |
| **실행 및 엔드투엔드 완결력** | 기획 문서 작성에 머무르지 않고, 인터랙티브 프로토타입 및 실제 Vercel 배포까지 완결 |

---

**이승주** · IT 서비스 기획 / 주니어 PM  
📧 wkrurwmd135@gmail.com
