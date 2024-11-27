---
layout: post
title: Can black holes work as windmills?
description: The Penrose process in Kerr black holes
author: Guilherme Sadovski
date: 2024-11-22 18:08 -0300 UTC
tags: gr-qc
categories: physics
pseudocode: true
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

## Introduction

The Kerr metric in General Relativity is an exact solution of Einstein's vacuum equations, describing the empty spacetime geometry around a stationary, uncharged, rotating point-like mass distribution.

The overall structure of a Kerr metric is quite complex, with multiple horizons, extended singularities, closed timelike curves (CTCs), ergosurfaces, and more. These features, resulting from the absence of temporal and spherical symmetry, also provide a more accurate description of actual astrophysical objects. Specifically, the Kerr black hole is widely recognized as the ultimate stage in the evolution of sufficiently massive stars

In 1969, physicist Roger Penrose proposed a theoretical mechanism for extracting energy from a Kerr black hole. This process depends on the region between an ergosurface and an event horizon. From the perspective of an asymptotic (at an infinite distance) observer, this ergoregion abhors static frames of reference, a phenomenon known as the Lense-Thirring effect. Those who attempt to resist being "dragged" may acquire negative energy. The absorption of these negative energy particles enables the Kerr black hole to be spun down, allowing for an effective energy extraction to take place.

## The Kerr metric

The Kerr metric is am axially symmetric stationary exact vacuum solution of Einstein equations. For an asymptotic observer utilizing traditional spherical coordinates $(t,r,\theta,\phi)$, and natural units ($c=G=1$), we have

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

Here, $r_{S} \equiv 2M $, $ \rho^2 \equiv  r^2 + a^2\cos^2\theta $, $ \Delta \equiv r^2 - 2Mr + {a}^2$, and $ a \equiv J/M $. The Kerr solution is parameterized by the quantities $ M $ and $ J $, interpreted as the black hole mass and angular momentum, respectively. We want them to respect the bound $ J \leq M $, otherwise we end up with naked singularities.

The spacetime mixture terms $ g_{t \phi} = g_{\phi t} $ make evident the presence of the Lense-Thirring effect due to rotation in the azimuthal direction. Additionally, all metric components are explicitly independent of $t$ and $\phi$, implying $\partial_{t}$ and $\partial_{\phi}$ as Killing vectors of the Kerr metric --- a direct consequence of its stationary and axially symmetric nature.

It is worth mentioning that: 

* the limit $a \rightarrow 0$, $M$ fixed, results in the Schwarzschild geometry;
* the limit $a$ fixed, $M\rightarrow 0$, results in Minskowski;
* Kerr metric is asymptotically flat, making asymptotic observers inertial;
* although stationary, Kerr metric is not static: time reflections alter the direction of rotation.

## Horizons and ergosurfaces

The component $g_{rr}$ of the Kerr metric becomes singular at $\Delta=0$, indicating the presence of horizons at $(t,r_{H}^{\pm},\theta,\phi)$, where

$$
r_{H}^{\pm} \equiv \frac{ \left(r_{S} \pm \sqrt{r_{S}^2 - 4a^2}\right) }{ 2 } \;.
$$

The outer horizon $r_{H}^{+}$ is the event horizon of the Kerr black hole. The inner horizon $r_{H}^{-}$ is a Cauchy horizon, beyond which the determinism of Einstein's equations breaks down.

Most of the metric components become singular at $\rho^2=0$, suggesting the existence of a ring-shaped physical singularity at $(t,0,\pi/2,\phi)$. In the vicinity of this singularity, closed timelike curves (CTCs) exist, leading to violations of causality conditions.

The component $g_{tt}$ goes to zero at $\rho^{2}=r_{S}r$, indicating the presence of hypersurfaces $(t,r_{E}^{\pm},\theta,\phi)$ known as static limit surfaces with infinite redshift (ergosurfaces), where

$$
r_{E}^{\pm} \equiv \frac{ \left(r_{S} \pm \sqrt{r_{S}^2 - 4a^2\cos^2\theta}\right) }{ 2 } \;.
$$

Their own definition also makes them a Killing horizon for $\partial_{t}$ - a hypersurface where the $\partial_{t}$ norm vanishes (changes sign). This is an important feature for what comes next.

It is clear that $r_{E}^{+} \geq r_{H}^{+} > r_{H}^{+} \geq r_{H}^{-}$, with the equalities only holding at the poles $(t,r,0,\phi)$ and $(t,r,\pi,\phi)$. The region $r \leq r_{H}^{-}$ is widely contested due to the physical pathologies mentioned (lack of determinism, causality, etc.). Additionally, there is evidence of its instability under metric perturbations. The suspicion that Cauchy horizons do not exist in nature is known as the Strong Cosmic Censorship. Whatever the case may be, only the region $r \geq r_{H}^{+}$ is relevant for our discussion.

## The Lense-Thirring effect

Let's consider a curve $\gamma(\tau)$ near a Kerr black hole. The parameter $\tau$ represents its proper time, and $\dot{\gamma}(\tau) \equiv d\gamma/d\tau$ is its 4-velocity. For our convenience, let's also assume that for an asymptotic observer, $\gamma(\tau)$ is static in the radial and zenithal directions ($\dot{\gamma}^{r}=\dot{\gamma}^{\theta}=0$).

The inequality $g\left(\dot{\gamma},\dot{\gamma}\right) < 0$ is sufficient for $\gamma\left(\tau\right)$ to be time-like. It also implies the inequalities $\Omega^{-}<\Omega<\Omega^{+}$ where $\Omega \equiv {\dot{\gamma}}^{\phi}/{\dot{\gamma}}^{t}$ is the azimuthal velocity, and

$$
\Omega^{\pm} \equiv \omega \pm \sqrt{\omega^2-4 \frac{g_{tt}}{g_{\phi\phi}}} \; ; \; \omega \equiv - \frac{g_{t\phi}}{g_{\phi\phi}} \;.
$$

In other words, for an asymptotic observer, the azimuthal velocities of massive particles in the Kerr geometry are always limited to the open interval $(\Omega^{-},\Omega^{+})$.

In the exterior region ($r > r_{E}^{+}$), we have $g_{tt} < 0$, $\Omega^{-} < 0$, and $\Omega^{+} > 0$. Massive particles are free to follow $\gamma(\tau)$ at subluminal speeds in the direction of the black hole rotation ($\Omega > 0$), against it ($\Omega < 0$), or even remain spatially static ($\Omega = 0$). This is the normal behavior we all expect.

Over the ergosurface ($r = r_{E}^{+}$), however, $g_{tt} = 0$ because we are on the Killing horizon of $\partial_{t}$. As a result, $\Omega^{-} = 0$ and $\Omega^{+} = 2\omega$. Now, every massive particle is forced to follow $\gamma(\tau)$ in the direction of the black hole rotation: spatial static ($\Omega = 0$) became a luxury that only massless particles ($g\left(\dot{\gamma},\dot{\gamma}\right) = 0$) possess.

In the ergoregion ($r_{E}^{+} < r < r_{H}^{+}$), we have $g_{tt} > 0$, and $\Omega^{\pm} > 0$. Spatial static is now forbidden to everyone as everyone needs to follow the black hole rotation. This is the reason the ergosurface is also called the static limit surface. The unescapable drag of asymptotic frames, purely due to the curved spacetime geometry, is the extreme example of the often tiny Lense-Thirring effect.

According to the Kerr geometry, we explicitly have

$$
\omega = \frac{r_{S}ra}{(r^2 + a^2)^2 - \Delta a^2\sin^2\theta } \;,
$$

and over the event horizon ($r=r_{H}^{+}$), $\omega = \omega_{H}$, where $\omega_{H} \equiv a / r_{S}r_{H}^{+}$. Additionally, $\Omega^{\pm}=\omega_{H}$: at the Kerr event horizon, everyone is forced to follow the black hole rotation at the determined azimuthal speed $\omega_{H}$. Since the properties of the particles are irrelevant here, $\omega_{H}$ can be seen as intrinsic to the black hole itself. It is the rotational speed of its event horizon.

## Negative energies and momenta

## The Penrose process
