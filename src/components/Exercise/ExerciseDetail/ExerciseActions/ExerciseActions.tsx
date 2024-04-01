'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { ClipboardButton } from '@/components/Button';
import Paths from '@/constants/paths';

type ExerciseActionsProps = {
  slug: string;
  className?: string;
};

function ExerciseActions({ slug, className }: ExerciseActionsProps) {
  const pathname = usePathname();
  const [domain, setDomain] = useState('');
  const previewSlug = Paths.ExercisePreview(slug);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.href);
      setDomain(url.origin);
    }
  }, [pathname]);

  return (
    <div className={className}>
      <ClipboardButton url={`${domain}${previewSlug}`} />
    </div>
  );
}

export default ExerciseActions;
