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

# Triangular

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Triangular distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-triangular
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

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

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var triangular = require( '@stdlib/stats-base-dists-triangular' );

console.log( objectKeys( triangular ) );
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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular/tree/esm
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
