---
layout: post
title: Is General Relativity a predictive theory?
description: An analysis of the Cauchy problem in GR.
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
thumbnail: assets/img/kerr.webp
---

## Introduction

Einstein's equations in vacuum, $R_{\mu \nu} = 0$, consists of ten coupled non-linear partial differential equations (PDEs) for the Lorentzian 4-metric $g_{\mu \nu}(x)$. Given the complexity of these dynamical equations, it is not immediately clear that General Relativity (GR) is a deterministic theory. 

Determinism is a important feature of physical theories. In a deterministic description, the whole past and future of a system can be determined, with infinite precision, from a very minimal set of initial data. This makes deterministic theories extremely predictive and appealing to the scientific framework.

Mathematically, determinism is reflected by a system of differential equations whose solutions exist, and can be uniquely determined by a set of initial data. Examples of theories with this well-defined Cauchy problem are: Newton's 2nd law of classical mechanism, described by a system of ordinary differential equations (ODEs); Maxwell's equations for the electromagnetic field, described by a set of linear PDEs; even Schrödinger's equation for the unitary evolution of a quantum state in the absence of measurements (collapses of the wave functions), given by a single linear ODE; and the list goes on.
 
A detailed study of the predictive power of GR needs to address the proof of existence and uniqueness of its solutions. Of course, a natural step is to attempt to formulation of a well-defined Cauchy problem for Einstein's equations. However, this has proven to be difficult. And, even if we're eventually successful, our results would still be restricted to the subspace of foliatable solutions only.

An important tool in this endevor is the use of the harmonic gauge condition. In this gauge, Einstein's equations assume the form of quasi-linear hyperbolic PDEs (wave equations). The Cauchy-Kowalesvski (CK) theorem then applies, and we can at least guarantee the *local* existence and uniqueness.

On the other hand, the *global* proof of existence and uniqueness of solutions is still an open problem. The theorems of existence of spacetime singularities, and the possible existence of Cauchy horizons, are especially crippling in this regard. The weak and strong cosmic censorship conjecture were formulated in an attempt to mitigate this situation by restoring GR's determinism for asymptotic observers. Nevertheless, very recently, evidence against these censorship conjectures started piling up.

One now has to wonder how predictive GR really is?

## The harmonic gauge


## Tikz picture

This is a center aligned TiKZ picture:

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

## Conclusions

This is your conclusions.
