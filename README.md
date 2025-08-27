# DevOps CI/CD - Node.js → Docker → GHCR → EC2

This repo demonstrates a resume-ready CI/CD pipeline:
- **CI**: run Jest tests on push/PR
- **CD**: build a Docker image, push to **GHCR**, then SSH into **AWS EC2** and run the new container.

## Quick Start

1. **Create a new GitHub repository** and push this code.
2. In **Settings → Actions → General**, set *Workflow permissions* to **Read and write**.
3. Make your GHCR package public once it exists (after first push) so EC2 can pull without auth:
   - GitHub → your profile → Packages → `devops-cicd-node` → change visibility to **Public**.
4. Add repo **Secrets** (Settings → Secrets and variables → Actions → New repository secret):
   - `EC2_HOST` — your EC2 public IP or DNS.
   - `EC2_USER` — usually `ubuntu` for Ubuntu AMIs.
   - `EC2_SSH_KEY` — paste the **private key** (.pem) contents.
   - (optional) `EC2_PORT` — SSH port (default 22).

## Launch EC2 (Ubuntu)

- Open inbound ports **22** (SSH) and **80** (HTTP) in the Security Group.
- SSH in and prepare Docker (or let workflow install it):
  ```bash
  chmod +x infra/prepare-ec2-ubuntu.sh
  ./infra/prepare-ec2-ubuntu.sh
  ```

## Local Dev

```bash
npm ci
npm test
npm start
# Open http://localhost:3000
```

## Pipeline

- On push to `main`:
  - run tests
  - build & push image `ghcr.io/<your-username>/devops-cicd-node:latest`
  - SSH to EC2 and run the container `-p 80:3000`

## Resume Line

> Implemented CI/CD pipeline using GitHub Actions & Docker for automated build, test, and deployment on AWS EC2.
