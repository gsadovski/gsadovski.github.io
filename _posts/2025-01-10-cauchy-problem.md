---
layout: post
title: How predictive is General Relativity? 
description: An account of the Cauchy problem in GR.
author: Guilherme Sadovski
date: 2026-01-10 08:59 -0300 UTC
tags: gr-qc, phys-math
categories: physics
pseudocode: false
giscus_comments: false
related_posts: true
toc:
  sidebar: left
tikzjax: true
thumbnail: assets/img/cauchy.webp
---

## Introduction

Einstein's equations in vacuum, given by $R_{\mu \nu} = 0$, consist of ten coupled non-linear generic partial differential equations (PDEs) for the Lorentzian 4-metric tensor field, $g_{\mu \nu}(x)$. Given the complexity of these dynamical equations, it is not immediately clear that General Relativity (GR) is a deterministic theory. 

Determinism is an important feature of physical theories. It implies that the whole past and future (the history) of a system can be evaluated, with infinite precision, from a minimal set of data. This makes deterministic theories extremely predictive, and thus appealing to the scientific framework.

Mathematically, determinism is modelled by a system of equations whose solutions exist, and can be uniquely determined. Usually the system is differential with respect to some "time" parameter, and the minimal set of data is the Cauchy (initial) data. Systems like these are said to have a *well-posed Cauchy problem*.

Examples in Physics are plenty: Newton's 2nd Law, Newton's Law of Gravitation, Maxwell's equations, Schrödinger's equation in the absence of measurements (collapses of the wave function), *etc*. Granted, these examples have much simpler dynamics than GR. Newton's 2nd law and Schrödinger's are ordinary differential equations. Newton's Law of Gravitation and Maxwell's are PDEs, but they are linear. But they reveal that the same reason that gives GR so much richness in its physical description, also cripples its mathematical understanding, and possibly its predictability.

A detailed study of GR's dynamics needs to address the proof of existence and uniqueness of its solutions. As mentioned, a natural step is to attempt to formulation of a well-posed Cauchy problem for Einstein's equations. However, this has proven to be difficult to do. 

An important tool in this endeavor is the use of the harmonic gauge condition. In this gauge, Einstein's equations assume the form of quasi-linear hyperbolic PDEs (wave-like equations). Choquet-Bruhat theorem then guarantees, at least, the *local* existence and uniqueness of solutions.

The Arnowitt-Deser-Misner (ADM) formalism plays a major role in clarifying Choquet-Bruhat's results. But it also implies a particular choice of global spacetime foliation. This is a much more restricted framework, applicable to only a subspace of solutions.

Finally, the *global* proof of existence and uniqueness is still an open problem in the mathematical-physics of GR. In fact, the theorems of existence of spacetime singularities, and the possible existence of Cauchy horizons indicate that a global proof might not exist. The Weak and Strong Cosmic Censorship Conjectures (CCCs) were formulated in an attempt to mitigate this situation. Nevertheless, recent and old results are pilling up against the validity of CCCs.

One is then left wondering how predictive GR really is.

## The harmonic gauge

GR has dynamics invariant under the group of diffeomorphisms among Lorentzian 4-manifolds. This means that its physical solutions are equivalence classes under these maps. Each class, or each physical solution, has many (actually, an infinite number) equivalent representatives. This enormous redundancy implies that Einstein's equations are plagued with *gauge artifacts*, making them more complex than actually necessary to describe the physics of the gravitational field.

Gauge fixing these redundancies give us a way to simplify Einstein's equations without sacrificing its physical content. A cleaver choice is the so-called harmonic gauge fixing conditions, defined by 4 the constraint equations,

$$
\Box x^{\mu} = 0 \;,
$$

where $\Box \equiv g^{\mu \nu} \nabla_{\mu} \nabla_{\nu}$ is the d'Alembertian differential operator.

Applying the harmonic gauge conditions to Einstein's equations in vacuum shapes them into the form

$$
\tilde{\Box} g_{\mu \nu} = N_{\mu \nu} \left( g, \partial g\right)  \;,
$$

where $\tilde{\Box} \equiv g^{\mu\nu}\partial_{\mu}\partial_{\nu}$, and $N_{\mu \nu}$ is a smooth non-linear function up to the 1st derivative of $g_{\mu \nu}$. These are wave-like equations, mathematically classified as a set of quasi-linear hyperbolic PDEs.

Luckily, the branch of Analysis dealing with quasi-linear hyperbolic PDEs is particularly more well-developed than the one of fully non-linear generic PDEs. For instance, if $N_{\mu \nu}$ were to be analytic, then the local existence and uniqueness would automatically follow due to the so-called Cauchy-Kowalevski theorem. Unluckily, $N_{\mu \nu}$ is smooth but non-analytical in most physical situations.

In 1952, mathematical-physicist Yvonne Choquet-Bruhat managed to relax the analyticity condition via the use of Sobolev spaces (see [a review][arxiv/yvonne] by Yvonne herself). Her theorem was fully applicable to Einstein's equation in the harmonic gauge, and thus guaranteed the local well-posedness of its Cauchy problem. In other words, Yvonne proved that GR has a deterministic evolution in a small enough neighborhood of its solution space.

[arxiv/yvonne]: https://arxiv.org/pdf/1410.3490

## The ADM formalism

Let's consider $\left(X, g_{\mu \nu}\right)$ a Lorentzian 4-manifold. If foliatable, there exists a diffeomorphism map $f: X \mapsto \mathbb{R}\times\Sigma$. This allows to define in $X$ a 1-parameter family of spacelike 3-manifolds, $\Sigma_{\lambda} \equiv {f}^{-1} \left( \left\\{\lambda \right\\} \times \Sigma \right) \; ; \; \lambda \in \mathbb{R} $, which are called the "leaves" in this foliation, check Figure 1.

<div align="center">
        {% include figure.liquid loading="eager" path="assets/img/svg/foliation.webp" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  Figure 1: Foliability of $X$.
</div>
</div>

Each leaf $\Sigma_{\lambda}$ has an induced 3-metric, $h_{ij} \left(\lambda\right)$, and an extrinsic curvature, $K_{ij} \left(\lambda\right)$. Furthermore, there also exists a globally well-defined, smooth, timelike vector field, $\partial_{\lambda}$, that generates a flow of time.

Foliability implies something which is very mundane for us: that space and time are separable, almost orthogonal entities. We measure space with a ruler, time with a clock. Not ever a situation arose in which we needed both a rule and a clock to measure space, or a ruler and a clock to measure time. And, to be frank, this is always true as long as we are measuring a small enough neighborhood of spacetime (most of us never even left Earth anyway).

In GR, however, foliability cannot always be guaranteed over the entire spacetime manifold (globally). Mind, this is a feature, not a bug, of GR's full invariance under diffeomorphism. Behind the scenes, the foliability condition actually selects solutions with partially broken invariance under diffeomorphisms. A residual symmetry still exists on the leaves, but the breakage is just enough to allow us to establish a global notion of time, time evolution, initial data, *etc*. All welcomed ingredients for a well-posed Cauchy problem.

The ADM formalism makes use of the foliability condition to split Einstein's equations apart. Mind, there are many (*a.k.a.* infinite) ways to split Einstein's equations apart, but the ADM one is remarkable because, by projecting Einstein's equations onto the leaves, ADM precisely separates them in constraint *versus* dynamical equations. Concurrently, it establishes the trio $\left( \Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ as their Cauchy data.

### The constraint equations

Not every Cauchy data $\left(\Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ is compatible with a foliation of $\left(X, g_{\mu \nu}\right)$. The constraint equations for the Cauchy data exist to ensure this compatibility. Yvonne deduced these equations from energy estimates and properties of Solobev spaces. But, using the ADM formalism, they naturally pop up as follows. 

TODO: rewrite paragraphs below.

Let $\pi_{ij} \equiv 4 \pi \sqrt{h} \left( K_{ij} - h_{ij} K \right) \; ; \; K \equiv h^{ij}K_{ij} $ be the conjugated momenta of $h_{ij}$. Einstein's equation, $R_{00} = 0$, when projected onto the leaves, $\Sigma_{\lambda}$, results in the famous Hamiltonian constraint,

$$ H = 0 \;, $$

where $H \equiv - \sqrt{h} \left[ R^h + h^{-1} \left( \pi^{2} - \pi_{ij}\pi^{ij} \right) \right] \; ; \; \pi \equiv h^{ij}\pi_{ij}$, and $R^h$ is the curvature scalar of $h_{ij}$. On the other hand, when $R_{0i} = 0$ is projected onto $\Sigma_{\lambda}$, the result is

$$ P^i = 0 \;, $$

where $P^i \equiv -2 \nabla_j \pi^{ij}$. These are the 4 constraint equations the Cauchy data has to satisfy in order to be compatible with a foliation of $\left(X, g_{\mu \nu}\right)$.

Here we cannot avoid mentioning that, in quantum gravity, these are the constraint equations that lead to the (also) famous Wheeler-deWitt equations,

$$
\begin{aligned}
\hat{H} \lvert \Psi \rangle &= 0 \;, \\ 
\hat{P}^i \lvert \Psi \rangle &= 0 \;, 
\end{aligned}
$$ 

for the quantum state $\lvert \Psi \rangle$ of the entire Universe. As well as to the problem of time, Ashtekar variables (complex self-dual formulation of GR), and the loop representation of C. Rovelli and L. Smolin, giving birth to Loop Quantum Gravity.

### The dynamical ones

The flow of time happens in the direction of the vector field $\partial_{\lambda} = \alpha \hat{n} + \vec{\beta}$, where $\alpha$ is the so-called lapse function, $\hat{n}$ is the unit vector normal to $\Sigma_{\lambda}$, and $\vec{\beta}$ the displacement vector implicitly given by the orthogonality condition $\hat{n} \cdot \vec{\beta} = 0$.

The dynamical equations satisfied by $h_{ij}$ can be obtained from the very definition of extrinsic curvature, and give how the local geometry of $\Sigma_{\lambda}$ and $\Sigma_{\lambda+ \delta\lambda}$ are connected to each other, where $\delta\lambda$ is an infinitesimally small passage of time. Explicitly, $K_{ij} \equiv - L_{\alpha \hat{n}} h_{ij} / 2$, where $L_{\alpha \hat{n}}$ is the Lie derivative along $\alpha\hat{n}$. Solving for $L_{\partial_{\lambda}} h_{ij}$, one arrives at

$$ \partial_{\lambda} h_{ij} = - 2 K_{ij} + \mathcal{L}_{\vec{\beta}} h_{ij} \;. $$

On the other hand, the dynamical equations for $K_{ij}$ are given by the projection of Einstein's equations $R_{ij} = 0$ onto the leaves $\Sigma_{\lambda}$. Explicitly,

$$ \partial_{\lambda} K_{ij} = \alpha \left[ R_{ij} \left(h\right) + K_{ij} K - 2 K_{ik} K_j^k \right] \;,  $$ 

which, again, gives how the local curvature in $\Sigma_{\lambda}$ and $\Sigma_{\lambda + \delta\lambda}$ are connected to each other.

If GR is indeed fully deterministic in foliatable spacetimes, these dynamical equations can be used to evolve the Cauchy data $\left(\Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ on a leaf (a value of $\lambda$) to any other leaf (any other value of $\lambda$). This is equivalent to know the entire plot of a movie from just a screenshot (unfortunately, not a rare occurrence these days). Here, however, the movie is the entire history of the Universe. This is what theoretical physicists and mathematicians mean when they speak of "a well-defined Cauchy problem".

## Global existence and uniqueness of solutions

The existence of solutions in short time intervals are guaranteed by the hyperbolic form Einstein's equations assume in the harmonic gauge. In 1969, mathematical-physicists Y. Choquet-Bruhat and R. Geroch were able to extend this result to arbitrary time intervals, but only inside the subspace of asymptotic flat solutions. To this day, the global proof of existence of arbitrary solutions is an open problem in the mathematical-physics of GR.

Going back to the CK theorem, the proof of local uniqueness are in one-to-one correspondence with the existence of a Cauchy surface between $\Sigma_{\lambda}$ and $\Sigma_{\lambda+\delta \lambda}$[^1]. In fact, one can always find a convenient foliation in which every leaf ${\Sigma'}_{\lambda'} \; ; \; \lambda' \in \left[\lambda, \lambda + \delta\lambda\right]$ is a Cauchy surface. It should be more or less clear that, a global version of the CK uniqueness theorem means that, if a solution is unique within the infinitesimal time interval $\left[\lambda, \lambda + \delta \lambda\right]$, then it will remain unique for arbitrarily large time intervals. And, that would require every solution of GR to have a global foliation in terms of Cauchy surfaces. These are the so-called globally hyperbolic solutions.

The expectation that the solution space of Einstein's equations contained exclusively globally hyperbolic solutions was, ironically, short-lived. By 1970, the Penrose-Hawking singularity theorems were fully developed. Additionally, Penrose very clearly defined the concept of Cauchy horizons. These are spacetime boundaries present, *e.g.*, inside rotating black holes, and beyond which the Cauchy problem for Einstein's equations becomes ill-defined. At the time, these results indicated the embarrassing possibility that GR might not be a fully predictive theory.

[^1]: No need to mind what a Cauchy surface is. Just that, if it exists within a time interval, then the Cauchy problem for Einstein's equations is well-defined within this interval.

## Cosmic censorship conjectures

The situation bothered Penrose himself, making him immediately hypothesize that every singularity is "hidden" inside an event horizon, known as the Weak Cosmic Censorship Conjecture (WCCC), and that Cauchy horizon are unstable under metric perturbations and thus could never form in a natural setting, known as the Strong Cosmic Censorship Conjecture (SCCC). If true, these conjectures would restore the deterministic nature of Einstein's equations, even if only for infinitely far away (asymptotic) observers.

Since the 1970s, there was a strong expectation that Penrose's CCCs would eventually be proven true. And, indeed, since then we struggled to find natural processes that could generate stable naked singularities (not dressed by an event horizon). If they do exist, they are likely quite rare. Additionally, there is mounting evidence that Cauchy horizons are inherently unstable if the matter fields do respect the Weak Energy Condition (WEC).

So, how come, we are in the year 2025, and there is still no consensus in the scientific community about the real predictive power of GR? Well, the answer is, at least, 3-fold.

Firstly, we know since the 1990s that WCCC is mathematically false. Physicists P. S. Joshi, I. H. Dwivedi, D. Christodoulou, and others, have proven that naked singularities can form in specific cases through the collapse of matter (see citation for a review). These result led famous physicist S. Hawking to [concede his original bet][web/hawking-bet-naked-singularity] against naked singularities. Indeed, GR appears to have no internal mechanism to prevent their formation. The only caveat is that Christodoulou's *et al* examples heavily rely on a specific set of Cauchy data (*e.g.*, with perfect spherical symmetry). Nonetheless, there are those who believe it is only a matter of time until we figure out processes capable of generating them under very few Cauchy data assumptions, making them generic enough to occur in Nature.

Secondly, SCCC may not hold true when quantum effects are considered. Quantum matter fields may not always adhere to WECs, and quantum gravity effects further complicate things. Either of these factors could potentially stabilize the Cauchy horizon, making it long-lived.

Thirdly, and finally, SCCC was proven to be false, regardless of quantum effects, in 2017. Researchers from University of Stanford and Princeton developed a mathematical proof of existence of the region inside the Cauchy horizon of Kerr black holes. The only caveat is that the proof holds in the category of continuous spacetimes. Thus, the inherent instability of a Cauchy horizon does not mean that its interior region collapses out of existence into a singularity, as it was previously thought. Instead, it is way less dramatic. It is its smoothness ($C^\infty$ differentiability) that collapses into just continuity ($C^0$). In other words, the region, as well as its metric, survives the gravitational collapse. But, to the best of our knowledge, as only continuous non-differentiable entities[^2].

[^2]: Fair enough, if the metric is only $C^0$, then Einstein's equations are not even valid inside the Cauchy horizon. Thus, we cannot draw any further conclusions about the well-posedness of their Cauchy problem.

[web/hawking-bet-naked-singularity]: https://www.preskill.caltech.edu/old_naked_bet.html

## Conclusions 

So,

 
