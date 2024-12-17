// Image validation utilities
export interface ImageValidationResult {
  isValid: boolean;
  width: number;
  height: number;
  error?: string;
}

export async function validateImage(url: string): Promise<ImageValidationResult> {
  try {
    const img = new Image();
    const loadPromise = new Promise<ImageValidationResult>((resolve, reject) => {
      img.onload = () => resolve({
        isValid: true,
        width: img.width,
        height: img.height
      });
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });

    img.src = url;
    return await loadPromise;
  } catch (error) {
    console.error(`Image validation failed for ${url}:`, error);
    return {
      isValid: false,
      width: 0,
      height: 0,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}