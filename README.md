<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Triangular

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Triangular distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-triangular
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var triangular = require( '@stdlib/stats-base-dists-triangular' );
```

#### triangular

Triangular distribution.

```javascript
var dist = triangular;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/cdf]</span><span class="delimiter">: </span><span class="description">triangular distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/logcdf]</span><span class="delimiter">: </span><span class="description">triangular distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/logpdf]</span><span class="delimiter">: </span><span class="description">triangular distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, a, b, c )`][@stdlib/stats/base/dists/triangular/mgf]</span><span class="delimiter">: </span><span class="description">triangular distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/pdf]</span><span class="delimiter">: </span><span class="description">triangular distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, a, b, c )`][@stdlib/stats/base/dists/triangular/quantile]</span><span class="delimiter">: </span><span class="description">triangular distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b, c )`][@stdlib/stats/base/dists/triangular/entropy]</span><span class="delimiter">: </span><span class="description">triangular distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( a, b, c )`][@stdlib/stats/base/dists/triangular/kurtosis]</span><span class="delimiter">: </span><span class="description">triangular distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b, c )`][@stdlib/stats/base/dists/triangular/mean]</span><span class="delimiter">: </span><span class="description">triangular distribution expected value.</span>
-   <span class="signature">[`median( a, b, c )`][@stdlib/stats/base/dists/triangular/median]</span><span class="delimiter">: </span><span class="description">triangular distribution median.</span>
-   <span class="signature">[`mode( a, b, c )`][@stdlib/stats/base/dists/triangular/mode]</span><span class="delimiter">: </span><span class="description">triangular distribution mode.</span>
-   <span class="signature">[`skewness( a, b, c )`][@stdlib/stats/base/dists/triangular/skewness]</span><span class="delimiter">: </span><span class="description">triangular distribution skewness.</span>
-   <span class="signature">[`stdev( a, b, c )`][@stdlib/stats/base/dists/triangular/stdev]</span><span class="delimiter">: </span><span class="description">triangular distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b, c )`][@stdlib/stats/base/dists/triangular/variance]</span><span class="delimiter">: </span><span class="description">triangular distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [triangular][triangular-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Triangular( [a, b, c] )`][@stdlib/stats/base/dists/triangular/ctor]</span><span class="delimiter">: </span><span class="description">triangular distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Triangular = require( '@stdlib/stats-base-dists-triangular' ).Triangular;

var dist = new Triangular( 2.0, 4.0, 3.0 );

var y = dist.quantile( 0.5 );
// returns 3.0

y = dist.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var triangular = require( '@stdlib/stats-base-dists-triangular' );

// Scenario: Modeling completion time for a software development task

// Define the distribution parameters (in hours):
var a = 1.5; // Minimum time (best-case scenario)
var b = 4.5; // Maximum time (worst-case scenario)
var c = discreteUniform( 2, 4 ); // Most likely time (mode)
console.log( 'a: %d, b: %d, c: %d', a, b, c );

// Expected (mean) completion time:
var mean = triangular.mean( a, b, c );
console.log( '\nExpected completion time: %d hours', mean );

// Median completion time:
var median = triangular.median( a, b, c );
console.log( 'Median completion time: %d hours', median );

// Variance in completion time:
var variance = triangular.variance( a, b, c );
console.log( 'Variance in completion time: %d hours^2', variance );

// Probability of completing the task within 3 hours:
var x = 3.0;
var prob = triangular.cdf( x, a, b, c );
console.log( '\nProbability of completing within %d hours: %d', x, prob );

// 90th percentile of completion time:
var p = 0.9;
var percentile = triangular.quantile( p, a, b, c );
console.log( '90% of tasks will be completed within %d hours', percentile );

// Relative likelihood of completing the task in exactly 2.5 hours:
x = 2.5;
var likelihood = triangular.pdf( x, a, b, c );
console.log( '\nRelative likelihood of completing in exactly %d hours: %d', x, likelihood );

// Skewness to understand the distribution's shape:
var skewness = triangular.skewness( a, b, c );
console.log( '\nSkewness of completion times: %d', skewness );
if ( skewness > 0 ) {
    console.log( 'The distribution is right-skewed, suggesting occasional longer completion times.' );
} else if ( skewness < 0 ) {
    console.log( 'The distribution is left-skewed, suggesting occasional shorter completion times.' );
} else {
    console.log( 'The distribution is symmetric.' );
}

// Entropy as a measure of uncertainty in the estimate:
var entropy = triangular.entropy( a, b, c );
console.log( '\nEntropy of the distribution: %d nats', entropy );
console.log( 'Higher entropy indicates more uncertainty in completion times.' );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-triangular/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-triangular/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-triangular/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-triangular/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/triangular/ctor]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor

[@stdlib/stats/base/dists/triangular/entropy]: https://github.com/stdlib-js/stats-base-dists-triangular-entropy

[@stdlib/stats/base/dists/triangular/kurtosis]: https://github.com/stdlib-js/stats-base-dists-triangular-kurtosis

[@stdlib/stats/base/dists/triangular/mean]: https://github.com/stdlib-js/stats-base-dists-triangular-mean

[@stdlib/stats/base/dists/triangular/median]: https://github.com/stdlib-js/stats-base-dists-triangular-median

[@stdlib/stats/base/dists/triangular/mode]: https://github.com/stdlib-js/stats-base-dists-triangular-mode

[@stdlib/stats/base/dists/triangular/skewness]: https://github.com/stdlib-js/stats-base-dists-triangular-skewness

[@stdlib/stats/base/dists/triangular/stdev]: https://github.com/stdlib-js/stats-base-dists-triangular-stdev

[@stdlib/stats/base/dists/triangular/variance]: https://github.com/stdlib-js/stats-base-dists-triangular-variance

[@stdlib/stats/base/dists/triangular/cdf]: https://github.com/stdlib-js/stats-base-dists-triangular-cdf

[@stdlib/stats/base/dists/triangular/logcdf]: https://github.com/stdlib-js/stats-base-dists-triangular-logcdf

[@stdlib/stats/base/dists/triangular/logpdf]: https://github.com/stdlib-js/stats-base-dists-triangular-logpdf

[@stdlib/stats/base/dists/triangular/mgf]: https://github.com/stdlib-js/stats-base-dists-triangular-mgf

[@stdlib/stats/base/dists/triangular/pdf]: https://github.com/stdlib-js/stats-base-dists-triangular-pdf

[@stdlib/stats/base/dists/triangular/quantile]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
