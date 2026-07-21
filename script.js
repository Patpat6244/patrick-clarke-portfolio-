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
// credits: optional sidebar credits line. Leave fields empty ("") to fall
// back to placeholder content.
// ---------------------------------------------------------------------------
const NAAFIRI_PROJECT = {
  title: "Naafiri",
  company: "Riot Games",
  type: "Character Reveal Trailer",
  role: "Animation Supervisor",
  skills: "Animation · Rigging · Previz · Lighting · Comp",
  description:
    "Naafiri is a Character Reveal Trailer for League of Legends at Riot Games. I was the Animation Supervisor on the project — and also handled animation, rigging, previz, lighting, and comp.",
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
    "Zac Brown Band is a Concert Visuals project for The Sphere Las Vegas. My role was Concept Visuals — I also handled previz, edit, set design, and animation.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/ZacBrown/hard-run.mp4",
  thumbUrl: "assets/ProjectImages/ZacBar.jpg",
  locked: true,
  credits: "Concept visuals created for Zac Brown Band's live performance at The Sphere, Las Vegas.",
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
    "Overwatch 2 x World of Warcraft Collab is a Collab Trailer for Blizzard Entertainment. I was the Animation Supervisor on the project — and also handled previz, animation, and story.",
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
    "Netflix Logo Activation is a Logo Animation project for Netflix. I was the Animation Director on the project — and also handled previz and scene layout.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/NetflixTitles/wednesday-logo-animation.mp4",
  thumbUrl: "assets/ProjectImages/NtflixBar.png",
};

const GROGU_PROJECT = {
  title: "Ultimate Grogu",
  videoTitle: "Grogu",
  company: "Hasbro",
  type: "Product Launch",
  role: "Art Director",
  skills: "Animation · Project Lead",
  description:
    "Ultimate Grogu is a Product Launch project for Hasbro. I was the Art Director on the project — and also handled animation and served as project lead.",
  localVideo: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Grogu/ultimate-grogu.mp4",
  thumbUrl: "assets/ProjectImages/GroguBar.png",
  stripOverlay: "linear-gradient(0deg, rgba(74,222,128,0.25), rgba(74,222,128,0.25))",
  locked: true,
};

const DOD_PROJECT = {
  title: "Día De Los Muertos",
  videoTitle: "Muertos",
  company: "We Are Royale",
  type: "Short Film",
  role: "Art Director / Animation Director",
  skills: "Character Design · Animation · Lighting · Rendering · Comp",
  description:
    "Día De Los Muertos is a Short Film for We Are Royale. I was the Art Director / Animation Director on the project — and also handled character design, animation, lighting, rendering, and comp.",
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
    "Hazard is a Character Reveal for Overwatch 2 at Blizzard Entertainment. I was the Animation Supervisor on the project — and also handled animation, previz, and storytelling.",
  videoUrl: "https://www.youtube.com/watch?v=sR8N3cXWxqM",
  thumbUrl: "assets/ProjectImages/HazBar2.png",
  thumbPosition: "center",
  stripOverlay: "linear-gradient(0deg, rgba(236,72,153,0.20), rgba(236,72,153,0.20))",
  relatedVideos: [
    { title: "Previz", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Hazard/previz.mp4" },
    { title: "Storyboards", path: "https://pub-d70797a3949642e490ca361605fbb88d.r2.dev/videos/Hazard/storyboards.mp4" },
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
    "Fall Guys Mobile is a Mobile Unleashed Trailer for Epic Games. I was the Art Director on the project — and also handled animation and story.",
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
    "Pokémon Trading Card Game is a Pack Release Advertising campaign for Pokémon. I was the Art Director on the project — and also handled animation, rigging, modeling, lighting, and rendering.",
  videoUrl: "https://www.youtube.com/watch?v=FGkI41gYj4A&list=PL7702B978C3732EAF&index=90",
  thumbUrl: "assets/ProjectImages/PokeBar.png",
  relatedVideos: [
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
};

// placeholder: true marks a bar as "not finished yet" — it's excluded from
// the shuffle below and always sinks to the bottom, in the order listed here.
// Set this on any new project entry until its real details are filled in.
const PLACEHOLDER_PROJECT_10 = {
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
  PLACEHOLDER_PROJECT_10,
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
function toEmbedUrl(url) {
  if (!url) return "";
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&autoplay=1&muted=1`;
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&mute=1`;
  return url;
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
  strip.style.setProperty("--project-tint", TINTS[i % TINTS.length]);
  strip.style.setProperty("--project-thumb", project.thumbUrl ? `url("${project.thumbUrl}")` : "none");
  if (project.stripOverlay) strip.style.setProperty("--strip-overlay", project.stripOverlay);
  if (project.thumbPosition) strip.style.setProperty("--project-thumb-position", project.thumbPosition);
  strip.setAttribute(
    "aria-label",
    `${project.title}${project.locked ? " (password protected)" : ""} — ${project.company} · ${project.type}. Role: ${project.role}`
  );
  strip.innerHTML = `
    <span class="strip-content">
      <span class="strip-index">${String(i + 1).padStart(2, "0")}</span>
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
      <span class="strip-play" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2.5v11l10-5.5-10-5.5z" fill="currentColor"/></svg>
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

// ---------- Scroll parallax ----------
// Each tracked element gets a --parallax-y (or --parallax-content-y /
// --heading-parallax-y / --tagline-parallax-y) custom property updated every
// frame based on its distance from viewport center. The CSS transform
// chains on .hero-media, .hero-content, .hero-heading and .hero-tagline
// read that variable, so this file only ever writes numbers — the
// depth/tilt styling itself stays in CSS.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion) {
  const parallaxHero = document.querySelector(".hero-media");
  const parallaxHeroContent = document.querySelector(".hero-content");
  const parallaxHeroHeading = document.querySelector(".hero-heading");
  const parallaxHeroTagline = document.querySelector(".hero-tagline-inner");

  let parallaxTicking = false;
  function updateParallax() {
    const viewportCenter = window.innerHeight / 2;

    if (parallaxHero) {
      const rect = parallaxHero.getBoundingClientRect();
      const dist = rect.top + rect.height / 2 - viewportCenter;
      parallaxHero.style.setProperty("--parallax-y", `${dist * 0.06}px`);
    }
    if (parallaxHeroContent) {
      const rect = parallaxHeroContent.getBoundingClientRect();
      const dist = rect.top + rect.height / 2 - viewportCenter;
      parallaxHeroContent.style.setProperty("--parallax-content-y", `${dist * -0.02}px`);
    }
    if (parallaxHeroHeading) {
      const rect = parallaxHeroHeading.getBoundingClientRect();
      const dist = rect.top + rect.height / 2 - viewportCenter;
      parallaxHeroHeading.style.setProperty("--heading-parallax-y", `${dist * -0.12}px`);
    }
    if (parallaxHeroTagline) {
      const rect = parallaxHeroTagline.getBoundingClientRect();
      const dist = rect.top + rect.height / 2 - viewportCenter;
      parallaxHeroTagline.style.setProperty("--tagline-parallax-y", `${dist * -0.08}px`);
    }
    parallaxTicking = false;
  }
  function onParallaxScroll() {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }
  window.addEventListener("scroll", onParallaxScroll, { passive: true });
  window.addEventListener("resize", updateParallax);
  updateParallax();
}

// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxDetails = document.getElementById("lightboxDetails");
const lightboxRole = document.getElementById("lightboxRole");
const lightboxSkills = document.getElementById("lightboxSkills");
const lightboxRelated = document.getElementById("lightboxRelated");
const lightboxCredits = document.getElementById("lightboxCredits");
const lightboxContent = document.querySelector(".lightbox-content");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPanel = document.getElementById("lightboxPanel");
let lastFocused = null;

const DEFAULT_RELATED = [
  { title: "Behind the Scenes", subtitle: "Placeholder · 2:14" },
  { title: "Process Reel", subtitle: "Placeholder · 1:47" },
  { title: "Alt Angle Edit", subtitle: "Placeholder · 0:58" },
];
const DEFAULT_CREDITS = "Placeholder credit line — swap in real production credits, collaborators, and studio partners here.";

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

function openLightbox(project) {
  lastFocused = document.activeElement;
  lightboxVideo.innerHTML = renderMainVideo(getMainSource(project), project.title || "");
  syncLightboxAspectRatio();
  lightboxTitle.textContent = project.videoTitle || project.title || "";
  lightboxPanel.setAttribute("aria-label", project.title ? `${project.title} video player` : "Video player");
  lightboxDesc.textContent = project.description || "";
  lightboxDesc.style.display = project.description ? "" : "none";
  lightboxRole.textContent = project.role || "";
  lightboxSkills.textContent = project.skills || "";
  lightboxDetails.style.display = project.role || project.skills ? "" : "none";

  const related = project.relatedVideos && project.relatedVideos.length ? project.relatedVideos : DEFAULT_RELATED;
  lightboxRelated.innerHTML = related
    .map((item, i) => {
      const tint = TINTS[i % TINTS.length];
      const attrs = item.path
        ? `data-video="${item.path}" data-title="${item.title}"`
        : item.videoUrl
        ? `data-embed="${toEmbedUrl(item.videoUrl)}" data-title="${item.title}"`
        : "disabled";
      return `
        <button type="button" class="lightbox-related-item" ${attrs}>
          <span class="lightbox-related-thumb" style="background:${tint}"></span>
          <span class="lightbox-related-info">
            <span class="lightbox-related-title">${item.title}</span>
            ${item.subtitle ? `<span class="lightbox-related-meta">${item.subtitle}</span>` : ""}
          </span>
        </button>`;
    })
    .join("");
  lightboxCredits.textContent = project.credits || DEFAULT_CREDITS;

  lightboxContent.scrollTop = 0;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

lightboxRelated.addEventListener("click", (e) => {
  const btn = e.target.closest(".lightbox-related-item");
  if (!btn || btn.disabled) return;
  const title = btn.dataset.title;
  const source = btn.dataset.video
    ? { isLocal: true, value: btn.dataset.video }
    : { isLocal: false, value: btn.dataset.embed };
  lightboxVideo.innerHTML = renderMainVideo(source, title);
  syncLightboxAspectRatio();
  lightboxRelated.querySelectorAll(".lightbox-related-item").forEach((b) => b.classList.remove("is-playing"));
  btn.classList.add("is-playing");
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
  openLightbox({ title: "Showreel", videoUrl: HERO_REEL_URL });
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
  if (passwordGateInput.value === PROJECT_PASSWORD) {
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
