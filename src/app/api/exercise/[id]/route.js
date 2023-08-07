import { NextResponse } from 'next/server'

import { exercisesService } from '@/services/exerciseService';

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  try {
    const res = await exercisesService.update(id, body);
    return NextResponse.json(res, { status: 200 });
  }
 catch (err) {
    return NextResponse.json({ error: 'failed to update data' }, { status: 500 });
  }
  
}

export async function DELETE(_, { params }) {
  const { id } = params;
  try {
    const res = await exercisesService.delete(id)
    return NextResponse.json(res)
  }
  catch (err) {
    return NextResponse.json({ error: 'failed to delete data' }, { status: 500 });
  }
}