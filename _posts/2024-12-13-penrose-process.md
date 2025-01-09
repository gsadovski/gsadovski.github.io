---
layout: post
title: Can black holes work as windmills?
description: The Penrose process in Kerr black holes
author: Guilherme Sadovski
date: 2024-12-13 11:17 -0300 UTC
tags: gr-qc
categories: physics
pseudocode: false
giscus_comments: false
related_posts: true
toc:
  sidebar: left
tikzjax: true
thumbnail: assets/img/kerr.webp
---

## Introduction

The Kerr metric in General Relativity is a class of exact solutions of Einstein's vacuum equations, describing the empty spacetime geometry around a stationary, uncharged, rotating point-like mass distribution.

The overall structure of a Kerr metric is quite complex, with multiple horizons, extended singularities, closed timelike curves (CTCs), ergosurfaces, and more. These features, resulting from the absence of temporal and spherical symmetry, also provide a more accurate description of astrophysical objects. After all, most objects in the Universe are spinning. The Kerr black hole, in particular, is widely recognized as the last stage in the evolution of sufficiently massive stars.

In 1969, physicist Roger Penrose proposed a theoretical mechanism for extracting energy from a Kerr black hole. This process depends on the region between the exterior ergosurface and the event horizon. From the perspective of an asymptotic observer (at an infinite distance), this ergoregion forbids static frames of reference: a phenomenon known as the Lense-Thirring effect. Those who resist being "dragged" may acquire negative energies. The absorption of negative energy particles enables the Kerr black hole to be spun down, and allows for an effective energy extraction to take place.

## The Kerr metric

The Kerr metric is a class of axially symmetric stationary exact vacuum solutions of Einstein equations. That's a mouthful which, for asymptotic observers utilizing traditional spherical coordinates $(t,r,\theta,\phi)$, and natural units ($c=G=1$), means

$$ g(t,r,\theta,\phi) = g_{ tt } dt^2 + g_{ t \phi } dt d \phi + g_{ \phi t } d \phi dt + g_{ rr } dr^2 + g_{ \theta \theta } d\theta^2 + g_{ \phi \phi } d \phi^2 \;, $$

where

$$ g_{tt} = - \left(1 - \frac{ r_{S} r }{ \rho^2 } \right) \;, $$

$$ g_{t\phi} = g_{\phi t} = \frac{ - r_{S}ra\sin^2\theta }{ \rho^2 }\;, $$

$$ g_{rr} = \frac{ \rho^2 }{ \Delta }\;, $$

$$ g_{\theta\theta} = \rho^2\;, $$

$$ g_{\phi\phi} = \left[(r^2 + a^2)^2 - \Delta a^2 \sin^2\theta\right]\frac{  \sin^2\theta }{ \rho^2 } \;. $$

The notation used is $r_{S} \equiv 2M $, $ \rho^2 \equiv  r^2 + a^2\cos^2\theta $, $ \Delta \equiv r^2 - 2Mr + {a}^2$, and $ a \equiv J/M $. All these solutions are parameterized by the quantities $ M $ and $ J $, usually interpreted as the mass and angular momentum of the central spinning body, respectively. If the Kerr metric comprises valid interior solutions, then we really want the bound $ J \leq M $ to be respected. Otherwise, we end up with naked singularities: quite obscene objects which exposes to the world physical pathologies usually hidden inside an event horizon.

The space and time mixture terms, $g_{t \phi} = g_{\phi t}$, make evident the presence of the Lense-Thirring effect due to a rotation in the azimuthal direction, $ \hat{\phi} \equiv \partial_{\phi} / \sqrt{g_{\phi \phi}} $. Additionally, all metric components above are explicitly independent of $t$ and $\phi$, implying $\partial_{t}$ and $\partial_{\phi}$ as Killing vectors --- a direct consequence of the stationary and axially symmetric nature of the Kerr geometry.

It is worth mentioning that: 

* the limit $a \rightarrow 0$, $M$ fixed, results in the Schwarzschild geometry;
* the limit $a$ fixed, $M\rightarrow 0$, results in Minkowski;
* Kerr metric is asymptotically flat, making asymptotic observers inertial;
* although stationary, Kerr metric is not static: time reflections alter the direction of rotation.

## Horizons and ergosurfaces

The component $g_{rr}$ of the Kerr metric becomes singular at $\Delta=0$, indicating the presence of horizons at $(t,r_{H}^{\pm},\theta,\phi)$, where

$$ r_{H}^{\pm} \equiv \frac{ \left(r_{S} \pm \sqrt{r_{S}^2 - 4a^2}\right) }{ 2 } \;. $$

The outer horizon $r_{H}^{+}$ is the event horizon of the Kerr black hole. The inner horizon $r_{H}^{-}$ is actually a Cauchy horizon: a boundary beyond which the determinism of Einstein's equations breaks down.

Most of the metric components become singular at $\rho^2=0$, suggesting the existence of a ring-shaped physical singularity at $(t,0,\pi/2,\phi)$. In the vicinity of this singularity, CTCs exist, leading to violations of causality conditions.

The component $g_{tt}$ goes to zero at $\rho^{2}=r_{S}r$, indicating the presence of hypersurfaces $(t,r_{E}^{\pm},\theta,\phi)$ known as static limit surfaces with infinite redshift (ergosurfaces), where

$$ r_{E}^{\pm} \equiv \frac{ \left(r_{S} \pm \sqrt{r_{S}^2 - 4a^2\cos^2\theta}\right) }{ 2 } \;. $$

Their own definition also makes them a Killing horizon for $\partial_{t}$ --- a hypersurface where the $\partial_{t}$ becomes null (changes sign). Keep that in mind as Killing horizons play a big part here.

It is clear that $r_{E}^{+} \geq r_{H}^{+} > r_{H}^{-} \geq r_{E}^{-}$, with the equalities only holding at the poles $(t,r,0,\phi)$ and $(t,r,\pi,\phi)$ (see Figure 1). The region $r \leq r_{H}^{-}$ is widely contested due to the physical pathologies mentioned (lack of determinism, causality, etc.). Additionally, there is strong evidence of its instability under metric perturbations, *e.g.*, it could never survive the gravitational collapse. The suspicion that Cauchy horizons do not exist in nature is known as the Strong Cosmic Censorship. Whatever the case may be, only the region $r \geq r_{H}^{+}$ is relevant for us.

<div align="center">
<script type="text/tikz">
\begin{tikzpicture}
    % Outer ergosurface
    \fill[gray!70] (0,0) ellipse (4 and 2);
    \node[gray] at (4.3,0) {$r_{E}^+$};
    % Outer event horizon
    \fill[black] (0,0) ellipse (2.7 and 2);
    \node at (3,0) {$r_{H}^+$};
    % Inner event Horizon
    \draw[dashed, gray] (0,0) ellipse ( 2 and 1.2) ;
    \node[gray!70] at (2.3,0) {$r_{H}^-$};
    % Inner ergosurface
    \draw[dashed, gray] (0,0) ellipse ( 1.3 and 1.2) ;
    \node[gray!70] at (1.6,0) {$r_{E}^-$};
    % Ring Singularity
    \draw[thick, red] (0,0) ellipse ( 1.3 and 0.3) ;
    % Parameters
    \node[gray!70] at (0,.7) {$M$, $J$};
\end{tikzpicture}
</script>
<div class="caption">
  Figure 1: Schematics of the Kerr black hole
</div>
</div>

## The Lense-Thirring effect

Let's consider a curve $\gamma(\tau)$ near a Kerr black hole. The parameter $\tau$ represents its proper time, and $\dot{\gamma}(\tau) \equiv d\gamma/d\tau$ is its 4-velocity. For our convenience, let's also assume that for an asymptotic observer, $\gamma(\tau)$ is static in the radial and zenithal directions ($\dot{\gamma}^{r}=\dot{\gamma}^{\theta}=0$).

The inequality $g\left(\dot{\gamma},\dot{\gamma}\right) < 0$ is sufficient for $\gamma\left(\tau\right)$ to be timelike --- these are the curves that massive particles follow. But, it also implies the inequalities $\Omega^{-}<\Omega<\Omega^{+}$, where $\Omega \equiv {\dot{\gamma}}^{\phi}/{\dot{\gamma}}^{t}$ is the azimuthal velocity, and

$$ \Omega^{\pm} \equiv \omega \pm \sqrt{\omega^2-4 \frac{g_{tt}}{g_{\phi\phi}}} \; ; \; \omega \equiv - \frac{g_{t\phi}}{g_{\phi\phi}} \;. $$

In other words, for an asymptotic observer, the azimuthal velocities of massive particles in the Kerr geometry are always limited to the open interval $(\Omega^{-},\Omega^{+})$. Otherwise, we would have supraluminal speeds, causality violation, etc. Not good.

In the exterior region ($r > r_{E}^{+}$), we have $g_{tt} < 0$, $\Omega^{-} < 0$, and $\Omega^{+} > 0$. Massive particles are free to follow $\gamma(\tau)$ at subluminal speeds in the direction of the black hole rotation ($\Omega > 0$), against it ($\Omega < 0$), or even remain spatially static ($\Omega = 0$). This is the normal behavior we all expect.

Over the ergosurface ($r = r_{E}^{+}$), however, $g_{tt} = 0$ because we are on the Killing horizon (!) of $\partial_{t}$. As a result, $\Omega^{-} = 0$ and $\Omega^{+} = 2\omega$. Now, every massive particle is forced to follow $\gamma(\tau)$ in the direction of the black hole rotation: spatial static ($\Omega = 0$) became a luxury that only massless particles can have. In other words, light, which follow null trajectories, $g\left(\dot{\gamma},\dot{\gamma}\right) = 0$, can remain at a stop on the ergosurface.

Finally, at the ergoregion ($r_{E}^{+} < r < r_{H}^{+}$), we have $g_{tt} > 0$, and $\Omega^{\pm} > 0$. Spatial static is now forbidden to everyone, and everyone has to follow the black hole rotation. This is the reason the ergosurface is also called "a static limit surface". The unescapable drag of asymptotic frames, purely due to the curvature of spacetime, is perhaps the most extreme example of the often tiny Lense-Thirring effect.

According to the Kerr geometry, we can explicitly calculate

$$ \omega = \frac{r_{S}ra}{(r^2 + a^2)^2 - \Delta a^2\sin^2\theta } \;. $$

Over the event horizon ($r=r_{H}^{+}$), $\omega = \omega_{H}$, where $\omega_{H} \equiv a / r_{S}r_{H}^{+}$. Additionally, $\Omega^{\pm}=\omega_{H}$. In other words, at the Kerr event horizon everyone is forced to follow the black hole rotation at a precisely determined azimuthal speed. Since the properties of particles are irrelevant here, $\omega_{H}$ can be seen as intrinsic to the black hole itself: it's the rotation speed of its event horizon.

## Negative energies and momenta

We have just discussed how an extreme Lense-Thirring effect occurs inside the ergosurface of a Kerr black hole. When crossing this spacetime boundary, the azimuthal component of your 4-velocity, $\dot{\gamma}^{\phi}$, is required to change by the ratio $\Omega$, in order to offset the sign change that had just occurred in $\dot{\gamma}^{t}$ --- because this ergosurface is also a Killing horizon (!). These changes are all to ensure that every observer agrees on the timelike nature of $\gamma$. In other words, that $g(\dot{\gamma},\dot{\gamma}) < 0$ remains a frame-invariant inequality.

A similar analysis can be done for the 4-momentum $p = m \dot{\gamma}$ of a particle with mass $m$ following $\gamma$. Upon entering the ergoregion, the momentum component $p_{t} \equiv g\left(\partial_{t},p\right)$ changes sign, and $p_{\phi}$ must adjust accordingly to maintain the inequality $g \left(p,p\right) < 0$ frame-invariant. The particularly interesting point here is that $p_{t} = - E$ and $p_{\phi} = L$, where $E$ is the energy and $L$ the azimuthal angular momentum of this particle. Thus, asymptotic observers can witness a particle's energy change sign when it crosses the Kerr ergosurface.

The negative energy condition, $E < 0$, can be expressed as $\Omega < - g_{tt}/g_{t \phi}$. Outside the ergoregion ($r > r_{E}^{+}$), this condition can be satisfied by neither timelike nor null curves, as it would imply supraluminal speeds. The same is true at the ergosurface ($r = r_{E}^{+}$), where $g_{tt} = 0$. However, within the ergoregion ($r_{E}^{+} < r < r_{H}^{+}$), we find that $g_{tt} > 0$, and the negative energy condition, clearly intersects with the timelike/null condition ($\Omega^{-} \leq \Omega \leq \Omega^{+}$)! "Sufficiently slow" particles (${\Omega}^{-} \leq \Omega < - g_{tt}/g_{t \phi}$) --- those who resist the Lense-Thirring effect just enough --- have negative energies from the perspective of an asymptotic observer. "Sufficiently fast" ones ($- g_{tt}/g_{t \phi} < \Omega \leq \Omega^{+}$) have positive energies, and there are still those in a state of zero energy ($\Omega = - g_{tt} / g_{t \phi}$). Quite weird indeed!

Consider the Killing vector $k = \partial_{t} + \omega_{H} \partial_{\phi}$, which generates the Killing horizon coinciding with the event horizon of the Kerr black hole, the timelike condition $g \left(k, p\right) < 0$ lead us to the inequality $E > \omega_{H} L$. In other words, negative energy particles also have negative angular momenta --- even though their orbital speeds are positive. As we will see now, it is the existence of these particles that enables the energy extraction via the Penrose process to occur.

## The Penrose process

The Penrose process suggests a theoretical mechanism to extract usable energy from a rotating black hole. It is based on the existence of an ergoregion, which allows for physical trajectories of negative energies and orbital momenta.

Consider an electron coming from the asymptotic infinity, with initial positive energy $E_{0}$, following the timelike trajectory $\gamma_{1}$, which at some point enters the ergoregion of the Kerr black hole (*vide* Figure 2). Also consider that due to the gravitational acceleration, a photon will be emitted at some point. We assume that the electron will emit this photon within the ergoregion, and at such a precise angle that this photon will be one of those "slow enough" particles carrying negative energy $\varepsilon < 0$. Let it follow the null trajectory $\gamma_{2}$ that ultimately falls into the event horizon. At the emission event, momentum conservation dictates that the trajectory of the electron needs to change, let it be the timelike $\gamma_{3}$ with positive energy $E_{f}$, that ultimately escapes to the asymptotic infinity.

<div align="center">
<script type="text/tikz">
\begin{tikzpicture}
    % Outer ergosurface
    \fill[gray!70] (0,0) ellipse (4 and 2);
    \node[gray] at (4.3,0) {$r_{E}^+$};
    % Outer event horizon
    \fill[black] (0,0) ellipse (2.7 and 2);
    \node at (3,0) {$r_{H}^+$};
    % Parameters
    \node[gray] at (0,.7) {$M$, $J$};
    % Inner event Horizon
    \draw[dashed, gray] (0,0) ellipse ( 2 and 1.2) ;
    \node[gray!70] at (2.3,0) {$r_{H}^-$};
    % Inner ergosurface
    \draw[dashed, gray] (0,0) ellipse ( 1.3 and 1.2) ;
    \node[gray!70] at (1.6,0) {$r_{E}^-$};
    % Ring Singularity
    \draw[thick, red] (0,0) ellipse ( 1.3 and 0.3) ;
    % Trajectories
    \draw[ dotted, thick, blue!50] (-5.5,-0.4) -- (-5,-0.5);
    \draw[ >-, thick, blue!50] (-5,-0.5) .. controls (-1.5,-1.2) .. (0.5,-1) node[midway,below] {$\gamma_1$};
    \draw[-, thick, blue!50] (0.5,-1) .. controls (1,-.5) .. (1,0) node[midway,right] {$\gamma_2$};
    \node[yellow!50] at (1.04,0) {$\times$};
    \draw[->, thick, blue!50] (0.5,-1) .. controls (1.5,-1) .. (3,-2) node[midway,below] {$\gamma_3$};
    \draw[ dotted, thick, blue!50] (3,-2) -- (3.5,-2.3);
\end{tikzpicture}
</script>
<div class="caption">
  Figure 2: Penrose process 
</div>
</div>

In this highly theoretical scenario, energy conservation $E_{0} = E_{f} + \varepsilon$ of the electron-photon system implies $\Delta E = - \varepsilon > 0$, where $\Delta E \equiv E_{f} - E_{0}$. In other words, for an asymptotic observer witnessing the whole process, the electron escaped the neighborhood of the Kerr black hole with energy $E_{0} + \Delta E$. Effectively, it has just extracted $\Delta E$ of energy from a Kerr black hole!

In order for the Penrose process to be irreversible, the emitted photon really needs to fall into the event horizon. Additionally, since no lunch is free, this also means that there will be a subtraction $\delta M = \varepsilon$ and $\delta J = L$ (remember, both $\varepsilon$ and $L$ are negative), of the black hole mass and angular momentum in such a way that the inequality $\delta M > \omega_{H} \delta J$ holds.

As a final note, a series of Penrose energy extraction processes can bring the black hole to thermodynamic equilibrium, where $\delta M = \omega_{H} \delta J$. This is essentially the 1st Law of Black Hole Thermodynamics, applicable to processes that maintain the area $A$ of the event horizon constant, with $\delta A = 0$ (or, in other words, the Bekenstein-Hawking (BH) entropy constant, $\delta S_{\text{BH}} = 0$). Thermodynamic equilibrium serves as a maximum limit for Penrose processes: attempting to extract more energy would violate the 2nd Law of Black Hole Thermodynamics, meaning that $A$ cannot shrink, so $\delta A \geq 0$ (or, equivalently, $\delta S_{BH} \geq 0$). This upper limit is reached before $J=0$ is achieved, so that Penrose processes cannot fully spin down the Kerr black hole. In summary, the Penrose process does not provide a physical mechanism for the "spacetime decay" $\text{Kerr} \rightarrow \text{Schwarzschild}$.

## Conclusions

The Penrose process was the first theoretical example demonstrating that energy extraction from black holes might be possible. However, as we have just seen, it requires very precise spacetime trajectories, making it unlikely to be very relevant in a natural astrophysical setting.

Less fine-tuned mechanisms have been developed since, among which the Blandford-Znajek process is believed to be the engine powering the brightest objects in the entire Universe: Active Galactic Nuclei (AGNs) inside Quasars.

So, it appears that rotating black holes can function as engines after all, similar to how windmills do.
