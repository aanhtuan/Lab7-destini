# Lab 07 - Destini

Sinh viên: **Nguyễn Anh Tuấn**  
MSSV: **23IT297**  
Lớp: **23SE2**  

---

## 1. Mục tiêu Lab
Xây dựng ứng dụng truyện tương tác phiêu lưu (Choose Your Own Adventure), thực hành mô hình dữ liệu có cấu trúc phân nhánh cây (Decision Tree / Branching Narrative), quản lý chuyển đổi State bằng ID thay vì hardcode chuỗi điều kiện phức tạp.

## 2. Công nghệ sử dụng
- **React Native** (v0.86.3)
- **TypeScript**
- **Expo SDK** (~57.0.25)
- **Expo Status Bar**
- React Hooks: `useState`
- Các component cơ bản: `View`, `Text`, `ScrollView`, `Pressable`, `StyleSheet`

## 3. Cách tổ chức StoryNode
Dữ liệu câu chuyện được mô hình hóa hướng dữ liệu (Data-driven) và tách biệt hoàn toàn khỏi component UI:
- **`src/types/story.ts`**:
  ```ts
  export interface StoryChoice {
    text: string;
    nextId: number;
  }

  export interface StoryNode {
    id: number;
    title: string;
    text: string;
    choice1?: StoryChoice;
    choice2?: StoryChoice;
    isEnding?: boolean;
    endingType?: 'victory' | 'mystery' | 'haven' | 'escape';
  }
  ```
- **`src/data/stories.ts`**:
  - Gồm 7 Story Nodes với 4 cái kết (Endings) độc đáo:
    - **Node 1 (Khởi đầu)**: *The Foggy Crossroads* -> Lựa chọn Leo lên tàn tích (Node 2) hoặc Xuống thung lũng (Node 3).
    - **Node 2 (Nhánh tàn tích)**: *The Ancient Temple* -> Cửa vòm mặt trời (Node 4) hoặc Cửa vòm pha lê (Node 5).
    - **Node 3 (Nhánh thung lũng)**: *The Whispering Pines* -> Gõ cửa cabin (Node 6) hoặc Đi thuyền (Node 7).
    - **Node 4 (Ending 1 - Victory)**: *The Golden Sanctuary* (Huy hiệu vàng Sunstone).
    - **Node 5 (Ending 2 - Mystery)**: *The Cosmic Gateway* (Huy hiệu tím vũ trụ).
    - **Node 6 (Ending 3 - Haven)**: *The Ranger’s Haven* (Huy hiệu xanh lá ấm cúng).
    - **Node 7 (Ending 4 - Escape)**: *River to Freedom* (Huy hiệu xanh dương tự do).

## 4. Chức năng chính
- Hiển thị nội dung cốt truyện trong thẻ card lớn, hỗ trợ cuộn (`ScrollView`) mượt mà, không bao giờ tràn màn hình.
- Các nút lựa chọn:
  - **Choice 1**: Màu hổ phách (Amber `#D97706`).
  - **Choice 2**: Màu chàm huyền bí (Indigo `#4F46E5`).
- Khi đến bất kỳ Ending nào:
  - Tự động ẩn các nút lựa chọn rẽ nhánh.
  - Hiển thị huy hiệu Ending với màu sắc đặc trưng.
  - Hiển thị nút **RESTART STORY** (Màu lục bảo `#059669`) để quay lại chương đầu tiên.

## 5. Cách chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Khởi chạy ứng dụng:
```bash
npx expo start
```

- Nhấn phím `a` trên terminal để mở trực tiếp trên **Android Emulator**.
- Hoặc quét mã QR qua ứng dụng **Expo Go** trên thiết bị thật.
