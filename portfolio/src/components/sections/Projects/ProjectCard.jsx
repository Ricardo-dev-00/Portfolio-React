import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  FaChartLine,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaEye,
  FaGithub,
  FaSearch,
} from "react-icons/fa";

const stylePresets = [
  {
    gradient: "from-sky-500 via-cyan-500 to-blue-700",
    badge: "Projeto em destaque",
  },
  {
    gradient: "from-fuchsia-500 via-violet-500 to-indigo-700",
    badge: "Case real",
  },
  {
    gradient: "from-emerald-500 via-teal-500 to-cyan-700",
    badge: "Front-end moderno",
  },
  {
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    badge: "UX focada",
  },
  {
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    badge: "Integração API",
  },
  {
    gradient: "from-rose-500 via-pink-500 to-fuchsia-700",
    badge: "Entrega completa",
  },
];

const metricIcons = {
  chart: FaChartLine,
  code: FaCode,
  eye: FaEye,
  search: FaSearch,
  stack: FaDatabase,
};

const fallbackMetrics = [
  { label: "Stack", value: "+moderna", icon: "code" },
  { label: "UX", value: "fluida", icon: "eye" },
  { label: "Entrega", value: "real", icon: "chart" },
];

export default function ProjectCard({ project, index }) {
  const isFeatured = Boolean(project.featured);
  const preset = stylePresets[index % stylePresets.length];
  const badgeText = project.badge || preset.badge;
  const projectMetrics = project.metrics || fallbackMetrics;
  const visibleTags = isFeatured
    ? project.tags.slice(0, 6)
    : project.tags.slice(0, 4);
  const liveLabel = `Abrir projeto ${project.title}`;
  const sourceLabel = `Abrir código-fonte do projeto ${project.title} no GitHub`;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 24 });
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,0.06), transparent 70%)`;

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 320,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 320,
    damping: 28,
  });

  const handleMouseMoveFeatured = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseMoveSmall = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    spotlightX.set(event.clientX - rect.left);
    spotlightY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative md:col-span-2 lg:col-span-1"
        onMouseMove={handleMouseMoveSmall}
      >
        {/* spotlight segue o cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
          {/* Imagem fixa no topo */}
          <div className="relative h-48 shrink-0 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* overlay de cor estático */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${preset.gradient} opacity-20 mix-blend-overlay`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

            {/* overlay de gradiente que intensifica no hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${preset.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-30`}
            />

            {/* Badge com animação de entrada */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.3, duration: 0.4 }}
              className="absolute left-4 top-4 z-10"
            >
              <div
                className={`rounded-full bg-gradient-to-r ${preset.gradient} p-[1px] shadow-md`}
              >
                <div className="rounded-full bg-black/70 px-3 py-1 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90">
                    {badgeText}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* dot pulsante — aparece no hover */}
            <div className="absolute right-4 top-4 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`size-2.5 rounded-full bg-gradient-to-r ${preset.gradient} shadow-[0_0_14px_rgba(255,255,255,0.35)]`}
              />
            </div>
          </div>

          {/* Área de conteúdo separada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.25, duration: 0.5 }}
            className="flex flex-1 flex-col gap-4 p-5"
          >
            <div>
              <h3 className="mb-1.5 text-xl font-black tracking-tight text-white">
                {project.title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
            </div>

            {/* Métricas com animação escalonada */}
            <div className="flex items-center gap-2">
              {projectMetrics.map((metric, i) => {
                const MetricIcon = metricIcons[metric.icon] || FaCode;
                return (
                  <motion.div
                    key={`${project.title}-${metric.label}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12 + 0.4 + i * 0.08,
                      duration: 0.3,
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1.5"
                    title={metric.label}
                  >
                    <MetricIcon className="size-3 shrink-0 text-white/60" />
                    <span className="truncate text-[10px] font-semibold text-white/80">
                      {metric.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Tags com animação escalonada + hover individual */}
            <div className="flex flex-wrap gap-1.5">
              {visibleTags.map((tech, i) => (
                <motion.span
                  key={`${project.title}-${tech}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12 + 0.5 + i * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-gray-300 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Botões alinhados na base */}
            <div className="mt-auto flex gap-2 pt-1">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={liveLabel}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group/link relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl py-2.5 text-sm font-bold text-slate-950"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${preset.gradient}`}
                />
                <div className="absolute inset-[1px] rounded-[11px] bg-white/95 transition-colors duration-300 group-hover/link:bg-white" />
                <span className="relative">Ver</span>
                <FaExternalLinkAlt
                  className="relative size-3"
                  aria-hidden="true"
                  focusable="false"
                />
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sourceLabel}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/12 hover:shadow-lg hover:shadow-white/10"
              >
                <span>Código</span>
                <FaGithub aria-hidden="true" focusable="false" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative md:col-span-2 md:row-span-2"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMoveFeatured}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0f] backdrop-blur-xl md:block md:min-h-[620px]"
      >
        {/* ── Imagem ────────────────────────────────────────── */}
        {/* Mobile: altura fixa no topo | Desktop: cobre o card inteiro */}
        <div className="relative h-52 shrink-0 overflow-hidden sm:h-60 md:absolute md:inset-0 md:h-auto">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${preset.gradient} opacity-25 mix-blend-overlay`}
          />
          {/* Gradiente overlay — só em desktop (onde o texto fica sobre a imagem) */}
          <div className="absolute inset-0 hidden bg-gradient-to-t from-black via-black/90 to-black/40 md:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-2/3 bg-gradient-to-t from-black/95 to-transparent md:block" />
          <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%)] md:block" />
          {/* Mobile: gradiente suave para blending com o conteúdo abaixo */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0f] to-transparent md:hidden" />
        </div>

        {/* ── Badge ─────────────────────────────────────────── */}
        <div className="absolute left-5 top-5 z-10">
          <div
            className={`rounded-full bg-gradient-to-r ${preset.gradient} p-[1px] shadow-lg`}
          >
            <div className="rounded-full bg-black/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/90">
                {badgeText}
              </span>
            </div>
          </div>
        </div>

        {/* Dot decorativo */}
        <div className="absolute right-5 top-5 z-10">
          <div
            className={`size-3 rounded-full bg-gradient-to-r ${preset.gradient} shadow-[0_0_20px_rgba(255,255,255,0.25)]`}
          />
        </div>

        {/* ── Conteúdo ──────────────────────────────────────── */}
        {/* Mobile: fluxo normal abaixo da imagem | Desktop: absoluto no rodapé */}
        <div className="relative z-10 flex flex-col gap-4 p-5 sm:p-6 md:absolute md:inset-x-0 md:bottom-0 md:gap-0 md:p-8">
          <h3
            className="text-2xl font-black tracking-tight text-white sm:text-3xl md:mb-3 lg:text-4xl xl:text-5xl"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.45)" }}
          >
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:mb-5 md:max-w-3xl md:text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 md:mb-6 md:gap-4">
            {projectMetrics.map((metric) => {
              const MetricIcon = metricIcons[metric.icon] || FaCode;
              return (
                <div
                  key={`${project.title}-${metric.label}`}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md"
                >
                  <span className="text-white/85">
                    <MetricIcon className="size-3.5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wide text-white">
                      {metric.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                      {metric.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-1.5 md:mb-6 md:gap-2">
            {visibleTags.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="rounded-lg border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/12 md:px-3 md:py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={liveLabel}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group/link relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-bold text-slate-950 sm:flex-none sm:px-6"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${preset.gradient}`}
              />
              <div className="absolute inset-[1px] rounded-[11px] bg-white/95 transition-colors duration-300 group-hover/link:bg-white" />
              <span className="relative">Ver projeto</span>
              <FaExternalLinkAlt
                className="relative size-3.5"
                aria-hidden="true"
                focusable="false"
              />
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sourceLabel}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/14 sm:flex-none sm:px-6"
            >
              <span>Código</span>
              <FaGithub aria-hidden="true" focusable="false" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
