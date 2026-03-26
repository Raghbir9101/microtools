import ToolCard from '@/components/ToolCard';
import type { Tool } from '@/lib/tools';

interface CategorySectionProps {
  title: string;
  description: string;
  emoji: string;
  tools: Tool[];
  id?: string;
}

export default function CategorySection({
  title,
  description,
  emoji,
  tools,
  id,
}: CategorySectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      {/* Category header */}
      <div className="flex items-start gap-3 mb-6">
        <span className="text-3xl leading-none mt-0.5" aria-hidden="true">{emoji}</span>
        <div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>

      {/* Tool cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
