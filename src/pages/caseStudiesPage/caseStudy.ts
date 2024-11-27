import Fintech from "../../assets/fintech1.png"
import Crypto from "../../assets/crypto.png"
import NationalPayment from "../../assets/nationalPayment.png"
import RetailBanking from "../../assets/retailBanking.png"
import CardProcessing from "../../assets/cardProcessing.png"
import CrossBorder from "../../assets/crossBorder.png"
import CardData from "../../assets/cardData.png"
import Continuity from "../../assets/continuityPaymentProcessing.png"
import MobileTrust from "../../assets/trustMobile.png"
import Swift2 from "../../assets/swift2.png"
import Fintech2 from "../../assets/fintech2.png"
import Compliance from "../../assets/compliance.png"

export const caseStudy = [
    {
      title: "Securing Fintech for Multi-Market Compliance",
      description: "A peer-to-peer payment fintech overcame data breach concerns and achieved ISO 27001 certification, strengthening security with advanced encryption, access controls, and third-party risk assessments.",
      imgUrl: Fintech,
      segment: "ISO 27001 (ISMS)",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A fintech company providing peer-to-peer payment services faced growing concerns over data breaches and regulatory compliance in multiple markets.",
        methodology: "ISO 27001 was implemented to establish a comprehensive Information Security Management System (ISMS) focusing on encryption, access control, and threat monitoring. Security training for employees and a risk assessment for third-party vendors were conducted.",
        outcome: "The fintech gained ISO 27001 certification, significantly reduced security vulnerabilities, and improved its compliance with regional data protection laws.",
        recommendation: "Ongoing risk assessments and regular updates to data encryption methods are critical to maintaining certification."
      }
    },
    {
      title: "Ensuring Resilience in Cryptocurrency Exchanges",
      description: "A cryptocurrency exchange adopted ISO 22301 to safeguard operations during cyberattacks and market volatility, achieving uninterrupted service and improved crisis management.",
      imgUrl: Crypto,
      segment: "ISO 22301 (BCMS)",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A regional retail bank with a growing branch network wanted to ensure operational resilience in the face of natural disasters and power outages.",
        methodology: "ISO 22301 was implemented to identify critical banking services, such as ATMs and online banking, and develop disaster recovery and business continuity plans. Backup power systems were installed at key locations.",
        outcome: "The bank reduced downtime during natural disasters and power outages, achieving ISO 22301 certification and enhancing customer confidence.",
        recommendation: "Regular testing of backup systems and continuous improvement of business continuity plans should be performed to adapt to changing risks."
      }
    },
    {
      title: "Securing National Payment Transactions",
      description: "A payment switch provider implemented PCI DSS to encrypt transaction data and conduct regular scans, ensuring secure processing across financial institutions.",
      imgUrl: NationalPayment,
      segment: "PCI DSS",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "!2 weeks",
        challenge: "A fintech offering a popular digital wallet service needed to comply with PCI DSS to secure payment card data and ensure customer trust.",
        methodology: "The company implemented PCI DSS by introducing end-to-end encryption, performing vulnerability scans, and applying multi-factor authentication for customer access to accounts. Annual security audits were initiated to ensure ongoing compliance.",
        outcome: "The company achieved PCI DSS compliance, boosting customer trust and allowing them to expand their services to new regions.",
        recommendation: "Annual audits should focus on detecting vulnerabilities related to mobile app integration and potential third-party data sharing risks."
      }
    },
    {
      title: "Enhancing Resilience for Retail Banking Operations",
      description: "A retail bank implemented ISO 22301, ensuring operational continuity during disasters and power outages, reducing downtime and enhancing customer confidence.",
      imgUrl: RetailBanking,
      segment: "ISO 22301 (BCMS)",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A fintech managing a large cryptocurrency exchange needed to ensure business continuity in case of cyberattacks, market volatility, or regulatory shutdowns.",
        methodology: "ISO 22301 implementation involved developing a Business Continuity Management System (BCMS) focused on IT infrastructure resilience, alternative processing locations, and employee training for disaster recovery scenarios.",
        outcome: "The company achieved ISO 22301 certification, ensuring uninterrupted services and improved crisis response times.",
        recommendation: "Regular testing of the disaster recovery plan, with a focus on market volatility response, should be prioritized for future audits."
      }
    },
    {
      title: "Ensuring Secure Card Processing for a Global Bank",
      description: "A retail bank secured its card systems with PCI DSS compliance, leveraging encryption, tokenization, and penetration testing to maintain client trust and avoid breaches.",
      imgUrl: CardProcessing,
      segment: "PCI DSS",
      data: {
        title: "Fintech Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A global bank needed to ensure that its card processing systems complied with PCI DSS to avoid fines and maintain client trust.",
        methodology: "The bank underwent a PCI DSS assessment, implemented encryption and tokenization of card data, and conducted penetration testing to identify vulnerabilities in its online banking platform.",
        outcome: "PCI DSS compliance was achieved, allowing the bank to securely process card payments and retain its customer base without data breaches.",
        recommendation: "Future focus should be on securing evolving mobile payment technologies and ongoing penetration tests."
      }
    },
    {
      title: "Strengthening Cross-Border Payment Security",
      description: "A high-volume transaction provider implemented ISO 27001 to secure international transactions, reduce breaches, and ensure regulatory compliance, gaining ISO 27001 certification.",
      imgUrl: CrossBorder,
      segment: "ISO 27001 (ISMS)",
      data: {
        title: "Top Tier Bank in Nigeria",
        industry: "Banking",
        duration: "12 weeks",
        challenge: "A cross-border payment switch provider handling high-volume international transactions was vulnerable to security breaches and data theft.",
        methodology: "ISO 27001 was implemented to create a robust ISMS focused on securing cross-border transactions, ensuring regulatory compliance, and training employees in cybersecurity best practices.",
        outcome: "The provider achieved ISO 27001 certification, reducing the risk of data breaches and ensuring compliance with cross-border regulations.",
        recommendation: "Continuous monitoring and risk assessments should be performed to safeguard transactions as new markets are added."
      }
    },
    {
      title: "Protecting Payment Card Data for Fintech Growth",
      description: "A digital wallet fintech achieved PCI DSS compliance through end-to-end encryption, multi-factor authentication, and regular audits, boosting customer trust and market expansion.",
      imgUrl: CardData,
      segment: "PCI DSS",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A national payment switch provider in Nigeria needed to secure transaction data between banks and other financial institutions while complying with PCI DSS requirements.",
        methodology: "PCI DSS was implemented by encrypting transaction data, introducing strict access controls, and regularly performing vulnerability scans and penetration testing across its network.",
        outcome: "The switch provider achieved PCI DSS compliance, ensuring secure and seamless transaction processing across financial institutions.",
        recommendation: "Frequent audits and updates to encryption protocols should be conducted to protect against emerging cyber threats."
      }
    },
    {
      title: "Strengthening Continuity for Payment Processing",
      description: "A payment switch provider utilized ISO 22301 to maintain uninterrupted transactions during system failures, earning certification and customer trust in their resilience.",
      imgUrl: Continuity,
      segment: "ISO 22301 (BCMS)",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "12 weeks",
        challenge: "A regional payment switch provider wanted to ensure uninterrupted service in case of system failures or cyberattacks.",
        methodology: "ISO 22301 was implemented to develop a business continuity plan, perform regular system backup tests, and simulate potential disasters such as power outages or cyberattacks.",
        outcome: "The provider ensured uninterrupted transaction processing during incidents, gaining ISO 22301 certification and customer confidence in their resilience.",
        recommendation: "Business continuity simulations should be updated frequently to account for emerging cyber threats."
      }
    },
    {
      title: "Building Trust in Mobile Transactions",
      description: "A mobile payment gateway achieved ISO 27001 certification by implementing robust encryption, secure APIs, and breach response protocols, significantly improving customer trust.",
      imgUrl: MobileTrust,
      segment: "ISO 27001 (ISMS)",
      data: {
        title: "Fintech Payment Processing Platform",
        industry: "Fintech",
        duration: "9 weeks",
        challenge: "A regional retail bank was facing frequent phishing attacks targeting its customers, leading to significant reputational damage.",
        methodology: "ISO 27001 was implemented to create a robust ISMS that included advanced fraud detection, email filtering systems, and customer education on cybersecurity. Continuous monitoring for suspicious activity was introduced.",
        outcome: "The bank improved its security infrastructure, reduced phishing incidents, and achieved ISO 27001 certification, restoring customer trust.",
        recommendation: "Regular phishing simulations should be conducted to ensure ongoing employee and customer vigilance."
      }
    },
    // {
    //   title: "How ISMS compliance is influence corporate information",
    //   description: "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",   
    //   imgUrl: Compliance,
    //   segment: "ISO 9001 (QMS)",
    //   data: {
    //     title: "",
    //     industry: "",
    //     duration: "",
    //     challenge: "",
    //     methodology: "",
    //     outcome: "",
    //     recommendation: ""
    //   }
    // },
    // {
    //   title: "How ISMS compliance is influence corporate information",
    //   description: "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations.",
    //   imgUrl: Swift2,
    //   segment: "ISO 9001 (QMS)",
    //   data: {
    //     title: "",
    //     industry: "",
    //     duration: "",
    //     challenge: "",
    //     methodology: "",
    //     outcome: "",
    //     recommendation: ""
    //   }
    // },
    // {
    //   title: "Fintech Payment Processing Platform",
    //   description: "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
    //   imgUrl: Fintech2,
    //   segment: "ISO 9001 (QMS)",
    //   data: {
    //     title: "",
    //     industry: "",
    //     duration: "",
    //     challenge: "",
    //     methodology: "",
    //     outcome: "",
    //     recommendation: ""
    //   }
    // },
  ]
  