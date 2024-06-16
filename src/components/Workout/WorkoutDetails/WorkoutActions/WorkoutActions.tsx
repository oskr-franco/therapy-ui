'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { ClipboardButton } from '@/components/Button';
import PATHS from '@/constants/paths';

type WorkoutActionsProps = {
  slug: string;
  className?: string;
};

function WorkoutActions({ slug, className }: WorkoutActionsProps) {
  const pathname = usePathname();
  const [domain, setDomain] = useState('');
  const previewSlug = PATHS.WorkoutPreview(slug);

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

export default WorkoutActions;
