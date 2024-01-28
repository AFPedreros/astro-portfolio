import { Globe2, Phone, Mail, X, Menu, ArrowUpRight, type LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	globe: Globe2,
	mail: Mail,
	phone: Phone,
	close: X,
	menu: Menu,
	arrowUpRight: ArrowUpRight,
	github: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
			></path>
		</svg>
	),
	linkedin: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
			></path>
		</svg>
	),
	x: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
			></path>
		</svg>
	),
	figma: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<g clipPath="url(#clip0_102_148)">
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.99999 0H15C17.208 0 19 1.792 19 3.99999C19 6.20638 17.2106 7.9974 15.0048 8.00001C17.2106 8.00261 19 9.7936 19 12C19 14.208 17.208 16 15 16C13.8057 16 12.7331 15.4757 12 14.6449V20C12 22.208 10.208 24 7.99999 24C5.792 24 4 22.208 4 20C4 17.7935 5.78958 16.0024 7.99552 16C5.78958 15.9976 4 14.2065 4 12C4 9.7936 5.78939 8.00261 7.99517 8.00001C5.78939 7.9974 4 6.20638 4 3.99999C4 1.792 5.792 0 7.99999 0ZM5 3.99999C5 2.34428 6.34428 1 7.99999 1H11V7.00001H7.99999C6.34429 7.00001 5 5.65571 5 3.99999ZM11 11.9907C11 11.9938 11 11.9969 11 12C11 12.0031 11 12.0062 11 12.0092V15H7.99999C6.34429 15 5 13.6557 5 12C5 10.3443 6.34428 9 7.99999 9H11V11.9907ZM12 12.008V11.992C12.0043 10.34 13.347 9 15 9C16.6557 9 18 10.3443 18 12C18 13.6557 16.6557 15 15 15C13.347 15 12.0043 13.66 12 12.008ZM12 9.35507V8.00001H14.9908C13.8002 8.00271 12.7313 8.52642 12 9.35507ZM12 1V7.00001H15C16.6557 7.00001 18 5.65571 18 3.99999C18 2.34428 16.6557 1 15 1H12ZM11 20V17H7.99999C6.34428 17 5 18.3443 5 20C5 21.6557 6.34429 23 7.99999 23C9.65571 23 11 21.6557 11 20Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_102_148">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	solidity: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<g clipPath="url(#clip0_103_286)">
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.4175 0C16.588 0 16.7457 0.0904729 16.8318 0.237672C16.8394 0.250643 16.8463 0.263883 16.8526 0.277346L20.537 6.82747C20.6206 6.9761 20.6191 7.15792 20.533 7.30512C20.4469 7.45232 20.2892 7.54279 20.1187 7.54279L12.9954 7.54279L9.43017 13.8809C9.34516 14.0321 9.18523 14.1256 9.01182 14.1256C8.83841 14.1256 8.67848 14.0321 8.59347 13.8809L4.89085 7.2985C4.80866 7.15238 4.80845 6.97359 4.89064 6.82747L8.57508 0.277353C8.58136 0.263888 8.58829 0.250645 8.59587 0.237672C8.68196 0.0904729 8.83969 0 9.01021 0H16.4175ZM6.12971 7.54279L9.01182 12.6665L11.8939 7.54279H6.12971ZM9.01101 1.46049L6.12971 6.5828H11.8923L9.01101 1.46049ZM12.7146 6.08374L15.5967 0.959992H9.83254L12.7146 6.08374ZM19.298 6.5828H13.5354L16.4167 1.46049L19.298 6.5828Z"
				/>
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.8717 10.1187C16.7867 9.96756 16.6268 9.87402 16.4534 9.87402C16.28 9.87402 16.12 9.96756 16.035 10.1187L12.4697 16.4571H5.34718C5.17666 16.4571 5.01894 16.5476 4.93285 16.6948C4.84676 16.842 4.84523 17.0238 4.92883 17.1724L8.61327 23.7225C8.61955 23.736 8.62648 23.7492 8.63407 23.7622C8.72015 23.9094 8.87788 23.9999 9.0484 23.9999H16.4557C16.6262 23.9999 16.7839 23.9094 16.87 23.7622C16.8776 23.7492 16.8845 23.736 16.8908 23.7225L20.5752 17.1724C20.6588 17.0238 20.6573 16.842 20.5712 16.6948C20.5691 16.6911 20.5669 16.6874 20.5646 16.6838L16.8717 10.1187ZM12.751 17.9166L15.6328 23.0399H9.86912L12.751 17.9166ZM19.3356 16.4571L16.4534 11.3331L13.5711 16.4571H19.3356ZM19.3353 17.4171L16.4544 22.5387L13.5736 17.4171H19.3353ZM9.04921 22.5394L6.1679 17.4171H11.9305L9.04921 22.5394Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_103_286">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	javaScript: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<g clipPath="url(#clip0_102_125)">
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.125 0H1.875C0.839437 0 0 0.839437 0 1.875V22.125C0 23.1606 0.839437 24 1.875 24H22.125C23.1606 24 24 23.1606 24 22.125V1.875C24 0.839437 23.1606 0 22.125 0ZM18.3246 14.5458C20.5276 15.4393 21.2714 16.397 21.4544 17.5377C21.6302 18.5191 21.4116 19.156 21.3783 19.2511C20.5656 22.0315 16.0338 22.1218 14.2229 20.2848C14.1679 20.2227 14.1159 20.1648 14.0664 20.1097C13.7715 19.7818 13.5675 19.5548 13.3722 19.1275C13.8597 18.8471 14.1002 18.7087 14.3406 18.5699C14.5748 18.4348 14.8089 18.2994 15.2709 18.032C15.7795 18.8138 16.25 19.244 17.096 19.4198C18.2438 19.56 19.3988 19.1655 19.1397 17.9464C18.9854 17.3692 18.22 17.0451 17.3275 16.6672C16.6806 16.3933 15.9669 16.0911 15.3707 15.6437C13.9306 14.6765 13.5932 12.3262 14.7766 10.9835C15.1711 10.4868 15.8436 10.1161 16.5494 9.93789C16.6712 9.92251 16.7935 9.90655 16.9159 9.8906C17.0395 9.87448 17.1631 9.85836 17.2861 9.84283C18.7001 9.81431 19.5841 10.1874 20.2329 10.9122C20.4135 11.0952 20.5608 11.2924 20.8365 11.7202C20.6811 11.8192 20.5578 11.8976 20.4506 11.9658C20.0381 12.2282 19.8629 12.3396 19.0066 12.8941C18.7761 12.3975 18.3935 12.0862 17.9895 11.9507C17.3622 11.7606 16.5708 11.9673 16.4068 12.6304C16.3498 12.8347 16.3617 13.0248 16.452 13.3623C16.6578 13.8316 17.2559 14.0861 17.8822 14.3526C18.0297 14.4153 18.1788 14.4787 18.3246 14.5458ZM9.75285 9.99014H12.0913C12.0913 10.7076 12.0926 11.4242 12.0939 12.1403C12.0965 13.5709 12.0992 14.9994 12.0913 16.4279C12.092 16.6218 12.095 16.8131 12.0981 17.0013C12.1156 18.0883 12.1315 19.0751 11.6778 19.9117C11.3094 20.6603 10.606 21.1522 9.79089 21.3898C8.53849 21.6774 7.34078 21.5134 6.44962 20.9787C5.85313 20.6128 5.38738 20.0496 5.07129 19.4008C5.38811 19.2074 5.70435 19.0134 6.02059 18.8193C6.33768 18.6248 6.65476 18.4303 6.97243 18.2363C6.98726 18.2427 7.02846 18.315 7.08429 18.413C7.09116 18.425 7.09825 18.4375 7.10553 18.4502C7.34793 18.8566 7.55705 19.1441 7.96818 19.3461C8.37217 19.484 9.25858 19.5719 9.60078 18.8613C9.76761 18.5732 9.75901 17.7647 9.7487 16.7968C9.74609 16.5514 9.74337 16.2958 9.74337 16.0358C9.74337 15.0258 9.74574 14.0194 9.74811 13.013C9.75048 12.0065 9.75285 11.0001 9.75285 9.99014Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_102_125">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	typeScript: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<g clipPath="url(#clip0_101_115)">
				<path
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.125 0H1.875C0.839437 0 0 0.839437 0 1.875V22.125C0 23.1606 0.839437 24 1.875 24H22.125C23.1606 24 24 23.1606 24 22.125V1.875C24 0.839437 23.1606 0 22.125 0ZM14.1111 21.3839V18.7945C14.5808 19.1884 15.0909 19.4837 15.6417 19.6806C16.1924 19.8775 16.7484 19.976 17.3099 19.976C17.6392 19.976 17.9268 19.9462 18.1724 19.8869C18.418 19.8276 18.6233 19.7453 18.7879 19.6402C18.9525 19.535 19.0754 19.4108 19.1563 19.268C19.237 19.1262 19.2789 18.9658 19.2778 18.8027C19.2778 18.5761 19.213 18.3738 19.0835 18.1957C18.9539 18.0177 18.7771 17.8532 18.553 17.7022C18.329 17.5511 18.0631 17.4055 17.7553 17.2653C17.4262 17.1157 17.0941 16.9727 16.7592 16.8364C15.8522 16.4587 15.1761 15.9975 14.7307 15.4527C14.2852 14.9078 14.0625 14.2497 14.0625 13.4783C14.0625 12.8741 14.184 12.3549 14.4269 11.9207C14.6699 11.4864 15.0006 11.1291 15.419 10.8485C15.8374 10.568 16.322 10.3616 16.8727 10.2295C17.4233 10.0973 18.0064 10.0312 18.6218 10.0312C19.2265 10.0312 19.7624 10.0676 20.2294 10.1405C20.6963 10.2133 21.1269 10.3253 21.5211 10.4763V12.8957C21.3207 12.7575 21.1079 12.6383 20.8853 12.5397C20.6559 12.4372 20.419 12.352 20.1768 12.2848C19.9338 12.2173 19.6922 12.1674 19.4519 12.1351C19.2117 12.1027 18.9836 12.0865 18.7676 12.0865C18.4707 12.0865 18.2007 12.1148 17.9578 12.1715C17.7148 12.2282 17.5097 12.3077 17.3423 12.4103C17.175 12.5127 17.0453 12.6354 16.9536 12.7784C16.8618 12.9214 16.8159 13.0818 16.8159 13.2598C16.8159 13.4541 16.8672 13.628 16.9698 13.7817C17.0723 13.9355 17.2181 14.0812 17.4071 14.2187C17.596 14.3563 17.8255 14.4911 18.0954 14.6233C18.3654 14.7555 18.6704 14.8916 19.0105 15.032C19.4749 15.2261 19.892 15.4325 20.2618 15.6509C20.6316 15.8694 20.9488 16.1162 21.2133 16.3913C21.4755 16.6628 21.6819 16.983 21.8207 17.334C21.961 17.6873 22.0312 18.0987 22.0312 18.568C22.0312 19.2154 21.9084 19.7588 21.6628 20.1984C21.4171 20.6381 21.0837 20.9942 20.6626 21.2666C20.2416 21.539 19.7515 21.7345 19.1928 21.8532C18.634 21.9719 18.0442 22.0312 17.4233 22.0312C16.7862 22.0312 16.1802 21.9773 15.6052 21.8694C15.0303 21.7615 14.5322 21.5997 14.1111 21.3839ZM13.125 12.3508H9.79519V21.8438H7.15734V12.3508H3.84375V10.2188H13.125V12.3508Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_101_115">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	react: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M19.7328 7.92098C19.4774 7.83335 19.2198 7.75217 18.9603 7.67751C19.0039 7.49939 19.044 7.32342 19.0796 7.15055C19.6644 4.3117 19.2821 2.02467 17.9763 1.27167C16.7242 0.549796 14.6767 1.30251 12.6087 3.10223C12.4049 3.27992 12.2056 3.46273 12.0111 3.65048C11.8808 3.52563 11.7483 3.40321 11.6135 3.28326C9.44616 1.35895 7.27378 0.547921 5.96934 1.30308C4.71844 2.0272 4.34803 4.17717 4.87453 6.86761C4.92691 7.13407 4.98606 7.39915 5.05191 7.66261C4.74441 7.74998 4.44769 7.84298 4.16372 7.94198C1.62272 8.82792 0 10.2163 0 11.6564C0 13.1437 1.74206 14.6355 4.38863 15.5401C4.60319 15.6132 4.81954 15.6809 5.03747 15.7431C4.96669 16.0269 4.90385 16.3125 4.84903 16.5998C4.34709 19.2435 4.73906 21.3427 5.98659 22.0622C7.27509 22.8053 9.43772 22.0416 11.5434 20.2008C11.7142 20.0512 11.8812 19.8973 12.0443 19.7393C12.255 19.9426 12.4713 20.14 12.693 20.3312C14.7328 22.0864 16.7473 22.7952 17.9936 22.0737C19.2809 21.3285 19.6993 19.0734 19.1561 16.3298C19.1133 16.1149 19.0654 15.901 19.0122 15.6884C19.1641 15.6434 19.3132 15.597 19.4585 15.5489C22.2098 14.6373 24 13.1636 24 11.6564C24 10.211 22.3249 8.8133 19.7328 7.92098ZM19.1361 14.5757C19.0048 14.6191 18.8702 14.661 18.7329 14.7018C18.4292 13.7402 18.0193 12.7178 17.5177 11.6613C17.9963 10.6301 18.3905 9.62067 18.6857 8.66536C18.9312 8.73642 19.1694 8.81133 19.3991 8.89036C21.6201 9.65498 22.9747 10.7853 22.9747 11.6564C22.9747 12.5841 21.5117 13.7885 19.1361 14.5757ZM18.1504 16.5289C18.3906 17.742 18.4248 18.8389 18.2657 19.6965C18.1228 20.467 17.8354 20.9806 17.4799 21.1864C16.7236 21.6242 15.1061 21.0552 13.3617 19.554C13.1555 19.3762 12.9543 19.1927 12.7582 19.0037C13.4346 18.2641 14.1104 17.4044 14.77 16.4494C15.9303 16.3465 17.0264 16.1781 18.0204 15.9483C18.0694 16.1459 18.1129 16.3395 18.1504 16.5289ZM8.18213 21.1108C7.44319 21.3717 6.85462 21.3792 6.49884 21.174C5.74181 20.7375 5.42709 19.0519 5.85637 16.791C5.9074 16.5239 5.96583 16.2582 6.03159 15.9943C7.01466 16.2118 8.10281 16.3681 9.26578 16.4625C9.92991 17.3969 10.6252 18.2557 11.326 19.0078C11.1771 19.1519 11.0247 19.2923 10.8688 19.4289C9.93759 20.2428 9.0045 20.8203 8.18213 21.1108ZM4.72031 14.57C3.55003 14.17 2.58356 13.6501 1.92113 13.0829C1.32581 12.5731 1.02534 12.067 1.02534 11.6564C1.02534 10.7824 2.32819 9.66773 4.50122 8.91014C4.76494 8.81826 5.04094 8.73155 5.32734 8.65017C5.62772 9.62705 6.02166 10.6485 6.49706 11.6813C6.01547 12.7294 5.61591 13.7671 5.31262 14.7555C5.1137 14.6986 4.9162 14.6367 4.72031 14.57ZM5.88075 6.67064C5.42972 4.36561 5.72925 2.62683 6.48309 2.19042C7.28597 1.72561 9.06141 2.38833 10.9327 4.04995C11.0548 4.15855 11.1748 4.26935 11.2928 4.3823C10.5955 5.13108 9.90656 5.98355 9.24834 6.91242C8.11959 7.01705 7.03912 7.18505 6.04575 7.41014C5.98455 7.1651 5.92953 6.91846 5.88075 6.67064ZM16.2333 9.22701C15.9986 8.82173 15.7553 8.42154 15.5034 8.02673C16.2692 8.12358 17.0029 8.25211 17.6918 8.40923C17.485 9.07223 17.2272 9.76533 16.9238 10.476C16.7019 10.0551 16.4717 9.63869 16.2333 9.22701ZM12.0115 5.11505C12.4844 5.62739 12.958 6.19936 13.4239 6.81998C12.4789 6.77535 11.5323 6.77517 10.5873 6.81942C11.0536 6.20451 11.5313 5.6333 12.0115 5.11505ZM7.76269 9.23405C7.52722 9.64241 7.30131 10.0562 7.08516 10.4751C6.78666 9.76701 6.53119 9.07073 6.32259 8.39836C7.00734 8.24517 7.73756 8.11992 8.49844 8.02486C8.24376 8.42208 7.99844 8.82531 7.76269 9.23405ZM8.52028 15.3608C7.73419 15.273 6.993 15.1543 6.30844 15.0052C6.52031 14.3208 6.78141 13.6097 7.08637 12.8865C7.30339 13.3057 7.53024 13.7197 7.76672 14.1283C8.00991 14.5483 8.26172 14.9596 8.52028 15.3608ZM12.0398 18.2699C11.5538 17.7456 11.0692 17.1656 10.5958 16.5418C11.0554 16.5598 11.5238 16.569 12 16.569C12.4892 16.569 12.9728 16.558 13.4487 16.5368C12.9814 17.1719 12.5095 17.7527 12.0398 18.2699ZM16.9334 12.8495C17.2542 13.5808 17.5246 14.2881 17.7393 14.9608C17.0435 15.1196 16.2922 15.2475 15.5005 15.3424C15.7542 14.9403 15.9998 14.5331 16.2373 14.1212C16.4788 13.7025 16.7108 13.2785 16.9334 12.8495ZM15.3492 13.609C14.9857 14.2405 14.6017 14.8601 14.1979 15.4666C13.4664 15.5184 12.7333 15.5442 12 15.5438C11.2531 15.5438 10.5266 15.5205 9.82706 15.4752C9.41271 14.87 9.0214 14.2494 8.65397 13.6146C8.28827 12.9832 7.94677 12.3382 7.63003 11.6808C7.94597 11.0233 8.28652 10.378 8.65097 9.74611L8.65088 9.7462C9.01519 9.11416 9.40337 8.49618 9.81459 7.89361C10.5283 7.83961 11.2602 7.81148 11.9999 7.81148C12.743 7.81148 13.4759 7.83989 14.1894 7.89426C14.5965 8.49594 14.9822 9.11179 15.3458 9.74067C15.7115 10.3712 16.0566 11.0134 16.3805 11.6663C16.0599 12.3259 15.7159 12.9739 15.3492 13.609ZM17.4642 2.15986C18.2678 2.62336 18.5804 4.49245 18.0755 6.94355C18.0432 7.09992 18.007 7.2592 17.9677 7.42073C16.9718 7.19086 15.8906 7.01995 14.7586 6.91373C14.0992 5.97464 13.4158 5.12086 12.7298 4.38173C12.9096 4.20844 13.0937 4.03964 13.2818 3.87548C15.0537 2.33358 16.7097 1.72476 17.4642 2.15986ZM12 9.51323C13.1836 9.51323 14.1431 10.4728 14.1431 11.6564C14.1431 12.84 13.1836 13.7995 12 13.7995C10.8164 13.7995 9.85687 12.84 9.85687 11.6564C9.85687 10.4728 10.8164 9.51323 12 9.51323Z"
			/>
		</svg>
	),
	hardhat: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.998 18.8592V17.6949C23.998 17.4783 23.6337 17.2714 22.9798 17.0857L22.9957 15.6355C22.9957 15.2035 22.9698 14.7735 22.9186 14.3477C22.672 12.2811 21.8315 10.3199 20.4854 8.70864C19.2396 7.21159 17.6142 6.06852 15.7726 5.40374L15.7259 5.11313C15.7017 4.95745 15.6336 4.81191 15.5296 4.69356C15.4251 4.57476 15.2892 4.48786 15.1375 4.44288C13.1066 3.85237 10.9495 3.85237 8.91857 4.44288C8.76604 4.48762 8.62987 4.57423 8.52498 4.69308C8.42057 4.81144 8.35177 4.95675 8.32771 5.11265L8.28296 5.38354C6.15723 6.13903 4.31567 7.5307 3.00854 9.36943C1.70777 11.1999 1.00844 13.3895 1.00741 15.635V17.0915C0.362665 17.2767 0.00324208 17.4812 0.00324208 17.6958V18.8607C-0.00717631 18.929 0.00770837 18.9988 0.0451026 19.057L0.0513763 19.0524C0.575786 19.8245 5.72811 20.6335 12.0036 20.6335C18.2899 20.6335 23.4464 19.8189 23.9574 19.0491L23.9555 19.0474C23.9908 18.9914 24.0058 18.925 23.998 18.8592ZM14.5728 11.7624L12.001 7.42188L9.42871 11.7624L12.001 13.3425L14.5728 11.7624ZM14.5728 12.6184L12.001 14.2028L9.42871 12.6211L12.001 16.267L14.5728 12.6184Z"
			/>
		</svg>
	),
	astro: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M15.9359 0.599803C16.1314 0.842557 16.2311 1.1701 16.4305 1.82518L20.7869 16.136C19.1506 15.2868 17.3943 14.6922 15.5786 14.3727L12.7422 4.78741C12.7195 4.71096 12.6728 4.64389 12.6089 4.59623C12.5449 4.54857 12.4673 4.52288 12.3876 4.52301C12.3079 4.52313 12.2303 4.54906 12.1665 4.59693C12.1028 4.64479 12.0562 4.712 12.0338 4.78852L9.23174 14.3679C7.40788 14.6859 5.64351 15.2814 4 16.1338L8.3777 1.82184C8.57777 1.16793 8.67784 0.840918 8.87338 0.598623C9.046 0.384734 9.27054 0.218625 9.52557 0.116131C9.81443 0 10.1564 0 10.8403 0H13.967C14.6518 0 14.9942 0 15.2833 0.116328C15.5386 0.21907 15.7632 0.385526 15.9358 0.599803H15.9359Z"
			/>
			<path
				fill="currentColor"
				d="M16.4575 16.8171C15.7393 17.4311 14.3058 17.8499 12.6547 17.8499C10.6282 17.8499 8.92965 17.2191 8.47896 16.3706C8.31778 16.8568 8.28165 17.4134 8.28165 17.7689C8.28165 17.7689 8.17548 19.5147 9.38971 20.7289C9.38971 20.0984 9.90086 19.5873 10.5314 19.5873C11.612 19.5873 11.6107 20.5301 11.6098 21.295L11.6097 21.3633C11.6097 22.5242 12.3192 23.5195 13.3284 23.939C13.1731 23.6193 13.0926 23.2684 13.0931 22.913C13.0931 21.8057 13.7432 21.3934 14.4987 20.9143C15.0998 20.533 15.7677 20.1094 16.228 19.2597C16.4759 18.802 16.6053 18.2895 16.6045 17.7689C16.6045 17.4371 16.553 17.1173 16.4575 16.8171Z"
			/>
		</svg>
	),
	nextJS: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM19.9344 21.0026L16.6718 16.8H16.9334V7.19998H15.3333V15.076L9.21889 7.19998H7.19998V16.7959H8.81511V9.25123L18.6665 21.9793C19.1104 21.6822 19.5339 21.3559 19.9344 21.0026Z"
			/>
		</svg>
	),
	payload: (props: IconProps) => (
		<svg role="img" viewBox="0 0 24 24" {...props}>
			<path
				d="M34.7441 23H37.2741V16.33H41.5981C44.7031 16.33 46.9801 14.904 46.9801 11.454C46.9801 8.004 44.7031 6.555 41.5981 6.555H34.7441V23ZM37.2741 14.145V8.74H41.4831C43.3921 8.74 44.3581 9.591 44.3581 11.454C44.3581 13.294 43.3921 14.145 41.4831 14.145H37.2741ZM51.3652 23.322C53.2742 23.322 54.6082 22.563 55.3672 21.344H55.4132C55.5512 22.678 56.1492 23.115 57.2762 23.115C57.6442 23.115 58.0352 23.069 58.4262 22.977V21.597C58.2882 21.62 58.2192 21.62 58.1502 21.62C57.7132 21.62 57.5982 21.183 57.5982 20.332V14.95C57.5982 11.914 55.6662 10.902 53.2512 10.902C49.6632 10.902 48.1912 12.673 48.0762 14.927H50.3762C50.4912 13.363 51.1122 12.719 53.1592 12.719C54.8842 12.719 55.3902 13.432 55.3902 14.283C55.3902 15.433 54.2632 15.663 52.4232 16.008C49.5022 16.56 47.5242 17.342 47.5242 19.964C47.5242 21.965 49.0192 23.322 51.3652 23.322ZM49.8702 19.803C49.8702 18.584 50.7442 18.009 52.8142 17.595C54.0102 17.342 55.0222 17.089 55.3902 16.744V18.423C55.3902 20.47 53.8952 21.505 51.8712 21.505C50.4682 21.505 49.8702 20.907 49.8702 19.803ZM61.4996 27.117C63.3166 27.117 64.4436 26.174 65.5706 23.276L70.2166 11.27H67.8476L64.6276 20.24H64.5816L61.1546 11.27H58.6936L63.4316 22.885C62.9716 24.725 61.9136 25.185 61.0166 25.185C60.6486 25.185 60.4416 25.162 60.0506 25.116V26.956C60.6486 27.071 60.9936 27.117 61.4996 27.117ZM71.5939 23H73.8479V6.555H71.5939V23ZM81.622 23.345C85.279 23.345 87.487 20.792 87.487 17.112C87.487 13.455 85.279 10.902 81.645 10.902C77.965 10.902 75.757 13.478 75.757 17.135C75.757 20.815 77.965 23.345 81.622 23.345ZM78.103 17.135C78.103 14.674 79.207 12.788 81.645 12.788C84.037 12.788 85.141 14.674 85.141 17.135C85.141 19.573 84.037 21.482 81.645 21.482C79.207 21.482 78.103 19.573 78.103 17.135ZM92.6484 23.322C94.5574 23.322 95.8914 22.563 96.6504 21.344H96.6964C96.8344 22.678 97.4324 23.115 98.5594 23.115C98.9274 23.115 99.3184 23.069 99.7094 22.977V21.597C99.5714 21.62 99.5024 21.62 99.4334 21.62C98.9964 21.62 98.8814 21.183 98.8814 20.332V14.95C98.8814 11.914 96.9494 10.902 94.5344 10.902C90.9464 10.902 89.4744 12.673 89.3594 14.927H91.6594C91.7744 13.363 92.3954 12.719 94.4424 12.719C96.1674 12.719 96.6734 13.432 96.6734 14.283C96.6734 15.433 95.5464 15.663 93.7064 16.008C90.7854 16.56 88.8074 17.342 88.8074 19.964C88.8074 21.965 90.3024 23.322 92.6484 23.322ZM91.1534 19.803C91.1534 18.584 92.0274 18.009 94.0974 17.595C95.2934 17.342 96.3054 17.089 96.6734 16.744V18.423C96.6734 20.47 95.1784 21.505 93.1544 21.505C91.7514 21.505 91.1534 20.907 91.1534 19.803ZM106.181 23.322C108.021 23.322 109.148 22.448 109.792 21.62H109.838V23H112.092V6.555H109.838V12.696H109.792C109.148 11.776 108.021 10.925 106.181 10.925C103.191 10.925 100.914 13.271 100.914 17.135C100.914 20.999 103.191 23.322 106.181 23.322ZM103.26 17.135C103.26 14.835 104.341 12.811 106.549 12.811C108.573 12.811 109.815 14.467 109.815 17.135C109.815 19.78 108.573 21.459 106.549 21.459C104.341 21.459 103.26 19.435 103.26 17.135Z"
				fill="currentColor"
			></path>
			<g clipPath="url(#clip0_102_1302)">
				<g clipPath="url(#clip1_102_1302)">
					<path
						d="M12.2462 2.33875L22.2869 8.83849V21.1755L14.7263 25.8858V13.5488L4.67358 7.05762L12.2462 2.33875Z"
						fill="currentColor"
					></path>
					<path
						d="M11.4765 25.2018V15.5748L3.8999 20.2937L11.4765 25.2018Z"
						fill="currentColor"
					></path>
				</g>
			</g>
			<path
				d="M120.441 6.30297C119.086 6.30297 117.998 7.30002 117.998 8.75976C117.998 10.2065 119.086 11.197 120.441 11.197C121.79 11.197 122.879 10.2065 122.879 8.75976C122.879 7.30002 121.79 6.30297 120.441 6.30297ZM120.441 10.7604C119.34 10.7604 118.48 9.95231 118.48 8.75976C118.48 7.54766 119.34 6.73959 120.441 6.73959C121.562 6.73959 122.396 7.54766 122.396 8.75976C122.396 9.95231 121.562 10.7604 120.441 10.7604ZM120.52 8.97481L121.047 9.96534H121.64L121.041 8.86402C121.367 8.72066 121.51 8.45999 121.51 8.17326C121.51 7.49552 121.054 7.36519 120.285 7.36519H119.49V9.96534H120.024V8.97481H120.52ZM120.37 7.78877C120.728 7.78877 120.976 7.86697 120.976 8.17977C120.976 8.43392 120.806 8.56426 120.402 8.56426H120.024V7.78877H120.37Z"
				fill="currentColor"
			></path>
			<defs>
				<clipPath id="clip0_102_1302">
					<rect width="26" height="28" fill="white" transform="translate(0 0.685791)"></rect>
				</clipPath>
				<clipPath id="clip1_102_1302">
					<rect
						width="18.2"
						height="25.2"
						fill="white"
						transform="translate(3.8999 0.685791)"
					></rect>
				</clipPath>
			</defs>
		</svg>
	)
};
