import sharp from "sharp";
import fs from "fs";

// plugin => 함수 (필수)
export function watermarkPlugin() {
    const options = {
        test: "어니언",
        position: "center",
        color: "#ffffff",
        fontSize: 50,
    }; // 플러그인 옵션
    return {
        name: "vite-plugin-Image-watermark",
        // 플러그인 이름 (필수)
        async transform(src, id) {
            // src: 소스코드, id: 파일경로
            console.log("파일경로: ", id);

            if (!/\.(png|jpg|jpeg|gif|svg)$/.test(id)) {
                return;
            } // 이미지 파일이 아닌 경우 필터링

            try {
                const imageBuffer = fs.readFileSync(id);
                // 버퍼 객체를 반환

                const image = sharp(imageBuffer);
                // sharp 이미지 객체 생성

                const metadata = await image.metadata();
                // 동적으로 이미지 타입 감지
                const imageFormat = metadata.format;

                let processedImageBuffer;

                // 동적으로 이미지 타입 감지하여 처리
                if (metadata.format === "svg") {
                    // SVG는 텍스트로 처리
                    const svgContent = imageBuffer.toString("utf-8");
                    const watermarkElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${options.fontSize}" fill="${options.color}" font-family="sans-serif">${options.test}</text>`;
                    const modifiedSvg = svgContent.replace(
                        "</svg>",
                        `${watermarkElement}</svg>`
                    );
                    processedImageBuffer = Buffer.from(modifiedSvg);

                    const base64Image = `data:image/svg+xml;base64,${processedImageBuffer.toString(
                        "base64"
                    )}`;
                    return {
                      name: "vite-plugin-Image-watermark",
                      // 플러그인 이름 (필수)
                      async transform(src, id) {
                          // src: 소스코드, id: 파일경로
                          console.log("파일경로: ", id);
              
                          if (!/\.(png|jpg|jpeg|gif|svg)$/.test(id)) {
                              return;
                          } // 이미지 파일이 아닌 경우 필터링
              
                          try {
                              const imageBuffer = fs.readFileSync(id);
                              // 버퍼 객체를 반환
              
                              const image = sharp(imageBuffer);
                              // sharp 이미지 객체 생성
              
                              const metadata = await image.metadata();
              
                              const svgText = 
                        <svg width="${metadata.width}" height="${metadata.height}">
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                                font-size="${mergedOptions.fontSize}" fill="${mergedOptions.color}" font-family="sans-serif">
                            ${options.text}
                          </text>
                        </svg>
                      ;
                              // 원본 이미지와 svg를 합성한 이미지 버퍼를 생성합니다.
                              const processedImageBuffer = await image
                                  .composite([{ input: Buffer.from(svgText) }])
                                  .toBuffer();
              
                              const base64Image = data: image/${
                                  metadata.format
                              };base64,${processedImageBuffer.toString("base64")};
              
                              return export default "${base64Image}";
                          } catch (error) {
                              console.error(error.message);
                          }
                      },
                  };
                  // 객체 반환 (필수)
              }