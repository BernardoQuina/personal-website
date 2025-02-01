# Personal Website

Welcome to my personal website repository! This project showcases my portfolio as a full-stack developer, built with modern web technologies and deployed on AWS infrastructure using Infrastructure as Code principles.

## Overview

This website serves as my professional portfolio, highlighting my experience as a full-stack developer with a focus on cloud architecture and TypeScript development. The site features sections for my background, work experience, latest projects, and technical certifications.

## Tech Stack

- **Frontend Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS
- **Infrastructure:** AWS (S3, CloudFront, Route53)
- **IaC:** AWS CloudFormation
- **CI/CD:** GitHub Actions

## Features

- Responsive design with dark/light mode support
- Scroll animated with (Framer) Motion
- Static site generation for optimal performance
- Infrastructure as Code deployment
- Automated CI/CD pipeline

## Project Structure

```
bernardoquina-personal-website/
├── src/                      # Source code
│   ├── components/           # React components
│   ├── pages/               # Next.js pages
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global styles
│   └── utils/               # Utility functions
├── infrastructure/          # AWS CloudFormation templates
├── public/                  # Static assets
└── .github/workflows/       # GitHub Actions workflows
```

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bernardoquina-personal-website.git
   cd bernardoquina-personal-website
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Copy the environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Infrastructure Setup

This project uses AWS CloudFormation to provision and manage the infrastructure. The stack creates:

- S3 bucket for static website hosting
- CloudFront distribution for content delivery
- Route53 DNS records
- CloudFront Functions for SPA routing

### Prerequisites

- AWS account with appropriate permissions
- Domain name with Route53 hosted zone
- ACM certificate in us-east-1 region (for CloudFront)
- Create OICD provider for GitHub actions and store the role arn as a secret ([follow this step-by-step guide](https://medium.com/israeli-tech-radar/openid-connect-and-github-actions-to-authenticate-with-amazon-web-services-9a66b3b88e92))

### Deployment

The website is automatically updated through GitHub Actions when changes are pushed to the main branch. The workflow:

1. Builds the Next.js application
2. Authenticates with AWS using OIDC
3. Syncs built files to S3
4. Invalidates CloudFront cache

For infrastructure initial deployment and updates, use the provided script:

```bash
cd infrastructure
./stack-deploy.sh
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# AWS Deployment Variables
S3_BUCKET_NAME=          # Your S3 bucket name
DOMAIN_NAME=            # Your custom domain
HOSTED_ZONE_ID=         # Route53 hosted zone ID
CERTIFICATE_ARN=        # ACM certificate ARN (us-east-1)
```
