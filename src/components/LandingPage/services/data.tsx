export type servicesListT = {
  heading: string;
  details: string;
  svg: JSX.Element;
};
export const servicesList: servicesListT[] = [
  {
    heading: "Escape the stress of accommodation search",
    details:
      "Save yourself the hassles that come with searching for accommodation. On a phone or computer, check out various hostels and apartments with their features, information, location.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_1093_7468)">
          <path
            d="M14.872 0C11.06 0 7.24761 1.4496 4.34801 4.3484C-1.44999 10.1464 -1.44999 19.5972 4.34801 25.3952C9.77601 30.8228 18.388 31.142 24.2228 26.4064L25.6532 27.8368C25.5723 28.1277 25.5535 28.4076 25.5981 28.6571C25.6427 28.9066 25.7497 29.1198 25.9116 29.282L36.2924 39.6624C36.5892 39.9591 37.0513 40.0661 37.5772 39.9599C38.103 39.8537 38.6495 39.5429 39.0964 39.096C39.5433 38.649 39.854 38.1025 39.9601 37.5767C40.0663 37.0508 39.9592 36.5887 39.6624 36.292L29.2824 25.912C29.1202 25.7498 28.9069 25.6426 28.6571 25.5979C28.4074 25.5533 28.1272 25.5721 27.836 25.6532L26.4056 24.2228C31.1416 18.3876 30.8228 9.7756 25.3952 4.3484C22.4964 1.4496 18.684 0.0004 14.872 0.0004V0ZM14.872 3.2868C17.8308 3.2868 20.79 4.4204 23.0572 6.6876C24.135 7.76076 24.9903 9.03625 25.5739 10.4408C26.1575 11.8454 26.4579 13.3514 26.4579 14.8724C26.4579 16.3934 26.1575 17.8994 25.5739 19.304C24.9903 20.7086 24.135 21.984 23.0572 23.0572C21.9841 24.135 20.7086 24.9903 19.304 25.5739C17.8994 26.1575 16.3934 26.4579 14.8724 26.4579C13.3514 26.4579 11.8454 26.1575 10.4408 25.5739C9.03626 24.9903 7.76077 24.135 6.68761 23.0572C5.60978 21.984 4.75452 20.7086 4.17094 19.304C3.58735 17.8994 3.28694 16.3934 3.28694 14.8724C3.28694 13.3514 3.58735 11.8454 4.17094 10.4408C4.75452 9.03625 5.60978 7.76076 6.68761 6.6876C8.95481 4.4204 11.9132 3.2868 14.8716 3.2868H14.872Z"
            fill="#BC6C25"
          />
          <path
            d="M14.99 6.896C15.108 6.896 15.222 6.9396 15.3096 7.0184L22.8276 13.1128C23.1544 13.4052 22.9468 13.5712 22.5088 13.5708H20.5672V21.2748C20.5672 21.538 20.3536 21.7516 20.09 21.7516H9.89116C9.76459 21.7516 9.64322 21.7013 9.55372 21.6118C9.46423 21.5223 9.41395 21.401 9.41395 21.2744V13.5708H7.47235C7.03435 13.5712 6.82715 13.4052 7.15355 13.1128L14.6716 7.0184C14.7592 6.94 14.8724 6.8964 14.99 6.8964V6.896Z"
            fill="#BC6C25"
          />
        </g>
        <defs>
          <clipPath id="clip0_1093_7468">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    heading: "Verified accomodation listings",
    details:
      "All listings have been verified by us to be legitimate. You are encouraged to verify and see the accomodation yourself before proceeding with payment.",

    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.175 36.8001H20.95L25.25 32.5001H31.25L32.5 31.2501V25.2001L36.85 20.9001V19.1251L32.575 14.8251V8.7251L31.325 7.5001H25.25L20.95 3.2251H19.175L15 7.5001H8.82502L7.50002 8.7501V14.8251L3.27502 19.1251V20.9001L7.50002 25.2001V31.2501L8.82502 32.5001H15L19.175 36.8001ZM15.4 30.0001H10V24.6751L9.70002 23.8001L5.92502 20.0001L9.62502 16.2251L10 15.3501V10.0001H15.4L16.3 9.6501L20 5.8751L23.85 9.6501L24.725 10.0001H30V15.3501L30.425 16.2251L34.225 20.0001L30.35 23.8001L30 24.6751V30.0001H24.725L23.775 30.3751L20 34.1501L16.3 30.3501L15.4 30.0001ZM16.825 26.2001H18.6L28.025 16.7751L26.25 15.0001L17.725 23.5501L14.275 20.1001L12.5 21.8751L16.825 26.2001Z"
          fill="#BC6C25"
        />
      </svg>
    ),
  },
  {
    heading: "Direct contact with owners/agents",
    details:
      "Information and contact of the agents/owners are listed along with the accommodation. We do not provide third party services between you and the owners, nor serve as middlemen.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M32.9167 6.66675C33.9113 6.66675 34.8651 7.06184 35.5684 7.7651C36.2716 8.46836 36.6667 9.42219 36.6667 10.4167V29.5917C36.6667 30.5863 36.2716 31.5401 35.5684 32.2434C34.8651 32.9467 33.9113 33.3417 32.9167 33.3417H7.08337C6.59092 33.3417 6.10328 33.2448 5.64831 33.0563C5.19334 32.8678 4.77994 32.5916 4.43172 32.2434C4.0835 31.8952 3.80728 31.4818 3.61883 31.0268C3.43037 30.5718 3.33337 30.0842 3.33337 29.5917V10.4167C3.33337 9.42219 3.72846 8.46836 4.43172 7.7651C5.13498 7.06184 6.08881 6.66675 7.08337 6.66675H32.9167ZM32.9167 9.16675H7.08337C6.75185 9.16675 6.43391 9.29844 6.19949 9.53286C5.96507 9.76728 5.83337 10.0852 5.83337 10.4167V29.5917C5.83337 30.2817 6.39337 30.8417 7.08337 30.8417H32.9167C33.2482 30.8417 33.5662 30.7101 33.8006 30.4756C34.035 30.2412 34.1667 29.9233 34.1667 29.5917V10.4167C34.1667 10.0852 34.035 9.76728 33.8006 9.53286C33.5662 9.29844 33.2482 9.16675 32.9167 9.16675ZM16.25 20.8334C16.5816 20.8334 16.8995 20.9651 17.1339 21.1995C17.3683 21.434 17.5 21.7519 17.5 22.0834V22.9051L17.4867 23.0851C17.215 24.9401 15.6634 25.8351 13.3334 25.8351C11.0034 25.8351 9.45004 24.9401 9.18004 23.0851L9.16671 22.9017V22.0834C9.16671 21.7519 9.2984 21.434 9.53282 21.1995C9.76724 20.9651 10.0852 20.8334 10.4167 20.8334H16.25ZM22.0867 21.6601H29.5834C29.9001 21.6602 30.2049 21.7805 30.4364 21.9967C30.6678 22.2129 30.8085 22.5089 30.8301 22.8249C30.8517 23.1409 30.7525 23.4532 30.5527 23.6989C30.3528 23.9446 30.0671 24.1052 29.7534 24.1484L29.5834 24.1601H22.0867C21.77 24.16 21.4651 24.0397 21.2337 23.8235C21.0023 23.6072 20.8616 23.3113 20.84 22.9953C20.8184 22.6793 20.9176 22.3669 21.1174 22.1213C21.3173 21.8756 21.603 21.7149 21.9167 21.6717L22.0867 21.6601H29.5834H22.0867ZM13.3334 14.1701C13.9964 14.1701 14.6323 14.4335 15.1011 14.9023C15.57 15.3712 15.8334 16.007 15.8334 16.6701C15.8334 17.3331 15.57 17.969 15.1011 18.4378C14.6323 18.9067 13.9964 19.1701 13.3334 19.1701C12.6703 19.1701 12.0344 18.9067 11.5656 18.4378C11.0968 17.969 10.8334 17.3331 10.8334 16.6701C10.8334 16.007 11.0968 15.3712 11.5656 14.9023C12.0344 14.4335 12.6703 14.1701 13.3334 14.1701ZM22.0867 15.8334H29.5834C29.9001 15.8335 30.2049 15.9538 30.4364 16.17C30.6678 16.3862 30.8085 16.6822 30.8301 16.9982C30.8517 17.3142 30.7525 17.6266 30.5527 17.8722C30.3528 18.1179 30.0671 18.2786 29.7534 18.3217L29.5834 18.3334H22.0867C21.77 18.3333 21.4651 18.213 21.2337 17.9968C21.0023 17.7806 20.8616 17.4846 20.84 17.1686C20.8184 16.8526 20.9176 16.5403 21.1174 16.2946C21.3173 16.0489 21.603 15.8883 21.9167 15.8451L22.0867 15.8334H29.5834H22.0867Z"
          fill="#BC6C25"
        />
      </svg>
    ),
  },
  {
    heading: "Exclusive to the University environs",
    details:
      "This service is available only to students of the University, or people in the environment. Accommodation listings are limited to the Akoka/Yaba/Bariga axis. ",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M28.75 27.394L20 32.3159L11.25 27.394V22.1938L8.75 20.8049V28.856L20 35.1841L31.25 28.856V20.8049L28.75 22.1938V27.394Z"
          fill="#BC6C25"
        />
        <path
          d="M20 3.59204L2.5 12.6661V14.8328L20 24.5548L35 16.2217V23.1251H37.5V12.6661L20 3.59204ZM32.5 14.7507L30 16.1395L20 21.6954L10 16.1395L7.5 14.7507L5.76727 13.7881L20 6.40813L34.2327 13.7881L32.5 14.7507Z"
          fill="#BC6C25"
        />
      </svg>
    ),
  },
];
