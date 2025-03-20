A **React-based QR Code Generator** that allows users to generate, download, and reset QR codes using the **qrcode** package. Includes real-time validation, error handling, and keyboard shortcuts.  

---

## **🌟 Features**
✅ **Generate QR Codes** from any valid URL  
✅ **Real-time Validation** (prevents empty inputs and shows error messages)  
✅ **Press Enter** to generate QR codes quickly  
✅ **Download QR Code** as a high-resolution PNG  
✅ **Clear Button** to reset the input and QR Code  
✅ **Styled Error Messages** for better user experience  

---

## **📷 Preview**  
![image](https://github.com/user-attachments/assets/fbf808a3-14c6-46a9-96d1-79f002c5216d)
![image](https://github.com/user-attachments/assets/2bbe59f2-5481-45dc-b907-786e37867039)

---

## **🛠️ Tech Stack**
- **React.js**  
- **qrcode** (for generating QR codes)  
- **CSS** (for styling)  

---

## **📦 Installation**
### **Step 1: Clone the Repository**
```sh
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Start the Development Server**
```sh
npm start
```
This will run the project at **`http://localhost:3000`**.

---

## **💡 How to Use**
1. **Enter a valid URL** in the input field.  
2. Click **"Generate"** or press **Enter** to create the QR Code.  
3. Click **"Download"** to save the QR Code as a PNG file.  
4. Click **"Clear"** to reset everything.  

---

## **⚙️ Folder Structure**
```
📂 qr-code-generator
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 QRCodeCard.jsx
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 App.css
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```
---

## **🎨 UI Enhancements**
- Improved **error messages** with styling (`mt-2 mb-1` class).  
- Custom **color styling** for the QR code (`#335383ff`).  
- Clean and responsive layout for a smooth user experience.  

---

## **🐛 Known Issues**
🔹 **If the URL is empty**, an error message appears for 5 seconds.  
🔹 **Invalid URLs** generate a placeholder QR Code.  

---

## **📜 License**
This project is **open-source** under the MIT License. Feel free to contribute! 🚀    
