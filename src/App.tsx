import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  MapPin,
  MessageSquare,
  Bell,
  Settings,
  Search,
  Eye,
  ShoppingBag,
  Download,
  Calendar,
  Filter,
} from "lucide-react";

/* Sidebar Component */
const Sidebar = ({ activeTab, setActiveTab }) => (
  <aside className="w-64 bg-[#1e2a4a] text-white p-6 fixed h-full">
    <h1 className="text-2xl font-bold mb-10">EEDLES</h1>
    <nav className="space-y-6">
      <a
        href="#"
        onClick={() => setActiveTab('dashboard')}
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
          activeTab === 'dashboard' ? 'bg-[#e74c78]' : 'opacity-60 hover:opacity-100'
        }`}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </a>
      <a
        href="#"
        onClick={() => setActiveTab('order')}
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
          activeTab === 'order' ? 'bg-[#e74c78]' : 'opacity-60 hover:opacity-100'
        }`}
      >
        <Package size={20} />
        <span>Order</span>
      </a>
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-2 opacity-60 hover:opacity-100"
      >
        <MapPin size={20} />
        <span>Track</span>
      </a>
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-2 opacity-60 hover:opacity-100"
      >
        <MessageSquare size={20} />
        <span>Message</span>
      </a>
    </nav>
  </aside>
);

/* Header Component */
const Header = () => (
  <header className="flex justify-between items-center mb-8">
    <div className="relative">
      <input
        type="search"
        placeholder="Search..."
        className="w-96 px-4 py-2 rounded-lg bg-white pl-10 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e74c78]"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">
        <Search size={16} />
      </span>
    </div>
    <div className="flex items-center space-x-4">
      <button className="p-2 hover:bg-gray-100 rounded-full relative">
        <Bell size={20} />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Settings size={20} />
      </button>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  </header>
);

/* Order List Component */
const OrderList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { id: "all", label: "All orders" },
    { id: "new", label: "New orders" },
    { id: "ready", label: "Ready for shipment" },
    { id: "transit", label: "In transit" },
    { id: "complaint", label: "Under complaint" },
    { id: "completed", label: "Completed orders" },
    { id: "cancelled", label: "Cancelled orders" },
  ];

  const orders = [
    {
      id: "221204RQQPFX69",
      customer: "Mohammad Imam Basrurrohman",
      products: [
        {
          name: "Regular T-Shirt Custom Sablon A4",
          variation: "A4 21×30 cm, XXL",
          quantity: 3,
          amount: "Rp300.000",
          payment: "Gopay",
          status: "Done",
          courier: "Reguler (cashless)",
          courierCode: "004161672288",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        },
        {
          name: "Regular T-Shirt Custom Sablon A3",
          variation: "A3 30×42 cm, L",
          quantity: 3,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        }
      ]
    },
    {
      id: "265974RWEP1R94",
      customer: "Anzalina Rahmah",
      products: [
        {
          name: "Regular T-Shirt Custom Sablon A4",
          variation: "A4 32×30 cm, XXL",
          quantity: 2,
          amount: "Rp200.000",
          payment: "DANA",
          status: "Done",
          courier: "Reguler (cashless)",
          courierCode: "645161685236",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order List</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
            <Download size={18} />
            <span>Download report</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
            <Calendar size={18} />
            <span>17 Jun 2023 - 15 Oct 2023</span>
          </button>
        </div>
      </div>
      
      <div className="border-b">
        <div className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-4 px-2 relative ${
                activeTab === tab.id
                  ? "text-[#e74c78] font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e74c78]"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-4">Product</th>
              <th className="pb-4">Quantity</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Courier</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="border-b bg-gray-50">
                  <td colSpan={5} className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80"
                        alt={order.customer}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-medium">{order.customer}</span>
                      <span className="text-gray-500">Order No. {order.id}</span>
                    </div>
                  </td>
                </tr>
                {order.products.map((product, idx) => (
                  <tr key={`${order.id}-${idx}`} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500">
                            Variation: {product.variation}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">{product.quantity} pcs</td>
                    <td className="py-4">
                      {product.amount && (
                        <div>
                          <div>{product.amount}</div>
                          <div className="text-sm text-gray-500">
                            {product.payment}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4">
                      {product.status && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                          {product.status}
                        </span>
                      )}
                    </td>
                    <td className="py-4">
                      {product.courier && (
                        <div>
                          <div>{product.courier}</div>
                          <div className="text-sm text-gray-500">
                            {product.courierCode}
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* Main App Component */
const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="ml-64 flex-1 p-8 bg-gray-100">
        <Header />
        {activeTab === 'order' ? (
          <OrderList />
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <ChartsSection monthlyData={monthlyData} months={months} />
            <ProductTable products={products} />
          </div>
        )}
      </main>
    </div>
  );
};

/* Stats Card Component */
const StatsCard = ({ icon: Icon, title, value, bgColor, iconColor }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
    <div className={`p-3 rounded-full ${bgColor}`}>
      <Icon className={`text-${iconColor}-500`} size={24} />
    </div>
    <div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

/* Charts Section Component */
const ChartsSection = ({ monthlyData, months }) => (
  <div className="grid grid-cols-3 gap-6">
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Total Orders</h3>
        <select className="px-3 py-1 border rounded-md text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="h-64">
        <LineChart data={monthlyData} width={800} height={200} />
      </div>
      <div className="flex justify-between mt-4">
        {months.map((month, index) => (
          <span key={index} className="text-sm text-gray-500">
            {month}
          </span>
        ))}
      </div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <TotalSales percentage={75} />
    </div>
  </div>
);

/* Line Chart Component */
const LineChart = ({ data, width = 800, height = 200 }) => {
  const maxData = Math.max(...data);
  const pathD = data.reduce((acc, value, index) => {
    const x = (index * width) / (data.length - 1);
    const y = height - (value / maxData) * height;
    return index === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, "");

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <path d={pathD} fill="none" stroke="#e74c78" strokeWidth="2" />
    </svg>
  );
};

/* Total Sales Component */
const TotalSales = ({ percentage }) => {
  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative w-48 h-48">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="96"
          cy="96"
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="16"
        />
        <circle
          cx="96"
          cy="96"
          r={radius}
          fill="none"
          stroke="#e74c78"
          strokeWidth="16"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-3xl font-bold">+{percentage}%</p>
        <p className="text-sm text-gray-500">Total sales increase</p>
      </div>
    </div>
  );
};

/* Product Table Component */
const ProductTable = ({ products }) => (
  <div className="bg-white rounded-xl shadow-sm">
    <div className="p-6 border-b">
      <h2 className="text-lg font-semibold">Product Information</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 py-4 pl-6"></th>
            <th className="text-left py-4 font-medium">Product</th>
            <th className="text-left py-4 font-medium">Statistic</th>
            <th className="text-left py-4 font-medium">Price</th>
            <th className="text-left py-4 font-medium">Stock</th>
            <th className="text-left py-4 font-medium">Active</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 pl-6">
                <input type="checkbox" className="rounded border-gray-300" />
              </td>
              <td className="py-4">
                <div className="flex items-center space-x-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                  <span className="font-medium text-gray-900">{product.name}</span>
                </div>
              </td>
              <td className="py-4 text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{product.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ShoppingBag size={16} />
                    <span>{product.orders}</span>
                  </div>
                </div>
              </td>
              <td className="py-4 text-gray-900 font-medium">{product.price}</td>
              <td className="py-4 text-gray-900">{product.stock}</td>
              <td className="py-4">
                <div className="w-12 h-6 bg-green-100 rounded-full flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 ml-1"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* Sample Data */
const stats = [
  { title: "Orders", value: "8,421", icon: Package, bgColor: "bg-green-100", iconColor: "green" },
  { title: "Revenue", value: "$2,103", icon: ShoppingBag, bgColor: "bg-blue-100", iconColor: "blue" },
  { title: "Views", value: "10,732", icon: Eye, bgColor: "bg-purple-100", iconColor: "purple" },
];

const monthlyData = [1200, 900, 1800, 2000, 1700, 1600, 1900];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const products = [
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    name: "Smart Watch",
    views: 1500,
    orders: 120,
    price: "$120",
    stock: "12 pcs",
  },
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    name: "Headphones",
    views: 1300,
    orders: 90,
    price: "$90",
    stock: "8 pcs",
  },
];

export default App;