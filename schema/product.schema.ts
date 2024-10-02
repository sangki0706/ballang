export interface Product {
    brand: {
      id: number;            // 브랜드 아이디
      nameKr: string;        // 한국어이름
      nameEn: string;        // 영어이름
    };
    id: number;              // ID
    name: string;            // 제품 이름
    brandId: number;         //브랜드 ID
    price: number;           // 할인된 가격
    originalPrice: number;   // 원래 가격
    imgSrc: string;          // 이미지 URL
    deliveryType: string;    //배송타입
    onlineStock: number;     //잔여 재고
}

