const CONF = 0;
const WORKSHOP = 1;
const TR = 2;
const SHORT = 3;
const JOURNAL = 4;

const papers = [
    {authors: "Stefan K. Muller, Jan Hoffmann",
     title: "Modeling and analyzing evaluation cost of CUDA kernels",
     conf: "ACM Transactions on Parallel Computing (TOPC)",
     year: 2024,
     topic: "CUDA Resource Analysis",
     type: JOURNAL,
     acm: "https://dl.acm.org/doi/pdf/10.1145/3639403"
    },
    {authors: "Mark Lou and Stefan K. Muller",
     title: "Automatic Static Analysis-Guided Optimization of CUDA Kernels",
     conf: "PMAM",
     year: 2024,
     topic: "CUDA Resource Analysis",
     type: WORKSHOP,
     pdf: "papers/pmam24-preprint.pdf"
     },
    {authors: "Jatin Arora, Stefan K. Muller, and Umut A. Acar",
     title: "Disentanglement with Futures, State, and Interaction",
     conf: "POPL",
     year: 2024,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/popl24a-preprint.pdf",
    },
    {authors: "Francis Rinaldi, june wunder, Arthur Azevedo de Amorim, and Stefan K. Muller",
     title: "Pipelines and Beyond: Graph Types for ADTs with Futures",
     conf: "POPL",
     year: 2024,
     topic: "Graph Types",
     type: CONF,
     pdf: "papers/popl24-preprint.pdf",
     arxiv: "https://arxiv.org/abs/2311.06984",
     github: "https://github.com/junewunder/gml-popl24",
     artifact: "https://zenodo.org/records/10126819",
    },
    {authors: "Stefan K. Muller",
     title: "Language-Agnostic Static Deadlock Detection for Futures",
     conf: "PPoPP",
     year: 2024,
     topic: "Graph Types",
     type: CONF,
     pdf: "papers/ppopp24-preprint.pdf",
     artifact: "https://zenodo.org/records/10223442"
    },
    {authors: "Stefan K. Muller, Kyle Singer, Devyn Terra Keeney, Andrew Neth, Kunal Agrawal, I-Ting Angelina Lee, Umut A. Acar",
     title: "Responsive parallelism with synchronization",
     conf: "PLDI",
     year: 2023,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/pldi23-preprint.pdf",
     arxiv: "https://arxiv.org/abs/2304.03753",
     artifact: "https://zenodo.org/records/7706984"
    },
		{authors: "Stefan K. Muller",
		 title: "Static prediction of parallel computation graphs",
		 conf: "POPL",
		 year: 2022,
		 topic: "Graph Types",
		 type: CONF,
		 pdf: "papers/popl22-preprint.pdf"},
    {authors: "Stefan K. Muller, Jan Hoffmann",
     title: "Modeling and analyzing evaluation cost of CUDA kernels",
     conf: "POPL",
     year: 2021,
     topic: "CUDA Resource Analysis",
     type: CONF,
     pdf: "papers/popl21-preprint.pdf",
     artifact: "https://zenodo.org/records/4323505",
     github: "https://github.com/smuller/RaCUDA"
    },
    {authors: "Stefan K. Muller, Hannah Ringler",
     title: "A rhetorical framework for programming language evaluation",
     conf: "Onward!",
     year: 2020,
     topic: "Other",
     type: WORKSHOP,
     pdf: "papers/onward20-preprint.pdf"},
    {authors: "Stefan K. Muller*, Kyle Singer*, Noah Goldstein, Umut A. Acar, Kunal Agrawal, I-Ting Angelina Lee<br />*equal contribution",
     title: "Responsive parallelism with futures and state",
     conf: "PLDI",
     year: 2020,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/pldi20-preprint.pdf",
     arxiv: "https://arxiv.org/abs/2004.02870",
     artifact: "https://zenodo.org/records/3692205"
    },
    {authors: "Kyle Singer, Noah Goldstein, Stefan K. Muller, Kunal Agrawal, I-Ting Angelina Lee, Umut A. Acar",
     title: "Priority Scheduling for Interactive Applications",
     conf: "SPAA",
     year: 2020,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/spaa20-preprint.pdf"},
    {authors: "Stefan K. Muller, Sam Westrick, Umut A. Acar",
     title: "Fairness in responsive parallelism",
     conf: "ICFP",
     year: 2019,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/icfp19-preprint.pdf"},
    {authors: "Stefan K. Muller, Umut A. Acar, Robert Harper",
     title: "Competitive parallelism: getting your priorities right",
     conf: "ICFP",
     year: 2018,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/icfp18-preprint.pdf",
     arxiv: "https://arxiv.org/abs/1807.03703"},
    {authors: "Stefan K. Muller",
     title: "Responsive parallel computation",
     conf: "PhD dissertation",
     year: 2018,
     topic: "Responsive Parallelism",
     type: TR,
     pdf: "papers/thesis-muller.pdf"},
    {authors: "Stefan K. Muller, Umut A. Acar, Robert Harper",
     title: "Responsive parallel computation: bridging competitive and cooperative threading",
     conf: "PLDI",
     year: 2017,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/pldi17-preprint.pdf",
     tr: "http://reports-archive.adm.cs.cmu.edu/anon/2017/CMU-CS-17-107.pdf"},
    {authors: "Ram Raghunathan, Stefan K. Muller, Umut A. Acar, Guy E. Blelloch",
     title: "Hierarchical memory management for parallel programs",
     conf: "ICFP",
     year: 2016,
     topic: "Other",
     type: CONF,
     pdf: "papers/icfp16-preprint.pdf",
     tr: "http://reports-archive.adm.cs.cmu.edu/anon/2016/CMU-CS-16-112R.pdf"},
    {authors: "Stefan K. Muller, Umut A. Acar",
     title: "Latency-Hiding Work Stealing: Scheduling Interacting Parallel Computations with Work Stealing",
     conf: "SPAA",
     year: 2016,
     topic: "Responsive Parallelism",
     type: CONF,
     pdf: "papers/spaa16-preprint.pdf"},
    {authors: "Umut A. Acar, Guy E. Blelloch, Matthew Fluet, Stefan K. Muller, Ram Raghunathan",
     title: "Coupling Memory and Computation for Locality Management",
     conf: "SNAPL",
     year: 2015,
     topic: "Other",
     type: CONF,
     pdf: "http://drops.dagstuhl.de/opus/volltexte/2015/5012/pdf/2.pdf"},
    {authors: "Stefan K. Muller, Umut A. Acar",
     title: "Bridging Theory and Practice in Interaction",
     conf: "SNAPL",
     year: 2015,
     topic: "Responsive Parallelism",
     type: SHORT,
     pdf: "papers/snapl15-interactive.pdf"},
    {authors: "Stefan K. Muller, William A. Duff, Umut A. Acar",
     title: "Practical and Safe Abstractions for Interactive Computation via Linearity",
     conf: "Technical Report CMU-CS-15-130",
     year: 2015,
     topic: "Other",
     type: TR,
     pdf: "http://reports-archive.adm.cs.cmu.edu/anon/2015/CMU-CS-15-130.pdf"},
    {authors: "Stefan K. Muller, William A. Duff, Umut A. Acar",
     title: "Practical Abstractions for Concurrent Interactive Programs",
     conf: "Technical Report CMU-CS-15-131",
     year: 2015,
     topic: "Other",
     type: TR,
     pdf: "http://reports-archive.adm.cs.cmu.edu/anon/2015/CMU-CS-15-131.pdf"},
    {authors: "Umut Acar, Arthur Chargu&#233raud, Stefan Muller, Mike Rainey",
     title: "Atomic Read-Modify-Write Operations are Unnecessary for Shared-Memory Work Stealing",
     conf: "Inria Technical Report hal-00910130",
     year: 2013,
     topic: "Other",
     type: TR,
     linkname: "HAL-Inria",
     link: "https://hal.inria.fr/hal-00910130"},
    {authors: "Stefan K. Muller, Stephen Chong",
     title: "Towards a practical secure concurrent language",
     year: 2012,
     conf: "OOPSLA",
     topic: "Other",
     type: CONF,
     pdf: "papers/oopsla12-preprint.pdf"}
];

// https://stackoverflow.com/questions/3954630/check-if-a-object-is-defined-best-practice
function isDefined(x) {
    var undefined;
    return x !== undefined;
}

function makeLinks(p) {
    let links = "";
    if (isDefined(p.pdf)) {
	links += "[<a href=\"" + p.pdf + "\">pdf</a>]&nbsp;&nbsp;";
    }
    if (isDefined(p.acm)) {
	links += "[<a href=\"" + p.acm + "\">ACM</a>]&nbsp;&nbsp;";
    }
    if (isDefined(p.linkname)) {
	links += "[<a href=\"" + p.link + "\">" + p.linkname + "</a>]&nbsp;&nbsp;";
    }
    if (isDefined(p.arxiv)) {
	links += "[<a href=\"" + p.arxiv + "\">ArXiv</a>]&nbsp;&nbsp;";
    }
    if (isDefined(p.tr)) {
	links += "[<a href=\"" + p.tr + "\">companion tech report</a>]&nbsp;&nbsp;";
    }
    if (isDefined(p.github)) {
	links += "[<a href=\"" + p.github + "\"><img src=\"github-mark.png\" height=20 style=\"vertical-align:middle\" />&nbsp;github</a>]&nbsp;&nbsp;"
    }
    if (isDefined(p.artifact)) {
	links += "[<a href=\"" + p.artifact + "\">artifact</a>]&nbsp;&nbsp;";
    }
    return links;
}
    

function paperHTML(p) {
    return "<div>" + p.authors + "<br />" + p.title + "<br />" + p.conf + ((p.type == TR || p.type == JOURNAL) ? "<br />" : " ") + p.year + (p.type == SHORT ? " (Short Paper)" : "") + (isDefined(p.note) ? "<br />" + p.note : "") + "<br />" + makeLinks(p) + "</div>";
}

function groupBy(f) {
    let groups = [];
    papers.forEach(function(p) { let g = f(p);
				 document.write(g + "<br />");
				 let gr = groups.find((g2) => g2.name == g);
				 if (typeof gr === "undefined") {
				     groups.push({name: g, items:[p]});
				 } else {
				     gr = {name: g,
					   items:gr.items.push(p)}
				 }
			       });
    return groups;
}

						      
    
function topic(p) { return p.topic; }
function year(p) { return p.year; }
function ptype(p) {
    switch (p.type) {
    case CONF:
	return "Conference Papers";
    case WORKSHOP:
    case SHORT:
	return "Workshop and Short Papers";
    case TR:
	return "Technical Reports and Theses";
    case JOURNAL:
	return "Journal Papers";
    default:
	return "Other";
    }
}
function syear(p1, p2) { return p2.year - p1.year; }

function byYear() {
    let gs = groupBy(year);
    return gs.sort((g1, g2) => g2.name - g1.name);
}

function byTopic() {
    let gs = groupBy(topic);
    gs.forEach((g) => g.items.sort(syear));
    gs.sort((g1, g2) => g1.name == "Other" ? 10000 : g2.name == "Other" ? - 10000 : g1.name - g2.name);
    return gs;
}

function byType() {
    let gs = groupBy(ptype);
    gs.sort((g1, g2) => g1.name == "Other" ? 10000 : g2.name == "Other" ? - 10000 : g1.name - g2.name);
    return gs;
}

function papersToHTML(ps) {
    return ps.reduce((s, p) => s + "\n" + paperHTML(p) + "\n<br \>\n", "");
}

function groupsToHTML(gs) {
    return gs.reduce((s, g) => s + "\n" + "<b>" + g.name + "</b>\n<div style='padding-left: 10px; padding-top: 5px;'>\n" + papersToHTML(g.items) + "</div>", "");
}
