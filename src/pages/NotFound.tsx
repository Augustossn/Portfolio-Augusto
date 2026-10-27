import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const { content, language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{content.notFound}</p>
        <a href={`/?lang=${language}`} className="text-primary underline hover:text-primary/90">
          {content.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
