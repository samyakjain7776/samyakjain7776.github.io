# Updating the portfolio

This is a static site: open `index.html` directly or deploy the folder as-is. There is no build step and the main site has no CDN dependency.

- `index.html`: introduction, selected work, research, industry experience, skills, education, and teaching.
- `portfolio.html`: all projects, including earlier work.
- `assets/site.css`: shared layout, typography, responsive styles, and reduced-motion support.
- `assets/site.js`: accessible mobile navigation. Content and links remain usable without JavaScript.
- `assets/SamyakJain_Resume.pdf`: downloadable resume; replace this file to update it.
- `projects/`: individual write-ups. The RAG case study has its own styles and saved experiment explorer.

## Adding a project

1. Create `projects/your-project.html`, using `projects/vector-search.html` as a starting point. Update the title, description, project context, and article content. Paths from a project page to shared assets start with `../`.
2. Add a card to the appropriate grid in `portfolio.html`. Feature it in `index.html` too if it is one of the strongest examples of your current work.
3. Use the entire card as a normal link. Do not nest additional links or buttons inside it. Put repository, demo, and reference links on the project's own page.
4. Update the facts, measurements, and limitations from actual project evidence. Keep planned research labeled as planned until it begins.

```html
<a class="project-card" href="projects/your-project.html" aria-label="Project name — read the project">
    <span class="eyebrow">Personal project · Area</span>
    <h3>Project name</h3>
    <p>The problem and what you built.</p>
    <p class="result">A measured result with context, or the technical focus.</p>
    <div class="card-footer"><span>Read the project</span><span aria-hidden="true">↗</span></div>
</a>
```

Use a project page to explain the problem, your contribution, implementation, tradeoffs, results, and limitations. Add real diagrams, code links, and demos as they become available; omit unavailable links.

## Content notes

- Goldman title is Software Engineer II, as confirmed by Samyak.
- Georgia Tech TA course names appear without semester labels.
- D2I GRA dates: Jan–Aug 2026. Financial Services Innovation Lab GRA dates: Aug 2026–present, as confirmed by Samyak. Financial AI project scope is still being defined; no results are claimed. His official profile identifies him as director of QCF and the Financial Services Innovation Lab: https://www.scheller.gatech.edu/directory/faculty/chava/index.html
- GitHub uses the account URL in the supplied resume.
- Renderer and vector-search metrics come from the supplied resume. The older project overviews retain existing content without adding new benchmark claims.

## Multi-tenant RAG case study

`projects/multi-tenant-rag.html` contains the research narrative, static architecture
and retrieval diagrams, and an optional saved-question explorer. Assets live in
`projects/assets/`. All URLs are relative so the page works on GitHub Pages under
the same base path as the portfolio. No server, API keys or build step is needed.

The research section, selected-project card, and portfolio collection link to the
same case study. Other projects now have separate overview pages.

The experiment data is a field-limited export of 60 PostgreSQL and 100 paired
MuSiQue questions. It preserves original evaluator grades. Regenerate from the
research checkout with `demo/scripts/export_experiments.py`, then copy the resulting
`experiments.js` to `projects/assets/rag-experiments.js`. Do not substitute the
500-question MuSiQue baseline for the paired 100-question comparison.

## Simple Renderer case study

`projects/simple-renderer.html` is the public renderer case study. The old `projects/report-renderer.html` URL forwards to it. Both project grids link to the new page.

The narrative follows the supplied Simple Renderer behavioral story: regulatory deadlines, a one-week prototype, correctness and stress testing, and adoption by eight teams. Architecture details come from the supplied system design notes. Historical performance figures come from the resume. Do not add unverified reconstruction mechanisms to the historical narrative.

`projects/assets/simple-renderer-architecture.svg` is a static, accessible architecture diagram. It shows upstream inputs, the AWS service boundary, streaming reader, sequenced chunks, workers, reassembly, styles, single writer, temporary XML, and output files. The page uses the RAG stylesheet plus `renderer-case-study.css`; the RAG page and data remain unchanged.

There is no interactive renderer demo, interview Q&A, bibliography, or public link to the implementation plan. `docs/simple-renderer-implementation-plan.md` remains a local development document for the future independent repository; it is not part of the published case-study narrative. A runnable reconstruction has not been built.
