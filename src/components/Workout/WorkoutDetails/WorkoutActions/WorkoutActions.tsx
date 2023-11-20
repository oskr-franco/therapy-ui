'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { ClipboardButton } from '@/components/Button';
import Paths from '@/constants/paths';

type WorkoutActionsProps = {
  id: number;
  className?: string;
};

function WorkoutActions({ id, className }: WorkoutActionsProps) {
  const pathname = usePathname();
  const [domain, setDomain] = useState('');
  const previewId = Paths.WorkoutPreview(id);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.href);
      setDomain(url.origin);
    }
  }, [pathname]);

  return (
    <div className={className}>
      <ClipboardButton url={`${domain}${previewId}`} />
    </div>
  );
}

export default WorkoutActions;
