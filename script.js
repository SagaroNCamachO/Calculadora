// Estado de la aplicación
let budget = 7000000;
let items = [];

// Formatear número como moneda chilena
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(amount);
}

// Cargar datos del localStorage
function loadData() {
    const savedBudget = localStorage.getItem('weddingBudget');
    const savedItems = localStorage.getItem('weddingItems');
    
    if (savedBudget) {
        budget = parseFloat(savedBudget);
        document.getElementById('budget-input').value = budget;
    }
    
    if (savedItems) {
        items = JSON.parse(savedItems);
        renderItems();
    }
    
    updateSummary();
}

// Guardar datos en localStorage
function saveData() {
    localStorage.setItem('weddingBudget', budget.toString());
    localStorage.setItem('weddingItems', JSON.stringify(items));
}

// Actualizar resumen financiero
function updateSummary() {
    const totalSpent = items.reduce((sum, item) => sum + (item.payment || 0), 0);
    const totalPending = items.reduce((sum, item) => sum + (item.price - (item.payment || 0)), 0);
    const budgetRemaining = budget - totalSpent;
    const percentageUsed = budget > 0 ? (totalSpent / budget) * 100 : 0;

    document.querySelector('.budget-total').textContent = formatCurrency(budget);
    document.querySelector('.total-spent').textContent = formatCurrency(totalSpent);
    document.querySelector('.total-pending').textContent = formatCurrency(totalPending);
    document.querySelector('.budget-remaining').textContent = formatCurrency(budgetRemaining);
    
    // Actualizar barra de progreso
    const progressFill = document.getElementById('budget-progress');
    progressFill.style.width = `${Math.min(percentageUsed, 100)}%`;
    document.getElementById('budget-percentage').textContent = `${percentageUsed.toFixed(1)}%`;
    
    // Cambiar color de la barra según el porcentaje
    if (percentageUsed > 90) {
        progressFill.style.background = 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)';
    } else if (percentageUsed > 70) {
        progressFill.style.background = 'linear-gradient(90deg, #f39c12 0%, #e67e22 100%)';
    } else {
        progressFill.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
    }
    
    // Cambiar color del presupuesto restante si es negativo
    const remainingElement = document.querySelector('.budget-remaining');
    if (budgetRemaining < 0) {
        remainingElement.style.color = '#e74c3c';
    } else {
        remainingElement.style.color = '';
    }
}

// Renderizar items
function renderItems() {
    const container = document.getElementById('items-container');
    
    if (items.length === 0) {
        container.innerHTML = '<p class="empty-message">No hay items agregados aún. Agrega tu primer item arriba.</p>';
        return;
    }
    
    container.innerHTML = items.map((item, index) => {
        const pending = item.price - (item.payment || 0);
        const paymentPercentage = item.price > 0 ? ((item.payment || 0) / item.price * 100).toFixed(0) : 0;
        
        return `
            <div class="item-card">
                <div class="item-name">${item.name}</div>
                <div class="item-price">
                    <span class="label">Precio Total</span>
                    <span class="value">${formatCurrency(item.price)}</span>
                </div>
                <div class="item-payment">
                    <span class="label">Abono (${paymentPercentage}%)</span>
                    <span class="value">${formatCurrency(item.payment || 0)}</span>
                </div>
                <div class="item-pending">
                    <span class="label">Pendiente</span>
                    <span class="value">${formatCurrency(pending)}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-edit" onclick="editItem(${index})">Editar</button>
                    <button class="btn-delete" onclick="deleteItem(${index})">Eliminar</button>
                </div>
            </div>
        `;
    }).join('');
}

// Agregar nuevo item
function addItem(name, price, payment) {
    items.push({
        name: name.trim(),
        price: parseFloat(price),
        payment: parseFloat(payment) || 0
    });
    
    saveData();
    renderItems();
    updateSummary();
}

// Editar item
function editItem(index) {
    const item = items[index];
    
    const newName = prompt('Nombre del item:', item.name);
    if (newName === null) return;
    
    const newPrice = prompt('Precio total (CLP):', item.price);
    if (newPrice === null) return;
    
    const newPayment = prompt('Abono realizado (CLP):', item.payment || 0);
    if (newPayment === null) return;
    
    items[index] = {
        name: newName.trim(),
        price: parseFloat(newPrice),
        payment: parseFloat(newPayment) || 0
    };
    
    saveData();
    renderItems();
    updateSummary();
}

// Eliminar item
function deleteItem(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este item?')) {
        items.splice(index, 1);
        saveData();
        renderItems();
        updateSummary();
    }
}

// Event Listeners
document.getElementById('update-budget-btn').addEventListener('click', () => {
    const newBudget = parseFloat(document.getElementById('budget-input').value);
    if (newBudget >= 0) {
        budget = newBudget;
        saveData();
        updateSummary();
        alert('Presupuesto actualizado correctamente');
    } else {
        alert('El presupuesto debe ser un número positivo');
    }
});

document.getElementById('item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('item-name').value;
    const price = document.getElementById('item-price').value;
    const payment = document.getElementById('item-payment').value;
    
    if (parseFloat(payment) > parseFloat(price)) {
        alert('El abono no puede ser mayor que el precio total');
        return;
    }
    
    addItem(name, price, payment);
    
    // Limpiar formulario
    document.getElementById('item-form').reset();
    document.getElementById('item-payment').value = 0;
});

// Inicializar aplicación
loadData();

