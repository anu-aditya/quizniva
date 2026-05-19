# QuizNiva Website Build Steps

Source document: `Study Quiz website Framework.pdf`

## 1. Product Direction

Build a useful education website first, then add ads only after the site has enough real content.

First version:

- Website type: education quiz website
- Niche: Python beginner quiz + notes
- Stack: Astro + Markdown/MDX + JSON data + small React quiz component
- Backend: none
- Login: none
- Ads: none initially
- Hosting target: Cloudflare Pages, Netlify, or Vercel
- Core content target: 10 topic pages, 10 quiz pages, 200 original questions

Main principle:

- Useful content creates traffic.
- Traffic creates ad impressions.
- Ad revenue comes later.
- The website must still be valuable if ads are removed.

## 2. MVP Scope

Build these pages and features first:

- Home page
- Python subject page
- Topic explanation pages
- Quiz pages
- Result and review section
- Related topic links
- Topic index or search/index page
- About page
- Contact page
- Privacy Policy page
- Terms page
- Basic analytics hooks later
- Clean ad slots later, but disabled in MVP

Do not build in version 1:

- Login
- Backend
- Payment system
- User profiles
- Leaderboard
- Real-money rewards
- Comments
- User-generated content
- Forced or rewarded ads

## 3. First Content Batch

Create one explanation page and one quiz page for each topic:

1. Python Variables
2. Python Data Types
3. Python Input and Output
4. Python If-Else
5. Python Loops
6. Python Strings
7. Python Lists
8. Python Functions
9. Python Dictionaries
10. Python Basic Errors

Quiz target:

- 20 questions per topic
- 200 questions total
- Every question needs an answer explanation

## 4. Recommended Project Structure

Use this structure unless the final framework setup suggests small changes:

```text
study-website/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── content/
│   │   └── python/
│   │       ├── variables.md
│   │       ├── data-types.md
│   │       ├── input-output.md
│   │       ├── if-else.md
│   │       ├── loops.md
│   │       ├── strings.md
│   │       ├── lists.md
│   │       ├── functions.md
│   │       ├── dictionaries.md
│   │       └── basic-errors.md
│   ├── data/
│   │   ├── topics.json
│   │   └── questions.json
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── TopicCard.astro
│   │   ├── QuizComponent.jsx
│   │   ├── ResultSummary.jsx
│   │   ├── RelatedTopics.astro
│   │   └── AdSlot.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── TopicLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── subjects.astro
│   │   ├── python/
│   │   │   ├── index.astro
│   │   │   └── [topic].astro
│   │   ├── quizzes/
│   │   │   └── [topic].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## 5. Data Models

Topic object:

```json
{
  "id": "python-variables",
  "title": "Python Variables",
  "subject": "Python",
  "description": "Practice Python variable questions with explanations.",
  "difficulty": "Beginner",
  "order": 1,
  "contentUrl": "/python/variables",
  "quizUrl": "/quizzes/python-variables"
}
```

Question object:

```json
{
  "id": "py_var_001",
  "topicId": "python-variables",
  "question": "Which symbol is used to assign a value to a variable in Python?",
  "options": ["=", "==", ":=", "->"],
  "correctAnswerIndex": 0,
  "shortExplanation": "The = operator assigns a value to a variable.",
  "fullExplanation": "In Python, x = 5 means the value 5 is assigned to the variable x. The == operator is used for comparison, not assignment.",
  "difficulty": "easy"
}
```

## 6. Topic Page Template

Every topic explanation page should include:

- Title
- Short introduction
- Concept explanation
- Code examples
- Common mistakes
- Quick summary
- Practice quiz call to action
- Related topics

Target length:

- Main topics: 800 to 1500 words
- Smaller topics: 400 to 700 words

Avoid thin pages with only a few lines and ads.

## 7. Quiz Flow

Quiz page requirements:

- Show quiz title
- Show short instructions
- Load 10 to 20 questions for the topic
- Let the user select answers
- Calculate score on submit
- Show total score and accuracy
- Show correct and wrong answers
- Show answer explanations
- Suggest the next related topic
- Offer a retry button

Client-side quiz logic is enough for MVP.

Result calculation:

```js
function calculateResult(questions, selectedAnswers) {
  let correct = 0;
  const wrongQuestions = [];

  for (const question of questions) {
    const selected = selectedAnswers[question.id];

    if (selected === question.correctAnswerIndex) {
      correct++;
    } else {
      wrongQuestions.push(question);
    }
  }

  return {
    total: questions.length,
    correct,
    wrong: wrongQuestions.length,
    accuracy: Math.round((correct / questions.length) * 100),
    wrongQuestions
  };
}
```

## 8. Local Progress

Use browser `localStorage` for simple progress only:

- Completed quizzes
- Best scores
- Last visited topic
- Quiz attempts

Do not store sensitive data.

Example key:

```js
localStorage.setItem("quizNivaProgress", JSON.stringify(progress));
```

## 9. URL Plan

Use clean SEO-friendly URLs:

- `/`
- `/subjects`
- `/python`
- `/python/variables`
- `/python/data-types`
- `/python/input-output`
- `/python/if-else`
- `/python/loops`
- `/python/strings`
- `/python/lists`
- `/python/functions`
- `/python/dictionaries`
- `/python/basic-errors`
- `/quizzes/python-variables`
- `/quizzes/python-data-types`
- `/quizzes/python-input-output`
- `/quizzes/python-if-else`
- `/quizzes/python-loops`
- `/quizzes/python-strings`
- `/quizzes/python-lists`
- `/quizzes/python-functions`
- `/quizzes/python-dictionaries`
- `/quizzes/python-basic-errors`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`

Avoid query-string URLs like `/page?id=123`.

## 10. UI And Layout Rules

Design direction:

- Clean study-focused layout
- Light background
- Dark readable text
- One clear accent color
- Readable body text, around 16 to 18px
- Line height around 1.5 to 1.7
- Good mobile layout
- Fast loading
- Minimal animation

Desktop layout:

- Header
- Main content column
- Optional right sidebar for related topics later
- Footer

Mobile layout:

- Header
- Content
- Quiz
- Related topics
- Footer

Avoid:

- Cluttered sidebars
- Too many colors
- Popups
- Heavy animation
- Ads that dominate content
- Ads near answer buttons

## 11. SEO Requirements

Each page should include:

- Clear page title
- Meta description
- One H1
- Logical H2/H3 headings
- Original explanation
- Examples
- Quiz call to action
- Internal links
- Short URL
- Mobile-friendly layout
- Fast loading

Internal links should connect:

- Topic page to quiz page
- Topic page to next topic
- Topic page to previous topic
- Topic page to subject index
- Quiz result to next topic

Later SEO additions:

- Sitemap
- Robots file
- Schema markup
- Google Search Console submission

## 12. Legal And Trust Pages

Create these early:

- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`

About page should explain:

- What the website does
- Who it is for
- What subjects are covered
- How notes and quizzes help learners

Contact page should include:

- Contact email
- Optional simple contact form later

Privacy Policy should mention:

- Cookies
- Analytics
- Advertising partners later
- Local storage for quiz progress
- Contact information

Terms should mention:

- Educational use
- No guarantee of exam results
- Content accuracy disclaimer
- User responsibility
- Ad-supported model later

## 13. Step-by-Step Build Checklist

### Phase 1: Planning And Content Foundation

- [x] Confirm the first niche as Python beginner quiz + notes.
- [x] Create the final 10-topic list.
- [x] Create topic metadata in `src/data/topics.json`.
- [x] Create question data structure in `src/data/questions.json`.
- [x] Draft outlines for all 10 topic explanation pages.
- [x] Write the first complete topic page.
- [x] Write the first complete quiz data set.
- [x] Review the first topic and quiz before scaling the same pattern.

Definition of done:

- First topic page and first quiz are good enough to act as the quality template.

### Phase 2: Project Setup

- [x] Initialize Astro project.
- [x] Add React support for quiz components.
- [x] Create global CSS.
- [x] Create base layout.
- [x] Create header and footer.
- [x] Add basic routing structure.
- [x] Add favicon and robots file.

Definition of done:

- The site runs locally and shows a basic home page.

### Phase 3: Core Pages

- [x] Build home page.
- [x] Build subjects page.
- [x] Build Python subject page.
- [x] Build dynamic topic page route.
- [x] Build dynamic quiz page route.
- [x] Build About page.
- [x] Build Contact page.
- [x] Build Privacy Policy page.
- [x] Build Terms page.

Definition of done:

- All required MVP URLs exist and load without errors.

### Phase 4: Topic Experience

- [x] Render topic title, intro, explanation, examples, mistakes, summary, and quiz CTA.
- [x] Add previous topic link.
- [x] Add next topic link.
- [x] Add related topics section.
- [x] Add SEO title and description for each topic.
- [ ] Check page readability on desktop and mobile.

Definition of done:

- A learner can read a topic and naturally continue into the quiz or another topic.

### Phase 5: Quiz Experience

- [x] Load questions by topic ID.
- [x] Display answer options clearly.
- [x] Store selected answers in component state.
- [x] Prevent submit until required answers are selected, or clearly show unanswered state.
- [x] Calculate score.
- [x] Show accuracy.
- [x] Show answer review.
- [x] Show explanations for wrong answers.
- [x] Add retry button.
- [x] Add next-topic recommendation.

Definition of done:

- A learner can complete a quiz, understand mistakes, and continue studying.

### Phase 6: Local Progress

- [x] Store completed quizzes in `localStorage`.
- [x] Store best score per quiz.
- [x] Store last visited topic.
- [x] Show best score on quiz pages where useful.
- [x] Keep progress optional and non-sensitive.

Definition of done:

- Returning learners can see simple progress without accounts.

### Phase 7: Content Completion

- [x] Finish 10 Python topic pages.
- [x] Finish 10 Python quiz pages.
- [x] Add 20 questions per topic.
- [x] Confirm each question has a correct answer and explanation.
- [x] Check that content is original and useful.
- [x] Add internal links between topics.

Definition of done:

- The MVP has 10 explanation pages, 10 quiz pages, and 200 original questions.

### Phase 8: SEO And Crawlability

- [x] Add meta titles.
- [x] Add meta descriptions.
- [x] Add sitemap.
- [x] Add robots file.
- [x] Use clean URLs.
- [x] Add internal links.
- [ ] Check mobile layout.
- [ ] Check page speed.

Definition of done:

- Search engines can crawl and understand the site.

### Phase 9: QA

- [ ] Check all navigation links.
- [ ] Check all topic pages.
- [ ] Check all quiz pages.
- [ ] Test quiz scoring.
- [ ] Test answer review.
- [ ] Test localStorage progress.
- [ ] Test mobile viewport.
- [ ] Test desktop viewport.
- [x] Run build command.
- [ ] Fix broken links or console errors.

Definition of done:

- The site builds successfully and the core learner flow works end to end.

### Phase 10: Deployment

- [ ] Create GitHub repository.
- [ ] Push project code.
- [ ] Deploy to Cloudflare Pages, Netlify, or Vercel.
- [ ] Add custom domain later if needed.
- [ ] Submit sitemap to Google Search Console.

Definition of done:

- The website is publicly accessible and ready for indexing.

### Phase 11: Post-MVP Growth

- [ ] Expand to 20 to 30 quality pages.
- [ ] Add 200 to 500 total questions.
- [ ] Improve weak explanations.
- [ ] Improve internal links.
- [ ] Add daily quiz page.
- [ ] Add printable notes or cheat sheets later.
- [ ] Add analytics after the basic site works.
- [ ] Track page views, quiz starts, quiz completions, average score, and topic popularity.

Definition of done:

- The site has enough useful content to begin learning from user behavior.

### Phase 12: Ads Later

- [ ] Apply for ads only after enough content exists.
- [ ] Confirm About, Contact, Privacy Policy, and Terms pages exist.
- [ ] Confirm no broken pages.
- [ ] Confirm mobile layout is clean.
- [ ] Add ad slots carefully.
- [ ] Keep ads away from quiz answer buttons.
- [ ] Track bounce rate and page speed after ads.

Safe ad placement later:

- Topic page ad after useful intro content
- Topic page mid-content ad
- Result page ad after result summary
- Bottom or anchor ad only if it does not block controls

Avoid:

- Forced ads
- Rewarded ads
- Ads between question and answer options
- Ads near submit buttons
- Popups that block study flow

Definition of done:

- Ads support the site without harming the study experience or creating invalid traffic risk.

## 14. Immediate Next Step

Current next step:

1. Open the local site and review the home page, Python Variables lesson, and quiz flow.
2. Check desktop and mobile readability.
3. Create the next complete lesson: Python Data Types.
4. Add 20 original Python Data Types questions.
5. Repeat the same quality pattern until all 10 beginner topics are complete.
