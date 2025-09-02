import AnimatedContent from "../blocks/AnimatedContent/AnimatedContent";

interface FooterAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

function FooterAnimation({ children, delay }: FooterAnimationProps) {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0}
      threshold={0}
      delay={delay}
      
    >
      {children}
    </AnimatedContent>
  );
}

export default FooterAnimation;
