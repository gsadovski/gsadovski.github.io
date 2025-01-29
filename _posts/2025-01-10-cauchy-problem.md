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

Einstein's equations in vacuum, $R_{\mu \nu} = 0$, consists of ten coupled non-linear partial differential equations (PDEs) for the Lorentzian 4-metric $g_{\mu \nu}(x)$. Given the complexity of these dynamical equations, it is not immediately clear that General Relativity (GR) is a deterministic theory. 

Determinism is a important feature of physical theories. In a deterministic description, the whole past and future of a system can be determined, with infinite precision, from a very minimal set of initial data. This makes deterministic theories extremely predictive and appealing to the scientific framework.

Mathematically, determinism is reflected by a system of differential equations whose solutions exist, and can be uniquely determined by a set of initial data. Examples of theories with this well-defined Cauchy problem are: Newton's 2nd law of classical mechanism, described by a system of ordinary differential equations (ODEs); Maxwell's equations for the electromagnetic field, described by a set of linear PDEs; even Schrödinger's equation for the unitary evolution of a quantum state in the absence of measurements (collapses of the wave functions), given by a single linear ODE; and the list goes on.
 
A detailed study of the predictive power of GR needs to address the proof of existence and uniqueness of its solutions. Of course, a natural step is to attempt to formulation of a well-defined Cauchy problem for Einstein's equations. However, this has proven to be difficult. And, even if we're eventually successful, our results would still be restricted to the subspace of foliatable solutions only.

An important tool in this endevor is the use of the harmonic gauge condition. In this gauge, Einstein's equations assume the form of quasi-linear hyperbolic PDEs (wave equations). The Cauchy-Kowalesvski theorem then applies, and we can at least guarantee the *local* existence and uniqueness.

On the other hand, the *global* proof of existence and uniqueness of solutions is still an open problem. The theorems of existence of spacetime singularities, and the possible existence of Cauchy horizons, are especially crippling in this regard. The weak and strong cosmic censorship conjecture were formulated in an attempt to mitigate this situation by restoring GR's determinism for asymptotic observers. Nevertheless, very recently, evidence against these censorship conjectures started piling up.

One now has to wonder how predictive GR really is?

## The harmonic gauge

GR has dynamics invariant under the group of diffeomorphism maps among Lorentzian 4-manifolds. This means that its physical solutions are equivalence classes under these maps. Each class, or each physical solution, has many (actually an infinite number) equivalent representatives. This enormous redundancy implies that Einstein's equations are plagued with pure gauge artifacts, making them more complex than necessary to describe the physical degrees of freedom of the gravitational field.

To gauge fix the invariance under diffeomorphisms gives us a way to simplify Einstein's equations without really sacrificing its physical content. A convenient choice is the so-called harmonic gauge fix condition, defined by the constraint equations, $\Box x^{\mu} = 0$, where $\Box \equiv g^{\mu \nu} \nabla_{\mu} \nabla_{\nu}$ is the d'Alembertian operator in a curved spacetime. Applying this condition to Einstein's equations in vacuum, $R_{\mu \nu} = 0$, shapes them into the form $\Box g_{\mu \nu} = N_{\mu \nu}$, where $N_{\mu \nu}$ are non-linear terms up to the 1st derivative of $g_{\mu \nu}$.

The wave-like equations $\Box g_{\mu \nu} = N_{\mu \nu}$ are mathematically classified as a set of quasi-linear hyperbolic PDEs. Luckily, this branch of Analysis is particularly more well-developed than the branch of fully non-linear generic PDEs. For instance, the local existence and uniqueness of their solutions are proven in a result known as the Cauchy-Kowalevski (CK) theorem.

In summary, the harmonic gauge is important because it allows us to prove that, at the very least, GR is a deterministic theory in a small enough neighborhood of its solution space.

## The ADM formalism

Let's consider $\left(X, g_{\mu \nu}\right)$ a Lorentzian 4-manifold. If foliatable, there exists a diffeomorphism map $f: X \mapsto \mathbb{R}\times\Sigma$, check Figure 1. This allows to define in $X$ a 1-parameter family of spacelike 3-manifolds, $\Sigma_{\lambda} \equiv f^{-1} \left( \left\\{\lambda \right\\} \times \Sigma \right) \; ; \; \lambda \in \mathbb{R} $, which are called the "leaves" in this foliation of $X$. Each leaf $\Sigma_{\lambda}$ has an induced 3-metric, $h_{ij} \left(\lambda\right)$, and an extrinsic curvature, $K_{ij} \left(\lambda\right)$. Furthermore, there also exists a globally well-defined, smooth, timelike vector field, $\partial_{\lambda}$, that generates a global flow of time.

<div align="center">
<script type="text/tikz">
\begin{tikzpicture}
% Left blob (bean shape)
\fill[gray!50] (-3,0) .. controls (-2.5,1.5) and (-1,1.5) .. (0,0.5)
                .. controls (0.5,-1) and (-2.5,-1.5) .. (-3,0);
\draw[thick] (-3,0) .. controls (-2.5,1.5) and (-1,1.5) .. (0,0.5)
                .. controls (0.5,-1) and (-2.5,-1.5) .. (-3,0);

% Mark the X inside the blob
\draw[thick] (-2.2,0.2) -- (-1.8,-0.2);
\draw[thick] (-2.2,-0.2) -- (-1.8,0.2);

% Arrow from the blob to the product space
\draw[->, thick] (0.5,0) -- (2,0) node[midway, above] {$\varphi$};

% Product space (3 stacked sheets)
\begin{scope}[xshift=3cm]
    % First sheet
    \fill[gray!30] (-1,1) .. controls (-0.5,1.5) and (0.5,1.5) .. (1,1)
                   .. controls (0.5,0.5) and (-0.5,0.5) .. cycle;
    \draw[thick] (-1,1) .. controls (-0.5,1.5) and (0.5,1.5) .. (1,1);
    \draw[thick] (-1,1) .. controls (-0.5,0.5) and (0.5,0.5) .. (1,1);

    % Second sheet
    \fill[gray!30] (-1,0) .. controls (-0.5,0.5) and (0.5,0.5) .. (1,0)
                   .. controls (0.5,-0.5) and (-0.5,-0.5) .. cycle;
    \draw[thick] (-1,0) .. controls (-0.5,0.5) and (0.5,0.5) .. (1,0);
    \draw[thick] (-1,0) .. controls (-0.5,-0.5) and (0.5,-0.5) .. (1,0);

    % Third sheet
    \fill[gray!30] (-1,-1) .. controls (-0.5,-0.5) and (0.5,-0.5) .. (1,-1)
                   .. controls (0.5,-1.5) and (-0.5,-1.5) .. cycle;
    \draw[thick] (-1,-1) .. controls (-0.5,-0.5) and (0.5,-0.5) .. (1,-1);
    \draw[thick] (-1,-1) .. controls (-0.5,-1.5) and (0.5,-1.5) .. (1,-1);

    % Vertical lines connecting sheets
    \draw[thick] (-1,1) -- (-1,-1);
    \draw[thick] (1,1) -- (1,-1);
\end{scope}

% Label for the product space
\node at (5,-1.5) {$\mathbb{R} \times \Sigma$};
\end{tikzpicture}
</script>
<div class="caption">
  Figure 1: Foliability of spacetime.
</div>
</div>

Foliability implies something which is very mundane for us: that space and time are separated, orthogonal, entities. We measure space with a ruler, time with a clock. Ever a situation arose in which we needed both a rule and a clock to measure space, or a ruler and a clock to measure time. And, to be frank, this is always true as long as we are measuring a small enough neighborhood of spacetime (most of us never even left Earth anyway). However, in theory, this cannot be guaranteed over the entire spacetime (globally) for whatever solution of GR. This is a feature (not a bug) of its full invariance under diffeomorphism maps. Hence, if we want to establish a global notion of time evolution, initial data, *etc*. (necessary for a well-defined Cauchy problem), we need to assume foliability and make use of a foliation.

The Arnowitt-Deser-Misner (ADM) formalism makes use of a foliation to split Einstein's equations apart. Mind that there are many (*a.k.a.* infinite) ways to split Einstein's equations apart, but the ADM one is remarkable because the result of projecting Einstein's equations onto the leaves, separates them in constraint *versus* dynamical equations. Concurrently, it establishes the trio $\left( \Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ as, presumably, their Cauchy data.

## Constraint equations

Not every Cauchy data $\left(\Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ is compatible with a foliation of $\left(X, g_{\mu \nu}\right)$. The constraint equations for the Cauchy data exist to ensure this compatibility

Let $\pi_{ij} \equiv 4 \pi \sqrt{h} \left( K_{ij} - h_{ij} K \right) \; ; \; K \equiv h^{ij}K_{ij} $ be the conjugated momenta of $h_{ij}$. Einstein's equation $R_{00} = 0$, when projected onto $\Sigma_{\lambda}$, results in the famous Hamiltonian constraint,

$$ H = 0 \;, $$

where $H \equiv - \sqrt{h} \left[ R(h) + h^{-1} \left( \pi^{2} - \pi_{ij}\pi^{ij} \right) \right] \; ; \; \pi \equiv h^{ij}\pi_{ij}$, and $R(h)$ is the curvature scalar of $h_{ij}$. On the other hand, when $R_{0i} = 0$ is projected onto $\Sigma_{\lambda}$, the result is

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

## Dynamical equations

The flow of time happens in the direction of the vector field $\partial_{\lambda} = \alpha \hat{n} + \vec{\beta}$, where $\alpha$ is the so-called lapse function, $\hat{n}$ is the unit vector normal to $\Sigma_{\lambda}$, and $\vec{\beta}$ the displacement vector implicitly given by the orthogonality condition $\hat{n} \cdot \vec{\beta} = 0$.

The dynamical equations satisfied by $h_{ij}$ can be obtained from the very definition of extrinsic curvature, and give how the local geometry of $\Sigma_{\lambda}$ and $\Sigma_{\lambda+ \delta\lambda}$ are connected to each other, where $\delta\lambda$ is an infinitesimally small passage of time. Explicitly, $K_{ij} \equiv - L_{\alpha \hat{n}} h_{ij} / 2$, where $L_{\alpha \hat{n}}$ is the Lie derivative along $\alpha\hat{n}$. Solving for $L_{\partial_{\lambda}} h_{ij}$, one arrives at

$$ \mathcal{L}_{\partial_{\lambda}} h_{ij} = - 2 K_{ij} + \mathcal{L}_{\vec{\beta}} h_{ij} \;. $$

On the other hand, the dynamical equations for $K_{ij}$ are given by the projection of Einstein's equations $R_{ij} = 0$ onto the leaves $\Sigma_{\lambda}$. Explicitly,

$$ \partial_{\lambda} K_{ij} = \alpha \left[ R_{ij} \left(h\right) + K_{ij} K - 2 K_{ik} K_j^k \right] \;,  $$ 

which, again, gives how the local curvature in $\Sigma_{\lambda}$ and $\Sigma_{\lambda + \delta\lambda}$ are connected to each other.

If GR is indeed fully deterministic in foliatable spacetimes, these dynamical equations can be used to evolve the Cauchy data $\left(\Sigma_{\lambda}, h_{ij}, K_{ij}\right)$ on a leaf (a value of $\lambda$) to any other leaf (any other value of $\lambda$). This is equivalent to know the entire plot of a movie from just a screenshot (unfortunately, not a rare occurrence these days). Here, however, the movie is the entire history of the Universe. This is what theoretical physicists and mathematicians mean when they speak of "a well-defined Cauchy problem".

## Global existence and uniqueness of solutions

The existence of solutions in short time intervals are guaranteed by the hyperbolic form Einstein's equations assume in the harmonic gauge. In 1969, mathematical-physicists Y. Choquet-Bruhat and R. Geroch were able to extend this result to arbitrary time intervals, but only inside the subspace of asymptotic flat solutions. To this day, the global proof of existence of arbitrary solutions is an open problem in the mathematical-physics of GR.

Going back to the CK theorem, the proof of local uniqueness are in one-to-one correspondence with the existence of a Cauchy surface between $\Sigma_{\lambda}$ and $\Sigma_{\lambda+\delta \lambda}$[^1]. In fact, one can always find a convenient foliation in which every leaf ${\Sigma'}_{\lambda'} \; ; \; \lambda' \in \left[\lambda, \lambda + \delta\lambda\right]$ is a Cauchy surface. It should be more or less clear that, a global version of the CK uniqueness theorem means that, if a solution is unique within the infinitesimal time interval $\left[\lambda, \lambda + \delta \lambda\right]$, then it will remain unique for arbitrarily large time intervals. And, that would require every solution of GR to have a global foliation in terms of Cauchy surfaces. These are the so-called globally hyperbolic solutions.

The expectation that the solution space of Einstein's equations contained exclusively globally hyperbolic solutions was, ironically, short-lived. By 1970, the Penrose-Hawking singularity theorems were fully developed. Additionally, Penrose very clearly defined the concept of Cauchy horizons. These are spacetime boundaries present, *e.g.*, inside rotating black holes, and beyond which the Cauchy problem for Einstein's equations becomes ill-defined. At the time, these results indicated the embarrassing possibility that GR might not be a fully predictive theory.

## Cosmic censorship hypotheses

The situation bothered even Penrose himself, which forced him to conjecture

[^1]: No need to mind what a Cauchy surface is. Just that, if it exists within a time interval, then the Cauchy problem for Einstein's equations is well-defined within this interval.
## Conclusions

This is your conclusions.
