export interface Product {
    id: number;
    name: string;            // 제품 이름
    brand: {
      id: number;            // 브랜드 아이디
      nameKr: string;        // 한국어이름
      nameEn: string;        // 영어이름
    };
    price: number;           // 할인된 가격
    originalPrice: number;   // 원래 가격
    imgSrc: string;          // 이미지 URL
}