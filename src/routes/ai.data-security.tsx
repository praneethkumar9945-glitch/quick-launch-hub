import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-datasec.jpg";

export const Route = createFileRoute("/ai/data-security")({
  head: () => ({ meta: [{ title: "Certificate in Data Security — Skill Ai" }, { name: "description", content: "Protect data at rest, in transit and in use — a focused data security certificate." }] }),
  component: () => (
    <CourseDetail
      eyebrow="Certificate Program"
      title="Certificate in Data Security"
      tagline="Secure the world's most valuable asset — data. Encryption, compliance, privacy, and governance."
      Icon={Lock}
      heroImage={heroImg}
      duration="6 months"
      level="Beginner → Intermediate"
      mode="Online"
      tools={["AWS KMS", "HashiCorp Vault", "OpenSSL", "GnuPG", "Splunk", "IBM Guardium", "Varonis", "Python", "SQL", "Terraform", "Docker", "Kubernetes"]}
      roadmap={[
        { phase: "Module 1", title: "Data Security Basics", points: ["Data classification", "Encryption fundamentals (AES, RSA)", "Hashing & digital signatures", "Access control models"] },
        { phase: "Module 2", title: "Data Protection", points: ["Data at rest / transit / in use", "Tokenization & masking", "Key management (KMS, Vault)", "DLP tools"] },
        { phase: "Module 3", title: "Compliance & Privacy", points: ["GDPR, HIPAA, DPDP Act", "Privacy by design", "Data auditing", "Incident reporting"] },
        { phase: "Module 4", title: "Capstone", points: ["Build a secure data pipeline", "Compliance audit simulation", "Certificate exam", "Career mentorship"] },
      ]}
      outcomes={["Become a Data Security Analyst", "Lead compliance & privacy programs", "Design encrypted data systems", "Advise on GDPR / DPDP compliance", "Transition into GRC roles", "Land 6-15 LPA offers"]}
      careerRoles={[
        { role: "Data Security Analyst", anchor: "M1", desc: "Data classification, encryption and access control fundamentals" },
        { role: "Encryption / Cryptography Engineer", anchor: "M1, M2", desc: "AES, RSA, key management with KMS and HashiCorp Vault" },
        { role: "Data Protection Engineer", anchor: "M2", desc: "Tokenization, masking and DLP across at-rest / in-transit / in-use" },
        { role: "Privacy & Compliance Officer", anchor: "M3", desc: "GDPR, HIPAA, DPDP Act and privacy-by-design programs" },
        { role: "GRC Analyst", anchor: "M3", desc: "Data auditing, incident reporting and governance" },
        { role: "Secure Data Platform Engineer", anchor: "M4", desc: "Ship an end-to-end secure, compliant data pipeline" },
      ]}
    />
  ),
});
