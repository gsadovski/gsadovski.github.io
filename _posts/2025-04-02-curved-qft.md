---
layout: post
title: Ex nihilo particle creation
description: The effects of spacetime geometry on quantum fields.
author: Guilherme Sadovski
date: 2026-04-02 03:13 -0300 UTC
tags:
  - gr-qc
  - hep-th
categories: physics
pseudocode: false
giscus_comments: false
related_posts: true
toc:
  sidebar: left
tikzjax: true
thumbnail: assets/img/curved-qft.webp
---

## Introduction

This is the Introduction

## Massive Klein-Gordon field 

This is an inline equation $x^{2} + y^{2} = r^{2}$. And, these are displayed equations:

$$ x = r^{2} \cos^{2} \theta \;, $$
$$ y = r^{2} \sin^{2} \theta \;. $$

## Minimal coupling

## 
a
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
