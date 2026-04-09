import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Habilidades
        </h2>

        <p className="text-slate-600 dark:text-gray-400 text-center text-lg mb-16 max-w-3xl mx-auto">
          Tecnologias que uso no dia a dia e como aplico na prática.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard type="frontend" title="Front-end">
            <li>
              <strong>HTML5</strong> — semântica e acessibilidade
            </li>
            <li>
              <strong>CSS3</strong> — responsividade e layouts
            </li>
            <li>
              <strong>JavaScript</strong> — DOM e APIs
            </li>
          </SkillCard>

          <SkillCard type="react" title="React & Frameworks">
            <li>
              <strong>React</strong> — hooks e componentes
            </li>
            <li>
              <strong>Next.js</strong> — SSR/SSG
            </li>
            <li>
              <strong>TypeScript</strong> — tipagem
            </li>
          </SkillCard>

          <SkillCard type="ui" title="Estilização & UI">
            <li>
              <strong>Tailwind</strong> — design rápido
            </li>
            <li>
              <strong>Bootstrap</strong> — componentes
            </li>
            <li>
              <strong>UI/UX</strong> — boas práticas
            </li>
          </SkillCard>

          <SkillCard type="tools" title="Ferramentas">
            <li>Git & GitHub</li>
            <li>VS Code / NPM / Vite</li>
            <li>Figma</li>
          </SkillCard>

          <SkillCard type="practices" title="Boas Práticas">
            <li>Código limpo</li>
            <li>Responsividade</li>
            <li>Performance</li>
          </SkillCard>

          <SkillCard type="learning" title="Em Aprendizado">
            <li>Next.js avançado</li>
            <li>Testes automatizados</li>
            <li>Design Systems</li>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
