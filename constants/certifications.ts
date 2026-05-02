export type CertificationItem = {
  title: string;
  issuer: string;
  icon: "databricks" | "udemy" | "alteryx" | "leetcode" | "aws";
  iconColor: string;
  credentialUrl?: string;
  year?: string;
};

export const certifications: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "aws",
    iconColor: "text-[#FF9900]",
    year: "2022-2025",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/66Y7JDYDN114QCGM",
  },
  {
    title: "SQL Analytics on Databricks",
    issuer: "Databricks",
    icon: "databricks",
    iconColor: "text-[#FF3621]",
    credentialUrl: "https://drive.google.com/file/d/1lpJHqGwcPEfdI48u7gXV2lzhhamJ34Xh/view",
  },
  {
    title: "SQL 50 Badge on LeetCode",
    issuer: "LeetCode",
    icon: "leetcode",
    iconColor: "text-[#FFA116]",
    credentialUrl: "https://leetcode.com/u/sherylmathew11/",
  },
];
