import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { CourseDetail } from "@/components/CourseDetail";
import heroImg from "@/assets/card-cyber.jpg";

export const Route = createFileRoute("/ai/cyber-security")({
  head: () => ({ meta: [{ title: "Expertise in Cyber Security — Skill Ai" }, { name: "description", content: "Become a cyber security expert — offensive, defensive, cloud and AI-era threats." }] }),
  component: () => (
    <CourseDetail
      eyebrow="Expert Program"
      title="Expertise in Cyber Security"
      tagline="Defend, attack, and architect secure systems in the age of AI-powered threats."
      Icon={Shield}
      heroImage={heroImg}
      duration="12 months"
      level="Advanced"
      mode="Hybrid"
      tools={["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Nmap", "Splunk", "SIEM", "AWS Security", "Azure Sentinel", "Python", "Bash", "Docker", "OWASP ZAP", "Nessus"]}
      roadmap={[
        { phase: "Phase 1", title: "Security Fundamentals", points: ["Networking & OS internals", "Cryptography basics", "OWASP Top 10", "Security frameworks (NIST, ISO)"] },
        { phase: "Phase 2", title: "Offensive Security", points: ["Ethical hacking & pentesting", "Web app security", "Red teaming basics", "Exploit development"] },
        { phase: "Phase 3", title: "Defensive & Cloud", points: ["Blue team ops & SOC", "SIEM & threat hunting", "Cloud security (AWS/Azure)", "AI-driven threat detection"] },
        { phase: "Phase 4", title: "Certification & Capstone", points: ["CEH / OSCP prep", "Live CTF challenges", "Real-world incident response", "Placement support"] },
      ]}
      outcomes={["Become a Security Engineer", "Work as a Penetration Tester", "Lead SOC & incident response", "Architect secure cloud systems", "Consult on enterprise security", "Command 15-30 LPA offers"]}
      careerRoles={[
        { role: "Security Engineer", anchor: "Phase 1", desc: "Networks, OS, cryptography and OWASP fundamentals" },
        { role: "Penetration Tester", anchor: "Phase 2", desc: "Offensive security, web app exploits and red teaming" },
        { role: "Red Teamer", anchor: "Phase 2", desc: "Exploit development and adversary simulation" },
        { role: "SOC Analyst / Blue Team", anchor: "Phase 3", desc: "SIEM, threat hunting and defensive operations" },
        { role: "Cloud Security Architect", anchor: "Phase 3", desc: "AWS / Azure security and AI-driven threat detection" },
        { role: "Incident Response Lead", anchor: "Phase 4", desc: "CEH / OSCP-grade response and live CTF experience" },
      ]}
    />
  ),
});
