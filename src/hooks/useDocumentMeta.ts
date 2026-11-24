import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface DocumentMetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function useDocumentMeta({
  title,
  description,
  canonicalPath,
}: DocumentMetaOptions): void {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const siteUrl = siteConfig.integrations.siteUrl;
    if (siteUrl && canonicalPath) {
      const fullUrl = `${siteUrl.replace(/\/$/, '')}${canonicalPath}`;
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', fullUrl);
    }
  }, [title, description, canonicalPath]);
}
