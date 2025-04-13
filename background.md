---
title: Background for the Wealth Simulator
author: Abhishek Mishra
date: 2025-04-13
---

# Non-Ergodic Systems

[Erogodicity](https://en.wikipedia.org/wiki/Ergodicity) (or lack thereof) in
random systems can lead to counter-intuitive results.  I became interested in
ergodicticity after reading the book "Skin in the Game" by Nassim Nicholas
Taleb.  The book discusses the concept of ergodicity in the context of risk and
decision-making.  When dealing with systems with some randomness baked in, it is
quite crucial to understand if we can say something about all such systems by
looking at the lifetime of only one instance.  If the system is ergodic then we
can. However if the principle of ergodicity does not hold for a system then a
particular instance can behave quite differently than what is suggested by the
average of all such systems.

# Equation Of Life

The wealth simulator shows one such system based on an equation for "Random
Multiplicative Processes" also called "the equation of life".  This equation is
a contrived example of a non-ergodic system. Let us imagine a quantity which
increases or decreases by one of two predetermined factors with a random chance
of 50%. And then we repeat this process over and over again.

In the specific case imagine that you start with 100/- credits. Now we toss a
coin and with heads we multiply the credits with 1.5 i.e. a 50% increase, and
with tails we multiply it with 0.6 i.e. a 40% decrease. Now we repeat this
process several times, each time using the credits from the previous run.

$x_{n} (t+1) = \begin{cases} 1.5 x_{n}(t) & p=1/2\\0.6 x_{n}(t) &
p=1/2\end{cases}$

where,

$x_{n} (t+1)$ is the new value,

$x_{n} (t)$ is the previous value


I first came across this particular
example in the videos on the YouTube channel "Erogodicity TV". I've embedded the
video by Alex Adamou starting at 13:11 where the equation is introduced.

What is interesting about this example is that almost every time we start with
100/- and do this we end up losing our credits and the value decays to zero.
However if we calculate the expected value of *all* possible runs of this
process, or even a *large number* of such processes then we see that the credits
keep increasing by a steady rate of 5% per time interval.

<iframe width="560" height="315"
src="https://www.youtube.com/embed/VCb2AMN87cg?si=AcFRTZyzMR6lnoUI&amp;start=791"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I like the name "equation of life" that Alex Adamou uses in the video. It sounds
more poetic than "random multiplicative process".

I later discovered more detailed descriptions of this equation by "Ole Peters" -
see his blog post here
https://ergodicityeconomics.com/2023/07/28/the-infamous-coin-toss/.

# Wealth Simulator

The equation is a nice way to demonstrate how in some cases the expected value
of all possible systems is quite different the value of one system. However the
equation uses some set values. I wanted to try out different values for the
parameters to see what would be the effect.

It is interesting to think of the value increasing and decreasing in this
equation as wealth, and then imagine a persons wealth increasing and decreasing
let's say every year by one of two random multipliers.

$x_{n} (t+1) = \begin{cases} m_{1} x_{n}(t) & p=1/2\\m_{2} x_{n}(t) &
p=1/2\end{cases}$


# Implications

* The ensemble average of the 
