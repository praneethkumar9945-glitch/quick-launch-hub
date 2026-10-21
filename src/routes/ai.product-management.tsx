import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-pm.jpg";

export const Route = createFileRoute("/ai/product-management")({
  head: () => ({
    meta: [
      { title: "Advanced Product Management — Skill Ai" },
      {
        name: "description",
        content:
          "24-week industry-embedded Advanced Product Management programme — strategy, engineering, data, AI. 288 hours, 144 sessions, 12 modules, capstone on a live partner brief.",
      },
    ],
  }),
  component: () => (
    <CourseDetail
      eyebrow="Advanced Programme · Industry-Embedded"
      title="Advanced Product Management"
      tagline="Strategy · Engineering · Data · AI — one complete PM operating system. 24 weeks · 288 hours · 144 sessions · 12 modules · capstone on a live partner brief."
      Icon={BarChart3}
      heroImage={heroImg}
      duration="6 months (24 weeks) · 1.5 mo Intensive · 12 mo Part-Time"
      level="Foundation → Advanced (no prerequisite)"
      mode="Daily · 4 hrs/day · 6 days · 12 hrs/week"
      tools={[
        "Notion",
        "Jira",
        "Miro",
        "Figma",
        "Draw.io",
        "Google Sheets / Excel",
        "Google Slides / PowerPoint",
        "Google Forms / Typeform",
        "Git & GitHub",
        "Python 3.x",
        "Pandas / NumPy",
        "SQL",
        "Matplotlib / Seaborn",
        "Google Colab",
        "Microsoft Power BI",
        "Tableau",
        "Google Analytics",
        "Chrome DevTools / Lighthouse",
        "Bootstrap",
        "Material UI",
        "OpenAI API",
        "Anthropic API",
      ]}
      roadmap={[
        {
          phase: "Weeks 1–2 · M1 · Foundation",
          title: "Product & Business Analysis Foundations",
          points: [
            "BA/PM role, stakeholder mapping, requirements gathering",
            "BRD writing & user stories · SWOT · PESTLE",
            "Product lifecycle · B2B/B2C/platform PM archetypes",
            "Market sizing (TAM/SAM/SOM) · Porter's Five Forces · PMF signals",
            "Project: Market & Competitive Landscape Report + BRD",
          ],
        },
        {
          phase: "Weeks 3–4 · M2 · Foundation",
          title: "Customer Discovery & User Research",
          points: [
            "Customer interviews · Jobs-to-be-Done (JTBD)",
            "Persona construction · sampling & recruiting",
            "Journey mapping · qualitative vs. quantitative methods",
            "Survey design · synthesising validated problem statements",
            "Project: Customer Discovery Report & Validated Problem Statement",
          ],
        },
        {
          phase: "Weeks 5–6 · M3",
          title: "Product Strategy, Roadmapping & Prioritisation",
          points: [
            "North Star Metric · OKRs · strategy frameworks",
            "Now-Next-Later & timeline roadmaps · stakeholder alignment",
            "Prioritisation with RICE, MoSCoW, Kano",
            "Business Model Canvas · pricing & monetisation models",
            "Project: Prioritised Roadmap & Business Case",
          ],
        },
        {
          phase: "Weeks 7–8 · M4",
          title: "Software Product Architecture & Technical Requirements",
          points: [
            "System architecture: frontend, backend, database",
            "Monolith vs. microservices · cloud-ready product thinking",
            "Technical feasibility analysis · developer-ready user stories",
            "Functional & non-functional requirements · API & DB mapping",
            "Project: Technical PRD & Architecture Brief",
          ],
        },
        {
          phase: "Weeks 9–10 · M5",
          title: "UI/UX Engineering for Web & Mobile Products",
          points: [
            "Frontend architecture basics · HTML/CSS/JS constraints for PMs",
            "Wireframing & prototyping in Figma · Bootstrap · Material UI",
            "Responsive design · accessibility standards",
            "UI testing with Chrome DevTools & Lighthouse · design sprints",
            "Project: Clickable Prototype & Usability + UI Test Report",
          ],
        },
        {
          phase: "Weeks 11–12 · M6",
          title: "Agile Execution, SDLC & QA Engineering",
          points: [
            "SDLC models · Scrum & Kanban in Jira",
            "Sprint & release planning · backlog grooming · acceptance criteria",
            "Git workflow · API integration flow",
            "Unit, integration & UAT testing · bug tracking & severity",
            "Project: Sprint-Ready Backlog & Release Plan in Jira",
          ],
        },
        {
          phase: "Weeks 13–14 · M7",
          title: "Python for Product Data & Metrics",
          points: [
            "Python for product analysis · Pandas & NumPy",
            "Data cleaning & analysis fundamentals",
            "SQL integration with Python · feature-usage metrics",
            "Visualisation with Matplotlib / Seaborn",
            "Project: Product Metrics Notebook",
          ],
        },
        {
          phase: "Weeks 15–16 · M8",
          title: "Data Analytics, Product Intelligence & Dashboards",
          points: [
            "KPI engineering & event tracking · data pipelines (conceptual)",
            "Google Analytics — funnels, cohorts, user behaviour",
            "A/B testing logic · AARRR & growth loops",
            "Executive dashboards in Power BI (Tableau overview)",
            "Project: Executive KPI Dashboard & Growth Experiment Plan",
          ],
        },
        {
          phase: "Weeks 17–18 · M9",
          title: "AI-Enabled Product Development",
          points: [
            "AI system architecture · ML lifecycle at product level",
            "Model training vs. inference · cost & latency implications",
            "Applied AI with Python · chatbot & recommender overviews",
            "AI limitations, bias & responsible-AI checkpoints",
            "Project: AI Feature Spec (PRD) & Working Python Demo",
          ],
        },
        {
          phase: "Weeks 19–20 · M10",
          title: "Security, Performance & Scalability",
          points: [
            "Security basics · authentication & authorisation for PMs",
            "SQL injection & common vulnerabilities in specs",
            "Performance bottlenecks · scaling web & AI products",
            "Monitoring & logging expectations with engineering",
            "Project: Product Hardening Checklist & Scale Plan",
          ],
        },
        {
          phase: "Weeks 21–22 · M11",
          title: "Go-To-Market & Stakeholder Leadership",
          points: [
            "GTM strategy · positioning & messaging · launch sequencing",
            "Stakeholder mapping · influence without authority",
            "Leadership pitching · launch communications",
            "Post-launch feedback loops & iteration",
            "Project: GTM Launch Plan & Stakeholder Pitch",
          ],
        },
        {
          phase: "Weeks 23–24 · M12 · Capstone",
          title: "End-to-End Product Development",
          points: [
            "Partner brief intake · full-stack architecture & system design",
            "Technical requirements · product data analysis in Python",
            "AI feature integration · deployment lifecycle",
            "Web hosting & cloud basics · mobile launch overview",
            "Versioning, updates & post-launch support · portfolio demo",
            "Project: End-to-End Product on a Live Partner Brief",
          ],
        },
      ]}
      outcomes={[
        "Own product discovery, strategy, roadmapping and prioritisation end-to-end",
        "Write developer-ready technical PRDs with architecture, API & DB requirements",
        "Wireframe, prototype and usability-test products in Figma",
        "Run Scrum/Kanban in Jira with sprint, release and QA workflows",
        "Analyse product data with Python, Pandas, SQL and build Power BI dashboards",
        "Scope AI/LLM features responsibly — cost, latency, bias, PRD & demo",
        "Ship a full go-to-market plan with a leadership-panel pitch",
        "Deliver a capstone product on a live partner brief — architecture to launch",
        "Target roles: Product Manager · AI Product Manager · Technical PM · Product Owner · Product Data Analyst · Growth/GTM PM",
      ]}
      careerRoles={[
        { role: "Product Manager", anchor: "M1–M3", desc: "Discovery, strategy, roadmapping and prioritisation end-to-end" },
        { role: "Technical PM", anchor: "M4, M5", desc: "Developer-ready PRDs with architecture, API and DB requirements" },
        { role: "Product Designer / PM", anchor: "M6", desc: "Wireframing, prototyping and usability testing in Figma" },
        { role: "Product Owner", anchor: "M7", desc: "Scrum / Kanban in Jira with sprint, release and QA workflows" },
        { role: "Product Data Analyst", anchor: "M8, M9", desc: "Python, Pandas, SQL and Power BI product analytics" },
        { role: "AI Product Manager", anchor: "M10", desc: "Scope AI/LLM features — cost, latency, bias, PRD and demo" },
        { role: "Growth / GTM PM", anchor: "M11", desc: "Go-to-market planning and leadership-panel pitching" },
        { role: "Senior PM / Capstone Owner", anchor: "M12", desc: "Ship a live partner brief from architecture to launch" },
      ]}
    />
  ),
});
