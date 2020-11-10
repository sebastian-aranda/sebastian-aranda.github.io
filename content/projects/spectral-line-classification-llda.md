---
title: "Spectral Line Classification"
date: 2020-11-06T16:22:37-03:00
draft: false
image: /images/llda_slc_example.png
---

[Labeled Latent Dirichlet Allocation model implementation for spectral line classification on ALMA Astronomy Datacubes](https://github.com/sebastian-aranda/Labeled-LDA-Spectral-Line-Classification)

The discipline of astroinformatics has grown a lot over the past few years thanks to the creation of bigger and more sophisticated telescopes, such as the Atacama Large Millimeter/submillimeter Array. With better spectral resolution in data, a new challenge is set in the way astronomical data is analyzed. In particular, data cubes produced by radioastronomy projects have generated an explosion in the volume of data retrieved. Some tasks, such as
the identification of spectral lines becomes more complex. For this reason it is essential to develope accurate analysis tools that allows data to be processed automatically.

This works propose a novel method in the way spectra can be classified. The approach is based on an algorithm used in the world of Text Mining, named Latent Dirichlet Allocation, a probabilistic generative model capable of describing documents as a random mixture of words over topics. Here, each spectrum is represented as a mixture of transitions over species. A spectral line transitions database named Splatalogue is used to train different models based on the type of observed object or ALMA band. The algorithm is evaluated using the model to analyze real world data cubes and spectral line surveys from radioastronomy observations of ALMA. The main advantage of the proposal is the ability to model sparse and high dimensional data using posterior inference to classify new spectral observations. Results shows that L-LDA can be used to clasifiy spectral lines on data cubes with up to 97 % of accuracy.


