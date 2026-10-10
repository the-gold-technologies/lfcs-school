export type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  img: string;
  source: string;
  url: string;
};

// Newest first. The home page shows the first four (one featured + three side cards); the /news page shows all.
export const newsItems: NewsItem[] = [
  {
    title: "LFCS Director Murlidhar Yadav Spearheads New School Associate Program",
    excerpt: "Little Flower Children School launches a pan-India School Associate model that lets local educational entrepreneurs run affordable schools under the LFCS brand.",
    date: "09 Oct 2026",
    img: "/news-&-events/school-associate-launch.webp",
    source: "Dailyhunt",
    url: "https://m.dailyhunt.in/news/india/english/loktej+english-epaper-loktejen/lfsc+director+murlidhar+yadav+spearheads+new+school+associate+program+inaugurated+by+anand+kumar-newsid-n729745845",
  },
  {
    title: "Super 30 Founder Anand Kumar Inaugurates LFCS School Associate Program",
    excerpt: "Renowned educator Anand Kumar inaugurated the program and was felicitated by the LFCS leadership for his support of the \"Education for All\" mission.",
    date: "09 Oct 2026",
    img: "/news-&-events/anand-kumar-felicitation.webp",
    source: "UP 18 News",
    url: "https://up18news.com/lfsc-director-murlidhar-yadav-spearheads-new-school-associate-program-inaugurated-by-anand-kumar/",
  },
  {
    title: "LFCS School Associate Model to Bring Affordable, Quality Schooling to More Towns",
    excerpt: "Associates get LFCS operational systems, academic guidance and management support to deliver quality education to families at affordable fees.",
    date: "09 Oct 2026",
    img: "/about/anand-kumar.webp",
    source: "Loktej English",
    url: "https://english.loktej.com/article/33335/lfsc-director-murlidhar-yadav-spearheads-new-school-associate-program--inaugurated-by-anand-kumar",
  },
  {
    title: "Sharman Joshi Backs LFCS's \"Education for All\" Mission at Program Launch",
    excerpt: "Actor Sharman Joshi shared a video message in support of the School Associate Program and its goal of making good schooling accessible to every family.",
    date: "09 Oct 2026",
    img: "/about/sharman-joshi.webp",
    source: "Hindustan Metro",
    url: "https://hindustanmetro.com/lfsc-director-murlidhar-yadav-spearheads-new-school-associate-program-inaugurated-by-anand-kumar",
  },
  {
    title: "LFCS Unveils Pan-India School Associate Program for Educational Entrepreneurs",
    excerpt: "The launch of the LFCS School Associate Program was covered by 100+ media outlets across India.",
    date: "09 Oct 2026",
    img: "/news-&-events/logo-unveiling.webp",
    source: "Google News",
    url: "https://news.google.com/search?q=LFSC%20Director%20Murlidhar%20Yadav%20Spearheads%20New%20School%20Associate%20Program%3B%20Inaugurated%20by%20Anand%20Kumar&hl=en-IN&gl=IN&ceid=IN%3Aen",
  },
];

// Outlets that carried our press coverage (from the press release report), shown in the /news marquee.
export const coverageOutlets = [
  "Google News", "Dailyhunt", "Jio News", "UP 18 News", "Loktej English", "Hindustan Metro",
  "KBK Times", "Your Bangalore", "Central Herald", "Delhi Morning Tribune", "Deccan Express",
  "Hola Mumbai", "Allahabad Post", "Awadh Express", "Kashi Chronicle", "Calcutta Current",
  "Madras Journal", "MP Guardian", "Rajasthan Mirror", "Kanpur Live",
];
