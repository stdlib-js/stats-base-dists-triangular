# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-05-01)

<section class="commits">

### Commits

<details>

-   [`187e141`](https://github.com/stdlib-js/stdlib/commit/187e141098635f0f2edf0f6f1289e06473ae7fcd) - **chore:** add missing `npm` engine constraint to `stats/base/dists/*/ctor` [(#11686)](https://github.com/stdlib-js/stdlib/pull/11686) _(by Philipp Burckhardt)_
-   [`9430db6`](https://github.com/stdlib-js/stdlib/commit/9430db645b6b1d36afb35e2fe3275d9ce4c384b8) - **refactor:** reuse variance implementation for stdev in `stats/base/dists` [(#11370)](https://github.com/stdlib-js/stdlib/pull/11370) _(by Om-A-osc, Athan Reines)_
-   [`f9dbbfa`](https://github.com/stdlib-js/stdlib/commit/f9dbbfaf48e1830f1c9fb685856eac2edba3fac6) - **docs:** fix C examples [(#11138)](https://github.com/stdlib-js/stdlib/pull/11138) _(by anee3, Athan Reines)_
-   [`ea63211`](https://github.com/stdlib-js/stdlib/commit/ea63211c94ab3e1504fd23279f1bd7b6b05d8987) - **docs:** fix incorrect return value in C usage section [(#10955)](https://github.com/stdlib-js/stdlib/pull/10955) _(by Om-A-osc)_
-   [`ff46826`](https://github.com/stdlib-js/stdlib/commit/ff468262ccfafc3d15037ccdcb92920f980a6f0d) - **docs:** fix C include headers in `stats/base/dists/traingular/logcdf/README.md` [(#10954)](https://github.com/stdlib-js/stdlib/pull/10954) _(by Om-A-osc)_
-   [`8085ec9`](https://github.com/stdlib-js/stdlib/commit/8085ec9b06af954eeaaf6491c13d4ee23c2070a0) - **docs:** fix incorrect return value in C usage section `triangular/mean` [(#10958)](https://github.com/stdlib-js/stdlib/pull/10958) _(by Om-A-osc)_
-   [`f38e8a7`](https://github.com/stdlib-js/stdlib/commit/f38e8a7b433e0e9888eb57c83f4374073089ad85) - **docs:** clean-up parameters in Julia fixtures scripts _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Om-A-osc
-   Philipp Burckhardt
-   anee3

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2026-02-08)

<section class="commits">

### Commits

<details>

-   [`baaed47`](https://github.com/stdlib-js/stdlib/commit/baaed472c168e6b26437cf48137cdf79c3fd544b) - **bench:** refractor to use string interpolation in `stats/base/dists/triangular` [(#10063)](https://github.com/stdlib-js/stdlib/pull/10063) _(by Shubham, Athan Reines)_
-   [`9b98e3f`](https://github.com/stdlib-js/stdlib/commit/9b98e3f6a8a80db920ed4aa05264e356aa019605) - **refactor:** reduce FLOPs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Shubham

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`17b5854`](https://github.com/stdlib-js/stdlib/commit/17b58546865fa067126bfdc11a8ae72f878cd96f) - add C implementation for `stats/base/dists/triangular/cdf` [(#4669)](https://github.com/stdlib-js/stdlib/pull/4669)
-   [`3ee60b4`](https://github.com/stdlib-js/stdlib/commit/3ee60b4370969d787a3446b90b276f74bc2f9cb3) - add C implementation for `stats/base/dists/triangular/quantile` [(#4307)](https://github.com/stdlib-js/stdlib/pull/4307)
-   [`be656a1`](https://github.com/stdlib-js/stdlib/commit/be656a143216896aa6b1ce0df89646e6a3565ec9) - add C implementation for `stats/base/dists/triangular/logcdf` [(#4326)](https://github.com/stdlib-js/stdlib/pull/4326)
-   [`105516a`](https://github.com/stdlib-js/stdlib/commit/105516a2100144dce5d97682d979807a84ab1cb8) - add C implementation for `stats/base/dists/triangular/logpdf` [(#4671)](https://github.com/stdlib-js/stdlib/pull/4671)
-   [`1040b76`](https://github.com/stdlib-js/stdlib/commit/1040b76eca609dd8557525b79be6903dcf8c607d) - add C implementation for `stats/base/dists/triangular/variance` [(#4000)](https://github.com/stdlib-js/stdlib/pull/4000)
-   [`12d1a13`](https://github.com/stdlib-js/stdlib/commit/12d1a136f24395a9b223bf2ff0b9aa8ee3d0a61f) - add C implementation for `stats/base/dists/triangular/pdf` [(#4322)](https://github.com/stdlib-js/stdlib/pull/4322)
-   [`98fa29f`](https://github.com/stdlib-js/stdlib/commit/98fa29f0c3aa52aca0bbfb9bdf173250b4fd860a) - add C implementation for `stats/base/dists/triangular/mgf` [(#4330)](https://github.com/stdlib-js/stdlib/pull/4330)
-   [`82745a5`](https://github.com/stdlib-js/stdlib/commit/82745a55bcc54c1c2bab053cfc0c7f7dc10d52f1) - add C implementation for `stats/base/dists/triangular/skewness` [(#4259)](https://github.com/stdlib-js/stdlib/pull/4259)
-   [`8a76708`](https://github.com/stdlib-js/stdlib/commit/8a767088c956f13116988ee8967e9e4f74c0f564) - add C implementation for `stats/base/dists/triangular/kurtosis` [(#4256)](https://github.com/stdlib-js/stdlib/pull/4256)
-   [`fc9ae04`](https://github.com/stdlib-js/stdlib/commit/fc9ae04de27f1f42a60bc3c266765f2e86dfd98e) - add C implementation for `stats/base/dists/triangular/entropy` [(#4255)](https://github.com/stdlib-js/stdlib/pull/4255)
-   [`013c9ac`](https://github.com/stdlib-js/stdlib/commit/013c9ac4695d3ff46ecde12644af8c35aa0be706) - add C implementation for `stats/base/dists/triangular/stdev` [(#4258)](https://github.com/stdlib-js/stdlib/pull/4258)
-   [`b884459`](https://github.com/stdlib-js/stdlib/commit/b8844596b7f57a356ff38333c0c5da9b63401874) - add C implementation for `stats/base/dists/triangular/mean` [(#4006)](https://github.com/stdlib-js/stdlib/pull/4006)
-   [`daf43b2`](https://github.com/stdlib-js/stdlib/commit/daf43b2052a0ad89fa4c72caee6d7caedcc4cc38) - add C implementation for `stats/base/dists/triangular/mode` [(#4008)](https://github.com/stdlib-js/stdlib/pull/4008)
-   [`8bb1cf3`](https://github.com/stdlib-js/stdlib/commit/8bb1cf3e5a003c54a909412cda9143d85ec10f30) - add C implementation for `dist/triangular/median` [(#4004)](https://github.com/stdlib-js/stdlib/pull/4004)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`62614d7`](https://github.com/stdlib-js/stdlib/commit/62614d7ddd740208bfe21cc1e5d4c7f9cc97a507) - remove unused `sqrt` dependency from `triangular/kurtosis` manifest
-   [`049ef05`](https://github.com/stdlib-js/stdlib/commit/049ef0522b41e091f5669ffee094788eb40fc8ef) - replace pow with expm1 dependency in triangular/mgf benchmark and examples

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 18 issues were closed in this release:

[#3812](https://github.com/stdlib-js/stdlib/issues/3812), [#3813](https://github.com/stdlib-js/stdlib/issues/3813), [#3814](https://github.com/stdlib-js/stdlib/issues/3814), [#3815](https://github.com/stdlib-js/stdlib/issues/3815), [#3816](https://github.com/stdlib-js/stdlib/issues/3816), [#3817](https://github.com/stdlib-js/stdlib/issues/3817), [#3818](https://github.com/stdlib-js/stdlib/issues/3818), [#3819](https://github.com/stdlib-js/stdlib/issues/3819), [#3820](https://github.com/stdlib-js/stdlib/issues/3820), [#3821](https://github.com/stdlib-js/stdlib/issues/3821), [#3822](https://github.com/stdlib-js/stdlib/issues/3822), [#3823](https://github.com/stdlib-js/stdlib/issues/3823), [#3824](https://github.com/stdlib-js/stdlib/issues/3824), [#4668](https://github.com/stdlib-js/stdlib/issues/4668), [#4704](https://github.com/stdlib-js/stdlib/issues/4704), [#5709](https://github.com/stdlib-js/stdlib/issues/5709), [#5897](https://github.com/stdlib-js/stdlib/issues/5897), [#5900](https://github.com/stdlib-js/stdlib/issues/5900)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`eb3218e`](https://github.com/stdlib-js/stdlib/commit/eb3218e35b0e498a31f286f8cf889e509a6d7792) - **style:** remove extra empty line [(#7932)](https://github.com/stdlib-js/stdlib/pull/7932) _(by stdlib-bot)_
-   [`4589cee`](https://github.com/stdlib-js/stdlib/commit/4589cee4e69b2a4c4a433321f413824a69eebb6e) - **docs:** fix return annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`83af59d`](https://github.com/stdlib-js/stdlib/commit/83af59de17b7e0db3d95fb5959ec0f38cf63c88e) - **test:** increase needed tolerances for tests to pass _(by Philipp Burckhardt)_
-   [`7e24b8b`](https://github.com/stdlib-js/stdlib/commit/7e24b8ba0fff87a56584bb1a2fa106eb88267596) - **test:** slightly increase tolerances for passing tests _(by Philipp Burckhardt)_
-   [`17b5854`](https://github.com/stdlib-js/stdlib/commit/17b58546865fa067126bfdc11a8ae72f878cd96f) - **feat:** add C implementation for `stats/base/dists/triangular/cdf` [(#4669)](https://github.com/stdlib-js/stdlib/pull/4669) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`62614d7`](https://github.com/stdlib-js/stdlib/commit/62614d7ddd740208bfe21cc1e5d4c7f9cc97a507) - **fix:** remove unused `sqrt` dependency from `triangular/kurtosis` manifest _(by Philipp Burckhardt)_
-   [`049ef05`](https://github.com/stdlib-js/stdlib/commit/049ef0522b41e091f5669ffee094788eb40fc8ef) - **fix:** replace pow with expm1 dependency in triangular/mgf benchmark and examples _(by Philipp Burckhardt)_
-   [`07cc4a4`](https://github.com/stdlib-js/stdlib/commit/07cc4a4f1aeec8d7d197d47b8a0db66be06a44f9) - **test:** align test descriptions between main and native test files _(by Philipp Burckhardt)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`4d17559`](https://github.com/stdlib-js/stdlib/commit/4d1755914f7ba64648c1ef6711f297c26c120e12) - **test:** fix missing argument _(by Athan Reines)_
-   [`04c3454`](https://github.com/stdlib-js/stdlib/commit/04c34541dd27ecad16ba67f3ce455acdc9b7cef6) - **chore:** address commit comments [(#5941)](https://github.com/stdlib-js/stdlib/pull/5941) _(by Pulkit Gupta)_
-   [`2ce745b`](https://github.com/stdlib-js/stdlib/commit/2ce745bfa32318ef066ee82bd886d14f7432605f) - **chore:** address commit comments [(#5927)](https://github.com/stdlib-js/stdlib/pull/5927) _(by Aman Bhadkariya, Philipp Burckhardt)_
-   [`2a46bc7`](https://github.com/stdlib-js/stdlib/commit/2a46bc7f9419e7b629197f54377d1181e2a236b4) - **refactor:** avoid unnecessary computation _(by Athan Reines)_
-   [`9cff95d`](https://github.com/stdlib-js/stdlib/commit/9cff95ddb6969672c0ca55117caa70a34fd9c640) - **chore:** update random number generation function in `triangular/logpdf` [(#5266)](https://github.com/stdlib-js/stdlib/pull/5266) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`3ee60b4`](https://github.com/stdlib-js/stdlib/commit/3ee60b4370969d787a3446b90b276f74bc2f9cb3) - **feat:** add C implementation for `stats/base/dists/triangular/quantile` [(#4307)](https://github.com/stdlib-js/stdlib/pull/4307) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`be656a1`](https://github.com/stdlib-js/stdlib/commit/be656a143216896aa6b1ce0df89646e6a3565ec9) - **feat:** add C implementation for `stats/base/dists/triangular/logcdf` [(#4326)](https://github.com/stdlib-js/stdlib/pull/4326) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`dd3acfd`](https://github.com/stdlib-js/stdlib/commit/dd3acfdb0eb89f51b9d42e9b078b4c646b1a49cf) - **refactor:** update `stats/base/dists/triangular/mgf` implementation and test tolerances [(#4768)](https://github.com/stdlib-js/stdlib/pull/4768) _(by Karan Anand, Philipp Burckhardt, stdlib-bot)_
-   [`c63c47a`](https://github.com/stdlib-js/stdlib/commit/c63c47a458a3d233352565566a48f02c5a48c602) - **chore:** address commit comment [(#5725)](https://github.com/stdlib-js/stdlib/pull/5725) _(by Jalaj Kumar)_
-   [`6a802bc`](https://github.com/stdlib-js/stdlib/commit/6a802bc9ee090d54bc05b665bb10e4365ba7d917) - **test:** add tests to achieve 100% code coverage [(#5693)](https://github.com/stdlib-js/stdlib/pull/5693) _(by Karan Anand)_
-   [`8abdc55`](https://github.com/stdlib-js/stdlib/commit/8abdc5534462ea8e26a02042ff5d26c2ec8bb2f6) - **test:** add tests to achieve 100% code coverage [(#5636)](https://github.com/stdlib-js/stdlib/pull/5636) _(by Karan Anand)_
-   [`276f077`](https://github.com/stdlib-js/stdlib/commit/276f077fe99f7647d5f31256dc0220a45eedbf3e) - **test:** add tests to achieve 100% code coverage [(#5638)](https://github.com/stdlib-js/stdlib/pull/5638) _(by Karan Anand)_
-   [`c7bfa92`](https://github.com/stdlib-js/stdlib/commit/c7bfa923af0c5346766c90300e0d0a3c2188d438) - **docs:** fix missing ending `section` in various READMEs [(#5292)](https://github.com/stdlib-js/stdlib/pull/5292) _(by Saurabh Singh)_
-   [`e61b1de`](https://github.com/stdlib-js/stdlib/commit/e61b1dee3334bacf30d213de5b5f1c7868c0753b) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`f505ed5`](https://github.com/stdlib-js/stdlib/commit/f505ed56b0c0cc20458f9e51760d45d5abd60b36) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`b9a2014`](https://github.com/stdlib-js/stdlib/commit/b9a2014b1181d30f86aa489ba90ad1f892ade8e8) - **docs:** clean-up of C docstrings _(by Philipp Burckhardt)_
-   [`25d7bde`](https://github.com/stdlib-js/stdlib/commit/25d7bde2ce5093d6ce2168c5cce57df6ecd70f14) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`58e26cb`](https://github.com/stdlib-js/stdlib/commit/58e26cbf1882734b423124a001180661a6c377bb) - **chore:** fix parameter names, return annotations, and example code _(by Philipp Burckhardt)_
-   [`177f0a0`](https://github.com/stdlib-js/stdlib/commit/177f0a00909c097be05d47107a3e6ab05b865409) - **chore:** consistently use differential entropy for continuous distributions _(by Philipp Burckhardt)_
-   [`f75a0ce`](https://github.com/stdlib-js/stdlib/commit/f75a0cef6a3112b166dba04c13bada9763cec350) - **chore:** use excess kurtosis consistently _(by Philipp Burckhardt)_
-   [`441ea68`](https://github.com/stdlib-js/stdlib/commit/441ea68883183d31363403a11d4142cabf4c0ef0) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`d199580`](https://github.com/stdlib-js/stdlib/commit/d19958025c3494ec94440c4d4d66e580d145e71e) - **test:** correcly pass options for native tests _(by Philipp Burckhardt)_
-   [`8ada47e`](https://github.com/stdlib-js/stdlib/commit/8ada47eedd19ea9f21a8edc342ee3583e92ac857) - **chore:** fix indentation _(by Philipp Burckhardt)_
-   [`105516a`](https://github.com/stdlib-js/stdlib/commit/105516a2100144dce5d97682d979807a84ab1cb8) - **feat:** add C implementation for `stats/base/dists/triangular/logpdf` [(#4671)](https://github.com/stdlib-js/stdlib/pull/4671) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`998c1be`](https://github.com/stdlib-js/stdlib/commit/998c1be8630c1efcf19beefda88181db820d1dcb) - **chore:** remove EPS addition and directly draw from desired distribution _(by Philipp Burckhardt)_
-   [`1d5aa47`](https://github.com/stdlib-js/stdlib/commit/1d5aa47204c258b674d3db4aec92fbd2475e5ea7) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`97c434d`](https://github.com/stdlib-js/stdlib/commit/97c434de1ac819d4f616202b10ebdce3970a76d8) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`c88e9f5`](https://github.com/stdlib-js/stdlib/commit/c88e9f51302adbe0d828fd298d9dbc138f6b3e7b) - **chore:** clean-up, fix tests, and add FIXMEs _(by Athan Reines)_
-   [`1040b76`](https://github.com/stdlib-js/stdlib/commit/1040b76eca609dd8557525b79be6903dcf8c607d) - **feat:** add C implementation for `stats/base/dists/triangular/variance` [(#4000)](https://github.com/stdlib-js/stdlib/pull/4000) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`12d1a13`](https://github.com/stdlib-js/stdlib/commit/12d1a136f24395a9b223bf2ff0b9aa8ee3d0a61f) - **feat:** add C implementation for `stats/base/dists/triangular/pdf` [(#4322)](https://github.com/stdlib-js/stdlib/pull/4322) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`98fa29f`](https://github.com/stdlib-js/stdlib/commit/98fa29f0c3aa52aca0bbfb9bdf173250b4fd860a) - **feat:** add C implementation for `stats/base/dists/triangular/mgf` [(#4330)](https://github.com/stdlib-js/stdlib/pull/4330) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`82745a5`](https://github.com/stdlib-js/stdlib/commit/82745a55bcc54c1c2bab053cfc0c7f7dc10d52f1) - **feat:** add C implementation for `stats/base/dists/triangular/skewness` [(#4259)](https://github.com/stdlib-js/stdlib/pull/4259) _(by Prashant Kumar Yadav)_
-   [`8a76708`](https://github.com/stdlib-js/stdlib/commit/8a767088c956f13116988ee8967e9e4f74c0f564) - **feat:** add C implementation for `stats/base/dists/triangular/kurtosis` [(#4256)](https://github.com/stdlib-js/stdlib/pull/4256) _(by Prashant Kumar Yadav)_
-   [`fc9ae04`](https://github.com/stdlib-js/stdlib/commit/fc9ae04de27f1f42a60bc3c266765f2e86dfd98e) - **feat:** add C implementation for `stats/base/dists/triangular/entropy` [(#4255)](https://github.com/stdlib-js/stdlib/pull/4255) _(by Prashant Kumar Yadav)_
-   [`013c9ac`](https://github.com/stdlib-js/stdlib/commit/013c9ac4695d3ff46ecde12644af8c35aa0be706) - **feat:** add C implementation for `stats/base/dists/triangular/stdev` [(#4258)](https://github.com/stdlib-js/stdlib/pull/4258) _(by Prashant Kumar Yadav)_
-   [`b7867cb`](https://github.com/stdlib-js/stdlib/commit/b7867cbb3a4fc453e19203794402c36f19b264fd) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`0ba282b`](https://github.com/stdlib-js/stdlib/commit/0ba282b89c384f06bbe3ff8ecd71982f05209606) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`603c766`](https://github.com/stdlib-js/stdlib/commit/603c76686fc8de480628e5b96efd9733b1f059b5) - **test:** only conditionally run tests _(by Philipp Burckhardt)_
-   [`a72a67a`](https://github.com/stdlib-js/stdlib/commit/a72a67a667bcf694e5f8f2bc3c8e62714e5832bc) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`b884459`](https://github.com/stdlib-js/stdlib/commit/b8844596b7f57a356ff38333c0c5da9b63401874) - **feat:** add C implementation for `stats/base/dists/triangular/mean` [(#4006)](https://github.com/stdlib-js/stdlib/pull/4006) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`daf43b2`](https://github.com/stdlib-js/stdlib/commit/daf43b2052a0ad89fa4c72caee6d7caedcc4cc38) - **feat:** add C implementation for `stats/base/dists/triangular/mode` [(#4008)](https://github.com/stdlib-js/stdlib/pull/4008) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`8bb1cf3`](https://github.com/stdlib-js/stdlib/commit/8bb1cf3e5a003c54a909412cda9143d85ec10f30) - **feat:** add C implementation for `dist/triangular/median` [(#4004)](https://github.com/stdlib-js/stdlib/pull/4004) _(by Divyansh Seth, Philipp Burckhardt)_
-   [`71af75e`](https://github.com/stdlib-js/stdlib/commit/71af75ec2c9066eb59288ad525ddbf1ad782db0c) - **docs:** improve examples `stats/base/dists/triangular` namespace _(by Tufailahmed Bargir, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 10 people contributed to this release. Thank you to the following contributors:

-   Aman Bhadkariya
-   Athan Reines
-   Divyansh Seth
-   Jalaj Kumar
-   Karan Anand
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   Pulkit Gupta
-   Saurabh Singh
-   Tufailahmed Bargir

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

