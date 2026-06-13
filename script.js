/* ============================================================
   SwiftPOS — app.js
   UI-only: dummy data, navigation, rendering.
   Structured for future OOP connection.
   ============================================================ */

'use strict';

const PRODUCTS = [
  { id: 'P001', name: 'Nasi Goreng Spesial',  category: 'Food',  price: 18000,  stock: 42, status: 'active',   emoji: '🍛' },
  { id: 'P002', name: 'Mie Ayam Bakso',       category: 'Food',  price: 15000,  stock: 35, status: 'active',   emoji: '🍜' },
  { id: 'P003', name: 'Ayam Geprek',          category: 'Food',  price: 22000,  stock: 28, status: 'active',   emoji: '🍗' },
  { id: 'P004', name: 'Soto Ayam',            category: 'Food',  price: 14000,  stock: 20, status: 'active',   emoji: '🥣' },
  { id: 'P005', name: 'Gado-Gado',            category: 'Food',  price: 12000,  stock: 15, status: 'active',   emoji: '🥗' },
  { id: 'P006', name: 'Es Teh Manis',         category: 'Drink', price: 5000,   stock: 80, status: 'active',   emoji: '🍵' },
  { id: 'P007', name: 'Es Jeruk',             category: 'Drink', price: 6000,   stock: 60, status: 'active',   emoji: '🍊' },
  { id: 'P008', name: 'Jus Alpukat',          category: 'Drink', price: 12000,  stock: 25, status: 'active',   emoji: '🥑' },
  { id: 'P009', name: 'Air Mineral',          category: 'Drink', price: 3000,   stock: 100, status: 'active',  emoji: '💧' },
  { id: 'P010', name: 'Kopi Susu',            category: 'Drink', price: 10000,  stock: 45, status: 'active',   emoji: '☕' },
  { id: 'P011', name: 'Kerupuk Udang',        category: 'Snack', price: 4000,   stock: 50, status: 'active',   emoji: '🦐' },
  { id: 'P012', name: 'Pisang Goreng',        category: 'Snack', price: 5000,   stock: 30, status: 'active',   emoji: '🍌' },
  { id: 'P013', name: 'Tempe Mendoan',        category: 'Snack', price: 3000,   stock: 40, status: 'active',   emoji: '🟫' },
  { id: 'P014', name: 'Tisu Makan',           category: 'Other', price: 2000,   stock: 200, status: 'active',  emoji: '🗒️' },
  { id: 'P015', name: 'Sambal Sachet',        category: 'Other', price: 1000,   stock: 0,  status: 'inactive', emoji: '🌶️' },
  { id: 'P016', name: 'Lontong Sayur',        category: 'Food',  price: 10000,  stock: 12, status: 'active',   emoji: '🍱' },
];

const TRANSACTIONS = [
  { id: 'TXN-20240615-001', date: '2024-06-15 08:12', cashier: 'Admin Kasir', items: [{ name: 'Nasi Goreng Spesial', qty: 2, price: 18000 }, { name: 'Es Teh Manis', qty: 2, price: 5000 }], method: 'cash',  status: 'completed' },
  { id: 'TXN-20240615-002', date: '2024-06-15 09:34', cashier: 'Admin Kasir', items: [{ name: 'Ayam Geprek', qty: 1, price: 22000 }, { name: 'Jus Alpukat', qty: 1, price: 12000 }], method: 'qris',  status: 'completed' },
  { id: 'TXN-20240615-003', date: '2024-06-15 10:05', cashier: 'Admin Kasir', items: [{ name: 'Mie Ayam Bakso', qty: 3, price: 15000 }], method: 'debit', status: 'completed' },
  { id: 'TXN-20240615-004', date: '2024-06-15 10:48', cashier: 'Admin Kasir', items: [{ name: 'Es Jeruk', qty: 4, price: 6000 }, { name: 'Kerupuk Udang', qty: 2, price: 4000 }], method: 'cash',  status: 'pending'   },
  { id: 'TXN-20240615-005', date: '2024-06-15 11:22', cashier: 'Admin Kasir', items: [{ name: 'Soto Ayam', qty: 2, price: 14000 }, { name: 'Air Mineral', qty: 2, price: 3000 }], method: 'cash',  status: 'completed' },
  { id: 'TXN-20240615-006', date: '2024-06-15 12:01', cashier: 'Admin Kasir', items: [{ name: 'Kopi Susu', qty: 3, price: 10000 }, { name: 'Pisang Goreng', qty: 3, price: 5000 }], method: 'qris',  status: 'completed' },
  { id: 'TXN-20240615-007', date: '2024-06-15 13:15', cashier: 'Admin Kasir', items: [{ name: 'Gado-Gado', qty: 1, price: 12000 }], method: 'cash',  status: 'refunded'  },
  { id: 'TXN-20240614-031', date: '2024-06-14 18:44', cashier: 'Admin Kasir', items: [{ name: 'Nasi Goreng Spesial', qty: 1, price: 18000 }, { name: 'Kopi Susu', qty: 1, price: 10000 }], method: 'debit', status: 'completed' },
  { id: 'TXN-20240614-030', date: '2024-06-14 17:32', cashier: 'Admin Kasir', items: [{ name: 'Ayam Geprek', qty: 2, price: 22000 }, { name: 'Es Teh Manis', qty: 2, price: 5000 }, { name: 'Tempe Mendoan', qty: 4, price: 3000 }], method: 'cash', status: 'completed' },
  { id: 'TXN-20240614-029', date: '2024-06-14 16:10', cashier: 'Admin Kasir', items: [{ name: 'Lontong Sayur', qty: 2, price: 10000 }], method: 'qris',  status: 'completed' },
];

const state = {
  cart: [],         // { productId, name, price, emoji, qty }
  products: [...PRODUCTS],
  transactions: [...TRANSACTIONS],
  currentPage: 'dashboard',
};


const formatRp = (n) => 'Rp ' + n.toLocaleString('id-ID');

const getTxTotal = (tx) => {
  const sub = tx.items.reduce((s, i) => s + i.price * i.qty, 0);
  return sub + Math.round(sub * 0.1);
};

const getTxSubtotal = (tx) => tx.items.reduce((s, i) => s + i.price * i.qty, 0);

const statusBadge = (status) => {
  const map = {
    completed: 'badge--success',
    pending:   'badge--warning',  
    refunded:  'badge--danger',
    inactive:  'badge--neutral',
    active:    'badge--success',
  };
  return `<span class="badge ${map[status] || 'badge--neutral'}">${capitalize(status)}</span>`;
};

const methodPill = (method) =>
  `<span class="method-pill">${method.toUpperCase()}</span>`;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

/* ─── NAVIGATION ─────────────────────────────────────────── */

const PAGE_LABELS = {
  dashboard:    'Dashboard',
  cashier:      'Cashier',
  products:     'Products',
  transactions: 'Transactions',
};

function navigateTo(page) {
  state.currentPage = page;

  // Pages
  $$('.page').forEach(p => p.classList.remove('active'));
  $(`#page-${page}`).classList.add('active');

  // Nav items
  $$('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // Topbar title
  $('#topbar-title').textContent = PAGE_LABELS[page] || page;

  // Close sidebar on mobile
  if (window.innerWidth <= 900) closeSidebar();

  // Re-render page if needed
  if (page === 'products') renderProductTable();
  if (page === 'transactions') renderTransactionTable();
}

// Nav click
$$('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

// Ghost link (View all)
$$('[data-page-link]').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.pageLink));
});

/* ─── SIDEBAR TOGGLE (mobile) ────────────────────────────── */

function openSidebar()  { $('#sidebar').classList.add('open'); $('#sidebar-overlay').classList.add('open'); }
function closeSidebar() { $('#sidebar').classList.remove('open'); $('#sidebar-overlay').classList.remove('open'); }

$('#menuToggle').addEventListener('click', openSidebar);
$('#sidebar-overlay').addEventListener('click', closeSidebar);

/* ─── TOPBAR DATE ────────────────────────────────────────── */

function updateDate() {
  const now = new Date();
  $('#topbar-date').textContent = now.toLocaleDateString('id-ID', {
    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
  });
}
updateDate();

/* ─── MODALS ─────────────────────────────────────────────── */

function openModal(id)  { $(`#${id}`).classList.add('open'); }
function closeModal(id) { $(`#${id}`).classList.remove('open'); }

$$('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});

$$('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

/* ─── DASHBOARD ──────────────────────────────────────────── */

function renderRecentTransactions() {
  const tbody = $('#recent-tx-tbody');
  const recent = state.transactions.slice(0, 6);
  tbody.innerHTML = recent.map(tx => `
    <tr>
      <td><code style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:var(--color-primary)">${tx.id}</code></td>
      <td>${tx.items.length} item(s)</td>
      <td style="font-family:'JetBrains Mono',monospace;font-weight:600">${formatRp(getTxTotal(tx))}</td>
      <td>${methodPill(tx.method)}</td>
      <td style="color:var(--color-text-secondary);font-size:.8rem">${tx.date.split(' ')[1]}</td>
      <td>${statusBadge(tx.status)}</td>
    </tr>
  `).join('');
}

function renderTopProducts() {
  // Tally sales from transactions
  const counts = {};
  state.transactions.forEach(tx => {
    tx.items.forEach(item => {
      counts[item.name] = (counts[item.name] || 0) + item.qty;
    });
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const max = sorted[0]?.[1] || 1;

  const list = $('#top-products-list');
  list.innerHTML = sorted.map(([name, count], i) => `
    <div class="top-product-item">
      <div class="top-product-rank">${i + 1}</div>
      <div class="top-product-info">
        <div class="top-product-name">${name}</div>
        <div class="top-product-bar-wrap">
          <div class="top-product-bar" style="width:${(count/max*100).toFixed(1)}%"></div>
        </div>
      </div>
      <div class="top-product-count">${count} sold</div>
    </div>
  `).join('');
}

/* ─── PRODUCTS ───────────────────────────────────────────── */

let productSearchTerm = '';
let productCategoryFilter = 'all';

function renderProductTable() {
  const tbody = $('#product-tbody');
  let filtered = state.products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
                        p.id.toLowerCase().includes(productSearchTerm.toLowerCase());
    const matchCat = productCategoryFilter === 'all' || p.category === productCategoryFilter;
    return matchSearch && matchCat;
  });

  tbody.innerHTML = filtered.map((p, idx) => `
    <tr>
      <td style="color:var(--color-text-muted);font-size:.8rem">${String(idx + 1).padStart(2, '0')}</td>
      <td>
        <div class="product-cell">
          <div class="product-thumb" style="background:var(--color-surface-2)">${p.emoji}</div>
          <div>
            <div class="product-thumb-name">${p.name}</div>
            <div class="product-thumb-desc">${p.id}</div>
          </div>
        </div>
      </td>
      <td><span class="badge badge--info">${p.category}</span></td>
      <td style="font-family:'JetBrains Mono',monospace;font-weight:600">${formatRp(p.price)}</td>
      <td>
        <span style="font-weight:600;color:${p.stock < 10 ? 'var(--color-danger)' : 'var(--color-text-primary)'}">${p.stock}</span>
        ${p.stock < 10 && p.stock > 0 ? '<span style="font-size:.72rem;color:var(--color-warning);margin-left:4px">Low</span>' : ''}
        ${p.stock === 0 ? '<span style="font-size:.72rem;color:var(--color-danger);margin-left:4px">Empty</span>' : ''}
      </td>
      <td>${statusBadge(p.status)}</td>
      <td>
        <div class="action-btns">
          <button class="btn-icon btn-icon--edit" onclick="openEditProduct('${p.id}')" title="Edit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon btn-icon--delete" onclick="deleteProduct('${p.id}')" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  $('#product-count-label').textContent = `Showing ${filtered.length} of ${state.products.length} products`;
}

$('#product-search').addEventListener('input', (e) => {
  productSearchTerm = e.target.value;
  renderProductTable();
});

$('#product-category-filter').addEventListener('change', (e) => {
  productCategoryFilter = e.target.value;
  renderProductTable();
});

// Add product
$('#add-product-btn').addEventListener('click', () => {
  $('#product-modal-title').textContent = 'Add Product';
  $('#pm-name').value = '';
  $('#pm-price').value = '';
  $('#pm-stock').value = '';
  $('#pm-desc').value = '';
  $('#pm-category').value = 'Food';
  $('#pm-status').value = 'active';
  openModal('product-modal');
});

$('#save-product-btn').addEventListener('click', () => {
  const name  = $('#pm-name').value.trim();
  const price = parseInt($('#pm-price').value) || 0;
  const stock = parseInt($('#pm-stock').value) || 0;

  if (!name || !price) {
    alert('Please fill in Product Name and Price.');
    return;
  }

  const newProduct = {
    id:       'P' + String(state.products.length + 1).padStart(3, '0'),
    name,
    category: $('#pm-category').value,
    price,
    stock,
    status:   $('#pm-status').value,
    emoji:    '📦',
  };

  state.products.push(newProduct);
  closeModal('product-modal');
  renderProductTable();
});

// Edit product (placeholder — fills form with existing data)
window.openEditProduct = function(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;

  $('#product-modal-title').textContent = 'Edit Product';
  $('#pm-name').value     = p.name;
  $('#pm-price').value    = p.price;
  $('#pm-stock').value    = p.stock;
  $('#pm-category').value = p.category;
  $('#pm-status').value   = p.status;
  $('#pm-desc').value     = '';

  openModal('product-modal');
};

// Delete product
window.deleteProduct = function(id) {
  if (!confirm('Delete this product?')) return;
  state.products = state.products.filter(p => p.id !== id);
  renderProductTable();
  renderCashierGrid();
};

/* ─── CASHIER ────────────────────────────────────────────── */

let cashierSearch = '';
let cashierCategory = 'all';

function renderCashierGrid() {
  const grid = $('#cashier-product-grid');
  let filtered = state.products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(cashierSearch.toLowerCase());
    const matchCat = cashierCategory === 'all' || p.category === cashierCategory;
    const isActive = p.status === 'active';
    return matchSearch && matchCat && isActive;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--color-text-muted)">No products found</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card ${p.stock === 0 ? 'out-of-stock' : ''}"
         onclick="${p.stock > 0 ? `addToCart('${p.id}')` : ''}">
      <div class="product-card-add">+</div>
      <div class="product-card-emoji">${p.emoji}</div>
      <div class="product-card-name">${p.name}</div>
      <div class="product-card-price">${formatRp(p.price)}</div>
      <div class="product-card-stock">${p.stock > 0 ? `${p.stock} left` : 'Out of stock'}</div>
    </div>
  `).join('');
}

// Category tabs
$$('#category-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('#category-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    cashierCategory = tab.dataset.cat;
    renderCashierGrid();
  });
});

$('#cashier-search').addEventListener('input', (e) => {
  cashierSearch = e.target.value;
  renderCashierGrid();
});

/* ─── CART ───────────────────────────────────────────────── */

window.addToCart = function(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || product.stock === 0) return;

  const existing = state.cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + 1, product.stock);
  } else {
    state.cart.push({ productId, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }

  renderCart();
};

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.productId !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = state.cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  const product = state.products.find(p => p.id === productId);
  if (product) item.qty = Math.min(item.qty, product.stock);

  renderCart();
}

function renderCart() {
  const container = $('#cart-items');
  const emptyMsg  = $('#cart-empty');
  const badge     = $('#cart-badge');

  const totalItems = state.cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = totalItems;
  badge.classList.toggle('visible', totalItems > 0);

  if (state.cart.length === 0) {
    container.innerHTML = '';
    container.appendChild(emptyMsg);
    emptyMsg.style.display = 'flex';
    updateCartTotals(0, 0);
    return;
  }

  emptyMsg.style.display = 'none';

  const existingItems = $$('.cart-item', container);
  existingItems.forEach(el => el.remove());

  state.cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRp(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.productId}', -1)">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.productId}', 1)">+</button>
      </div>
      <button class="btn-remove-item" onclick="removeFromCart('${item.productId}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;
    container.appendChild(div);
  });

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax      = Math.round(subtotal * 0.1);
  updateCartTotals(subtotal, tax);
}

function updateCartTotals(subtotal, tax) {
  $('#cart-subtotal').textContent = formatRp(subtotal);
  $('#cart-tax').textContent      = formatRp(tax);
  $('#cart-total').textContent    = formatRp(subtotal + tax);
  $('#checkout-btn').disabled     = state.cart.length === 0;
}

// Clear cart
$('#clear-cart').addEventListener('click', () => {
  if (state.cart.length === 0) return;
  if (!confirm('Clear all items from cart?')) return;
  state.cart = [];
  renderCart();
});

// Checkout
$('#checkout-btn').addEventListener('click', () => {
  if (state.cart.length === 0) return;

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax      = Math.round(subtotal * 0.1);
  const total    = subtotal + tax;
  const method   = document.querySelector('input[name="payment"]:checked')?.value || 'cash';
  const totalItems = state.cart.reduce((s, i) => s + i.qty, 0);

  $('#checkout-summary-text').textContent = `${totalItems} item(s) — ${formatRp(total)}`;
  $('#checkout-info').innerHTML = `
    <div class="checkout-info-row"><span>Subtotal</span><span>${formatRp(subtotal)}</span></div>
    <div class="checkout-info-row"><span>Tax (10%)</span><span>${formatRp(tax)}</span></div>
    <div class="checkout-info-row" style="font-weight:700;margin-top:6px;padding-top:6px;border-top:1px dashed var(--color-border)">
      <span>Total</span><span>${formatRp(total)}</span>
    </div>
    <div class="checkout-info-row" style="margin-top:6px;color:var(--color-text-secondary)">
      <span>Method</span><span>${method.toUpperCase()}</span>
    </div>
  `;

  // Build dummy transaction
  const txId = 'TXN-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + String(state.transactions.length + 1).padStart(3,'0');
  const newTx = {
    id:       txId,
    date:     new Date().toLocaleString('id-ID', { hour12: false }).slice(0, 16).replace(',', ''),
    cashier:  'Admin Kasir',
    items:    state.cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    method,
    status:   'completed',
  };
  state.transactions.unshift(newTx);

  openModal('checkout-modal');
});

// New transaction after checkout
$('#new-tx-btn').addEventListener('click', () => {
  state.cart = [];
  renderCart();
  renderCashierGrid();
  renderRecentTransactions();
  closeModal('checkout-modal');
});

/* ─── TRANSACTIONS ───────────────────────────────────────── */

let txSearch = '';
let txMethodFilter = 'all';
let txStatusFilter = 'all';

function renderTransactionTable() {
  const tbody = $('#tx-tbody');
  let filtered = state.transactions.filter(tx => {
    const matchSearch = tx.id.toLowerCase().includes(txSearch.toLowerCase()) ||
                        tx.cashier.toLowerCase().includes(txSearch.toLowerCase());
    const matchMethod = txMethodFilter === 'all' || tx.method === txMethodFilter;
    const matchStatus = txStatusFilter === 'all' || tx.status === txStatusFilter;
    return matchSearch && matchMethod && matchStatus;
  });

  tbody.innerHTML = filtered.map(tx => `
    <tr>
      <td><code style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:var(--color-primary)">${tx.id}</code></td>
      <td style="color:var(--color-text-secondary);font-size:.82rem">${tx.date}</td>
      <td>${tx.cashier}</td>
      <td>${tx.items.reduce((s, i) => s + i.qty, 0)} item(s)</td>
      <td style="font-family:'JetBrains Mono',monospace;font-weight:600">${formatRp(getTxTotal(tx))}</td>
      <td>${methodPill(tx.method)}</td>
      <td>${statusBadge(tx.status)}</td>
      <td>
        <button class="btn-icon btn-icon--view" onclick="viewTransaction('${tx.id}')" title="View detail">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </td>
    </tr>
  `).join('');

  $('#tx-count-label').textContent = `Showing ${filtered.length} of ${state.transactions.length} transactions`;
}

$('#tx-search').addEventListener('input', (e) => {
  txSearch = e.target.value;
  renderTransactionTable();
});

$('#tx-method-filter').addEventListener('change', (e) => {
  txMethodFilter = e.target.value;
  renderTransactionTable();
});

$('#tx-status-filter').addEventListener('change', (e) => {
  txStatusFilter = e.target.value;
  renderTransactionTable();
});

// View transaction detail
window.viewTransaction = function(id) {
  const tx = state.transactions.find(t => t.id === id);
  if (!tx) return;

  const subtotal = getTxSubtotal(tx);
  const tax      = Math.round(subtotal * 0.1);
  const total    = subtotal + tax;

  $('#tx-detail-body').innerHTML = `
    <div class="receipt">
      <div class="receipt-header">
        <h3>SWIFTPOS</h3>
        <p>Jl. Merdeka No. 1, Jakarta</p>
        <p style="margin-top:4px">${tx.date}</p>
        <p style="color:var(--color-primary);font-weight:700">${tx.id}</p>
      </div>
      <hr class="receipt-divider"/>
      <div class="receipt-row"><span>Cashier</span><span>${tx.cashier}</span></div>
      <div class="receipt-row"><span>Method</span><span>${tx.method.toUpperCase()}</span></div>
      <hr class="receipt-divider"/>
      <div class="receipt-items">
        ${tx.items.map(i => `
          <div class="receipt-item">
            <div class="receipt-row">
              <span>${i.name}</span>
              <span>${formatRp(i.price * i.qty)}</span>
            </div>
            <div style="color:var(--color-text-muted);font-size:.75rem;padding-left:4px">${i.qty} x ${formatRp(i.price)}</div>
          </div>
        `).join('')}
      </div>
      <hr class="receipt-divider"/>
      <div class="receipt-row"><span>Subtotal</span><span>${formatRp(subtotal)}</span></div>
      <div class="receipt-row"><span>Tax (10%)</span><span>${formatRp(tax)}</span></div>
      <hr class="receipt-divider"/>
      <div class="receipt-row total"><span>TOTAL</span><span>${formatRp(total)}</span></div>
      <div style="text-align:center;margin-top:14px;color:var(--color-text-muted);font-size:.75rem">
        Status: ${statusBadge(tx.status)}
      </div>
    </div>
  `;

  openModal('tx-detail-modal');
};

/* ─── INIT ───────────────────────────────────────────────── */

function init() {
  renderRecentTransactions();
  renderTopProducts();
  renderCashierGrid();
  renderProductTable();
  renderTransactionTable();
  renderCart();
  navigateTo('dashboard');
}

init();