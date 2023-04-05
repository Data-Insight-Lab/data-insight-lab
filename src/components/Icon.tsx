import { cx } from '@/helpers/cx';
import { ForwardRefExoticComponent, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  as: ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}
export function Icon({ as, className, ...rest }: Props) {
  const Component = as;
  return <Component className={cx('min-h-2 min-2-w-2', className)} {...rest} />;
}
