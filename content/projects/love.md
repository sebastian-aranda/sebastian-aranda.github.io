---
title: "LOVE"
date: 2022-11-01T16:11:37-03:00
updated: 2025-07-12T00:00:02Z
draft: false
---

{{< image src="/images/projects/love/inria-10-years.jpg" alt="Inria Chile 10 years" class="image fit" >}}
### Inria Chile 10 years

{{< image src="/images/projects/love/rubin-first-look.jpg" alt="Vera C. Rubin Observatory first look, La Serena base facility celebration" class="image fit" >}}
### Vera C. Rubin Observatory first look, La Serena base facility celebration

# When

From Oct 2020 to Today.

# Where

I started as developer at [INRIA Chile](https://www.inria.cl/), the contractor for the initial development of the project. I was also able to take a tech lead and project management position in the project to lead the successful completion of the contract with the [Vera C. Rubin Observatory](https://rubinobservatory.org/en). Then I was hired as Frontend Web Developer by the Rubin Observatory to keep maintaning the project.

# What

The LSST Operators Visualization Environment (LOVE) is a web application designed to monitor and control the various subsystems of the Vera C. Rubin Observatory. It provides a unified interface for operators to visualize real-time data from over 60 different systems, facilitating efficient management and operation of the observatory's complex infrastructure. The Legacy Survey of Space and Time (LSST) is a groundbreaking astronomical survey that will capture vast amounts of data, and LOVE plays a crucial role in ensuring the observatory's systems are functioning optimally.

I initially started working as a programmer, I had to understand the basis of a complex sensoring system that needs to be reflected through user itnerfaces for active monitoring and controling. The application is built through different modules that allows the full system to read telemetries from the observatory components and being able to display those thorugh a web application user interface that several users can connect through, even remotely. Performance and reliability are key aspects of the application, as it needs to handle large volumes of data and provide real-time updates to users.

My role to proyect leader shortened my time programing but also gave me more time to deal with project management tasks in order to successufly finish the contract between Inria and the Vera C. Rubin Observatory that ended by the finish of 2023. I was able to lead a team of 4 developers, and I also had the opportunity to work on the project as a frontend developer, where I could apply my knowledge in ReactJS and Django Rest Framework (DRF) to develop new features and improve the existing ones.

Working in an astrnomy observatory is amazing, you can check one of my first pictures there where I was working on the right side of the following picture:

{{< image src="/images/projects/love/lsst-visit.jpg" alt="Software Development" class="image fit" >}}

Most of the Rubin Observtory code is Open Source, so I invite you to check some of the repositories of the LOVE project:
- [LOVE-frontend](https://github.com/lsst-ts/LOVE-frontend)
- [LOVE-manager](https://github.com/lsst-ts/LOVE-manager)
- [LOVE-commander](https://github.com/lsst-ts/LOVE-commander)
- [LOVE-producer](https://github.com/lsst-ts/LOVE-producer)
- [LOVE-simulator](https://github.com/lsst-ts/LOVE-simulator)
- [LOVE-integration-tools](https://github.com/lsst-ts/LOVE-integration-tools)

# How

## Frontend:
HMTL + CSS3 + Javascript + React JS + Redux

## Backend:
Django + Django Rest Framework (DRF) + Django Channels

## Technologies:
Websockets + Rest APIs + JSON + JAML + XML + Docker + Kubernetes

## Tools:
Github + Jenkins + JIRA + Confluence + ClickUp + Pytest + Eslint + Prettier + Black + Flake8 + Pytest

# Examples - under construction

{{< gallery dir="/images/projects/love/examples/" />}}