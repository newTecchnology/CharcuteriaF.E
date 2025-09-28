// Array de objetos con la lista de productos y sus unidades.
let products = [
    { name: "HUEVOS 1/2 ", unit: "UND" },
    { name: "CASABE", unit: "UND" },
    { name: "CHICHA GUARALAC 400GM", unit: "UND" },
    { name: "CHORIZO AHUMADO", unit: "KG" },
    { name: "CHULETA", unit: "KG" },
    { name: "CREMA DON EUSTOQUIO 500 GR", unit: "UND" },
    { name: "DIABLITO PLUMROSE", unit: "UND" },
    { name: "DULCE DE LECHE", unit: "UND" },
    { name: "GELATINA ARCOIRIS", unit: "UND" },
    { name: "GELATINA ARCOIRIS GRANDE", unit: "UND" },
    { name: "HELADO CHOCO MANI", unit: "UND" },
    { name: "HELADO CHOCO MANTECADO", unit: "UND" },
    { name: "HELADO CHOCO MOROCHO", unit: "UND" },
    { name: "HELADO CONO CHICLE", unit: "UND" },
    { name: "HELADO EXOTICO", unit: "UND" },
    { name: "HELADO MAX POLET", unit: "UND" },
    { name: "HELADO POLET FERRERO", unit: "UND" },
    { name: "HELADO SUPER CONO", unit: "UND" },
    { name: "HELADO TINITA", unit: "UND" },
    { name: "HELADOS FRESS", unit: "UND" },
    { name: "HUESO AHUMADO", unit: "KG" },
    { name: "JAMON AHUMADO", unit: "KG" },
    { name: "JAMON AREPERO", unit: "KG" },
    { name: "JAMON DE PAVO", unit: "KG" },
    { name: "JAMON ESPALDA ORST", unit: "KG" },
    { name: "JAMON ESPALDA VIGOR", unit: "KG" },
    { name: "JAMON PIERNA ARICHUNA", unit: "KG" },
    { name: "JAMON PIERNA FIESTA", unit: "KG" },
    { name: "JUGO GUARALAC 1.5ML", unit: "UND" },
    { name: "JUGO GUARALAC 400CC", unit: "UND" },
    { name: "JUGO GUARALAC 900CC", unit: "UND" },
    { name: "JUGO JUSTY 1.5L", unit: "UND" },
    { name: "LECHE PURISIMA COMPLETA", unit: "UND" },
    { name: "LECHE PURISIMA DESCREMADA", unit: "UND" },
    { name: "LECHE PURISIMA DESLACTOSADA", unit: "UND" },
    { name: "LECHE SAN SIMON", unit: "UND" },
    { name: "MARQUESAS", unit: "UND" },
    { name: "MASA GRANDE", unit: "UND" },
    { name: "MASAS PEQUEÑA", unit: "UND" },
    { name: "MAX POÑLET WHITE FERRERO", unit: "UND" },
    { name: "MINI SALCHICHAS FIESTA", unit: "UND" },
    { name: "MORTADELA ALIBAL 1/2KG", unit: "UND" },
    { name: "MORTADELA ALIBAL DE 1KG", unit: "UND" },
    { name: "MORTADELA ALPRO 400G", unit: "UND" },
    { name: "MORTADELA ALPRO 900G", unit: "UND" },
    { name: "MORTADELA ARICHUNA", unit: "UND" },
    { name: "MORTADELA BOLGNA 1/2KG", unit: "UND" },
    { name: "MORTADELA CARACAS 900G", unit: "KG" },
    { name: "MORTADELA ESPECIAL", unit: "KG" },
    { name: "MORTADELA EXTRA", unit: "KG" },
    { name: "MORTADELA PLUMROSE 1KG", unit: "UND" },
    { name: "MORTADELA PUNTA DEL MONTE 1/2KG", unit: "UND" },
    { name: "MORTADELA PUNTA DEL MONTE DE 1KG", unit: "UND" },
    { name: "MORTADELA TAPARA", unit: "KG" },
    { name: "NATILLA GUARALAC", unit: "UND" },
    { name: "NATILLA VEGA", unit: "UND" },
    { name: "PAN ARABE", unit: "UND" },
    { name: "PAN DE SANDWICH INTEGRAL", unit: "UND" },
    { name: "PAN DE SANDWICH NORMAL", unit: "UND" },
    { name: "QUESILLO ARCOIRIS", unit: "UND" },
    { name: "QUESO DE CABRA", unit: "KG" },
    { name: "QUESO AMARILLO", unit: "KG" },
    { name: "QUESO BLANCO", unit: "KG" },
    { name: "QUESO CREMA DE CABRA", unit: "UND" },
    { name: "QUESO CRINEJA", unit: "KG" },
    { name: "QUESO DE AÑO POTE", unit: "UND" },
    { name: "QUESO DE MANO POTE VERANO", unit: "UND" },
    { name: "QUESO GUAYANEZ", unit: "KG" },
    { name: "QUESO MOZZARELLA", unit: "KG" },
    { name: "QUESO MOZZARELLA PIEZA", unit: "KG" },
    { name: "QUESO PAISA", unit: "KG" },
    { name: "QUESO PECORINO", unit: "KG" },
    { name: "QUESO RAYADO", unit: "KG" },
    { name: "QUESO REQUESON", unit: "KG" },
    { name: "RECORTE CHULETA-TOCINETA", unit: "KG" },
    { name: "RECORTE VARIOS", unit: "KG" },
    { name: "REFRESCO GLUP 2L", unit: "UND" },
    { name: "REFRESCO PEPSI 1.5 LT", unit: "KG" },
    { name: "RICOTA CABRA BARAGUA", unit: "UND" },
    { name: "RICOTA DE CABRA", unit: "KG" },
    { name: "RICOTA POTE VERANO", unit: "UND" },
    { name: "SALCHICA POLACA", unit: "KG" },
    { name: "SALCHICHA DE POLLO ALPRO", unit: "KG" },
    { name: "SUERO GUARALAC", unit: "UND" },
    { name: "SUERO KASERO 850 ML", unit: "UND" },
    { name: "SUERO PICANTE", unit: "UND" },
    { name: "SUERO PICANTE PEQUE", unit: "UND" },
    { name: "SUERO VEGA 800ML", unit: "UND" },
    { name: "TOCINETA", unit: "KG" },
    { name: "YOGUR ARCOIRIS GRAND", unit: "UND" },
    { name: "YOGUR ARCOIRIS PEQ", unit: "UND" },
    { name: "YOGURT GUARALAC 400 ML", unit: "UND" },
    { name: "YOGURT NATURAL", unit: "UND" }
];

// Referencias a los elementos del DOM
const clientNameInput = document.getElementById('clientNameInput');
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const addedProductsList = document.getElementById('addedProductsList');
const printButton = document.getElementById('printButton');
const generateQrButton = document.getElementById('generateQrButton');
const scanButton = document.getElementById('scanButton');
const scannerInputContainer = document.getElementById('scannerInputContainer');
const scannerInput = document.getElementById('scannerInput');

// Elementos del DOM para la calculadora
const calculatorModal = document.getElementById('calculatorModal');
const calculatorTitle = document.getElementById('calculatorTitle');
const calculatorInput = document.getElementById('calculatorInput');
const calculatorButtons = document.querySelectorAll('#calculatorModal .calculator-button');
const closeCalculatorButton = document.getElementById('closeCalculatorButton');
const acceptButton = document.getElementById('acceptButton');

// Elementos del DOM para la mini-modal de unidades
const unitModal = document.getElementById('unitModal');
const unitModalProduct = document.getElementById('unitModalProduct');
const selectKgButton = document.getElementById('selectKgButton');
const selectGramosButton = document.getElementById('selectGramosButton');
const selectBsButton = document.getElementById('selectBsButton');
const selectLonjaButton = document.getElementById('selectLonjaButton');
const closeUnitModal = document.getElementById('closeUnitModal');
const unitOptions = [selectKgButton, selectGramosButton, selectBsButton, selectLonjaButton];
let selectedUnitIndex = 0;

// Elementos del DOM para el QR
const qrModal = document.getElementById('qrModal');
const closeQrModal = document.getElementById('closeQrModal');
const qrcodeContainer = document.getElementById('qrcode');

// Elementos del DOM para la impresión
const printOnlyContent = document.getElementById('printOnlyContent');
const printProductsList = document.getElementById('printProductsList');
const printClientName = document.getElementById('printClientName');

// Elementos del DOM para el escáner
const scannerModal = document.getElementById('scannerModal');
const closeScannerButton = document.getElementById('closeScannerButton');
const qrReaderContainer = document.getElementById('qr-reader');
let html5QrCode;

// Estado de la aplicación
let filteredProducts = [];
let selectedProductIndex = -1;
let addedProducts = [];
let currentProduct = null;
let currentUnit = null;
let currentNumericValue = 0;

/**
 * Renderiza la lista de productos en el DOM.
 * @param {Array<Object>} list La lista de productos a mostrar.
 * @param {number} selectedIndex El índice del producto resaltado.
 */
function renderProducts(list, selectedIndex) {
    // Limpia la lista actual
    productList.innerHTML = '';
    
    // Si la lista está vacía, muestra un mensaje
    if (list.length === 0 && searchInput.value.trim().length > 0) {
        productList.innerHTML = '<p class="text-center text-gray-500 italic">No se encontraron productos que coincidan con la búsqueda.</p>';
        return;
    }
    if (searchInput.value.trim().length === 0) {
        productList.innerHTML = '<p class="text-center text-gray-500 italic">Escribe para buscar un producto...</p>';
        return;
    }

    // Crea un fragmento de documento para un rendimiento eficiente
    const fragment = document.createDocumentFragment();

    list.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow-sm transition-transform duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer';
        
        // Agrega la clase de resaltado si el índice coincide
        if (index === selectedIndex) {
            productElement.classList.add('highlighted');
        }

        // Contenedor para el nombre y la unidad del producto
        const productInfoContainer = document.createElement('div');
        productInfoContainer.className = 'flex items-center space-x-2';

        // Nombre del producto
        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-gray-800 text-sm font-medium capitalize truncate';
        nameSpan.textContent = product.name.toLowerCase();
        
        // Unidad del producto
        const unitSpan = document.createElement('span');
        unitSpan.className = 'text-xs text-gray-500 font-semibold';
        unitSpan.textContent = `(${product.unit})`; // Muestra la unidad entre paréntesis

        productInfoContainer.appendChild(nameSpan);
        productInfoContainer.appendChild(unitSpan);

        productElement.appendChild(productInfoContainer);

        // Agrega un evento de clic para seleccionar el producto
        productElement.addEventListener('click', () => {
            openCalculator(product);
        });

        fragment.appendChild(productElement);
    });

    // Agrega todos los elementos a la vez
    productList.appendChild(fragment);

    // Asegura que el elemento resaltado esté visible en la pantalla
    if (selectedIndex !== -1) {
        const highlightedElement = productList.children[selectedIndex];
        if (highlightedElement) {
            // Usa scrollIntoView para desplazar el elemento a la vista
            highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

/**
 * Renderiza la lista de productos agregados en el DOM.
 */
function renderAddedProducts() {
    addedProductsList.innerHTML = '<h3 class="text-lg font-semibold text-gray-700">Productos Agregados:</h3>';
    
    if (addedProducts.length === 0) {
        addedProductsList.innerHTML += '<p class="text-center text-gray-500 italic">No hay productos agregados.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    addedProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        // Usamos flexbox para alinear el nombre a la izquierda y la cantidad a la derecha
        productElement.className = 'flex justify-between items-center bg-blue-100 p-3 rounded-xl shadow-sm';
        
        // Contenedor para el nombre del producto
        const productInfoContainer = document.createElement('div');
        productInfoContainer.className = 'flex items-center space-x-2';
        
        // Nombre del producto con la fuente Blinker
        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-blue-800 text-sm font-bold capitalize truncate'; // Cambiado a font-bold para que coincida con la fuente Blinker
        nameSpan.textContent = product.name.toLowerCase();
        
        productInfoContainer.appendChild(nameSpan);
        
        // Cantidad con la unidad, ahora todo en un solo span y con la fuente Blinker
        const quantitySpan = document.createElement('span');
        quantitySpan.className = 'text-blue-600 text-xs font-bold'; // Cambiado a font-bold para que coincida con la fuente Blinker
        if (product.quantity) {
           quantitySpan.textContent = `(${product.quantity} ${product.unit})`;
        }

        // Contenedor para el botón de eliminar
        const actionContainer = document.createElement('div');
        actionContainer.className = 'flex items-center space-x-2';

        // Botón de eliminar con el SVG
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button text-red-500 hover:text-red-700';
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>`;
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic se propague al elemento padre
            removeProduct(index);
        });
        
        actionContainer.appendChild(quantitySpan);
        actionContainer.appendChild(deleteButton);

        productElement.appendChild(productInfoContainer);
        productElement.appendChild(actionContainer);
        
        // Agrega un evento de clic para editar el producto
        productElement.addEventListener('click', () => {
            openCalculatorForEdit(index);
        });
        
        fragment.appendChild(productElement);
    });

    addedProductsList.appendChild(fragment);
}

/**
 * Filtra la lista de productos basada en el texto de búsqueda.
 */
function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Filtra los productos que coinciden con el término de búsqueda
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    // Reinicia el índice seleccionado
    selectedProductIndex = filteredProducts.length > 0 ? 0 : -1;

    // Renderiza la lista filtrada
    renderProducts(filteredProducts, selectedProductIndex);
}

/**
 * Elimina un producto de la lista de agregados.
 * @param {number} index El índice del producto a eliminar.
 */
function removeProduct(index) {
    addedProducts.splice(index, 1);
    renderAddedProducts();
    saveState(); // Guarda el estado después de eliminar
}

/**
 * Abre la modal de la calculadora para agregar un producto.
 * @param {Object} product El producto a agregar.
 */
function openCalculator(product) {
    currentProduct = { ...product }; // Clona el objeto para no modificar el original
    currentProduct.originalIndex = -1; // -1 indica que es un nuevo producto
    currentUnit = product.unit; // Usa la unidad por defecto del producto
    
    // Decide si mostrar la modal de unidad primero
    if (currentUnit === "KG") {
        openUnitModal(currentProduct.name);
        // La calculadora se abrirá en la función 'selectUnit'
    } else {
        // Abre directamente la calculadora con la unidad por defecto
        showCalculatorModal(currentProduct, 'Añadir');
        calculatorInput.value = '';
    }
}

/**
 * Abre la modal de la calculadora para editar un producto agregado.
 * @param {number} index El índice del producto en la lista `addedProducts`.
 */
function openCalculatorForEdit(index) {
    const productToEdit = addedProducts[index];
    currentProduct = { ...productToEdit };
    currentProduct.originalIndex = index; // Guarda el índice para actualizar

    currentUnit = productToEdit.unit; // Usa la unidad actual
    
    // Muestra el valor actual en la calculadora
    calculatorInput.value = productToEdit.quantity || '';
    
    // Cambia el texto del botón y abre la modal
    showCalculatorModal(currentProduct, 'Guardar');
}

/**
 * Muestra la modal de la calculadora con el producto y acción especificados.
 * @param {Object} product El objeto del producto.
 * @param {string} actionText El texto para el botón de aceptar (Añadir/Guardar).
 */
function showCalculatorModal(product, actionText) {
    // Título: Nombre del producto + Unidad actual
    calculatorTitle.textContent = `${product.name.toLowerCase()} (${currentUnit})`;
    
    // Configura el botón de aceptar
    acceptButton.textContent = actionText;

    // Mostrar la modal de la calculadora
    calculatorModal.style.display = 'flex';
}

/**
 * Cierra la modal de la calculadora.
 */
function closeCalculator() {
    calculatorModal.style.display = 'none';
    currentProduct = null;
    currentUnit = null;
    calculatorInput.value = '';
}

/**
 * Abre la mini-modal de unidades.
 * @param {string} productName El nombre del producto.
 */
function openUnitModal(productName) {
    unitModalProduct.textContent = `Selecciona la unidad para ${productName.toLowerCase()}:`;
    unitModal.style.display = 'flex';
    selectedUnitIndex = 0; // Reinicia la selección
    highlightUnitOption(selectedUnitIndex);
}

/**
 * Resalta la opción de unidad seleccionada.
 * @param {number} index El índice de la opción a resaltar.
 */
function highlightUnitOption(index) {
    unitOptions.forEach((button, i) => {
        button.classList.remove('unit-option-highlighted');
        if (i === index) {
            button.classList.add('unit-option-highlighted');
            button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

/**
 * Selecciona la unidad y abre la calculadora.
 * @param {string} unit La unidad seleccionada.
 */
function selectUnit(unit) {
    currentUnit = unit;
    unitModal.style.display = 'none';
    // Abre la calculadora con la unidad seleccionada
    showCalculatorModal(currentProduct, 'Añadir');
    calculatorInput.value = ''; // Limpia el valor anterior
}

/**
 * Maneja la entrada de la calculadora virtual.
 * @param {string} value El valor del botón presionado.
 */
function handleCalculatorInput(value) {
    let currentValue = calculatorInput.value;
    
    switch (value) {
        case 'C': // Limpiar
            currentValue = '';
            break;
        case '.':
            // Solo permite un punto decimal
            if (!currentValue.includes('.')) {
                currentValue += currentValue === '' ? '0.' : '.';
            }
            break;
        case 'DEL': // Eliminar el último caracter (no existe en el diseño actual, pero se incluye por si acaso)
            currentValue = currentValue.slice(0, -1);
            break;
        default: // Números
            // Evita múltiples ceros iniciales si no hay punto decimal
            if (currentValue === '0' && value !== '.') {
                currentValue = value;
            } else {
                currentValue += value;
            }
            // Limitar a dos decimales después del punto
            const parts = currentValue.split('.');
            if (parts.length > 1 && parts[1].length > 2) {
                currentValue = parts[0] + '.' + parts[1].substring(0, 2);
            }
            break;
    }

    calculatorInput.value = currentValue;
}

/**
 * Añade o guarda el producto con la cantidad ingresada.
 */
function addOrSaveProduct() {
    const quantity = parseFloat(calculatorInput.value);
    
    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    // Agrega la cantidad y la unidad al producto actual
    currentProduct.quantity = quantity.toFixed(2).replace(/\.00$/, ''); // Formatea a 2 decimales, elimina .00 si es entero
    currentProduct.unit = currentUnit;
    
    // Verifica si es una edición (originalIndex !== -1)
    if (currentProduct.originalIndex !== -1) {
        // Edita el producto existente
        addedProducts[currentProduct.originalIndex] = currentProduct;
    } else {
        // Agrega un nuevo producto
        addedProducts.push(currentProduct);
    }

    // Cierra la modal, limpia la búsqueda, renderiza la lista de
    closeCalculator();
    searchInput.value = '';
    filterProducts();
    renderAddedProducts();
    saveState(); // Guarda el estado
}

/**
 * Prepara y realiza la impresión del ticket.
 */
function printTicket() {
    if (addedProducts.length === 0) {
        alert('No hay productos agregados para imprimir.');
        return;
    }
    
    // 1. Actualizar el contenido de impresión
    printClientName.textContent = clientNameInput.value.trim() || 'CONSUMIDOR FINAL';
    printProductsList.innerHTML = ''; // Limpiar la lista de impresión

    addedProducts.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex justify-between items-center print-list-item text-sm py-1 border-b border-dashed border-gray-400';
        
        // Nombre del producto
        const nameSpan = document.createElement('span');
        nameSpan.className = 'print-content capitalize flex-1';
        nameSpan.textContent = product.name.toLowerCase();
        
        // Cantidad y Unidad
        const quantitySpan = document.createElement('span');
        quantitySpan.className = 'print-quantity ml-4';
        quantitySpan.textContent = `${product.quantity} ${product.unit}`;
        
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(quantitySpan);
        printProductsList.appendChild(itemDiv);
    });

    // 2. Realizar la impresión
    window.print();
}

/**
 * Genera el código QR con los datos de la lista de productos.
 */
function generateQr() {
    // 1. Recolectar datos
    const clientName = clientNameInput.value.trim() || 'Consumidor Final';
    const dataToEncode = {
        client: clientName,
        items: addedProducts.map(p => ({ 
            n: p.name, 
            q: p.quantity, 
            u: p.unit 
        }))
    };
    
    // Codificar a JSON y luego a base64 para una URL compacta (opcional, pero útil para QR)
    const jsonString = JSON.stringify(dataToEncode);
    // Para simplificar, simplemente codificaremos el JSON.
    
    // 2. Limpiar el contenedor anterior y generar el nuevo QR
    qrcodeContainer.innerHTML = '';
    
    try {
        new QRCode(qrcodeContainer, {
            text: jsonString,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        
        // 3. Mostrar la modal
        qrModal.style.display = 'flex';
    } catch (error) {
        alert("Error al generar el QR. Asegúrate de que los productos no excedan el límite de datos del QR.");
        console.error("QR Error:", error);
    }
}

/**
 * Inicializa el escáner de códigos de barra (usando html5-qrcode).
 */
function startScanner() {
    scannerModal.style.display = 'flex';

    if (!html5QrCode) {
        html5QrCode = new Html5Qrcode("qr-reader");
    }
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // Detener el escáner inmediatamente
        html5QrCode.stop().then((ignore) => {
            scannerModal.style.display = 'none';
            // Asignar el texto decodificado al input del escáner
            scannerInput.value = decodedText;
            // Opcionalmente, buscar el producto basado en el código escaneado
            // En este caso, el producto no tiene código de barras, así que simplemente lo insertamos.
            alert(`Código escaneado: ${decodedText}`);
            scannerInput.focus();
        }).catch((err) => {
            console.error("Error al detener el escáner:", err);
            scannerModal.style.display = 'none'; // Asegurarse de cerrar la modal
        });
    };
    
    const qrCodeErrorCallback = (errorMessage) => {
        // Este callback se llama constantemente, por lo que no mostramos el error al usuario.
    };

    const config = { 
        fps: 10, 
        qrbox: {width: 250, height: 250} 
    };

    // Iniciar el escáner con la cámara frontal por defecto
    html5QrCode.start(
        { facingMode: "environment" }, // Prioriza la cámara trasera
        config, 
        qrCodeSuccessCallback, 
        qrCodeErrorCallback
    )
    .catch((err) => {
        document.getElementById('qr-reader-error').textContent = `Error al iniciar la cámara: ${err}`;
        console.error("Error al iniciar el escáner:", err);
    });
}

/**
 * Detiene y cierra la modal del escáner.
 */
function closeScanner() {
    scannerModal.style.display = 'none';
    if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop().catch(err => console.error("Error al detener el escáner:", err));
    }
}

/**
 * Guarda el estado actual de la aplicación en localStorage.
 */
function saveState() {
    const state = {
        clientName: clientNameInput.value,
        addedProducts: addedProducts
    };
    localStorage.setItem('kreaByteListState', JSON.stringify(state));
}

/**
 * Carga el estado guardado de la aplicación desde localStorage.
 */
function loadState() {
    const savedState = localStorage.getItem('kreaByteListState');
    if (savedState) {
        const state = JSON.parse(savedState);
        clientNameInput.value = state.clientName || '';
        addedProducts = state.addedProducts || [];
    }
    renderAddedProducts();
    filterProducts();
}


// ---------------------------------------------------------------------
// INICIALIZACIÓN Y MANEJO DE EVENTOS
// ---------------------------------------------------------------------

// Cargar el estado al iniciar la aplicación
document.addEventListener('DOMContentLoaded', loadState);
// Iniciar la lista de búsqueda vacía
filterProducts();


// Eventos de búsqueda y cliente
searchInput.addEventListener('input', filterProducts);
clientNameInput.addEventListener('input', saveState);
scannerInput.addEventListener('input', (e) => {
    // Si el scanner input es manual y se presiona Enter, re-enfocar la búsqueda
    if (e.inputType === 'insertLineBreak') {
        searchInput.focus();
    }
});


// Eventos de la Calculadora
calculatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');
        if (value) {
            handleCalculatorInput(value);
        }
    });
});

closeCalculatorButton.addEventListener('click', closeCalculator);
acceptButton.addEventListener('click', addOrSaveProduct);
// Permitir también agregar/guardar con la tecla Enter desde el input de la calculadora
calculatorInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Evita el salto de línea en algunos navegadores
        addOrSaveProduct();
    }
});


// Eventos de la Mini-Modal de Unidades
selectKgButton.addEventListener('click', () => selectUnit('KG'));
selectGramosButton.addEventListener('click', () => selectUnit('Gramos'));
selectBsButton.addEventListener('click', () => selectUnit('Bs.'));
selectLonjaButton.addEventListener('click', () => selectUnit('Lonjas'));
closeUnitModal.addEventListener('click', () => unitModal.style.display = 'none');


// Eventos de Impresión y QR
printButton.addEventListener('click', printTicket);
generateQrButton.addEventListener('click', generateQr);
closeQrModal.addEventListener('click', () => qrModal.style.display = 'none');


// Eventos del Escáner
scanButton.addEventListener('click', startScanner);
closeScannerButton.addEventListener('click', closeScanner);

// ---------------------------------------------------------------------
// NAVEGACIÓN POR TECLADO
// ---------------------------------------------------------------------

document.addEventListener('keydown', (e) => {
    // Si la calculadora o la modal de unidad están abiertas, ignora la navegación principal.
    if (calculatorModal.style.display === 'flex' || unitModal.style.display === 'flex') {
        if (unitModal.style.display === 'flex') {
            // Manejo de flechas en modal de unidades
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const direction = e.key === 'ArrowDown' ? 1 : -1;
                selectedUnitIndex = (selectedUnitIndex + direction + unitOptions.length) % unitOptions.length;
                highlightUnitOption(selectedUnitIndex);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                selectUnit(unitOptions[selectedUnitIndex].textContent.trim());
            }
        }
        return; 
    }
    
    const isSearchFocused = document.activeElement === searchInput;
    
    if (isSearchFocused) {
        if (filteredProducts.length === 0) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            
            // Calcula el nuevo índice, asegurando el ciclo
            const direction = e.key === 'ArrowDown' ? 1 : -1;
            selectedProductIndex = (selectedProductIndex + direction);
            
            if (selectedProductIndex < 0) {
                selectedProductIndex = filteredProducts.length - 1;
            } else if (selectedProductIndex >= filteredProducts.length) {
                selectedProductIndex = 0;
            }

            renderProducts(filteredProducts, selectedProductIndex);

        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedProductIndex !== -1) {
                // Selecciona el producto resaltado
                openCalculator(filteredProducts[selectedProductIndex]);
            }
        }
    } else {
        // Enfoca el campo de búsqueda si se pulsa una tecla de producto
        if (e.key.length === 1 && /[a-zA-Z0-9]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
            searchInput.focus();
            // Permite que la tecla escriba en el input
        }
    }
});