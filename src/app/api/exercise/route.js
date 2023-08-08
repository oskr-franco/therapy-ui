/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';

import exercisesService from '@/services/exerciseService';

export async function POST(req) {
  const body = await req.json();
  try {
    const res = await exercisesService.create(body);
    return NextResponse.json(res, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: 'failed to create data' },
      { status: 500 },
    );
  }
}
