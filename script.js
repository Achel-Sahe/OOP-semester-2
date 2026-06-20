"use strict";

class DataStore {
  constructor() {
    this.products = [
      { id: "P001", name: "Nasi Goreng Spesial", category: "Food", price: 18000, stock: 42, status: "active", emoji: "🍛" },
      { id: "P002", name: "Mie Ayam Bakso", category: "Food", price: 15000, stock: 35, status: "active", emoji: "🍜" },
      { id: "P003", name: "Ayam Geprek", category: "Food", price: 22000, stock: 28, status: "active", emoji: "🍗" },
      { id: "P004", name: "Soto Ayam", category: "Food", price: 14000, stock: 20, status: "active", emoji: "🥣" },
      { id: "P005", name: "Gado-Gado", category: "Food", price: 12000, stock: 15, status: "active", emoji: "🥗" },
      { id: "P006", name: "Es Teh Manis", category: "Drink", price: 5000, stock: 80, status: "active", emoji: "🍵" },
      { id: "P007", name: "Es Jeruk", category: "Drink", price: 6000, stock: 60, status: "active", emoji: "🍊" },
      { id: "P008", name: "Jus Alpukat", category: "Drink", price: 12000, stock: 25, status: "active", emoji: "🥑" },
      { id: "P009", name: "Air Mineral", category: "Drink", price: 3000, stock: 100, status: "active", emoji: "💧" },
      { id: "P010", name: "Kopi Susu", category: "Drink", price: 10000, stock: 45, status: "active", emoji: "☕" },
      { id: "P011", name: "Kerupuk Udang", category: "Snack", price: 4000, stock: 50, status: "active", emoji: "🦐" },
      { id: "P012", name: "Pisang Goreng", category: "Snack", price: 5000, stock: 30, status: "active", emoji: "🍌" },
      { id: "P013", name: "Tempe Mendoan", category: "Snack", price: 3000, stock: 40, status: "active", emoji: "🟫" },
      { id: "P014", name: "Tisu Makan", category: "Other", price: 2000, stock: 200, status: "active", emoji: "🗒️" },
      { id: "P015", name: "Sambal Sachet", category: "Other", price: 1000, stock: 0, status: "inactive", emoji: "🌶️" },
      { id: "P016", name: "Lontong Sayur", category: "Food", price: 10000, stock: 12, status: "active", emoji: "🍱" },
    ];
    this.transactions = [
      { id: "TXN-20240615-001", date: "2024-06-15 08:12", cashier: "Admin Kasir", items: [{ name: "Nasi Goreng Spesial", qty: 2, price: 18000 }, { name: "Es Teh Manis", qty: 2, price: 5000 }], method: "cash", status: "completed" },
      { id: "TXN-20240615-002", date: "2024-06-15 09:34", cashier: "Admin Kasir", items: [{ name: "Ayam Geprek", qty: 1, price: 22000 }, { name: "Jus Alpukat", qty: 1, price: 12000 }], method: "qris", status: "completed" },
      { id: "TXN-20240615-003", date: "2024-06-15 10:05", cashier: "Admin Kasir", items: [{ name: "Mie Ayam Bakso", qty: 3, price: 15000 }], method: "debit", status: "completed" },
      { id: "TXN-20240615-004", date: "2024-06-15 10:48", cashier: "Admin Kasir", items: [{ name: "Es Jeruk", qty: 4, price: 6000 }, { name: "Kerupuk Udang", qty: 2, price: 4000 }], method: "cash", status: "pending" },
      { id: "TXN-20240615-005", date: "2024-06-15 11:22", cashier: "Admin Kasir", items: [{ name: "Soto Ayam", qty: 2, price: 14000 }, { name: "Air Mineral", qty: 2, price: 3000 }], method: "cash", status: "completed" },
      { id: "TXN-20240615-006", date: "2024-06-15 12:01", cashier: "Admin Kasir", items: [{ name: "Kopi Susu", qty: 3, price: 10000 }, { name: "Pisang Goreng", qty: 3, price: 5000 }], method: "qris", status: "completed" },
      { id: "TXN-20240615-007", date: "2024-06-15 13:15", cashier: "Admin Kasir", items: [{ name: "Gado-Gado", qty: 1, price: 12000 }], method: "cash", status: "refunded" },
      { id: "TXN-20240614-031", date: "2024-06-14 18:44", cashier: "Admin Kasir", items: [{ name: "Nasi Goreng Spesial", qty: 1, price: 18000 }, { name: "Kopi Susu", qty: 1, price: 10000 }], method: "debit", status: "completed" },
      { id: "TXN-20240614-030", date: "2024-06-14 17:32", cashier: "Admin Kasir", items: [{ name: "Ayam Geprek", qty: 2, price: 22000 }, { name: "Es Teh Manis", qty: 2, price: 5000 }, { name: "Tempe Mendoan", qty: 4, price: 3000 }], method: "cash", status: "completed" },
      { id: "TXN-20240614-029", date: "2024-06-14 16:10", cashier: "Admin Kasir", items: [{ name: "Lontong Sayur", qty: 2, price: 10000 }], method: "qris", status: "completed" },
    ];
  }

  findProduct(id) { return this.products.find(p => p.id === id) || null; }
  addProduct(product) { this.products.push(product); }
  updateProduct(id, data) { const idx = this.products.findIndex(p => p.id === id); if (idx !== -1) this.products[idx] = { ...this.products[idx], ...data }; }
  removeProduct(id) { this.products = this.products.filter(p => p.id !== id); }
  addTransaction(tx) { this.transactions.unshift(tx); }
  nextProductId() { return "P" + String(this.products.length + 1).padStart(3, "0"); }
  nextTransactionId() {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const seq = String(this.transactions.length + 1).padStart(3, "0");
    return `TXN-${date}-${seq}`;
  }
}
class Helpers {
  static formatRp(n) { return "Rp " + n.toLocaleString("id-ID"); }
  static capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  static getTxSubtotal(tx) { return tx.items.reduce((sum, i) => sum + i.price * i.qty, 0); }
  static getTxTotal(tx) { const sub = Helpers.getTxSubtotal(tx); return sub + Math.round(sub * 0.1); }
  static statusBadge(status) {
    const map = { completed: "badge--success", pending: "badge--warning", refunded: "badge--danger", inactive: "badge--neutral", active: "badge--success" };
    return `<span class="badge ${map[status] || "badge--neutral"}">${Helpers.capitalize(status)}</span>`;
  }
  static methodPill(method) { return `<span class="method-pill">${method.toUpperCase()}</span>`; }
  static $(sel, ctx = document) { return ctx.querySelector(sel); }
  static $$(sel, ctx = document) { return ctx.querySelectorAll(sel); }
}
class ModalManager {
  constructor() {
    this._bindCloseButtons();
    this._bindOverlayClick();
  }
  open(id) { document.getElementById(id)?.classList.add("open"); }
  close(id) { document.getElementById(id)?.classList.remove("open"); }
  _bindCloseButtons() { Helpers.$$("[data-close]").forEach(btn => btn.addEventListener("click", () => this.close(btn.dataset.close))); }
  _bindOverlayClick() { Helpers.$$("x.modal-overlay").forEach(overlay => overlay.addEventListener("click", e => { if (e.target === overlay) this.close(overlay.id); })); }
}
class Router {
  static PAGE_LABELS = { cashier: "Cashier", products: "Products", transactions: "Transactions" };
  constructor(onNavigate) {
    this.currentPage = "cashier";
    this._onNavigate = onNavigate;
    this._bindNavItems();
    this._bindSidebar();
    this._startClock();
  }
  navigateTo(page) {
    this.currentPage = page;
    Helpers.$$(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(`page-${page}`)?.classList.add("active");
    Helpers.$$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.page === page));
    Helpers.$("#topbar-title").textContent = Router.PAGE_LABELS[page] || page;
    if (window.innerWidth <= 900) this._closeSidebar();
    this._onNavigate(page);
  }
  _bindNavItems() {
    Helpers.$$(".nav-item").forEach(item => item.addEventListener("click", e => {
      e.preventDefault();
      this.navigateTo(item.dataset.page);
    }));
  }
  _bindSidebar() {
    Helpers.$("#menuToggle")?.addEventListener("click", () => this._openSidebar());
    Helpers.$("#sidebar-overlay")?.addEventListener("click", () => this._closeSidebar());
  }
  _openSidebar() {
    Helpers.$("#sidebar").classList.add("open");
    Helpers.$("#sidebar-overlay").classList.add("open");
  }
  _closeSidebar() {
    Helpers.$("#sidebar").classList.remove("open");
    Helpers.$("#sidebar-overlay").classList.remove("open");
  }
  _startClock() {
    const update = () => {
      Helpers.$("#topbar-date").textContent = new Date().toLocaleDateString("id-ID", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
    };
    update();
  }
}

class Cart {
  constructor(store) { this._store = store; this._items = []; }
  add(productId) {
    const product = this._store.findProduct(productId);
    if (!product || product.stock === 0) return;
    const existing = this._items.find(i => i.productId === productId);
    if (existing) existing.qty = Math.min(existing.qty + 1, product.stock);
    else this._items.push({ productId, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }
  changeQty(productId, delta) {
    const item = this._items.find(i => i.productId === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) return this.remove(productId);
    const product = this._store.findProduct(productId);
    if (product) item.qty = Math.min(item.qty, product.stock);
  }
  remove(productId) { this._items = this._items.filter(i => i.productId !== productId); }
  clear() { this._items = []; }
  get items() { return this._items; }
  get isEmpty() { return this._items.length === 0; }
  get totalItems() { return this._items.reduce((s, i) => s + i.qty, 0); }
  get subtotal() { return this._items.reduce((s, i) => s + i.price * i.qty, 0); }
  get tax() { return Math.round(this.subtotal * 0.1); }
  get total() { return this.subtotal + this.tax; }
}

class CartView {
  constructor(cart) {
    this._cart = cart;
    Helpers.$("#clear-cart").addEventListener("click", () => this._onClearClick());
  }
  onClear(fn) { this._clearHandler = fn; }
  render() {
    const container = Helpers.$("#cart-items");
    const emptyMsg = Helpers.$("#cart-empty");
    const badge = Helpers.$("#cart-badge");
    const cart = this._cart;

    badge.textContent = cart.totalItems;
    badge.classList.toggle("visible", cart.totalItems > 0);

    if (cart.isEmpty) {
      container.innerHTML = "";
      container.appendChild(emptyMsg);
      emptyMsg.style.display = "flex";
      this._updateTotals(0, 0);
      return;
    }

    emptyMsg.style.display = "none";
    Helpers.$$(".cart-item", container).forEach(el => el.remove());

    cart.items.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-item-emoji">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${Helpers.formatRp(item.price * item.qty)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" data-id="${item.productId}">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.productId}">+</button>
        </div>
        <button class="btn-remove-item" data-action="remove" data-id="${item.productId}">×</button>
      `;
      container.appendChild(div);
    });

    this._updateTotals(cart.subtotal, cart.tax);
  }
  _updateTotals(subtotal, tax) {
    Helpers.$("#cart-subtotal").textContent = Helpers.formatRp(subtotal);
    Helpers.$("#cart-tax").textContent = Helpers.formatRp(tax);
    Helpers.$("#cart-total").textContent = Helpers.formatRp(subtotal + tax);
    Helpers.$("#checkout-btn").disabled = this._cart.isEmpty;
  }
  _onClearClick() {
    if (this._cart.isEmpty) return;
    if (!confirm("Clear all items from cart?")) return;
    if (typeof this._clearHandler === "function") this._clearHandler();
  }
}

class ProductManager {
  constructor(store, modal) {
    this._store = store;
    this._modal = modal;
    this._searchTerm = "";
    this._catFilter = "all";
    this._editingId = null;
    this._bindSearch();
    this._bindCategoryFilter();
    this._bindAddButton();
    this._bindSaveButton();
  }
  onChange(fn) { this._changeHandler = fn; }
  render() {
    const filtered = this._filtered();
    const tbody = Helpers.$("#product-tbody");
    tbody.innerHTML = filtered.map((p, idx) => `
      <tr>
        <td style="color:var(--color-text-muted);font-size:.8rem">${String(idx + 1).padStart(2, "0")}</td>
        <td><div class="product-cell"><div class="product-thumb" style="background:var(--color-surface-2)">${p.emoji}</div><div><div class="product-thumb-name">${p.name}</div><div class="product-thumb-desc">${p.id}</div></div></div></td>
        <td><span class="badge badge--info">${p.category}</span></td>
        <td style="font-family:'JetBrains Mono',monospace;font-weight:600">${Helpers.formatRp(p.price)}</td>
        <td><span style="font-weight:600;color:${p.stock < 10 ? "var(--color-danger)" : "var(--color-text-primary)"}">${p.stock}</span>${p.stock < 10 && p.stock > 0 ? '<span style="font-size:.72rem;color:var(--color-warning);margin-left:4px">Low</span>' : ""}${p.stock === 0 ? '<span style="font-size:.72rem;color:var(--color-danger);margin-left:4px">Empty</span>' : ""}</td>
        <td>${Helpers.statusBadge(p.status)}</td>
        <td><div class="action-btns"><button class="btn-icon btn-icon--edit" data-action="edit" data-id="${p.id}">Edit</button><button class="btn-icon btn-icon--delete" data-action="delete" data-id="${p.id}">Del</button></div></td>
      </tr>
    `).join("");

    Helpers.$("#product-count-label").textContent = `Showing ${filtered.length} of ${this._store.products.length} products`;
    tbody.onclick = e => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const { action, id } = btn.dataset;
      if (action === "edit") this._openEdit(id);
      if (action === "delete") this._delete(id);
    };
  }
  _filtered() {
    return this._store.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this._searchTerm.toLowerCase()) || p.id.toLowerCase().includes(this._searchTerm.toLowerCase());
      const matchCat = this._catFilter === "all" || p.category === this._catFilter;
      return matchSearch && matchCat;
    });
  }
  _bindSearch() { Helpers.$("#product-search").addEventListener("input", e => { this._searchTerm = e.target.value; this.render(); }); }
  _bindCategoryFilter() { Helpers.$("#product-category-filter").addEventListener("change", e => { this._catFilter = e.target.value; this.render(); }); }
  _bindAddButton() { Helpers.$("#add-product-btn").addEventListener("click", () => { this._editingId = null; Helpers.$("#product-modal-title").textContent = "Add Product"; this._clearForm(); this._modal.open("product-modal"); }); }
  _bindSaveButton() { Helpers.$("#save-product-btn").addEventListener("click", () => this._save()); }
  _save() {
    const name = Helpers.$("#pm-name").value.trim();
    const price = parseInt(Helpers.$("#pm-price").value) || 0;
    const stock = parseInt(Helpers.$("#pm-stock").value) || 0;
    if (!name || !price) return alert("Please fill in Product Name and Price.");
    const data = { name, category: Helpers.$("#pm-category").value, price, stock, status: Helpers.$("#pm-status").value };
    if (this._editingId) this._store.updateProduct(this._editingId, data);
    else this._store.addProduct({ id: this._store.nextProductId(), emoji: "📦", ...data });
    this._modal.close("product-modal");
    this.render();
    if (typeof this._changeHandler === "function") this._changeHandler();
  }
  _openEdit(id) {
    const p = this._store.findProduct(id);
    if (!p) return;
    this._editingId = id;
    Helpers.$("#product-modal-title").textContent = "Edit Product";
    Helpers.$("#pm-name").value = p.name;
    Helpers.$("#pm-price").value = p.price;
    Helpers.$("#pm-stock").value = p.stock;
    Helpers.$("#pm-category").value = p.category;
    Helpers.$("#pm-status").value = p.status;
    Helpers.$("#pm-desc").value = "";
    this._modal.open("product-modal");
  }
  _delete(id) { if (!confirm("Delete this product?")) return; this._store.removeProduct(id); this.render(); if (typeof this._changeHandler === "function") this._changeHandler(); }
  _clearForm() { ["pm-name", "pm-price", "pm-stock", "pm-desc"].forEach(id => { Helpers.$(`#${id}`).value = ""; }); Helpers.$("#pm-category").value = "Food"; Helpers.$("#pm-status").value = "active"; }
}

class CashierView {
  constructor(store, cart, cartView, modal) {
    this._store = store;
    this._cart = cart;
    this._cartView = cartView;
    this._modal = modal;
    this._search = "";
    this._category = "all";
    this._bindSearch();
    this._bindCategoryTabs();
    this._bindCartActions();
    this._bindCheckout();
    this._bindPostCheckout();
  }
  renderGrid() {
    const grid = Helpers.$("#cashier-product-grid");
    const filtered = this._store.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this._search.toLowerCase());
      const matchCat = this._category === "all" || p.category === this._category;
      return matchSearch && matchCat && p.status === "active";
    });
    grid.innerHTML = filtered.length === 0 ? `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--color-text-muted)">No products found</div>` : filtered.map(p => `<div class="product-card ${p.stock === 0 ? "out-of-stock" : ""}" data-product-id="${p.id}" style="cursor:${p.stock > 0 ? "pointer" : "not-allowed"}"><div class="product-card-add">+</div><div class="product-card-emoji">${p.emoji}</div><div class="product-card-name">${p.name}</div><div class="product-card-price">${Helpers.formatRp(p.price)}</div><div class="product-card-stock">${p.stock > 0 ? `${p.stock} left` : "Out of stock"}</div></div>`).join("");
    grid.onclick = e => {
      const card = e.target.closest("[data-product-id]");
      if (!card) return;
      const product = this._store.findProduct(card.dataset.productId);
      if (!product || product.stock === 0) return;
      this._cart.add(product.id);
      this._cartView.render();
    };
  }
  _bindSearch() { Helpers.$("#cashier-search").addEventListener("input", e => { this._search = e.target.value; this.renderGrid(); }); }
  _bindCategoryTabs() { Helpers.$$("#category-tabs .tab").forEach(tab => tab.addEventListener("click", () => { Helpers.$$("#category-tabs .tab").forEach(t => t.classList.remove("active")); tab.classList.add("active"); this._category = tab.dataset.cat; this.renderGrid(); })); }
  _bindCartActions() {
    Helpers.$("#cart-items").addEventListener("click", e => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const { action, id } = btn.dataset;
      if (action === "inc") this._cart.changeQty(id, 1);
      if (action === "dec") this._cart.changeQty(id, -1);
      if (action === "remove") this._cart.remove(id);
      this._cartView.render();
    });
    this._cartView.onClear(() => { this._cart.clear(); this._cartView.render(); });
  }
  _bindCheckout() {
    Helpers.$("#checkout-btn").addEventListener("click", () => {
      if (this._cart.isEmpty) return;
      const { subtotal, tax, total, totalItems } = this._cart;
      const method = document.querySelector('input[name="payment"]:checked')?.value || "cash";
      Helpers.$("#checkout-summary-text").textContent = `${totalItems} item(s) — ${Helpers.formatRp(total)}`;
      Helpers.$("#checkout-info").innerHTML = `
        <div class="checkout-info-row"><span>Subtotal</span><span>${Helpers.formatRp(subtotal)}</span></div>
        <div class="checkout-info-row"><span>Tax (10%)</span><span>${Helpers.formatRp(tax)}</span></div>
        <div class="checkout-info-row" style="font-weight:700;margin-top:6px;padding-top:6px;border-top:1px dashed var(--color-border)"><span>Total</span><span>${Helpers.formatRp(total)}</span></div>
        <div class="checkout-info-row" style="margin-top:6px;color:var(--color-text-secondary)"><span>Method</span><span>${method.toUpperCase()}</span></div>
      `;
      const newTx = { id: this._store.nextTransactionId(), date: new Date().toLocaleString("id-ID", { hour12: false }).slice(0, 16).replace(",", ""), cashier: "Admin Kasir", items: this._cart.items.map(i => ({ name: i.name, qty: i.qty, price: i.price })), method, status: "completed" };
      this._store.addTransaction(newTx);
      this._modal.open("checkout-modal");
    });
  }
  _bindPostCheckout() {
    Helpers.$("#new-tx-btn").addEventListener("click", () => {
      this._cart.clear();
      this._cartView.render();
      this.renderGrid();
      this._modal.close("checkout-modal");
      if (typeof this._afterCheckout === "function") this._afterCheckout();
    });
  }
  onAfterCheckout(fn) { this._afterCheckout = fn; }
}

class TransactionView {
  constructor(store, modal) {
    this._store = store;
    this._modal = modal;
    this._searchTerm = "";
    this._methodFilter = "all";
    this._statusFilter = "all";
    this._bindFilters();
  }
  render() {
    const filtered = this._filtered();
    const tbody = Helpers.$("#tx-tbody");
    tbody.innerHTML = filtered.map(tx => `
      <tr>
        <td><code style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:var(--color-primary)">${tx.id}</code></td>
        <td style="color:var(--color-text-secondary);font-size:.82rem">${tx.date}</td>
        <td>${tx.cashier}</td>
        <td>${tx.items.reduce((s, i) => s + i.qty, 0)} item(s)</td>
        <td style="font-family:'JetBrains Mono',monospace;font-weight:600">${Helpers.formatRp(Helpers.getTxTotal(tx))}</td>
        <td>${Helpers.methodPill(tx.method)}</td>
        <td>${Helpers.statusBadge(tx.status)}</td>
        <td><button class="btn-icon btn-icon--view" data-action="view" data-id="${tx.id}">View</button></td>
      </tr>
    `).join("");
    Helpers.$("#tx-count-label").textContent = `Showing ${filtered.length} of ${this._store.transactions.length} transactions`;
    tbody.onclick = e => {
      const btn = e.target.closest("[data-action]");
      if (!btn || btn.dataset.action !== "view") return;
      this._openDetail(btn.dataset.id);
    };
  }
  _filtered() {
    return this._store.transactions.filter(tx => {
      const matchSearch = tx.id.toLowerCase().includes(this._searchTerm.toLowerCase()) || tx.cashier.toLowerCase().includes(this._searchTerm.toLowerCase());
      const matchMethod = this._methodFilter === "all" || tx.method === this._methodFilter;
      const matchStatus = this._statusFilter === "all" || tx.status === this._statusFilter;
      return matchSearch && matchMethod && matchStatus;
    });
  }
  _openDetail(id) {
    const tx = this._store.transactions.find(t => t.id === id);
    if (!tx) return;
    const subtotal = Helpers.getTxSubtotal(tx);
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;
    Helpers.$("#tx-detail-body").innerHTML = `
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
              <div class="receipt-row"><span>${i.name}</span><span>${Helpers.formatRp(i.price * i.qty)}</span></div>
              <div style="color:var(--color-text-muted);font-size:.75rem;padding-left:4px">${i.qty} x ${Helpers.formatRp(i.price)}</div>
            </div>
          `).join("")}
        </div>
        <hr class="receipt-divider"/>
        <div class="receipt-row"><span>Subtotal</span><span>${Helpers.formatRp(subtotal)}</span></div>
        <div class="receipt-row"><span>Tax (10%)</span><span>${Helpers.formatRp(tax)}</span></div>
        <hr class="receipt-divider"/>
        <div class="receipt-row total"><span>TOTAL</span><span>${Helpers.formatRp(total)}</span></div>
        <div style="text-align:center;margin-top:14px;color:var(--color-text-muted);font-size:.75rem">Status: ${Helpers.statusBadge(tx.status)}</div>
      </div>
    `;
    this._modal.open("tx-detail-modal");
  }
  _bindFilters() {
    Helpers.$("#tx-search").addEventListener("input", e => { this._searchTerm = e.target.value; this.render(); });
    Helpers.$("#tx-method-filter").addEventListener("change", e => { this._methodFilter = e.target.value; this.render(); });
    Helpers.$("#tx-status-filter").addEventListener("change", e => { this._statusFilter = e.target.value; this.render(); });
  }
}

class App {
  constructor() {
    this.store = new DataStore();
    this.modal = new ModalManager();
    this.cart = new Cart(this.store);
    this.cartView = new CartView(this.cart);
    this.products = new ProductManager(this.store, this.modal);
    this.cashier = new CashierView(this.store, this.cart, this.cartView, this.modal);
    this.txView = new TransactionView(this.store, this.modal);
    this.router = new Router(page => this._onPageChange(page));
    this.products.onChange(() => this.cashier.renderGrid());
    this.cashier.onAfterCheckout(() => this.txView.render());
  }
  _onPageChange(page) {
    if (page === "cashier") this.cashier.renderGrid();
    if (page === "products") this.products.render();
    if (page === "transactions") this.txView.render();
  }
  init() {
    this.cashier.renderGrid();
    this.products.render();
    this.txView.render();
    this.cartView.render();
    this.router.navigateTo("cashier");
  }
}

const app = new App();
app.init();