# Virel — V1 Diagnosis Package

## V1 Summary
The AI generated a 7-question personality quiz that analyzes the user across four dimensions: curiosity, style, energy, and strength. Questions are multiple choice, and the quiz produces a personality breakdown at the end based on the user's answers.

## Playtest Observations
- Answering the multiple choice questions felt fun and satisfying
- Reading the results was engaging
- The open-ended typed question felt boring and broke the flow
- The title/intro screen felt flat and failed to create excitement or pull the user in

## AI Default Patterns Found
No direct comparison with a classmate's draft was conducted for this version.

## V1 Diagnosis Sheet

| Area | Rating | Notes |
|---|---|---|
| Question Quality | 3.5/5 | Decent but generic — questions don't feel surprising or revealing |
| Pacing | 2/5 | Too short overall; the typed question also drags the flow |
| AI Analysis | 2/5 | Results feel inaccurate and uninteresting — not personally resonant |
| Results Presentation | 2/5 | Boring visually — lacks color, energy, and visual payoff |
| First Impression | 2/5 | Doesn't grab attention — weak hook on entry |
| Replay | 1/5 | No desire to retake |
| Shareability | 2/5 | Nothing felt worth sending to a friend |
| Visuals Overall | 2.5/5 | Not eye-catching across the board |

## Target User
**Who:** Teens and young adults (16–25) who want better friendships or relationships.

**Profile:**
- High school or early university student
- Active on Instagram, TikTok, Snapchat
- Into personality types (MBTI, vibes, "energy matching")
- Comfortable with AI-driven tools

**Their problems:**
- "I don't know who I actually connect with"
- Tired of surface-level chatting or fake profiles
- Finds it hard to meet people who really match their personality
- May feel awkward starting conversations

**When they use it:**
- Late-night scrolling in bed — low pressure, high curiosity
- After a bad social or dating experience
- With friends in person or over group chat (comparing results)
- Procrastination time — needs to feel fast and slightly addictive
- Starting something new (new school, city, club)

**What makes them share it:**
- The result feels weirdly accurate ("this literally read me")
- It's slightly funny or savage — emotional hit triggers sharing
- It explains their friendships ("this is why we work")
- Shareable result card — easy to screenshot and post
- Comparison/challenge mechanic ("take this and see if we're compatible")

## Redesign Direction
**Vision:** An AI that gets you instantly and explains your relationships better than you can. Not clinical. Not generic. The feeling should be: *"Wait… how did it know that?"*

**Tone shift:**
- From: generic, safe ("You are thoughtful and creative")
- To: specific, slightly bold, emotionally intelligent ("You act chill, but you replay conversations in your head later")

**Visual direction:**
- Dark mode with soft glow UI
- Typing animation simulating a real AI thinking
- Subtle gradients, modern app feel
- Emoji used sparingly but intentionally (🧠, 👀, 💭)

**Experience shift:**
- From: Question → click → next → results (static)
- To: Conversation → reaction → insight → evolving understanding

The AI should react to each answer in real time so the user feels seen as they go, not just at the end.

**The one most important change:** Replace static quiz questions with adaptive, reactive responses. People get hooked by feeling understood in real time — not by answering questions.

**Result format:**
Not a label — a mini personality breakdown. Short "read" of the user including social habits, hidden patterns, and who they click with and why. Written in a tone personal enough to screenshot.

## User Constraints Card

| Field | Details | Product Decision |
|---|---|---|
| **Who** | Ages 16–25, high school or early uni student, curious about personality/vibes, social but sometimes anxious about connections | Quiz tone must feel personal and emotionally intelligent — not clinical or generic |
| **When** | Late-night scrolling, lunch break, on the bus, bored at home, sleepover with friends | Quiz must be completable in 3–5 minutes. No slow intros. First question must hook immediately. |
| **Where** | Phone (not laptop), often in noisy or social environments | Layout must be mobile-first. Touch targets must be large. No tiny text or cramped UI. |
| **How long** | 3–5 minutes of free time | Cut questions to 5–7 max. Delete the open-ended typed question. Every screen must load fast. |
| **With whom** | Alone or with friends comparing results in real time | Results must be shareable (screenshot-ready card) and comparable (compatibility % or match feature) |
| **Why** | Wants to understand themselves, find better connections, feel seen — triggered by curiosity or a bad social experience | The result must feel accurate and personal enough to create a "wait, how did it know that?" moment |
| **What kills it** | Boring first question, too many questions, slow load, generic results, no reason to share | Make Q1 immediately interesting. Keep it short. Make results feel personal. Build in a share/compare mechanic. |

## Product Positioning Statement

> **Virel** is an AI personality experience for teens and young adults (16–25) who struggle to find people they actually connect with. It reads your personality in real time and shows you exactly who you match with — and why.

---

## Keep / Change / Delete List
*(Updated in Lesson 2 — re-evaluated against: "Does my target user need this?")*

| Element | Lesson 1 Decision | Lesson 2 Decision | What Changed & Why |
|---|---|---|---|
| Multiple choice questions | CHANGE | CHANGE | Confirmed. Mobile users need fast, tappable interactions — no typing. Questions must be bold and reactive, not generic. |
| Open-ended typed question | DELETE | DELETE ✓ | Confirmed. Target user is on a phone with 3–5 min. Typing breaks the flow completely. |
| Title/intro screen | CHANGE | CHANGE — elevated priority | User gets bored fast and switches apps. The hook must land in the first 3 seconds or they're gone. More critical than originally noted. |
| Personality categories (curiosity, style, energy, strength) | CHANGE | CHANGE | Confirmed. Categories need to feel surprising and personal — current ones feel like a school worksheet. |
| Results screen | CHANGE | CHANGE — now the most critical element | The result IS the product for this user. If it doesn't feel accurate and shareable, the whole experience fails. Elevated to #1 priority. |
| Overall visual design | CHANGE | CHANGE | Confirmed. A 16–25 user on Instagram and TikTok judges credibility by aesthetics instantly. Bad design = immediate bounce. |

---

## Must-Have / Nice-to-Have Split

**Must-Have (MVP cannot ship without these):**

- Mobile-optimized multiple choice questions (5–7 max, no typing)
- Reactive AI responses between questions — user must feel seen as they go, not just at the end
- Personal, specific results breakdown (reads like it knows you, not a horoscope)
- Shareable result card — screenshot-ready, looks good on Instagram/Snapchat
- Dark mode / modern visual design — aesthetics = credibility for this audience

**Nice-to-Have (improves the product but not essential for V1):**

- Compatibility % / friend comparison mechanic
- Typing animation (AI "thinking" effect between questions)
- Emoji reactions embedded in question flow
- Replay / retake feature
- Polished onboarding/intro animation
