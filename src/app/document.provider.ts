import { DOCUMENT } from '@angular/common';
import { InjectionToken } from '@angular/core';

export const SAFE_DOCUMENT = new InjectionToken<Document | null>('SafeDocument');

export function documentFactory(): Document | null {
  if (typeof document !== 'undefined') {
    return document;
  }
  return null;
}

export const DOCUMENT_PROVIDERS = [
  {
    provide: SAFE_DOCUMENT,
    useFactory: documentFactory
  }
];