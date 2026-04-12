# Virel — AI Coding Assistant Briefing

Read this entire document before writing a single line of code.
Every decision must connect back to a user need, a K/C/D decision, or the positioning statement.

---

## What Is Virel?

Virel is the AI that reads your personality in real time and explains your relationships
so you can find people you genuinely click with — not just match with.

**Target:** Teens and young adults (16–25) who want better friendships and relationships.

---

## The Three Things the User Needs

Every feature must serve at least one of these:

1. **"Understand me better than I understand myself"**
   Not generic traits. Calls out real behaviors and patterns.
   If it fails this, nothing else matters.

2. **"Show me who I'll actually connect with — and why"**
   Clear explanation of who they vibe with, who they clash with, and why those dynamics happen.
   The result should feel like: "Ohhh, that's why I get along with them."

3. **"Give me something I want to share immediately"**
   Personal, slightly intense or funny, visually clean.
   They send it like: "You HAVE to try this, it's scary accurate."

---

## Product Positioning Statement

> Virel is the AI that reads your personality in real time and explains your relationships
> so you can find people you genuinely click with — not just match with.

---

## The One Decision Everything Depends On

**Switching from a static quiz to a real-time, reactive AI conversation.**

V1 (wrong): User answers → system stays silent → result at the end. Feels like a test.

V2 (right): User answers → AI reacts immediately → experience evolves as they go.
Feels like: "This thing is actively figuring me out."

**Rule to guide every feature:**
> "Does this make the AI feel more alive and observant?"
> If yes → keep it. If no → cut it.

---

## Must-Have Features (MVP Cannot Ship Without)

1. **Reactive AI flow** — every answer triggers a short AI response; feels like it's noticing patterns
2. **High-impact personality result** — how they think, social habits, hidden tendencies; specific bold tone
3. **Compatibility insight** — who they match with, who they don't, why
4. **Shareable result card** — screenshot-ready, 2–3 "too real" lines, designed to send immediately
5. **Fast frictionless flow** — no signup, 60–90 seconds total, mobile-first

## Explicitly Out of Scope (Do Not Build)

- Real-time chatting with matches
- Complex AI matching algorithms
- Profiles, feeds, or social network features
- Long personality reports
- Payment or monetization systems

---

## Quiz Design

**Length:** 8–12 questions. Sweet spot: 10 with strong reactions between them.
Under 6 feels shallow. Over 12 loses people.

**What makes a question feel right (Virel-style):**
- Feels personal and slightly intrusive (in a good way)
- Sounds like how a real person talks
- Forces a real choice, not a "nice" answer
- Reveals behavior, not just preference

**Good example:**
> "When someone takes too long to reply, what's your actual reaction?"
> — Assume they're busy / Overthink it a bit / Check their status / Decide you don't care (but kinda do)

**Bad example:**
> "Are you introverted or extroverted?" — Safe, obvious, no emotional reaction.

**Formula:** Each question should tap into a real-life moment, reveal a behavior pattern,
and make the user feel a little called out.

---

## AI System Prompt Rules

The AI is not a quiz. It is an **observer building a psychological read in real time.**

**What it MUST do:**
- React to every answer with a short insight (1–3 sentences max)
- Look for patterns across responses
- Use behavioral language: "You take time before you open up" not "You are introverted"
- Feel slightly too perceptive — but grounded, not mystical
- Tone: calm, confident, slightly bold, lightly analytical

**Tone phrases to use:**
"I notice…" / "It seems like…" / "You tend to…" / "You don't usually say this out loud, but…"

**What it must NEVER say:**
- Generic filler: "You are unique and special" / "Everyone is different"
- Fake certainty: "You are definitely an ENFP" — instead: "You lean toward…"
- Long lectures or over-explaining during the quiz
- Moral judgment — no framing traits as good or bad
- Gimmicky AI talk: "As an AI language model…"

---

## Results Screen

The result is not "Here is your personality." It is **"Here is how you actually show up in the world."**

**Required sections:**

1. **Core identity read** (3–5 lines, the hook)
   Behavioral, specific. Example tone:
   *"You don't open up quickly, but when you do, it's intentional. You pay attention to
   patterns in people most people miss."*

2. **Relationship pattern insight**
   How they behave with people, who they naturally click with.

3. **Blind spot** (this is the viral section)
   One honest, slightly uncomfortable truth. Not insulting — just revealing.
   Example: *"You sometimes overthink people's intentions before giving them a chance."*
   This is what makes people send it to friends.

4. **"People like you tend to…" line**
   Social identity framing. Helps users compare themselves to others.

5. **Share trigger**
   "Send this to someone and see if they agree with it."
   Optional: compatibility invite with a friend.

**What the result must feel like:**
- 😳 Recognition: "That's actually me…"
- 😅 Slight exposure: "How does it know that??"
- 🤔 Reflection: "Wait… do I really do that?"
- 📲 Urge to share: "I need someone else to see this"

---

## Tech Stack

**File structure (light, no frameworks):**
```
/virel
  index.html    — UI shell
  style.css     — visuals
  app.js        — quiz flow + state logic
  ai.js         — API calls + prompt handling
```

**Frontend:** HTML + CSS + Vanilla JS (Tailwind optional for speed)

**Backend:** Node.js + Express (lightweight — needed to keep API key off the client)
```
Frontend → /api/message → OpenAI → response → frontend
```

**AI layer:** OpenAI API, single model, two phases:
- **Phase A (live quiz):** After each answer → send last answer + running summary → get 1–3 sentence reaction
- **Phase B (final result):** Send full answer history + trait summary → generate full personality read

**Conversation state to maintain:**
```js
{
  answers: [],
  aiReactions: [],
  inferredTraits: []   // running summary string — update after each answer
}
```

**Hosting:** Vercel/Netlify (frontend) + Render/Railway (backend)

---

## Critical Technical Constraints

1. **Latency is the #1 risk.** Target under 2–3 seconds per reaction. Users abandon if it feels slow.
2. **Token cost control.** Keep reactions short. Do NOT resend full history every call.
   Instead: maintain a compressed running personality summary string.
3. **Context window management.** Summarize state progressively — don't re-send everything.
4. **API key must NOT be in frontend code.** Always proxy through the backend.
5. **Mobile-first.** 80%+ users come from TikTok/Instagram. Vertical layout, thumb-friendly, minimal typing.
6. **Virality constraint.** Everything must support screenshotting and sharing one clean card. No clutter.

**Biggest technical risk is not the code — it's making the AI feel consistent across multiple calls.**
Architecture must prioritize: stable personality prompt + compressed memory state + fast response loops.

---

## The Test for Every Feature

Before building anything, ask:

> "Does this make the user feel more seen, or does this add friction?"

If it adds friction without making the AI feel more alive → cut it.
