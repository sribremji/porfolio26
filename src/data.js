export const SKILLS = [
  {
    name: 'Java Engineering (Core)',
    tags: ['Java 8', 'Java 11', 'Java 17', 'OOP / SOLID', 'Collections & Streams', 'Concurrency', 'JVM Tuning', 'Generics', 'Reflection'],
    hot: ['Java 8', 'Java 11', 'Java 17'],
  },
  {
    name: 'Spring Ecosystem',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Spring Cloud Gateway', 'Spring Batch', 'Hibernate', 'JPA', 'Lombok', 'MapStruct'],
    hot: ['Spring Boot', 'Spring Cloud'],
  },
  {
    name: 'APIs & Architecture Patterns',
    tags: ['REST APIs', 'GraphQL', 'OpenAPI 3.0', 'Microservices', 'CQRS', 'Event Sourcing', 'Saga Pattern', 'Outbox Pattern', 'Hexagonal Architecture', 'DDD', 'API-First'],
    hot: ['REST APIs', 'Microservices', 'CQRS'],
  },
  {
    name: 'AWS Cloud (Core)',
    tags: ['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'ECS', 'ECR', 'Fargate', 'EventBridge', 'SQS', 'SNS', 'CloudFront', 'SageMaker', 'RDS', 'ElastiCache'],
    hot: ['Lambda', 'DynamoDB', 'ECS'],
  },
  {
    name: 'AWS Security & Networking',
    tags: ['IAM', 'Secrets Manager', 'VPC', 'Route 53', 'WAF', 'KMS', 'AWS Shield', 'CloudTrail', 'Security Hub', 'GuardDuty', 'Cognito'],
    hot: ['IAM', 'Secrets Manager'],
  },
  {
    name: 'Infrastructure as Code',
    tags: ['Terraform', 'AWS CDK', 'CloudFormation', 'Helm', 'Ansible', 'Pulumi'],
    hot: ['Terraform', 'AWS CDK'],
  },
  {
    name: 'Containers & Orchestration',
    tags: ['Docker', 'Kubernetes (EKS)', 'Helm Charts', 'Docker Compose', 'Kustomize', 'Service Mesh (Istio)', 'Pod Autoscaling', 'RBAC'],
    hot: ['Kubernetes (EKS)', 'Docker'],
  },
  {
    name: 'Messaging & Streaming',
    tags: ['Apache Kafka', 'AWS EventBridge', 'SQS', 'SNS', 'RabbitMQ', 'Kafka Streams', 'Dead Letter Queues', 'Event-Driven Architecture'],
    hot: ['Apache Kafka', 'Kafka Streams'],
  },
  {
    name: 'Databases',
    tags: ['DynamoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'Elasticsearch', 'Redis', 'MongoDB', 'ElastiCache', 'Connection Pooling'],
    hot: ['DynamoDB', 'PostgreSQL'],
  },
  {
    name: 'CI/CD & DevOps',
    tags: ['GitHub Actions', 'Jenkins', 'AWS CodePipeline', 'CodeBuild', 'ArgoCD', 'GitLab CI', 'GitOps', 'Blue-Green Deploy', 'Canary Deploy', 'SonarQube', 'Nexus', 'Artifactory'],
    hot: ['GitHub Actions', 'ArgoCD'],
  },
  {
    name: 'Secrets & Security',
    tags: ['HashiCorp Vault', 'AWS Secrets Manager', 'Spring Security', 'OAuth2', 'JWT', 'PKCE', 'mTLS', 'OWASP', 'Trivy', 'DevSecOps', 'Zero Trust'],
    hot: ['HashiCorp Vault', 'OAuth2', 'JWT'],
  },
  {
    name: 'Observability & Monitoring',
    tags: ['AWS CloudWatch', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack', 'Splunk', 'Jaeger', 'Distributed Tracing', 'APM', 'SLO/SLA'],
    hot: ['Datadog', 'Prometheus'],
  },
  {
    name: 'Testing & Quality',
    tags: ['JUnit 5', 'Mockito', 'TestContainers', 'Contract Testing (Pact)', 'WireMock', 'Integration Testing', 'Performance Testing', 'TDD', 'BDD'],
    hot: ['JUnit 5', 'TDD', 'TestContainers'],
  },
  {
    name: 'Build & Tooling',
    tags: ['Maven', 'Gradle', 'Bash Scripting', 'Python', 'Groovy', 'Linux (Ubuntu / Amazon Linux)', 'Git', 'GitHub', 'GitLab', 'Bitbucket'],
    hot: ['Maven', 'Gradle'],
  },
]

export const EXPERIENCE = [
  {
    role: 'Senior Software Development Specialist',
    company: 'LTIMindtree',
    date: 'Sep 2024 – Present',
    domain: 'Fintech · Debit Card Platform',
    color: '#0a84ff',
    flow: {
      title: 'Debit Card Platform: API and AWS Architecture Flow',
      chain: ['Mobile / Web Client', 'AWS API Gateway', 'Spring Boot Services (Java 17)', 'Card Issuance Service', 'DynamoDB (Card Store)', 'EventBridge', 'SQS', 'Notification / Fraud Services'],
    },
    bullets: [
      'Architected and built a Debit Card Platform on AWS using Java 17 and Spring Boot with RESTful APIs for full card lifecycle management deployed on ECS Fargate behind API Gateway.',
      'Card Issuance API (POST /v1/cards): provisions virtual/physical debit cards, generates encrypted card numbers via AWS KMS, stores card metadata in DynamoDB, triggers EventBridge event to downstream card network.',
      'Card Management APIs (PATCH /v1/cards/{id}/lock, /unlock, /change-pin, /status): instant DynamoDB state updates and SQS events for real-time card network sync; PIN change with Spring Security encrypted storage.',
      'Transaction Authorization: sub-50ms real-time engine using Lambda and DynamoDB conditional writes; fraud-signal fan-out via EventBridge rule-based routing to 5+ downstream services.',
      'Multi-account AWS infrastructure with Terraform and AWS CDK across dev/staging/prod; CI/CD via GitHub Actions and ArgoCD on EKS with zero-downtime blue-green deployments, cutting release cycle from 2 days to 4 hours.',
      'Enforced OAuth2/JWT, Spring Security, AWS IAM least-privilege, and WAF rules — zero critical findings in all quarterly security audits.',
    ],
    chips: ['Java 17', 'Spring Boot', 'AWS API Gateway', 'ECS Fargate', 'DynamoDB', 'EventBridge', 'SQS', 'KMS', 'Terraform', 'AWS CDK', 'Kubernetes', 'ArgoCD'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Genesys',
    date: 'Jan 2024 – Sep 2024',
    domain: 'Customer Experience (CX) Platform',
    color: '#30d158',
    flow: {
      title: 'CX Platform: Java Microservices on AWS',
      chain: ['CX Event Source', 'Apache Kafka (Streams)', 'Java Spring Boot Services', 'AWS ECS', 'RDS PostgreSQL + ElastiCache', 'API Gateway', 'Enterprise Clients'],
    },
    bullets: [
      'Developed cloud-native backend microservices in Java and Spring Boot on AWS for the Genesys CX platform, improving API throughput by 35% with average response time under 80ms.',
      'Built real-time Kafka event streaming pipelines with Java Kafka Streams API and Confluent Schema Registry, serving enterprise CX workflows globally.',
      'Authored reusable Terraform modules for AWS infrastructure (ECS, RDS PostgreSQL, ElastiCache Redis, VPC, ALB) across multiple regions, reducing provisioning time by 70%.',
      'Designed OpenAPI 3.0 contract-first REST APIs, improving cross-team integration reliability and reducing integration bugs by 45%.',
      'Established observability with Datadog APM, distributed tracing, and CloudWatch alarms, reducing MTTR by 40% and defining SLOs for all critical CX services.',
    ],
    chips: ['Java', 'Spring Boot', 'Apache Kafka', 'Kafka Streams', 'AWS ECS', 'RDS PostgreSQL', 'ElastiCache', 'Terraform', 'Datadog', 'OpenAPI 3.0'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Comcast',
    date: 'Jan 2019 – Jan 2024',
    domain: 'Media · Content Delivery Platform',
    color: '#ff9f0a',
    flow: {
      title: 'Content Delivery + Secrets Migration Flow',
      chain: ['Content Producers', 'EventBridge (Custom Bus)', '5-Lambda Chain (Java)', 'SQS Fan-out', '8+ Consumer Services', 'CloudFront CDN + SageMaker', 'End Users'],
    },
    bullets: [
      'Designed a 5-Lambda event-driven pipeline in Java processing 10M+ daily events via AWS EventBridge, SQS, Elasticsearch, CloudFront CDN, and SageMaker ML inference.',
      'Led full secrets migration from AWS Secrets Manager to HashiCorp Vault: updated all Spring Boot services to use Vault Java SDK and Spring Cloud Vault, implemented dynamic DB credential rotation, configured AppRole auth for ECS workloads, and reduced 200+ manual secrets to 40 centrally governed Vault paths.',
      'Implemented Transactional Outbox Pattern in Java for exactly-once event delivery — zero data loss over 3 years in production.',
      'Built high-throughput content metadata REST API in Spring Boot serving 5M+ daily requests at p99 latency under 100ms, backed by DynamoDB and ElastiCache Redis.',
      'Automated AWS infrastructure with Terraform, reducing environment provisioning from 3 days to under 2 hours.',
      'Integrated SageMaker ML-based content recommendation models into the Java event pipeline, improving content engagement by 18%.',
    ],
    chips: ['Java', 'Spring Boot', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'ElastiCache', 'HashiCorp Vault', 'Spring Cloud Vault', 'SageMaker', 'Terraform', 'CloudFront'],
  },
  {
    role: 'Software Engineer, DevOps',
    company: 'TCS (T-Mobile)',
    date: 'Jan 2016 – Jan 2019',
    domain: 'Telecom · T-Mobile US',
    color: '#bf5af2',
    flow: {
      title: 'T-Mobile DevOps Pipeline: End to End',
      chain: ['Java Spring Boot Services', 'GitHub / Bitbucket', 'Jenkins CI', 'SonarQube + OWASP', 'Docker Build', 'AWS ECR', 'ECS / EC2 Deploy', 'CloudWatch'],
    },
    bullets: [
      'Owned end-to-end CI/CD pipeline automation for T-Mobile telecom backend services on AWS, enabling continuous delivery for 6+ Java microservice teams.',
      'Developed Java and Spring Boot backend services for T-Mobile enterprise systems: RESTful APIs for subscriber management, provisioning, and billing backed by Oracle and MySQL via JPA/Hibernate.',
      'Built Jenkins CI/CD pipelines using Groovy DSL covering build, test, SonarQube analysis, Docker image build and push to AWS ECR, and deployment to ECS, reducing manual release effort by 60%.',
      'Containerised all Java services using Docker and AWS ECS; authored Docker Compose configs for local dev parity across all environments.',
      'Provisioned and maintained AWS infrastructure: EC2, ECS, S3, RDS, IAM, VPC, and CloudWatch alarms for all T-Mobile backend workloads.',
      'Refactored legacy monolithic Java applications into modular Spring Boot microservices, improving maintainability and deployment safety.',
    ],
    chips: ['Java', 'Spring Boot', 'Jenkins (Groovy DSL)', 'Docker', 'AWS ECS', 'AWS ECR', 'EC2', 'S3', 'RDS', 'CloudWatch', 'SonarQube', 'OWASP', 'Bash'],
  },
]

export const WHYHIRE = [
  {
    num: '01',
    color: '#0a84ff',
    title: 'Production-proven at enterprise scale',
    body: 'Designed and operated distributed systems processing 10M+ daily events at Comcast for five years with zero data loss. At Genesys, drove API throughput up 35% and cut MTTR by 40%. These are not side projects — they are production systems serving millions of real users.',
    proof: '10M+ events/day · Zero data loss · 3 years production',
  },
  {
    num: '02',
    color: '#30d158',
    title: 'Full ownership from code to cloud',
    body: 'Most engineers write code and hand off. I architect the system, write the Java services, provision AWS infrastructure with Terraform, wire up CI/CD with GitHub Actions and ArgoCD, instrument with Datadog, and harden with Spring Security and HashiCorp Vault. One engineer covering the full delivery lifecycle.',
    proof: 'Code · Infra · CI/CD · Observability · Security',
  },
  {
    num: '03',
    color: '#ff9f0a',
    title: 'Deep Java expertise, beyond annotations',
    body: 'Nine years of Java across versions 8, 11, and 17. I understand JVM internals, concurrency models, GC tuning, and memory management — not just Spring Boot configuration. All projects delivered with TDD and 90%+ unit test coverage using JUnit 5, Mockito, and TestContainers.',
    proof: 'Java 8/11/17 · TDD · 90%+ test coverage',
  },
  {
    num: '04',
    color: '#bf5af2',
    title: 'AWS depth across the full cloud stack',
    body: 'Three AWS certifications and hands-on experience with 15+ AWS services in production: Lambda, ECS Fargate, DynamoDB, EventBridge, SQS, API Gateway, SageMaker, KMS, IAM, and more. Serverless platforms, multi-region Terraform infrastructure, and ML-integrated pipelines — all shipped.',
    proof: 'AWS Solutions Architect · Developer · Cloud Practitioner',
  },
  {
    num: '05',
    color: '#ff453a',
    title: 'Cross-domain experience: fintech, media, telecom',
    body: 'Debit card platforms at LTIMindtree. Content delivery at Comcast. Customer experience at Genesys. Full DevOps for T-Mobile at TCS. Each domain brought unique scale challenges, compliance requirements, and architecture decisions. I adapt fast and deliver regardless of the domain.',
    proof: 'Fintech · Media · CX · Telecom',
  },
  {
    num: '06',
    color: '#ffd60a',
    title: 'Security built in, not bolted on',
    body: 'Led the migration of 200+ secrets from AWS Secrets Manager to HashiCorp Vault at Comcast: centralised governance, dynamic DB credentials, AppRole authentication across all ECS workloads. Zero-trust principles, OAuth2/JWT, IAM least-privilege, and DevSecOps practices applied to every project.',
    proof: 'HashiCorp Vault · OAuth2/JWT · Zero critical findings',
  },
  {
    num: '07',
    color: '#0a84ff',
    title: 'DevOps as a first-class skill',
    body: 'Built complete DevOps pipelines from scratch for T-Mobile using Jenkins, Docker, and AWS ECS. At LTIMindtree, implemented GitOps with ArgoCD on Amazon EKS achieving zero-downtime blue-green deployments and cutting release cycles from 2 days to 4 hours. Infrastructure is code. Rollbacks are instant.',
    proof: 'ArgoCD · GitOps · Zero-downtime · 4-hour releases',
  },
  {
    num: '08',
    color: '#30d158',
    title: 'Raises the bar for the whole team',
    body: 'At Comcast, led architecture sessions whose patterns were adopted org-wide across 4 teams. At LTIMindtree, mentored engineers on cloud-native patterns and IaC tooling, and integrated agentic AI into developer workflows, boosting team velocity by 30%.',
    proof: '4-team adoption · 30% velocity gain · Active mentorship',
  },
]

export const ACHIEVEMENTS = [
  { num: '10M+', label: 'Daily Events Processed', desc: 'Event-driven Java/Lambda platform at Comcast with zero data loss across 3 years of production.' },
  { num: '95%', label: 'Infra Provisioning Faster', desc: '3 days to 2 hours via Terraform automation at Comcast and Genesys.' },
  { num: '4 hrs', label: 'CI/CD Release Cycle', desc: 'Cut from 2 days to 4 hours via GitOps ArgoCD pipelines at LTIMindtree.' },
  { num: '35%', label: 'API Throughput Improved', desc: 'Spring Boot microservices optimisation at the Genesys CX platform.' },
  { num: '40%', label: 'MTTR Reduction', desc: 'Datadog APM dashboards, distributed tracing, and CloudWatch SLOs at Genesys.' },
  { num: '90%+', label: 'Unit Test Coverage', desc: 'TDD with JUnit 5, Mockito, and TestContainers across all Java microservices.' },
  { num: '200+', label: 'Secrets Migrated to Vault', desc: 'Full HashiCorp Vault migration from AWS Secrets Manager — 200 secrets to 40 governed Vault paths.' },
  { num: '30%', label: 'Team Velocity Boost', desc: 'Agentic AI tooling for test generation, code review, and IaC scaffolding at LTIMindtree.' },
]

export const CERTS = [
  { num: '01', title: 'AWS Certified Solutions Architect', sub: 'Associate · Amazon Web Services' },
  { num: '02', title: 'AWS Certified Developer', sub: 'Associate · Amazon Web Services' },
  { num: '03', title: 'AWS Certified Cloud Practitioner', sub: 'Foundational · Amazon Web Services' },
]

export const MQ_ITEMS = [
  'Java 17', 'Spring Boot', 'Spring Cloud', 'AWS Lambda', 'Amazon ECS', 'Kubernetes',
  'Terraform', 'Apache Kafka', 'DynamoDB', 'HashiCorp Vault', 'Docker', 'GitHub Actions',
  'ArgoCD', 'Datadog', 'Prometheus', 'Spring Security', 'OAuth2 / JWT', 'GraphQL',
  'Microservices', 'CQRS', 'Event-Driven Architecture', 'Hexagonal Architecture',
  'TDD / BDD', 'AWS CDK', 'ElastiCache', 'SageMaker', 'CloudFront', 'Redis',
  'PostgreSQL', 'Grafana', 'ELK Stack', 'Kafka Streams', 'Outbox Pattern', 'OpenAPI 3.0',
]
