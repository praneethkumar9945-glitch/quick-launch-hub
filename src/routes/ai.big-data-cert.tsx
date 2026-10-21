import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-bd-cert.jpg";

export const Route = createFileRoute("/ai/big-data-cert")({
  head: () => ({ meta: [{ title: "Certificate in Big Data — Skill Ai" }, { name: "description", content: "Fast-track certificate in Big Data engineering — Spark, Hadoop, cloud data pipelines." }] }),
  component: () => (
    <CourseDetail
      eyebrow="Certificate Program"
      title="Certificate in Big Data"
      tagline="A focused sprint into distributed data systems — perfect for working professionals."
      Icon={Cpu}
      heroImage={heroImg}
      duration="6 months"
      level="Beginner → Intermediate"
      mode="Online"
      tools={["SQL", "Python", "Apache Spark", "Hadoop HDFS", "Hive", "Kafka", "Airflow", "AWS S3", "AWS EMR", "Snowflake", "dbt", "Docker"]}
      roadmap={[
        { phase: "Module 1", title: "Data Foundations", points: ["SQL mastery", "Python for data", "Data warehousing concepts", "ETL vs ELT"] },
        { phase: "Module 2", title: "Distributed Compute", points: ["Hadoop ecosystem", "Spark core + SparkSQL", "PySpark hands-on", "Performance tuning"] },
        { phase: "Module 3", title: "Streaming & Cloud", points: ["Kafka streaming", "AWS data services", "Snowflake warehousing", "Orchestration with Airflow"] },
        { phase: "Module 4", title: "Capstone", points: ["Build an end-to-end pipeline", "Real dataset project", "Certificate exam", "Job portfolio"] },
      ]}
      outcomes={["Become a Big Data Engineer", "Build scalable ETL pipelines", "Work with petabyte-scale data", "Transition into data careers", "Get cloud data certifications", "Land 8-18 LPA offers"]}
      careerRoles={[
        { role: "Big Data Engineer", anchor: "M1, M2", desc: "Design SQL, Python & warehousing foundations for scalable data platforms" },
        { role: "Spark / Hadoop Developer", anchor: "M2", desc: "Build distributed batch pipelines with Spark, SparkSQL and PySpark" },
        { role: "Streaming Data Engineer", anchor: "M3", desc: "Real-time pipelines with Kafka, AWS EMR and Snowflake" },
        { role: "Cloud Data Engineer", anchor: "M3", desc: "AWS S3 / EMR data services with Airflow orchestration" },
        { role: "Analytics Engineer", anchor: "M1, M3", desc: "Model warehouses with dbt, Snowflake and modern ELT" },
        { role: "ETL Developer", anchor: "M1, M4", desc: "Ship production-grade pipelines and pass certification" },
      ]}
    />
  ),
});
