---
layout: post
title: The Penrose process in Kerr black holes
date: 2024-11-22 18:08 -0300 UTC
description: How can black holes work as windmills?
tags: gr-qc
categories: physics
pseudocode: true
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

## Introduction {#sec:intro-penrose-process}

The Kerr metric in General Relativity is an exact solution of Einstein's vacuum equations, describing the empty spacetime geometry around a stationary, uncharged, rotating point-like mass distribution.

The overall structure of a Kerr metric is quite complex, with multiple horizons, extended singularities, closed timelike curves (CTCs), ergosurfaces, and more. These features, resulting from the absence of temporal and spherical symmetry, also provide a more accurate description of actual astrophysical objects. Specifically, the Kerr black hole is widely recognized as the ultimate stage in the evolution of sufficiently massive stars

In 1969, physicist Roger Penrose proposed a theoretical mechanism for extracting energy from a Kerr black hole. This process depends on the region between an ergosurface and an event horizon. From the perspective of an asymptotic (at an infinite distance) observer, this ergoregion abhors static frames of reference, a phenomenon known as the Lense-Thirring effect. Those who attempt to resist being "dragged" may acquire negative energy. The absorption of these negative energy particles enables the Kerr black hole to be spun down, allowing for an effective energy extraction to take place.

## The Kerr metric {#sec:metric-penrose-process}

The Kerr metric is am axially symmetric stationary exact vacuum solution of Einstein equations. For a asymptotic observer utilizing traditional spherical coordinates $(t,r,\theta,\phi)$, and natural units ($c=G=1$), we have

$$
g(t,r,\theta,\phi) = g_{ tt } dt^2 + g_{ t \phi } dt d \phi + g_{ \phi t } d \phi dt + g_{ rr } dr^2 + g_{ \theta \theta } d\theta^2 + g_{ \phi \phi } d \phi^2 \;,
$$

with metric components are given by:

$$
g_{tt} = - \left(1 - \frac{ r_{S} r }{ \rho^2 } \right) \;,
$$

$$
g_{t\phi} = g_{\phi t} = \frac{ - r_{S}ra\sin^2\theta }{ \rho^2 }\;,
$$

$$
g_{rr} = \frac{ \rho^2 }{ \Delta }\;,
$$

$$
g_{\theta\theta} = \rho^2\;,
$$

$$
g_{\phi\phi} = \left[(r^2 + a^2)^2 - \Delta a^2 \sin^2\theta\right]\frac{  \sin^2\theta }{ \rho^2 } \;,
$$

Here, $r_{S} \equiv 2M $, $ \rho^2 \equiv  r^2 + a^2\cos^2\theta $, $ \Delta \equiv r^2 - 2Mr + {a}^2$, and $ a \equiv J/M $. The Kerr solution is parameterized by the quantities $ M $ and $ J $, interpreted as the black hole mass and angular momentum, respectively. We want them to respect the bound $ J \leq M $, otherwise we end up with naked singularities. [@sec:metric-penrose-process]


