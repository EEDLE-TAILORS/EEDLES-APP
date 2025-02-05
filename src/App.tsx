import React from 'react';
import {
  LayoutDashboard,
  Package,
  PackageCheck,
  PackageSearch,
  MapPin,
  MessageSquare,
  Bell,
  Settings,
  Search,
  Eye,
  ShoppingBag
} from 'lucide-react';

/* 1. Sidebar */
const Sidebar = () => (
  <aside className="w-64 bg-[#1e2a4a] text-white p-6 fixed h-full">
    <h1 className="text-2xl font-bold mb-10">EEDLES</h1>
    <nav className="space-y-6">
      <a href="#" className="flex items-center space-x-3 bg-[#e74c78] px-4 py-2 rounded-lg">
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-2 opacity-60 hover:opacity-100">
        <Package size={20} />
        <span>Order</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-2 opacity-60 hover:opacity-100">
        <MapPin size={20} />
        <span>Track</span>
      </a>
      <a href="#" className="flex items-center space-x-3 px-4 py-2 opacity-60 hover:opacity-100">
        <MessageSquare size={20} />
        <span>Message</span>
      </a>
    </nav>
  </aside>
);

/* 2. Header */
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

/* 3. Stats Card */
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

/* 5. Simple Line Chart Visualization */
const LineChart = ({ data, width = 100, height = 200 }) => {
  const maxData = Math.max(...data);
  const pathD = data.reduce((acc, value, index) => {
    const x = (index * (width / (data.length - 1)));
    const y = height - (value / maxData * height);
    return index === 0 ? `M ${x} ${y}` : acc + ` L ${x} ${y}`;
  }, '');
  return (
    <svg width="100%" height={height}>
      <path d={pathD} fill="none" stroke="#e74c78" strokeWidth="2" />
    </svg>
  );
};

/* 6. Total Sales (Circular Chart) */
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
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-3xl font-bold">+{percentage}%</p>
        <p className="text-sm text-gray-500">Total sales increase</p>
      </div>
    </div>
  );
};

/* 7. Product Table (with Product Row) */
const ProductRow = ({ image, name, views, orders, price, stock }) => (
  <tr className="border-b">
    <td className="py-4 pl-6">
      <input type="checkbox" className="rounded border-gray-300" />
    </td>
    <td className="py-4">
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-12 h-12 object-cover rounded" />
        <span className="font-medium text-gray-900">{name}</span>
      </div>
    </td>
    <td className="py-4 text-gray-600">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Eye size={16} />
          <span>{views}</span>
        </div>
        <div className="flex items-center space-x-1">
          <ShoppingBag size={16} />
          <span>{orders}</span>
        </div>
      </div>
    </td>
    <td className="py-4 text-gray-900 font-medium">{price}</td>
    <td className="py-4 text-gray-900">{stock}</td>
    <td className="py-4">
      <div className="w-12 h-6 bg-green-100 rounded-full flex items-center">
        <div className="w-5 h-5 rounded-full bg-green-500 ml-1"></div>
      </div>
    </td>
  </tr>
);

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
            <ProductRow key={index} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* 4. Charts Container (combining line chart & total sales) */
const ChartsSection = ({ monthlyData, months }) => (
  <div className="grid grid-cols-3 gap-6 mb-8">
    {/* Simple Line Chart Visualization */}
    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Total Orders</h3>
        <select className="px-3 py-1 border rounded-md text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="h-64 relative">
        <LineChart data={monthlyData} width={100} height={200} />
        <div className="flex justify-between mt-4">
          {months.map((month, idx) => (
            <span key={idx} className="text-xs text-gray-500">{month}</span>
          ))}
        </div>
      </div>
    </div>
    {/* Total Sales */}
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-6">Total Sales</h3>
      <div className="flex justify-center items-center h-64">
        <TotalSales percentage={74} />
      </div>
    </div>
  </div>
);

/* Main App Component */
function App() {
  const monthlyData = [200, 300, 250, 600, 550, 450, 500, 400, 450, 650, 800, 750];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      name: 'T-Shirt "BIG Stripe" Combed 24s',
      views: 116,
      orders: 26,
      price: "Rp89.900",
      stock: 180,
    },
    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      name: 'Hoodie "Cool Vibes"',
      views: 250,
      orders: 50,
      price: "Rp120.000",
      stock: 90,
    },
    // Add more products as needed
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Header />
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={Package}
            title="Order Taken"
            value="10"
            bgColor="bg-pink-100"
            iconColor="pink"
          />
          <StatsCard
            icon={PackageSearch}
            title="Order Processing"
            value="08"
            bgColor="bg-purple-100"
            iconColor="purple"
          />
          <StatsCard
            icon={PackageCheck}
            title="Order Delivered"
            value="20"
            bgColor="bg-green-100"
            iconColor="green"
          />
        </div>
        {/* Charts Section */}
        <ChartsSection monthlyData={monthlyData} months={months} />
        {/* Product Table */}
        <ProductTable products={products} />
      </main>
    </div>
  );
}

export default App;