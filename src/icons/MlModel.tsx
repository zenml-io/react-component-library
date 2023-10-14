import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMlModel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" ref={ref} {...props}>
		<path
			fillRule="evenodd"
			d="M16.033 3.553a3 3 0 1 1 .573 2.255l-1.899 1.9A1 1 0 0 1 14 8h-2.697L8.555 9.832A1 1 0 0 1 8 10H6a1 1 0 0 1 0-2h1.697l2.748-1.832A1 1 0 0 1 11 6h2.586l2.447-2.447ZM19 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4.622 2.694c2-1.495 4.632-1.33 6.694-.643a1 1 0 1 1-.632 1.898c-1.78-.594-3.621-.582-4.864.347C4.466 5.308 3 7.244 3 12c0 .938.057 1.767.159 2.5h1.837a1 1 0 0 0 .474-.12L11.748 11h4.423a3.001 3.001 0 1 1 0 2h-3.919l-5.834 3.141a3 3 0 0 1-1.422.359H3.61c.552 1.666 1.4 2.6 2.209 3.204 1.243.929 3.084.94 4.864.347a1 1 0 0 1 .632 1.898c-2.062.687-4.693.852-6.694-.643C2.657 19.836 1 17.24 1 12c0-5.241 1.657-7.837 3.622-9.306ZM19 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.793 16.293A1 1 0 0 1 9.5 16H14a1 1 0 0 1 .707.293l1.899 1.899a3 3 0 1 1-.573 2.255L13.586 18H9.914l-.707.707a1 1 0 0 1-1.414-1.414l1-1ZM19 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
			clipRule="evenodd"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgMlModel);
export default ForwardRef;
