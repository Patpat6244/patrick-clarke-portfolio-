// ---------------------------------------------------------------------------
// EDIT YOUR PROJECTS HERE. Each entry becomes one strip in the Work section.
// title: the project bar's name — keep this short enough to read on one line.
// videoTitle: optional shorter name (ideally one word) shown as the big
// overlay title in the video lightbox. Falls back to `title` if omitted.
// videoUrl: paste a Vimeo or YouTube URL to make the strip playable.
// localVideo: path to a video file in /assets — takes priority over videoUrl.
// thumbUrl: a preview image shown as the strip's background (a remote
// thumbnail URL or a local path both work).
// relatedVideos: optional [{ title, path }] shown in the lightbox sidebar —
// clicking one swaps the main player to that clip.
// ---------------------------------------------------------------------------
const NAAFIRI_PROJECT = {
  title: "Naafiri",
  company: "Riot Games",
  type: "Character Reveal Trailer",
  role: "Animation Supervisor",
  skills: "Animation · Rigging · Previz · Lighting · Comp",
  description:
    "A dark, fast-paced character launch cinematic for League of Legends, focusing on fluid pack mechanics and aggressive character movement.",
  videoUrl: "https://vimeo.com/1054629434",
  thumbUrl:
    "https://i.vimeocdn.com/video/1980056784-a27bdeecda900a6ef6337a63ffe181b7607053c304c21413cd4b32bde8df1115-d_1280x720?region=us",
  stripOverlay: "linear-gradient(0deg, rgba(245,158,11,0.25), rgba(245,158,11,0.25))",
};

const ZAC_BROWN_PROJECT = {
  title: "Zac Brown Band",
  videoTitle: "Zac Brown",
  company: "The Sphere Las Vegas",
  type: "Concert Visuals",
  role: "Concept Visuals",
  skills: "Previz · Edit · Set Design · Animation",
  description:
    "Immersive, high-resolution visual experiences and concept pieces designed for the world's most advanced massive-scale wrap-around display.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/hard-run.mp4",
  thumbUrl: "assets/ProjectImages/ZacBar.jpg",
  locked: true,
  relatedVideos: [
    { title: "Give It Away", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/give-it-away.mp4" },
    { title: "Butterfly", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/butterfly.mp4" },
    { title: "Quiet Your Mind", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/quiet-your-mind.mp4" },
    { title: "Chicken Fried", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/chicken-fried.mp4" },
  ],
};

const OWW_PROJECT = {
  title: "Overwatch X WOW",
  videoTitle: "Overwatch",
  company: "Blizzard Entertainment",
  type: "Collab Trailer",
  role: "Animation Supervisor",
  skills: "Previz · Animation · Story",
  description:
    "A crossover gameplay trailer bringing iconic Warcraft characters into the stylized, high-octane world of Overwatch 2.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/OWW/overwatch-wow-collab.mp4",
  thumbUrl: "assets/ProjectImages/OWW.png",
};

const NETFLIX_PROJECT = {
  title: "Netflix Logo Intro",
  videoTitle: "Netflix",
  company: "Netflix",
  type: "Logo Animation",
  role: "Animation Director",
  skills: "Previz · Scene Layout",
  description:
    "Dynamic brand visual assets and sleek animated sequences designed to elevate and reinforce Netflix's iconic brand identity across global media.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/NetflixTitles/wednesday-logo-animation.mp4",
  thumbUrl: "assets/ProjectImages/NtflixBar.png",
  breakdownVideos: [
    { title: "Previz 1", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/NetflixTitles/StrangerThings_Previz.mp4", thumb: "assets/ProjectImages/Netflix_StrangerThings_Previz_thumb.jpg" },
    { title: "Previz 2", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/NetflixTitles/StrangerThings_Previz2.mp4", thumb: "assets/ProjectImages/Netflix_StrangerThings_Previz2_thumb.jpg" },
  ],
};

const GROGU_PROJECT = {
  title: "Comic-Con",
  videoTitle: "Grogu",
  company: "TBD",
  type: "TBD",
  role: "Art Director",
  skills: "Animation · Project Lead",
  description:
    "A commercial spot bringing the iconic Star Wars character to life for Hasbro's flagship interactive toy release, blending seamless CG character animation with live-action storytelling.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Grogu/ultimate-grogu.mp4",
  tint: "linear-gradient(#8a8a8a, #8a8a8a)",
  locked: true,
  // Permanently locked — the shared PROJECT_PASSWORD is deliberately
  // rejected for this one project (see the submit handler below).
  unlockable: false,
};

const DOD_PROJECT = {
  title: "Día De Los Muertos",
  videoTitle: "Muertos",
  company: "We Are Royale",
  type: "Short Film",
  role: "Art Director / Animation Director",
  skills: "Character Design · Animation · Lighting · Rendering · Comp",
  description:
    "A short film inspired by Día de los Muertos, following a lone spirit through a vibrant, handcrafted underworld built to honor the holiday's imagery and traditions.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/DOD/dia-de-los-muertos.mp4",
  thumbUrl: "assets/ProjectImages/DODBar2.png",
  thumbPosition: "right 12%",
  stripOverlay: "linear-gradient(0deg, rgba(212,175,55,0.10), rgba(212,175,55,0.10))",
};

const HAZARD_PROJECT = {
  title: "Hazard",
  company: "Blizzard Entertainment",
  type: "Character Reveal for Overwatch 2",
  role: "Animation Supervisor",
  skills: "Animation · Previz · Storytelling",
  description:
    "A character reveal trailer introducing Hazard to Overwatch 2, built to sell his brawling, thorn-throwing playstyle in a jolt of cinematic action.",
  videoUrl: "https://www.youtube.com/watch?v=sR8N3cXWxqM&t=2s",
  thumbUrl: "assets/ProjectImages/HazBar2.png",
  thumbPosition: "center",
  stripOverlay: "linear-gradient(0deg, rgba(236,72,153,0.20), rgba(236,72,153,0.20))",
  relatedVideos: [
    { title: "Hazardous Tactics", videoUrl: "https://www.youtube.com/watch?v=sR8N3cXWxqM&t=2s" },
  ],
  breakdownVideos: [
    { title: "Previz", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Hazard/previz.mp4", thumb: "assets/ProjectImages/Hazard_Previz_thumb.jpg" },
    { title: "Storyboards", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Hazard/storyboards.mp4", thumb: "assets/ProjectImages/Hazard_Storyboards_thumb.jpg" },
  ],
};

const FALL_GUYS_PROJECT = {
  title: "Fall Guys Mobile",
  videoTitle: "Fall Guys",
  company: "Epic Games",
  type: "Mobile Unleashed Trailer",
  role: "Art Director",
  skills: "Animation · Story",
  description:
    "A launch trailer for Fall Guys Mobile, capturing the game's chaotic, colorful energy as the beans tumble their way onto phones.",
  videoUrl: "https://www.youtube.com/watch?v=tjklJKhGs94",
  thumbUrl: "assets/ProjectImages/FGBar.png",
  stripOverlay: "linear-gradient(0deg, rgba(56,189,248,0.50), rgba(56,189,248,0.50))",
  relatedVideos: [
    { title: "Horizontal Preview", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/FG/FallGuys_Mobile_Teaser_Horizontal_Preview.mp4" },
    { title: "Teaser", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/FG/Teaser.mp4" },
  ],
};

const POKEMON_TCG_PROJECT = {
  title: "Pokémon TCG",
  videoTitle: "Pokémon",
  company: "Pokémon",
  type: "Pack Release Advertising",
  role: "Art Director",
  skills: "Animation · Rigging · Modeling · Lighting · Rendering",
  description:
    "A series of high-energy 3D spots created for the Pokémon Trading Card Game pack release, built to capture the excitement of tearing open a fresh booster pack.",
  videoUrl: "https://www.youtube.com/watch?v=FGkI41gYj4A&list=PL7702B978C3732EAF&index=90",
  thumbUrl: "assets/ProjectImages/PokeBar.png",
  relatedVideos: [
    { title: "Sun & Moon—Burning Shadows", videoUrl: "https://www.youtube.com/watch?v=FGkI41gYj4A&list=PL7702B978C3732EAF&index=90" },
    { title: "XY—Ancient Origins", videoUrl: "https://www.youtube.com/watch?v=IlgKzNzJXw4&list=PL7702B978C3732EAF&index=107" },
    { title: "XY—BREAKthrough", videoUrl: "https://www.youtube.com/watch?v=OtnUvrCttVo&list=PL7702B978C3732EAF&index=106" },
    { title: "XY—BREAKpoint", videoUrl: "https://www.youtube.com/watch?v=7ks-zhWCA_Q&list=PL7702B978C3732EAF&index=105" },
    { title: "Generations", videoUrl: "https://www.youtube.com/watch?v=KZOj-_OLl20&list=PL7702B978C3732EAF&index=101" },
    { title: "XY—Fates Collide", videoUrl: "https://www.youtube.com/watch?v=rEdH5VZ__DM&list=PL7702B978C3732EAF&index=102" },
    { title: "XY—Steam Siege", videoUrl: "https://www.youtube.com/watch?v=8VUY04QcWTo&list=PL7702B978C3732EAF&index=99" },
    { title: "XY—Evolutions", videoUrl: "https://www.youtube.com/watch?v=Gopa6dl8PH8&list=PL7702B978C3732EAF&index=97" },
    { title: "Sun & Moon", videoUrl: "https://www.youtube.com/watch?v=szGdE-WkfLA&list=PL7702B978C3732EAF&index=94" },
    { title: "Sun & Moon—Crimson Invasion", videoUrl: "https://www.youtube.com/watch?v=6R0W7K9Vq10&list=PL7702B978C3732EAF&index=85" },
    { title: "Sun & Moon—Ultra Prism", videoUrl: "https://www.youtube.com/watch?v=Q62veAZ9P-M&list=PL7702B978C3732EAF&index=82" },
  ],
  breakdownVideos: [
    { title: "XY12 Previz", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Pokemon/pokemon_xy12_PREVIZ_A_v18.mov" },
  ],
};

const FF_XIV_PROJECT = {
  title: "FF XIV: Starter Guide",
  company: "Square Enix",
  type: "Animated Walkthrough Videos",
  role: "Art Director",
  skills: "Modeling · Design · Rigging",
  description:
    "A series of animated walkthrough videos for FINAL FANTASY XIV, guiding new players through the basics of the game one lesson at a time.",
  videoUrl: "https://www.youtube.com/watch?v=sKR2F6nLKCM",
  thumbUrl: "assets/ProjectImages/FFBar.png",
  relatedVideos: [
    { title: "Episode 1: The Adventure Begins", videoUrl: "https://www.youtube.com/watch?v=XFVlLWjU5C0" },
    { title: "Episode 2: Meet Your FATE", videoUrl: "https://www.youtube.com/watch?v=mPCteSF9kOM" },
    { title: "Episode 3: Hall of the Novice", videoUrl: "https://www.youtube.com/watch?v=bRb5kmAsiSU" },
    { title: "Episode 4: Do Your Duty", videoUrl: "https://www.youtube.com/watch?v=w8lTiD3UnQQ" },
    { title: "Episode 5: Trial by Fire", videoUrl: "https://www.youtube.com/watch?v=qFXtJfhJvRQ" },
    { title: "Episode 6: The End of the Beginning", videoUrl: "https://www.youtube.com/watch?v=sKR2F6nLKCM" },
  ],
  breakdownVideos: [
    { title: "Previz", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/FF/FG6_Previz.mp4", thumb: "assets/ProjectImages/FF_Previz.png" },
  ],
};

// placeholder: true marks a bar as "not finished yet" — it's excluded from
// the shuffle below and always sinks to the bottom, in the order listed here.
// Set this on any new project entry until its real details are filled in.
const PLACEHOLDER_PROJECT_11 = {
  title: "Project Coming Soon",
  company: "TBD",
  type: "TBD",
  role: "TBD",
  skills: "TBD",
  description: "Details for this project are coming soon.",
  placeholder: true,
};

const PLACEHOLDER_PROJECT_12 = {
  title: "Project Coming Soon",
  company: "TBD",
  type: "TBD",
  role: "TBD",
  skills: "TBD",
  description: "Details for this project are coming soon.",
  placeholder: true,
};

const PROJECTS_ORDER = [
  GROGU_PROJECT,
  ZAC_BROWN_PROJECT,
  DOD_PROJECT,
  HAZARD_PROJECT,
  OWW_PROJECT,
  NETFLIX_PROJECT,
  FALL_GUYS_PROJECT,
  NAAFIRI_PROJECT,
  POKEMON_TCG_PROJECT,
  FF_XIV_PROJECT,
  PLACEHOLDER_PROJECT_11,
  PLACEHOLDER_PROJECT_12,
];

// Shuffles finished projects into a different order on every visit; anything
// flagged `placeholder: true` (unfinished bars) is held back and always
// lands at the bottom, in the order it was listed above.
function shuffle(list) {
  const result = list.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const PROJECTS = [
  ...shuffle(PROJECTS_ORDER.filter((p) => !p.placeholder)),
  ...PROJECTS_ORDER.filter((p) => p.placeholder),
];

const TINTS = [
  "linear-gradient(135deg, #241033 0%, var(--bg) 70%)",
  "linear-gradient(135deg, #1a1a1a 0%, var(--bg) 70%)",
  "linear-gradient(135deg, #2a1245 0%, var(--bg) 70%)",
  "linear-gradient(135deg, #151515 0%, var(--bg) 70%)",
];

// Alternating 3D tilt variants — deliberately uneven (left-heavy / right-heavy)
// so the strips don't read as a repeating pattern down the page.
const TILTS = ["tilt-1", "tilt-2", "tilt-3", "tilt-4"];

const HERO_REEL_URL = "https://player.vimeo.com/video/1126032409?title=0&byline=0&portrait=0&autoplay=1&muted=1";

// Every video on the site starts muted and lets the viewer opt into sound via
// the player's own controls, rather than auto-playing audio at them.
// Reads YouTube's own "t" param (2s, 90, 1m30s, 1h2m3s, ...) off a watch URL
// and converts it to total seconds, for forwarding to the embed's "start".
function parseYouTubeStart(url) {
  const match = url.match(/[?&]t=([0-9hms]+)/i);
  if (!match) return null;
  const raw = match[1];
  if (/^\d+$/.test(raw)) return parseInt(raw, 10);
  const h = raw.match(/(\d+)h/i);
  const m = raw.match(/(\d+)m/i);
  const s = raw.match(/(\d+)s/i);
  if (!h && !m && !s) return null;
  return (h ? parseInt(h[1], 10) * 3600 : 0) + (m ? parseInt(m[1], 10) * 60 : 0) + (s ? parseInt(s[1], 10) : 0);
}

function toEmbedUrl(url) {
  if (!url) return "";
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  // player_id lets us target this exact iframe when sending the postMessage
  // handshake below (addEventListener for "finish") — without it Vimeo still
  // posts messages, but keying off a known id is more robust than matching
  // "any player.vimeo.com iframe" if more than one ever exists on the page.
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&autoplay=1&muted=1&player_id=vimeoPlayer`;
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]{11})/);
  if (ytMatch) {
    const start = parseYouTubeStart(url);
    // enablejsapi=1 is required for the iframe to post onStateChange events
    // (which is how we detect "video ended" to loop/advance) to the parent
    // at all — without it, no messages get sent regardless of listening.
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&mute=1&enablejsapi=1${start ? `&start=${start}` : ""}`;
  }
  return url;
}

// YouTube serves a predictable thumbnail per video ID with no API key
// needed — used to give "More From This Project" items a real preview frame
// instead of a flat color tile.
function getYouTubeThumb(url) {
  if (!url) return null;
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]{11})/);
  return ytMatch ? `https://img.youtube.com/vi/${ytMatch[1]}/mqdefault.jpg` : null;
}

// ---------- Hero title sub-line scale ----------
// Scales "(Patrick Clarke)" up so its right edge (the closing paren) lines
// up, visually, with the right edge of "PATPAT" above it. Uses canvas text
// measurement (actualBoundingBoxRight) rather than DOM layout-box width,
// since layout width includes each font's built-in side-bearing — matching
// box widths lines up the invisible box edges, not the visible ink, and the
// "T" and ")" glyphs don't share the same side-bearing. Recomputed on resize
// and once the custom display font finishes loading, since both change the
// rendered pixel measurements this depends on.
const heroTitleMain = document.getElementById("heroTitleMain");
const heroTitleSub = document.getElementById("heroTitleSub");
const heroEyebrow = document.getElementById("heroEyebrow");
const measureCanvas = document.createElement("canvas");
const measureCtx = measureCanvas.getContext("2d");
function inkWidth(text, el, fontSizePx) {
  const cs = getComputedStyle(el);
  measureCtx.font = `${cs.fontWeight} ${fontSizePx}px ${cs.fontFamily}`;
  if ("letterSpacing" in measureCtx) measureCtx.letterSpacing = cs.letterSpacing;
  // actualBoundingBoxRight is the ink distance from the draw origin (the
  // text's left edge) to its rightmost visible pixel — exactly the visual
  // "how far right does this reach" we need, unlike the advance-width-based
  // width DOM layout would give us.
  return measureCtx.measureText(text).actualBoundingBoxRight;
}
function scaleHeroTitleSub() {
  if (!heroTitleMain) return;
  const mainFontSize = parseFloat(getComputedStyle(heroTitleMain).fontSize);
  const mainWidth = inkWidth(heroTitleMain.textContent, heroTitleMain, mainFontSize);

  if (heroTitleSub) {
    heroTitleSub.style.fontSize = "";
    const subBaseFontSize = parseFloat(getComputedStyle(heroTitleSub).fontSize);
    const subWidth = inkWidth(heroTitleSub.textContent, heroTitleSub, subBaseFontSize);
    if (mainWidth > 0 && subWidth > 0) {
      heroTitleSub.style.fontSize = `${subBaseFontSize * (mainWidth / subWidth)}px`;
    }
  }

  if (heroEyebrow) {
    heroEyebrow.style.fontSize = "";
    const eyebrowBaseFontSize = parseFloat(getComputedStyle(heroEyebrow).fontSize);
    const eyebrowWidth = inkWidth(heroEyebrow.textContent.toUpperCase(), heroEyebrow, eyebrowBaseFontSize);
    if (mainWidth > 0 && eyebrowWidth > 0) {
      heroEyebrow.style.fontSize = `${eyebrowBaseFontSize * (mainWidth / eyebrowWidth)}px`;
    }
  }
}
scaleHeroTitleSub();
window.addEventListener("resize", scaleHeroTitleSub);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(scaleHeroTitleSub);
}

// ---------- Mobile nav ----------
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Work strips render ----------
const workGrid = document.getElementById("workGrid");
PROJECTS.forEach((project, i) => {
  const strip = document.createElement("button");
  strip.type = "button";
  strip.className = `project-strip ${TILTS[i % TILTS.length]}`;
  strip.style.setProperty("--project-tint", project.tint || TINTS[i % TINTS.length]);
  strip.style.setProperty("--project-thumb", project.thumbUrl ? `url("${project.thumbUrl}")` : "none");
  if (project.stripOverlay) strip.style.setProperty("--strip-overlay", project.stripOverlay);
  if (project.thumbPosition) strip.style.setProperty("--project-thumb-position", project.thumbPosition);
  strip.setAttribute(
    "aria-label",
    `${project.title}${project.locked ? " (password protected)" : ""} — ${project.company} · ${project.type}. Role: ${project.role}`
  );
  strip.innerHTML = `
    <span class="strip-content">
      <span class="strip-title">${
        project.stripLines
          ? project.stripLines.map((line) => `<span class="strip-title-line">${line}</span>`).join("")
          : project.title
      }${project.locked ? `<img class="strip-lock-icon" src="assets/ProjectImages/Lock.png" alt="Locked" aria-hidden="true">` : ""}</span>
      <span class="strip-details">
        <span class="strip-company">${project.company}</span>
        <span class="strip-type">${project.type}</span>
        <span class="strip-role">${project.role}</span>
        <span class="strip-skills">${project.skills}</span>
      </span>
    </span>
  `;
  strip.addEventListener("click", () => {
    if (project.locked && !unlockedProjects.has(project.title)) {
      openPasswordGate(project);
    } else {
      openLightbox(project);
    }
  });
  workGrid.appendChild(strip);
});


// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxDetails = document.getElementById("lightboxDetails");
const lightboxRole = document.getElementById("lightboxRole");
const lightboxSkills = document.getElementById("lightboxSkills");
const lightboxRelated = document.getElementById("lightboxRelated");
const lightboxRelatedScroll = lightboxRelated.parentElement;
const lightboxRelatedHighlight = document.getElementById("lightboxRelatedHighlight");
const lightboxRelatedTabs = document.getElementById("lightboxRelatedTabs");
let currentProject = null;
let currentPlayingValue = null;
let activeRelatedTab = "spots";
const lightboxContent = document.querySelector(".lightbox-content");
const lightboxFrameOuter = document.querySelector(".lightbox-frame-outer");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPanel = document.getElementById("lightboxPanel");
let lastFocused = null;

const DEFAULT_RELATED = [
  { title: "Behind the Scenes", subtitle: "Placeholder · 2:14" },
  { title: "Process Reel", subtitle: "Placeholder · 1:47" },
  { title: "Alt Angle Edit", subtitle: "Placeholder · 0:58" },
];

function getSpotsList(project) {
  return project.relatedVideos && project.relatedVideos.length ? project.relatedVideos : DEFAULT_RELATED;
}
function getBreakdownsList(project) {
  return project.breakdownVideos && project.breakdownVideos.length ? project.breakdownVideos : [];
}

function buildRelatedItemsHTML(list) {
  return list
    .map((item, i) => {
      const tint = TINTS[i % TINTS.length];
      const thumb = item.thumb || getYouTubeThumb(item.videoUrl);
      const thumbStyle = thumb ? `background-image:url('${thumb}');background-size:cover;background-position:center;` : `background:${tint};`;
      const attrs = item.path
        ? `data-video="${item.path}" data-title="${item.title}"`
        : item.videoUrl
        ? `data-embed="${toEmbedUrl(item.videoUrl)}" data-title="${item.title}"`
        : "disabled";
      return `
        <button type="button" class="lightbox-related-item" ${attrs}>
          <span class="lightbox-related-thumb" style="${thumbStyle}"></span>
          <span class="lightbox-related-info">
            <span class="lightbox-related-title">${item.title}</span>
            ${item.subtitle ? `<span class="lightbox-related-meta">${item.subtitle}</span>` : ""}
          </span>
        </button>`;
    })
    .join("");
}

// Writes `list` into the sidebar and returns whichever button (if any)
// matches the video currently loaded in the main player, so its highlight
// can be repositioned once the caller knows the lightbox is visible.
function applyRelatedList(list) {
  // Always styled as a scroll window (fixed height, recessed background) —
  // every project gets both tabs now, so a project with no breakdownVideos
  // just shows this empty state instead of the tab disappearing.
  lightboxRelatedScroll.classList.add("lightbox-related--scrollable");
  if (list.length === 0) {
    lightboxRelated.innerHTML = `<p class="lightbox-related-empty">Nothing to see here.</p>`;
    lightboxRelated.classList.remove("lightbox-related-list--reversed");
    return null;
  }
  lightboxRelated.innerHTML = buildRelatedItemsHTML(list);
  // Break Downs mirrors the row layout (name left, thumbnail right) so it
  // reads as visually distinct from More Spots rather than an identical
  // list under a different tab.
  lightboxRelated.classList.toggle("lightbox-related-list--reversed", activeRelatedTab === "breakdowns");
  const relatedButtons = [...lightboxRelated.querySelectorAll(".lightbox-related-item")];
  relatedButtons.forEach((b) => b.classList.remove("is-playing"));
  const activeBtn = currentPlayingValue
    ? relatedButtons.find((b) => b.dataset.video === currentPlayingValue || b.dataset.embed === currentPlayingValue)
    : null;
  if (activeBtn) activeBtn.classList.add("is-playing");
  return activeBtn || null;
}

// Renders whichever tab is currently active. `skipFade` is used on initial
// open (nothing to cross-fade from yet); switching tabs afterward fades the
// old list out, swaps its content, then fades the new one in.
function renderActiveTabList({ skipFade } = {}) {
  const list = activeRelatedTab === "breakdowns" ? getBreakdownsList(currentProject) : getSpotsList(currentProject);
  if (skipFade) {
    const activeBtn = applyRelatedList(list);
    positionRelatedHighlight(activeBtn);
    return;
  }
  lightboxRelated.classList.add("is-fading");
  window.setTimeout(() => {
    const activeBtn = applyRelatedList(list);
    lightboxRelated.classList.remove("is-fading");
    positionRelatedHighlight(activeBtn);
  }, 160);
}

function setRelatedTab(tab) {
  if (tab === activeRelatedTab) return;
  activeRelatedTab = tab;
  lightboxRelatedTabs.querySelectorAll(".lightbox-related-tab").forEach((btn) => {
    const isActive = btn.dataset.tab === tab;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
  renderActiveTabList();
}

lightboxRelatedTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".lightbox-related-tab");
  if (!btn || btn.classList.contains("is-active")) return;
  setRelatedTab(btn.dataset.tab);
});

// Slides the purple highlight behind whichever related-item button is
// currently playing. Passing null hides it (nothing in the list matches
// the main video, e.g. right after opening a project that doesn't repeat
// its main clip in the sidebar).
function positionRelatedHighlight(btn) {
  if (!btn) {
    lightboxRelatedHighlight.style.opacity = "0";
    return;
  }
  lightboxRelatedHighlight.style.transform = `translateY(${btn.offsetTop}px)`;
  lightboxRelatedHighlight.style.height = `${btn.offsetHeight}px`;
  lightboxRelatedHighlight.style.opacity = "1";
  // The list now scrolls within its own bounded height — nudge just that
  // inner scroll container (not scrollIntoView, which would also drag the
  // outer window's own scroll position around) so whichever item is
  // playing is actually visible instead of hidden below the fold.
  const itemTop = btn.offsetTop;
  const itemBottom = itemTop + btn.offsetHeight;
  const viewTop = lightboxRelatedScroll.scrollTop;
  const viewBottom = viewTop + lightboxRelatedScroll.clientHeight;
  if (itemTop < viewTop) {
    lightboxRelatedScroll.scrollTop = itemTop;
  } else if (itemBottom > viewBottom) {
    lightboxRelatedScroll.scrollTop = itemBottom - lightboxRelatedScroll.clientHeight;
  }
}

function renderMainVideo(source, title) {
  if (!source) {
    return `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#9a9aa2;font-family:'Space Grotesk',sans-serif;text-align:center;padding:2rem;">
              Case study video coming soon.
            </div>`;
  }
  if (source.isLocal) {
    return `<video src="${source.value}" controls autoplay muted playsinline title="${title}"></video>`;
  }
  return `<iframe src="${source.value}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${title}"></iframe>`;
}

// Single entry point for putting a video in the main player — used on
// initial open, on clicking a related item, and when auto-advancing/looping
// below, so the "ended" listener (local <video>) or postMessage handshake
// (Vimeo) always gets (re)attached to whatever just got rendered.
function playMainVideo(source, title) {
  currentPlayingValue = source ? source.value : null;
  lightboxVideo.innerHTML = renderMainVideo(source, title);
  syncLightboxAspectRatio();
  const video = lightboxVideo.querySelector("video");
  if (video) video.addEventListener("ended", handleVideoEnded);
  const iframe = lightboxVideo.querySelector("iframe");
  if (iframe && iframe.src.includes("player.vimeo.com")) {
    iframe.addEventListener(
      "load",
      () => iframe.contentWindow.postMessage(JSON.stringify({ method: "addEventListener", value: "finish" }), "*"),
      { once: true }
    );
  }
}

// Plays one item from the currently active related list (mirrors the click
// handler below) — used when auto-advancing to "the next video" on end.
function playRelatedItem(item) {
  const source = item.path
    ? { isLocal: true, value: item.path }
    : { isLocal: false, value: toEmbedUrl(item.videoUrl) };
  playMainVideo(source, item.title);
  const buttons = [...lightboxRelated.querySelectorAll(".lightbox-related-item")];
  buttons.forEach((b) => b.classList.remove("is-playing"));
  const btn = buttons.find((b) => b.dataset.video === source.value || b.dataset.embed === source.value);
  if (btn) btn.classList.add("is-playing");
  positionRelatedHighlight(btn || null);
}

// Restarts whatever's currently playing from 0 — the fallback when there's
// no "next" video to advance to (a single clip, or the last one in a list).
function replayCurrentVideo() {
  const video = lightboxVideo.querySelector("video");
  if (video) {
    video.currentTime = 0;
    video.play();
    return;
  }
  const iframe = lightboxVideo.querySelector("iframe");
  if (!iframe) return;
  if (iframe.src.includes("youtube.com")) {
    iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "seekTo", args: [0, true] }), "*");
    iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
  } else if (iframe.src.includes("player.vimeo.com")) {
    iframe.contentWindow.postMessage(JSON.stringify({ method: "setCurrentTime", value: 0 }), "*");
    iframe.contentWindow.postMessage(JSON.stringify({ method: "play" }), "*");
  }
}

// Fires whenever a video finishes (local <video> "ended" event, or a
// YouTube/Vimeo "ended"/"finish" postMessage — see the window "message"
// listener below). In a project window with 2+ videos in the active tab,
// advances to the next one (wrapping back to the first after the last); a
// single clip just loops itself.
function handleVideoEnded() {
  if (!currentProject) return;
  const list = (activeRelatedTab === "breakdowns" ? getBreakdownsList(currentProject) : getSpotsList(currentProject)).filter(
    (item) => item.path || item.videoUrl
  );
  if (list.length > 1) {
    const currentIndex = list.findIndex((item) => (item.path || toEmbedUrl(item.videoUrl)) === currentPlayingValue);
    playRelatedItem(list[(currentIndex + 1) % list.length]);
    return;
  }
  replayCurrentVideo();
}

// YouTube (with enablejsapi=1) posts {event:"onStateChange", info:0} when a
// video ends; Vimeo posts {event:"finish"} once we've sent the
// addEventListener handshake in playMainVideo above.
window.addEventListener("message", (event) => {
  if (!lightbox.classList.contains("open")) return;
  let data = event.data;
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return;
    }
  }
  if (!data || typeof data !== "object") return;
  if ((data.event === "onStateChange" && data.info === 0) || data.event === "finish") {
    handleVideoEnded();
  }
});

function getMainSource(project) {
  if (project.localVideo) return { isLocal: true, value: project.localVideo };
  if (project.videoUrl) return { isLocal: false, value: toEmbedUrl(project.videoUrl) };
  return null;
}

// Reads the actual video file's native width/height once its metadata is
// available and sizes the lightbox panel to match, so widescreen/cinematic
// clips (anything not exactly 16:9) never get cropped or letterboxed. Falls
// back to the default 16/9 for iframes (Vimeo/YouTube), since their real
// dimensions aren't readable client-side without their embed APIs.
function syncLightboxAspectRatio() {
  lightboxPanel.style.removeProperty("--lightbox-aspect");
  const video = lightboxVideo.querySelector("video");
  if (!video) return;
  const applyRatio = () => {
    if (video.videoWidth && video.videoHeight) {
      lightboxPanel.style.setProperty("--lightbox-aspect", `${video.videoWidth} / ${video.videoHeight}`);
    }
  };
  if (video.readyState >= 1) {
    applyRatio();
  } else {
    video.addEventListener("loadedmetadata", applyRatio, { once: true });
  }
}

// Vertically centers .lightbox-frame-outer with an explicit margin-top
// computed once, instead of relying on flex align-items:center (which would
// re-center — and visibly move the box's top edge — every time its content
// height changes, e.g. switching between the "More Spots" and "Break Downs"
// lists). Call this right after opening or on viewport resize; deliberately
// NOT called on tab-switch so the top stays put and only the bottom grows
// or shrinks. Skipped on mobile, where the box is meant to start flush with
// the top of the screen (see the max-width:800px media query).
function centerLightboxFrame() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    lightboxFrameOuter.style.marginTop = "";
    return;
  }
  lightboxFrameOuter.style.marginTop = "0px";
  const containerStyle = getComputedStyle(lightbox);
  const paddingTop = parseFloat(containerStyle.paddingTop) || 0;
  const paddingBottom = parseFloat(containerStyle.paddingBottom) || 0;
  const availableHeight = lightbox.clientHeight - paddingTop - paddingBottom;
  const extra = Math.max(0, (availableHeight - lightboxFrameOuter.offsetHeight) / 2);
  lightboxFrameOuter.style.marginTop = `${extra}px`;
}

function openLightbox(project) {
  lastFocused = document.activeElement;
  currentProject = project;
  const mainSource = getMainSource(project);
  playMainVideo(mainSource, project.title || "");
  lightboxTitle.textContent = project.videoTitle || project.title || "";
  lightboxPanel.setAttribute("aria-label", project.title ? `${project.title} video player` : "Video player");
  lightboxDesc.textContent = project.description || "";
  lightboxDesc.style.display = project.description ? "" : "none";
  lightboxRole.textContent = project.role || "";
  lightboxSkills.textContent = project.skills || "";
  lightboxDetails.style.display = project.role || project.skills ? "" : "none";

  activeRelatedTab = "spots";
  lightboxRelatedTabs.querySelectorAll(".lightbox-related-tab").forEach((btn) => {
    const isActive = btn.dataset.tab === "spots";
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
  const activeRelatedBtn = applyRelatedList(getSpotsList(project));

  // Solo pieces (like the showreel) have no related clips to show — drop
  // the sidebar entirely and let the video take the full width instead of
  // splitting the layout for an empty column.
  lightboxContent.classList.toggle("lightbox-content--solo", Boolean(project.noSidebar));
  lightboxFrameOuter.classList.toggle("lightbox-frame-outer--solo", Boolean(project.noSidebar));

  lightboxContent.scrollTop = 0;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();

  // Only measurable/settable once the lightbox is actually visible — while
  // an ancestor is still display:none, offsetTop reads 0 for everything and
  // a scrollTop write silently no-ops, so both have to wait until here.
  // Reset to the top first — the scroll container's position would
  // otherwise carry over from whatever project was last viewed — then let
  // positionRelatedHighlight scroll down from that fresh baseline only if
  // the currently-playing clip actually sits below the fold.
  lightboxRelatedScroll.scrollTop = 0;
  positionRelatedHighlight(activeRelatedBtn || null);
  centerLightboxFrame();
}

lightboxRelated.addEventListener("click", (e) => {
  const btn = e.target.closest(".lightbox-related-item");
  if (!btn || btn.disabled) return;
  const title = btn.dataset.title;
  const source = btn.dataset.video
    ? { isLocal: true, value: btn.dataset.video }
    : { isLocal: false, value: btn.dataset.embed };
  playMainVideo(source, title);
  lightboxRelated.querySelectorAll(".lightbox-related-item").forEach((b) => b.classList.remove("is-playing"));
  btn.classList.add("is-playing");
  positionRelatedHighlight(btn);
});

// The list can reflow (title wrapping, sidebar width change) on resize while
// the lightbox is open — keep the highlight glued to whichever item is
// actually playing rather than a stale pixel position.
window.addEventListener("resize", () => {
  if (!lightbox.classList.contains("open")) return;
  positionRelatedHighlight(lightboxRelated.querySelector(".is-playing"));
  centerLightboxFrame();
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxVideo.innerHTML = "";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeLightbox));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});

document.getElementById("watchReelBtn").addEventListener("click", () => {
  openLightbox({
    title: "Demo Reel",
    videoUrl: HERO_REEL_URL,
    description: "A quick cut of animation, direction, and visual storytelling across recent projects.",
    noSidebar: true,
  });
});

// ---------- Password-locked projects ----------
// Set `locked: true` on any project in the PROJECTS config above to gate it
// behind this password prompt. To unlock a project permanently, just remove
// that flag — nothing else needs to change. A correct password unlocks that
// project for the rest of this browser session (in-memory only; reloading
// the page locks it again).
const PROJECT_PASSWORD = "patpat2026";
const unlockedProjects = new Set();
let pendingUnlockProject = null;

const cowboyErrorMessages = [
  "Wrong trail, partner. Give it another haul.",
  "Reckon that ain't it. Give 'er another shot.",
  "Missed the target, cowboy. Try again.",
  "Barkin' up the wrong tree. Try another combo.",
  "That lock didn't budge. Take another crack at it.",
];

const passwordGate = document.getElementById("passwordGate");
const passwordGateForm = document.getElementById("passwordGateForm");
const passwordGateInput = document.getElementById("passwordGateInput");
const passwordGateError = document.getElementById("passwordGateError");
const passwordGateClose = document.getElementById("passwordGateClose");
const passwordUnlockBtn = document.getElementById("passwordUnlockBtn");
let passwordLastFocused = null;

function openPasswordGate(project) {
  pendingUnlockProject = project;
  passwordLastFocused = document.activeElement;
  passwordGateForm.reset();
  passwordGateError.hidden = true;
  passwordUnlockBtn.classList.remove("unlocked");
  passwordUnlockBtn.disabled = false;
  passwordGate.classList.add("open");
  passwordGate.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  passwordGateInput.focus();
}

function closePasswordGate() {
  passwordGate.classList.remove("open");
  passwordGate.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  pendingUnlockProject = null;
  if (passwordLastFocused) passwordLastFocused.focus();
}

passwordGateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const isUnlockable = !pendingUnlockProject || pendingUnlockProject.unlockable !== false;
  if (isUnlockable && passwordGateInput.value === PROJECT_PASSWORD) {
    const project = pendingUnlockProject;
    unlockedProjects.add(project.title);
    passwordUnlockBtn.disabled = true;
    passwordUnlockBtn.classList.add("unlocked");
    // Let the viewer actually see the lock pop open before the window
    // disappears and the project video takes over.
    setTimeout(() => {
      closePasswordGate();
      openLightbox(project);
    }, 500);
  } else {
    const randomIndex = Math.floor(Math.random() * cowboyErrorMessages.length);
    passwordGateError.textContent = cowboyErrorMessages[randomIndex];
    passwordGateError.hidden = false;
    passwordGateInput.value = "";
    passwordGateInput.focus();
    passwordGate.classList.remove("shake");
    void passwordGate.offsetWidth;
    passwordGate.classList.add("shake");
  }
});

passwordGateClose.addEventListener("click", closePasswordGate);
passwordGate.querySelectorAll("[data-password-close]").forEach((el) => el.addEventListener("click", closePasswordGate));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && passwordGate.classList.contains("open")) closePasswordGate();
});

// ---------- Bug mascot squish + live squish counter ----------
// One-way easter egg: click it once and it stays squished (a splat, instead
// of the walking silhouette) for the rest of the visit. The squish counter
// next to it tracks total squishes across every visitor, live, via Firebase
// Realtime Database.
//
// ONE-TIME SETUP (required for the counter to work — until then it quietly
// falls back to a local-only count and logs a console warning):
//   1. Go to https://console.firebase.google.com and create a free project.
//   2. Build > Realtime Database > Create Database (any region is fine).
//   3. Project settings (gear icon) > General > "Your apps" > Add app > Web
//      (</> icon). Register it — you don't need Firebase Hosting.
//   4. Copy the firebaseConfig object it shows you and paste it in place of
//      FIREBASE_CONFIG below.
//   5. In Realtime Database > Rules, set:
//        { "rules": { "squishCount": { ".read": true, ".write": true } } }
//      (Public read/write is fine here — it's just a playful counter, not
//      sensitive data. Test-mode's default rules expire after 30 days.)
// NOTE: databaseURL below is a best-guess default (the config you pasted
// didn't include one, which usually means Realtime Database hasn't been
// created in this project yet — see step 2 above). Go to Build > Realtime
// Database in the Firebase console: if it prompts you to create a database,
// do that first, then copy the URL shown at the top of the data viewer and
// paste it in here (it may end in a region, e.g. ".europe-west1
// .firebasedatabase.app", instead of the plain ".firebaseio.com" guessed
// below).
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC-wTPRTpHr8qGg2PDiIj7vmoUVmki6JRA",
  authDomain: "squish-counter.firebaseapp.com",
  databaseURL: "https://squish-counter-default-rtdb.firebaseio.com",
  projectId: "squish-counter",
};

const bugMascot = document.getElementById("bugMascot");
const squishCounter = document.getElementById("squishCounter");
const squishCounterValue = document.getElementById("squishCounterValue");
let bugSquished = false;
let localSquishCount = 0;

// Pops the old number out and the new one in, swapping the digit while it's
// mid-animation (invisible) rather than a plain instant text swap. Before
// any of that starts, the old number just sits there for LINGER_MS — a
// beat where the viewer can register what it was before it starts
// changing, so it reads as "your squish moved this" rather than an instant
// jump. The very first value received (e.g. the current live count on page
// load, before this visitor has squished anything) just sets the number
// directly — nothing should animate before the counter is even visible.
const LINGER_MS = 500;
const POP_ANIM_MS = 500;
const POP_SWAP_MS = 200; // when opacity hits 0 in the keyframes above
let squishLingerTimer = null;
let squishPopTimer = null;
let squishValueInitialized = false;
function setSquishCounterValue(value) {
  const str = String(value);
  if (!squishValueInitialized) {
    squishValueInitialized = true;
    squishCounterValue.textContent = str;
    return;
  }
  if (squishCounterValue.textContent === str) return;
  clearTimeout(squishLingerTimer);
  clearTimeout(squishPopTimer);
  squishCounterValue.classList.remove("pop");
  squishLingerTimer = setTimeout(() => {
    void squishCounterValue.offsetWidth; // restart animation if already running
    squishCounterValue.classList.add("pop");
    squishPopTimer = setTimeout(() => {
      squishCounterValue.textContent = str;
    }, POP_SWAP_MS);
    squishCounterValue.addEventListener(
      "animationend",
      () => squishCounterValue.classList.remove("pop"),
      { once: true }
    );
  }, LINGER_MS);
}

const firebaseConfigured = FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
let squishCountRef = null;
if (firebaseConfigured && window.firebase) {
  firebase.initializeApp(FIREBASE_CONFIG);
  squishCountRef = firebase.database().ref("squishCount");
  squishCountRef.on("value", (snapshot) => {
    setSquishCounterValue(snapshot.val() || 0);
  });
} else {
  console.warn(
    "Squish counter is running in local-only mode — add your Firebase config in script.js (see the comment above FIREBASE_CONFIG) to make it live for every visitor."
  );
  setSquishCounterValue(localSquishCount);
}

const bugSplat = document.querySelector(".bug-icon-splat");
bugMascot.addEventListener("click", () => {
  if (bugSquished) return;
  bugSquished = true;
  bugMascot.classList.add("squished");
  bugMascot.setAttribute("aria-label", "Squished");
  squishCounter.classList.add("visible");
  // Force the display:none -> block change above to commit before adding
  // the class that starts the pop-in animation — otherwise the animation
  // can silently fail to play (see the CSS comment on .splat-anim).
  void bugSplat.offsetWidth;
  bugSplat.classList.add("splat-anim");

  if (squishCountRef) {
    squishCountRef.transaction((current) => (current || 0) + 1);
  } else {
    localSquishCount += 1;
    setSquishCounterValue(localSquishCount);
  }

  // Shows for 2s, then fades out over 1s (see the 1000ms transition on
  // .squish-counter) and stays hidden for the rest of the visit.
  setTimeout(() => {
    squishCounter.classList.remove("visible");
  }, 2000);
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 5, 4) * 60}ms`;
    io.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

// ---------- Contact form -> mailto ----------
const contactForm = document.getElementById("contactForm");
const CONTACT_EMAIL = "clarkepatpat@gmail.com";

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("blur", () => field.setAttribute("data-touched", "true"));
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const message = document.getElementById("cf-message").value.trim();

  if (!name || !email || !message) {
    contactForm.querySelectorAll("input, textarea").forEach((f) => f.setAttribute("data-touched", "true"));
    return;
  }

  const subject = encodeURIComponent(`Project inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
