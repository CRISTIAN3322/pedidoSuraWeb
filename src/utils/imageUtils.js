/**
 * Utilidades para manejo de imágenes de productos (versión cliente)
 * Soporta múltiples formatos: JPG, JPEG, PNG, GIF, WEBP, SVG, BMP, ICO
 */

// Clave para almacenar imágenes en localStorage
const IMAGES_STORAGE_KEY = 'productImages';

// Formatos de imagen permitidos
const ALLOWED_FORMATS = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'image/bmp',
    'image/x-icon'
];

// Tamaño máximo de archivo (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

/**
 * Valida si un archivo es una imagen válida
 */
export function isValidImageFile(file) {
    // Validar tipo MIME
    if (!ALLOWED_FORMATS.includes(file.type)) {
        return {
            valid: false,
            error: `Formato no permitido. Formatos soportados: JPG, JPEG, PNG, GIF, WEBP, SVG, BMP, ICO`
        };
    }

    // Validar tamaño
    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            error: `El archivo es demasiado grande. Tamaño máximo: ${MAX_FILE_SIZE / (1024 * 1024)}MB`
        };
    }

    return { valid: true };
}

/**
 * Convierte un archivo a base64
 */
export function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Error al leer el archivo'));
            }
        };
        reader.onerror = () => reject(new Error('Error al leer el archivo'));
        reader.readAsDataURL(file);
    });
}

/**
 * Obtiene todas las imágenes de productos
 */
export function getAllProductImages() {
    try {
        const stored = localStorage.getItem(IMAGES_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
        return {};
    }
}

/**
 * Obtiene la imagen de un producto
 */
export function getProductImage(productId) {
    try {
        const images = getAllProductImages();
        return images[String(productId)] || null;
    } catch (error) {
        console.error('Error al obtener imagen:', error);
        return null;
    }
}

/**
 * Guarda una imagen asociada a un producto
 */
export function saveProductImage(productId, imageData) {
    try {
        const images = getAllProductImages();
        images[String(productId)] = {
            ...imageData,
            uploadedAt: imageData.uploadedAt || new Date().toISOString()
        };
        localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(images));
    } catch (error) {
        console.error('Error al guardar imagen:', error);
        throw new Error('No se pudo guardar la imagen');
    }
}

/**
 * Elimina la imagen de un producto
 */
export function removeProductImage(productId) {
    try {
        const images = getAllProductImages();
        delete images[String(productId)];
        localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(images));
    } catch (error) {
        console.error('Error al eliminar imagen:', error);
        throw new Error('No se pudo eliminar la imagen');
    }
}

/**
 * Obtiene la URL de imagen para un producto (prioriza imágenes cargadas, luego la del JSON)
 */
export function getProductImageUrl(productId, defaultImage) {
    // Primero intentar obtener imagen cargada
    const uploadedImage = getProductImage(productId);
    if (uploadedImage?.base64) {
        return uploadedImage.base64;
    }

    // Si no hay imagen cargada, usar la del JSON
    if (defaultImage) {
        // Normalizar ruta relativa
        if (defaultImage.startsWith('../')) {
            return defaultImage.replace('../', '/');
        }
        if (!defaultImage.startsWith('/') && !defaultImage.startsWith('http') && !defaultImage.startsWith('data:')) {
            return '/' + defaultImage;
        }
        return defaultImage;
    }

    // Imagen por defecto (placeholder)
    return 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'140\'%3E%3Crect width=\'120\' height=\'140\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23999\' font-size=\'12\'%3ESin imagen%3C/text%3E%3C/svg%3E';
}

