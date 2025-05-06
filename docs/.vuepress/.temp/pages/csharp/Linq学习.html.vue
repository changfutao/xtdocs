<template><div><h1 id="linq学习" tabindex="-1"><a class="header-anchor" href="#linq学习"><span>Linq学习</span></a></h1>
<h2 id="_1-where" tabindex="-1"><a class="header-anchor" href="#_1-where"><span>1.Where</span></a></h2>
<h2 id="_2-count-longcount" tabindex="-1"><a class="header-anchor" href="#_2-count-longcount"><span>2.Count/LongCount</span></a></h2>
<h2 id="_3-any" tabindex="-1"><a class="header-anchor" href="#_3-any"><span>3.Any</span></a></h2>
<h2 id="_4-single-singleordefault" tabindex="-1"><a class="header-anchor" href="#_4-single-singleordefault"><span>4.Single/SingleOrDefault</span></a></h2>
<ul>
<li>
<p><code v-pre>Single</code>：确认有且只有一条满足要求的数据; 如果没有满足条件的数据或者满足条件的数据多于一条,Single方法就会抛出异常。</p>
</li>
<li>
<p><code v-pre>SingleOrDefault</code>：确认最多只有一条满足要求的数据; 如果没有满足条件的数据,SingleOrDefault方法就会返回类型的默认值。如果满足条件的数据多于一条,SingleOrDefault抛出异常。</p>
</li>
</ul>
<h2 id="_5-first-firstordefault" tabindex="-1"><a class="header-anchor" href="#_5-first-firstordefault"><span>5.First/FirstOrDefault</span></a></h2>
<ul>
<li>
<p><code v-pre>First</code>：如果满足条件的数据有一条或多条,First方法会返回第一条数据;如果没有满足条件的数据,First方法就会抛出异常。</p>
</li>
<li>
<p><code v-pre>FirstOrDefault</code>: 如果满足条件的数据有一条或多条,FirstOrDefault方法就会返回第一条数据; 如果没有满足条件的数据,FirstOrDefault方法就会返回类型的默认值。</p>
</li>
</ul>
<h2 id="_6-orderby-orderbydescending" tabindex="-1"><a class="header-anchor" href="#_6-orderby-orderbydescending"><span>6.OrderBy/OrderByDescending</span></a></h2>
<h2 id="_7-skip-take" tabindex="-1"><a class="header-anchor" href="#_7-skip-take"><span>7.Skip/Take</span></a></h2>
<h2 id="_8-max-min-avg-sum" tabindex="-1"><a class="header-anchor" href="#_8-max-min-avg-sum"><span>8.Max/Min/Avg/Sum</span></a></h2>
<h2 id="_9-groupby" tabindex="-1"><a class="header-anchor" href="#_9-groupby"><span>9.GroupBy</span></a></h2>
<h2 id="_10-select" tabindex="-1"><a class="header-anchor" href="#_10-select"><span>10.Select</span></a></h2>
<h2 id="_11-toarray-tolist" tabindex="-1"><a class="header-anchor" href="#_11-toarray-tolist"><span>11.ToArray/ToList</span></a></h2>
</div></template>


