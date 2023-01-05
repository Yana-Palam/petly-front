//  import styled from 'styled-components';
// import { device } from 'utils/device';

// export const NotBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(17, 17, 17, 0.6);
//   backdrop-filter: blur(10px);
// `;

// export const NotModal = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);

//   width: 90%;
//   max-height: 90%;
//   overflow: auto;
//   border-radius: 20px;
//   padding: 40px 20px;
//   background: #ffffff;

//   /* @media screen and (min-width: 480px) {
//     width: 480px;
//   } */
//   @media ${device.fablet} {
//     width: 480px;
//   }
//   /* @media screen and (min-width: 768px)  */
//   @media ${device.tablet} {
//     width: 608px;
//     border-radius: 40px;
//     padding: 40px 80px;
//     box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
//   }
// `;
// export const NotBtnClose = styled.button`
//   position: absolute;
//   top: 20px;
//   right: 20px;

//   width: 34px;
//   height: 34px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   border: none;
//   border-radius: 50%;

//   background-color: #fdf7f2;

//   @media screen and (min-width: 768px) {
//     width: 44px;
//     height: 44px;
//     top: 20px;
//     right: 20px;
//   }

//   @media screen and (min-width: 1280px) {
//     top: 24px;
//     right: 24px;
//   }
//   &:hover {
//     background-color: #f59256;
//   }
//   &:hover .iconClose {
//     fill: black;
//   }
// `;
// export const NotImgClose = styled.img`
//   width: 21px;
//   height: 21px;
// `;

// export const NotDescrBox = styled.div`
//   margin-bottom: 28px;

//   @media screen and (min-width: 768px) {
//     display: flex;
//   }
// `;

// export const NotThumbImage = styled.div`
//   position: relative;
//   width: 100%;
//   height: 240px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 16px;

//   @media screen and (min-width: 768px) {
//     width: 288px;
//     height: 328px;
//     margin-right: 20px;
//     margin-left: 0px;
//     margin-bottom: 0px;
//   }
// `;

// export const NotPhoto = styled.img`
//   display: block;
//   height: 100%;
//   width: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   border-radius: 0px 0px 40px 40px;
// `;

// export const NotCategory = styled.p`
//   position: absolute;
//   top: 20px;
//   left: 0;
//   width: 158px;
//   font-family: 'Manrope Medium';
//   font-size: 12px;
//   line-height: 1.25;
//   letter-spacing: 0.04em;
//   text-align: center;
//   background-color: rgba(255, 255, 255, 0.6);
//   color: #111111;
//   -webkit-backdrop-filter: blur(2px);
//   backdrop-filter: blur(2px);
//   border-radius: 0 40px 40px 0;

//   padding-top: 6px;
//   padding-bottom: 6px;
// `;

// export const NotTitle = styled.h2`
//   font-family: 'Manrope Bold';
//   font-size: 24px;
//   line-height: 1.38;
//   letter-spacing: -0.01em;
//   color: #111111;
//   margin-bottom: 16px;

//   @media screen and (min-width: 768px) {
//     max-width: 321px;
//     font-size: 28px;
//     line-height: 1.36;
//     margin-bottom: 20px;
//   }
// `;

// export const NotTable = styled.table`
//   font-family: 'Manrope Medium';
//   font-size: 14px;
//   line-height: 1.36;
//   color: #111111;

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.38;
//   }
// `;

// export const NotDescrTitle = styled.td`
//   width: 65px;
//   padding-right: 55px;
//   padding-top: 4px;
//   padding-bottom: 4px;

//   @media screen and (min-width: 768px) {
//     width: 70px;
//     padding-right: 50px;
//   }
// `;
// export const NotDescr = styled.td`
//   width: 100%;
//   padding-top: 4px;
//   padding-bottom: 4px;
//   word-break: break-all;
// `;

// export const NotDescrTitleAccent = styled(NotDescrTitle)`
//   font-family: 'Manrope SemiBold';
//   font-weight: 600;
// `;

// export const NotDescrTitleAccentFirst = styled(NotDescrTitleAccent)`
//   padding-top: 0px;
// `;

// export const NotDescrTitleAccentLast = styled(NotDescrTitleAccent)`
//   padding-bottom: 0px;
// `;

// export const NotComments = styled.span`
//   font-family: 'Manrope Medium';
//   font-size: 14px;
//   line-height: 1.36;
//   letter-spacing: 0.04em;
//   color: #111111;
//   margin-bottom: 40px;

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//     line-height: 1.5;
//     margin-bottom: 32px;
//   }
// `;

// export const NotCommentsDescr = styled.p`
//   /* composes: comments; */
//   font-family: 'Manrope SemiBold';
// `;

// export const NotBlockOfBtn = styled.div`
//   /* display: -webkit-box;
//   display: -ms-flexbox; */
//   display: flex;
//   flex-direction: column-reverse;

//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//     justify-content: right;
//   }
// `;

// export const NotBtn = styled.button`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Manrope Medium';
//   font-size: 16px;
//   line-height: 1.37;
//   letter-spacing: 0.04em;
//   color: #111111;
//   background-color: #ffffff;
//   border: 2px solid #f59256;
//   border-radius: 40px;
//   cursor: pointer;
//   padding-top: 9px;
//   padding-bottom: 9px;

//   @media screen and (min-width: 768px) {
//     width: 160px;
//   }

//   &:not(:last-child) {
//     @media screen and (min-width: 768px) {
//       margin-right: 12px;
//       margin-bottom: 0px;
//     }
//   }

//   /* &:not(:first-child) {
//     @media screen and (min-width: 480px) {
//       margin-bottom: 12px;
//     }
//   } */
// `;

// export const NotBtnAccent = styled(NotBtn)`
//   background-color: #f59256;
//   color: #ffffff;
// `;

// export const NotIconTitle = styled(NotBtn)`
//   margin-right: 8px;
// `;

// export const NotImgIcon = styled.img`
//   fill: #f59256;
//   width: 19px;
//   height: 19px;
//   margin-left: 5px;
// `;
