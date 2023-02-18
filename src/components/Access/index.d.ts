import type { ReactNode } from 'react'
export interface AccessProps {
  children: ReactNode;
  checkAccess: () => boolean;
  renderBlank?: boolean;
}