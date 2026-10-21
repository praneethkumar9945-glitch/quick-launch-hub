import { createFileRoute } from "@tanstack/react-router";
import { Database } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-big-data.jpg";

export const Route = createFileRoute("/ai/big-data")({
  head: () => ({ meta: [{ title: "Master's in AI, Big Data & Advanced MLOps — Skill Ai" }, { name: "description", content: "12-month Master's in AI, Big Data & Advanced MLOps — 10 modules, 275 sessions: Python, SQL/NoSQL, Data Science, Hadoop, Spark, Kafka, Cloud, Tableau/Power BI, MLOps, Deep Learning, CV, NLP, GenAI & Agentic AI." }] }),
  component: () => (
    <CourseDetail
      eyebrow="Master's Programme · Industry-Embedded"
      title="Master's in AI Big Data & Advance MLOps"
      tagline="12 months · 10 modules · 275 sessions (5 sessions/week) — from AI orientation and Advanced Python to Big Data & Cloud Engineering, Advanced MLOps, Deep Learning, NLP, Generative & Agentic AI, and an enterprise Capstone."
      Icon={Database}
      heroImage={heroImg}
      duration="12 months (275 sessions)"
      level="Foundation → Advanced"
      mode="5 sessions per week"
      tools={[
        "Python 3", "SQLAlchemy", "MySQL", "SQLite", "MongoDB", "PyMongo",
        "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn",
        "Hadoop", "HDFS", "Hive", "Apache Spark", "PySpark", "Kafka", "Delta Lake",
        "AWS S3/EMR/Glue/Redshift", "Azure", "GCP", "Apache Airflow",
        "Tableau", "Power BI", "DAX",
        "XGBoost", "LightGBM", "Optuna", "SHAP", "LIME", "MLflow", "DVC",
        "Docker", "Kubernetes", "Helm", "GitHub Actions", "FastAPI", "TensorFlow Serving", "TorchServe",
        "TensorFlow", "Keras", "PyTorch", "YOLO", "U-Net", "OpenCV",
        "Transformers", "LoRA / QLoRA / PEFT", "LangChain", "LlamaIndex",
        "Pinecone", "ChromaDB", "FAISS", "OpenAI API", "Anthropic API", "AutoGen",
      ]}
      roadmap={[
        {
          phase: "15 Days · 15 Sessions · M1",
          title: "AI Foundation / Orientation",
          points: [
            "Big Data & AI industry landscape and market demand",
            "Career roadmap: Data Analyst → Data Scientist → ML/MLOps Engineer → AI Architect",
            "Walkthrough of all 10 modules, tools and technology ecosystem",
            "Overview of Python, Databases, Data Science, Visualization, Big Data & Cloud",
            "Overview of MLOps, Deep Learning, CV, NLP, GenAI & Agentic AI",
            "Environment setup — Python, IDE, Git, Cloud accounts · Orientation assessment",
          ],
        },
        {
          phase: "2 Months · 40 Sessions · M2",
          title: "Advanced Python & Database Foundation",
          points: [
            "Advanced Python — comprehensions, iterators, generators, decorators, context managers, concurrency",
            "OOP — inheritance, polymorphism, encapsulation, ABCs, dunder methods, operator overloading",
            "File & exception handling, Pickle serialization, logging and debugging",
            "Modules, packages, virtual environments, unittest/pytest, project structuring",
            "Database fundamentals — RDBMS vs NoSQL, design, keys, normalization, MongoDB basics",
            "Advanced SQL — joins, subqueries, views, indexes, stored procedures, transactions (ACID)",
            "Python connectivity — sqlite3, mysql-connector, PyMongo, CRUD apps, SQLAlchemy ORM",
          ],
        },
        {
          phase: "55 Days · 55 Sessions · M3",
          title: "ML, Data Science & Data Visualization",
          points: [
            "Data science lifecycle · NumPy arrays, broadcasting · Pandas Series & DataFrames",
            "Data cleaning & wrangling — missing values, outliers, merges, groupby, pivots",
            "Statistics — descriptive, probability distributions, hypothesis testing, correlation",
            "EDA — univariate/bivariate/multivariate analysis, feature engineering",
            "Visualization — Matplotlib, Seaborn, Plotly, data storytelling",
            "ML foundations — Linear/Logistic Regression, Decision Trees, Random Forest, K-Means",
            "Model evaluation, feature scaling, cross-validation, Scikit-learn pipelines",
          ],
        },
        {
          phase: "40 Days · 40 Sessions · M4",
          title: "Big Data & Cloud Data Engineering",
          points: [
            "5 V's of Big Data · distributed computing concepts and architecture",
            "Hadoop & HDFS — NameNode/DataNode, commands, MapReduce, YARN",
            "Hive — architecture, HiveQL, partitions, bucketing, UDFs, optimization",
            "Apache Spark — RDDs, DataFrames, Spark SQL, PySpark, Streaming, MLlib, tuning",
            "Kafka — topics, partitions, producers/consumers, Kafka Connect, real-time streaming",
            "Data Lake & Lakehouse architecture (Delta Lake concepts)",
            "ETL/ELT design · AWS S3, EC2, IAM, Glue, Redshift, EMR · Azure & GCP services",
            "Airflow orchestration · data governance, security & compliance",
          ],
        },
        {
          phase: "25 Days · 25 Sessions · M5",
          title: "Big Data Analytics — Tableau & Power BI",
          points: [
            "Tableau — calculated fields, table calculations, filters, parameters, sets",
            "Advanced visuals — maps, dual-axis, treemaps · LOD expressions · story points",
            "Power BI — Power Query, data modeling and relationships",
            "DAX — calculated columns, measures, time intelligence, performance optimization",
            "KPI design, interactive dashboards and BI reporting standards",
            "Publishing to Tableau Server/Online and Power BI Service with scheduled refresh",
          ],
        },
        {
          phase: "1.5 Months · 30 Sessions · M6",
          title: "Advanced MLOps",
          points: [
            "Advanced ML — ensembles, bagging & boosting, XGBoost, LightGBM, Gradient Boosting",
            "Hyperparameter tuning — GridSearch, RandomSearch, Optuna · Interpretability with SHAP & LIME",
            "ML pipelines · MLflow experiment tracking, model registry & versioning · Feature stores & DVC",
            "Docker — images, containers, Dockerfile, Compose, registries, Dockerizing ML apps",
            "Kubernetes — pods, deployments, services, scaling, Helm, deploying ML models",
            "CI/CD for ML (GitHub Actions/Jenkins) · Blue-Green, Canary, A/B deployment strategies",
            "Model serving with FastAPI/Flask, TensorFlow Serving & TorchServe",
            "Drift detection, automated retraining, logging, alerting & MLOps governance",
          ],
        },
        {
          phase: "2 Months · 40 Sessions · M7",
          title: "Advanced Deep Learning & Computer Vision",
          points: [
            "Neural network foundations — perceptron, activations, backpropagation, optimizers",
            "Regularization — Dropout, Batch Normalization · TensorFlow, Keras & PyTorch",
            "CNNs — convolution & pooling, LeNet, AlexNet, VGG, ResNet, Inception, augmentation",
            "Transfer learning, fine-tuning and image classification workflows",
            "RNN, LSTM, GRU, sequence modeling and time-series forecasting",
            "Object detection — IoU, YOLO, Faster R-CNN, SSD, pretrained models",
            "Segmentation — U-Net, Mask R-CNN · Face recognition, OCR, quantization & pruning",
          ],
        },
        {
          phase: "2 Months · 40 Sessions · M8",
          title: "NLP & AI Bots",
          points: [
            "NLP fundamentals — preprocessing, tokenization, BoW, TF-IDF, Word2Vec, GloVe, NER, POS",
            "Transformers & LLMs — attention, GPT/BERT foundation models, prompt engineering, fine-tuning",
            "Advanced LLMs — LoRA, QLoRA, PEFT, chain-of-thought, function calling, multi-modal LLMs",
            "RAG & vector databases — Pinecone, ChromaDB, FAISS, embeddings, hybrid search & re-ranking",
            "Applications — summarization, question answering, translation, topic modeling",
            "AI bots — LangChain, LlamaIndex, OpenAI/Anthropic APIs, memory & context management",
            "Voice AI — speech-to-text, text-to-speech, responsible deployment & evaluation",
          ],
        },
        {
          phase: "15 Days · 15 Sessions · M9",
          title: "Generative AI & Agentic AI",
          points: [
            "Generative AI concepts, use cases and foundation models",
            "GANs, Diffusion models, text-to-image and multimodal GenAI",
            "Responsible and ethical Generative AI practices",
            "AI agents — planning, memory, tools · LangChain Agents & AutoGen",
            "Tool-calling, function integration, agent evaluation and guardrails",
            "Multi-agent collaboration, orchestration and enterprise AI workflows",
          ],
        },
        {
          phase: "15 Days · 15 Sessions · M10",
          title: "AI Research & Architecture + Capstone",
          points: [
            "AI research methodology — problem formulation, literature review, documentation standards",
            "Enterprise AI architecture design principles",
            "Scalability, security and cost considerations · Industry best practices",
            "Capstone — problem statement, solution architecture, data, model, pipeline, deployment",
            "Final capstone presentation to an industry panel",
          ],
        },
      ]}
      outcomes={[
        "Build production-grade software using Advanced Python and database systems",
        "Clean, wrangle, analyze and visualize real-world datasets end-to-end",
        "Design and deploy large-scale Big Data and Cloud Data Engineering pipelines",
        "Build advanced, interactive Tableau and Power BI dashboards for enterprise use",
        "Develop, automate and monitor ML models using Advanced MLOps practices",
        "Build and deploy Deep Learning, Computer Vision and NLP solutions at an advanced level",
        "Design and deploy Generative AI and Agentic AI enterprise applications",
        "Independently research, architect, document and present a real-world enterprise AI solution",
      ]}
      careerRoles={[
        { role: "Data Analyst", anchor: "M3, M5", desc: "EDA, statistics, Tableau & Power BI dashboards" },
        { role: "Data Engineer", anchor: "M2, M4", desc: "Python, SQL/NoSQL and production ETL/ELT pipelines" },
        { role: "Big Data Engineer", anchor: "M4", desc: "Hadoop, Hive, Spark and Kafka at scale" },
        { role: "Cloud Data Engineer", anchor: "M4", desc: "AWS, Azure and GCP data platforms with Airflow" },
        { role: "Data Scientist", anchor: "M3, M6", desc: "ML modeling, ensembles and interpretability" },
        { role: "MLOps Engineer", anchor: "M6", desc: "MLflow, Docker, Kubernetes, CI/CD and monitoring" },
        { role: "Deep Learning / CV Engineer", anchor: "M7", desc: "CNNs, object detection and segmentation" },
        { role: "NLP / GenAI Engineer", anchor: "M8, M9", desc: "LLMs, RAG, LangChain and AI agents" },
        { role: "AI Architect", anchor: "M10", desc: "Enterprise AI architecture, research and delivery" },
      ]}
    />
  ),
});
